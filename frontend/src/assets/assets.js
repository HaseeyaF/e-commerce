import p_img1 from './p_img1.png'
import p_img2 from './p_img2.png'
import p_img3_1 from './p_img3_1.png'
import p_img3_2 from './p_img3_2.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8_1 from './p_img8_1.png'
import p_img8_2 from './p_img8_2.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12_1 from './p_img12_1.png'
import p_img12_2 from './p_img12_2.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15_1 from './p_img15_1.png'
import p_img15_2 from './p_img15_2.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
/*import p_img18_1 from './p_img18_1.png'
import p_img18_2 from './p_img18_2.png'
import p_img18_3 from './p_img18_3.png'
import p_img18_4 from './p_img18_4.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21_1 from './p_img21_1.png'
import p_img21_2 from './p_img21_2.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'
import p_img24 from './p_img24.png'
import p_img25 from './p_img25.png'
import p_img26 from './p_img26.png'
import p_img27 from './p_img27.png'
import p_img28 from './p_img28.png'
import p_img29 from './p_img29.png'
import p_img30 from './p_img30.png'
*/

import logo from './logo.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import cross_icon from './cross_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import menu_icon from './menu_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import contact_img from './contact_img.png'
import hero_img from './hero_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'

export const assets = { /*this for clickable icons*/
    logo,
    cart_icon,
    bin_icon,
    cross_icon,
    dropdown_icon,
    exchange_icon,
    menu_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    support_img,
    contact_img,
    hero_img,
    razorpay_logo,
    stripe_logo

}

export const products = [
    {
        _id: "1001",
        name: "Cookware set",
        description: "",
        price: 9000,
        image: [p_img1],
        category: "Other",
        subCategory: "Kitchen",
        sizes: ["18CM", "20CM", "22CM", "24CM", "26CM"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1002",
        name: "Non-stick Cookware Set",
        description: "",
        price: 12000,
        image: [p_img2],
        category: "Other",
        subCategory: "Kitchen",
        sizes: ["18CM", "20CM", "22CM", "24CM", "26CM"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1003",
        name: "Foldable Outdoor Chair",
        description: "",
        price: "",
        image: [p_img3_1, p_img3_2],
        category: "Accessories",
        subCategory: "Living",
        sizes: ["Small", "Large"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1004",
        name: "Plate Rack",
        description: "",
        price: "",
        image: [p_img4],
        category: "Other",
        subCategory: "Kitchen",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1005",
        name: "Portable Juicer",
        description: "6 Blades",
        price: "",
        image: [p_img5],
        category: "Electronics",
        subCategory: "Kitchen",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1006",
        name: "Hair Dryer",
        description: "",
        price: 2800,
        image: [p_img6],
        category: "Electronics",
        subCategory: "Living",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1007",
        name: "Mosquito Bat",
        description: "Rechargeable",
        price: "",
        image: [p_img7],
        category: "Electronics",
        subCategory: "Living",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1008",
        name: "Food Container",
        description: "Flora Set",
        price: 100,
        image: [p_img8_1, p_img8_2],
        category: "Accessories",
        subCategory: "Kitchen",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1009",
        name: "Popcorn Maker",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 5500,
        image: [p_img9],
        category: "Electronics",
        subCategory: "Kitchen",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1010",
        name: "Vacuum and Blower",
        description: "20L - Wet and Dry 1200W",
        price: 100,
        image: [p_img10],
        category: "Electronics",
        subCategory: "Living",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1011",
        name: "Water Bottle",
        description: "Temperature in lid",
        price: 100,
        image: [p_img11],
        category: "Other",
        subCategory: "Office",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1012",
        name: "Automatic Rice Cooker",
        description: "1.8L with steamer",
        price: "",
        image: [p_img12_1, p_img12_2],
        category: "Electronics",
        subCategory: "Kitchen",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1013",
        name: "Gas Cooker",
        description: "Two burner",
        price: "",
        image: [p_img13],
        category: "Other",
        subCategory: "Kitchen",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1014",
        name: "Food Container",
        description: "",
        price: "",
        image: [p_img14],
        category: "Accessories",
        subCategory: "Kitchen",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1015",
        name: "Handmade Sink",
        description: "A lightweight close fitting",
        price: "",
        image: [p_img15_1, p_img15_2],
        category: "Other",
        subCategory: "Kitchen",
        sizes: ["Single 50x40", "Double 78x43"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1016",
        name: "Water Bottle",
        description: "Foldable",
        price: 100,
        image: [p_img16],
        category: "Other",
        subCategory: "Office",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "1017",
        name: "Personal Scale",
        description: "A Bathroom scale, not for business counting",
        price: 100,
        image: [p_img17],
        category: "Electronics",
        subCategory: "Living",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    }/*,
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img18_1, p_img18_2, p_img18_3, p_img18_4],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img19],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img20],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img21_1, p_img21_2],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img22],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img23],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img24],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img25],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img26],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img27],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img28],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img29],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaa",
        name: "Woman Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close fitting",
        price: 100,
        image: [p_img30],
        category: "Woman",
        subCategory: "Topwear",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true
    }*/
] 
