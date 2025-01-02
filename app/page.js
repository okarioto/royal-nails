import Image from 'next/image'; 

export const metadata = {
  title: 'RoyalNails, Home'
};

export default function Home() {
  return (
    <div className="home-content content">
      <div className="flex-wrapper home-left-wrapper">
        <div className="home-left flex-wrapper">
          <div className="home-left-top">
            <div className="content-title-wrapper">
              <h2 className="content-title">NAILS!</h2>
            </div>
            <div className="content-p-wrapper">
              <p className="content-p">At Royal Nails, we’ve been proudly serving the Vancouver community for over 20 years, making us the longest-standing nail salon in the city. Our commitment to excellence and customer satisfaction has earned us a loyal following and a reputation for quality. Step into our tranquil, stylish space where relaxation meets expert care. Our skilled technicians offer a range of services, from classic manicures and pedicures to luxurious gel and acrylic nail enhancements, all tailored to your unique style. We use high-quality, eco-friendly products to ensure your nails look beautiful and stay healthy. Whether you're looking for a quick polish change or a complete nail makeover, we provide a comfortable, welcoming environment to make your experience as enjoyable as it is rejuvenating. At Royal Nails, we’re more than just a nail salon – we're a destination for self-care, where you can unwind, feel pampered, and leave with nails that shine. Book your appointment today and treat yourself to the perfect nails you've always dreamed of. </p>
            </div>
          </div>
          <div className="home-left-bottom flex-wrapper">
            <div className="home-left-bottom-left-wrapper">
              <div className="home-left-bottom-card">
                <Image className='image' src={"/images/manicure.jpg"} width={4000} height={6000} alt='Manicure ' />
              </div>
            </div>
            <div className="home-left-bottom-right-wrapper"><div className="home-left-bottom-card">
              <Image className='image' src={"/images/pedicure.jpg"} width={4000} height={6000} alt='Pediicure ' />
            </div></div>

          </div>

        </div>
      </div>
      <div className="flex-wrapper home-right-wrapper">
        <div className="home-right">
          <div className="grey-card flex-wrapper">
            <div className="hours flex-wrapper">
              <h2 className="hours-title">
                HOURS
              </h2>
              <div className="flex-wrapper hours-item">
                <p>WEEKDAYS</p>
                <p className="hours-hours">10:00AM - 7:00PM</p>
              </div>
              <div className="flex-wrapper hours-item">
                <p>SATURDAY</p>
                <p className="hours-hours">10:00AM - 6:00PM</p>
              </div>
              <div className="flex-wrapper hours-item">
                <p>SUNDAY</p>
                <p className="hours-hours">11:00AM - 6:00PM</p>
              </div>
              <div className="flex-wrapper hours-item">
                <p>STAT HOLIDAYS</p>
                <p className="hours-hours">CLOSED</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
