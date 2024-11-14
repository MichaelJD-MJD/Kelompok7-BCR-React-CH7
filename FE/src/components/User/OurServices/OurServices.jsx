import React from "react";
import imgService from "../../../assets/OurService-Icon/img_service.png";
import iconCheck from "../../../assets/OurService-Icon/Group 53.png";

const OurService = () => {
  const dataOurService = [
    "Sewa Mobil Dengan Supir di Bali 12 Jam",
    "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    "Sewa Mobil Jangka Panjang Bulanan",
    "Gratis Antar - Jemput Mobil di Bandara",
    "Layanan Airport Transfer / Drop In Out",
  ];

  return (
    <div className="flex flex-row py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="basis-1/2">
        <img src={imgService} alt="Service" className="" />
      </div>
      <div className="basis-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Best Car Rental for any kind of trip in{" "}
          <span className="text-blue-600">(Lokasimu)</span>!
        </h2>
        <p className="text-gray-600 mb-6 text-justify">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <ul className="space-y-4">
          {dataOurService.map((service, index) => (
            <li key={index} className="flex items-center">
              <img src={iconCheck} alt="Check Icon" className="w-6 h-6 mr-3" />
              <span className="text-gray-700">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurService;
