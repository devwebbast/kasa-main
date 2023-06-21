import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import logementsList from '../../datas/logementsList'
import '../../styles/main.scss'

function Home (){

    return (
        <section className="section-home">
            <Banner />
            <div className="card-container">
                {logementsList.map((logement, id) => (
                    <div className="card-logement" key={id}>
                        <Link className="card-link" to={`/logements/${logement.id}`}>
                            <Cards cover={logement.cover} title={logement.title}/>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home