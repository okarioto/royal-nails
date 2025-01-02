'use client'
import ServiceItem from "./ServiceItem";
import ExpandServiceBtn from "./ExpandServiceBtn";
import { useState } from "react";

function ServiceCard(props) {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="services-card-content-wrapper flex-wrapper">
            <div className="content-title-wrapper"><h2 className="content-title">{props.title}</h2>

                <ExpandServiceBtn
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />

            </div>
            <div className="service-item-wrapper service-item-wrapper-desktop">
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
            <div className={`service-item-wrapper service-item-wrapper-mobile ${isOpen && 'expand'}`}>
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