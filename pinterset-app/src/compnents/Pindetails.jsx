import Button from 'react-bootstrap/Button';

import React from 'react'
import { Allpins } from './Allpins';

export const Pindetails = ({ pindetalis, categories, handelClik }) => {
    console.log(categories.pins);
    let chunkSize = categories.pins.length / 5;
    let chunks = Array.from({ length: Math.ceil(categories.pins.length / chunkSize) }, (_, i) =>
        categories.pins.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
    chunks = chunks.sort(() => Math.random() - 0.5)
    return (
        <div className='pindetails'>
            {/* <div>For you</div> */}
            <div className='onepost rounded-5 shadow-lg '>
                <div className='part1 rounded-5' style={{ width: "52%", height: "100%" }}>
                    <img className='rounded-5 rounded-end-0' height="100%" width="100%" src={pindetalis.pinImage} />
                </div>
                <div className='part2 rounded-5 rounded-start-0' style={{ width: "48%", height: "100%" }}>
                    <div className='smNav p-3'>
                        <div className='d-flex' style={{ justifyContent: "start", alignItems: "center", gap: "2rem" }}>

                            <div >
                                <svg class="gUZ R19 U9O kVc" height="50" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z">
                                </path></svg>
                            </div>
                            <div>
                                <svg class="gUZ R19 U9O kVc" height="50" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z">
                                </path></svg>
                            </div>
                            <div><svg class="Hn_ gUZ R19 U9O kVc" height="50" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="m21 7.24-4.05 4.05-1.06-1.06.67-.67a1.5 1.5 0 1 0-2.12-2.12l-.67.67-1.06-1.06L16.76 3zm-9.7 9.7L7.23 21 3 16.76l4.05-4.05 1.06 1.06-.67.67a1.5 1.5 0 0 0 2.12 2.12l.67-.67zM14.63.89l-4.05 4.05a3 3 0 0 0 0 4.24l1.06 1.06-1.42 1.42-1.06-1.06a3 3 0 0 0-4.24 0L.88 14.64a3 3 0 0 0 0 4.24l4.24 4.24a3 3 0 0 0 4.24 0l4.05-4.05a3 3 0 0 0 0-4.24l-1.06-1.06 1.42-1.42 1.06 1.06a3 3 0 0 0 4.24 0l4.05-4.05a3 3 0 0 0 0-4.24L18.88.88a3 3 0 0 0-4.24 0z">
                            </path></svg></div>
                        </div>
                    </div>
                    <div className='pin_content p-3 d-flex'>
                        {/* Title */}
                        <h1>{pindetalis.title}</h1>
                        {/* descriptions */}
                        <p>
                            {pindetalis.description}
                        </p>
                        <div className='user'>
                            <div className='infos p-2'>
                                <div className='rounded-5'>
                                    {/* userImage */}
                                    <img className='rounded-5' width="45" height="45" src='https://i.pinimg.com/75x75_RS/40/c1/af/40c1afe703a6bb6c4a6a2d76187c1168.jpg' />
                                </div>
                                <div className='names'>
                                    {/* {userNmae} */}
                                    <span>{pindetalis.user.name}</span>
                                    {/* number of followers */}
                                    <span>6.5k followers</span>
                                </div>
                            </div>
                            <Button className='rounded-4' style={{ border: "none", backgroundColor: "#F0F0F0" }}>Follow</Button>
                        </div>
                        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Comments</span>
                        {/* //commet */}
                        {pindetalis.comments.map((comment) =>
                            <div key={comment.id} className='comment rounded-5 d-flex' style={{ gap: "0.5rem" }}>
                                <img className='rounded-5' width="30" height="30" src='https://i.pinimg.com/75x75_RS/40/c1/af/40c1afe703a6bb6c4a6a2d76187c1168.jpg' />
                                <div className='d-flex ' style={{ alignItems: "center", gap: "0.5rem" }}>

                                    <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{comment.user.name}</span>
                                    <span style={{ fontSize: "0.8rem", fontWeight: "lighter" }}>{comment.content}</span>
                                </div>
                            </div>
                        )}
                        {pindetalis.comments.length === 0 && <p>No Comments here now </p>}
                    </div>
                </div>

            </div>
            <Allpins handelClik={handelClik} pins={chunks} />
        </div>
    )
}
