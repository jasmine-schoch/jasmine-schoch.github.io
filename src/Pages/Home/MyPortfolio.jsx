import data from '../../data/index.json';
import ExperienceContainer from './ExperienceContainer';

/* portfolio aka personal projects */
export default function MyPortfolio() {
    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div>  </div>
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="section--heading">Personal Projects</h2>
                </div>
                <div>
                    <a 
                        href="https://github.com/jasmine-schoch" 
                        className="btn btn-github"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="./img/github-mark-white.svg"  
                            alt="GitHub Logo" 
                            width="32" 
                            height="32" 
                        />
                        Visit My Github
                    </a>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.projects?.map((item, index) => (
                    <div key={index} className='portfolio--section--card'>
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Screenshot of project" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p
                                    className="text-md"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                ></p>
                            </div>
                            <p className="text-sm portfolio--link">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.link}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 19"
                                        fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="section--heading">Professional Experience</h2>
            <ExperienceContainer />
        </section>
    );
}
