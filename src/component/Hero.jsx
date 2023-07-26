import React from 'react'
import css from './Hero.module.css';
const Hero = () => {
  return (
    <>
        <div className={css.container}>
                    {/* left side */}
            <div className={css.left}>
                <span>Skin protection cream</span>
                <div>
                    <span>Trendy collection</span>
                    <span>Seedly say has suitable disposal and bay. Exercise joy man children rejoiced.</span>
                </div>
            </div>

            {/* mid side */}
            <div className={css.mid}>
                <div className={css.img}>
                    <img src="" alt="" />
                    <div className={css.circle}></div>
                </div>
                <div className={css.sign}>
                    
                    <div className={css.text}>
                    Best Signup Offers
                    icon
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className={css.right}>
                <div>
                    <span>1.5m</span>
                    <span>Monthly traffic</span>
                </div>
                <div>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
