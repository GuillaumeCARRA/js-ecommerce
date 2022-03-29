
const wrapper = document.querySelector(".sliderWrapper");

// querySelectorAll because we have multiple selector
const menuItems = document.querySelectorAll(".menuItem");
console.log(menuItems);

// array with data on our products
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 129,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 109,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 109,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let choosenProduct = products[0];
console.log("choosen product: ", choosenProduct);

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //to move the position of the item
        //first item index = 0 --> nothing move -100 * 0 = 0
        //but for the second item
        //index = 1 --> -100 * 1 = -100
        //he move from -100 vw on te X axis 
        //and we gonna see the second item
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //when we click in the product
        //we want to change the choosen product
        choosenProduct = products[index];

        //when we click in the product
        //we want the detail of the choosen product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = `$ ${choosenProduct.price}`;
        currentProductImg.src = choosenProduct.colors[0].img;
    
        //when we click in the product
        //we want to have the good color of them
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

//when we click in the product
//we change the images 
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
})


currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        //when we click on any size
        //it's gonna loop on each sizes
        //and its gonna reset background and text color
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        //after its gonna change the current size background and text color
        size.style.backgroundColor = "black"
        size.style.color = "white"
    });
})
