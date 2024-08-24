import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { MainContext } from "../hook/MainContext";

type Props = {
  color: string;
  text: string;
  id: any;
  auth: any;
};

const ActionBtn = ({ color, text, id, auth }: Props) => {
  const { setEditModalOpen } = useContext(MainContext);

  const clicked = async (text: any) => {
    if (text == "delete") {
      const res = await axios.delete(`https://bellissimo-avt2.onrender.com/delete_product/${id}`, {
        headers: {
          token: `${auth}`,
        },
      });
      toast.success(res.data.message);
    } else if (text == "edit") {
      setEditModalOpen(true);
    }
  };
  return (
    <div
      className={`border border-collapse rounded-md bg-white 
                  border-blue-400 px-4 py-1 text-sm font-semibold text-${color}-700 flex items-center justify-center
                 hover:bg-gray-900 hover:text-white transition-all duration-200 capitalize`}
      onClick={() => clicked(text)}
    >
      {text}
    </div>
  );
};

export default ActionBtn;
