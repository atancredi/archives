import { useEffect, useState } from 'react';
import './Fanzine.css'
import FanzinePage from './FanzinePage/FanzinePage';

export interface IFanzineEntry {
  id: number
  imageUrl: string
}

function Fanzine() {

  const [pages, setPages] = useState<IFanzineEntry[]>([]);

  useEffect(() => {
    setPages([
      { id: 1, imageUrl: 'fanz1/1.jpeg' },
      { id: 2, imageUrl: 'fanz1/2.jpeg' },
      { id: 3, imageUrl: 'fanz1/3.jpeg' },
      { id: 4, imageUrl: 'fanz1/4.jpeg' },
      { id: 5, imageUrl: 'fanz1/5.jpeg' },
      { id: 6, imageUrl: 'fanz1/6.png' },
      { id: 7, imageUrl: 'fanz1/7.jpeg' },
    ])
  }, [])

  return (
    <div className="slideshow-container">
      {/* Map over the slides array to render a SlidePage for each item */}
      {pages.map((page) => (
        <FanzinePage
          key={page.id} // The 'key' prop is crucial for React's rendering performance.
          backgroundUrl={page.imageUrl}
        />
      ))}
    </div>
  );
}

export default Fanzine
