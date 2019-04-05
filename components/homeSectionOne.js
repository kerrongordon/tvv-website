import { Container, Section, Row, Col  } from 'react-materialize'

const SectionOne = () =>
        <Container className="spacer shape">
            <Section>
                <Row>
                    <Col s={12} m={9} offset="m2" className="center">
                    <h4>Leading IT Consulting</h4>
                    <p className="left-align">Tech View Ventures a leading IT consulting company with operations in over 120 countries through our partner program. We offer a wide range of services and solutions that can be customized to your needs.
                        Our friendly, trained and certified staff with years of experience is ready and always available to assist you and your company gains the advantage with technology to help your company grow and succeed.
                        By implementing our smart business and automated systems you will have to worry less about your IT infrastructure and focus on the goals of your company</p>
                    </Col>
                </Row>
            </Section>
        </Container>

export default SectionOne