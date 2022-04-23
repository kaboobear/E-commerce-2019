import React, { PureComponent as Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions/itemActions';
import { NavLink } from 'react-router-dom';

class AdminItem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    let { elem } = this.props;

    return (
      <div className="admin-item-wrap">
        <div className="admin-item">
          <div className="admin-info">
            <div
              className={`admin-item-img ${
                elem.imgName === 'default.png' ? 'no-img' : ''
              }`}
            >
              <img
                src={`/img/${
                  elem.imgName !== 'default.png'
                    ? `uploads/${elem.imgName}`
                    : 'default.png'
                }`}
                alt=""
              />
            </div>

            <div className="admin-text">
              <div className="admin-item-title">{elem.title}</div>

              <div className="admin-item-price">
                {elem.price} <span className="dollar">грн</span>
              </div>
            </div>
          </div>

          <div className="admin-buttons">
            <NavLink
              to={`/admin/products/edit/${elem._id}`}
              className="admin-edit-btn"
            >
              <img src="/img/pen.png" alt="" />
            </NavLink>
            <div
              className="admin-delete-btn"
              onClick={() => {
                this.onDeleteClick(elem._id);
              }}
            >
              <img src="/img/trash.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteItem })(AdminItem);
