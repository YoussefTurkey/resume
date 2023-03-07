import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import personalImg from "../assets/images/me2.jpg"

const Header = () => {

    const HeaderInfo = {
        "fullName" : "Youssef Turkey",
        "title" : "Junior Frontend Developer",
        "phone" : "+201273451052",
        "country" : "Alexandria, Egypt",
        "gmail" : "youssef.turkey11@gmail.com",
        "socialContact" : "linkedin.com/in/youturkey11"
    }

  return (
    <>
        <header className="header">
            <Row className='d-flex align-items-center'>
                <Col className='col-12 col-sm-12 col-md-8 name'>
                    <img loading='lazy' src={personalImg} alt="personal-image" />
                    
                    <div className="fullName">
                        <h1>{HeaderInfo.fullName}</h1>
                        <h3>{HeaderInfo.title}</h3>
                    </div>
                </Col>
                
                <Col className='col-12 col-sm-12 col-md-4 contact'>
                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <a href={`https://wa.me/${HeaderInfo.phone}`} target='_blank'>{HeaderInfo.phone}</a>
                    </p>

                    <p>
                        <i className="fa-solid fa-house"></i>
                        <span>{HeaderInfo.country}</span>
                    </p>

                    <p>
                        <i className="fa-sharp fa-solid fa-envelope"></i>
                        <a href={`mailto:${HeaderInfo.gmail}`}>{HeaderInfo.gmail}</a>
                    </p>

                    <p>
                        <i className="fa-brands fa-linkedin"></i>
                        <a href={`https://www.${HeaderInfo.socialContact}`} target='_blank'>{HeaderInfo.socialContact}</a>
                    </p>
                </Col>
            </Row>
        </header>
    </>
  )
}

export default Header