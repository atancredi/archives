import { IVerticalScroller } from '../../hooks/useVerticalScroller';
import { IPage } from './PageLayout';
import './PagePaginationDots.css'

export interface IPagePaginationDotsProps {
    pages: IPage[]
    verticalScroller: IVerticalScroller
}

function PagePaginationDots({ pages, verticalScroller }: IPagePaginationDotsProps) {

    const scrollToPage = (index: number) => {
        const container = verticalScroller.containerRef?.current;
        const section = verticalScroller.pageRefs?.current[index];

        if (container && section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="pagination">
            {pages.map((_, idx) => (
                <div
                    key={idx}
                    onClick={() => scrollToPage(idx)}
                    aria-label={`Go to page ${idx + 1}`}
                    className={`dot ${verticalScroller.currentPage === idx ? 'active' : ''}`}
                />
            ))}
        </div>
    )

}

export default PagePaginationDots;