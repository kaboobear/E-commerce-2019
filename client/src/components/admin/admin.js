import React, { PureComponent as Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';
import { NavLink, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import Pagination from '../products/pagination'
import Add from './addItem';
import Edit from './editItem';
import Orders from './orders';
import ProductItems from './productItems';
import AdminLogin from './adminLogin';
import AdminMain from './adminMain';
import OrderPage from './orderPage';
import { logout } from '../../actions/authActions';

class Admin extends Component {
  componentDidMount() {
    this.props.getItems(1, 10000, 0, 0, 10000000, 0, 1, '', false);
  }

  render() {
    let { user, isAuth } = this.props;

    return (
      <Fragment>
        {isAuth ? (
          <Fragment>
            {user.isAdmin ? (
              <div className="admin-section">
                <ul className="admin-sidebar">
                  <li>
                    <div className="admin-head main-head">
                      <img src="/img/cog.png" alt="" />
                      Admin Panel
                    </div>
                  </li>
                  <li>
                    <NavLink exact to="/admin">
                      <img src="/img/house.png" alt="" />{' '}
                      <span className="admin-side-text">Домой</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/products">
                      <img src="/img/box.png" alt="" />{' '}
                      <span className="admin-side-text">Продукты</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/admin/orders">
                      <img src="/img/truck.png" alt="" />{' '}
                      <span className="admin-side-text">Заказы</span>
                    </NavLink>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        this.props.logout();
                      }}
                    >
                      <img src="/img/door.png" alt="" />{' '}
                      <span className="admin-side-text">Выход</span>
                    </div>
                  </li>
                </ul>

                <div className="admin-content">
                  <Route
                    path="/admin/products/edit/:id"
                    exact
                    render={({ match }) => <Edit id={match.params.id} />}
                  />
                  <Route path="/admin" exact component={AdminMain} />
                  <Route
                    path="/admin/products/add"
                    exact
                    strict
                    component={Add}
                  />
                  <Route
                    path="/admin/products"
                    exact
                    component={ProductItems}
                  />
                  <Route path="/admin/orders" exact strict component={Orders} />
                  <Route
                    path="/admin/orders/:id"
                    exact
                    render={({ match }) => <OrderPage id={match.params.id} />}
                  />
                </div>
              </div>
            ) : (
              <div className="not-admin-panel">
                <div className="admin-head log-head">
                  <img src="/img/cog.png" alt="" />
                  Admin Panel
                </div>

                <div className="not-admin">Вы не администратор</div>

                <div
                  onClick={() => {
                    this.props.logout();
                  }}
                  exact
                  className="btn"
                >
                  <img src="/img/home.svg" alt="" />
                </div>
              </div>
            )}
          </Fragment>
        ) : (
          <AdminLogin />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items.items,
  isLoading: state.items.isLoading,
  user: state.auth.user,
  isAuth: state.auth.isAuthenticated,
  isUserLoading: state.auth.isLoading,
  pagination: state.items.pagination,
});

export default withRouter(
  connect(mapStateToProps, { getItems, logout })(Admin),
);
