import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import $ from 'jquery'

class Faq extends Component {
    state = {
        isLoaded:false
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({isLoaded:true})
        },150)

        //Accordeon start
        $('.acc-item')
            .on("click", ".acc-button", function () {
                if ($(this).hasClass('active')) {
                    $(this)
                        .next()
                        .stop(true)
                        .slideUp(500);
                    $(this).removeClass('active');
                } else {
                    $(this)
                        .next()
                        .stop(true)
                        .slideDown(500);
                    $(this).addClass('active');
                }
            });
    }

    render() {
        return (
            <div className={`info-page ${this.state.isLoaded ? 'ready' : 'unready'}`}>
                <div className="container small">
                    <div className="info-page-title">
                        Your Quastions
                    </div>

                    <div className="info-img">
                        <img src="img/ask.jpg" alt=""/>
                    </div>

                    <div className="info-block">
                        <h3>We Care About You</h3>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde minus, aut ad
                            nesciunt harum, molestias beatae velit amet omnis sunt eius doloribus quis ipsam
                            obcaecati dolor! Delectus nostrum tenetur et sed! Laudantium odit delectus vero
                            quisquam, deserunt officiis porro atque, deleniti similique odio illo
                            doloremque.
                        </p>

                        <h3>Popular Quastions</h3>

                        <div className="acc about-acc quastions">
                            <div className="acc-item">
                                <div className="acc-button">
                                    About shipping ?
                                </div>

                                <div className="acc-content">
                                    <div className="info-block">
                                        <h3>Best choice</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, vitae animi.
                                            Quod, excepturi repellendus numquam doloremque accusamus temporibus cumque
                                            maiores quo error, ad recusandae vero accusantium nesciunt beatae, perferendis
                                            eligendi aut! Pariatur repudiandae unde ratione officia suscipit aliquam numquam
                                            porro tempora!</p>

                                        <h3>Some facts</h3>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </li>
                                            <li>Lorem, ipsum dolor.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="acc-item">
                                <div className="acc-button">
                                    Where to find ?
                                </div>

                                <div className="acc-content">
                                    <div className="info-block">
                                        <h3>About materials</h3>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </li>
                                            <li>Lorem, ipsum dolor.</li>
                                            <li>Lorem, ipsum dolor. New item.</li>
                                        </ul>

                                        <h3>Factory process</h3>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat libero
                                            nostrum sapiente impedit maxime magni ut expedita molestiae modi tenetur, nisi
                                            blanditiis consequuntur! Adipisci, unde praesentium facere vel odio suscipit hic
                                            modi, magni accusamus magnam earum, quaerat ipsa architecto debitis inventore
                                            quos possimus temporibus!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="acc-item">
                                <div className="acc-button">
                                    Custom design ?
                                </div>

                                <div className="acc-content">
                                    <div className="info-block">
                                        <h3>Development process</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, vitae animi.
                                            Quod, excepturi repellendus numquam doloremque accusamus temporibus cumque
                                            maiores quo error, ad recusandae vero accusantium nesciunt beatae, perferendis
                                            eligendi aut! Pariatur repudiandae unde ratione officia suscipit aliquam numquam
                                            porro tempora!</p>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat libero
                                            nostrum sapiente impedit maxime magni ut expedita molestiae modi tenetur, nisi
                                            blanditiis consequuntur! Adipisci, unde praesentium facere vel odio suscipit hic
                                            modi, magni accusamus magnam earum, quaerat ipsa architecto debitis inventore
                                            quos possimus temporibus!</p>

                                        <h3>Some facts</h3>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </li>
                                            <li>Lorem, ipsum dolor.</li>
                                        </ul>

                                    </div>
                                </div>

                            </div>

                            <div className="acc-item">
                                <div className="acc-button">
                                    Bills and taxes ?
                                </div>

                                <div className="acc-content">
                                    <div className="info-block">
                                        <h3>Best choice</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, vitae animi.
                                            Quod, excepturi repellendus numquam doloremque accusamus temporibus cumque
                                            maiores quo error, ad recusandae vero accusantium nesciunt beatae, perferendis
                                            eligendi aut! Pariatur repudiandae unde ratione officia suscipit aliquam numquam
                                            porro tempora!</p>

                                        <h3>Some facts</h3>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </li>
                                            <li>Lorem, ipsum dolor.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="acc-item">
                                <div className="acc-button">
                                    Big order ?
                                </div>

                                <div className="acc-content">
                                    <div className="info-block">
                                        <h3>About materials</h3>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </li>
                                            <li>Lorem, ipsum dolor.</li>
                                            <li>Lorem, ipsum dolor. New item.</li>
                                        </ul>

                                        <h3>Factory process</h3>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat libero
                                            nostrum sapiente impedit maxime magni ut expedita molestiae modi tenetur, nisi
                                            blanditiis consequuntur! Adipisci, unde praesentium facere vel odio suscipit hic
                                            modi, magni accusamus magnam earum, quaerat ipsa architecto debitis inventore
                                            quos possimus temporibus!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3>Have One More?</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, reprehenderit?
                            Deleniti molestias reprehenderit praesentium excepturi fuga blanditiis velit eos
                            quae maiores at, a eius in culpa quasi nemo laborum, esse dicta odio repudiandae
                            suscipit. Accusantium inventore excepturi voluptate asperiores ipsum nihil ullam
                            necessitatibus dolorem, sunt earum minus! Voluptatibus molestiae quidem aliquid
                            omnis? Reprehenderit cupiditate aspernatur voluptate assumenda amet quos, illum
                            optio?
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit vel
                            ex porro ad, nesciunt non aperiam in error corporis. Temporibus eveniet nulla,
                            quibusdam voluptatum at quidem repudiandae.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ratione
                            possimus similique aut quod ea repellendus debitis facere quidem beatae.
                            Excepturi, laboriosam nobis minus, qui doloremque consequatur vero vel eius ea
                            tempore aspernatur ducimus ipsam iste fuga, laudantium magni dolorum nesciunt.
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

export default Faq