import personal from "../assets/js/information.json"

const Content = () => {
  return (
    <>
      <section className='content'>
        <div className="cel">
          <h2>About Me</h2>
          <p>{personal[0].Turkey.contentInfo.about}</p>
        </div>

        <div className="cel">
          <h2>Projects</h2>
          
          <div className="celProject">
            <div className='project'>
                <h3>{personal[0].Turkey.contentInfo.projects.firstProject[0]}</h3>

                <div className="view">
                  <a href={personal[0].Turkey.contentInfo.projects.firstProject[1]} target='_blank'>Live Demo</a>
                  <a href={personal[0].Turkey.contentInfo.projects.firstProject[2]} target='_blank'>Github</a>
                </div>
            </div>

            <p className="txt_project">{personal[0].Turkey.contentInfo.projects.firstProject[3]}</p>

            <h4 className='techTit'>Technologies:</h4>
            <ul className='technologies'>
              <li>- {personal[0].Turkey.contentInfo.projects.firstProject[4][0]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.firstProject[4][1]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.firstProject[4][2]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.firstProject[4][3]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.firstProject[4][4]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.firstProject[4][5]}</li>
            </ul>
          </div>

          <div className="celProject">
            <div className='project'>
                <h3>{personal[0].Turkey.contentInfo.projects.secondProject[0]}</h3>

                <div className="view">
                  <a href={personal[0].Turkey.contentInfo.projects.secondProject[1]} target='_blank'>Live Demo</a>
                  <a href={personal[0].Turkey.contentInfo.projects.secondProject[2]} target='_blank'>Github</a>
                </div>
            </div>

            <p className="txt_project">{personal[0].Turkey.contentInfo.projects.secondProject[3]}</p>

            <h4 className='techTit'>Technologies:</h4>
            <ul className='technologies'>
              <li>- {personal[0].Turkey.contentInfo.projects.secondProject[4][0]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.secondProject[4][1]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.secondProject[4][2]}</li>
            </ul>
          </div>

          <div className="celProject">
            <div className='project'>
                <h3>{personal[0].Turkey.contentInfo.projects.thirdProject[0]}</h3>

                <div className="view">
                  <a href={personal[0].Turkey.contentInfo.projects.thirdProject[1]} target='_blank'>Live Demo</a>
                  <a href={personal[0].Turkey.contentInfo.projects.thirdProject[2]} target='_blank'>Github</a>
                </div>
            </div>

            <p className="txt_project">{personal[0].Turkey.contentInfo.projects.thirdProject[3]}</p>

            <h4 className='techTit'>Technologies:</h4>
            <ul className='technologies'>
              <li>- {personal[0].Turkey.contentInfo.projects.thirdProject[4][0]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.thirdProject[4][1]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.thirdProject[4][2]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.thirdProject[4][3]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.thirdProject[4][4]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.thirdProject[4][5]}</li>
              <li>- {personal[0].Turkey.contentInfo.projects.thirdProject[4][6]}</li>
            </ul>
          </div>
        </div>

        <div className="cel">
          <h2>Reference</h2>
          
          <div className="d-flex row">
            <div className="celRef col-12 col-sm-12 col-md-6">
              <p>{personal[0].Turkey.contentInfo.reference[0][0]}</p>
              <span>{personal[0].Turkey.contentInfo.reference[0][1]}</span>
              <p>Phone: {personal[0].Turkey.contentInfo.reference[0][2]}</p>
              <p>Email: {personal[0].Turkey.contentInfo.reference[0][3]}</p>
            </div>

            <div className="celRef col-12 col-sm-12 col-md-6">
              <p>{personal[0].Turkey.contentInfo.reference[1][0]}</p>
              <span>{personal[0].Turkey.contentInfo.reference[1][1]}</span>
              <p>Phone: {personal[0].Turkey.contentInfo.reference[1][2]}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content