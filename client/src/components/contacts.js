import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Contacts extends Component {
    state = {
        isLoaded: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoaded: true})
        }, 150)
    }

    render() {
        return (
            <div
                className={`info-page ${this.state.isLoaded
                ? 'ready'
                : 'unready'}`}>
                <div className="container small">
                    <div className="info-page-title">
                        Contact Us
                    </div>

                    <div className="info-img">
                        <img src="img/store.jpg" alt=""/>
                    </div>

                    <div className="info-block">
                        <h3>Where to find us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla harum veritatis
                            necessitatibus culpa quam! Illo, distinctio iure culpa aliquam, modi quo dolorem
                            delectus quisquam hic alias iusto, perferendis nam? Quos, dolores rerum optio
                            error, beatae, corporis ipsum nam minima accusamus itaque ad!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur amet sapiente
                            ratione mollitia quidem architecto assumenda sint voluptatem sed. Animi, ducimus
                            fugiat perspiciatis eos nobis a? Molestiae, expedita aliquam.
                        </p>

                        <div className="contacts-data">
                            <div className="contacts-line">
                                <div className="contacts-img">
                                    <img src="img/loc.png" alt=""/>
                                </div>

                                <div className="contacts-info">
                                    <span className="city">Kiev :
                                    </span>
                                    Lisova 20
                                    <br/>
                                    <span className="city">Chernihiv :
                                    </span>
                                    Goncha 49
                                    <br/>
                                    <span className="city">New York :
                                    </span>
                                    Brooklyn 6
                                </div>
                            </div>

                            <div className="contacts-line">
                                <div className="contacts-img">
                                    <img src="img/phone.svg" alt=""/>
                                </div>

                                <div className="contacts-info">
                                    <span className="city">Ukraine :
                                    </span>
                                    +380931484957
                                    <br/>
                                    <span className="city">Russia :
                                    </span>
                                    +493034343434
                                    <br/>
                                    <span className="city">USA :
                                    </span>
                                    +12025550160
                                </div>
                            </div>

                            <div className="contacts-line">
                                <div className="contacts-img">
                                    <img src="img/mail.svg" alt=""/>
                                </div>

                                <div className="contacts-info">
                                    <span className="city">Bussiness :
                                    </span>
                                    sticky-biz@gmail.com
                                    <br/>
                                    <span className="city">Order :
                                    </span>
                                    sticky-order@gmail.com
                                    <br/>
                                    <span className="city">Quastions :
                                    </span>
                                    sticky-faq@gmail.com
                                </div>
                            </div>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ullam temporibus
                            fugiat dicta, minus consequuntur blanditiis! Veritatis explicabo rem aliquid
                            sunt ab id, labore fugiat? Repellendus, optio ullam. Perferendis sit maiores
                            cupiditate accusamus ullam suscipit distinctio! Ipsum suscipit distinctio
                            adipisci, maxime est minus aut ex quod minima atque deleniti molestiae harum
                            consequatur?
                        </p>

                        <div className="info-img map-img">
                            <img src="img/map.png" alt=""/>
                        </div>
                    </div>

                    <div className="home-block">
                            <NavLink strict to="/" className="back-btn ico"></NavLink>
                        </div>

                </div>
            </div>
        )
    }
}

export default Contacts