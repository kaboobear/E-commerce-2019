import React, { PureComponent as Component } from 'react';
import { connect } from 'react-redux';
import { calcCounts } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

class Main extends Component {
  componentDidMount() {
    this.props.calcCounts();
  }

  render() {
    const { countLoading, counts } = this.props;

    return (
      <div>
        <div className="main-section">
          <div className="admin-wrap-title">Главная</div>

          {!countLoading && (
            <div className="counts-line">
              <div className="count-item-wrap">
                <div className="count-item">
                  <div className="count-img">
                    <img src="/img/box.png" alt="" />
                  </div>

                  <div className="count-title">Товаров</div>

                  <div className="count-value">{counts.productsCount}</div>
                </div>
              </div>

              <div className="count-item-wrap">
                <div className="count-item">
                  <div className="count-img">
                    <img src="/img/user.png" alt="" />
                  </div>

                  <div className="count-title">Пользователей</div>

                  <div className="count-value">{counts.usersCount}</div>
                </div>
              </div>

              <div className="count-item-wrap">
                <div className="count-item">
                  <div className="count-img">
                    <img src="/img/truck.png" alt="" />
                  </div>

                  <div className="count-title">Заказов</div>

                  <div className="count-value">{counts.ordersCount}</div>
                </div>
              </div>

              <div className="count-item-wrap">
                <div className="count-item">
                  <div className="count-img">
                    <img src="/img/calc.png" alt="" />
                  </div>

                  <div className="count-title">Продано</div>

                  <div className="count-value">
                    {counts.totalCount} <span className="dollar">шт</span>
                  </div>
                </div>
              </div>

              <div className="count-item-wrap">
                <div className="count-item">
                  <div className="count-img">
                    <img src="/img/wallet.png" alt="" />
                  </div>

                  <div className="count-title">Прибыль</div>

                  <div className="count-value">
                    {counts.summary} <span className="dollar">грн</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countLoading: state.auth.countLoading,
  counts: state.auth.counts,
});

export default withRouter(connect(mapStateToProps, { calcCounts })(Main));
