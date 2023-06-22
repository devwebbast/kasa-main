import { useParams } from 'react-router-dom'
import logementsList from '../../datas/logementsList'
import Error from '../Error'
import Carousel from '../../components/Carousel'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import AboutItems from '../../components/AboutItems'
import '../../styles/main.scss'

function LogementDetails (){
    const { id } = useParams()
    const logement = logementsList.find(logement => logement.id === id)
    
    if (!logement) {
        return <Error />;
    }
    const eqpt = logement.equipments.map((item, index) => (
        <li key={index} className='eqpt-item'>{item}
        </li>
    ))


    return (
        <section>
            <Carousel slides={logement.pictures}/>
            <div className='head-container'>
                <div className='content-left'>
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <div className="tag-container">
                        {logement.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </div>
                </div>
                <div className='content-right'>
                    <div className="content-picture-name">
                        <h4>{logement.host.name}</h4>
                        <img src={logement.host.picture} alt='hostPicture'></img>
                    </div>
                    <div className="rating">
                        <Rating rating={logement.rating} />
                    </div>
                </div> 
            </div>
            <div className="collapse-container">
                <AboutItems className="collapse-description" title="Description" content={logement.description} />
                <AboutItems className="collapse-equipments" title="Equipements" content={eqpt} />
            </div>
        </section>
        
    )
}

export default LogementDetails