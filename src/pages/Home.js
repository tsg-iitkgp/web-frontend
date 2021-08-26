import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import Styles from '../styles/home.module.css';

export default function Home() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const openLink = (videoLink) => {
        window.open(videoLink);
    };

    document.title = 'Home | TSG';
    return (
        <Layout>
            <Section>
                <AutoplaySlider play={true} interval={5000}>
                    <div
                        className={Styles.carouselItem}
                        data-src={'/data/images/posters/cyclothon.jpeg'}
                        onClick={() => openLink('')} />
                    <div
                        className={Styles.carouselItem}
                        data-src={'/data/images/posters/case_study.jpg'}
                        onClick={() => openLink('')} />
                </AutoplaySlider>
            </Section>
        </Layout>
    );
}