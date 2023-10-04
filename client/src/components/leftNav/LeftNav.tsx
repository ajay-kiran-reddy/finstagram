import React, { useState } from 'react'
import { Dropdown, Header, Menu, Icon } from 'semantic-ui-react'
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import CreatePost from '../create/CreatePost';
import LoginForm from '../auth/Auth';

const iconStyle = { marginTop: "0px" };

export default function LeftNav() {
    const [activeItem, setActiveItem] = useState("home");
    const navigate = useNavigate();
    const [openModal, setOpenModal]: any = useState({});
    const [page, setPage] = useState("");
    const menuItems = [
        {
            name: "home",
            label: "Home",
            icon: "home",
            path: "/"
        },
        {
            name: "search",
            label: "Search",
            icon: "search",
        },
        {
            name: "notifications",
            label: "Notifications",
            icon: "bell",
            type: "modal"
        },
        {
            name: "messages",
            label: "Messages",
            icon: "facebook messenger",
            path: "/inbox"
        },
        {
            name: "create",
            label: "Create",
            icon: "plus",
            type: "modal"
        },
        {
            name: "profile",
            label: "Profile",
            icon: "user circle",
            path: "/profile"
        },
        {
            name: "login",
            label: "Login",
            icon: "sign-in",
            type: "modal"
        }
    ]

    const handleMenuItem = (value: any) => {
        setActiveItem(value)
        value?.type === "modal" ? setOpenModal({ [value.name]: true }) : navigate(value?.path);
        setPage(value.name)
    }

    const closeModal = () => {
        setOpenModal({ [page]: false })
    }

    return (
        <div>
            <CreatePost open={openModal.create} handleOpen={closeModal} />
            <LoginForm open={openModal.login} handleOpen={closeModal} />
            <Header color="blue" style={{ marginTop: "1rem" }}>Finstagram</Header>
            {menuItems.map((item: any) => {
                return <div className={`menu-item ${activeItem === item.name && 'active'}`} onClick={() => handleMenuItem(item)}>
                    <Icon name={item.icon} size='large' style={iconStyle} />
                    <Header as='h1' className="menu-text" size='medium'>{item.label}</Header>
                </div>
            })}
        </div >
    )
}
