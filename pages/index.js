import Head from 'next/head'
import HeaderComponent from "../components/HeaderComponent"
import MainLayout from "../components/layouts/MainLayout";
import {Container} from "@chakra-ui/react";



const Index = () => {
  return (
     <>
     <Head>
      <title>Next app - Trees Store</title>
     </Head>
     <HeaderComponent/>
     <MainLayout/>
    </>
  )
}

export default Index