import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Styles from "./GameDetails.module.css";
import ContainerTop from './ContainerTop';
import ContainerBottom from './ContainerBottom';

const GameDetails = () => {
  return (
    <Layout>
        <section className={Styles.maincontainer} >
            <h1 className={Styles.heading}>Pulse of the Play</h1>
            <ContainerTop />
            <ContainerBottom />
        </section>
    </Layout>
  )
}

export default GameDetails