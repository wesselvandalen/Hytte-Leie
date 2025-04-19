import type { Cabin } from '../model/cabin';
import './cabin-block.css';

interface CabinProps {
    cabin: Cabin;
}

export default function CabinBlock({ cabin }: CabinProps) {

    const getColorByCategory = (category: string): string => {
        switch (category.toLowerCase()) {
            case 'skog': return '#80cc91';
            case 'fjell': return '#c8d2d0';
            case 'avsides': return '#de9370';
            case 'familie': return '#d6de93';
            case 'innsjø': return '#6dd7c9';
            case 'romantisk': return '#e5b4e7';
            case 'luksus': return '#ccaf80';
            case 'enkel': return '#a7b0a4';
            default: return '#e7e7e8';
        }
    }

    return (
        <a className="cabin-container" href={`/hytter/${cabin.id}`}>
            <img src={cabin.images[0]} alt={cabin.title} />
            <div className="cabin-info">
                
                <div className="title-tags-container">
                    <h3 className='cabin-title'>{cabin.title}</h3>
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

                <p className='cabin-max-guests'>Maks. gjester: {cabin.maxGuests}</p>
            </div>
            <p className='cabin-price'>Pris per natt: {cabin.pricePerNight} kr</p>
        </a>
    );
}