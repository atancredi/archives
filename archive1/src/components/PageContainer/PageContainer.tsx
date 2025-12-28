import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import './PageContainer.css'
import './dots.css'
import Page, { IPage } from './Page';


export interface PageContainerProps extends PropsWithChildren {
	className?: string
	onScroll?: (e: Event) => void
	pages: IPage[]
}


function PageContainer({ pages, className }: PageContainerProps) {

	const containerRef = useRef<HTMLDivElement>(null);

	const [currentPage, setCurrentPage] = useState(0);
	const pageRefs = useRef<(HTMLElement | null)[]>([]);

	useEffect(() => {
		const observerOptions = {
			root: containerRef.current,
			rootMargin: '0px',
			threshold: 0.26,
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = pageRefs.current.indexOf(entry.target as HTMLElement);
					if (index !== -1) {
						setCurrentPage(index);
						console.log("current page", index);
					}
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);

		pageRefs.current.forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, [pages]);

	return (
		<div ref={containerRef} className={"page-container " + className}>
			{pages.map((page, index) => (
				<Page
					key={page.id}
					style={{ backgroundImage: "url(" + page.imageUrl + ")", ...page.style }}
					ref={(el) => { pageRefs.current[index] = el; }}
				>
				</Page>
			))}
			<div className="pagination">
				{pages.map((_, idx) => (
					<div
						key={idx}
						className={`dot ${currentPage === idx ? 'active' : ''}`}
					/>
				))}
			</div>
		</div>
	);
}

export default PageContainer;
