

export const metadata = {
  title: 'Home'
};

export default function Home() {
  return (
    <div className="flex-1 flex justify-center">
      <div className="flex flex-col w-[80%] mt-5 items-center xl:flex-row xl:gap-20">
        <div className="flex flex-col w-full items-center justify-center xl:flex-[60%]">
          <div className="flex flex-col w-full">
            <h1 className="font-title tracking-[1.5rem] text-[32px]">Nails!</h1>
            <p className="font-subtitle text-[14px] mt-5 md:text-[20px] md:text-justify">At Royal Nails, we’ve been proudly serving the Vancouver community for over 20 years, making us the longest-standing nail salon in the city. Our commitment to excellence and customer satisfaction has earned us a loyal following and a reputation for quality. Our skilled technicians offer a range of services, from classic manicures and pedicures to luxurious gel and acrylic nail enhancements, all tailored to your unique style.</p>
          </div>

          <img src="/images/feet.jpg" className="mt-7 mb-7 rounded-3xl" />
        </div>

        <div className="flex justify-center items-center w-full bg-background rounded-3xl mb-10  xl:flex-[40%]">
          <div className="flex flex-col w-[80%] mt-4 mb-5 justify-center items-start ">
            <h3 className="font-title tracking-[0.5rem] text-[26px] md:text-[34px] md:mt-7">Hours</h3>

            <div className="flex justify-between w-full mb-2 md:mb-10 md:mt-3">
              <h4 className="font-subtitle text-[14px] md:text-[18px]">Weekdays </h4>
              <h4 className="font-subtitle text-[14px] md:text-[18px] md:hidden">10AM - 7:30PM </h4>
              <h4 className="hidden font-subtitle text-[14px] md:text-[18px] md:block">10:00AM - 07:30PM </h4>
            </div>

            <div className="flex justify-between w-full mt-2 mb-2 md:mb-10">
              <h4 className="font-subtitle text-[14px] md:text-[18px]">Saturday </h4>
              <h4 className="font-subtitle text-[14px] md:text-[18px] md:hidden">10AM - 6PM </h4>
              <h4 className="hidden font-subtitle text-[14px] md:text-[18px] md:block">10:00AM - 06:00PM </h4>
            </div>

            <div className="flex justify-between w-full mt-2 md:mb-10">
              <h4 className="font-subtitle tracking-tighter text-[14px] md:text-[18px]">Sunday & Holidays </h4>
              <h4 className="font-subtitle text-[14px] md:text-[18px] md:hidden">11AM - 6PM </h4>
              <h4 className="hidden font-subtitle text-[14px] md:text-[18px] md:block">11:00AM - 06:00PM </h4>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
