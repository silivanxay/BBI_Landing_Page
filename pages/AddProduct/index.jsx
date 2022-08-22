import React, { useState, useRef, useEffect } from "react";
import { MdDelete, MdEditNote, MdCheck } from "react-icons/md";
import axios from "axios";
import { format } from "date-fns";
import NumberFormat from "react-number-format";
import { ToastContainer, toast } from "react-toastify";
import LoadingPage from "../../elements/LoadingPage/LoadingPage";
import "react-toastify/dist/ReactToastify.css";
import ModalDialog from "../../components/ModalDialog";
import ReactPaginate from "react-paginate";
const AddProduct = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const [section, setSection] = useState("0");
  const [isPublic, setIsPublic] = useState(true);
  const [isDisable, setIsDisable] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  const [isDeleteStock, setIsDeleteStock] = useState(false);
  const [name, setName] = useState("");
  const [upc, setUpc] = useState("");
  const [product, setProduct] = useState([]);
  const [partnerItem, setPartnerItem] = useState([]);
  const [category, setCategory] = useState("ກະລຸນາເລືອກ");
  const [productType, setProductType] = useState("ກະລຸນາເລືອກ");
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [file, setFile] = useState(null);
  const [partner, setPartner] = useState("ກະລຸນາເລືອກ");
  const [sku, setSKU] = useState("");
  const [numinstock, setNuminstock] = useState("");
  const [lowinstock, setLowinstock] = useState("");
  const [currency, setCurrency] = useState("LAK");
  const [price, setPrice] = useState("");
  const [slug, setSlug] = useState("");
  const [metatitle, setMetaTitle] = useState("");
  const [metadescription, setMetaDescription] = useState("");
  const [numallocated, setNumAllocated] = useState("0");
  const [validate, setValidate] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [categoryItem, setCategoryItem] = useState([]);
  const [productTypeItem, setProductTypeItem] = useState([]);
  const [onUpdate, setOnUpdate] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoadingDel, setIsLoadingDel] = useState(false);
  const [search, setSearch] = useState("");
  const [pageCount, setpageCount] = useState(0);
  const refName = useRef();
  const refCurrency = useRef();
  const refSlug = useRef();
  let limit = 10;
  let token = "";
  let token_access = "";
  const toastOption = {
    autoClose: 2000,
    pauseOnHover: true,
    position: "top-center",
  };
  const loadingData = async () => {
    token = localStorage?.getItem("token_access");
    token_access = JSON.parse(token);
    setIsLoading(true);
    await axios
      .get(
        `http://inventory.localhost:8000/api/ecomm/admin/products/?page=1&_limit=${limit}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token_access?.access,
          },
          // auth: {
          //   username: process.env.APP_USERNAME,
          //   password: process.env.APP_PASSWORD,
          // },
        }
      )
      .then((result) => {
        setpageCount(Math.ceil(result.data?.count / limit));
        setProduct(result.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          toast.error(`ສິດທິຜູ້ໃຊ້ບໍ່ຖືກຕ້ອງ !`, toastOption);
        } else if (err.response.status === 404) {
          toast.error(`ບໍ່ພົບຂໍ້ມູນ Not Found`, toastOption);
        } else if (err.response.status === 500) {
          toast.error(`ເຊີບເວີບໍ່ຕອບສະໜອງ`, toastOption);
        } else {
          toast.error(`ມີບາງຢ່າງຜິດພາດ :  ${err}`, toastOption);
          console.log(err);
        }
      });
  };
  const fetchComments = async (currentPage) => {
    token = localStorage?.getItem("token_access");
    token_access = JSON.parse(token);
    const res = await axios
      .get(
        `http://inventory.localhost:8000/api/ecomm/admin/products/?page=${currentPage}&_limit=${limit}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token_access?.access,
          },
          // auth: {
          //   username: process.env.APP_USERNAME,
          //   password: process.env.APP_PASSWORD,
          // },
        }
      )
      .catch((err) => {
        toast.error(`ມີບາງຢ່າງຜິດພາດ :  ${err}`, toastOption);
      });
    return res.data;
  };
  const loadingCategory = async () => {
    token = localStorage?.getItem("token_access");
    token_access = JSON.parse(token);
    await axios
      .get("http://inventory.localhost:8000/api/ecomm/admin/categories/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token_access?.access,
        },
        // auth: {
        //   username: process.env.APP_USERNAME,
        //   password: process.env.APP_PASSWORD,
        // },
      })
      .then((result) => {
        setCategoryItem(result.data);
      });
  };
  const loadingPartner = async () => {
    token = localStorage?.getItem("token_access");
    token_access = JSON.parse(token);
    await axios
      .get("http://inventory.localhost:8000/api/ecomm/admin/partners/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token_access?.access,
        },
        // auth: {
        //   username: process.env.APP_USERNAME,
        //   password: process.env.APP_PASSWORD,
        // },
      })
      .then((result) => {
        setPartnerItem(result.data);
      });
  };
  const loadingProductclasses = async () => {
    token = localStorage?.getItem("token_access");
    token_access = JSON.parse(token);
    await axios
      .get("http://inventory.localhost:8000/api/ecomm/admin/productclasses/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token_access?.access,
        },
        // auth: {
        //   username: process.env.APP_USERNAME,
        //   password: process.env.APP_PASSWORD,
        // },
      })
      .then((result) => {
        setProductTypeItem(result.data);
      });
  };
  const Clear = () => {
    setSection("0");
    setIsPublic(true);
    setIsDisable(true);
    setIsDelete(false);
    setIsDeleteStock(false);
    setName("");
    setUpc("");
    setSearch("");
    setCategory("ກະລຸນາເລືອກ");
    setProductType("ກະລຸນາເລືອກ");
    setImage([]);
    setImgUrl([]);
    setFile(null);
    setPartner("ກະລຸນາເລືອກ");
    setSKU("");
    setNuminstock("");
    setLowinstock("");
    setCurrency("LAK");
    setPrice("");
    setSlug("");
    setMetaTitle("");
    setMetaDescription("");
    setNumAllocated("0");
    setValidate("");
    setDescription("");
    setOnUpdate("");
    refName.current?.focus();
  };
  const ManageData = async () => {
    if (name === "") {
      setValidate("Name ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("0");
      refName.current?.focus();
    } else if (upc === "") {
      setValidate("UPC ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("0");
      // refUpc.current.focus();
    } else if (category === "ກະລຸນາເລືອກ") {
      setValidate("Category ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("1");
    } else if (productType === "ກະລຸນາເລືອກ") {
      setValidate("Product Type ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("1");
    } else if (file === null) {
      setValidate("ກະລຸນາເລືອກ file !");
      setSection("2");
    } else if (partner === "ກະລຸນາເລືອກ") {
      setValidate("Partner ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("3");
    } else if (sku === "") {
      setValidate("SKU ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("3");
    } else if (numinstock === "") {
      setValidate("Num in stock ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("3");
    } else if (lowinstock === "") {
      setValidate("Low stock threshold ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("3");
    } else if (currency === "") {
      setValidate("Currency ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("3");
    } else if (price === "") {
      setValidate("Price ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("3");
    } else if (slug === "") {
      setValidate("Slug ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("4");
      refSlug.current?.focus();
    } else {
      token = localStorage?.getItem("token_access");
      token_access = JSON.parse(token);
      if (onUpdate === "") {
        setLoading(true);
        const formData = new FormData();
        formData.append("image", file);
        formData.append("fileName", file.name);
        await axios
          .post(
            "http://localhost:5000/noyvilaijid/api/images/upload",
            formData,
            {
              headers: {
                "content-type": "multipart/form-data",
              },
            }
          )
          .then((respone) => {
            axios
              .post(
                "http://inventory.localhost:8000/api/ecomm/admin/products/",
                {
                  categories: [category],
                  product_class: productType,
                  stockrecords: [
                    {
                      partner_sku: sku,
                      price_currency: currency,
                      price: price,
                      num_in_stock: numinstock,
                      num_allocated: numallocated,
                      low_stock_threshold: lowinstock,
                      partner: partner,
                    },
                  ],
                  images: [
                    {
                      original: `http://localhost:5000/noyvilaijid/api/uploads/${respone.data[0].url}`,
                      caption: "",
                      display_order: 0,
                    },
                  ],
                  structure: "standalone",
                  is_public: isPublic,
                  upc: upc,
                  title: name,
                  slug: slug,
                  description: description,
                  meta_title: metatitle,
                  meta_description: metadescription,
                  is_discountable: isDeleteStock,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token_access?.access,
                  },
                  // auth: {
                  //   username: process.env.APP_USERNAME,
                  //   password: process.env.APP_PASSWORD,
                  // },
                }
              )
              .then(() => {
                setLoading(false);
                loadingData();
                Clear();
                toast.success("ບັນທືກກສຳເລັດ ! ", toastOption);
              })
              .catch((err) => {
                setLoading(false);
                if (err.response.status === 403) {
                  toast.error(`ສິດທິຜູ້ໃຊ້ບໍ່ຖືກຕ້ອງ !`, toastOption);
                } else if (err.response.status === 500) {
                  toast.error(`ເຊີບເວີບໍ່ຕອບສະໜອງ`, toastOption);
                } else if (err.response.status === 400) {
                  toast.error(`ມີບາງຢ່າງຜິດພາດ`, toastOption);
                } else {
                  toast.error(`ມີບາງຢ່າງຜິດພາດ:  ${err}`, toastOption);
                }
              });
          })
          .catch((err) => {
            toast.error(`ມີບາງຢ່າງຜິດພາດ:  ${err}`, toastOption);
            setLoading(false);
          });
      } else {
        setLoading(true);
        if (image.length === 0) {
          await axios
            .put(
              `http://inventory.localhost:8000/api/ecomm/admin/products/${onUpdate}/`,
              {
                categories: [category],
                product_class: productType,
                stockrecords: [
                  {
                    partner_sku: sku,
                    price_currency: currency,
                    price: price,
                    num_in_stock: numinstock,
                    num_allocated: numallocated,
                    low_stock_threshold: lowinstock,
                    partner: partner,
                  },
                ],
                images: [
                  {
                    original: `${file}`,
                    caption: "",
                    display_order: 0,
                  },
                ],
                structure: "standalone",
                is_public: isPublic,
                upc: upc,
                title: name,
                slug: slug,
                description: description,
                meta_title: metatitle,
                meta_description: metadescription,
                is_discountable: isDisable,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + token_access?.access,
                },
                // auth: {
                //   username: process.env.APP_USERNAME,
                //   password: process.env.APP_PASSWORD,
                // },
              }
            )
            .then(() => {
              setLoading(false);
              loadingData();
              Clear();
              toast.success("ອັບເດດສຳເລັດ ! ", toastOption);
            })
            .catch((err) => {
              setLoading(false);
              if (err.response.status === 403) {
                toast.error(`ສິດທິຜູ້ໃຊ້ບໍ່ຖືກຕ້ອງ !`, toastOption);
              } else if (err.response.status === 500) {
                toast.error(`ເຊີບເວີບໍ່ຕອບສະໜອງ`, toastOption);
              } else if (err.response.status === 400) {
                toast.error(`ມີບາງຢ່າງຜິດພາດ`, toastOption);
                console.log(err.response.data);
              } else {
                toast.error(`ມີບາງຢ່າງຜິດພາດ :  ${err}`, toastOption);
              }
            });
        } else {
          const formData = new FormData();
          formData.append("image", file);
          formData.append("fileName", file.name);
          await axios
            .post(
              "http://localhost:5000/noyvilaijid/api/images/upload",
              formData,
              {
                headers: {
                  "content-type": "multipart/form-data",
                },
              }
            )
            .then((respone) => {
              axios
                .put(
                  `http://inventory.localhost:8000/api/ecomm/admin/products/${onUpdate}/`,
                  {
                    categories: [category],
                    product_class: productType,
                    stockrecords: [
                      {
                        partner_sku: sku,
                        price_currency: currency,
                        price: price,
                        num_in_stock: numinstock,
                        num_allocated: numallocated,
                        low_stock_threshold: lowinstock,
                        partner: partner,
                      },
                    ],
                    images: [
                      {
                        original: `http://localhost:5000/noyvilaijid/api/uploads/${respone.data[0].url}`,
                        caption: "",
                        display_order: 0,
                      },
                    ],
                    structure: "standalone",
                    is_public: isPublic,
                    upc: upc,
                    title: name,
                    slug: slug,
                    description: description,
                    meta_title: metatitle,
                    meta_description: metadescription,
                    is_discountable: isDisable,
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + token_access?.access,
                    },
                    // auth: {
                    //   username: process.env.APP_USERNAME,
                    //   password: process.env.APP_PASSWORD,
                    // },
                  }
                )
                .then(() => {
                  Clear();
                  setLoading(false);
                  loadingData();
                  toast.success("ອັບເດດສຳເລັດ ! ", toastOption);
                })
                .catch((err) => {
                  setLoading(false);
                  if (err.response.status === 403) {
                    toast.error(`ສິດທິຜູ້ໃຊ້ບໍ່ຖືກຕ້ອງ !`, toastOption);
                  } else if (err.response.status === 500) {
                    toast.error(`ເຊີບເວີບໍ່ຕອບສະໜອງ`, toastOption);
                  } else if (err.response.status === 400) {
                    toast.error(`ມີບາງຢ່າງຜິດພາດ`, toastOption);
                  } else {
                    toast.error(`ມີບາງຢ່າງຜິດພາດ :  ${err}`, toastOption);
                  }
                });
            })
            .catch((err) => {
              toast.error(`ມີບາງຢ່າງຜິດພາດ :  ${err}`, toastOption);
              setLoading(false);
            });
        }
      }
    }
  };
  function onImageChange(e) {
    setShowImage(false);
    setImage([...e.target.files]);
    setFile(e.target.files[0]);
  }
  useEffect(() => {
    if (image.length < 1) return;
    const newimageUrl = [];
    image.forEach((img) => newimageUrl.push(URL.createObjectURL(img)));
    setImgUrl(newimageUrl);
  }, [image]);
  useEffect(() => {
    refName.current?.focus();
    loadingData();
    loadingCategory();
    loadingPartner();
    loadingProductclasses();
  }, [limit]);
  const DeleteData = async () => {
    token = localStorage?.getItem("token_access");
    token_access = JSON.parse(token);
    if (deleteId === "") {
      toast.error(`ບໍ່ພົບ id ທີ່ທ່ານຕ້ອງກາລົບ !`, toastOption);
    } else {
      setIsLoadingDel(true);
      await axios
        .delete(
          `http://inventory.localhost:8000/api/ecomm/admin/products/${deleteId}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token_access?.access,
            },
            // auth: {
            //   username: process.env.APP_USERNAME,
            //   password: process.env.APP_PASSWORD,
            // },
          }
        )
        .then(() => {
          setDeleteId("");
          setIsLoadingDel(false);
          setModalAdd(false);
          loadingData();
          Clear();
          toast.success("ລົບຂໍ້ມູນສຳເລັດ !", toastOption);
        })
        .catch((err) => {
          setIsLoadingDel(false);
          if (err.response.status === 403) {
            toast.error(`ສິດທິຜູ້ໃຊ້ບໍ່ຖືກຕ້ອງ !`, toastOption);
          } else if (err.response.status === 500) {
            toast.error(`ເຊີບເວີບໍ່ຕອບສະໜອງ`, toastOption);
          } else {
            toast.error(`ມີບາງຢ່າງຜິດພາດ :  ${err}`, toastOption);
          }
        });
    }
  };
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetchComments(currentPage);
    setProduct(commentsFormServer);
  };
  return (
    <div>
      <ToastContainer />
      {modalAdd && (
        <ModalDialog
          action="Del-Product"
          event={() => DeleteData()}
          onLoading={isLoadingDel}
          onClick={() => setModalAdd(false)}
        />
      )}
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="py-3 px-5 lg:px-32 w-full">
          <div className="font-bold text-2xl">Add Products</div>
          <div className="w-full p-1 shadow-md bg-white rounded-sm">
            <div className="mb-4 border-b border-gray-200">
              <ul className="flex flex-wrap -mb-px text-center">
                <li className="mr-2">
                  <button
                    className={`inline-block p-2 rounded-t-lg border-b-2 border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-600 ${
                      section === "0" ? "text-blue-600 border-blue-600" : ""
                    }`}
                    type="button"
                    onClick={() => setSection("0")}
                  >
                    Product details
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    className={`inline-block p-2 rounded-t-lg border-b-2 border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-600 ${
                      section === "1" ? "text-blue-600 border-blue-600" : ""
                    }`}
                    type="button"
                    onClick={() => setSection("1")}
                  >
                    Category
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    className={`inline-block p-2 rounded-t-lg border-b-2 border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-600 ${
                      section === "2" ? "text-blue-600 border-blue-600" : ""
                    }`}
                    type="button"
                    onClick={() => setSection("2")}
                  >
                    Upload Images
                  </button>
                </li>
                <li>
                  <button
                    className={`inline-block p-2 rounded-t-lg border-b-2 border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-600 ${
                      section === "3" ? "text-blue-600 border-blue-600" : ""
                    }`}
                    type="button"
                    onClick={() => setSection("3")}
                  >
                    Stock and pricing
                  </button>
                </li>
                <li>
                  <button
                    className={`inline-block p-2 rounded-t-lg border-b-2 border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-600 ${
                      section === "4" ? "text-blue-600 border-blue-600" : ""
                    }`}
                    type="button"
                    onClick={() => setSection("4")}
                  >
                    Search engine optimization
                  </button>
                </li>
              </ul>
            </div>
            {section === "0" ? (
              <>
                <p className="text-white mb-2 p-2 bg-black rounded-sm">
                  Product details
                </p>
                <div className="text-center text-red-500">{validate}</div>
                <div className="p-2">
                  <div className="mb-1">
                    <label
                      className={`block ${
                        validate === "Name ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      className={`${
                        validate === "Name ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } border outline-none rounded-md w-full p-1.5`}
                      autoFocus
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      value={name}
                      ref={refName}
                    />
                  </div>
                  <div className="mb-1">
                    <label
                      className={`block ${
                        validate === "UPC ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      UPC <span className="text-red-500">*</span>
                    </label>
                    <NumberFormat
                      maxLength="30"
                      value={upc}
                      onValueChange={(e) => {
                        setUpc(e.value);
                      }}
                      className={`${
                        validate === "UPC ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } border outline-none rounded-md w-full p-1.5`}
                      type="text"
                      thousandSeparator={false}
                      inputMode="numeric"
                    />
                    <div className="text-sm text-darkCoolGray-400">
                      Universal Product Code (UPC) is an identifier for a
                      product which is not specific to a particular supplier. Eg
                      an ISBN for a book.
                    </div>
                  </div>
                  <div className="mb-1">
                    <label className="block text-black">Description</label>
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      value={description}
                      rows="3"
                      className="border outline-none rounded-md w-full p-1.5"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        onChange={(e) => setIsPublic(e.target.checked)}
                        checked={isPublic}
                        className="w-4 h-4 cursor-pointer bg-gray-50 rounded border border-gray-500"
                      />
                    </div>
                    <label className="ml-2 text-gray-900">Is public</label>
                  </div>
                  <div className="text-sm text-darkCoolGray-400 mb-1">
                    Show this product in search results and catalogue listings.
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        onChange={(e) => setIsDisable(e.target.checked)}
                        checked={isDisable}
                        className="w-4 cursor-pointer h-4 bg-gray-50 rounded border border-gray-500"
                      />
                    </div>
                    <label className="ml-2 text-gray-900">
                      Is discountable?
                    </label>
                  </div>
                  <div className="text-sm text-darkCoolGray-400">
                    This flag indicates if this product can be used in an offer
                    or not
                  </div>
                </div>
              </>
            ) : section === "1" ? (
              <>
                <p className="text-white mb-2 p-2 bg-black rounded-sm">
                  Category & Product Type
                </p>
                <div className="text-center text-red-500">{validate}</div>
                <div className="p-2">
                  <div className="mb-1">
                    <label
                      className={`block ${
                        validate === "Category ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className={`${
                        validate === "Category ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } p-1.5 border cursor-pointer outline-none border-gray-300 bg-gray-50 rounded-md w-full font-normal text-base`}
                    >
                      <option disabled>ກະລຸນາເລືອກ</option>
                      {categoryItem.results?.map((cat, key) => (
                        <option key={key}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-1">
                    <label
                      className={`block ${
                        validate === "Product Type ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Product Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={productType}
                      onChange={(e) => setProductType(e.target.value)}
                      className={`${
                        validate === "Product Type ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } p-1.5 border cursor-pointer outline-none border-gray-300 bg-gray-50 rounded-md w-full font-normal text-base`}
                    >
                      <option disabled>ກະລຸນາເລືອກ</option>
                      {productTypeItem.results?.map((cat, key) => (
                        <option key={key}>{cat.slug}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          onChange={(e) => setIsDelete(e.target.checked)}
                          checked={isDelete}
                          className="w-4 cursor-pointer h-4 bg-gray-50 rounded border border-gray-500"
                        />
                      </div>
                      <label className="ml-2 text-gray-900">: Delete</label>
                    </div>
                  </div>
                </div>
              </>
            ) : section === "2" ? (
              <>
                <p className="text-white mb-2 p-2 bg-black rounded-sm">
                  Upload Images
                </p>
                <div className="text-center text-red-500">{validate}</div>
                <div className="p-2">
                  <div className="mb-1">
                    <label
                      className={`block ${
                        validate === "ກະລຸນາເລືອກ file !" ? "text-red-500" : ""
                      }`}
                    >
                      Image <span className="text-red-500">*</span>
                    </label>
                    <input
                      className={`${
                        validate === "ກະລຸນາເລືອກ file !"
                          ? "border-red-500"
                          : ""
                      } block text-base w-full text-gray-900 rounded-sm border cursor-pointer`}
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={onImageChange}
                    />
                    <label>
                      {showImage === false
                        ? image.length < 1
                          ? ""
                          : `Currently: ${image[0]?.name}`
                        : `Currently: ${file}`}
                    </label>
                    <div>
                      {showImage === false ? (
                        imgUrl.map((e, key) => (
                          <img width={200} key={key} src={e} alt="img" />
                        ))
                      ) : (
                        <img width={200} src={file} alt="img" />
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : section === "3" ? (
              <>
                <p className="text-white mb-2 p-2 bg-black rounded-sm">
                  Stock and pricing
                </p>
                <div className="text-center text-red-500">{validate}</div>
                <div className="grid p-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label
                      className={`block ${
                        validate === "Partner ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Partner <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={partner}
                      onChange={(e) => setPartner(e.target.value)}
                      className={`${
                        validate === "Partner ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } p-1.5  border cursor-pointer outline-none border-gray-300 bg-gray-50 rounded-md w-full font-normal text-base`}
                    >
                      <option disabled>ກະລຸນາເລືອກ</option>
                      {partnerItem.results?.map((part, key) => (
                        <option value={part.url} key={key}>
                          {part.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className={`block ${
                        validate === "SKU ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      SKU <span className="text-red-500">*</span>
                    </label>
                    <NumberFormat
                      maxLength="15"
                      value={sku}
                      onValueChange={(e) => {
                        setSKU(e.value);
                      }}
                      className={`${
                        validate === "SKU ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } border outline-none rounded-md w-full p-1.5`}
                      type="text"
                      thousandSeparator={false}
                      inputMode="numeric"
                    />
                  </div>
                  <div>
                    <label
                      className={`block ${
                        validate === "Num in stock ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Num in stock
                      <span className="text-red-500">*</span>
                    </label>
                    <NumberFormat
                      maxLength="10"
                      value={numinstock}
                      onValueChange={(e) => {
                        setNuminstock(e.value);
                      }}
                      className={`${
                        validate === "Num in stock ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } border outline-none rounded-md w-full p-1.5`}
                      type="text"
                      thousandSeparator={true}
                      inputMode="numeric"
                    />
                  </div>
                  <div>
                    <label
                      className={`block ${
                        validate ===
                        "Low stock threshold ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Low stock threshold{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <NumberFormat
                      maxLength="10"
                      value={lowinstock}
                      onValueChange={(e) => {
                        setLowinstock(e.value);
                      }}
                      className={`${
                        validate ===
                        "Low stock threshold ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } border outline-none rounded-md w-full p-1.5`}
                      type="text"
                      thousandSeparator={true}
                      inputMode="numeric"
                    />
                  </div>
                  <div>
                    <label
                      className={`block ${
                        validate === "Currency ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Currency <span className="text-red-500">*</span>
                    </label>
                    <input
                      className={`${
                        validate === "Currency ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } border outline-none rounded-md w-full p-1.5 uppercase`}
                      onChange={(e) => setCurrency(e.target.value)}
                      type="text"
                      value={currency}
                      ref={refCurrency}
                    />
                  </div>
                  <div>
                    <label
                      className={`block ${
                        validate === "Price ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Price <span className="text-red-500">*</span>
                    </label>
                    <NumberFormat
                      maxLength="15"
                      value={price}
                      onValueChange={(e) => {
                        setPrice(e.value);
                      }}
                      className={`${
                        validate === "Price ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } border outline-none rounded-md w-full p-1.5`}
                      type="text"
                      thousandSeparator={true}
                      inputMode="numeric"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start lg:w-52">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          onChange={(e) => setIsDeleteStock(e.target.checked)}
                          checked={isDeleteStock}
                          className="w-4 cursor-pointer h-4 bg-gray-50 rounded border border-gray-500"
                        />
                      </div>
                      <label className="ml-2 text-gray-900">: Delete</label>
                    </div>
                    <div>
                      <label className="block">Num allocated</label>
                      <input
                        disabled
                        className={` border outline-none rounded-md w-full p-1.5`}
                        onChange={(e) => setNumAllocated(e.target.value)}
                        type="text"
                        value={numallocated}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-white mb-2 p-2 bg-black rounded-sm">
                  Search engine optimization
                </p>
                <div className="text-center text-red-500">{validate}</div>
                <div className="p-2">
                  <div className="mb-1">
                    <label
                      className={`block ${
                        validate === "Slug ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Slug <span className="text-red-500">*</span>
                    </label>
                    <input
                      className={`${
                        validate === "Slug ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } border outline-none rounded-md w-full p-1.5 px-2`}
                      onChange={(e) => setSlug(e.target.value)}
                      type="text"
                      value={slug}
                      ref={refSlug}
                    />
                    <div className="text-sm text-darkCoolGray-400">
                      Leave blank to generate from category name
                    </div>
                  </div>
                  <div className="mb-1">
                    <label className={`block`}>Meta tile</label>
                    <input
                      className={`border outline-none rounded-md w-full p-1.5 px-2`}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      type="text"
                      value={metatitle}
                    />
                  </div>
                  <div className="mb-1">
                    <label className="block text-black">Meta description</label>
                    <textarea
                      onChange={(e) => setMetaDescription(e.target.value)}
                      type="text"
                      value={metadescription}
                      rows="3"
                      className="border outline-none rounded-md w-full p-1.5 px-2"
                    />
                  </div>
                </div>
              </>
            )}
            <div className="p-2 flex">
              <button
                disabled={loading ? true : false}
                type="button"
                onClick={() => ManageData()}
                className={`
                ${loading ? "cursor-not-allowed disabled:opacity-50" : ""}
                ${
                  onUpdate === ""
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white flex mr-2 outline-none rounded-lg px-2 py-2 text-center`}
              >
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-6 h-6 animate-spin text-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : null}
                {onUpdate === "" ? "ບັນທືກຂໍ້ມູນ" : "ອັບເດດຂໍ້ມູນ"}
              </button>
              <button
                type="button"
                onClick={() => Clear()}
                className="text-white bg-red-500 hover:bg-red-600 outline-none rounded-lg px-5 p-2 text-center"
              >
                ລ້າງ
              </button>
            </div>
            <div className="p-2">
              <div className="bg-white mb-1">
                <label className="sr-only">Search</label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="block p-2 pl-2 w-full rounded-md border border-gray-400 outline-none"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                  <thead>
                    <tr>
                      <td>Title</td>
                      <th>UPC</th>
                      <th>Image</th>
                      <th>Product type</th>
                      <th>Variants</th>
                      <th>Price</th>
                      <th>Is public</th>
                      <th>Date updated</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product?.results
                      ?.filter(
                        (itm) =>
                          itm.title
                            .toUpperCase()
                            .includes(search.toUpperCase()) ||
                          itm.upc
                            .toString()
                            .toUpperCase()
                            .includes(search.toUpperCase())
                      )
                      .map((pro, key) => (
                        <tr key={key}>
                          <td className="text-base">{pro.title}</td>
                          <td className="text-base">{pro.upc}</td>
                          <td>
                            {
                              <img
                                className="rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-300"
                                width={50}
                                src={pro.images[0]?.original}
                                alt="img"
                              ></img>
                            }
                          </td>
                          <td className="text-base">{pro.categories}</td>
                          <td className="text-base">-</td>
                          <td className="text-base">
                            <NumberFormat
                              value={pro.stockrecords[0]?.price}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </td>
                          <td>
                            <MdCheck color="green" size={25} />
                          </td>
                          <td className="text-base">
                            {format(
                              new Date(pro.date_created),
                              "dd/MM/yyyy hh:mm a"
                            )}
                          </td>
                          <td>
                            <div className="flex justify-start">
                              <MdEditNote
                                color="green"
                                size={30}
                                className="cursor-pointer mr-2"
                                onClick={() => {
                                  setImage([]);
                                  setImgUrl([]);
                                  setOnUpdate(pro.id);
                                  setName(pro.title);
                                  setUpc(pro.upc);
                                  setDescription(pro.description);
                                  setCategory(pro.categories[0]);
                                  setProductType(pro.product_class);
                                  setFile(pro.images[0].original);
                                  setShowImage(true);
                                  setPartner(pro.stockrecords[0].partner);
                                  setSKU(pro.stockrecords[0].partner_sku);
                                  setNuminstock(
                                    pro.stockrecords[0].num_in_stock
                                  );
                                  setLowinstock(
                                    pro.stockrecords[0].low_stock_threshold
                                  );
                                  setCurrency(
                                    pro.stockrecords[0].price_currency
                                  );
                                  setPrice(pro.stockrecords[0].price);
                                  setSlug(pro.slug);
                                  setMetaTitle(pro.meta_title);
                                  setMetaDescription(pro.meta_description);
                                  setValidate("");
                                }}
                              />
                              <MdDelete
                                color="red"
                                size={27}
                                className="cursor-pointer"
                                onClick={() => {
                                  setDeleteId(pro.id);
                                  setModalAdd(true);
                                }}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-end"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
              {/* <span className="text-sm text-gray-700">
                  Showing <span className="font-semibold text-gray-900">1</span>{" "}
                  to{" "}
                  <span className="font-semibold text-gray-900">
                    {product.results?.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-gray-900">
                    {product.count}
                  </span>{" "}
                  Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button
                    onClick={() => {
                      if (page !== 1) {
                        setPage(page - 1);
                      }
                    }}
                    className="inline-flex items-center py-2 px-4 text-white bg-gray-800 rounded-l hover:bg-gray-900"
                  >
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Prev
                  </button>
                  <button
                    onClick={() => {
                      if (product.next !== null) {
                        setPage((prev) => prev + 1);
                      }
                    }}
                    className="inline-flex items-center py-2 px-4 text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900"
                  >
                    Next
                    <svg
                      aria-hidden="true"
                      className="ml-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AddProduct;
