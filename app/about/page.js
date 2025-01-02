import Image from "next/image";

function About() {
    return (
        <div className="about-content content flex-wrapper">
            <div className="about-left-wrapper flex-wrapper">
                <div className="about-left">
                    <div className="about-left-card flex-wrapper">
                        <Image className="image" src={"/images/aesthetic.jpg"} width={4000} height={5000} alt="aesthetic" />
                    </div>
                </div>
            </div>
            <div className="vertical-line"></div>
            <div className="about-right-wrapper flex-wrapper">
                <div className="about-right">
                    <div className="content-title-wrapper">
                        <h2 className="content-title">ABOUT US</h2>
                        <p className="content-p">Founded over 20 years ago, Royal Nails has been proudly serving the Vancouver community as the longest-standing nail salon in the area. Our mission is to offer not only high-quality nail care but also a welcoming, relaxing environment where every customer feels valued and pampered. We take pride in using eco-friendly products and offering personalized services tailored to each client’s needs. From simple manicures to stunning nail art, our experienced technicians ensure every visit is an indulgent experience. We look forward to continuing to serve Vancouver with the highest standards of care and style.
                        </p>
                    </div>
                </div>
            </div>
        </div>);

}

export default About;
