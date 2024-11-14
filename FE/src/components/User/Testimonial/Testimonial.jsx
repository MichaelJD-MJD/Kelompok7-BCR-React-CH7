import React from 'react'
import imgPhoto from "../../../assets/img_photo.png";
import rate from "../../../assets/icon/rate.png";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="container testimonial-container p-3" id="testimonial">
      <div className="row justify-content-center text-center mb-4">
        <div className="col-lg-8">
          <h3>Testimonial</h3>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="testimonial-item d-flex align-items-center justify-content-center"
                >
                  <img
                    src={imgPhoto}
                    className="rounded-circle user-photo me-4"
                    alt="User Photo"
                  />
                  <div className="testimonial-content">
                    <img
                      src={rate}
                      className="mb-2"
                      alt="Rating Stars"
                    />
                    <p className="testimonial-text">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam."
                    </p>
                    <p className="testimonial-author">John Dee, 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="testimonial-item d-flex align-items-center justify-content-center"
                >
                  <img
                    src={imgPhoto}
                    className="rounded-circle user-photo me-4"
                    alt="User Photo"
                  />
                  <div className="testimonial-content">
                    <img
                      src={rate}
                      className="mb-2"
                      alt="Rating Stars"
                    />
                    <p className="testimonial-text">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam."
                    </p>
                    <p className="testimonial-author">John Dee, 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="testimonial-item d-flex align-items-center justify-content-center"
                >
                  <img
                    src={imgPhoto}
                    className="rounded-circle user-photo me-4"
                    alt="User Photo"
                  />
                  <div className="testimonial-content">
                    <img
                      src={rate}
                      className="mb-2"
                      alt="Rating Stars"
                    />
                    <p className="testimonial-text">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam."
                    </p>
                    <p className="testimonial-author">John Dee, 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Tombol navigasi carousel --> */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial