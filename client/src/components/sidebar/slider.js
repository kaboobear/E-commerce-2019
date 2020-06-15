import React from 'react'
import Nouislider from 'nouislider-react'
import "nouislider/distribute/nouislider.css";


export default function slider(props) {
    return (
        <div>
            <Nouislider
                connect
                start={[0, props.maxPrice]}
                behaviour="tap"
                range={{
                min: [0],
                max: [props.maxPrice]
            }}
                onSlide={props.onSlide}/>

            <div className="values">
                <input type="text" className="from" value={props.rangeStart} disabled/>
                <div className="dash">-</div>
                <input type="text" className="to" value={props.rangeEnd} disabled/>
            </div>
        </div>
    )
}
