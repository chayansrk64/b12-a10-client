import { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { toast } from "react-toastify";

const ListingDetails = () => {
    const {user} = use(AuthContext);
    const listing = useLoaderData();
    // console.log('listing details', listing);
    const modalRef = useRef(null);

    const handleOpenModal = () => {
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

        console.log(myOrder);

        // saved to database;
        fetch('http://localhost:3000/orders', {
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
            }
        })

    }
        
    return (
        <div className="">
           
         {/* product details */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
                <div className='col-span-5 '>

                    <img className='w-full' src={listing.image} alt="" />
                    
                </div>
                <div className='col-span-7  p-4 space-y-3'>
                    <h3 className='text-3xl font-semibold my-3'>{listing.name}</h3>
                    <p className='text-xl font-semibold my-3'>${listing.price}</p>
                    <p>{listing.description}</p>
                    <p>{listing.location}</p>
                    <p>{listing.date}</p>
                    <p>{listing.email}</p>


                    <button onClick={handleOpenModal} className='btn btn-secondary '>Adopt / Order Now</button>


                    {/* modal  */}
                    
                        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Order Form</h3>
                            {/* form for bid */}
                            <form onSubmit={handleOrderModal}>

                                <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='buyerName' className="input" readOnly defaultValue={user?.displayName} />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" readOnly defaultValue={user?.email}  />
                                <label className="label">Product/listId</label>
                                <input type="text" name='productId' className="input" readOnly defaultValue={listing._id} />
                                <label className="label">Listing Name</label>
                                <input type="text" name='name' className="input" readOnly defaultValue={listing.name} />
                                <label className="label">Quantity</label>
                                <input type="number" name='quantity' className="input"  />
                                <label className="label">Price</label>
                                <input type="number" name='price' className="input" readOnly defaultValue={listing.price} />
                                <label className="label">Address</label>
                                <input type="text" name='address' className="input"  />
                                <label className="label">Phone</label>
                                <input type="text" name='phone' className="input"  />
                                <label className="label">Notes</label>
                                <input type="text" name='notes' className="input"  />
                                 
                                
                                <button className="btn btn-neutral mt-4">Order Now</button>
                                </fieldset>
                            </form>

                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Cancel</button>
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