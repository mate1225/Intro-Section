export default function ClientImage({ imageSrc }) {
  return (
    <>
      <img
        src={imageSrc}
        className=" max-h-[0.9rem] max-w-[5.1rem] sm:max-h-none sm:max-w-none  "
      />
    </>
  );
}
