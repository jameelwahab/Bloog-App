import React from 'react'
import image from "../image/img(1).png"

function Banner() {
    return (
        <section className='banner-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-md-5">
                        <div className="left-side-banner-content mt-5">
                            <h1 className='mb-5'>
                                Articles for <br /><span>front-end devs</span>
                            </h1>
                            <p>
                                Articles on web performance, responsive web design or more
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mb-md-5">
                        <div className="right-side-banner-content d-flex justify-content-end">
                            <img src={image} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;