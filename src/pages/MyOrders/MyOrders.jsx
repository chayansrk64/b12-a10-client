import React, { use, useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../provider/AuthContext";
import jsPDF from "jspdf";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";





const MyOrders = () => {

  const { user, loading, setLoading} = use(AuthContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
     if (!user?.email) return;
    fetch(`https://pawmart-server-dusky.vercel.app/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
        setLoading(false)
      });
  }, [user, setLoading]);



  const handleDownloadPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const startY = 80;

    // Header
    doc.setFontSize(18);
    doc.text("My Orders Summary", margin, 40);
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`User: ${user?.email || "Guest"}`, margin, 60);

    // Table header
    const headers = ["#", "Product", "Buyer", "Date", "Price", "Qty"];
    const colWidths = [30, 150, 150, 80, 60, 40];

    let y = startY;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");

    // Header background
    doc.setFillColor(230, 240, 250);
    doc.rect(margin - 5, y - 12, pageWidth - margin * 2 + 10, 20, "F");

    let x = margin;
    headers.forEach((header, i) => {
      doc.text(header, x, y);
      x += colWidths[i];
    });

    // Table body
    y += 25;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(50);

    myOrders.forEach((order, index) => {
      let x = margin;

      // Each row values
      const row = [
        index + 1,
        order.name || "—",
        order.buyerName || "—",
        new Date(order.date).toLocaleDateString() || "—",
        order.price ? `${order.price}` : "—",
        order.quantity?.toString() || "—",
      ];

      // Column 1 — SL
      doc.text(String(row[0]), x, y);
      x += colWidths[0];

      // Column 2 — Product Name + Address
      doc.setFont("helvetica", "bold");
      doc.text(row[1], x, y);
      doc.setFont("helvetica", "normal");
      if (order.address) {
        doc.setTextColor(100);
        doc.text(`Address: ${order.address}`, x, y + 12);
        doc.setTextColor(50);
      }
      x += colWidths[1];

      // Column 3 — Buyer + Email + Phone
      doc.setFont("helvetica", "bold");
      doc.text(row[2], x, y);
      doc.setFont("helvetica", "normal");
      if (order.email) doc.text(order.email, x, y + 12);
      if (order.phone) doc.text(order.phone, x, y + 24);
      x += colWidths[2];

      // Column 4 — Date
      doc.text(row[3], x, y);
      x += colWidths[3];

      // Column 5 — Price
      doc.text(row[4], x, y);
      x += colWidths[4];

      // Column 6 — Quantity
      doc.text(row[5], x, y);

      // Move to next line
      y += 36;

      // Page break check
      if (y > doc.internal.pageSize.getHeight() - 60) {
        doc.addPage();
        y = startY;
      }
    });

    // Footer
    const date = new Date().toLocaleString();
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text(`Generated on: ${date}`, margin, doc.internal.pageSize.height - 20);

    // Save file
    doc.save("My_Orders.pdf");
  }


  if(loading){
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
    <div className="max-w-7xl mx-auto mt-24">
      <SectionTitle title="My Orders"></SectionTitle>
      {/* table container */}
      <div>
        <div className="text-right my-3">
            <button onClick={handleDownloadPDF}  className="btn bg-[#B7B89F] tooltip" data-tip="Download form as PDF">Download </button>
            </div>
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
