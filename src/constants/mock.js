import GraphIcon from "../assets/graph.svg?react";
// import ConsumerIcon from "../assets/customers.svg?react";
import ConsumerIcon from "../assets/customers-dark.svg?react";
import OrdersIcon from "../assets/orders-dark.svg?react";



export const CardData=[
    {icon:GraphIcon,iconBackground:"#5570F11F", data:[{ heading : "Sales", value:{ current:"₦4,000,000.00"}},{ heading : "Volume", value:{ current:"450", increase:"+20.00%"}}]},
    {icon:ConsumerIcon,iconBackground:"#ffcc9129", data:[{ heading : "Customers", value:{ current:"1,250",increase:"+15.80%"}},{ heading : "Active", value:{ current:"1,180", increase:"85%"}}]},
    {icon:OrdersIcon,iconBackground:"#ffcc9129", data:[{ heading : "All Orders", value:{ current:"450"}},{ heading : "Pending", value:{ current:"5"}},{ heading : "Completed", value:{ current:"445"}}]},
]