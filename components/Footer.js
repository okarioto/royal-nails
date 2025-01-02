import Link from "next/link";

function Footer() {
    return (
        <div className="footer-wrapper flex-wrapper">
            <footer className="footer flex-wrapper">
                <div className="copyright-wrapper">COPYRIGHT © 2025 ROYALNAILS</div>
                <div className="footer-sections-wrapper">
                    <section className="footer-services-wrapper">
                        <h4 className="footer-title">SERVICES</h4>
                        <ul className="services">
                            <li className="footer-item service-item"><Link href="/services">Manicures</Link></li>
                            <li className="footer-item service-item"><Link href="/services">Pedicures</Link></li>
                        </ul>
                    </section>
                    <section className="footer-policies-wrapper">
                        <h4 className="footer-title">POLICY</h4>
                        <ul className="policies">
                            <li className="footer-item policy-item"><Link href="!!!">Terms Of Service</Link></li>
                        </ul>
                    </section>
                    <section className="footer-contact-wrapper">
                        <h4 className="footer-title">CONTACT</h4>
                        <ul className="contact">
                            <li className="footer-item contact-item"><Link href="mailto:royalnails@example.com">Email</Link></li>
                            <li className="footer-item contact-item"><Link href="tel:+1 6047335090">Phone</Link></li>
                        </ul>
                    </section>
                </div>
            </footer>
        </div>);
}


export default Footer;