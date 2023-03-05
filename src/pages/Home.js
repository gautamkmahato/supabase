import React from 'react';
import '../style/home.css';
import img from '../assets/data2.png'
import { useNavigate } from 'react-router-dom';



function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <div className='page'>
            <main>
            <section>
            <h1>Your Companion to Coding Success - <span>ProgramPal</span></h1>

                <p>Master the Fundamentals of <strong>Programming</strong> with Our <br /> Data Structure and Algorithm Website <strong>ProgramPal</strong></p>
            <button className='button' onClick={()=>{navigate("/category")}}>Start Learning</button>
            </section>

            <img src={img} width="500px" height="500px" alt="Coding"/>
        </main>

                <footer>
                    © 2023 ProgramPal | All Rights Reserved
                </footer>

            </div>
        </div>
    )
}

export default Home;