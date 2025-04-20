import { useContext } from 'react';
import { AuthContext } from '../contexts/auth-context';
import './header.css';
import { useLocation } from 'react-router-dom';
import { AuthContextType } from '../model/auth-context';
import UserBlock from './user-block';

export default function Header() {
    const location = useLocation();
    const isHomePage: boolean = location.pathname === '/';
    const { user } = useContext(AuthContext) as AuthContextType;
      
    const aColor: string = isHomePage ? '#fff' : '#000';
    const borderBottomColor: string = isHomePage ? 'rgba(255, 255, 255, .1) solid 1px' : 'rgba(0, 0, 0, .1) solid 1px';
    const backgroundColor: string = isHomePage ? 'transparent' : '#fff';

    return (
        <div className="header-container" style={{ borderBottom: borderBottomColor, backgroundColor: backgroundColor }}>
            <div className="header-content">
                <a href="/" className='header-logo' style={{ color: aColor }}>
                    Hytte Leie
                </a>

                <div className="header-dock">
                    <a style={{ color: aColor }} href="/hytter">Hytter</a>
                    <a style={{ color: aColor }} href="/omoss">Om oss</a>

                    {user ?
                        <>
                            <UserBlock props={user} key={1} />
                        </>
                        :
                        <>
                            <a style={{ color: aColor }} href="/register">Registrer</a>
                            <a style={{ color: aColor }} href="/login">Logg inn</a>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}