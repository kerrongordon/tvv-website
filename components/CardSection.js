import { Container, Row } from 'react-materialize'

const CardSection = (props) =>
        <Container className="spacer">
            <div className="section">
                <Row>
                    {props.children}
                </Row>
            </div>
        </Container>

export default CardSection