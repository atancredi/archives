import { ComponentProps, forwardRef, RefObject, useEffect, useState } from "react";
import { IPage } from "./PageContainer";

export interface IPageProps extends ComponentProps<'div'> {
	page: IPage
	isVisible: boolean
}

const Page = forwardRef<HTMLElement, IPageProps>(({
	page,
	style,
	className,
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
		</div>
	);
});

export default Page
