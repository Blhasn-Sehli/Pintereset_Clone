
import React from 'react'


export const OnePin = ({ pin, handelClik }) => {
    console.log(pin);
    return (
        <div className='rounded-4' style={{ height: "100%", width: "fit-content" }}>
            {/* <Button className='save_btn rounded-5'>Save</Button> */}
            <img
                onClick={() => handelClik(pin.id, pin.categoryId)}
                className='rounded-4 pin' style={{ width: "15rem", height: "95%" }} src={pin.pinImage} />
        </div>
    )
}
