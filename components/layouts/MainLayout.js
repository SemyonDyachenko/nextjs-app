import ProductCard from "../Widgets/ProductCard"
import classes from '../../styles/mainlayout.module.css'

import  { Box,Container } from '@chakra-ui/react'

const MainLayout = ({ children }) => {
    return (
        <Box as="main">
            <main className="flex justify-center width100 main">
                <div className={classes.mainContainer}>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </main>

            <Container>
                {children}
            </Container>

        </Box>
    )
}

export default MainLayout
