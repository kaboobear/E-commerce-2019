import React from 'react'

export default function category(props) {
    return (
        <div className="categories">
            <div className="category-item-wrap">
                <label className="category-item">
                    <input
                        type="radio"
                        name="category"
                        value="1"
                        onChange={props.onChange}
                        checked={props.category === '1'}/>
                    <div className="category-item-inner">
                        <img src="/img/c1.png" alt=""/>
                    </div>
                </label>
            </div>
            <div className="category-item-wrap">
                <label className="category-item">
                    <input
                        type="radio"
                        name="category"
                        value="2"
                        onChange={props.onChange}
                        checked={props.category === '2'}/>
                    <div className="category-item-inner">
                        <img src="/img/c2.png" alt=""/>
                    </div>
                </label>
            </div>
            <div className="category-item-wrap">
                <label className="category-item">
                    <input
                        type="radio"
                        name="category"
                        value="3"
                        onChange={props.onChange}
                        checked={props.category === '3'}/>
                    <div className="category-item-inner">
                        <img src="/img/c3.png" alt=""/>
                    </div>
                </label>
            </div>
            <div className="category-item-wrap">
                <label className="category-item">
                    <input
                        type="radio"
                        name="category"
                        value="4"
                        onChange={props.onChange}
                        checked={props.category === '4'}/>
                    <div className="category-item-inner">
                        <img src="/img/c4.png" alt=""/>
                    </div>
                </label>
            </div>
            <div className="category-item-wrap">
                <label className="category-item">
                    <input
                        type="radio"
                        name="category"
                        value="5"
                        onChange={props.onChange}
                        checked={props.category === '5'}/>
                    <div className="category-item-inner">
                        <img src="/img/c5.png" alt=""/>
                    </div>
                </label>
            </div>
            <div className="category-item-wrap">
                <label className="category-item">
                    <input
                        type="radio"
                        name="category"
                        value="6"
                        onChange={props.onChange}
                        checked={props.category === '6'}/>
                    <div className="category-item-inner">
                        <img src="/img/c6.png" alt=""/>
                    </div>
                </label>
            </div>
        </div>
    )
}
