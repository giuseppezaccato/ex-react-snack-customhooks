import { useEffect, useState } from "react"

export default function useDate(current) {
    const [currentDate, setCurrentDate] = useState(current)

    useEffect(() => {



    }, [currentDate])

    return currentDate
}