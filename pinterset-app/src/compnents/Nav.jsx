import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';


export const Nav = ({ view, changeView, handleSearch }) => {

    return (
        <Navbar expand="ms" fixed='top' bg='white' className="bg-body-white d-flex align-items-start shadow-sm flex-column " style={{ height: view === "allpins" ? "9rem" : "5rem", padding: "1rem 1rem 0.5rem 1rem " }}>
            <div className='d-flex justify-content-between w-100'>
                <div className='d-flex justify-content-between  ' style={{ width: "100%" }}>
                    <Button
                        onClick={() => changeView("allpins")}
                        className='btn-secondary rounded-5 d-flex align-items-center justify-content-around' style={{ border: "none", height: "3rem", width: "8rem" }} >
                        <svg className="gUZ GjR U9O kVc" style={{ strokeWidth: "0", verticalAlign: "middle" }} height="24" width="24" viewBox="0 0 24 24" aria-label="Pinterest" role="img">
                            <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12">
                            </path>
                        </svg>


                        Home</Button>
                    <Button
                        onClick={() => changeView("createpin")}

                        className=' btn-secondary rounded-5 d-flex align-items-center justify-content-around btn' style={{ border: "none", height: "3rem", width: "8rem" }} >


                        Create</Button>
                    {/* <Button className='btn-secondary rounded-5 d-flex align-items-center justify-content-around btn' style={{ border: "none", height: "3rem", width: "8rem" }} >


                        Analytics</Button> */}

                    <div className='rounded-5 d-flex align-items-center justify-content-center' style={{ height: "3rem", width: "100%" }}>
                        <input
                            name='search'
                            onChange={(e) => {
                                handleSearch(e.target.value)
                                

                            }}
                            className='rounded-5 d-flex' placeholder='search' style={{ paddingLeft: "3.2rem", alignItems: "center", backgroundColor: "#E1E1E1", height: "100%", width: "100%", border: "none" }} />
                        <svg className="gUZ ztu U9O kVc" style={{ position: "relative", right: "97%" }} fill='#5F5F5F' height="25" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24">
                        </path>
                        </svg>
                    </div>
                </div>

                <div className='d-flex justify-content-between ' >
                    {/* <div className='svg rounded-5 d-flex align-items-center justify-content-center' style={{ height: "3rem", width: "3rem" }}>
                        <svg className="gUZ ztu U9O kVc" fill='#5F5F5F' height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24">
                        </path>
                        </svg>
                    </div> */}
                    <div className='svg rounded-5 d-flex align-items-center justify-content-center' style={{ height: "3rem", width: "3rem" }}>
                        <svg className="gUZ ztu U9O kVc" fill='#5F5F5F' height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z">
                        </path>
                        </svg>
                    </div>
                    <div className='svg rounded-5 d-flex align-items-center justify-content-center' style={{ height: "3rem", width: "3rem" }}>
                        <svg className="Hn_ gUZ ztu U9O kVc" fill='#5F5F5F' height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0">
                        </path>
                        </svg>
                    </div>
                    <div className='svg rounded-5 d-flex align-items-center justify-content-center' style={{ height: "3rem", width: "3rem" }}>
                        <div className='svg rounded-5 d-flex align-items-center justify-content-center' style={{ backgroundColor: "#F0F0F0", height: "2rem", width: "2rem" }}>
                            <svg width="100%" viewBox="-50 -50 100 100" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                                <title>Rbk</title>
                                <text fontSize="2rem" fill="#111" dy="0.35em" textAnchor="middle" >
                                    R
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {view === "allpins" && <div className='align-self-center '>
                <p className='' style={{ margin: "0px", fontWeight: "500" }}>For you</p>
                <hr className="mt-1 m-0 border-3 " style={{ borderColor: "black", opacity: "1" }} />
            </div>}

        </Navbar >
    )
}
