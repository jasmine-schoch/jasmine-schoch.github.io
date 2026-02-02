import { useState } from 'react';
import data from '../../data/index.json';

export default function ExperienceContainer() {
    const [expandedCards, setExpandedCards] = useState({});

    const toggleCard = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="experience--section--container">
            {data?.experiences?.map((item, index) => (
                <div key={index} className="experience--section--card">
                    <div className="experience--section--img">
                        <img src={item.src} alt="Logo or symbol to represent the experience" />
                    </div>
                    <div className="experience--section--card--content">
                        <div className="experience--section--header" onClick={() => toggleCard(index)}>
                            <div>
                                <h2 className="experience--section--title">{item.title}</h2>
                                <h3 className="experience--section--company">{item.company}</h3>
                            </div>
                            <svg 
                                className={`experience--section--arrow ${expandedCards[index] ? 'expanded' : ''}`}
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none"
                            >
                                <path 
                                    d="M6 9L12 15L18 9" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        {expandedCards[index] && (
                            <p className="experience--section--description">{item.description}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
