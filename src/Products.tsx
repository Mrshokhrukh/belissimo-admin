import axios from "axios";
import { useQuery } from "react-query";
import ActionBtn from "./component/ActionBtn";
import { useEffect, useState } from "react";
import EditModal from "./component/EditModal";

interface Props {}

export const categories = [
  "combo",
  "pizza",
  "gazaklar",
  "ichimliklar",
  "salatlar",
  "desertlar",
  "souslar",
];

const Products = ({}: Props) => {
  const [auth, setUserAuth] = useState<any>();
  const [category, setCategory] = useState<any>("combo");

  useEffect(() => {
    setUserAuth(JSON.parse(String(localStorage.getItem("userAuthToken"))));
  }, []);

  const { data, isLoading } = useQuery("products", () => {
    return axios.get("https://bellissimo-avt2.onrender.com/get_all_products");
  });

  if (isLoading) {
    return <h1 className="text-[50px] text-center mt-[100px]">Loading...</h1>;
  }

  return (
    <div className={`mt-[70px] w-[100%] mx-auto relative px-5`}>
      <div className="w-[280px] shadow-lg rounded-lg h-[100%] fixed left-[3%] bg-white px-4 py-10">
        <h1 className="text-center p-4 pt-0 font-bold text-3xl">Kategoriyalar</h1>
        <ul className="space-y-3">
          {categories.map((val: any, i: number) => {
            return (
              <li
                key={i}
                className={`${
                  category == val ? "bg-slate-300 border-blue-300 border-2" : ""
                } py-2 px-3 rounded-xl border border-slate-400 cursor-pointer
              hover:bg-slate-200 font-semibold capitalize `}
                onClick={() => setCategory(val.toLowerCase())}
              >
                {val}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-[350px] max-w-8xl h-[200px] gap-4">
        {data?.data.map((product: any, i: number) => {
          if (product.category === category) {
            return (
              <div
                key={i}
                id="admin-products"
                className="relative hover:border border-orange-400 w-[100%] h-[250px] p-3 py-3.5 px-2 pr-6 flex flex-col justify-between items-center bg-white shadow-lg rounded-2xl cursor-pointer"
              >
                <div className="flex justify-center items-center flex-col">
                  <img src={product?.image} alt="" className="w-[55%]" />
                  <div className="text-center">
                    <p className="font-semibold text-2xl">{product?.title}</p>
                    <span className="text-gray-400 font-semibold">{"qalin"}</span>
                    <p className="font-semibold text-2xl">{product?.new_price} so'm</p>
                  </div>
                  <div
                    id="product-action"
                    className={`w-[100%] bg-slate-200 border border-orange-400 border-t-0 mt-3 grid-cols-3 gap-2 hidden absolute top-[95%] h-[auto] shadow-2xl z-10 p-3 
                    rounded-xl transition-all duration-200`}
                  >
                    {/* <div className="col-span-3"></div> */}
                    <ActionBtn color="red" text={"delete"} id={product._id} auth={auth} />
                    <ActionBtn color="blue" text={"edit"} id={product._id} auth={auth} />
                    <ActionBtn color="green" text={"update"} id={product._id} auth={auth} />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      {/* </div> */}
      <EditModal />
    </div>
  );
};

export default Products;
