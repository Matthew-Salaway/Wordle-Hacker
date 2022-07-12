import React, { useEffect, useState, useContext } from 'react'
import {ReactComponent as QuestionMark} from "../icons/questionMark.svg"
import {ReactComponent as LightBulb} from "../icons/lightbulb.svg"
import {ReactComponent as WhiteLightBulb} from "../icons/whitelightbulb.svg"
import Title from "./Title"
import HackerWords from './HackerWords'
import About from "./About"
import { AppContext } from '../App'


function NavBar() {
    
    const [aboutOpen, setAboutOpen] = useState(false);
    const {hackerOpen, setHackerOpen} = useContext(AppContext)

    function toggleAbout(e){
        e.preventDefault()
        setAboutOpen(prev => !prev)
    }

    function toggleHack(e){
        e.preventDefault()
        setHackerOpen(prev => !prev)
    }

  return (
    <div className='NavBar'>
        <div className='glow-on-hover' onClick={toggleHack}>
            <div className='hint'>
                <a>Hint <WhiteLightBulb /></a> 
            </div>

            <div className='hackerWords'>
                {hackerOpen && <HackerWords /> } 
            </div>
        </div>

        <Title />

        <div className='glow-on-hover' onClick={toggleAbout}>
            <div className='hint'>
                <a>About</a>
            </div>
            <div>
                {aboutOpen && <About />}
            </div>
        </div>

    </div>
  )
}

export default NavBar