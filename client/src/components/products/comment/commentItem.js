import React, {Component} from 'react';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import 'moment/locale/ru';
import { withRouter } from "react-router-dom";

class CommentItem extends Component {

    render() {
        const comment = this.props.data;
        let username = '';
        if(comment.author.mail){
            username = comment.author.mail;
            username = username.slice(0,username.lastIndexOf('@'))
        }

        return (
            <div className="comment-item">
                <div className="comment-img">
                    <img src="/img/com.png" alt=""/>
                </div>

                <div className="comment-content">
                    <div className="comment-top">
                        <div className="comment-title">{username}</div>
                        <Moment className="comment-time" fromNow>{comment.createdAt.toString()}</Moment>
                    </div>

                    <div className="comment-text">{comment.text}</div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

export default withRouter(connect(mapStateToProps, {})(CommentItem));