import './footer.css';

export default function Footer() {


    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>HytteLeie</h3>
                    <p className='copyright'>Copyright &#169; {new Date().getFullYear()}</p>
                </div>
                <div className="footer-section">
                    <h3>Følg oss</h3>
                    <a href="https://x.com/?lang=nb" target='_blank'>X</a>
                    <a href="https://www.instagram.com/" target='_blank'>Instagram</a>
                    <a href="https://www.facebook.com/" target='_blank'>Facebook</a>
                </div>
                <div className="footer-section">
                    <h3>Sider</h3>
                    <a href="/">Hjemmeside</a>
                    <a href="/hytter">Hytter</a>
                    <a href="/omoss">Om oss</a>
                </div>
                <div className="footer-section">
                    <h3>Bli med</h3>
                    <a href="/register">Lag ny konto</a>
                    <a href="/login">Logg på</a>
                </div>
                <div className="footer-section">
                    <h3>Mer</h3>
                    <a href="/vilkår">Vilkår</a>
                </div>
            </div>
        </footer>
    );
}