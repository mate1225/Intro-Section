export default function HeroImage({ mobile, desktop }) {
  return (
    <header>
      <div className=" flex  items-center justify-center">
        <img src={mobile} className=" w-screen object-cover lg:hidden" />
      </div>
      <img
        src={desktop}
        className="hidden max-w-[30rem] object-cover lg:mt-[4.19rem] lg:block xl:mr-[8.13rem]  "
      />
    </header>
  );
}
