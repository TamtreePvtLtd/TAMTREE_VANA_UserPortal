import {  Collection, ICollection, IProductDetails } from "../interface/type";

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
     
    ],
  },
];


