import ServiceItem from "./ServiceItem";
function ServiceCard(props) {
    return (
        <div className="services-card-content-wrapper flex-wrapper">
            <div className="content-title-wrapper"><h2 className="content-title">{props.title}</h2></div>
            <div className="service-item-wrapper">
                {
                    props.serviceItems.map((service) => {
                        return <ServiceItem 
                        key={service.id}
                        title={service.title} 
                        price={service.price} 
                        description={service.description} />
                    })
                }

            </div>
        </div>);
}

export default ServiceCard;