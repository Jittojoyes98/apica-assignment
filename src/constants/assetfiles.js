import DashboardIcon from "../assets/dashboard.svg?react"
import OrderIcon from "../assets/orders.svg?react"
import ChatIcon from "../assets/chat.svg?react"
import CommunityIcon from "../assets/customers.svg?react"
import InventoryIcon from "../assets/inventory.svg?react"
import SettingsIcon from "../assets/setting.svg?react"
import LogoImg from "../assets/logo.png?react"
import GraphIcon from "../assets/graph.svg?react";
import DropdownIcon from "../assets/fi_chevron-down.svg?react";
import DashboardIconActive from "../assets/dashboard-active.svg?react";
import ChatIconActive from "../assets/chat-active.svg?react";
import InventoryIconActive from "../assets/inventory-active.svg?react";
import CommunityIconActive from "../assets/community-active.svg?react";
import SettingsIconActive from "../assets/setting-active.svg?react";
import OrderIconActive from "../assets/order-active.svg?react";




export const navIcons={
    dashboard:DashboardIcon,
    order:OrderIcon,
    chat:ChatIcon,
    community:CommunityIcon,
    files:InventoryIcon,
    settings:SettingsIcon,
}
export const menuItems=[
    {name: "Dashboard", iconInactive :DashboardIcon, iconActive: DashboardIconActive, to :"/"},
    {name: "Orders", iconInactive :OrderIcon,iconActive:OrderIconActive, to :"/orders" },
    {name: "Customers", iconInactive :CommunityIcon ,iconActive: CommunityIconActive,  to :"/customers"},
    {name: "Inventory", iconInactive :InventoryIcon ,iconActive: InventoryIconActive, to :"/inventory"},
    {name: "Converstions", iconInactive :ChatIcon ,iconActive: ChatIconActive, to :"/conversations"},
    {name: "Settings", iconInactive :SettingsIcon ,iconActive: SettingsIconActive, to :"/settings"},
]
export const commonAssets={
    logo:LogoImg,
    graph:GraphIcon,
    dropdown:DropdownIcon,
}