import React from 'react';

import ContactUsForm from '../_components/form';
import { MapPin, Phone, Mail } from 'lucide-react';

function page() {
  return (
    <section className="bg-[#f2f4f6] py-20 px-6 xl:px-[150px] lg:px-10">
      <div className="max-w-screen-md mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Connect with Quema Consulting
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-12">
          We are here to assist you with your HR needs. Reach out to us today to discover how we can help your organization thrive.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            className="block rounded bg-[#4a90e2] px-8 py-3 text-sm lg:text-base font-medium text-white shadow hover:bg-[#3b7cc4] focus:outline-none focus:ring active:bg-[#356bb1] sm:w-auto"
            href="#"
          >
            Contact Us Now
          </a>

          <a
            className="block rounded border px-8 py-3 text-sm lg:text-base font-medium  shadow hover:text-[#16202a] hover:bg-white border-[#4a90e2] hover:border-[#4a90e2] focus:outline-none focus:ring active:text-[#0f151b] sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="xl:max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mt-16">
        
        {/* Contact Information */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-10">
            Reach out to us for tailored HR solutions.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-6 text-sm lg:text-base text-gray-700">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#4a90e2]" />
              <div>
                <p className="font-medium">PLOT 268, Trans Amadi Industrial Layout Rd</p>
                <p>Ordinance, Port Harcourt, 500211 <br /> Rivers State.</p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#4a90e2]" />
              <span>+234 8036866975</span>
            </div>

            {/* Email Address */}
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#4a90e2]" />
              <span>quemaconsulting@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactUsForm />
        </div>

      </div>
    </section>
  );
}

export default page;
