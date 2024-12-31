import Link from "next/link";

function ContactItem(props) {
    return (
        <div className="contact-item-wrapper flex-wrapper">
            <p className="contact-item-title">{props.title}</p>
            <Link className="contact-item-info" href={props.link}>{props.text}</Link>
        </div>);
}
export default ContactItem;