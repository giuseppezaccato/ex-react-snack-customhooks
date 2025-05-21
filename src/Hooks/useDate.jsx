import { useEffect, useState } from "react"

export default function useDate() {

    const [currentDate, setCurrentDate] = useState(new Date)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date)
        }, 1000)

        //cleanUp function(come anche per addEventListener, setTimeout)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return currentDate;
}
