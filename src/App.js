import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './view/Header'
import Sidebar from './view/Sidebar'
import Content from './view/Content'
import DownlaodBtn from './components/DownlaodBtn'
import Translate from './components/Translate'

function App() {
  return (
    <>
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col className='col-12 col-sm-12 col-md-4 p-0 sidebarSection'>
          <Sidebar />
        </Col>

        <Col className='col-12 col-sm-12 col-md-8 p-0 contentSection'>
          <Content/>
        </Col>
      </Row>
    </Container>

    <DownlaodBtn />
    <Translate />
    </>
  );
}

export default App;
