
import MenuCard from "@/app/components/MenuCard"
import full_menu from "@/utils/menu.js"

export const metadata = {
    title: 'Services'
};

export default function Services() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <h1 className="font-title tracking-[0.5rem] text-[24px] mt-10 md:text-[32px] md:tracking-[1.2rem]">Services</h1>
            {full_menu.map((menu_item, idx) => {
                return <MenuCard key={idx} title={menu_item.title} items={menu_item.items} />
            })}
            <p className="w-[90%] font-subtitle text-secondary-text text-[10px] tracking-tighter text-center md:text-[14px] mb-10">please be aware prices are subject to change depending on complexity</p>
        </div>)
}