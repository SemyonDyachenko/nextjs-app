import classes from '../../styles/product.card.module.css'
import {Box} from "@chakra-ui/react";


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
                        <span> 3200 RUB</span>
                    </div>

                    <Box className={classes.buttonSection}>
                            <button>MORE INFO</button>

                            <button>ADD TO CART</button>
                    </Box>
                </div>
            </div>

        </>
    )
}

export default ProductCard