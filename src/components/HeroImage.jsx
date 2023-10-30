export default function HeroImage({ mobile, desktop }) {
  return (
    <>
      <div className=" flex items-center justify-center">
        <img src={mobile} className=" xl:hidden" />
      </div>

      <img src={desktop} className="hidden xl:block" />
    </>
  );
}
