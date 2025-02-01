export const metadata = {
    title: 'Contact'
};
export default function Contact() {
    const mapLink = "https://www.google.com/maps/place/Royal+Nails/@49.2635328,-123.1451525,17z/data=!3m2!4b1!5s0x548673b86adcf13f:0x81b9128823aa3c4d!4m6!3m5!1s0x548673b815b63da9:0xfdc9f48e0af309c3!8m2!3d49.2635328!4d-123.1425776!16s%2Fg%2F1tf7gc0g?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
    return (
        <div id="contact" className="flex flex-1 justify-center items-center w-full h-full">
            <div className="flex justify-center items-center border-r-[1px]  border-l-[1px] border-slate-500 rounded-3xl mt-10 mb-5 md:w-[25rem] md:h-[25rem] ">

                <div className="flex flex-col items-center justify-center w-full mb-3 md:mb-5">
                    <div className="flex flex-col items-center justify-center p-6 md:p-10 ">
                        <h3 className="font-title tracking-[0.75rem] text-[22px] md:text-[34px] ">Contact</h3>
                        <div className="flex items-center justify-center w-full md:mt-3">
                            <a href="tel:+16047335090" target="_blank" className="font-subtitle text-[12px] font-bold text-secondary-text hover:text-black md:text-[18px]">(604) 733-5090</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full mt-3">
                        <h3 className="font-title tracking-[0.75rem] text-[22px] md:text-[34px] ">Address</h3>
                        <div className="flex items-center justify-center w-full md:mt-3">
                            <a href={mapLink} target="_blank" className="font-subtitle text-[12px] font-bold text-secondary-text w-[11rem] hover:text-black text-center md:text-[18px] md:w-[15rem]">108-1688 West Broadway Vancouver, BC V6J 1X60</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}