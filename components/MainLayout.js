import classes from '../styles/mainlayout.module.css'
import {ProductCard} from "./Widgets/ProductCard";

export function MainLayout({ children }) {
    return (
    <>
        <main className={classes.main}>
            <div className={classes.mainContainer}>
                <ProductCard/>
            </div>
        </main>
    </>
    )
}