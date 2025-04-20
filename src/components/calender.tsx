import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './calender.css';

export default function Calendar({ props }: any) {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

    const handleStartDateChange = (date: any) => {
        if (date) {
            setStartDate(date < new Date() ? new Date() : date);
        }
    }

    const handleEndDateChange = (date: any) => {
        if (date) {
            setEndDate(date < new Date() ? new Date() : date);
        }
    }

    const calculateDaysBetweenDates = (date1: Date, date2: Date): number => {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
    };

    const calculatePriceTotalNight = (): number => {
        const differenceInDays = calculateDaysBetweenDates(startDate, endDate);
        return props ? (differenceInDays * Number(props)) : 0;
    };

    return (
        <>
            <div className="calender-container">
                <div className="calender-block">
                    <h3>Velg en startdato</h3>
                    <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                    />
                </div>
                <div className="calender-block">
                    <h3>Velg en sluttdato</h3>
                    <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                    />
                </div>
            </div>
            <p>Pris på hele ferien: {calculatePriceTotalNight()} kr</p>
        </>
    );
}