import './home.css';
import hytte from '../assets/hytte.png';
import { useState } from 'react';
import { Cabin } from '../model/cabin';
import { findCabinsByLocation } from '../service/cabins-service';

export default function Home() {
    const [recommendations, setRecommendations] = useState<Cabin[]>([]);

    const handleSearchTermChange = (e: any) => setRecommendations(findCabinsByLocation(e.target.value));

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
                        onChange={handleSearchTermChange}
                    />
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="cabin-recommendations">
                    {recommendations.map((cabin: Cabin, index: number) => {
                        return <a
                            href={`/hytter/${cabin.id}`}
                            style={{
                                borderTopLeftRadius: index === 0 ? '4px' : '0',
                                borderTopRightRadius: index === 0 ? '4px' : '0',
                                borderBottomLeftRadius: index === recommendations.length - 1 ? '4px' : '0',
                                borderBottomRightRadius: index === recommendations.length - 1 ? '4px' : '0'
                            }}
                            key={index}
                        >
                            {cabin.title}, {cabin.location}
                        </a>
                    })}
                </div>

            </div>
        </div>
    );
}