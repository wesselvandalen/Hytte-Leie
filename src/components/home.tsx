import './home.css';
import hytte from '../assets/hytte.png';

export default function Home() {
    return (
        <div className="home-container">
            <img src={hytte} alt="Bakgrunnsbilde av en skog." className='background-image' />
            <div className="home-content">
                <h3 className='home-title'>Hytte Leie – Finn din perfekte hytte i naturen</h3>
                <p className='home-description'>Lei en koselig hytte i vakre omgivelser, fra skog til fjell. Enkel booking og unike opplevelser for ro og eventyr – alt på ett sted.</p>

                <div className="searchbar">
                    <input
                        type="text"
                        id='searchbar'
                        placeholder="Finn din hytte her"
                    />
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}