import React from 'react'
import { OnePin } from './OnePin'

export const Allpins = ({ pins, handelClik }) => {
    console.log(pins);
    return (
        // <div className='container' style={{ marginTop:"10rem",position: "absolute", top: "100%", left: "50%", transform: "translate(-50%,-50%)" }}>
        <div className='all_cards d-flex' >
            {pins.map((sub, i) =>
                <div key={i} className='clomun'>
                    {sub.map((pin) => <OnePin handelClik={handelClik} key={pin.id} pin={pin} />)}
                </div>
            )}
        </div>
        // </div>

    )
}
