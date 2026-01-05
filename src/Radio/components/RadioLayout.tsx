import type { IComponentProps } from "../interfaces/interfaces";


const RadioLayout = ({
    children,
    className = "",
}: IComponentProps) => {

    return (
        <div className={'content h-screen w-screen ' + className}>
            {/* <div className='h-[72px]'></div> */}
            {/* <div className='bg-white w-screen h-[72px] border-b-[2px] border-black snap-start'> */}
            <div className='bg-white w-screen min-h-[72px] pt-2 pb-4  border-black noselect'>
                <img className='w-full' src='oc.png'></img>
            </div>

            {children}
            
            <div className='h-[4rem]'></div>

        </div>
    )

}


RadioLayout.SubHeader = ({className = "", children}: IComponentProps) => {
    return (
        <div className={'px-1 bg-white w-screen flex flex-row justify-between text-[18px] noselect py-2 ' + className}>
            {children}
        </div>
    )
}



export default RadioLayout;