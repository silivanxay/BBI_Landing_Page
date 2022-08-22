import React, { useState, useRef, useEffect } from "react";
import { MdDelete, MdEditNote, MdCheck, MdCancel } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import LoadingPage from "../../elements/LoadingPage/LoadingPage";
import "react-toastify/dist/ReactToastify.css";
import ModalDialog from "../../components/ModalDialog";
import ReactPaginate from "react-paginate";
const index = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [section, setSection] = useState("0");
  const [loading, setLoading] = useState(false);
  const [isPublic, setIsPublic] = useState(true);
  const [onUpdate, setOnUpdate] = useState("");
  const [validate, setValidate] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [metatitle, setMetaTitle] = useState("");
  const [metadescription, setMetaDescription] = useState("");
  const [position, setPosition] = useState("First child of");
  const [relativeto, setRelativeTo] = useState("-- root --");
  const [relativetoItem, setRelativeToItem] = useState([]);
  const [search, setSearch] = useState("");
  const [pageCount, setpageCount] = useState(0);
  const [deleteId, setDeleteId] = useState("");
  const [isLoadingDel, setIsLoadingDel] = useState(false);
  const refName = useRef();
  const refSlug = useRef();
  let token = "";
  let token_access = "";
  let limit = 10;
  const toastOption = {
    autoClose: 2000,
    pauseOnHover: true,
    position: "top-center",
  };
  function onImageChange(e) {
    setShowImage(false);
    setImage([...e.target.files]);
    setFile(e.target.files[0]);
  }
  const loadingData = async () => {
    token = localStorage?.getItem("token_access");
    token_access = JSON.parse(token);
    setIsLoading(true);
    await axios
      .get(
        `http://inventory.localhost:8000/api/ecomm/admin/categories/?page=1&_limit=${limit}`,
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
        setRelativeToItem(result.data);
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
        `http://inventory.localhost:8000/api/ecomm/admin/categories/?page=${currentPage}&_limit=${limit}`,
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
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetchComments(currentPage);
    setProduct(commentsFormServer);
  };
  const Clear = () => {
    setName("");
    setDescription("");
    setSlug("");
    setSearch("");
    setMetaTitle("");
    setMetaDescription("");
    setSection("0");
    setPosition("First child of");
    setRelativeTo("-- root --");
    setImage([]);
    setImgUrl([]);
    setFile(null);
    setOnUpdate("");
    setDeleteId("");
    refName.current?.focus();
  };
  const ManageData = async () => {
    if (name === "") {
      setValidate("Name ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("0");
      refName.current?.focus();
    } else if (position === "") {
      setValidate("Position ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("0");
    } else if (slug === "") {
      setValidate("Slug ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      setSection("1");
      refSlug.current?.focus();
    } else {
      token = localStorage?.getItem("token_access");
      token_access = JSON.parse(token);
      if (onUpdate === "") {
        setLoading(true);
        axios
          .post(
            "http://inventory.localhost:8000/api/ecomm/admin/categories/",
            {
              slug: slug,
              name: name,
              description: description,
              meta_title: metatitle,
              meta_description: metadescription,
              is_public: isPublic,
              ancestors_are_public: true,
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
      } else {
        setLoading(true);
        axios
          .put(
            `${onUpdate}`,
            {
              slug: slug,
              name: name,
              description: description,
              meta_title: metatitle,
              meta_description: metadescription,
              is_public: isPublic,
              ancestors_are_public: true,
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
              toast.error(`ມີບາງຢ່າງຜິດພາດ}`, toastOption);
            } else {
              toast.error(`ມີບາງຢ່າງຜິດພາດ: ${err}`, toastOption);
            }
          });
      }
    }
  };
  const DeleteData = async () => {
    if (deleteId === "") {
      toast.error(`ບໍ່ພົບ id ທີ່ທ່ານຕ້ອງກາລົບ !`, toastOption);
    } else {
      token = localStorage?.getItem("token_access");
      token_access = JSON.parse(token);
      setIsLoadingDel(true);
      await axios
        .delete(`${deleteId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token_access?.access,
          },
          // auth: {
          //   username: process.env.APP_USERNAME,
          //   password: process.env.APP_PASSWORD,
          // },
        })
        .then(() => {
          setIsLoadingDel(false);
          setModalAdd(false);
          loadingData();
          Clear();
          toast.success("ລົບຂໍ້ມູນສຳເລັດ !", toastOption);
        })
        .catch((err) => {
          setIsLoadingDel(false);
          if (err.response.status === 403) {
            toast.error(
              `ສິດທິຜູ້ໃຊ້ບໍ່ຖືກຕ້ອງ !`,
              toastOption
            );
          } else if (err.response.status === 500) {
            toast.error(
              `ເຊີບເວີບໍ່ຕອບສະໜອງ`,
              toastOption
            );
          } else {
            toast.error(`ມີບາງຢ່າງຜິດພາດ :  ${err}`, toastOption);
          }
        });
    }
  };
  useEffect(() => {
    if (image.length < 1) return;
    const newimageUrl = [];
    image.forEach((img) => newimageUrl.push(URL.createObjectURL(img)));
    setImgUrl(newimageUrl);
  }, [image]);
  useEffect(() => {
    refName.current?.focus();
    loadingData();
  }, [limit]);
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
          <div className="font-bold text-2xl">Add Category</div>
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
                <li>
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
              </ul>
            </div>
            {section === "0" ? (
              <>
                <p className="text-white mb-2 p-2 bg-black rounded-sm">
                  Category Details
                </p>
                <div className="text-center text-red-500">{validate}</div>
                <div className="grid p-2 -mb-7 gap-2 md:grid-cols-2">
                  <div className="mb-1">
                    <label
                      className={`block ${
                        validate === "Name ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Name <span className="text-red-500">*</span>
                    </label >
                    <input
                      className={`${
                        validate === "Name ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } border outline-none rounded-md w-full p-1.5 px-2`}
                      autoFocus
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      value={name}
                      ref={refName}
                    />
                    <div className="flex items-start mt-1">
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
                      Show this product in search results and catalogue
                      listings.
                    </div>
                  </div>
                  <div className="mb-1">
                    <label className="block text-black">Description</label>
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      value={description}
                      rows="3"
                      className="border outline-none rounded-md w-full p-1.5 px-2"
                    />
                  </div>
                </div>
                <div className="grid p-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
                  <div className="mb-1">
                    <label className={`block`}>Image</label>
                    <input
                      className={`block text-base w-full text-gray-900 rounded-md border cursor-pointer`}
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
                  <div className="mb-1">
                    <label
                      className={`block ${
                        validate === "Position ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Position <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className={`${
                        validate === "Position ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } select-sm select-bordered border cursor-pointer outline-none border-gray-300 bg-gray-50 rounded-md w-full font-normal text-base`}
                    >
                      <option>First child of</option>
                      <option>Before</option>
                      <option>After</option>
                    </select>
                  </div>
                  <div className="mb-1">
                    <label
                      className={`block ${
                        validate === "Position ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Relative to
                    </label>
                    <select
                      value={relativeto}
                      onChange={(e) => setRelativeTo(e.target.value)}
                      className={`${
                        validate === "Category ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !"
                          ? "border-red-500"
                          : ""
                      } border select-sm select-bordered cursor-pointer outline-none border-gray-300 bg-gray-50 rounded-md w-full font-normal text-base`}
                    >
                      <option>-- root --</option>
                      {relativetoItem.results?.map((cat, key) => (
                        <option key={key}>{cat.name}</option>
                      ))}
                    </select>
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
                      <td>Name</td>
                      <th>Description</th>
                      <th>Number of child categories</th>
                      <th>Is public</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {relativetoItem?.results
                      ?.filter((itm) =>
                        itm.name.toUpperCase().includes(search.toUpperCase())
                      )
                      .map((pro, key) => (
                        <tr key={key}>
                          <td className="text-base">{pro.name}</td>
                          <td className="text-base">{pro.description}</td>
                          <td className="text-base">{0}</td>
                          <td>
                            {pro.is_public === true ? (
                              <MdCheck color="green" size={25} />
                            ) : (
                              <MdCancel color="red" size={25} />
                            )}
                          </td>
                          <td>
                            <div className="flex justify-start">
                              <MdEditNote
                                color="green"
                                size={30}
                                className="cursor-pointer mr-2"
                                onClick={() => {
                                  // setImage([]);
                                  // setImgUrl([]);
                                  setOnUpdate(pro.url);
                                  setName(pro.name);
                                  setDescription(pro.description);
                                  // setFile(pro.images[0].original);
                                  // setShowImage(true);
                                  setSlug(pro.slug);
                                  setMetaTitle(pro.meta_title);
                                  setMetaDescription(pro.meta_description);
                                  setIsPublic(pro.is_public);
                                  setValidate("");
                                }}
                              />
                              <MdDelete
                                color="red"
                                size={27}
                                className="cursor-pointer"
                                onClick={() => {
                                  setDeleteId(pro.url);
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
