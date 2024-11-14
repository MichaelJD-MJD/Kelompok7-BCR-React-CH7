import React from 'react'
import "./Faq.css";

const Faq = () => {
  return (
    <div className="container faq-container mb-5" id="faq">
      <div className="row justify-content-center p-5">
        {/* <!-- Title --> */}
        <div className="col-lg-6 mb-sm-3">
          <h3>Frequently Asked Question</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        {/* <!-- accordion --> */}
        <div className="col-lg-6">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  esse vel mollitia labore qui nemo fugiat blanditiis vitae.
                  Sint aut illo aliquam qui eos eaque!
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  esse vel mollitia labore qui nemo fugiat blanditiis vitae.
                  Sint aut illo aliquam qui eos eaque!
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  esse vel mollitia labore qui nemo fugiat blanditiis vitae.
                  Sint aut illo aliquam qui eos eaque!
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  esse vel mollitia labore qui nemo fugiat blanditiis vitae.
                  Sint aut illo aliquam qui eos eaque!
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  esse vel mollitia labore qui nemo fugiat blanditiis vitae.
                  Sint aut illo aliquam qui eos eaque!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq