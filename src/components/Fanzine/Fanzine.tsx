import { useState } from 'react';
import { IPage } from '../PageContainer/Page';
import PageContainer from '../PageContainer/PageContainer';

export interface FanzineProps {
	defaultPages: IPage[]
}

function Fanzine({ defaultPages }: FanzineProps) {

	const [pages, _] = useState<IPage[]>(defaultPages);

	return (
		<PageContainer className='scroll-snap'
			pages={pages}
		>
		</PageContainer>
	);
}

export default Fanzine
