import data from '../../data/index.json';

export default function ExperienceContainer() {
    return (
        <div className="experience--section--container">
            {data?.experiences?.map((item, index) => (
                <div key={index} className="experiences--section--card">
                    <div className="experiences--section--img">
                        <img src={item.src} alt="Logo or symbol to represent the experience" />
                    </div>
                    <div className="experience--section--card--content">
                        <h2 className="experience--section--title">{item.title}</h2>
                        <h3 className="experience--section--company">{item.company}</h3>
                        <p className="experience--section--description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
