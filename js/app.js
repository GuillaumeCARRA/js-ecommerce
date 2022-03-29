
const wrapper = document.querySelector(".sliderWrapper");

// querySelectorAll because we have multiple selector
const menuItems = document.querySelectorAll(".menuItem");
console.log(menuItems);

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        console.log("clicked" + index);
        // to move the position of the item
        // first item index = 0 --> nothing move -100 * 0 = 0
        // but for the second item
        // index = 1 --> -100 * 1 = -100
        // he move from -100 vw on te X axis 
        // and we gonna see the second item
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});

// to move the position
// wrapper.style.transform ="translateX(-)"