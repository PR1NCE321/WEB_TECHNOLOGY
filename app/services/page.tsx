import React from 'react'
import { Activity, Radio, Presentation, Vault, CalendarRange, MessageSquareText, Star, Link } from 'lucide-react'
import ImageAnimation from '../componants/Imagecarousel'
function Services() {
    return (
        <section className='masthead '>
            <div className="container" >
                <h2 className="text-center text-uppercase text-gray">Our Services</h2>

                <div className="divider-custom divider-dark">
                    <div className="divider-custom-line"></div>
                    <div className=""><Star size={40} /></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className='text-center fs-5 '>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6 hover:bg-blue-600 transition duration-300" data-aos="fade-up" data-aos-delay="100">
                        <div className=" service-item position-relative">
                            <div className="icon" >
                                <Activity size={45} />
                            </div>
                            <h3>Nesciunt Mete</h3>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <Radio size={45} />
                            </div>
                            <h3>Eosle Commodi</h3>
                            <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <Presentation size={45} />
                            </div>
                            <h3>Ledo Markt</h3>
                            <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <Vault size={45} />
                            </div>
                            <h3>Asperiores Commodit</h3>
                            <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <CalendarRange size={45} />                             </div>
                            <h3>Velit Doloremque</h3>
                            <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <MessageSquareText size={45} />                            </div>
                            <h3>Dolori Architecto</h3>
                            <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                        </div>
                    </div>

                </div>

                <div className='container m-5 '>
                    <h2 className="text-center text-uppercase text-gray p-5">Our Partners</h2>
                    <ImageAnimation />
                </div>

            </div>

        </section>
    )
}

export default Services