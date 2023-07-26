import React from 'react'
import css from "./Products.module.css"
import Plane from "../../assets/plane.png"
import { ProductsData } from '../../data/products'
import { useState } from 'react'
import {useAutoAnimate}  from '@formkit/auto-animate/react'
// import { NavLink } from 'react-router-dom'

const Products = () => {

    const [Product,setProducts] = useState(ProductsData)

    const [parent] = useAutoAnimate()
    const filter = (type)=>{
        setProducts(ProductsData.filter(el=>el.type === type))
    }

  return (
    <>
        <div className={css.container}>
            <div className={css.title}>
                <img src={Plane} alt="" />
                <h3>Feature Products</h3>                
            </div>
            <div className={css.list_products}>
                <ul className={css.list}>
                    <li onClick={()=>setProducts(ProductsData)}> All</li>
                    <li onClick={()=>filter("skin care")}> Skin Care</li>
                    <li onClick={()=>filter("conditioner")}> Conditioners</li>
                    <li onClick={()=>filter("foundation")}> Foundations</li>
                </ul>

                <div className={css.products} ref={parent}>
                    {Product.map(product =>(
                        <div className={css.product}>
                            
                            <div className={css.left}>
                                <h5>{product.name}</h5>

                                <span>{product.detail}</span>

                                <div>{product.price}$</div>
                                <button>SHOP NOW</button>
                            </div>
                            <img src={product.img} alt="" />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Products
