import Aenean_Sm from '../assets/Aenean_Sm.png';
import Vestibulum_Sm from '../assets/Vestibulum_Sm.png';
import Vestibulum_Comm_Sm from '../assets/Vestibulum_Comm_Sm.png';


const ItemCardData = [
                      [{
                          src: Vestibulum_Sm,
                          alt: "",
                          width: 240,
                          description: "Mauris imperdiet orci dapibus commodo libero nec, interib",
                          link: "/",
                          linkText: "Link",
                          price: "$8.99",
                          isStepper:true
                      }, {
                          src: Aenean_Sm,
                          alt: "",
                          width: 240,
                          description: " Duis rhoncus dui venenatis consequat porttitor",
                          title: "Aenean Sed Nibh A Magna Posuere",
                          link: "/",
                          linkText: "Link",
                          price: "$4.99"
                      }, {
                          src: Vestibulum_Comm_Sm,
                          alt: "",
                          width: 240,
                          description: "Mauris imperdiest orci dapibus commodo libero nec, interib",
                          title: "Aenean Sed Nibh A Magna Posuere",
                          link: "/",
                          linkText: "Link",
                          price: "$6.99",
                          isStepper:true
                      }],
                      [{
                          src: Aenean_Sm,
                          alt: "",
                          width: 240,
                          description: " Duis rhoncus dui venenatis consequat porttitor",
                          title: "Aenean Sed Nibh A Magna Posuere",
                          link: "/",
                          linkText: "Link",
                          price: "$8.99"
                      }, {
                          src: Aenean_Sm,
                          alt: "",
                          width: 240,
                          description: "Pizza cheese burst garlic bread Mauris imperdiet orci dapibus",
                          title: "Aenean Sed Nibh A Magna Posuere",
                          link: "/",
                          linkText: "Link",
                          price: "$4.99"
                      }]
                  ];


export const callApi = (params)=>{
return ItemCardData;
}