
import { PiXLogoFill } from "react-icons/pi";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="bg-[#30b5b2]">
           <footer className="footer sm:footer-horizontal max-w-[1440px] mx-auto text-neutral-content p-10">
  <aside>
     <Link to="/" className="btn btn-ghost text-xl">Paw <span className='text-[#e9598e]'>Mart</span></Link>
    <p>
      PawMart Limited 2025;
      <br />
      PawMart connects local pet owners and buyers for adoption and pet
care products.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a className="text-2xl">
         <PiXLogoFill />
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
      
    </div>
     <div className="space-x-2">
      <a className="hover:underline" href="/">Home</a>
      <a className="hover:underline" href="/">Contacts</a>
      <a className="hover:underline" href="/">Terms and Conditions</a>
     </div>
  
  </nav>
</footer>
   <aside className="text-white text-center py-3 ">
    <p>Copyright © {new Date().getFullYear()} - All right reserved by PawMart Ltd</p>
  </aside>
        </div>
    );
};

export default Footer;