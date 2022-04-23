import React, { PureComponent as Component } from 'react';
// import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import Accordion from './faq-acc';
import Lazy from '../global/lazyImage';

class Faq extends Component {
  componentDidMount() {
    //Accordeon start
    $('.acc-item').on('click', '.acc-button', function () {
      if ($(this).hasClass('active')) {
        $(this).next().stop(true).slideUp(500);
        $(this).removeClass('active');
      } else {
        $(this).next().stop(true).slideDown(500);
        $(this).addClass('active');
      }
    });
  }

  render() {
    return (
      <div className={`info-page`}>
        <div className="container small">
          <div className="info-page-title">Ваши вопросы</div>

          <div className="info-img">
            <Lazy image={{ src: '/img/ask.jpg' }} />
          </div>

          <div className="info-block">
            <h3>Мы заботимся о вас</h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              minus, aut ad nesciunt harum, molestias beatae velit amet omnis
              sunt eius doloribus quis ipsam obcaecati dolor! Delectus nostrum
              tenetur et sed! Laudantium odit delectus vero quisquam, deserunt
              officiis porro atque, deleniti similique odio illo doloremque.
            </p>

            <h3>Популярные вопросы</h3>
            <Accordion />

            <h3>Остались вопросы?</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              reprehenderit? Deleniti molestias reprehenderit praesentium
              excepturi fuga blanditiis velit eos quae maiores at, a eius in
              culpa quasi nemo laborum, esse dicta odio repudiandae suscipit.
              Accusantium inventore excepturi voluptate asperiores ipsum nihil
              ullam necessitatibus dolorem, sunt earum minus! Voluptatibus
              molestiae quidem aliquid omnis? Reprehenderit cupiditate
              aspernatur voluptate assumenda amet quos, illum optio?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos fugit vel ex porro ad, nesciunt non aperiam in error
              corporis. Temporibus eveniet nulla, quibusdam voluptatum at quidem
              repudiandae.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis ratione possimus similique aut quod ea repellendus
              debitis facere quidem beatae. Excepturi, laboriosam nobis minus,
              qui doloremque consequatur vero vel eius ea tempore aspernatur
              ducimus ipsam iste fuga, laudantium magni dolorum nesciunt.
            </p>
          </div>

          {/* <div className="home-block">
                        <NavLink strict to="/" className="back-btn ico"></NavLink>
                    </div> */}

          <div className="bottom-gap"></div>
        </div>
      </div>
    );
  }
}

export default Faq;
