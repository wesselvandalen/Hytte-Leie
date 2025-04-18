import './header.css';

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
                    <a href="/spørsmål">Ofte stilte spørsmål</a>
                    <a href="/omoss">Om oss</a>
                </div>
            </div>
        </div>
    );
}