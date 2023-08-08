import React, { useEffect, useState } from 'react'
import BaseApi from '../../axios/BaseApi';

const Dashboard = () => {
  const [products, setproducts] = useState([]);
  const [orders, setorders] = useState([]);
  const [customer, setcustomer] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await BaseApi.get("get/product");
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCustomer = async ()=>{
    try {
      let token = document.cookie;
      token = token.split("Bearer=")[1]
      token = token.split(";")[0]
      const {data} = await BaseApi.get("customer",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      setcustomer(data.data) 
    } catch (error) {
      console.log(error)
    }

  }

  const getAllOrder = async () => {
    let token = document.cookie;
      token = token.split("Bearer=")[1]
      token = token.split(";")[0]
    const { data } = await BaseApi.get("get/order",{ 
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
    setorders(data.data);
  };

  useEffect(()=>{
    getProducts()
    getCustomer()
    getAllOrder()
  },[])
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex items-center justify-between p-4 shadow rounded'>
            <h4 className='text-3xl font-semibold'>
             All Products
            </h4>
            <span className='text-3xl font-semibold'>{products?.length}</span>
          </div>
          <div className='flex items-center justify-between p-4 shadow rounded'>
            <h4 className='text-3xl font-semibold'>
              All Orders
            </h4>
            <span className='text-3xl font-semibold'>{orders?.length}</span>
          </div>
          <div className='flex items-center justify-between p-4 shadow rounded'>
            <h4 className='text-3xl font-semibold'>
              Customer
            </h4>
            <span className='text-3xl font-semibold'>{customer?.length}</span>
          </div>
        </div>
    </div>
  )
}

export default Dashboard