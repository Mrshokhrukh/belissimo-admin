import axios from "axios";
import { useState } from "react";
interface Props {
  userAuth: string;
}

const AddProduct = ({ userAuth }: Props) => {
  const [uploadImage, setUploadImage] = useState<any>();

  const [addProductState, setAddProductState] = useState<any>({
    title: "",
    new_price: 0,
    description: "",
    old_price: 0,
    category: "",
  });

  const handleAddProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddProductState({ ...addProductState, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadImage(e.target.files ? e.target.files[0] : "");
  };

  const handleSubmitAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const upLoadImage = async () => {
        const formData = new FormData();
        formData.append("file", uploadImage);
        formData.append("upload_preset", "belissimo_preset");
        await axios
          .post("https://api.cloudinary.com/v1_1/dmv6xiey2/image/upload/", formData)
          .then((res) => {
            setAddProductState({ ...addProductState, image: res.data.url });
          })
          .then(() => {
            axios
              .post(
                "https://bellissimo-avt2.onrender.com/add_product/",
                {
                  ...addProductState,
                  new_price: addProductState.new_price * 1000,
                  old_price: addProductState.old_price * 1000,
                },
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
    setAddProductState("");
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmitAddProduct}>
      <input
        type="file"
        placeholder="product image"
        name="image"
        onChange={handleImageChange}
        className="w-full p-2 rounded-md border-2 border-stone-800 focus:outline-indigo-600
              text-xl font-semibold
            "
        required
      />

      <input
        type="text"
        placeholder="product name"
        value={addProductState.title || ""}
        name="title"
        onChange={handleAddProductChange}
        className="w-full p-2 rounded-md border-2 border-stone-800 focus:outline-indigo-600
              text-xl font-semibold
            "
      />
      <input
        type="text"
        placeholder="product description"
        value={addProductState.description || ""}
        name="description"
        onChange={handleAddProductChange}
        className="w-full p-2 rounded-md border-2 border-stone-800 focus:outline-indigo-600
            text-xl font-semibold
            "
      />
      <input
        type="number"
        placeholder="product price"
        value={addProductState.new_price || ""}
        name="new_price"
        onChange={handleAddProductChange}
        className="w-full p-2 rounded-md border-2 border-stone-800 focus:outline-indigo-600
            text-xl font-semibold
            "
      />
      <input
        type="number"
        placeholder="product discount price"
        value={addProductState.old_price || ""}
        name="old_price"
        onChange={handleAddProductChange}
        className="w-full p-2 rounded-md border-2 border-stone-800 focus:outline-indigo-600
            text-xl font-semibold
            "
      />

      <input
        type="text"
        placeholder="product category"
        value={addProductState.category || ""}
        name="category"
        onChange={handleAddProductChange}
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

export default AddProduct;
