import React, { useEffect, useState } from 'react'
import BaseApi from '../../axios/BaseApi';

const Orders = () => {
    const [data, setData] = useState([]);
    const getAllOrder = async () => {
      let token = document.cookie;
        token = token.split("Bearer=")[1]
        token = token.split(";")[0]
      const { data } = await BaseApi.get("get/order",{ 
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      setData(data.data);
    };
  
    useEffect(() => {
      getAllOrder();
    }, []);
  return (
    <main className="text-black bg-white">
    <div className="container px-4 mx-auto sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Orders</h2>
        </div>
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Order ID
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Customer
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Product
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Price
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Qantity
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => {
                  return (
                    <tr key={item?._id}>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item?.order_id}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item?.customer_name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item?.product_name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item?.price}/-
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">BD</p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item?.quatity}
                        </p>
                      
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item?.total_price}/-
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
  )
}

export default Orders