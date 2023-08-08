import React, { useEffect, useState } from "react";
import BaseApi from "../../axios/BaseApi";
import Modal from "../../components/Modal/Modal";

const Products = () => {
  const [data, setstate] = useState([]);
  const [change, setChange] = useState(false);
  const [input, setInput] = useState({
    name: "",
    image: "",
    category:"",
    quatity:"",
    price:""
  });
  const getData = async () => {
    try {
      const { data } = await BaseApi.get("get/product");
      setstate(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const productSubmit = async(e)=>{
    e.preventDefault();
    let token= document.cookie.split("Bearer=")[1]
    token = token.split(";")[0]
    const res = await BaseApi.post('/post/product',input,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    if(res.status === 201){
      alert("Product Add succesfully")
      setChange(!change)
    }
  }
  useEffect(() => {
    getData();
  }, [change]);
  return (
    <main className="text-black bg-white">
      <div className="container px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold leading-tight">Products</h2>
            <Modal btn={"Add Product"}>
              <div className="w-96 ">
              <h3 className="font-bold text-center text-2xl mb-2">Add Products</h3>
              <form onSubmit={productSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Put in your fullname."
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    value={input.name}
                    onChange={handelInput}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                   Image
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Put in your Image URL"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    value={input.image}
                    onChange={handelInput}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Put in Category Name"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    value={input.category}
                    onChange={handelInput}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Quatity
                  </label>
                  <input
                    type="number"
                    min={1}
                    name="quatity"
                    placeholder="Put in your Quatity"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                   value={input.quatity}
                    onChange={handelInput}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    min={1}
                    name="price"
                    placeholder="Put in your Price"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    value={input.price}
                    onChange={handelInput}
                  />
                </div>
                <button className="bg-green-700 hover:bg-green-600 px-4 py-1 rounded text-white font-semibold">Submit</button>
              </form>
              </div>
            </Modal>
          </div>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Product
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Category
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Quatity
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item) => {
                    return (
                      <tr key={item?._id}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="w-14 h-14">
                              <img
                                className="w-full"
                                src={`${item?.image}`}
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {item?.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {item?.category}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item?.quatity}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item?.price}/-
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            BD{" "}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
