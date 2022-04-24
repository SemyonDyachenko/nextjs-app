import Head from 'next/head'
import HeaderComponent from "../components/HeaderComponent"
import MainLayout from "../components/MainLayout";
import {Container} from "@chakra-ui/react";
import classes from "../styles/mainlayout.module.css";


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