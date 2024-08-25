import { useEffect, useState } from "react";
import AddPizzaProduct from "./AddPizzaProduct";
import AddProduct from "./AddProduct";

function App() {
  const [userAuth, setUserAuth] = useState<any>();

  useEffect(() => {
    setUserAuth(JSON.parse(String(localStorage.getItem("userAuthToken"))));
  }, []);

  return (
    <div className="mt-14 flex flex-col md:flex-row gap-10 p-3 px-3 md:p-5 w-[100%] md:px-10 sm:grid-cols-2">
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
    </div>
  );
}

export default App;
