import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import personalImg from "../assets/images/me2.jpg"
import personal from "../local/en.json"

const Header = () => {

const {t} = useTranslation();

  return (
    <>
        <header className="header">
            <Row className='d-flex align-items-center'>
                <Col className='col-12 col-sm-12 col-md-8 name'>
                    <img loading='lazy' src={personalImg} alt="personal-image" />
                    
                    <div className="fullName">
                        <h1>{t(personal.Person.HeaderInfo.fullName)}</h1>
                        <h3>{t(personal.Person.HeaderInfo.title)}</h3>
                    </div>
                </Col>
                
                <Col className='col-12 col-sm-12 col-md-4 contact'>
                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <a href={`https://wa.me/${personal.Person.HeaderInfo.phone}`} target='_blank'>{personal.Person.HeaderInfo.phone}</a>
                    </p>

                    <p>
                        <i className="fa-solid fa-house"></i>
                        <span>{t(personal.Person.HeaderInfo.country)}</span>
                    </p>

                    <p>
                        <i className="fa-sharp fa-solid fa-envelope"></i>
                        <a href={`mailto:${personal.Person.HeaderInfo.gmail}`}>{personal.Person.HeaderInfo.gmail}</a>
                    </p>

                    <p>
                        <i className="fa-brands fa-linkedin"></i>
                        <a href={`https://www.${personal.Person.HeaderInfo.socialContact}`} target='_blank'>{personal.Person.HeaderInfo.socialContact}</a>
                    </p>
                </Col>
            </Row>
        </header>
    </>
  )
}

export default Header