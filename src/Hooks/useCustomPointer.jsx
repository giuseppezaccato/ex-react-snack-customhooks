import { useEffect, useState } from "react";

export default function useCustomPointer(pointer) {

    const [position, setPosition] = useState({ x: 0, y: 0 })


    useEffect(() => {

        //* CallBack function
        const handleMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        //*addEventListener
        document.addEventListener('mousemove', handleMove)

        //*cleanUp function
        return () => document.removeEventListener('mousemove', handleMove)

    }, [])

    return (
        //? bisogna dare dello stile al div per farlo muovere "seguendo" le coordinate del mouse(che abbiamo già)
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)",
                cursor: "none"
            }}
        >
            {pointer}
        </div>
    )



}