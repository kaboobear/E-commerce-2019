import React from 'react';
import {connect} from "react-redux";
import {setDelivery} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
import ReactTooltip from "react-tooltip";

class cabinetDelivery extends React.PureComponent {
    state = {
        name: '',
        phone: '',
        city: '',
        address: '',
        msg: {}
    }

    componentDidMount() {
        (this.props.user.delivery) && this.setState({name: this.props.user.delivery.name, phone: this.props.user.delivery.phone, city: this.props.user.delivery.city, address: this.props.user.delivery.address});
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuth !== prevProps.isAuth && (this.props.user.delivery)) {
            this.setState({name: this.props.user.delivery.name, phone: this.props.user.delivery.phone, city: this.props.user.delivery.city, address: this.props.user.delivery.address});
        }

        if (this.props.error !== prevProps.error) {
            if (this.props.error.id === "AUTH_EDIT_FAIL") {
                this.setState({msg: this.props.error.msg})
            } else 
                this.setState({msg: {}});
            }
        }

    componentWillUnmount() {
        this
            .props
            .clearErrors();
    }

    onChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.props.user.delivery) {
            if (this.props.user.delivery.name !== this.state.name || this.props.user.delivery.phone !== this.state.phone || this.props.user.delivery.city !== this.state.city || this.props.user.delivery.address !== this.state.address) {
                const userData = {
                    name: this.state.name,
                    phone: this.state.phone,
                    city: this.state.city,
                    address: this.state.address,
                    user: this.props.user
                }

                this
                    .props
                    .setDelivery(userData);
            }
        } else {
            const userData = {
                name: this.state.name,
                phone: this.state.phone,
                city: this.state.city,
                address: this.state.address,
                user: this.props.user
            }

            this
                .props
                .setDelivery(userData);
        }

    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="delivery-form" autoComplete="off">
                <div className="check-block-wrap">
                    <div className="check-block">
                        <div className="check-block-img">
                            <img src="/img/client.png" alt=""/>
                        </div>

                        <div className="check-block-info">
                            <div className="check-block-title">
                                Клиент
                            </div>

                            <div className="input-title">ФИО</div>
                            <div
                                className="simple-input"
                                data-tip={this.state.msg.name
                                ? this.state.msg.name
                                : ''}>
                                <input
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    placeholder="Лесовой Сергей Юриевич"
                                    onChange={this.onChange}
                                    className={this.state.msg.name && "error"}/> {this.state.msg.name && (
                                    <div className="exclam">
                                        <img src="/img/exclam-ico.png" alt=""/>
                                    </div>
                                )}
                            </div>

                            <div className="input-title">Телефон</div>
                            <div
                                className="simple-input"
                                data-tip={this.state.msg.phone
                                ? this.state.msg.phone
                                : ''}>
                                <input
                                    type="text"
                                    name="phone"
                                    value={this.state.phone}
                                    placeholder="093-152-47-59"
                                    onChange={this.onChange}
                                    className={this.state.msg.phone && "error"}/> {this.state.msg.phone && (
                                    <div className="exclam">
                                        <img src="/img/exclam-ico.png" alt=""/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <ReactTooltip type="error" effect="solid" place="right"/>
                </div>

                <div className="check-block-wrap">
                    <div className="check-block">
                        <div className="check-block-img">
                            <img src="/img/loc.png" alt=""/>
                        </div>

                        <div className="check-block-info">
                            <div className="check-block-title">
                                Локация
                            </div>

                            <div className="input-title">Город</div>
                            <div
                                className="simple-input"
                                data-tip={this.state.msg.city
                                ? this.state.msg.city
                                : ''}>
                                <input
                                    type="text"
                                    onChange={this.onChange}
                                    name="city"
                                    value={this.state.city}
                                    placeholder="Киев"
                                    className={this.state.msg.city && "error"}/> {this.state.msg.city && (
                                    <div className="exclam">
                                        <img src="/img/exclam-ico.png" alt=""/>
                                    </div>
                                )}
                            </div>

                            <div className="input-title">Адрес</div>
                            <div
                                className="simple-input"
                                data-tip={this.state.msg.address
                                ? this.state.msg.address
                                : ''}>
                                <input
                                    type="text"
                                    onChange={this.onChange}
                                    name="address"
                                    value={this.state.address}
                                    placeholder="Чигорина д.23 кв.17"
                                    className={this.state.msg.address && "error"}/> {this.state.msg.address && (
                                    <div className="exclam">
                                        <img src="/img/exclam-ico.png" alt=""/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn">Cохранить</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuthenticated, isLoading: state.auth.isLoading, user: state.auth.user, error: state.error})

export default connect(mapStateToProps, {setDelivery, clearErrors})(cabinetDelivery);