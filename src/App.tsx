import { useEffect, useState } from "react";
import AddPizzaProduct from "./AddPizzaProduct";
import AddProduct from "./AddProduct";
import axios from "axios";

function App() {
  const [userAuth, setUserAuth] = useState<any>();
  const [deleteId, setDeleteId] = useState<any>();

  useEffect(() => {
    setUserAuth(JSON.parse(String(localStorage.getItem("userAuthToken"))));
  }, []);

  const handleSubmitDeleteProduct = async (id: any) => {
    let res = await axios.delete(`https://bellissimo-avt2.onrender.com/delete_product/${id}`, {
      headers: {
        token: `${userAuth}`,
      },
    });
    console.log(res);
    setDeleteId("");
  };

  return (
    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 p-3 px-3 md:p-5 w-[100%] md:px-10 sm:grid-cols-2">
      <div className="left border-2 border-slate-800 shadow-lg min-h-[600px] h-auto w-full rounded-lg overflow-y-auto">
        <p className="text-center font-bold text-slate-900 text-4xl">Add product</p>
        <div className="mt-5 md:px-10 px-4">
          <AddProduct userAuth={userAuth} />
        </div>
      </div>
      <div className="center border-2 border-slate-800 shadow-lg min-h-[600px] h-auto w-full rounded-lg overflow-y-auto">
        <p className="text-center font-bold text-slate-900 text-4xl">Add pizza products</p>
        <div className="mt-5 md:px-10 px-4">
          <AddPizzaProduct userAuth={userAuth} />
        </div>
      </div>
      <div className="right border-2 border-slate-800 shadow-lg min-h-[600px] h-auto w-full rounded-lg overflow-y-auto">
        <p className="text-center font-bold text-slate-900 text-4xl">delete product</p>
        <div className="mt-5 md:px-10 px-4">
          <input
            type="text"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            className="border-2 my-3 rounded-lg w-full"
          />
          <button
            onClick={() => handleSubmitDeleteProduct(deleteId)}
            className="w-full bg-red-800 text-white rounded-md p-3 cursor-pointer capitalize font-semibold
            hover:bg-red-700"
          >
            submit delete product
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
