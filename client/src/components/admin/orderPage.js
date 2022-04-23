import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getOrderById, changeStatus } from '../../actions/orderActions';
import { NavLink } from 'react-router-dom';
import 'moment/locale/ru';

class orderPage extends React.PureComponent {
  componentDidMount() {
    this.props.getOrderById(this.props.id);
  }

  render() {
    const { order } = this.props;

    return (
      <div>
        <div className="admin-wrap-title orders-title">
          <NavLink strict to="/admin/orders" className="control-btn2">
            <img src="/img/my-arr-l.svg" alt="Детали заказа" />
          </NavLink>

          <div className="order-page-title">Детали заказа</div>
        </div>

        {!this.props.isLoading && this.props.order !== null && (
          <div class="order-item no-hover">
            <div class="order-content">
              <div className="order-cols">
                <div className="client-col">
                  <div className="order-col-title">
                    <img src="/img/client.png" alt="" />
                    <span>Клиент</span>
                  </div>

                  <div className="order-col-info">
                    <div className="order-col-line">
                      <div className="order-col-word">Имя:</div>

                      <div className="order-col-val">{order.name}</div>
                    </div>

                    <div className="order-col-line">
                      <div className="order-col-word">Телефон:</div>

                      <div className="order-col-val">{order.phone}</div>
                    </div>
                  </div>
                </div>

                <div className="location-col">
                  <div className="order-col-title">
                    <img src="/img/loc.png" alt="Локация" />
                    <span>Локация</span>
                  </div>

                  <div className="order-col-info">
                    <div className="order-col-line">
                      <div className="order-col-word">Город:</div>

                      <div className="order-col-val">{order.city}</div>
                    </div>

                    <div className="order-col-line">
                      <div className="order-col-word">Адрес:</div>

                      <div className="order-col-val">{order.address}</div>
                    </div>
                  </div>
                </div>

                <div className="delivery-col">
                  <div className="order-col-title">
                    <img src="/img/truck.png" alt="Доставка" />
                    <span>Доставка</span>
                  </div>

                  <div className="order-col-info">
                    <div className="order-col-line">
                      <div className="order-col-word">Служба:</div>

                      <div className="order-col-val">
                        {order.delivery === '0'
                          ? 'Новая Почта'
                          : order.delivery === '1' && 'Самовывоз'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="payment-col">
                  <div className="order-col-title">
                    <img src="/img/wallet.png" alt="Оплата" />
                    <span>Оплата</span>
                  </div>

                  <div className="order-col-info">
                    <div className="order-col-line">
                      <div className="order-col-word">Служба:</div>

                      <div className="order-col-val">
                        {order.payment === '0'
                          ? 'Кредитная катра'
                          : order.payment === '1' ?? 'Наличными'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="products-block-wrap">
                <div className="products-block">
                  <div className="order-col-title">
                    <span>Продукты</span>
                  </div>

                  {order.cart.items.map((cartElem) => (
                    <div className="product-line">
                      <div className="product-title">{cartElem.item.title}</div>
                      <div className="product-dots"></div>
                      <div className="product-count">
                        <span className="x">x</span>
                        {cartElem.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="results-block">
                <div className="results-total">
                  <div className="total-word">Сумма:</div>

                  <div className="total-val">
                    {order.cart.total}
                    <span className="dollar">грн</span>
                  </div>
                </div>

                <div className="status-buttons">
                  {order.status === 'new' ? (
                    <div
                      onClick={() => {
                        this.props.changeStatus(order._id, 'processing');
                      }}
                      className="next-btn"
                    >
                      В работе
                      <img src="/img/my-arr-l.svg" alt="В работе" />
                    </div>
                  ) : order.status === 'processing' ? (
                    <Fragment>
                      <div
                        onClick={() => {
                          this.props.changeStatus(order._id, 'new');
                        }}
                        className="prev-btn"
                      >
                        <img src="/img/my-arr-l.svg" alt="Новый" />
                        Новый
                      </div>

                      <div
                        onClick={() => {
                          this.props.changeStatus(order._id, 'finished');
                        }}
                        className="next-btn"
                      >
                        Закрыт
                        <img src="/img/my-arr-l.svg" alt="Закрыт" />
                      </div>
                    </Fragment>
                  ) : (
                    <div
                      onClick={() => {
                        this.props.changeStatus(order._id, 'processing');
                      }}
                      className="prev-btn"
                    >
                      <img src="/img/my-arr-l.svg" alt="В работе" />В работе
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order.order,
  isLoading: state.order.isLoading,
});

export default connect(mapStateToProps, { getOrderById, changeStatus })(
  orderPage,
);
