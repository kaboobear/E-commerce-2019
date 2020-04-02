import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class About extends Component {
    state = {
        isLoaded:false
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoaded:true})
        },150)
    }

    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            draggable: false,
            arrows: false,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 450, settings: { slidesToShow: 1 } },
              ]
        };

        return (
            <div className={`info-page ${this.state.isLoaded ? 'ready' : 'unready'}`}>
                <div className="container small">
                    <div className="info-page-title">
                        About Us
                    </div>

                    <div className="info-img">
                        <img src="img/about.jpg" alt=""/>
                    </div>

                    <div className="info-block">
                        <h3>Short Story</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aspernatur ex
                            reprehenderit nulla aliquid ipsa quis rerum minus voluptatem laudantium fugiat
                            fugit, quod magni vitae, earum neque, quae necessitatibus illo dicta asperiores
                            modi. Odio earum modi, aspernatur cumque similique nemo?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, illo? Vero
                            similique tenetur, ducimus, hic placeat aspernatur corporis, libero numquam
                            minus inventore quam laudantium iste impedit fugiat totam voluptatem saepe
                            architecto laborum iusto illo? Corrupti necessitatibus eveniet tenetur, maxime
                            iste nulla laboriosam quia saepe fuga facilis, ea nihil dolorum voluptas
                            laudantium veniam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis
                            alias ducimus, veniam facilis expedita laudantium esse saepe tenetur molestias
                            magnam suscipit excepturi vero aliquid ullam autem! Quis, amet.
                        </p>

                        <h3>Few Facts</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a blanditiis ea
                            vitae. Rem, nulla. Quae eaque ullam assumenda voluptatibus iusto. Quaerat
                            debitis reiciendis omnis laborum impedit. Iure quam eum sunt?
                        </p>

                        <ul>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repudiandae
                                repellat placeat!</li>
                        </ul>

                        <h3>Our Team</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat modi, eligendi
                            aspernatur hic repellat ullam nostrum optio enim officiis est, minima rerum aut
                            maiores illum reiciendis iure obcaecati sapiente nisi odit omnis blanditiis!
                            Laborum distinctio necessitatibus, modi in veritatis amet magni esse facere
                            repellat vitae, harum, labore fuga!
                        </p>

                        <div className="info-img">
                            <img src="img/team.jpg" alt=""/>
                        </div>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia modi
                            repellendus, cupiditate nobis quos quis aliquam. Rem fugiat dolores voluptatum
                            repellendus rerum, illum asperiores exercitationem dolorum nisi iusto et ullam
                            enim. A, obcaecati. Nulla at iste incidunt perferendis ut, odit quia voluptatum
                            voluptatem voluptas voluptates et consequatur dolorum labore voluptatibus illum
                            dolor facere corporis error.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eaque, perferendis
                            blanditiis qui provident officiis libero nisi labore voluptate, dolorem ex,
                            nulla laudantium praesentium aspernatur saepe incidunt iusto expedita inventore.
                            Quos, dolorem eius similique veniam nisi placeat provident. Voluptatem atque
                            doloribus at.
                        </p>

                        <h3>Best Talents</h3>

                        <Slider {...settings}>
                            <div className="slick-slide-wrap">
                                <div
                                    class="slick-slide"
                                    style={{
                                    "background": "url(img/work1.jpg) no-repeat center",
                                    "background-size": "cover"
                                }}>
                                    <div className="slick-slide-inner"></div>
                                </div>
                            </div>

                            <div className="slick-slide-wrap">
                                <div
                                    class="slick-slide"
                                    style={{
                                    "background": "url(img/work2.jpg) no-repeat center",
                                    "background-size": "cover"
                                }}>
                                    <div className="slick-slide-inner"></div>
                                </div>
                            </div>

                            <div className="slick-slide-wrap">
                                <div
                                    class="slick-slide"
                                    style={{
                                    "background": "url(img/work3.jpg) no-repeat center",
                                    "background-size": "cover"
                                }}>
                                    <div className="slick-slide-inner"></div>
                                </div>
                            </div>

                            <div className="slick-slide-wrap">
                                <div
                                    class="slick-slide"
                                    style={{
                                    "background": "url(img/work4.jpg) no-repeat center",
                                    "background-size": "cover"
                                }}>
                                    <div className="slick-slide-inner"></div>
                                </div>
                            </div>
                        </Slider>

                        <div className="after-slider">&nbsp;</div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum dolorem
                            tenetur, quis quidem aliquam ab hic nobis ea quibusdam minima ullam eveniet
                            consequatur, tempore vel repellendus temporibus numquam consequuntur nostrum!
                            Suscipit aspernatur soluta atque voluptas dignissimos, debitis amet, dolorum rem
                            ipsum aliquid saepe doloribus molestias recusandae laborum exercitationem
                            voluptatibus? Praesentium accusantium quidem asperiores suscipit laudantium
                            nihil deserunt maiores veritatis consequuntur reiciendis recusandae eveniet sit
                            consectetur sint architecto quod pariatur fugit, perferendis inventore ex! Aut.
                        </p>
                    </div>

                    <div className="home-block">
                        <NavLink strict to="/" className="back-btn ico"></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default About