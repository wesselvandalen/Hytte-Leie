import './header.css';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const isHomePage : boolean = location.pathname === '/';
    const aColor : string = isHomePage ? '#fff' : '#000';
    const borderBottomColor : string = isHomePage ? 'rgba(255, 255, 255, .1) solid 1px' : 'rgba(0, 0, 0, .1) solid 1px';

    return (
        <div className="header-container" style={{ borderBottom: borderBottomColor }}>
            <div className="header-content">
                <a href="/" className='header-logo' style={{ color: aColor }}>
                    Hytte Leie
                </a>

                <div className="header-dock">
                    <a style={{ color: aColor }} href="/">Home</a>
                    <a style={{ color: aColor }} href="/hytter">Hytter</a>
                    <a style={{ color: aColor }} href="/spørsmål">Ofte stilte spørsmål</a>
                    <a style={{ color: aColor }} href="/omoss">Om oss</a>
                    <a style={{ color: aColor }} href="/register">Registrer</a>
                    <a style={{ color: aColor }} href="/login">Log inn</a>
                </div>
            </div>
        </div>
    );
}