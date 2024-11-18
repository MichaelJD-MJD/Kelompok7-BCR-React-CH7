import React from 'react'
import "./Banner.css";
import { Link } from '@tanstack/react-router';

const Banner = () => {
  return (
    <div className="container banner-container">
      <div className="row justify-content-center p-5">
        <div className="col-lg-10 banner-content p-5 text-center">
          <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to='/searchCar' className="start-btn btn">
            Mulai Sewa Mobil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner