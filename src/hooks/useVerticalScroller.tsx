import { RefObject, useEffect, useRef, useState } from "react";
import { IPage } from "../components/PageContainer/PageLayout";

export interface IVerticalScroller {
    currentPage: number
    containerRef: RefObject<HTMLDivElement | null>
    pageRefs: RefObject<(HTMLElement | null)[]>
}


export default function useVerticalScroller(
    pages: IPage[]
): IVerticalScroller {
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




    return {
        currentPage,
        containerRef,
        pageRefs
    }
}