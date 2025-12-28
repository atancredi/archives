import { ComponentProps, CSSProperties, forwardRef, JSX, RefObject } from "react";

export interface IPage {
  id: number
  imageUrl: string
  style?: CSSProperties
  children?: JSX.Element
}

export interface IPageProps extends ComponentProps<'div'> {
  style?: CSSProperties
  backgroundUrl?: string
  className?: string
}

const Page = forwardRef<HTMLElement, IPageProps>(({
  backgroundUrl,
  style,
  className = "",
}, ref) => {
  const backgroundStyles = backgroundUrl ? { backgroundImage: 'url(' + backgroundUrl + ')' } : {};
  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={"page " + className}
      style={{ ...style, ...backgroundStyles }}
    >
    </div>
  );
});

export default Page
