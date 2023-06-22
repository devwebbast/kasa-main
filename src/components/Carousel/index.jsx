import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'


import {Link} from 'react-router-dom'
// import {Icon} from 'react-icons-kit'
import '../../styles/main.scss'

function Carousel ({slides}){
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        )
    }

    const previousSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        )
    }

    return (
        <div className='carousel'>
            <img src={slides[currentSlide]} alt='logement-carousel' />
            <div className="carousel-nav">
                <Link className='prevChevron' onClick={previousSlide}><FontAwesomeIcon icon={faChevronLeft} />
                </Link>
                <Link className='nextChevron' onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
            <p className='carousel-number'>{`${currentSlide + 1}/${slides.length}`}</p>
        </div>

    )
}

export default Carousel