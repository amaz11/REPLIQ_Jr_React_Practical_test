import React, { useEffect, useState } from 'react'
import BaseApi from '../../axios/BaseApi';
import Modal from '../../components/Modal/Modal';

const Customers = () => {
    const [data, setstate] = useState([]);
  const [change, setChange] = useState(false);

    const [input, setInput] = useState({
      name: "",
      phone:"",
      password:"",
      conpassword:"",
      role:"user"
    });
    const getData = async ()=>{
      try {
        let token = document.cookie;
        token = token.split("Bearer=")[1]
        token = token.split(";")[0]
        const {data} = await BaseApi.get("customer",{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        setstate(data.data) 
      } catch (error) {
        console.log(error)
      }
  
    }

    const handelInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInput({ ...input, [name]: value });
    };

    const customerSubmit = async(e)=>{
      e.preventDefault();
      try {
        const res = await BaseApi.post('/sign-up',input)
        if(res.status === 201){
          alert("Customer Add succesfully")
          setChange(!change)
        }
      } catch (error) {
        alert(error?.response?.data?.message)
      }
    
    }
    useEffect(() => {
     getData()
    }, [change]);
  return (
    <main className="text-black bg-white">
      <div className="container px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold leading-tight">Customer</h2>
            <Modal btn={"Add Customer"}>
              <div className="w-96 ">
              <h3 className="font-bold text-center text-2xl mb-2">Add Cutomer</h3>
              <form onSubmit={customerSubmit}>
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
                   Phone
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Put in your Image URL"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    value={input.phone}
                    onChange={handelInput}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Put in Category Name"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    value={input.password}
                    onChange={handelInput}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                   Confirm Password
                  </label>
                  <input
                    type="password"
                    name="conpassword"
                    placeholder="Put in Confirm Password"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    value={input.conpassword}
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
                      CUstomer Name
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Phone Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item) => {
                    return (
                      <tr key={item?._id}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <div className='w-14 h-14'>
                                <img className='w-full' src={`${item?.image}`} alt="" />
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
                                {item?.phone}
                              </p>
                            </div>
                          </div>
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

export default Customers