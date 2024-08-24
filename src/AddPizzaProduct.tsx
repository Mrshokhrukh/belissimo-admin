import axios from "axios";
import React, { useState } from "react";

interface Props {
  userAuth: string;
}

const AddPizzaProduct = ({ userAuth }: Props) => {
  const [pizzaProduct, setPizzaProduct] = useState<any>({
    productTitle: "",
    productPrice: "",
    pizzaSize: "",
  });
  const [uploadImage, setUploadImage] = useState<any>();

  const handleAddProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPizzaProduct({ ...pizzaProduct, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadImage(e.target.files ? e.target.files[0] : "");
  };

  const handleSubmitPizzaProducts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const upLoadImage = async () => {
        const formData = new FormData();
        formData.append("file", uploadImage);
        formData.append("upload_preset", "products_products");
        await axios
          .post("https://api.cloudinary.com/v1_1/dmv6xiey2/image/upload/", formData)
          .then((res) => {
            setPizzaProduct({ ...pizzaProduct, image: res.data.url });
          })
          .then(() => {
            axios
              .post(
                "https://bellissimo-avt2.onrender.com/add_pizza_product/",
                { ...pizzaProduct, pizzaId: "66c200b63c5e21a9f3910576" },
                {
                  headers: {
                    token: `${userAuth}`,
                  },
                }
              )
              .then((res) => {
                console.log(res);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      };
      upLoadImage();
    } catch (error) {
      console.log(error);
    }
    setPizzaProduct("");
  };

  return (
    <form onSubmit={handleSubmitPizzaProducts} className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="product title"
        onChange={handleAddProductChange}
        name={"productTitle"}
        value={pizzaProduct.productTitle}
        className="w-full p-2 rounded-md border-2 border-stone-800 focus:outline-indigo-600
              text-xl font-semibold"
      />
      <input
        type="text"
        placeholder="product price"
        onChange={handleAddProductChange}
        name={"productPrice"}
        value={pizzaProduct.productPrice}
        className="w-full p-2 rounded-md border-2 border-stone-800 focus:outline-indigo-600
              text-xl font-semibold"
      />
      <input
        list="pizzaSize"
        placeholder="product size"
        onChange={handleAddProductChange}
        name={"pizzaSize"}
        value={pizzaProduct.pizzaSize}
        className="w-full p-2 rounded-md border-2 border-stone-800 focus:outline-indigo-600
              text-xl font-semibold"
      />
      <datalist id="pizzaSize">
        <option value="qalin">Qalin</option>
        <option value="o'rtacha">O'rtacha</option>
        <option value="ingichka">Ingichka</option>
      </datalist>

      <input
        type="file"
        placeholder="product image"
        onChange={handleImageChange}
        name={"image"}
        className="w-full p-2 rounded-md border-2 border-stone-800 focus:outline-indigo-600
              text-xl font-semibold
            "
      />
      <button
        className="bg-gray-800 text-white rounded-md p-3 cursor-pointer capitalize font-semibold
            hover:bg-slate-700"
      >
        post product
      </button>
    </form>
  );
};

export default AddPizzaProduct;
