import { use, useRef } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { toast } from "react-toastify";

const ListingDetails = () => {
    const {user} = use(AuthContext);
    const listing = useLoaderData();
    const modalRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();


    const handleOpenModal = () => {
         if (!user) {
            // redirect to login and save current route
            navigate("/login", {
                state: { from: location.pathname }
            });
            return;
        }
        modalRef.current.showModal()
    }

    const handleOrderModal = (e) => {
        e.preventDefault()

        const form = e.target;
        const quantity = form.quantity.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const notes = form.notes.value;
        
        const myOrder = {
            buyerName: user.displayName,
            email: user.email,
            productId: listing._id,
            name: listing.name,
            quantity,
            price: listing.price,
            address,
            phone,
            notes,
            date: new Date()
        }

        // console.log(myOrder);

        // saved to database;
        fetch('https://pawmart-server-dusky.vercel.app/orders', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(myOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log('after saved to db =>', data);
            if(data.insertedId){
                toast("Order Saved!")
                modalRef.current.close()
            }
        })

    }
        
    return (
        <div className="mt-18 max-w-7xl mx-auto">
           
         {/* product details */}
            <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-16  ' >
                
                <div className='col-span-5  '>

                    <img className='w-full' src={listing.image} alt="" />
                    
                </div>
                <div className='col-span-7  p-4 space-y-3  '>
                    <div>
                    <h3 className='text-3xl font-semibold my-3 border-b-2 mb-10'>{listing.name}</h3>
                    <p className='text-xl font-semibold my-3 border-b-1'>${listing.price}</p>
                    <h4 className="text-lg font-semibold">location</h4>
                    <div className="border-b">
                        <p>{listing.location}</p>
                        <p>{listing.date}</p>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-semibold ">Details</h4>
                        <p className="border-b">{listing.description}</p>
                    </div>

                    <h4 className="text-lg font-semibold">Contact</h4>
                    <p>{listing.email}</p>


                    <button onClick={handleOpenModal} className='btn bg-[#B7B89F] text-white dark:text-black mt-10'>Adopt / Order Now</button>
                    </div>

                    {/* modal  */}
                    
                        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-2xl my-4">Order Form</h3>
                            {/* form for bid */}
                            <form onSubmit={handleOrderModal}>

                                <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='buyerName' className="input w-full" readOnly defaultValue={user?.displayName} />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input w-full" readOnly defaultValue={user?.email}  />
                                <label className="label">Product/listId</label>
                                <input type="text" name='productId' className="input w-full" readOnly defaultValue={listing._id} />
                                <label className="label">Listing Name</label>
                                <input type="text" name='name' className="input w-full" readOnly defaultValue={listing.name} />
                                <label className="label">Quantity</label>
                                <input type="number" name='quantity' className="input w-full"  />
                                <label className="label">Price</label>
                                <input type="number" name='price' className="input w-full" readOnly defaultValue={listing.price} />
                                <label className="label">Address</label>
                                <input type="text" name='address' className="input w-full"  />
                                <label className="label">Phone</label>
                                <input type="text" name='phone' className="input w-full"  />
                                <label className="label">Notes</label>
                                <input type="text" name='notes' className="input w-full"  />
                                 
                                
                                <button className="btn  mt-4 bg-[#B7B89F] text-white ">Order Now</button>
                                </fieldset>
                            </form>

                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn bg-[#B7B89F] text-white ">Cancel</button>
                            </form>
                            </div>
                        </div>
                        </dialog>


                     
                </div>
            </div>
        </div>
    );
};

export default ListingDetails;