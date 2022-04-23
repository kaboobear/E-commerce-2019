import React, { PureComponent as Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment/locale/ru';

class Order extends Component {
  render() {
    let { elem } = this.props;

    return (
      <div className="order-item-wrap">
        <NavLink to={`/admin/orders/${elem._id}`} class="order-item">
          <div class="order-button">
            <div className="order-item-id">#{this.props.id}</div>
            <div className="order-item-author">{elem.name}</div>
            <div className="order-item-count">
              {elem.cart.count}
              шт.
            </div>
            <div className="order-item-total">
              {elem.cart.total}
              <span className="dollar">грн</span>
            </div>
            <div className="order-item-time">
              <Moment className="" fromNow>
                {elem.createdAt.toString()}
              </Moment>
            </div>
            {/* <div className="order-item-status">
                            {elem.status === 'new' ? (<div>Новый</div>) : elem.status === 'processing' ? (<div>В работе</div>) : (<div>Закрыт</div>)}
                        </div> */}
          </div>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Order);
