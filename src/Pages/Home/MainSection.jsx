export default function MainSection() {
    return(<section id="MainSection" className="main--section" >
        <div className="main--section--content--box">   <div className="main--section--content">
            <p className="main--section--hi">Hello! I am</p>
            <h1 className="main--section--title">  
                <span className="main--section--title--color">Jasmine Schoch,</span>{" "}
            </h1>
            <p className="main--section--description">a fourth year computer science student at the University of Washington with a strong passion for biology 🐣
            <br />    
            </p>
        </div>
        <a href="mailto:jasmineyschoch@gmail.com" className="btn btn-primary">Contact me!</a>
        </div>
        <div className="main--section--img">
        <img src="./img/profile.png" alt="Jasmine posing in her dance costume holding a sword." />
      </div>
       </section>
    )
}

