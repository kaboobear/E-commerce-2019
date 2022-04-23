import React, { PureComponent as Component } from 'react';
// import {NavLink} from 'react-router-dom';
import Lazy from '../global/lazyImage';

class Contacts extends Component {
  render() {
    return (
      <div className={`info-page`}>
        <div className="container small">
          <div className="info-page-title">Контакты</div>

          <div className="info-img">
            <Lazy
              image={{
                src: '/img/store.jpg',
              }}
            />
          </div>

          <div className="info-block">
            <h3>Где нас найти?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              harum veritatis necessitatibus culpa quam! Illo, distinctio iure
              culpa aliquam, modi quo dolorem delectus quisquam hic alias iusto,
              perferendis nam? Quos, dolores rerum optio error, beatae, corporis
              ipsum nam minima accusamus itaque ad!
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              amet sapiente ratione mollitia quidem architecto assumenda sint
              voluptatem sed. Animi, ducimus fugiat perspiciatis eos nobis a?
              Molestiae, expedita aliquam.
            </p>

            <div className="contacts-data">
              {/* <div className="contacts-line">
                                <div className="contacts-img">
                                    <img src="/img/loc.png" alt=""/>
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
                            </div> */}

              <div className="contacts-line">
                <div className="contacts-img">
                  <img src="/img/phone.svg" alt="" />
                </div>

                <div className="contacts-info">
                  <span className="city">Кирилл :</span>
                  +380931484957
                  <br />
                  <span className="city">Ольга :</span>
                  +380635630136
                  <br />
                  <span className="city">Виктор :</span>
                  +380931484957
                </div>
              </div>

              <div className="contacts-line">
                <div className="contacts-img">
                  <img src="/img/mail.svg" alt="" />
                </div>

                <div className="contacts-info">
                  <span className="city">Бизнес :</span>
                  sticky.biz@gmail.com
                  <br />
                  <span className="city">Заказ :</span>
                  sticky.order@gmail.com
                  <br />
                  <span className="city">Вопросы :</span>
                  sticky.faq@gmail.com
                </div>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ullam
              temporibus fugiat dicta, minus consequuntur blanditiis! Veritatis
              explicabo rem aliquid sunt ab id, labore fugiat? Repellendus,
              optio ullam. Perferendis sit maiores cupiditate accusamus ullam
              suscipit distinctio! Ipsum suscipit distinctio adipisci, maxime
              est minus aut ex quod minima atque deleniti molestiae harum
              consequatur?
            </p>

            <div className="info-img map-img">
              <Lazy
                image={{
                  src: '/img/map.png',
                }}
              />
            </div>
          </div>
          {/* 
                    <div className="home-block">
                        <NavLink strict to="/" className="back-btn ico"></NavLink>
                    </div> */}

          <div className="bottom-gap"></div>
        </div>
      </div>
    );
  }
}

export default Contacts;
