
function ServiceItem(props) {
    return (
        <div className="service-item">
            <div className="service-item-title-price-wrapper flex-wrapper">
                <p className="service-item-title"> {props.title} </p>
                <p className="service-item-price">
                    {props.price}
                </p>
            </div>
            <div className="service-item-description-wrapper">
                <ul>
                    <li className="service-item-description">{props.description}</li>
                </ul>

            </div>
        </div>);
}

export default ServiceItem;