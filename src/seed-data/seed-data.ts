import {   Collection,  IProductDetails } from "../interface/type";

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
    _id: "jc3",
    name: "Bracelets",
    description:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
   
    products: [
      {
        _id: "p21",
        type: "bracelet",
        posterURL: "/assets/Images to Shruthi/Bracelets/FCSOO4/1.jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FCSOO4/2.jpg"],
        title: "Charm Bracelet",
        description:
          "Create your own unique style with this customizable charm bracelet.",
        price: 129.99,
      },
      {
        _id: "p22",
        type: "bracelet",
        posterURL: "/assets/Images to Shruthi/Bracelets/FJ1079/1 (1).jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1079/1 (3).jpg"],
        title: "Tennis Bracelet",
        description:
          "Add a touch of luxury to your wrist with this exquisite tennis bracelet featuring sparkling diamonds.",
        price: 299.99,
      },
      {
        _id: "p23",
        type: "bracelet",
        posterURL: "/assets/Images to Shruthi/Bracelets/FJ1088/1.jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1088/3.jpg"],
        title: "Gold Bangle Bracelet",
        description:
          "Stack up your style with this sleek and sophisticated gold bangle bracelet, perfect for everyday wear.",
        price: 89.99,
      },
      {
        _id: "p24",
        type: "bracelet",
        posterURL: "/assets/Images to Shruthi/Bracelets/FJ1089/1 (1).jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1089/1 (2).jpg"],
        title: "Silver Cuff Bracelet",
        description:
          "Make a statement with this bold and modern silver cuff bracelet, sure to turn heads.",
        price: 109.99,
      },
      {
        _id: "p25",
        type: "bracelet",
        posterURL: "/assets/Images to Shruthi/Bracelets/FCSOO4/1.jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FCSOO4/2.jpg"],
        title: "harm Bracelet",
        description:
          "Create your own unique style with this customizable charm bracelet.",
        price: 159.99,
      },
      {
        _id: "p26",
        type: "bracelet",
        posterURL: "/assets/Images to Shruthi/Bracelets/FJ1079/1 (1).jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1079/1 (3).jpg"],
        title: "bunnies Bracelet",
        description:
          "Add a touch of luxury to your wrist with this exquisite tennis bracelet featuring sparkling diamonds.",
        price: 199.99,
      },
      {
        _id: "p27",
        type: "bracelet",
        posterURL: "/assets/Images to Shruthi/Bracelets/FJ1088/1.jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1088/3.jpg"],
        title: "Bangle Bracelet",
        description:
          "Stack up your style with this sleek and sophisticated gold bangle bracelet, perfect for everyday wear.",
        price: 87.99,
      },
      {
        _id: "p28",
        type: "bracelet",
        posterURL: "/assets/Images to Shruthi/Bracelets/FJ1089/1 (1).jpg",
        images: ["/assets/Images to Shruthi/Bracelets/FJ1089/1 (2).jpg"],
        title: "Cuff Bracelet",
        description:
          "Make a statement with this bold and modern silver cuff bracelet, sure to turn heads.",
        price: 119.99,
      },
    ],
  },
];
  

