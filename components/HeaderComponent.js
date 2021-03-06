import Link from "next/link";
import classes from '../styles/header.module.css'

const  HeaderComponent = () => {
    return (
        <>
            <header className={classes.header}>


                <nav className={classes.nav}>
                    <Link href={'/'}><a>Home</a></Link>
                    <Link href={'/about'}><a>About</a></Link>
                    <Link href={'/posts'}><a>Posts</a></Link>
                    <Link href={'/products'}><a>Products</a></Link>
                    <Link href={'/posts'}><a>for Sale</a></Link>
                </nav>

                <div className={classes.searchContainer}>
                    <div>
                        <input className={classes.searchInput} placeholder={"Search"}/>

                    </div>
                </div>


            </header>

            <style jsx>
                {`
                    a {
                    display: block;
                    margin-left:20px;
                    margin-right: 20px;
                    color:black;
                    font-size:18px;
                    }
                `}
            </style>
        </>
    )
}

export default HeaderComponent