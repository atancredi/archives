import ScrollingText from "../ScrollingText/ScrollingText";
import PlayIcon from "../Icons/PlayIcon";
import type { IRadioPlayer } from "./useRadioPlayer";
import type { IComponentProps } from "../../interfaces/interfaces";
import PauseIcon from "../Icons/PauseIcon";
import StopIcon from "../Icons/StopIcon";

export interface RadioLayoutHeaderProps extends IComponentProps {
    radioPlayer: IRadioPlayer
}
const RadioPlayerSmall = ({
    // children,
    radioPlayer,
    className = ""
}: RadioLayoutHeaderProps) => {
    return (
        <div className={'bg-white w-screen fixed bottom-0 border-y-[2px] border-black flex flex-row noselect' + className}>
            <div className='w-[60px] h-[60px] p-[2px]'><img src="fight.png" className="rounded-[1vw]" /></div>
            <div className='flex flex-col justify-center font-bold px-2 w-[65vw]'>
                <div className='overflow-hidden'>
                    <ScrollingText>
                        Cosa Passa Nel Cervello di Grande Fumo Vol.1
                    </ScrollingText>
                </div>
                <div className='text-[#aaa]'>Grande Fumo</div>
            </div>
            <div className="grow-1 flex flex-row justify-end px-2 gap-2 justify-center">
                <div className="my-auto">
                {
                    radioPlayer.isPlaying ? ( 
                        <button onClick={() => radioPlayer.pausePlaying()}>
                            <PauseIcon color="#000" />
                        </button>
                    )
                    : ( 
                        <button onClick={() => radioPlayer.startPlaying()}>
                            <PlayIcon color="#000"/>
                        </button>
                    )
                }
                </div>
                <div className="my-auto">
                    <button onClick={() => radioPlayer.stopPlaying()}>
                        <StopIcon color="#000" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RadioPlayerSmall;