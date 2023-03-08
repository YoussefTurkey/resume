import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import personalImg from "../assets/images/me2.jpg"
import personal from "../assets/js/information.json"

const Header = () => {
  return (
    <>
        <header className="header">
            <Row className='d-flex align-items-center'>
                <Col className='col-12 col-sm-12 col-md-8 name'>
                    <img loading='lazy' src={personalImg} alt="personal-image" />
                    
                    <div className="fullName">
                        <h1>{personal[0].Turkey.HeaderInfo.fullName}</h1>
                        <h3>{personal[0].Turkey.HeaderInfo.title}</h3>
                    </div>
                </Col>
                
                <Col className='col-12 col-sm-12 col-md-4 contact'>
                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <a href={`https://wa.me/${personal[0].Turkey.HeaderInfo.phone}`} target='_blank'>{personal[0].Turkey.HeaderInfo.phone}</a>
                    </p>

                    <p>
                        <i className="fa-solid fa-house"></i>
                        <span>{personal[0].Turkey.HeaderInfo.country}</span>
                    </p>

                    <p>
                        <i className="fa-sharp fa-solid fa-envelope"></i>
                        <a href={`mailto:${personal[0].Turkey.HeaderInfo.gmail}`}>{personal[0].Turkey.HeaderInfo.gmail}</a>
                    </p>

                    <p>
                        <i className="fa-brands fa-linkedin"></i>
                        <a href={`https://www.${personal[0].Turkey.HeaderInfo.socialContact}`} target='_blank'>{personal[0].Turkey.HeaderInfo.socialContact}</a>
                    </p>
                </Col>
            </Row>
        </header>
    </>
  )
}

export default Header