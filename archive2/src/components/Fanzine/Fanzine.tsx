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
      { id: 1, imageUrl: 'fanz2/1.jpeg' },
      { id: 2, imageUrl: 'fanz2/2.png' },
      { id: 3, imageUrl: 'fanz2/3.jpeg' },
      { id: 4, imageUrl: 'fanz2/4.jpeg' },
      { id: 5, imageUrl: 'fanz2/5.jpeg' },
      { id: 6, imageUrl: 'fanz2/6.jpeg' },
      { id: 7, imageUrl: 'fanz2/7.png' },
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
