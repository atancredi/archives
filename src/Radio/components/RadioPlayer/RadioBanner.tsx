import type { IComponentProps } from "../../interfaces/interfaces";
import ScrollingText from "../ScrollingText/ScrollingText";


const RadioBanner = ({
    // children,
    className = ""
}: IComponentProps) => {
    return (
        <div className={'px-1 bg-white w-screen h-[86px] fixed bottom-0 border-y-[2px] border-black flex flex-row ' + className}>
            <div className='w-[86px]'>ico</div>
            <div className='flex flex-col justify-between w-full'>
                <div className=''>latest show:</div>
                <div className='font-bold w-[calc(100vw-86px)] overflow-hidden'>
                    <ScrollingText>
                        COSA PASSA NEL CERVELLO DI GRANDE FUMO EP.1
                    </ScrollingText>
                </div>
                <div className='font-bold'>Grande Fumo</div>
            </div>
        </div>
    )
}

export default RadioBanner;