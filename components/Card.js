import { Col } from 'react-materialize'

const CardItem = (props) =>
    <Col s={12} m={4}>
        <div className="card">
            <div className="card-image">
                <img src={props.image}/>
                <span className="card-title">{props.title}</span>
            </div>
            {/* <div className="card-content">
                <p></p>
            </div> */}
        </div>
    </Col>

export default CardItem