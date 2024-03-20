import style from './style.module.scss';
import classNames from "classnames";

import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';

export default function products({products, showImage, removeProduct}) {

    if(!products) {
        return null
    }


    return (
        <div className={style.productsBasket}>
                    {products && products.map((elem)=> (
                        <div key={elem.id} className={style.productsList}>
                            <div className={style.productTitle}>
                                <div className={style.productTitle__imgBlock}>
                                    <img src={elem.img} alt='Product image' className={classNames([{[style.active]: showImage}, style.productTitle__image])}/>
                                    <span className={style.productTitle__code}>{elem.code}</span>
                                </div>
                                <p className={style.productTitle__name}>{elem.name}</p>
                            </div>
                            <div className={style.productInfo}>
                                <div className={style.productQuantity}>
                                    <div className={style.productQuantity__media}> 
                                        <span>Stock:</span>
                                        <span>QTY:</span>
                                        <span>Price:</span>
                                    </div>
                                    <div className={style.productQuantity__show}>
                                        <span className={style.productQuantity__stock}>{elem.stock}</span>
                                        <span className={style.productQuantity__quantity}>{elem.quantity}qty.</span>     
                                        <div className={style.productQuantity__price}>                    
                                            <p>{elem.priceEu}€</p>
                                            <p>{elem.priceDol}$</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.productSet}>
                                    <Button variant="outlined" className={style.btnAddToCart}>Add to cart</Button>
                                    <FavoriteIcon  className={style.favoriteSvg}/>
                                    <CloseIcon onClick={() => removeProduct(elem.id)} className={style.close}/>
                                </div>
                            </div>
                        </div>
                    ))}
        </div>
  )
}
