import classes from '../../styles/product.card.module.css'


export function ProductCard({ id }) {
    return (
        <>
            <div className={classes.productCard}>
                <div>
                    <div className={classes.productImage}>
                        <img src="/img/img.png"/>
                    </div>

                    <div className={classes.productTitle}>

                    </div>

                    <div className={classes.productPrice}>

                    </div>

                    <div className={classes.buttonSection}>

                        <div className={classes.viewButton}>

                        </div>

                        <div className={classes.cartButton}>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}