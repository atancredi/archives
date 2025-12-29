import { useState } from 'react';
import PageLayout, { IPage } from '../PageContainer/PageLayout';
import useVerticalScroller from '../../hooks/useVerticalScroller';

import './menu.css';

export interface FanzineProps {
	defaultPages: IPage[]
}

function Fanzine({ defaultPages }: FanzineProps) {

	const [pages, _] = useState<IPage[]>(defaultPages);

	// const verticalScroller = useContext(PageLayoutContext)
	const verticalScroller = useVerticalScroller(pages);

	const [menuShowing, setMenuShowing] = useState(false);

	return (
		<PageLayout className='scroll-snap'
			pages={pages}
			verticalScroller={verticalScroller}
		>
			{pages.map((page, index) => (
				<PageLayout.Page
					key={page.id}
					page={page}
					style={{ backgroundImage: "url(" + page.imageUrl + ")", ...page.style }}
					ref={(el) => { verticalScroller.pageRefs.current[index] = el }}
					isVisible={Math.abs(verticalScroller.currentPage - index) <= 1}
				>
				</PageLayout.Page>
			))}
			<div
				onClick={() => { setMenuShowing(!menuShowing) }}
				className='pages-menu-trigger'
			>+</div>
			{menuShowing && (
				<div className='page pages-menu'>
					<div className='pages-menu-row'>Menu 1</div>
					<div className='pages-menu-row'>Menu 2</div>
					<div className='pages-menu-row'>Menu 3</div>
					<div className='pages-menu-row'>Menu 4</div>
				</div>
			)}
		</PageLayout>
	);
}

export default Fanzine
