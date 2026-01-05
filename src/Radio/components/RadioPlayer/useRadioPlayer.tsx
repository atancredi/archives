import { useState } from "react";

export interface IRadioPlayer {
    isPlaying: boolean
    togglePlaying: () => void
    startPlaying: () => void
    pausePlaying: () => void
    stopPlaying: () => void
    isSmallPlayerOpen: boolean
}

export default function useRadioPlayer(): IRadioPlayer {


    const [isPlaying, setIsPlaying] = useState(false);


    const [isSmallPlayerOpen, setIsSmallPlayerOpen] = useState(false);
    // const toggleSmallPlayer = () => setIsSmallPlayerOpen(!isSmallPlayerOpen);
    // const openSmallPlayer = () => setIsSmallPlayerOpen(true);
    // const closeSmallPlayer = () => setIsSmallPlayerOpen(false);


    const togglePlaying = () => {
        setIsPlaying(!isPlaying);
        setIsSmallPlayerOpen(!isPlaying);
    }

    const startPlaying = () => {
        if (!isPlaying){
            setIsPlaying(true);
        }

        if (!isSmallPlayerOpen){
            setIsSmallPlayerOpen(true);
        }
    }


    const pausePlaying = () => {
        if (isPlaying){
            setIsPlaying(false);
        }
    }

    
    const stopPlaying = () => {
        setIsPlaying(false);
        setIsSmallPlayerOpen(false);
    }


    return {
        isPlaying,
        togglePlaying,
        startPlaying,
        pausePlaying,
        stopPlaying,
        isSmallPlayerOpen,
    } as IRadioPlayer

}