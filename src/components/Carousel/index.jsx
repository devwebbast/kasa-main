import {useState} from 'react'
import {chevronRight} from 'react-icons-kit/feather/chevronRight'
import {chevronLeft} from 'react-icons-kit/feather/chevronLeft'
import {Link} from 'react-router-dom'
import {Icon} from 'react-icons-kit'
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
                <Link className='prevChevron' onClick={previousSlide}><Icon icon={chevronLeft} size={79} /></Link>
                <Link className='nextChevron' onClick={nextSlide}><Icon icon={chevronRight} size={79} className='testChev' /></Link>
            </div>
            <p className='carousel-number'>{`${currentSlide + 1}/${slides.length}`}</p>
        </div>

    )
}

export default Carousel