import {
    UserCircleIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import productImage1 from '../assets/images/product-1.png';
  import productImage2 from '../assets/images/product-2.png';
  import productImage3 from '../assets/images/product-1.png';
  import productImage4 from '../assets/images/product-2.png';
  import customer1 from '../assets/images/customer-1.png';
  import customer2 from '../assets/images/customer-1.png';
  import facebook from '../assets/icons/facebook.svg';
  import twitter from '../assets/icons/twitter.svg';
  import instagram from '../assets/icons/instagram.svg';
  import truckFast from '../assets/icons/truck-fast.svg';
  import shieldTick from '../assets/icons/shield-tick.svg';
  import support from '../assets/icons/support.svg';
  
  // Define and export `shoes`
  export const shoes = [
    { name: 'Shoe 1', img: productImage1 },
    { name: 'Shoe 2', img: productImage2 },
    { name: 'Shoe 3', img: productImage3 },
    { name: 'Shoe 4', img: productImage4 },
  ];
  
  // Define and export `statistics`
  export const statistics = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '100+', label: 'Stores Worldwide' },
    { value: '50+', label: 'Awards Won' },
  ];
  
  // Define and export `reviews`
  export const reviews = [
    {
      imgURL: customer1,
      customerName: 'Morich Brown',
      rating: 4.5,
      feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
      imgURL: customer2,
      customerName: 'Lota Mongeskar',
      rating: 4.5,
      feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
  ];
  
  // Define and export `footerLinks`
  export const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Air Force 1", link: "/" },
        { name: "Air Max 1", link: "/" },
        { name: "Air Jordan 1", link: "/" },
        { name: "Air Force 2", link: "/" },
        { name: "Nike Waffle Racer", link: "/" },
        { name: "Nike Cortez", link: "/" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "About us", link: "/" },
        { name: "FAQs", link: "/" },
        { name: "How it works", link: "/" },
        { name: "Privacy policy", link: "/" },
        { name: "Payment policy", link: "/" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { name: "customer@nike.com", link: "mailto:customer@nike.com" },
        { name: "+92554862354", link: "tel:+92554862354" },
      ],
    },
  ];
  
  // Define and export `socialMedia`
  export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
  ];
  
  // Define and export `products`
  export const products = [
    {
      imgURL: productImage1,
      name: "Nike Air Jordan-01",
      price: "$200.20",
    },
    {
      imgURL: productImage2,
      name: "Nike Air Jordan-10",
      price: "$210.20",
    },
    {
      imgURL: productImage3,
      name: "Nike Air Jordan-100",
      price: "$220.20",
    },
    {
      imgURL: productImage4,
      name: "Nike Air Jordan-001",
      price: "$230.20",
    },
  ];
  
  // Define and export `services`
  export const services = [
    {
      imgURL: truckFast,
      label: "Free shipping",
      subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
      imgURL: shieldTick,
      label: "Secure Payment",
      subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
      imgURL: support,
      label: "Love to help you",
      subtext: "Our dedicated team is here to assist you every step of the way."
    },
  ];
  
  export const navLinks = [
    { href: "#home", label: "Home" },
    {
      href: "#about-us",
      label: "About Us",
      submenu: [
        { href: "#dashboard", label: "Dashboard", img: productImage1 },
        { href: "#settings", label: "Settings", img: productImage2 },
        { href: "#earnings", label: "Earnings", img: productImage3 },
        { href: "#sign-out", label: "Sign out", img: productImage4 },
      ],
    },
    {
      href: "#products",
      label: "Products",
      submenu: [
        { href: "#product1", label: "Product 1", img: productImage1 },
        { href: "#product2", label: "Product 2", img: productImage2 },
        { href: "#product3", label: "Product 3", img: productImage3 },
        { href: "#product4", label: "Product 4", img: productImage4 },
      ],
    },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact-us", label: "Contact" },
  ];
  
  export const profileMenuItems = [
    { label: "My Profile", icon: UserCircleIcon },
    { label: "Edit Profile", icon: Cog6ToothIcon },
    { label: "Inbox", icon: InboxArrowDownIcon },
    { label: "Help", icon: LifebuoyIcon },
    { label: "Sign Out", icon: PowerIcon },
  ];
  