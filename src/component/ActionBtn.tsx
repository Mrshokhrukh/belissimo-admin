import axios from "axios";
import { toast } from "react-toastify";

type Props = {
  color: string;
  text: string;
  id: any;
  auth: any;
};

const ActionBtn = ({ color, text, id, auth }: Props) => {
  const clicked = async (text: any) => {
    if (text == "delete") {
      const res = await axios.delete(`https://bellissimo-avt2.onrender.com/delete_product/${id}`, {
        headers: {
          token: `${auth}`,
        },
      });
      toast.success(res.data.message);
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
