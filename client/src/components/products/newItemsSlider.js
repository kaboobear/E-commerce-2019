import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

export default function newItemsSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {props.items.map((elem, id) => {
          if (id < 6) {
            return (
              <div className="product-item-out" key={elem._id}>
                <div className="product-item for-view">
                  <NavLink
                    onClick={() => {
                      window.scrollTo(0, 0);
                      props.countToOne();
                    }}
                    strict
                    to={`/item/${elem._id}`}
                    className={`product-item-img${
                      elem.imgName === 'default.png' ? ' no-img' : ''
                    }`}
                  >
                    {/* {elem.isFreeShipping && (
                                                <div className="isFreeShipping">
                                                    <img src="/img/truck.png" alt=""/>
                                                </div>
                                            )} */}

                    <img
                      className="img-elem"
                      src={`/img/${
                        elem.imgName !== 'default.png' ? 'uploads/' : ''
                      }${elem.imgName}`}
                      alt=""
                    />
                  </NavLink>

                  <div className="product-item-info">
                    <div className="product-item-title">{elem.title}</div>

                    <div className="product-item-price">
                      {elem.price}
                      <span className="dollar">грн</span>
                    </div>

                    <div className="cart-add-btn">
                      <img
                        className="cart-add-img"
                        src="/img/cart.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          } else return <></>;
        })}
      </Slider>
    </div>
  );
}
