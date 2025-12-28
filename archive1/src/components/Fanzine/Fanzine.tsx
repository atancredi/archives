import { useState } from 'react';
import Page, { IPage } from '../PageContainer/Page';
import PageContainer from '../PageContainer/PageContainer';

export interface FanzineProps{
  defaultPages: IPage[]
}

// export interface IFanzineEntry {
//   id: number
//   imageUrl: string
//   style: CSSProperties
// }

function Fanzine({defaultPages}: FanzineProps) {

  const [pages, _] = useState<IPage[]>(defaultPages);

  return (
    <PageContainer className='scroll-snap'
      pages={pages}
    >
    </PageContainer>
  );
}

export default Fanzine
