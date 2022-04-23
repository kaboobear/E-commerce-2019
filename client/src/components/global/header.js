import React, { PureComponent as Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import Dropdown from './dropdown';
import SideMenu from './sideMenu';
import $ from 'jquery';

class Header extends Component {
  state = {
    isScrolled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      this.setState({
        isScrolled: winScroll > 60,
      });
    });

    $('.ham').click(function () {
      $('.mobile-nav').toggleClass('active');
    });

    $('.close').click(function () {
      $('.mobile-nav').toggleClass('active');
    });
  }

  toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const { user, isLoading, cart } = this.props;
    let username = '';
    if (user.mail) {
      username = user.mail;
      username = username.slice(0, username.lastIndexOf('@'));
    }

    return (
      <div className="header-section">
        <div className="container flex-wrap">
          <NavLink exact className="header-logo" to="/">
            <span>Sticky</span>
          </NavLink>

          <SideMenu toTop={this.toTop} isScrolled={this.state.isScrolled} />

          {isLoading === false && (
            <ul className="header-nav desk">
              <li>
                <NavLink exact className="nav-item" to="/">
                  <img src="/img/house.png" alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink exact className="nav-item" to="/about">
                  <img src="/img/about.png" alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink exact className="nav-item" to="/faq">
                  <img src="/img/faq.png" alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink exact className="nav-item" to="/contacts">
                  <img src="/img/phone.png" alt="" />
                </NavLink>
              </li>
            </ul>
          )}

          <ul className={`header-user ${this.props.isAuth && 'logged'}`}>
            <li>
              <NavLink to="/cart" className="header-cart">
                <div className="cart-ico">
                  <div className="cart-ico-img">
                    <img src="/img/cart.png" alt="" />
                  </div>

                  <div className="cart-count">{cart.count}</div>
                </div>
                <div className="cart-total">
                  {cart.total}
                  <span className="dollar">грн</span>
                </div>
              </NavLink>
            </li>

            {isLoading === false && !this.props.isAuth ? (
              <>
                <li>
                  <NavLink exact className="btn simple user-btn" to="/login">
                    <div className="user-btn-img"></div>
                    <span className="log-text">Войти</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="dropdown-wrap">
                  <Dropdown
                    logout={() => {
                      this.props.logout();
                      this.props.history.push('/login');
                    }}
                    username={username}
                  />
                </li>
              </>
            )}

            <li className="ham"></li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  user: state.auth.user,
  error: state.error,
  cart: state.cart,
});

export default withRouter(connect(mapStateToProps, { logout })(Header));
