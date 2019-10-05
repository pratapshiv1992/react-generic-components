import Aenean_Sm from "../assets/Aenean_Sm.png";
import Vestibulum_Sm from "../assets/Vestibulum_Sm.png";
import Vestibulum_Comm_Sm from "../assets/Vestibulum_Comm_Sm.png";

const ItemCardData = [
  {
    id:1,  
    src: Vestibulum_Comm_Sm,
    description: "Mauris imperdiet orci dapibus commodo libero nec, interib",
    title: "Aenean Sed Nibh A Magna Posuere",
    price: "$8.99",
    isStepper: true
  },
  {
    id:2,
    src: Aenean_Sm,
    description: " Duis rhoncus dui venenatis consequat porttitor",
    title: "Aenean Sed Nibh A Magna Posuere",
    price: "$4.99"
  },
  {
    id:3,
    src: Vestibulum_Comm_Sm,
    description: "Mauris imperdiest orci dapibus commodo libero nec, interib",
    title: "Aenean Sed Nibh A Magna Posuere",
    price: "$6.99",
    isStepper: true
  },
  {
    id:4,
    src: Aenean_Sm,
    description: " Duis rhoncus dui venenatis consequat porttitor",
    title: "Aenean Sed Nibh A Magna Posuere",
    price: "$8.99"
  },
  {
    id:5,
    src: Aenean_Sm,
    description:"Pizza cheese burst garlic bread Mauris imperdiet orci dapibus",
    title: "Aenean Sed Nibh A Magna Posuere",
    price: "$4.99"
  }
];

export const callApi = params => {
  return ItemCardData;
};
