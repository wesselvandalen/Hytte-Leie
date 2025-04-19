import './footer.css';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-part footer-bottom">
                    <div className="footer-row">
                        <a href="/">
                            <img src={logo} alt="Hyttte Leie logo" className='footer-logo' />
                        </a>
                        <p>Hytte Leie © {new Date().getFullYear()}</p>
                        <p>Alle rettigheter reservert.</p>
                    </div>
                    <div className='footer-column'>
                        <div className="footer-row">
                            <h3>Sider</h3>
                            <div className="footer-column-2">
                                <div className="footer-row">
                                    <a href="/">Hjem</a>
                                    <a href="/hytter">Hytter</a>
                                    <a href="/omoss">Om oss</a>
                                </div>
                                <div className="footer-row">
                                    <a href="/register">Registrer</a>
                                    <a href="/login">Logg inn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}