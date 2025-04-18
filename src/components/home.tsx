import './home.css';
import hytte from '../assets/hytte.png';

export default function Home() {

    return (
        <div className="home-container">
            <img src={hytte} alt="Bakgrunnsbilde av en skog." className='background-image' />
            <div className="home-content">
                <h3 className='home-title'>Hytte Leie – Finn din perfekte hytte i naturen</h3>
                <p className='home-description'>Lei en koselig hytte i vakre omgivelser, fra skog til fjell. Enkel booking og unike opplevelser for ro og eventyr – alt på ett sted.</p>
                <input
                    type="text"
                    id='searchbar'
                    className='searchbar'
                    placeholder={`Finn din hytte her`}
                />
            </div>
        </div>
    );
}