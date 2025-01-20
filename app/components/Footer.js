import Link from "next/link";

export default function Footer() {
    const mapLink = "https://www.google.com/maps/place/Royal+Nails/@49.2635328,-123.1451525,17z/data=!3m2!4b1!5s0x548673b86adcf13f:0x81b9128823aa3c4d!4m6!3m5!1s0x548673b815b63da9:0xfdc9f48e0af309c3!8m2!3d49.2635328!4d-123.1425776!16s%2Fg%2F1tf7gc0g?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
    return (
        <div className="flex justify-center items-center bg-background mt-5">
            <div className="flex flex-col w-[80%] md:flex-row-reverse md:justify-between">
                <div className="flex flex-1 flex-col pt-8 pb-5 md:flex-row md:gap-14">
                    <div className="flex flex-col items-start mb-3">
                        <h3 className="font-subtitle text-[12px] font-extrabold tracking-widest"><Link href={"/Services"}>SERVICES</Link></h3>
                        <ul>
                            <li className="font-subtitle text-[12px] font-bold text-secondary-text hover:text-black"><Link href={"/Services#acrylic"}>Acrylic</Link> </li>
                            <li className="font-subtitle text-[12px] font-bold text-secondary-text hover:text-black"><Link href={"/Services#solar"}>Solar</Link></li>
                            <li className="font-subtitle text-[12px] font-bold text-secondary-text hover:text-black"><Link href={"/Services#gel"}>Gel</Link></li>
                            <li className="font-subtitle text-[12px] font-bold text-secondary-text hover:text-black"><Link href={"/Services#nail care"}>Nail Cars</Link> </li>
                            <li className="font-subtitle text-[12px] font-bold text-secondary-text hover:text-black"><Link href={"/Services#massage"}>Massage</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start mb-3">
                        <h3 className="font-subtitle text-[12px] font-bold tracking-widest w-[7rem]">CALL US</h3>
                        <a href="tel:+16047335090" target="_blank" className="font-subtitle text-[12px] font-bold text-secondary-text hover:text-black">(604)  733 - 5090</a>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="font-subtitle text-[12px] font-bold tracking-widest">ADDRESS</h3>
                        <a href={mapLink} target="_blank" className="font-subtitle text-[12px] font-bold text-secondary-text w-[11rem] hover:text-black">108-1688 West Broadway Vancouver, BC V6J 1X60</a>


                    </div>
                </div>
                <div className="flex flex-1 justify-start items-center mb-5 md:mb-0">
                    <p className="font-subtitle text-[14px] font-bold text-secondary-text">COPYRIGHT © 2025 ROYAL NAILS</p>
                </div>

            </div>
        </div>);
}