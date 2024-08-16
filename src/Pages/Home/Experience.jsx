import data from '../../data/index.json';
import ExperienceContainer from './ExperienceContainer';

export default function Experience() {
    return(
        <section className="experience--section"
        id="myExperience">
            <div className="experience--container">
                <h1 className="experience--section--heading">My Experience</h1>
                <h3 className="experience--section--subheading">For a more comprehensive overview, check out  the Professional Experience tab.</h3>
            </div>
            <ExperienceContainer />
        </section>
    );
}