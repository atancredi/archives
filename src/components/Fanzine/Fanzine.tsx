import { useState } from 'react';
import PageLayout, { IPage } from '../PageContainer/PageLayout';
import useVerticalScroller from '../../hooks/useVerticalScroller';

import './releases.css';
import './header.css';
import './menu.css';

export interface FanzineProps {
	defaultPages: IPage[]

	dev?: boolean
}

function Fanzine({ defaultPages, dev = false }: FanzineProps) {

	const [pages, _] = useState<IPage[]>(defaultPages);

	// const verticalScroller = useContext(PageLayoutContext)
	const verticalScroller = useVerticalScroller(pages);

	const [menuShowing, setMenuShowing] = useState(false);

	return (
		<PageLayout className='scroll-snap'
			pages={pages}
			verticalScroller={verticalScroller}
		>
			{!menuShowing && (
				<div className='header-container'>
					<div>
						flows <span className='text-sm'>1.0</span>
					</div>
					<div className='text-sm'>
						15/11/25 - Pisa
					</div>
				</div>
			)}
			{pages.map((page, index) => (
				<PageLayout.Page
					key={page.id}
					page={page}
					style={{ backgroundImage: "url(" + page.imageUrl + ")", ...page.style }}
					ref={(el) => { verticalScroller.pageRefs.current[index] = el }}
					isVisible={Math.abs(verticalScroller.currentPage - index) <= 1}
				>
					{/* <div className='release-box'>
						<div className='release-content'>

						</div>
						<div className='release-footer'>

						</div>
					</div> */}
				</PageLayout.Page>
			))}
			{dev && !menuShowing && (
				<div
					onClick={() => { setMenuShowing(!menuShowing) }}
					className='pages-menu-trigger'
				>+</div>
			)}
			{dev && menuShowing && (
				<div className='page pages-menu'>
					<div className='pages-menu-rows'>
						<div className='pages-menu-row'>events</div>
						<div className='pages-menu-row'>music</div>
						<div className='pages-menu-row'>flows</div>
						<div className='pages-menu-row'>booking</div>
					</div>
					{/* <div className='pages-menu-text'>
						<div>
						flows flowini flussini flusso flusws facciamo un facciamo
						facciamo un fagiano. facciamolo.<br />
						stacci dentro sta sta sta stacciicciicci dentro ti spenno in un attimino
						</div>
					</div> */} 
					<div className='pages-menu-footer'>
						{/* <div className='pages-menu-text'>
							flows
						</div> */}
						<div style={{height: '1rem'}}></div>
						{/* <div className='pages-menu-logo'>
							<img src='logo.png'></img>
						</div> */}
						{/* <div className='pages-menu-text right'>
							flows - <span className='text-sm'>2025</span>
						</div> */}
						<div style={{height: '1rem'}}></div>
						<div className='pages-menu-controls'>
							<div>
								{/* contacts */}
							</div>
							<div onClick={() => { setMenuShowing(!menuShowing) }}>close</div>
						</div>
						<div style={{height: '4rem'}}></div>
					</div>
				</div>
			)}
		</PageLayout>
	);
}

export default Fanzine
