import { useEffect, useState } from 'react';
import './cabins-page.css';
import type { Cabin } from '../model/cabin';
import CabinBlock from '../components/cabin-block';
import { cabins as cabinList } from '../service/cabins-service';
import Footer from '../components/footer';

export default function CabinsPage() {
    const [cabins, setCabins] = useState<Cabin[]>([]);

    useEffect(() => {
        setCabins(cabinList);
    }, []);

    return (
        <div className="cabins-page-container">
            <div className="cabins-page-content">

                <h3 className='cp-title'>Fantastiske hytter, rimelige priser</h3>
                <p className='cp-description'>Unn deg en pause – naturen er bare et klikk unna.</p>

                <div className="cabins-list">
                    {cabins.map((cabin: Cabin) => {
                        return <CabinBlock key={cabin.id} cabin={cabin} />
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    );
}