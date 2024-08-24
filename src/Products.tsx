import axios from "axios";
import { useQuery } from "react-query";

interface Props {}

const Products = ({}: Props) => {
  const { data, isLoading } = useQuery("products", () => {
    return axios.get("https://bellissimo-avt2.onrender.com/get_all_products");
  });

  if (isLoading) {
    return <h1 className="text-[50px] text-center mt-[100px]">Loading...</h1>;
  }
  
  return (
    <div className={`mt-[70px] w-[100%] mx-auto relative px-5`}>
      <div className="w-[280px] shadow-lg rounded-lg h-[100%] fixed left-[3%] bg-white"></div>
      <div className="grid grid-cols-4 ml-[350px] h-[200px] gap-2">
        {data?.data.map((product: any, i: number) => {
          return (
            <div
              key={i}
              className="w-[100%] p-3 py-3.5 px-2 pr-6 flex flex-col justify-between items-center bg-white shadow-lg rounded-2xl cursor-pointer"
            >
              <div className="flex justify-center items-center flex-col">
                <img src={product?.image} alt="" className="w-[100%]" />
                <div className="text-center">
                  <p className="font-light text-lg">{product?.title}</p>
                  <span className="text-gray font-light ">{"qalin"}</span>
                </div>
              </div>
              <p className="font-semibold text-2xl">{product?.new_price} so'm</p>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Products;
