import { CSSProperties, PropsWithChildren } from "react";

export interface PageProps extends PropsWithChildren {
  style?: CSSProperties
}

function Page({ children, style }: Readonly<PageProps>) {

  return (
    <div className="page" style={style}>
      {children}
    </div>
  );
}

export default Page
