import axios from "axios";

type Props = {
  color: string;
  text: string;
  id: any;
  auth: any;
};

const ActionBtn = ({ color, text, id, auth }: Props) => {
  const clicked = async (text: any) => {
    if (text == "Delete") {
      const res = await axios.delete(`https://bellissimo-avt2.onrender.com/delete_product/${id}`, {
        headers: {
          token: `${auth}`,
        },
      });
      console.log(res);
    }
  };
  return (
    <div
      className={`border border-collapse rounded bg-${color}-200 
                  border-${color}-400 px-4 py-1 text-sm font-semibold text-${color}-700 flex items-center justify-center
                 hover:bg-${color}-300 capitalize`}
      onClick={() => clicked(text)}
    >
      {text}
    </div>
  );
};

export default ActionBtn;
