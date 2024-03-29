import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Pdf from '../../assets/images/resume.pdf';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ','P', 'e', 't', 'e', 'r',',']
    const jobArray = ['S', 'o', 'f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}>,</span>
                        <br/>
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _15`}>'</span>
                        <span className={`${letterClass} _16`}>m</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18}/>
                    </h1>
                    <h2>Aspiring Full Stack/Back-End Developer</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                    <a className='flat-button' href={Pdf} target="_blank">
                        RESUME
                    </a>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home