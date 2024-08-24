// import FormatPrice from "./formatPrice";
import { useContext } from "react";
import { SlClose } from "react-icons/sl";
import { MainContext } from "../hook/MainContext";

type Props = {};

const EditModal = ({}: Props) => {
  const { setEditModalOpen, isEditModalOpen } = useContext(MainContext);
  console.log(isEditModalOpen);

  return (
    <div className={`${isEditModalOpen ? "" : "hidden"}`}>
      <div
        className={`w-[100%] h-[100%] bg-black z-[100] fixed top-0 left-0 `}
        id="authmodal"
        onClick={() => setEditModalOpen(false)}
      ></div>

      <div className="w-[600px] h-[400px] fixed z-[101] top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] flex items-center justify-center">
        <div className="relative p-8 w-[100%] h-[100%] bg-white shadow-cardshadow rounded-3xl">
          <SlClose
            className="absolute right-4 top-4 text-3xl cursor-pointer"
            onClick={() => setEditModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
