import classes from '../../styles/product.card.module.css'
import {Box} from "@chakra-ui/react";

import Link from "next/link";

const ProductCard = ({ id }) => {
    return (
        <>
            <div className={classes.productCard}>
                <div>   
                    <div className={classes.productImage}>
                        <img src="/img/tree.png"/>
                    </div>

                    <div className={classes.productTitle}>
                        <h3>Lemon Tree (3 y.o) </h3>
                        <h5>Lorem ipsum lorem ipsum</h5>
                    </div>

                    <div className={classes.productPrice}>
                        <h5>Price: </h5>
                        <span><div>3200 RUB</div></span>
                    </div>

                    <Box className={classes.buttonSection}>
                           <Link href={"/product/12"}><button>MORE INFO</button></Link>


                    </Box>
                </div>
            </div>

        </>
    )
}

export default ProductCard