import type { PropsWithChildren } from "react";

import "./ScrollingText.css";


const ScrollingText = ({ children }: PropsWithChildren) => {
    return (
        <div className='whitespace-nowrap m-auto scrolling-container'>
            <div className='scrolling-text'>
                {children}
            </div>
        </div>
    )
}

export default ScrollingText;