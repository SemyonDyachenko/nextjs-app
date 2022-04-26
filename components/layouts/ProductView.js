import {Box,Container} from '@chakra-ui/react'

import classes from '../../styles/product.view.module.css'

const ProductView = ( {id} ) => {

    return (
        <Box as="main">
            <Box className={classes.image}>

            </Box>

            <Box className={classes.content}>
                <div className={classes.title}>

                </div>

                <div className={classes.price}>

                </div>

                <div className={classes.description}>

                </div>

                <div className={classes.button}>

                </div>
            </Box>
        </Box>
    )
}

export default ProductView