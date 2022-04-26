import { useRouter } from "next/router"

import ProductView from "../../components/layouts/ProductView.js"
import HeaderComponent from "../../components/HeaderComponent";

import {Box,Container} from '@chakra-ui/react'

export default function Post() {
    const router = useRouter()

    return (
    <>
            <HeaderComponent></HeaderComponent>
            <ProductView></ProductView>

    </>
    )
}