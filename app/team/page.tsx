import React from 'react'
import { Facebook, Linkedin, Star, Twitch, Twitter } from 'lucide-react';
import Link from 'next/link';

function Team() {
    return (


        <section className=" masthead page-section" id="contact">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-black">Meet Our Team</h2>

                <div className="divider-custom divider-dark">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><Star size={40} /></div>
                    <div className="divider-custom-line"></div>
                </div>



                <div className='justify-content-center row'>
                    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <img src="assets/img/team/1.jpg" className=" rounded img-fluid p-2 " alt="" />
                            <h4>Walter White</h4>
                            <span>Web Development</span>
                            <div className="social">
                                <Link href="#"><Facebook color="black" size={40} /></Link>
                                <Link href="#"><Twitter color="black" size={40} /></Link>
                                <Link href="#"><Linkedin color="black" size={40} /></Link>
                                <Link href="#"><Twitch color="black" size={40} /></Link>
                            </div>
                        </div>


                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <img src="assets/img/team/2.jpg" className="img-fluid p-2" alt="" />
                            <h4>Walter White</h4>
                            <span>Web Development</span>
                            <div className="social">
                                <Link href="#"><Facebook color="black" size={40} /></Link>
                                <Link href="#"><Twitter color="black" size={40} /></Link>
                                <Link href="#"><Linkedin color="black" size={40} /></Link>
                                <Link href="#"><Twitch color="black" size={40} /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <img src="assets/img/team/3.jpg" className="img-fluid p-2" alt="" />
                            <h4>Walter White</h4>
                            <span>Web Development</span>
                            <div className="social">
                                <Link href="#"><Facebook color="black" size={40} /></Link>
                                <Link href="#"><Twitter color="black" size={40} /></Link>
                                <Link href="#"><Linkedin color="black" size={40} /></Link>
                                <Link href="#"><Twitch color="black" size={40} /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <img src="assets/img/team/4.jpg" className="img-fluid p-2" alt="" />
                            <h4>Walter White</h4>
                            <span>Web Development</span>
                            <div className="social">

                                <Link href="#"><Facebook color="black" size={40} /></Link>
                                <Link href="#"><Twitter color="black" size={40} /></Link>
                                <Link href="#"><Linkedin color="black" size={40} /></Link>
                                <Link href="#"><Twitch color="black" size={40} /></Link>
                            </div>
                        </div>
                    </div>



                </div>
            </div >
        </section >
    );
}

export default Team