import './Radio.css'
import useMenu from './hooks/useMenu'
import RadioLayout from './components/RadioLayout'
import RadioPlayerSmall from './components/RadioPlayer/RadioPlayerSmall'
import useRadioPlayer from './components/RadioPlayer/useRadioPlayer'

function Radio() {

	const menu = useMenu();
	const artists = useMenu();
	const episodes = useMenu();

	const radioPlayer = useRadioPlayer();

	return (
		<div className='main h-screen w-screen overflow-hidden'>
			{/* <div className='bg h-screen w-screen'></div> */}
			<RadioLayout className='overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
				
				<RadioLayout.SubHeader className='border-y-[2px] border-black sticky top-0'>
					<div className='underline' onClick={() => episodes.toggle()}>episodes</div>
					<div className='underline' onClick={() => artists.toggle()}>artists</div>
					<div className='underline' onClick={() => menu.toggle()}>menu</div>
				</RadioLayout.SubHeader>

				<div className='mb-4'>

					<div className='flex flex-col px-2 pt-3 py-4 gap-3'>

						<div className='flex flex-row h-[12vw]'>
							<div className='mr-2 w-[12vw]'>
								<img src='budabook.png' className='rounded-full' />
							</div>
							<div className='flex flex-col justify-end pb-1'>
								<div className='text-[14px] leading-none'>
									New release:
								</div>
								<div className='text-[24px] leading-none'>
									Grande Fumo
								</div>
							</div>
						</div>

						<div className='flex flex-row h-[30vw] rounded-[2vw] bg-[#ddd]' onClick={()=>radioPlayer.startPlaying()}>
							<div className='w-[30vw]'>
								<img src='fight.png' className='rounded-l-[2vw] rounded-r-[1vw]' />
							</div>	
							<div className='p-4 flex flex-col'>
								<div>aa</div>
								<div className='flex-end'>bb</div>
							</div>
						</div>

					</div>

				</div>

				<div className="">

					<div>
						<div className=''>
							<img className='w-full' src='DSCF7464_resized_1250_dithered_16.png' />
						</div>
						<div className='px-2 py-2'>
							<div className='text-[36px] leading-none'>New episode: Cosa Passa Nel Cervello di Grande Fumo Vol.1</div>
							<div className='text-[24px] leading-none py-1'>
								ciao nuova puntata ci sentiamo ciaooooo!!! {":)"}
							</div>
						</div>
					</div>

					<div>
						<div className=''>
							<img className='w-full' src='DSCF7464_resized_1250_dithered_16.png' />
						</div>
						<div className='px-2 py-2'>
							<div className='text-[36px] leading-none'>New episode: Cosa Passa Nel Cervello di Grande Fumo Vol.1</div>
							<div className='text-[24px] leading-none py-1'>
								ciao nuova puntata ci sentiamo ciaooooo!!! {":)"}
							</div>
						</div>
					</div>

					<div>
						<div className=''>
							<img className='w-full' src='DSCF7464_resized_1250_dithered_16.png' />
						</div>
						<div className='px-2 py-2'>
							<div className='text-[36px] leading-none'>New episode: Cosa Passa Nel Cervello di Grande Fumo Vol.1</div>
							<div className='text-[24px] leading-none py-1'>
								ciao nuova puntata ci sentiamo ciaooooo!!! {":)"}
							</div>
						</div>
					</div>

				</div>

				<div className='mt-8 py-2 text-[18px] border-t-[2px] border-black'>
					<div>
						<img src='logotransparent.png' />
					</div>
					<div className='mt-4'>
					</div>
					<div className='px-1'>
						<div className='underline'>contacts</div>
						<div className='underline'>our mission</div>
					</div>
					<div className='mt-2 px-1 border-y-[2px] border-black'>
						obviouschoice radio - 2026
					</div>

				</div>

				{radioPlayer.isSmallPlayerOpen && (<div className='h-[46px]'></div>)}

			</RadioLayout>
			{menu.isOpen && (
				<RadioLayout className='overflow-hidden noselect'>

					<RadioLayout.SubHeader className='border-y-[2px] border-black sticky top-0'>
						<div className='flex flex-row w-full'>
							<div>ico</div>
							<input className='search' type='text' placeholder='search' />
						</div>
						<div className='underline' onClick={() => menu.toggle()}>close</div>
					</RadioLayout.SubHeader>

					<div className='fixed bottom-0 flex flex-col w-full gap-2 px-2'>
						<div className='flex flex-col text-[36px] gap-2'>
							<div className='flex flex-row border-b-[1px] border-black'>
								<div className='grow-1'>episodes</div>
								<div>{"->"}</div>
							</div>
							<div className='flex flex-row border-b-[1px] border-black'>
								<div className='grow-1'>artists</div>
								<div>{"->"}</div>
							</div>
							<div className='flex flex-row border-b-[1px] border-black'>
								<div className='grow-1'>events</div>
								<div>{"->"}</div>
							</div>
							<div className='flex flex-row border-b-[1px] border-black'>
								<div className='grow-1'>contacts</div>
								<div>{"->"}</div>
							</div>
							<div className='flex flex-row border-b-[1px] border-black'>
								<div className='grow-1'>about</div>
								<div>{"->"}</div>
							</div>
						</div>
						{/* <RadioLayout.Header>
						</RadioLayout.Header> */}
						<div className='pb-2 flex flex-row justify-between text-[18px]'>
							<div className='underline'>instagram</div>
							<div className='underline'>youtube</div>
							<div className='underline'>soundcloud</div>
						</div>
					</div>

				</RadioLayout>
			)}
			{artists.isOpen && (
				<RadioLayout className='overflow-y-scroll scroll-smooth noselect'>

					<RadioLayout.SubHeader className='border-y-[2px] border-black sticky top-0'>
						<div className='flex flex-row w-full'>
							<div>ico</div>
							<input className='search' type='text' placeholder='search artist' />
						</div>
						<div className='underline' onClick={() => artists.toggle()}>close</div>
					</RadioLayout.SubHeader>


					<div className='mt-[3rem] flex flex-col w-full gap-2 px-2'>
						<div className='flex flex-col text-[36px] leading-none gap-4 mb-2'>
							<div className=''>
								<div className='text-[#aaa]'>G</div>
							</div>
							<div className='flex flex-col gap-4'>
								<div className='flex flex-row border-b-[1px] border-black'>
									<div className='grow-1'>G Farmerz</div>
									<div>{"->"}</div>
								</div>
								<div className='flex flex-row border-b-[1px] border-black'>
									<div className='grow-1'>Grande Fumo</div>
									<div>{"->"}</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col text-[36px] leading-none gap-4 mb-2'>
							<div className=''>
								<div className='text-[#aaa]'>R</div>
							</div>
							<div className='flex flex-col gap-4'>
								<div className='flex flex-row border-b-[1px] border-black'>
									<div className='grow-1'>Rootjuice</div>
									<div>{"->"}</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col text-[36px] leading-none gap-4 mb-2'>
							<div className=''>
								<div className='text-[#aaa]'>S</div>
							</div>
							<div className='flex flex-col gap-4'>
								<div className='flex flex-row border-b-[1px] border-black'>
									<div className='grow-1'>Snaf</div>
									<div>{"->"}</div>
								</div>
							</div>
						</div>
					</div>

				</RadioLayout>
			)}
			{episodes.isOpen && (
				<RadioLayout className='overflow-y-scroll scroll-smooth noselect'>

					<RadioLayout.SubHeader className='border-y-[2px] border-black sticky top-0'>
						<div className='flex flex-row w-full'>
							<div>ico</div>
							<input className='search' type='text' placeholder='search episode' />
						</div>
						<div className='underline' onClick={() => episodes.toggle()}>close</div>
					</RadioLayout.SubHeader>

					<div className='mt-[3rem] flex flex-col w-full gap-2 px-2'>
						<div className='flex flex-col leading-none gap-4 mb-2'>
							<div className='text-[36px]'>
								<div className='text-[#aaa]'>2026/01</div>
							</div>
							<div className='flex flex-col gap-2 text-[24px]'>
								<div className='flex flex-col gap-1 border-b-[1px] border-black py-2'>
									<div className='w-full'>Cosa Passa Nel Cervello Di Grande Fumo Vol.1</div>
									<div className='w-full text-[18px]'>Grande Fumo</div>
								</div>
								<div className='flex flex-col gap-1 border-b-[1px] border-black py-2'>
									<div className='w-full'>Cosa Passa Nel Cervello Di Grande Fumo Vol.2</div>
									<div className='w-full text-[18px]'>Grande Fumo</div>
								</div>
							</div>
						</div>

						<div className='flex flex-col leading-none gap-4 my-4'>
							<div className='text-[36px]'>
								<div className='text-[#aaa]'>2025/12</div>
							</div>
							<div className='flex flex-col gap-2 text-[24px]'>
								<div className='flex flex-col gap-1 border-b-[1px] border-black py-2'>
									<div className='w-full'>Cosa Passa Nel Cervello Di Grande Fumo Vol.1</div>
									<div className='w-full text-[18px]'>Grande Fumo</div>
								</div>
								<div className='flex flex-col gap-1 border-b-[1px] border-black py-2'>
									<div className='w-full'>Cosa Passa Nel Cervello Di Grande Fumo Vol.2</div>
									<div className='w-full text-[18px]'>Grande Fumo</div>
								</div>
							</div>
						</div>

						<div className='flex flex-col leading-none gap-4 my-4'>
							<div className='text-[36px]'>
								<div className='text-[#aaa]'>2025/11</div>
							</div>
							<div className='flex flex-col gap-2 text-[24px]'>
								<div className='flex flex-col gap-1 border-b-[1px] border-black py-2'>
									<div className='w-full'>Cosa Passa Nel Cervello Di Grande Fumo Vol.1</div>
									<div className='w-full text-[18px]'>Grande Fumo</div>
								</div>
								<div className='flex flex-col gap-1 border-b-[1px] border-black py-2'>
									<div className='w-full'>Cosa Passa Nel Cervello Di Grande Fumo Vol.2</div>
									<div className='w-full text-[18px]'>Grande Fumo</div>
								</div>
							</div>
						</div>
						
					</div>

				</RadioLayout>
			)}

			{radioPlayer.isSmallPlayerOpen && (<RadioPlayerSmall radioPlayer={radioPlayer}></RadioPlayerSmall>)}

		</div>
	)
}

export default Radio;
