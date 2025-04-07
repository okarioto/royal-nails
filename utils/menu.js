const acrylic = {
    title: "acrylic",
    blurb: "Known for their strength and durability, acrylic nails are created using a liquid and powder combination that hardens to form a protective layer over your natural nails. Ideal for those looking for longer, sculpted nails with a polished, long-lasting finish.",
    items: [{ name: "Full Set Acrylic", price: " 47 & up" }, { name: "Acrylic Fill", price: " 42 & up" }, { name: "Full Set Acrylic 2 Tone", price: " 57 & up" }, { name: "Acrylic 2 Tone Fill", price: " 42 & up" }]
}



const gel = {
    title: "gel",
    blurb: "A lightweight and flexible option, gel nails provide a glossy, natural look while maintaining durability. Cured under a LED lamp, they offer a chip-resistant, smooth finish that lasts up to three weeks. A great choice for those who prefer a sleek and refined appearance.",
    items: [{ name: "Full Set Gel", price: " 55 & up" }, { name: "Gel Fill", price: " 40 & up" }, { name: "Full Set Gel 2 Tone", price: " 65 & up" }, { name: "Gel 2 Tone & Fill", price: " 50 & up" }, { name: "Clear Gel On Top", price: " 7 & up" }]
}



const solar = {
    title: "solar",
    blurb: "A premium type of acrylic nails, solar nails are designed to provide a long-lasting pink-and-white French manicure look. They are resistant to yellowing and lifting, making them a low-maintenance, high-quality option for those seeking a classic, polished style.",
    items:[{ name: "Full Set Solar", price: " 52 & up" }, { name: "Solar Fill", price: " 37 & up" }, { name: "Full Set Solar 2 Tone", price: " 62 & up" }, { name: "Solar 2 Tone Fill", price: " 47 & up" }]
}


const mani_pedi = {
    title: "manicures & pedicures",
    blurb: "Keep your hands and feet looking their best with our expert manicures and pedicures. Whether you need a quick refresh or a full treatment, we ensure healthy, polished nails with a flawless finish.",
    items: [{ name: "Regular Pediucre", price: " 37 & up" }, { name: "Regular Manicure", price: " 24 & up" }, { name: "Regular Manicure & Pedicure", price: " 54 & up" }, { name: "Mini Manicure & Pedicure", price: " 44 & up" }, { name: "Princess Manicure & Pedicure \n (For childeren under 13)", price: " 40 & up" }]
}

const deluxe_mani_pedi ={
    title: "deluxe treatments",
    blurb: "Upgrade your nail care with a spa-like experience. Our deluxe treatments include salt scrubs, hot stone massages, and paraffin therapy to nourish, relax, and rejuvenate your skin.",
    items: [{ name: "Deluxe Pedicure", price: " 52 & up" }, { name: "Deluxe Manicure", price: " 37 & up" }, { name: "Deluxe Manicure & Pedicure", price: " 84 & up" }]
}

const add_ons = {
    title: "add ons and extras",
    blurb: "Enhance your service with gel polish, paraffin treatments, polish changes, and more. These finishing touches help you achieve the perfect look while keeping your nails healthy and strong.", 
    items: [{ name: "Add Gel Polish", price: " 17 & up" }, , { name: "Gel Polish Change", price: " 32 & up" }, { name: "Polish Change", price: " 17 & up" }, { name: "Nail Cut", price: " 12 & up" }, { name: "Acrylic/Gel/Solar Take Off", price: " 22 & up" }, { name: "Paraffin Hand Treatment", price: " 15" }, { name: "Paraffin Feet Treatment", price: " 17" }]
}

const massage =  {
    title: "massage",
    blurb: "Relax and unwind with our soothing hand and feet massages. Designed to relieve tension and improve circulation, this treatment will leave your hands and feet feeling rejuvenated and stress-free. Perfect for a quick escape or a complement to any nail service.",
    items:[{ name: "15 Minutes", price: " 20" }, { name: "30 Minutes", price: " 30" }]
}


const full_menu = [gel, acrylic, solar, mani_pedi, deluxe_mani_pedi, add_ons, massage]

export default full_menu;