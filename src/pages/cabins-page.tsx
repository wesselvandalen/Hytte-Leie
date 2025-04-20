import { useEffect, useState } from 'react';
import './cabins-page.css';
import type { Cabin } from '../model/cabin';
import CabinBlock from '../components/cabin-block';
import { cabins as cabinList, findCabinsByLocation, findCabinsByMaxNumberOfGuests } from '../service/cabins-service';
import Footer from '../components/footer';
import CabinFilter from '../components/cabins-filter';

export default function CabinsPage() {
    const [cabins, setCabins] = useState<Cabin[]>(cabinList);
    const [maxGuests, setMaxGuests] = useState<number | null>(null);
    const [location, setLocation] = useState<string>("");

    useEffect(() => {
        handleFilterCabinsByMaxGuests();
    }, [maxGuests]);

    useEffect(() => {
        handleFilterCabinsByLocation();
    }, [location]);

    const handleFilterCabinsByMaxGuests = () => {
        if (maxGuests === 0 || maxGuests === null) {
            setCabins(cabins);
            return;
        } 
        const filteredCabinData = findCabinsByMaxNumberOfGuests(maxGuests);
        setCabins(filteredCabinData);
    }

    const handleFilterCabinsByLocation = () => {
        if (location === '' || location === null) {
            setCabins(cabins);
            return;
        }
        const filteredCabinData = findCabinsByLocation(location);
        setCabins(filteredCabinData);
    }

    return (
        <div className="cabins-page-container">
            <div className="cabins-page-content">

                <h3 className='cp-title'>Fantastiske hytter, rimelige priser</h3>
                <p className='cp-description'>Unn deg en pause – naturen er bare et klikk unna.</p>

                <CabinFilter
                    maxGuests={maxGuests}
                    setMaxGuests={setMaxGuests}
                    location={location}
                    setLocation={setLocation}
                />

                <div className="cabins-list">
                    {cabins.map((cabin: Cabin) => {
                        return <CabinBlock key={cabin.id} cabin={cabin} />
                    })}
                </div>

            </div>

            <Footer />
        </div>
    );
}