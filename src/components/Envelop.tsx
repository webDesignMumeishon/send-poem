"use client"
import React, { useState } from 'react'
import './style.css'

type Props = {
    name: string;
    content: string | TrustedHTML;
}

const Envelop = ({ name, content }: Props) => {

    const [open, setOpen] = useState(false)

    const openEnvelop = () => {
        setOpen(!open)
    }

    return (
        <div className='envelop-main bg-gradient-to-b from-pink-50 to-red-50'>
            <div className="envelop-container">
                <div className={`envelop-wrapper ${open && 'envelop-flap'}`} style={{ top: `${open ? '150px' : '0px'}` }}>
                    <div className="envelop">
                        <div className={`letter ${open && 'letter-shadow'}`}>
                            <div className="text">
                                <strong>{name},</strong>
                                <div>
                                    {
                                        open && <>{content}</>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="heart" onClick={() => openEnvelop()}>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Envelop