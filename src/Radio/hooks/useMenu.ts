import { useState } from "react";



export default function useMenu(){


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuOpen = () => setMenuOpen(!menuOpen);

    return {
        isOpen: menuOpen,
        toggle: toggleMenuOpen
    }

}