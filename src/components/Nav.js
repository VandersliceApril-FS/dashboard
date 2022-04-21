import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillAppstore, AiTwotoneMail, AiFillSetting, AiFillPieChart, AiFillEdit } from "react-icons/ai"
import { IoLogOutSharp } from "react-icons/io5"
import { RiUser3Fill } from "react-icons/ri"

const styles = {
    navigation: {
        width: 'fit-content',
        margin: '0 auto',
        height: '25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    menuItem: {
        textAlign: 'start',
        color: '#afafaf',
        padding: '1rem',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: '1rem',
        letterSpacing: '.2rem'
    },
    icon: {
        verticalAlign: 'text-bottom',
        padding: '0 1rem',
        fontSize: '1rem'
    }
}

const Nav = () => {
    return (
        <nav style={styles.navigation}>
            <NavLink 
                to='/Dashboard'
                style={styles.menuItem}
                activeStyle={{
                    color: '#5ef38c'
                }}
                >
                <AiFillAppstore style={styles.icon}/>
                Dashboard
            </NavLink>
            <NavLink to='/Chart' 
                style={styles.menuItem}
                activeStyle={{
                    color: '#5ef38c'
                }}
                >
                <AiFillPieChart style={styles.icon}/>
                Chart
            </NavLink>
            <NavLink to='/Settings' 
                style={styles.menuItem}
                activeStyle={{
                    color: '#5ef38c'
                }}
                >
                <AiFillSetting style={styles.icon}/>
                Settings
            </NavLink>
            <NavLink to='/Dashboard' 
                style={styles.menuItem}
                >
                <IoLogOutSharp style={styles.icon}/>
                Sign Out
            </NavLink>
            
        </nav>
    )
}

export default Nav;