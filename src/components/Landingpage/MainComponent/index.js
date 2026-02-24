import React from 'react'
import './style.css'
import Button from '../../common/Button'
import gradient from '../../../assets/gradient.png'
import phone from '../../../assets/phone.png'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
function MainComponent() {
    return (
        <div className='main-container'>
            <div className='left-component'>
                <motion.h1
                    className='track-crypto-heading'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .3 }}
                >
                    Track Crypto
                </motion.h1>

                <motion.h1
                    className='real-time-heading'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .3, delay: .5 }}

                >Real Time.</motion.h1>
                <motion.p
                    className='para'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .3, delay: 1 }}
                >Track crypto through a public api in real time. Visit the dashboard to do so!

                </motion.p>

                <motion.div
                    className='btn-flex'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .3, delay: 1.5}}>
                   <Link to='/dashboard' ><Button onClick={()=>console.log("Clciked")} text="Dashboard" /></Link>
                    <Link to='/'><Button text="Share"   outline={true} /> </Link>
                </motion.div>

            </div>
            <div className='right-component'>
                <div className='phone-container'>
                    <motion.img 
                    className='phone'
                     src={phone} alt='phone'
                     initial={{y:-10}}
                     animate={{y:10}}
                     transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration: 2,
                        repeat:Infinity,

                     }} />
                    <img className='gradient' src={gradient} alt='gradient' />
                </div>



            </div>
        </div>
    )
}

export default MainComponent