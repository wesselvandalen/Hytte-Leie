import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './calender.css';

export default function Calendar({ props } : any) {
    const [startDate, setStartDate] = useState<string>(turnDateObjectIntoYear(new Date()));
    const [endDate, setEndDate] = useState<string>(turnDateObjectIntoYear(new Date()));

    const handleStartDateChange = (date: Date) =>
        setStartDate(turnDateObjectIntoYear(date < new Date() ? new Date() : date));
      
      const handleEndDateChange = (date: Date) =>
        setEndDate(turnDateObjectIntoYear(date < new Date() ? new Date() : date));
      

    function turnDateObjectIntoYear(date: Date): string {
        const month = date.getUTCMonth() + 1; // months from 1-12
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();

        return year + "/" + month + "/" + day;
    }

    const calculateDaysBetweenDates = (date1: string, date2: string): number => {
        if (date1 === '' || date2 === '') return 0;

        const oneDay: number = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const firstDate: any = new Date(date1);
        const secondDate: any = new Date(date2);

        return Math.round(Math.abs((firstDate - secondDate) / oneDay));
    }

    const calculatePriceTotalNight = (): number => {
        const differenceInDays: number = calculateDaysBetweenDates(startDate, endDate);
        return props ? (differenceInDays * Number(props)) : 0;
    }

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