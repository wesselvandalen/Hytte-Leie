import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

export default function SuccesPage() {
    const { width, height } = useWindowSize()

    return (
        <div className="sp-container">
            <div className="sp-content">
                <Confetti
                    width={width}
                    height={height}
                />
            </div>
        </div>
    );
}