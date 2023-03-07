import React from 'react'
import '../Layout/Home.css'
import feedback from '../access/feedback.png'
export default function TabHomeOne() {
    return (
        <div className='container-home'>
            <div className='container-page-home'>
                <div className='home-title'>
                    <span>Building Digital Products, Brands Experience</span>
                </div>
                <div className='home-child'>
                    <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.</span>
                </div>
                <button>Fllow Us Now</button>
                <img src={feedback} alt=''></img>
            </div>
        </div>
    )
}
