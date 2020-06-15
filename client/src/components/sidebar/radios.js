import React from 'react'

export default function radios(props) {
    return (
        <div className="radios">
            <label className="check-label">
                <input
                    type="radio"
                    name="shipping"
                    value="0"
                    checked={props.shipping === '0'}
                    onChange={props.onChange}/>
                <span className="check-box"></span>
                <span className="check-text">All</span>
            </label>

            <label className="check-label">
                <input
                    type="radio"
                    name="shipping"
                    value="1"
                    checked={props.shipping === '1'}
                    onChange={props.onChange}/>
                <span className="check-box"></span>
                <span className="check-text">Free</span>
            </label>

            <label className="check-label">
                <input
                    type="radio"
                    name="shipping"
                    checked={props.shipping === '2'}
                    onChange={props.onChange}
                    value="2"/>
                <span className="check-box"></span>
                <span className="check-text">Paid</span>
            </label>
        </div>
    )
}
