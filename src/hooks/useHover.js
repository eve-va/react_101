import { useEffect, useRef, useState } from "react";

function useHover() {
    const [hovered, setHovered] = useState(false);
    const hoverRef = useRef(null);
    
    useEffect(() => {
        hoverRef.current.addEventListener("mouseenter", enter);
        hoverRef.current.addEventListener("mouseleave", leave);

        return () => {    
            hoverRef.current.removeEventListener("mouseenter", enter);
            hoverRef.current.removeEventListener("mouseleave", leave);
        }
    }, []);

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    return [hovered, hoverRef];
}

export default useHover;
