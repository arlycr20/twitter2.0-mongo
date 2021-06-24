import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import TwitterIcon from '@material-ui/icons/Twitter'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutlineOutlined'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Button } from '@material-ui/core'

function Sidebar() {
    return (
        <div className = "sidebar">
           <TwitterIcon
              className = "sidebar__twitterIcon"                
           /> 

            <Link to={'/home'} className="nav-link">
                <SidebarOption Icon = {HomeIcon} text = "Inicio"/>
            </Link>
            <SidebarOption Icon = {SearchIcon} text = "Explorar"/>
            <SidebarOption Icon = {NotificationsNoneIcon} text = "Notificaciones"/>
            <SidebarOption Icon = {MailOutlineIcon} text = "Mensajes"/>
            <SidebarOption Icon = {BookmarkBorderIcon} text = "Marcadores"/>
            <SidebarOption Icon = {ListAltIcon} text = "Listas"/>
            <SidebarOption Icon = {PermIdentityIcon} text = "Perfil"/>
            <SidebarOption Icon = {MoreHorizIcon} text = "Mas"/>

            <Button variant = "outlined" className = "sidebar__tweet">Tweet</Button>
        </div>
    )
}

export default Sidebar
