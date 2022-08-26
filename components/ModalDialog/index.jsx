import React from "react";
import { AiFillWarning } from "react-icons/ai";
const ModalDialog = (props) => {
  return (
    <div className="fixed bg-opacity-100 top-0 right-0 left-0 z-50 md:h-full justify-center items-center flex">
      <div className="relative bg-opacity-100 p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-md shadow-lg">
          <div className="p-4 border-b text-center text-2xl text-red-500">
            ຂໍ້ຄວາມແຈ້ງເຕືອນ
          </div>
          <button
            aria-label="request"
            type="button"
            className="absolute top-3 right-2.5 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2.5 ml-auto inline-flex items-center"
            onClick={props.onClick}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="text-center">
            <div className="p-5 border-b ">
              <div className="justify-center flex">
                <AiFillWarning color="red" size={80} />
              </div>
              <div className="text-lg">ທ່ານຕ້ອງການລົບຂໍ້ມູນແທ້ບໍ່ ?</div>
            </div>
            <div className="p-2 flex justify-end">
              <button
                onClick={() => {
                  if (props.action === "Del-Product") {
                    props.event();
                    console.log(props.onLoading);
                    // props.onHide();
                  } else {
                    toast.error(
                      "ເກີດຂໍ້ຜິດພາດ Action ບໍ່ຖືກຕ້ອງ !",
                      toastOption
                    );
                  }
                }}
                type="button"
                disabled={props.onLoading ? true : false}
                className={`
                ${
                  props.onLoading
                    ? "cursor-not-allowed disabled:opacity-50"
                    : ""
                }
                text-white flex text-lg bg-green-500 hover:bg-green-600 rounded-md px-2 p-2 mr-2`}
              >
                {props.onLoading ? (
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
                ຢືນຢັນ
              </button>
              <button
                onClick={props.onClick}
                type="button"
                className="text-white text-lg bg-red-500 hover:bg-red-600 rounded-md px-2 p-2"
              >
                ຍົກເລີກ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDialog;
