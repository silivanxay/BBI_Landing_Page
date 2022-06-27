import Document, { Html, Head, Main, NextScript } from 'next/document';
import Background from '../components/Darkmode/Background';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="flex-ui-assets/logos/bamboobi.png"
          />
        </Head>
        <Background>
          <Main />
          <NextScript />
        </Background>
      </Html>
    );
  }
}

export default MyDocument;
