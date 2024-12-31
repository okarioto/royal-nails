import ServiceCard from "./ServiceCard";
import { maniServices, pediServices } from "./service_list";


function Services() {
    return <div className="services-content content flex-wrapper">
        <div className="services-left-wrapper flex-wrapper">
            <div className="services-left">
                <div className="grey-card flex-wrapper">
                    <ServiceCard title="MANICURES" serviceItems={maniServices} />
                </div>
            </div>
        </div>
        <div className="vertical-line"> </div>
        <div className="services-right-wrapper flex-wrapper">
            <div className="services-right">
                <div className="grey-card flex-wrapper">
                    <ServiceCard title="PEDICURES" serviceItems={pediServices} />
                </div>
            </div>
        </div>
    </div>
}

export default Services;