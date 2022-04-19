import Link from "next/link";

export function MainLayout({ children }) {
    return (
        <>
            <nav>
                <Link href={'/posts'}><a>Home</a></Link>
                <Link href={'/posts'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
                <Link href={'/posts'}><a>Products</a></Link>
                <Link href={'/posts'}><a>for Sale</a></Link>
            </nav>

            <main>
                {children}
            </main>

            <style jsx> {`
                nav {
                position:fixed;
                height: 60px;
                left:0;
                top:0;
                right:0;
                background:blue;
                display:flex;
                justify-content: space-around;
                align-items: center;
                }
                
                a {
                color:white;
                }
            `
            }
            </style>
        </>
    )
}