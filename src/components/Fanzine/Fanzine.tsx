import { useState } from 'react';
import PageLayout, { IPage } from '../PageContainer/PageLayout';
import useVerticalScroller from '../../hooks/useVerticalScroller';

export interface FanzineProps {
	defaultPages: IPage[]
}

function Fanzine({ defaultPages }: FanzineProps) {

	const [pages, _] = useState<IPage[]>(defaultPages);

	// const verticalScroller = useContext(PageLayoutContext)
	const verticalScroller = useVerticalScroller(pages);

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
		</PageLayout>
	);
}

export default Fanzine
