import { useState } from 'react';
import './order-cabin-page.css';

interface FormData {
    name: string;
    email: string;
    address: string;
    phone: string;
    message: string;
    numberOfPeopleAdults: number;
    numberOfPeopleChildren: number;
    numberOfPeoplePets: number;
}

export default function OrderCabinPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        address: "",
        phone: "",
        message: "",
        numberOfPeopleAdults: 2,
        numberOfPeopleChildren: 0,
        numberOfPeoplePets: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.numberOfPeopleAdults < 1 || formData.numberOfPeopleChildren < 0 || formData.numberOfPeoplePets < 0) {
            window.alert("Det må minst være én voksen, og det kan ikke være negative tall på barna eller kjæledyr.");
            return;
        }

        sessionStorage.setItem("formdata", JSON.stringify(formData));
        window.location.assign("/oversikt");
    };

    return (
        <div className="oc-container">
            <div className="oc-content">

                <div className="auth-top">
                    <div className="auth-title">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3>Bookingsinformasjon</h3>
                    </div>
                    <p>Bare noen få detaljer igjen – og hytta er din!</p>
                </div>

                <form className="oc-form">
                    <div className="form-group">
                        <label htmlFor="name">Navn</label>
                        <input type="text" id="name" name="name" required placeholder='Ole Nordmann'
                            value={formData.name}
                            onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-post</label>
                        <input type="email" id="email" name="email" required placeholder='olenordmann@gmail.no'
                            value={formData.email}
                            onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Telefonnummer</label>
                        <input type="tel" id="phone" name="phone" required placeholder='472 89 116'
                            value={formData.phone}
                            onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Adresse</label>
                        <input type="text" id="address" name="address" required placeholder='Elgveien 12, 2614 Lillehammer'
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <p>Antall personer</p>
                        <div className="inner-input">
                            <label htmlFor="numberOfPeopleAdults">Voksne (18+):</label>
                            <input type="number" id="numberOfPeopleAdults" name="numberOfPeopleAdults" required placeholder='2'
                                onChange={handleChange}
                                min="0"
                            />
                        </div>
                        <div className="inner-input">
                            <label htmlFor="numberOfPeopleChildren">Barn:</label>
                            <input type="number" id="numberOfPeopleChildren" name="numberOfPeopleChildren" required placeholder='0'
                                onChange={handleChange}
                                min="0"
                            />
                        </div>
                        <div className="inner-input">
                            <label htmlFor="numberOfPeoplePets">Kjæledyr:</label>
                            <input type="number" id="numberOfPeoplePets" name="numberOfPeoplePets" required placeholder='0'
                                onChange={handleChange}
                                min="0"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Spesielle ønsker eller behov</label>
                        <textarea id="message" name="message" rows={4} placeholder='f.eks. allergier, tilgjengelighet'
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="submit-button" onClick={handleSubmit}>
                        Gå til reserveringsoversikten
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}