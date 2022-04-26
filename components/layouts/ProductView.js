import {Box,Container} from '@chakra-ui/react'

import classes from '../../styles/product.view.module.css'

const ProductView = ( {id} ) => {

    return (
        <div className={classes.productView}>
            <Box className={classes.image}>
                <img src="/img/tree.png"/>
            </Box>

            <Box className={classes.content}>
                <div className={classes.title}>
                    <h2>Lemon Tree (3 y.o)</h2>
                </div>

                <div className={classes.price}>
                    <h5>Price: <span>4300 RUB</span></h5>
                </div>

                <div className={classes.description}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto commodi consequuntur corporis cupiditate dignissimos ducimus eveniet, facere fugiat fugit in iusto magnam natus nostrum odit perferendis quis quo recusandae rem rerum sapiente sint, ullam veritatis! Consectetur distinctio dolore dolorem doloremque ducimus error expedita facilis id impedit ipsum, iusto labore natus necessitatibus qui quos rem sed sequi similique veniam voluptate? A accusantium aliquid amet animi architecto assumenda consequuntur corporis debitis deleniti dicta dignissimos dolorem esse, eum expedita explicabo facilis, fuga, harum illo ipsa iste itaque mollitia nisi nobis officia omnis perspiciatis placeat quae quisquam sed soluta tempore ullam vel vitae.</p>
                </div>

                <div className={classes.button}>
                    <button>BUY</button>
                </div>
            </Box>
        </div>
    )
}

export default ProductView