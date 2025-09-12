import { PropsWithChildren } from 'react';
import './PageContainer.css'


export interface PageContainerProps extends PropsWithChildren {
  className?: string
}

function PageContainer({ children, className }: PageContainerProps) {

  return (
    <div className={"page-container "+className}>
      {children}
    </div>
  );
}

export default PageContainer;
