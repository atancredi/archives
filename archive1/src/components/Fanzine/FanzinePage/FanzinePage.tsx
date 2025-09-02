export interface FanzinePageProps {
  backgroundUrl: string
}

function FanzinePage({ backgroundUrl }: Readonly<FanzinePageProps>) {

  const style = {
    backgroundImage: `url(${backgroundUrl})`,
  };

  return (
    <div className="slide-page" style={style}>
      {/* You can add content inside the div, like text or buttons */}
      {/* <h1>My Awesome Slide</h1> */}
    </div>
  );
}

export default FanzinePage
