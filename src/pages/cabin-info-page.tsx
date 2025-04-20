import { useParams } from 'react-router-dom';
import './cabin-info-page.css';
import { useContext, useEffect, useState } from 'react';
import { getCabinById } from '../service/cabins-service';
import { getColorByCategory } from '../service/utils';
import Footer from '../components/footer';
import Calender from '../components/calender';
import { AuthContext } from '../contexts/auth-context';
import { AuthContextType } from '../model/auth-context';

export default function CabinInfoPage() {
    const { cabinId } = useParams();
    const [cabin, setCabin] = useState<any>();
    const { user } = useContext(AuthContext) as AuthContextType;

    useEffect(() => {
        if (cabinId) handleCabinFetch(cabinId);
    }, []);

    const handleCabinFetch = (id: string) => setCabin(getCabinById(id));

    if (!cabin) {
        return <p className='no-cabin-found'>Det finnes ingen hytte med id {cabinId}</p>
    }

    return (
        <div className="cabin-info-container">
            <div className="cabin-info-content">

                <div className="cabin-info-top">
                    <img src={cabin.images[0]} alt={cabin.title} className="cabin-image" />

                    <div className="cabin-info-top-right">

                        <div className="cabin-info-top-title-tags">
                            <h3>{cabin.title}</h3>
                            <div className="cabin-tags">
                                {cabin.categories.map((tag: string, index: number) => {
                                    return <p style={{ backgroundColor: getColorByCategory(tag) }} key={index}>{tag}</p>
                                })}
                            </div>
                        </div>

                        <div className="cabin-location">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p>{cabin.location}</p>
                        </div>
                        <p className="cabin-description">{cabin.description}</p>

                        <h4>Fasiliteter</h4>
                        <div className="cabin-amenities">
                            {cabin.amenities.map((amenity: string, index: number) => {
                                return <p key={index}>{amenity}</p>
                            })}
                        </div>

                        <p className='cabin-info-max-guests'>Maks. antall gjester: {cabin.maxGuests}</p>
                        <p className='cabin-info-price'>Pris per natt: {cabin.pricePerNight} kr</p>
                    </div>
                
                </div>

                <div className="cabin-calender">
                    <h3 className='cabin-calender-title'>Lyst til å leie denne hytta?</h3>
                    {user ? 
                        <Calender props={cabin.pricePerNight} />
                        :
                        <p>Du må være pålogget for å kunne bruke kalenderen.</p>
                    }
                </div>
            </div>

            <Footer/>
        </div>
    );
}