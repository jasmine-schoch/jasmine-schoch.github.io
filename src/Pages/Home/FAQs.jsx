import { useState } from "react";

export default function FAQs() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpanded = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const faqData = [
        {
            id: 1,
            question: "How do you pronounce your last name?",
            shortAnswer: "Shock! like an electrical shock ⚡",
            longAnswer: ""
        },
        {
            id: 2,
            question: "What does molihuacha mean in your “Filling Jasmine's Cup” instagram account username?",
            shortAnswer: "mòlìhuā ( 茉莉花) chá ( 茶) is Jasmine tea in Chinese, so my username is just the pinyin for Jasmine tea! I thought it was a cute nod to my heritage that was also on theme with the idea of pouring into my own cup:) note: my Chinese name itself is not a translation of “Jasmine”, see tattoo question below for more info",
            longAnswer: ""
        },
        {
            id: 3,
            question: "How did you get into research? / Why do you like research?",
            shortAnswer: "answer coming soom!",
            longAnswer: "There will definitely be a long answer here."
        },
        {
            id: 4,
            question: "Why computer science?",
            shortAnswer: "Code is a powerful tool that can be applied towards any subject.",
            longAnswer: "Although my parents didn't force a tech career onto me while growing up (as they are both in tech), they definitely tried to nudge me in the direction, constantly reminding me to “keep my eyes open” or just in general preaching about how learning to code would be good for me, regardless of career path. \n We did some Scratch (a programming language for kids) in middle school, but I wasn't a fan. I also learned some python during freshman year of high school as part of my special math class, but it didn't really click; I struggled with it and had no real interest. Also, it seemed as if everyone around me who wanted to go into the tech industry had been coding since first grade, which certainly didn't help since I felt behind before barely even starting. \n Fast forward to freshman year at UW, I signed up for the intro CS class, mainly as a default option because I wasn't sure what else to take, so my fall quarter was mainly a continuation of my high school classes. That year, while cold emailing as many people as possible in search of a research opportunity for the following summer, I only got one positive response, from a computational genomics lab at GWU. Now to be completely honest, I didn't fully realize it was a dry-lab position when I reached out, as a lot of the complex genetic terminology had already gone over my head so I only grasped the general idea of what they were doing, but an opportunity is an opportunity so I figured if they were willing to take a chance on me, then I would give it a shot. That one email I sent quite possibly changed the trajectory of my college and future career. \nI learned many things during that summer. I sped through an online Harvard course in attempts to get up to speed on bioinformatics tools, read several epigenetics papers that I struggled to understand, and also learned bash commands and how to write shell scripts (as someone who had never worked in a terminal before, this all seemed very scary). But the biggest takeaway? Seeing firsthand how powerful computation can be utilized as a tool, and how many more possibilities it gives us in the research world. \nGoing into sophomore year, I participated in my first hackathon (and was a finalist!), and started taking more CS courses. I applied to the major on a whim in winter, and was accepted. I started taking the official courses that would count towards a CS degree, and quickly learned that there are still many parts of the computer science field that I am not so interested in, but I had to get through the classes. While others around me were taking operating systems or systems programming courses, I filled my electives with bio classes of interest. I continued to seek out opportunities at the intersection of biological research and tech, and worked in 3 different labs on a variety of projects by graduation. \nIn the end, I graduated with a Bachelor's of Science from the Paul G. Allen School of Computer Science! It was not the most conventional route and I still feel like a fake CS major a lot of the times, but a big thank you to my friends who supported me and helped me through the rigorous coursework, and the labs I worked in that reminded me of my purpose and kept me inspired."
        },
        {
            id: 5,
            question: "How long have you been vegetarian? Why?",
            shortAnswer: "Since summer of 2017, and for the animals!",
            longAnswer: ""
        },
        {
            id: 6,
            question: "Your tattoo is cool. What is it/does it mean anything?",
            shortAnswer: "It's bamboo and Jasmine flowers, as designed by my college roommate of 4 years. My Chinese name (筠蓁) relates to bamboo and grass, because I was born in year of the lamb of the Chinese zodiac so the grass/plant theme signifies an abundance of food and fortune throughout my life. Combining bamboo and Jasmine represents both facets of my cultural identity in one design :)",
            longAnswer: "Haven't seen my tattoo? The current logo in the top left corner is a rough rendition of it."
        }
    ];

    return (
        <section className="faqs--section" id="FAQs">
            <div className="faqs--container">
                <h1 className="faqs--section--heading">Frequently Asked Questions</h1>
                <p className="faqs--section--description">
                    Some questions have both short and long answers! Click on the questions with arrows next to them to see the full response.
                </p>
            </div>

            <div className="faqs--section--container">
                {faqData.map((faq) => (
                    <div key={faq.id} className="faq--card">
                        <div 
                            className={`faq--header ${faq.longAnswer ? 'clickable' : ''}`}
                            onClick={faq.longAnswer ? () => toggleExpanded(faq.id) : undefined}
                        >
                            <h3 className="faq--question">{faq.question}</h3>
                            {faq.longAnswer && (
                                <span className={`faq--arrow ${expandedId === faq.id ? 'expanded' : ''}`}>
                                    ▼
                                </span>
                            )}
                        </div>
                        
                        <div className="faq--answer">
                            <p className="faq--short-answer">{faq.shortAnswer}</p>
                        </div>

                        {expandedId === faq.id && faq.longAnswer && (
                            <div className="faq--long-answer">
                                {faq.longAnswer.split('\n').map((paragraph, idx) => (
                                    paragraph.trim() && <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
