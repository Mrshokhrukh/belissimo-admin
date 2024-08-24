// import FormatPrice from "./formatPrice";
import { useContext, useState } from "react";
import { SlClose } from "react-icons/sl";
import { MainContext } from "../hook/MainContext";
// import FormatPrice from "./formatPrice";

type Props = {};

const EditModal = ({}: Props) => {
  const { setEditModalOpen } = useContext(MainContext);
  const [description, setDiscription] = useState(
    "2 ta 35 sm’lik pitsa, 8 ta tovuqli strips, 16 ta sinnamon rollar va 2 ta Coca-Cola 1,5 L — katta bazm uchun ayni muddao."
  );
  const [price, setPrice] = useState<any>(32000);

  let isEditModalOpen = false;

  return (
    <div className={`${isEditModalOpen ? "" : "hidden"}`}>
      <div
        className={`w-[100%] h-[100%] z-[100] fixed top-0 left-0 `}
        id="authmodal"
        onClick={() => setEditModalOpen(false)}
      ></div>

      <div
        className="cursor-pointer w-[100%] max-w-[650px] min-h-[440px] fixed z-[101] top-[50%] translate-x-[-50%] translate-y-[-50%]
       left-[50%] flex items-center justify-center"
      >
        <div className="relative p-8 w-[100%] h-[100%] bg-white shadow-cardshadow rounded-3xl">
          <SlClose
            className="absolute right-4 top-4 text-3xl cursor-pointer"
            onClick={() => setEditModalOpen(false)}
          />
          <div className="flex">
            <img
              src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ff8990000-6beb-ac1f-4056-08dc575e681f.jpg&w=1920&q=75"
              alt=""
              className="w-[300px] flex-1"
            />
            <div className="flex-1 flex justify-center items-center flex-col">
              <label htmlFor="updateimg">Upload</label>
              <input type="file" id="updateimg" className="p-4 outline-none" />
            </div>
          </div>
          <form className="mt-2">
            <label htmlFor="description">description</label>
            <textarea
              className="w-[100%] outline-none text-gray-500 text-lg resize-none px-2 border rounded-lg"
              id="scrollbar"
              onChange={(e) => setDiscription(e.target.value)}
              value={description}
            />
            <div className="flex gap-3">
              <div className="flex-1">
                <label htmlFor="newPrice">new price</label> <br />
                <input
                  className="w-[100%] outline-none text-gray-900 text-2xl font-semibold resize-none px-2 border rounded-lg"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  id="newPrice"
                />
              </div>{" "}
              <div className="flex-1">
                <label htmlFor="oldPrice">old price</label> <br />
                <input
                  className="w-[100%] outline-none text-gray-900 text-2xl font-semibold resize-none px-2 border rounded-lg"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  id="oldPrice"
                />
              </div>
            </div>
            <button className="hover:bg-blue-400 p-3 rounded-[25px] text-white font-semibold capitalize text-lg bg-blue-500 w-[100%] mt-4">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
