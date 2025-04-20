import { useState } from 'react';
import './order-cabin-page.css';

interface FormData {
    name: string;
    email: string;
    address: string;
    message: string;
}

export default function OrderCabinPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        address: "",
        message: "",
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
        console.log("Form submitted:", formData);
    };

    return (
        <div className="oc-container">
            <div className="oc-content">
                <h3 className="oc-title">Fyll ut informasjonen din</h3>

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
                           onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Adresse</label>
                        <input type="text" id="address" name="address" required placeholder='Adressen' 
                           value={formData.address}
                           onChange={handleChange}
                           />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Eventuelt beskjed</label>
                        <textarea id="message" name="message" rows={4} placeholder='Har du noe ekstra du vil legge til? Skriv eventuelle notater her.' 
                           value={formData.message}
                           onChange={handleChange}
                           />
                    </div>

                    <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}