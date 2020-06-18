import React, {PureComponent as Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import $  from 'jquery';

class Mobile extends Component {
    componentDidUpdate(){
            $(".mobile-nav li").click(function(){
                $(".mobile-nav").toggleClass('active');
            })
    }

    render() {
        // const {user} = this.props;

        return (
            <div className="mobile-nav">
                <div className="close">
                   
                </div>

                <ul>
                    <ul className="header-nav mob">
                        <li>
                            <NavLink exact className="nav-item" to="/"><img src="/img/house.png" alt=""/> Домой</NavLink>
                        </li>
                        <li>
                            <NavLink exact className="nav-item" to="/about"><img src="/img/about.png" alt=""/> О нас</NavLink>
                        </li>
                        <li>
                            <NavLink exact className="nav-item" to="/faq"><img src="/img/faq.png" alt=""/> FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink exact className="nav-item" to="/contacts"><img src="/img/phone.png" alt=""/> Контакты</NavLink>
                        </li>
                    </ul>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => ({user: state.auth.user,isLoading:state.auth.isLoading})

export default connect(mapStateToProps)(Mobile)