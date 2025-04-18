import './header.css';
import logo from '../assets/logo.png';

export default function Header() {

    return (
        <div className="header-container">
            <div className="header-content">
                <a href="/" className='header-logo'>
                    Hytte Leie
                </a>

                <div className="header-dock">
                    <a href="/">Home</a>
                    <a href="/hytter">Hytter</a>
                    <a href="/"></a>
                </div>
            </div>
        </div>
    );
}