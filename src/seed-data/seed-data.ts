import {  ICollection, IProductDetails } from "../interface/type";

import { Collection } from "../interface/type";
export const productDetails: IProductDetails[] = [
  {
    _id: "1",
    title: "Example Product",
    price: 29.99,
    images: [
      "/public/images/productimage1.jpg",
      "/public/images/productimage2.jpg",
      "/public/images/2.jpg"
    ],

    quantity: 10,
    posterURL:
      "/public/images/productposterurl.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];


export const jewelryCollections: Collection[] = [
  {
    _id: "jc1 ",
    name: "Necklaces",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    products: [
      {
        _id: "65b9245f014979d2feafa787",
        posterUrl: "/assets/Images to Shruthi/Necklaces/FX1185/950-2.jpg",
        images: ["/assets/Images to Shruthi/Necklaces/FX1185/950-.jpg"],
        title: "Classic Pearl Necklace",
        description:
          "Timeless elegance meets modern style with this classic pearl necklace.",
        price: 99.99,
      },
      {
        _id: "65b9245f014979d2feafa787",
        posterUrl: "/assets/Images to Shruthi/Necklaces/FX1189/950-5.jpg",
        images: ["/assets/Images to Shruthi/Necklaces/FX1189/950-1.jpg"],
        title: "Diamond Pendant Necklace",
        description:
          "Elevate any look with the brilliance of this stunning diamond pendant necklace.",
        price: 149.99,
      },
      {
        _id: "p3",
        posterUrl: "/assets/Images to Shruthi/Necklaces/FX1190/950-3.jpg",
        images: ["/assets/Images to Shruthi/Necklaces/FX1190/950-.jpg"],
        title: "Gold Chain Necklace",
        description:
          "A versatile and elegant addition to any jewelry collection, perfect for layering or wearing solo.",
        price: 79.99,
      },
      {
        _id: "p4",
        posterUrl: "/assets/Images to Shruthi/Necklaces/FX1248/1 (1).jpg",
        images: ["/assets/Images to Shruthi/Necklaces/FX1248/1 (3).jpg"],
        title: "Heart Locket Necklace",
        description:
          "Keep your loved ones close to your heart with this beautiful heart locket necklace.",
        price: 129.99,
      },
      {
        _id: "p5",
        posterUrl: "/assets/Images to Shruthi/Necklaces/FX1185/950-2.jpg",
        images: ["/assets/Images to Shruthi/Necklaces/FX1185/950-.jpg"],
        title: "Pearl Necklace",
        description:
          "Timeless elegance meets modern style with this classic pearl necklace.",
        price: 100.99,
      },
      {
        _id: "p6",
        posterUrl: "/assets/Images to Shruthi/Necklaces/FX1189/950-5.jpg",
        images: ["/assets/Images to Shruthi/Necklaces/FX1189/950-1.jpg"],
        title: "Pendant Necklace",
        description:
          "Elevate any look with the brilliance of this stunning diamond pendant necklace.",
        price: 177.99,
      },
      {
        _id: "p7",
        posterUrl: "/assets/Images to Shruthi/Necklaces/FX1190/950-3.jpg",
        images: ["/assets/Images to Shruthi/Necklaces/FX1190/950-.jpg"],
        title: "Chain Necklace",
        description:
          "A versatile and elegant addition to any jewelry collection, perfect for layering or wearing solo.",
        price: 179.99,
      },
      {
        _id: "p8",
        posterUrl: "/assets/Images to Shruthi/Necklaces/FX1248/1 (1).jpg",
        images: ["/assets/Images to Shruthi/Necklaces/FX1248/1 (3).jpg"],
        title: "Locket Necklace",
        description:
          "Keep your loved ones close to your heart with this beautiful heart locket necklace.",
        price: 199.99,
      },
    ],
  },
  {
    _id: "jc2",
    name: "Earrings",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
    products: [
      {
        _id: "p11",
        posterUrl: "/assets/Images to Shruthi/Earrings/FE1858/18.jpg",
        images: ["/assets/Images to Shruthi/Earrings/FE1858/49.jpg"],
        title: "Diamond Stud Earrings",
        description:
          "Simple yet elegant, these diamond stud earrings are a versatile addition to any jewelry collection.",
        price: 199.99,
      },
      {
        _id: "p12",
        posterUrl: "/assets/Images to Shruthi/Earrings/FE2077/950-21.jpg",
        images: ["/assets/Images to Shruthi/Earrings/FE2077/950-93.jpg"],
        title: "Gold Hoop Earrings",
        description:
          "Make a statement with these bold and stylish gold hoop earrings.",
        price: 79.99,
      },
      {
        _id: "p13",
        posterUrl: "/assets/Images to Shruthi/Earrings/FE2078/950-2.jpg",
        images: ["/assets/Images to Shruthi/Earrings/FE2078/950-104.jpg"],
        title: "Crystal Drop Earrings",
        description:
          "Add a touch of glamour to your look with these dazzling crystal drop earrings.",
        price: 109.99,
      },
      {
        _id: "p14",
        posterUrl: "/assets/Images to Shruthi/Earrings/FE2085/FE2085.jpg",
        images: ["/assets/Images to Shruthi/Earrings/FE2085/950-110.jpg"],
        title: "Pearl Stud Earrings",
        description:
          "Classic and sophisticated, these pearl stud earrings are a timeless accessory for any occasion.",
        price: 89.99,
      },
      {
        _id: "p15",
        posterUrl: "/assets/Images to Shruthi/Earrings/FE1858/18.jpg",
        images: ["/assets/Images to Shruthi/Earrings/FE1858/49.jpg"],
        title: "Stud Earrings",
        description:
          "Simple yet elegant, these diamond stud earrings are a versatile addition to any jewelry collection.",
        price: 299.99,
      },
      {
        _id: "p16",
        posterUrl: "/assets/Images to Shruthi/Earrings/FE2077/950-21.jpg",
        images: ["/assets/Images to Shruthi/Earrings/FE2077/950-93.jpg"],
        title: "Hoop Earrings",
        description:
          "Make a statement with these bold and stylish gold hoop earrings.",
        price: 99.99,
      },
      {
        _id: "p17",
        posterUrl: "/assets/Images to Shruthi/Earrings/FE2078/950-2.jpg",
        images: ["/assets/Images to Shruthi/Earrings/FE2078/950-104.jpg"],
        title: "Drop Earrings",
        description:
          "Add a touch of glamour to your look with these dazzling crystal drop earrings.",
        price: 119.99,
      },
      {
        _id: "p18",
        posterUrl: "/assets/Images to Shruthi/Earrings/FE2085/FE2085.jpg",
        images: ["/assets/Images to Shruthi/Earrings/FE2085/950-110.jpg"],
        title: "Pearls Earrings",
        description:
          "Classic and sophisticated, these pearl stud earrings are a timeless accessory for any occasion.",
        price: 79.99,
      },
    ],
  },
  {
    _id: "jc3",
    name: "Bracelets",
    description:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    products: [
      {
        _id: "p21",
        posterUrl: "/assets/Images to Shruthi/Bracelets/FCS004/1.jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FCS004/2.jpg"],
        title: "Charm Bracelet",
        description:
          "Create your own unique style with this customizable charm bracelet.",
        price: 129.99,
      },
      {
        _id: "p22",
        posterUrl: "/assets/Images to Shruthi/Bracelets/FJ1079/1 (1).jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1079/1 (3).jpg"],
        title: "Tennis Bracelet",
        description:
          "Add a touch of luxury to your wrist with this exquisite tennis bracelet featuring sparkling diamonds.",
        price: 299.99,
      },
      {
        _id: "p23",
        posterUrl: "/assets/Images to Shruthi/Bracelets/FJ1088/1.jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1088/3.jpg"],
        title: "Gold Bangle Bracelet",
        description:
          "Stack up your style with this sleek and sophisticated gold bangle bracelet, perfect for everyday wear.",
        price: 89.99,
      },
      {
        _id: "p24",
        posterUrl: "/assets/Images to Shruthi/Bracelets/FJ1089/1 (1).jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1089/1 (2).jpg"],
        title: "Silver Cuff Bracelet",
        description:
          "Make a statement with this bold and modern silver cuff bracelet, sure to turn heads.",
        price: 109.99,
      },
      {
        _id: "p25",
        posterUrl: "/assets/Images to Shruthi/Bracelets/FCS004/1.jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FCS004/2.jpg"],
        title: "harm Bracelet",
        description:
          "Create your own unique style with this customizable charm bracelet.",
        price: 159.99,
      },
      {
        _id: "p26",
        posterUrl: "/assets/Images to Shruthi/Bracelets/FJ1079/1 (1).jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1079/1 (3).jpg"],
        title: "bunnies Bracelet",
        description:
          "Add a touch of luxury to your wrist with this exquisite tennis bracelet featuring sparkling diamonds.",
        price: 199.99,
      },
      {
        _id: "p27",
        posterUrl: "/assets/Images to Shruthi/Bracelets/FJ1088/1.jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1088/3.jpg"],
        title: "Bangle Bracelet",
        description:
          "Stack up your style with this sleek and sophisticated gold bangle bracelet, perfect for everyday wear.",
        price: 87.99,
      },
      {
        _id: "p28",
        posterUrl: "/assets/Images to Shruthi/Bracelets/FJ1089/1 (1).jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1089/1 (2).jpg"],
        title: "Cuff Bracelet",
        description:
          "Make a statement with this bold and modern silver cuff bracelet, sure to turn heads.",
        price: 119.99,
      },
    ],
  },
];

// export default jewelryCollections;
