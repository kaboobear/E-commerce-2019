import React from 'react'
import CabinetSide from './cabinetSide';
import CabinetUser from './cabinetUser';
import {Route,withRouter} from 'react-router-dom';
import CabinetDelivery from './cabinetDelivery';
import CabinetHistory from './cabinetHistory';
import {connect} from "react-redux";

class cabinet extends React.Component {
    componentDidMount(){
        if (this.props.isAuth === false) {
                 this
                .props
                .history
                .push('/');
        }
    }

    render() {
        return (
            <div className="cabinet-section">
                <div className="container small2">
                    <div className="cart-title">
                        <span>Кабинет</span>
                    </div>

                    <div className="flex-wrap">
                        <CabinetSide/>

                        <div className="cabinet-content">
                            <Route path="/cabinet/user" exact component={CabinetUser}/>
                            <Route path="/cabinet/delivery" exact component={CabinetDelivery}/>
                            <Route path="/cabinet/history" exact component={CabinetHistory}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({orders: state.order.orders,user: state.auth.user, isLoading: state.auth.isLoading, isAuth: state.auth.isAuthenticated})

export default withRouter(connect(mapStateToProps, {})(cabinet));