import './home.css';
import hytte from '../assets/hytte.png';

export default function Home() {
    return (
        <div className="home-container">
            <img src={hytte} alt="Bakgrunnsbilde av en skog." className='background-image' />
            <div className="home-content">
                
            </div>
        </div>
    );
}