import React from 'react'
import css from "./Header.module.css";
import logo from "../assets/logo.png";
import {AiOutlineShoppingCart} from "react-icons/ai"
const Header = () => {
  return (
    <div className={css.container}>

      <div className={css.logo}>

        <img src={logo} alt="" />
        <span>ShopDev</span>

      </div>

      <div className={css.right}>

        <div className={css.menu}>
            <ul className={css.menu}>
                <li>Collections</li>
                <li>Brand</li>
                <li>New</li>
                <li>Sales</li>
                <li>ENG</li>
            </ul>
        </div>

        <input type="text" className={css.inp} placeholder='Search' />

        <AiOutlineShoppingCart className={css.cart}/>

      </div>
    </div>
  )
}

export default Header
