//jsx
import Client from "./Client";
//images
import dataBiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import maker from "../images/client-maker.svg";
import meet from "../images/client-meet.svg";
import hero_desktop from "../images/image-hero-desktop.png";
import hero_mobile from "../images/image-hero-mobile.png";
import HeroImage from "./HeroImage";
import WorkSection from "./WorkSection";
export default function MainContent() {
  return (
    <>
      <div className=" flex flex-col xl:flex-row-reverse ">
        <HeroImage mobile={hero_mobile} desktop={hero_desktop} />
        <WorkSection />
      </div>

      <Client
        image1={dataBiz}
        image2={audiophile}
        image3={maker}
        image4={meet}
      />
    </>
  );
}
