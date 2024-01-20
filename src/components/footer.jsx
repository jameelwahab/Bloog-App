import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className='footer'>
            <div className="row">
                <div className="col-12 text-center">
                    <div className="footer-content mb-5">
                        <h3>
                            Looking for <span>more</span>?
                            <button className='ms-5'>archive <i class="fa-solid fa-caret-right"></i></button>
                        </h3>
                    </div>
                    <div className='footer-icon mb-5'>
                        <a href="#" className='me-5'><i class="fa-brands fa-twitter"></i></a>
                        <a href="#" className='me-5'><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" className='me-5'><i class="fa-brands fa-apple"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;