import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Dropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    // if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
    // }
  }

  render() {
    return (
      <div className = "dropdown-block">
        <div className={`dropdown-button${this.state.showMenu ? ' active' : ''}`} onClick={this.showMenu}>
          <img src="/img/user.png" alt=""/> {this.props.username} <span className="dropdown-arrow"></span>
        </div>
        
        {
          this.state.showMenu
            ? (
              <div className="dropdown-list" ref={(element) => {this.dropdownMenu = element;}}>
                <NavLink to = "/cabinet/user" className="dropdown-item"> Мой кабинет </NavLink>
                {/* <NavLink to = "/settings" className="dropdown-item"> Настойки </NavLink> */}
                <div onClick={this.props.logout} className="dropdown-item"> Выход </div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Dropdown;