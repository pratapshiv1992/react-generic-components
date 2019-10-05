import Aenean_Sm from "../assets/Aenean_Sm.png";
import Vestibulum_Comm_Sm from "../assets/Vestibulum_Comm_Sm.png";

const ItemCardData = [
  {
    id:"1st_Item_Id",  
    src: Vestibulum_Comm_Sm,
    description: "Mauris imperdiet orci dapibus commodo libero nec, interib",
    title: "Aenean Sed Nibh A Magna Posuere",
    price: "$8.99",
    isStepper: true
  },
  {
    id:"2nd_Item_Id",  
    src: Aenean_Sm,
    description: " Duis rhoncus dui venenatis consequat porttitor",
    title: "Aenean Sed Nibh A Magna Posuere",
    price: "$4.99"
  },
  {
    id:"3rd_Item_Id",  
    src: Vestibulum_Comm_Sm,
    description: "Mauris imperdiest orci dapibus commodo libero nec, interib",
    title: "Aenean Sed Nibh A Magna Posuere",
    price: "$6.99",
    isStepper: true
  },
  {
    id:"4th_Item_Id",  
    src: Aenean_Sm,
    description: " Duis rhoncus dui venenatis consequat porttitor",
    title: "Aenean Sed Nibh A Magna Posuere",
    price: "$8.99"
  },
  {
    id:"5th_Item_Id",  
    src: Aenean_Sm,
    description:"Pizza cheese burst garlic bread Mauris imperdiet orci dapibus",
    title: "Aenean Sed Nibh A Magna Posuere",
    price: "$4.99"
  }
];

export const callApi = params => {
  return ItemCardData;
};



export const cartReducer = (state, action)=>{
  const {id} = action.payload;
  switch (action.type) {
    case 'increment':
      const count = state[id] ? ++state[id] : 1;
      return {...state, [id]:count};
    case 'decrement':
     state[id] > 1 ? --state[id] : delete state[id];
    return {...state};
    default:
      throw new Error();
  }
}
