import React from "react";
const about = { image: "flex-ui-assets/logos/aboutus.webp" };
export const About = () => {
  return (
    <div id="about">
      <section className="py-24 md:pb-28 text-coolGray-900 dark:text-white">
        <div className="container px-4 mx-auto">
          <div data-aos="fade-up" className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
              <div className="relative transition-all h-full overflow-hidden max-w-max mx-auto rounded-md">
                <img
                  src={about.image}
                  alt="image"
                  className="cursor-pointer transition ease-in-out hover:scale-125 duration-700"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <span className="inline-block py-px px-2 sm:ml-6 md:mb-16 text-xs leading-5 text-coolGray-900 dark:text-white bg-yellow-500 font-medium uppercase rounded-9xl">
                About Us
              </span>
              <div className="relative pt-12 pb-6 sm:p-6 mb-8">
                <img
                  className="absolute top-0 left-0"
                  src="flex-ui-assets/elements/testimonials/quote-top-yellow.svg"
                  alt="img"
                />
                <img
                  className="absolute bottom-0 right-0"
                  src="flex-ui-assets/elements/testimonials/quote-down-yellow.svg"
                  alt="img"
                />
                <div className="relative">
                  <h2 className="text-2xl md:text-4xl font-semibold tracking-tighter">
                    ພວກເຮົາໃຫ້ບໍລິການເວັບອີຄອມເມີສທີ່ປະສົມປະສານທີ່ລົງໂຕກັບຮ້ານຄ້າອອຟລາຍ
                    ແລະ
                    ຊຸກຍູ້ເຄື່ອງມືການຕະຫຼາດດິຈິຕອນເພື່ອໃຫ້ຍີ່ຫໍ້ຂອງທ່ານມິຄວາມປະທັບໃຈໃນຄັ້ງທໍາອິດ
                    ເຊິ່ງຈະສ້າງການເຂົ້າເຖິງໄດ້ຫຼາຍໂດຍບໍ່ຈຳເປັນຕ້ອງຄວາມພະຍາຍາມຫຼາຍ.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
