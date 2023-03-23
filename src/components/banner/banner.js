function Banner({ img, texte = false }) {
    return (
    <>
      <img
        className="imagebanner" src={img} alt="payage de présentation"/>
      {texte && <h1>{texte}</h1>}
    </>
  );
}
export default Banner;
