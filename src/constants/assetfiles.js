import DashboardIcon from "../assets/dashboard.svg?react"
import OrderIcon from "../assets/orders.svg?react"
import ChatIcon from "../assets/chat.svg?react"
import CommunityIcon from "../assets/customers.svg?react"
import InventoryIcon from "../assets/inventory.svg?react"
import SettingsIcon from "../assets/setting.svg?react"
import LogoImg from "../assets/logo.png?react"
import GraphIcon from "../assets/graph.svg?react";
import DropdownIcon from "../assets/fi_chevron-down.svg?react";


export const navIcons={
    dashboard:DashboardIcon,
    order:OrderIcon,
    chat:ChatIcon,
    community:CommunityIcon,
    files:InventoryIcon,
    settings:SettingsIcon,
}
export const menuItems=[
    {name: "Dashboard", icon :DashboardIcon , to :"/"},
    {name: "Orders", icon :OrderIcon, to :"/orders" },
    {name: "Customers", icon :CommunityIcon ,  to :"/"},
    {name: "Inventory", icon :InventoryIcon , to :"/"},
    {name: "Converstions", icon :ChatIcon , to :"/"},
    {name: "Settings", icon :SettingsIcon , to :"/"},


]
export const commonAssets={
    logo:LogoImg,
    graph:GraphIcon,
    dropdown:DropdownIcon,
}