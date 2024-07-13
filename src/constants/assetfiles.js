import dashboardIcon from "../assets/dashboard.svg"
import orderIcon from "../assets/orders.svg"
import chatIcon from "../assets/chat.svg"
import communityIcon from "../assets/customers.svg"
import inventoryIcon from "../assets/inventory.svg"
import settingsIcon from "../assets/setting.svg"
import logoImg from "../assets/logo.png"

export const navIcons={
    dashboard:dashboardIcon,
    order:orderIcon,
    chat:chatIcon,
    community:communityIcon,
    files:inventoryIcon,
    settings:settingsIcon,
}
export const menuItems=[
    {name: "Dashboard", icon :dashboardIcon , to :"/"},
    {name: "Orders", icon :orderIcon, to :"/orders" },
    {name: "Customers", icon :communityIcon ,  to :"/"},
    {name: "Inventory", icon :inventoryIcon , to :"/"},
    {name: "Converstions", icon :chatIcon , to :"/"},
    {name: "Settings", icon :settingsIcon , to :"/"},


]
export const commonAssets={
    logo:logoImg
}