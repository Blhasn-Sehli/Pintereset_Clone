
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import axios from 'axios';

export const CreatePin = ({ handlPost }) => {
    const [from, setForm] = useState({
        pinImage: "",
        title: "",
        description: "",
        destinationLink: "",
        categoryId: 3,
        userId: 1
    })


    const cloudinaryImage = async (e) => {
        try {
            const formData = new FormData();
            formData.append("file", e.target.files[0]);
            formData.append("upload_preset", "hztbh89j");
            const res = await axios.post("https://api.cloudinary.com/v1_1/daexsprzx/image/upload", formData);
            let cp = { ...from }
            setForm({ ...cp, pinImage: res.data.secure_url });
        } catch (error) {
            console.log(error);
        }
    }
    const handleForm = (e) => {
        setForm({
            ...from,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='createPin_container '>
            <div className='child d-flex rounded-4 shadow-sm p-5'>
                <div className='tabs rounded-4 rounded-bottom-0'>
                    <div className='svg '>
                        <svg className="gUZ ztu U9O kVc" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z">
                        </path>
                        </svg>
                    </div>
                    <Button
                        onClick={() => handlPost(from)}
                        variant="danger" style={{ border: "none", backgroundColor: "rgb(230, 0, 35)", color: "white" }}>Publish</Button>

                </div>
                <div className='content d-flex' >
                    {/* input image Div  */}
                    <div style={{ width: "40%", height: "100%", backgroundColor: "#EFEFEF" }}>
                        <div className='p-2 m-3' style={{ zIndex: "0", border: "0.1rem dashed rgb(218, 218, 218)", borderRadius: "6px", height: "90%", position: "relative" }}>
                            <div style={{ zIndex: "0", top: "50%", left: "45%", position: "relative" }}>
                                <svg fill='#5f5f5f' className="gUZ ztu U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-label="Add an image or video" role="img"><path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z">
                                </path></svg>
                            </div>
                            <div style={{ zIndex: "0", position: "relative", top: "55%", textAlign: "center" }}>
                                Drag and drop or click to upload your images
                            </div>
                            <input type='file'
                                onChange={(e) => {
                                    cloudinaryImage(e)
                                }}
                                style={{ height: "100%", width: "100%", opacity: "0", zIndex: "5", cursor: "pointer", position: "relative", left: "0", top: "0" }} />
                        </div>
                    </div>
                    {/* form input  */}
                    <div className='p-4' style={{ width: "60%", height: "100%" }}>
                        <div className="wave-group">
                            <input required="" name="title"
                                onChange={(e) => handleForm(e)}
                                type="text" className="input" style={{ fontSize: "1.8rem", fontWeight: "bold" }} placeholder='Add Your Title' />
                            <span className="bar"></span>

                        </div>
                        <div className='rounded-5 d-flex ' style={{ marginTop: "2.8rem", gap: "0.6rem", alignItems: "center" }}>
                            <svg className='rounded-5' style={{ backgroundColor: "#EFEFEF", width: "45px", height: "45px" }} width="100%" viewBox="-50 -50 100 100" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                                <title>MPK avatar link</title><text fontSize="60px" fill="#111" dy="0.35em" textAnchor="middle" className="dyH iFc H2s ">
                                    M
                                </text>
                            </svg>
                            Mpk
                        </div>
                        <div className="wave-group mt-3 ">
                            <input required=""
                                name='description'
                                onChange={(e) => handleForm(e)}
                                type="text" className="input" style={{ fontSize: "0.8rem", padding: "1.2rem", fontWeight: "bold" }} placeholder='Tell Everyone on what your pin is about' />
                            <span className="bar"></span>

                        </div>
                        <div className="wave-group" style={{ marginTop: "5rem" }}>
                            <input
                                name='destinationLink'
                                onChange={(e) => handleForm(e)}
                                type="text" className="input" style={{ fontSize: "0.8rem", padding: "1.2rem", fontWeight: "bold" }} placeholder='Add destination Link' />
                            <span className="bar"></span>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
