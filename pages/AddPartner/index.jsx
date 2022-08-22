import React, { useState, useRef, useEffect } from "react";
import { MdDelete, MdEditNote } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import LoadingPage from "../../elements/LoadingPage/LoadingPage";
import "react-toastify/dist/ReactToastify.css";
import ModalDialog from "../../components/ModalDialog";
import ReactPaginate from "react-paginate";
const AddPartner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [search, setSearch] = useState("");
  const [onUpdate, setOnUpdate] = useState("");
  const [pageCount, setpageCount] = useState(0);
  const [partner, setPartner] = useState([]);
  const [validate, setValidate] = useState("");
  const [name, setName] = useState("");
  const [users, setUsers] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [isLoadingDel, setIsLoadingDel] = useState(false);
  const refName = useRef();
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
        `http://inventory.localhost:8000/api/ecomm/admin/partners/?page=1&_limit=${limit}`,
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
        setPartner(result.data);
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
          toast.error(`ມີບາງຢ່າງຜິດພາດ : ${err}`, toastOption);
        }
      });
  };
  const fetchComments = async (currentPage) => {
    token = localStorage?.getItem("token_access");
    token_access = JSON.parse(token);
    const res = await axios
      .get(
        `http://inventory.localhost:8000/api/ecomm/admin/partners/?page=${currentPage}&_limit=${limit}`,
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
    setPartner(commentsFormServer);
  };
  const Clear = () => {
    setName("");
    setSearch("");
    setUsers("");
    setOnUpdate("");
    setValidate("");
    setDeleteId("");
    refName.current?.focus();
  };
  const DeleteData = async () => {
    token = localStorage?.getItem("token_access");
    token_access = JSON.parse(token);
    if (deleteId === "") {
      toast.error(`ບໍ່ພົບ id ທີ່ທ່ານຕ້ອງກາລົບ !`, toastOption);
    } else {
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
            toast.error(`ສິດທິຜູ້ໃຊ້ບໍ່ຖືກຕ້ອງ !`, toastOption);
          } else if (err.response.status === 500) {
            toast.error(`ເຊີບເວີບໍ່ຕອບສະໜອງ`, toastOption);
          } else {
            toast.error(`ມີບາງຢ່າງຜິດພາດ :  ${err}`, toastOption);
          }
        });
    }
  };
  const ManageData = async () => {
    if (name === "") {
      setValidate("Name ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້ !");
      refName.current?.focus();
    } else {
      token = localStorage?.getItem("token_access");
      token_access = JSON.parse(token);
      if (onUpdate === "") {
        setLoading(true);
        axios
          .post(
            "http://inventory.localhost:8000/api/ecomm/admin/partners/",
            {
              name: name,
              users: ["http://pos.localhost:8000/api/ecomm/users/1/"],
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
              name: name,
              users: users,
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
      }
    }
  };
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
          <div className="font-bold text-2xl">Add Partner</div>
          <div className="w-full p-1 shadow-md bg-white rounded-sm">
            <p className="text-white mb-2 p-2 bg-black rounded-sm">
              Create new partner
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
                  } border outline-none rounded-md w-full p-2`}
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  value={name}
                  ref={refName}
                />
              </div>
            </div>
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
                    className="block p-2 pl-8 w-full rounded-md border border-gray-400 outline-none"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Users</th>
                      <th>Address</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partner?.results
                      ?.filter((itm) =>
                        itm.name.toUpperCase().includes(search.toUpperCase())
                      )
                      .map((part, key) => (
                        <tr key={key}>
                          <td>{part.name}</td>
                          <td>
                            <a
                              className="underline text-blue-500"
                              href={part.users}
                              target="_blank"
                            >
                              {part.users}
                            </a>
                          </td>
                          <td>UnKnown</td>
                          <td>
                            <div className="flex justify-start">
                              <MdEditNote
                                color="green"
                                size={30}
                                className="cursor-pointer mr-2"
                                onClick={() => {
                                  setName(part.name);
                                  setOnUpdate(part.url);
                                  setUsers(part.users);
                                  refName.current?.focus();
                                  setValidate("");
                                }}
                              />
                              <MdDelete
                                color="red"
                                size={27}
                                className="cursor-pointer"
                                onClick={() => {
                                  setDeleteId(part.url);
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

export default AddPartner;
