import React from "react";
import contactImage from "../assets/images/trainer.jpg";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gradient-to-br from-orange-100 to-orange-300 text-white ">
      <div className="md:w-2/5 mt-0 md:mr-10">
        <img
          src={contactImage}
          alt="Contact us"
          className="object-cover w-full h-full md:h-[600px] md:w-[600px] rounded-lg shadow-lg"
        />
      </div>

      <div className="md:w-3/5 flex flex-col justify-center text-left p-8">
        <h2 className="text-4xl font-extrabold mb-4 leading-tight text-orange-600">
          Contact Our Support Team
        </h2>
        <p className="text-2xl mb-6 font-semibold leading-relaxed text-black">
          Need assistance with your fitness journey? We’re here to help!
        </p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-orange-600 mb-2">Phone</h3>
          <p className="text-lg font-semibold text-black">+123 456 7890</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-orange-600 mb-2">Email</h3>
          <p className="text-lg font-semibold text-black">
            gymguidepro@ourgym.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
