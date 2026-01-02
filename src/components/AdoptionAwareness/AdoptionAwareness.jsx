import { motion } from "framer-motion";

const AdoptionAwareness = () => {
    return (
        <div>
      <section 
      
      
      className="bg-[#EEEEEE] py-16 px-6 text-center rounded-3xl max-w-7xl mx-auto my-16">
      <motion.h2
           initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  
  transition={{ duration: 0.5 }}
      className="text-3xl font-bold mb-4 flex items-center justify-center gap-4">
        <span className="h-0.5 w-10 rounded"></span>
        Why Adopt from <span className="">PawMart?</span>
        <span className="h-0.5 w-10 rounded"></span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  
  transition={{ duration: 0.8 }}
      className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Every adoption from <span className="font-semibold ">PawMart</span> gives a second chance to a loving animal in need. 
        By choosing to adopt instead of buying, you help reduce pet homelessness, 
        support rescue initiatives, and open your heart to a loyal companion who’s 
        waiting for a forever home.
      </motion.p>

      <motion.button
      initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
      className="bg-[#B7B89F] mt-8 px-6 py-3 rounded-xl transition shadow">
        Meet Our Rescues
      </motion.button>
    </section>
        </div>
    );
};

export default AdoptionAwareness;