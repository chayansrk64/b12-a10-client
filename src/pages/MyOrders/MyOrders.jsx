import React, { use, useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthContext";

const MyOrders = () => {
  const { user } = use(AuthContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
        console.log("data by user", data);
      });
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle title="My Orders"></SectionTitle>
      {/* table container */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Product Name</th>
                <th>Buyer Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
                myOrders.map((order, index) =>   <tr key={order._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={order.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.name}</div>
                      <div className="">{order.address}</div>
                      <div className="text-sm opacity-50">
                        {order.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="">
                    {order.buyerName} <br />
                    {order.email} <br />
                    {order.phone}
                    </td>
                <td>
                  <div className="font-bold">{order.date}</div>
                </td>
                <td>
                  <div className="font-bold">{order.price}</div>
                </td>
                <td className="font-bold">{order.quantity}</td>
                <td>
                  <Link className="btn btn-ghost btn-xs bg-green-500 text-white me-2">
                    Update
                  </Link>
                  <button className="btn btn-ghost btn-xs bg-red-500 text-white">
                    Delete
                  </button>
                </td>
              </tr>)
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
