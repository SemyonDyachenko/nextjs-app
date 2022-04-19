import Link from "next/link";
import classes from '../styles/header.module.css'

export function MainLayout({ children }) {
    return (
        <>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <Link href={'/posts'}><a>Home</a></Link>
                    <Link href={'/posts'}><a>About</a></Link>
                    <Link href={'/posts'}><a>Posts</a></Link>
                    <Link href={'/posts'}><a>Products</a></Link>
                    <Link href={'/posts'}><a>for Sale</a></Link>
                </nav>

            </header>
            <main>
                {children}
            </main>

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