import Head from 'next/head'
import {HeaderComponent} from "../components/HeaderComponent"
import {MainLayout} from "../components/MainLayout";


export default function Index() {
  return (
     <> 
     <Head>
      <title>Next app - Trees Store</title>
     </Head>
     <HeaderComponent/>
     <MainLayout></MainLayout>
    </>
  )
}