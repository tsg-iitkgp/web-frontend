import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'

export default function Home() {
    document.title = 'Home | TSG';
    return (
        <Layout>
            <Section>
                Home
            </Section>
        </Layout>
    );
}