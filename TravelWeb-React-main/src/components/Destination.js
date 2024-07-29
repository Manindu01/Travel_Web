import Mountain1 from '../assets/1.jpg';
import Mountain2 from '../assets/2.jpg';
import Mountain3 from '../assets/5.jpg';
import Mountain4 from '../assets/8.jpg';
import DestinationData from './DestinationData';
import './DestinationStyles.css';

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot,within a time frame.</p>

            <DestinationData
                className='first-des'
                heading='Sydney Opera House'
                text="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture."

                img1={Mountain1}
                img2={Mountain2}
            />

            <DestinationData
                className='first-des-reverse'
                heading='Eiffel Tower'
                text="The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Locally nicknamed 'La dame de fer', it was constructed from 1887 to 1889 as the centerpiece of the 1889 World's Fair."

                img1={Mountain3}
                img2={Mountain4}
            />

           </div>
    )
}

export default Destination;