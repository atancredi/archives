import { CSSProperties, PropsWithChildren, JSX, ComponentProps, forwardRef, RefObject, useEffect, useState } from 'react';
import './PageContainer.css'
import { IVerticalScroller } from '../../hooks/useVerticalScroller';
import PagePaginationDots from './PagePaginationDots';

export interface IPage {
	id: number
	imageUrl: string
	style?: CSSProperties
	children?: JSX.Element
}

export interface PageContainerProps extends PropsWithChildren {
	className?: string
	onScroll?: (e: Event) => void
	pages: IPage[]
	verticalScroller: IVerticalScroller
}


const PageLayout = ({ verticalScroller, pages, className, children }: PageContainerProps) => {

	return (
		<div ref={verticalScroller.containerRef} className={"page-container " + className}>
			{children}
			<PagePaginationDots pages={pages} verticalScroller={verticalScroller} />
		</div>
	);
}


export interface IPageProps extends ComponentProps<'div'> {
	page: IPage
	isVisible: boolean
}

PageLayout.Page = forwardRef<HTMLElement, IPageProps>(({
	children,
	page,
	style,
	className = "",
	isVisible = false
}, ref) => {

	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (!isVisible || isLoaded) return;

		// preload image in the browser
		const img = new Image();
		img.src = page.imageUrl;
		img.onload = () => setIsLoaded(true);
	}, [isVisible, isLoaded, page.imageUrl]);

	const backgroundStyle = {
		backgroundImage: `url(${page.imageUrl})`,
		opacity: isLoaded ? 1 : 0,
	}

	return (
		<div
			ref={ref as RefObject<HTMLDivElement>}
			className={"page " + className}
			style={{ ...style, ...backgroundStyle }}
		>
			{children}
		</div>
	);
});


export default PageLayout;
