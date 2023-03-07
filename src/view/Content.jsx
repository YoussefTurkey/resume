import React from 'react'

const Content = () => {

  const contentInfo = {
    "about" : "I am very passionate about Front-End Development and I am trying to learn everything new about modern technology in this field. I am trying to connect this field with Graphic Designing to give an artistic sense and be distinctive.",
    "projects" : {
      "firstProject" : ["Egtaz Platfom", 
                        "https://youssefturkey.github.io/Egtaz-Platform/", 
                        "https://github.com/YoussefTurkey/Egtaz-Platform",
                        "Exam dashboard, I was a Front-End Developer and Graphic Designer as a part of graduation team using self-study resources. (The grade was -A)",
                        ["HTML5", "CSS3", "JavaScript", "PHP", "Laravel", "UI-kit"]],
      "secondProject" : ["PMS", 
                         "https://youssefturkey.github.io/Products-Management-System/", 
                         "https://github.com/YoussefTurkey/Products-Management-System",
                         "Product Management System is a modern CRUD system for store the products was built by javascript as programming language",
                         ["HTML5", "CSS3", "JavaScript"]],
      "thirdProject" : ["softy-pinko",
                        "https://softy-pinko-digital.vercel.app/",
                        "https://github.com/YoussefTurkey/softy-pinko",
                        "Softy Pinko is a react.js app designed for your business or digital marketing website. It has a beautiful pink purple gradient background header. Standard section elements are included. Pricing Tables are provided for your clients.",
                        ["HTML5", "Scss", "JS", "React.js", "React-Bootstrap", "AOS", "Boxicons"]]
    },
    "reference" : [
      ["Unibusinessg' CEO", "Dr. Ahmed Talaat", "0111 963 6461", "ahmdtal3at@gmail.com"],
      ["US Legalization' Lead", "Eng. Asmaa Mahmoud", "0122 766 7706"]
    ]
  }

  return (
    <>
      <section className='content'>
        <div className="cel">
          <h2>About Me</h2>
          <p>{contentInfo.about}</p>
        </div>

        <div className="cel">
          <h2>Projects</h2>
          
          <div className="celProject">
            <div className='project'>
                <h3>{contentInfo.projects.firstProject[0]}</h3>

                <div className="view">
                  <a href={contentInfo.projects.firstProject[1]} target='_blank'>Live Demo</a>
                  <a href={contentInfo.projects.firstProject[2]} target='_blank'>Github</a>
                </div>
            </div>

            <p className="txt_project">{contentInfo.projects.firstProject[3]}</p>

            <h4 className='techTit'>Technologies:</h4>
            <ul className='technologies'>
              <li>- {contentInfo.projects.firstProject[4][0]}</li>
              <li>- {contentInfo.projects.firstProject[4][1]}</li>
              <li>- {contentInfo.projects.firstProject[4][2]}</li>
              <li>- {contentInfo.projects.firstProject[4][3]}</li>
              <li>- {contentInfo.projects.firstProject[4][4]}</li>
              <li>- {contentInfo.projects.firstProject[4][5]}</li>
            </ul>
          </div>

          <div className="celProject">
            <div className='project'>
                <h3>{contentInfo.projects.secondProject[0]}</h3>

                <div className="view">
                  <a href={contentInfo.projects.secondProject[1]} target='_blank'>Live Demo</a>
                  <a href={contentInfo.projects.secondProject[2]} target='_blank'>Github</a>
                </div>
            </div>

            <p className="txt_project">{contentInfo.projects.secondProject[3]}</p>

            <h4 className='techTit'>Technologies:</h4>
            <ul className='technologies'>
              <li>- {contentInfo.projects.secondProject[4][0]}</li>
              <li>- {contentInfo.projects.secondProject[4][1]}</li>
              <li>- {contentInfo.projects.secondProject[4][2]}</li>
            </ul>
          </div>

          <div className="celProject">
            <div className='project'>
                <h3>{contentInfo.projects.thirdProject[0]}</h3>

                <div className="view">
                  <a href={contentInfo.projects.thirdProject[1]} target='_blank'>Live Demo</a>
                  <a href={contentInfo.projects.thirdProject[2]} target='_blank'>Github</a>
                </div>
            </div>

            <p className="txt_project">{contentInfo.projects.thirdProject[3]}</p>

            <h4 className='techTit'>Technologies:</h4>
            <ul className='technologies'>
              <li>- {contentInfo.projects.thirdProject[4][0]}</li>
              <li>- {contentInfo.projects.thirdProject[4][1]}</li>
              <li>- {contentInfo.projects.thirdProject[4][2]}</li>
              <li>- {contentInfo.projects.thirdProject[4][3]}</li>
              <li>- {contentInfo.projects.thirdProject[4][4]}</li>
              <li>- {contentInfo.projects.thirdProject[4][5]}</li>
              <li>- {contentInfo.projects.thirdProject[4][6]}</li>
            </ul>
          </div>
        </div>

        <div className="cel">
          <h2>Reference</h2>
          
          <div className="d-flex row">
            <div className="celRef col-12 col-sm-12 col-md-6">
              <p>{contentInfo.reference[0][0]}</p>
              <span>{contentInfo.reference[0][1]}</span>
              <p>Phone: {contentInfo.reference[0][2]}</p>
              <p>Email: {contentInfo.reference[0][3]}</p>
            </div>

            <div className="celRef col-12 col-sm-12 col-md-6">
              <p>{contentInfo.reference[1][0]}</p>
              <span>{contentInfo.reference[1][1]}</span>
              <p>Phone: {contentInfo.reference[1][2]}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content