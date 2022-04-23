import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { getOrdersByUser } from '../../actions/orderActions';

class cabinetHistory extends React.PureComponent {
  componentDidMount() {
    this.props.getOrdersByUser(this.props.user._id);
  }

  render() {
    const { orders, ordersLoading } = this.props;

    return (
      <div className="cabinet-history">
        {!ordersLoading && (
          <div>
            {orders.length > 0 ? (
              <div>
                <div className="history-titles">
                  <div className="history-acc-date">Дата</div>

                  <div className="history-acc-status">Статус</div>

                  <div className="history-acc-price">Cумма</div>
                </div>
                <Accordion
                  className="history-acc"
                  allowMultipleExpanded={true}
                  allowZeroExpanded={true}
                >
                  {orders.map((elem) => (
                    <AccordionItem className="history-acc-item" key={elem._id}>
                      <AccordionItemHeading>
                        <AccordionItemButton className="history-acc-button">
                          <div className="history-acc-date">
                            <Moment format="DD.MM.yyy">{elem.createdAt}</Moment>
                          </div>

                          <div className="history-acc-status">
                            {elem.status === 'new' ? (
                              <div>Новый</div>
                            ) : elem.status === 'processing' ? (
                              <div>В работе</div>
                            ) : (
                              <div>Закрыт</div>
                            )}
                          </div>

                          <div className="history-acc-price">
                            {elem.cart.total}
                            <div className="dollar">грн</div>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="history-acc-content">
                        {elem.cart.items.map((cartElem) => (
                          <div className="product-line">
                            <div className="product-title">
                              {cartElem.item.title}
                            </div>
                            <div className="product-dots"></div>
                            <div className="product-count">
                              <span className="x">x</span>
                              {cartElem.count}
                            </div>
                          </div>
                        ))}

                        {elem.delivery === '0' && (
                          <span className="plus-post">+ Новая Почта</span>
                        )}
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <div className="empty-history">Список пуст</div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  orders: state.order.orders,
  ordersLoading: state.order.isLoading,
});

export default connect(mapStateToProps, { getOrdersByUser })(cabinetHistory);
