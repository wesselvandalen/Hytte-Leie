import { useEffect, useState } from "react";
import { Cabin } from "../model/cabin";
import { getCabinById } from "../service/cabins-service";
import './order-overview-page.css';
import { getColorByCategory, makePriceReadable } from "../service/utils";

export default function OrderOverviewPage() {
    const [cabin, setCabin] = useState<Cabin>();
    const [formData, setFormData] = useState<any>();
    const [startDate, setStartDate] = useState<string>();
    const [endDate, setEndDate] = useState<string>();

    useEffect(() => {
        handleCabinFetch();
        handleFormDataFetch();
        handleDatumsFetch();
    }, []);

    const handleCabinFetch = () => {
        const cabinId: string | null = sessionStorage.getItem("cabinId");
        if (cabinId) setCabin(getCabinById(cabinId));
    }

    const handleFormDataFetch = () => {
        const formDataData: string | null = sessionStorage.getItem("formdata");
        if (formDataData) {
            const formDataJSON = JSON.parse(formDataData);
            setFormData(formDataJSON);
        }
    }

    const handleDatumsFetch = () => {
        const datumsData: string | null = sessionStorage.getItem("datums");
        if (datumsData) {
            const datumsDataInDataForm: any = JSON.parse(datumsData);
            setStartDate(turnDateIntoReadableString(datumsDataInDataForm.startDate));
            setEndDate(turnDateIntoReadableString(datumsDataInDataForm.endDate));
        }
    }

    const turnDateIntoReadableString = (date: any): string => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0'); 
        const year = d.getFullYear();

        return `${day}-${month}-${year}`;
    };

    const placeOrder = () => {
        window.location.assign("/suksess");
    }

    if (!cabin) {
        return <p>Det er ingen cabin</p>
    }

    return (
        <div className="oop-container">
            <div className="oop-content">

                <div className="auth-top">
                    <div className="auth-title">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3>Reserveringsoversikt</h3>
                    </div>
                    <p>Sjekk alle detaljene til reserveringen din - og hytta er din!</p>
                </div>

                <div className="oop-section">
                    <p>Valgt hytte:</p>
                    <div className="cabin-wrapper">
                        <img src={cabin.images[0]} alt="Hytte bilde" className="cabin-wrapper-img" />
                        <div className="cabin-wrapper-info">
                            <div className="title-tags-container">
                                <h3 className='cabin-wrapper-title'>{cabin.title}</h3>
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

                            <p className='cabin-description'>{cabin.description}</p>

                            <div className="cabin-amenities">
                                {cabin.amenities.map((amenity: string, index: number) => {
                                    return <p key={index}>{amenity}</p>
                                })}
                            </div>

                            <p className='cabin-max-guests'>Maks. antall gjester: {cabin.maxGuests}</p>
                            <p className='cabin-wrapper-price'>Pris per natt: {makePriceReadable(cabin.pricePerNight)} kr</p>
                        </div>
                    </div>
                </div>


                <div className="oop-section">
                    <p>Personlig informasjon</p>

                    <div className="oop-form-data">
                        <p>Navn: {formData.name}</p>
                        <p>E-post: {formData.email}</p>
                        <p>Telefon: {formData.phone}</p>
                        <p>Adresse: {formData.address}</p>
                        <p>Eventuelt spesielle behov: {formData.message}</p>
                    </div>
                    <br /><br />
                    <div className="oop-form-data">
                        <p>Antall vokse: {formData.numberOfPeopleAdults}</p>
                        <p>Antall barn: {formData.numberOfPeopleChildren}</p>
                        <p>Antall kjæledyr: {formData.numberOfPeoplePets}</p>
                    </div>
                </div>

                <div className="oop-section">
                    <p>Valgte datoene:</p>

                    <div className="oop-form-data">
                        <p>Startdato: {startDate}</p>
                        <p>Sluttdato: {endDate}</p>
                    </div>
                </div>

                <button onClick={placeOrder} className="order-btn">
                    Reserver hytta
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21V3M3 12H17M17 12L10 5M17 12L10 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}