import Link from "next/link";
import '../styles/header.module.css'

export function MainLayout({ children }) {
    return (
        <>

            <header>
                <nav>
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

            <style jsx> {`

                header {
                  width:100%;
                  height: auto;
                  float:left;
                  box-sizing: border-box;
                }
                
                
                nav {
                margin-top:100px;
                position:fixed;
                height: 60px;
                left:0;
                top:0;
                right:0;
                display:flex;
                justify-content: center;
                align-items: center;
                }
                
                a {
                display: block;
                margin-left:20px;
                margin-right: 20px;
                color:black;
                font-size:18px;
                }
            `
            }
            </style>
        </>
    )
}