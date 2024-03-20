import style from './style.module.scss';
import Products from '../../components/products/Products';
import classNames from "classnames";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

import { useEffect, useState } from 'react';

export const getStaticProps = async () => {
    try {
        const response  = await fetch(`${process.env.API_PRODUCTS}/products`);
        const data = await response.json();

        if(!data) {
            return {
            notFound: true
            }
        }
        return {
            props: {products : data} 
        }

    } catch {
        return {
            props: {products: null}
        }
    }
}




export default function Wishlist({products}) {
    const deleteSettings = ["All products", "Phones", "Accessories"]

    const [showImage, setImageShow] = useState(false)

    const productsLength = products ? products.length : 0;

    return (
        <div className={style.container}>
            <div className={style.wishlist}>
                <div className={style.infoBlock}>
                    <div className={style.icons}>
                        <HomeOutlinedIcon color="disabled" sx={{ fontSize: 15 }}/>
                        <PlayArrowOutlinedIcon color="primary" sx={{ fontSize: 15 }}/>
                        <span>Wishlist</span>
                    </div>
                    <p>Wishlist</p>
                    <span>{productsLength} products</span>
                </div>
                <div className={style.settingsRow}>
                    <div className={style.settingsBlock}>
                        {deleteSettings.map((elem, index)=> (
                            <div key={index} className={style.settingsBtn}>
                                <span>{elem}</span>
                                <DeleteIcon color="disabled" sx={{ fontSize: 24 }}/>
                            </div>
                        ))}
                    </div>
                    <Button variant="outlined" className={style.btnNewCategory}>New Category</Button>
                </div>
                <div className={style.basketTitle}>
                    <div className={style.basketTitle__name}>
                        <span className={classNames([{[style.active]: showImage}])}>Photo</span>
                        <span>Product Item</span>
                        <span>Name</span>
                    </div>
                    <div className={style.basketTitle__info}>
                        <div className={style.basketQuantityInfo}>
                            <span>Stock</span>
                            <span>QTY</span>
                            <span>Price</span>
                        </div>
                        <div className={style.basketSwitcher}>
                            <Switch defaultChecked onClick={()=> setImageShow(!showImage)}/>
                            <span>Image</span>
                        </div>
                    </div>
                </div>   
                <Products products={products} showImage={showImage}/>
            </div>
        </div>
  )
}
