import Page from '../components/page'
import Hero from '../components/hero'
import SecctionOne from '../components/homeSectionOne'
import CardSection from '../components/CardSection'
import CardItem from '../components/Card'
import ParallaxItem from '../components/ParallaxItem'
import FooterBar from '../components/Footer'

const HomePage = () => (
    <Page>
        <Hero/>
            <div className="boj">
                <SecctionOne/>
                <CardSection>
                    <CardItem title="Mobile Apps" image="/static/img/mobile.jpg"/>
                    <CardItem title="Training" image="/static/img/training.jpg"/>
                    <CardItem title="Business Growth" image="/static/img/busi.jpg"/>
                </CardSection>
            </div>
        <ParallaxItem image="/static/img/1.jpg"/>
        <div className="boj">
            <CardSection>
                <CardItem title="Cyber Security" image="/static/img/r3.jpg"/>
                <CardItem title="Web Development" image="/static/img/r2.jpg"/>
                <CardItem title="Network Infrastructure" image="/static/img/r1.jpg"/>
            </CardSection>
        </div>
        <ParallaxItem image="/static/img/2.jpg"/>
        <FooterBar/>
    </Page>
)

export default HomePage