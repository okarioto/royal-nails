import ContactItem from "./ContactItem";


function Contact() {
    return <div className="content contact-content flex-wrapper">
        <div className="grey-card flex-wrapper contact-card-wrapper">
            <div className="contact-info-wrapper flex-wrapper">
                <h2 className="content-title">CONTACT</h2>
                <ContactItem title="Email" text="royalnails@example.com" link="mailto:royalnails@example.com"/>
                <ContactItem title="Phone" text=" +1 (604) 733 - 5090" link="tel:+1 6047335090" />




            </div>
        </div>
    </div>
}

export default Contact;