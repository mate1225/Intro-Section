import ClientImage from "./ClientImage";

export default function Client({ image1, image2, image3, image4 }) {
  return (
    <div className=" mx-4 mt-[3rem]  flex  justify-between gap-4 xl:mt-[7.25rem] ">
      <ClientImage imageSrc={image1} />
      <ClientImage imageSrc={image2} />
      <ClientImage imageSrc={image3} />
      <ClientImage imageSrc={image4} />
    </div>
  );
}
