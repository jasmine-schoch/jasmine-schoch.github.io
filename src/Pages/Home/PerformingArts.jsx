export default function PerformingArts() {
    const performingArtsData = [
        {
            id: 1,
            title: "AVA Dance Company, 2025 - Current",
            description: "I joined AVA in September, 2025! I attend drop-in classes about once a week, and hope to take advantage of as many of their performance opportunities as possible.",
            videos: [
                {
                    id: 1,
                    title: "NBA Halftime Show Performance, 12/4/2025",
                    description: "My first AVA performance! I was in the Street Jazz group to this Britney Spears mix, and had a blast.",
                    embedUrl: "https://www.youtube.com/embed/?listType=playlist&list=PL6wLBZ6drSuxF3cXSsH-hpvhItvMhdrtM"
                },
                {
                    id: 2,
                    title: "Drop in classes",
                    description: "A playlist of all the AVA drop in classes I have attended!",
                    embedUrl: "https://www.youtube.com/embed/?listType=playlist&list=PL6wLBZ6drSux5cBMzfUls6xPqpIV0LAo0"
                }
            ]
        },
        {
            id: 2,
            title: "Traditional Chinese Dance at UW, 2022-2025",
            description: "I joined TCD my sophomore year of college, the first year the team was built. I did not have Chinese dance experience prior to joining, but auditioning is one of the best choices I've ever made as not only did I learn and grow as a dancer, but made some of my best friends and forever shaped my college years.",
            videos: [
                {
                    id: 1,
                    title: "《风雨归晴》The Wind the Rain Return to Sunshine [SOLO]",
                    description: "My senior year solo for showcase! The longest solo I've done to date.",
                    embedUrl: "https://www.youtube.com/embed/hHbTDpU8NdY"
                },
                {
                    id: 2,
                    title: "《孤月杳然》Moon in the Mood [SOLO]",
                    description: "I couldn't pick just one solo for showcase, so I performed this one at all non-showcase performances.",
                    embedUrl: "https://www.youtube.com/embed/_7zMfiQGfeQ"
                },
                {
                    id: 3,
                    title: "《林鸟趣话》Flirty Fluttery Birdies [DUET]",
                    description: "Had sooo much fun both learning and performing this duet with Liz.",
                    embedUrl: "https://www.youtube.com/embed/eanpsofNIpQ"
                },
                {
                    id: 4,
                    title: "《游园》Garden Tour",
                    description: "It was so special having one last dance with all the seniors </3",
                    embedUrl: "https://www.youtube.com/embed/5i25dMvkL-Y"
                },
                {
                    id: 5,
                    title: "《玉鸟》Jade Bird",
                    description: "My favorite big group dance of that year. So sharp, so regal.",
                    embedUrl: "https://www.youtube.com/embed/P6lGDVR7r1E"
                },
                {
                    id: 6,
                    title: "《众里寻他》 Looking for Him",
                    description: "The Yearning! The Emotion! The props! Such a fun production.",
                    embedUrl: "https://www.youtube.com/embed/xa52_kHfY4Q"
                },
                {
                    id: 7,
                    title: "《天浴》 Heavanly Showers",
                    description: "A Tibetan style dance, one of my favorite group pieces. A good challenge that showed us what TCD is capable of!",
                    embedUrl: "https://www.youtube.com/embed/z5NONXPKIDw"
                },
                {
                    id: 8,
                    title: "《纸扇书生》 Paper Fan Scholar",
                    description: "We initially learned this as an add-on Sophomore year after we finished our first group dance (ever) and still had more time in the year to keep dancing, and then loved it so much we carried it over to the begining of my junior year:)",
                    embedUrl: "https://www.youtube.com/embed/FoWA06Tw4Is"
                },
                {
                    id: 8,
                    title: "《人生若只如初见》 Life at First Sight",
                    description: "Our very first dance as a team, ever!! Truly the dance that started it all, and you can see how much we grew over the years.",
                    embedUrl: "https://www.youtube.com/embed/HmE04n8ZMf0"
                },
                {
                    id: 9,
                    title: "《雨中花》 Flower in the Rain [SOLO]",
                    description: "A Dai solo I learned sophomore year. This was my first time performing a solo in my life, and it wouldn't have been possible without the unwavering encouragement and support of Annie and Vanessa<3.",
                    embedUrl: "https://www.youtube.com/embed/_G9hBR15WDw"
                },
                {
                    id: 10,
                    title: "《书简》 Bamboo Slip [SOLO]",
                    description: "A sword solo I learned junior year! Shoutout Husky Wushu for letting me borrow a sword and getting me started, they are the best <33.",
                    embedUrl: "https://www.youtube.com/embed/TmxA4aLGWEc?start=4058"
                }
            

            ]
        },
        {
            id: 3,
            title: "Dance Academy of Loudoun, 2006 - 2018",
            description: "The studio that started it all! I took my first combo class at DAL when I was 3, and started competing in 3rd grade. I was in the Nutcracker every year from first grade until 8th grade, doing all sorts or roles from little angel, to party girl, to soldier, and snow. Unfortunately I don't have much media from these formative years, but here are the few competition videos that I do have.",
            videos: [
                {
                    id: 1,
                    title: "Don't forget me (2014)",
                    description: "This was one of my favorite competition dances. Probably because I was front and center. But it was also my first (and only) large production! So that was fun.",
                    embedUrl: "https://www.youtube.com/embed/-W-Kvq4j1DQ"
                },
                {
                    id: 2,
                    title: "Shine (2016)",
                    description: "I loved Ms. Kari, and I believe this was from the last year I was competing, so glad I got to end on a dance I enjoyed.",
                    embedUrl: "https://www.youtube.com/embed/5u0z4fesrBI" 
                },
                {
                    id: 3,
                    title: "Bones (2016)",
                    description: "Can you tell I was a big lyrical girly? The same year I did Shine I doubled up on Lyrical and got to do this dance with Mrs. Elizabeth!",
                    embedUrl: "https://www.youtube.com/embed/rWRRv5ra9W0"
                }
            ]
        }
    ];

    return (
        <section className="performing-arts--section">
           
            {performingArtsData.map((section) => (
                <div key={section.id} className="performing-arts--section--container">
                    <div className="performing-arts--section--header">
                        <h3 className="performing-arts--section--title">{section.title}</h3>
                        <p className="performing-arts--section--description">{section.description}</p>
                    </div>

                    <div className="performing-arts--videos--container">
                        {section.videos.map((video) => (
                            <div key={video.id} className="performing-arts--video--card">
                                <div className="performing-arts--video--embed">
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src={video.embedUrl}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="performing-arts--video--content">
                                    <h4 className="performing-arts--video--title">{video.title}</h4>
                                    <p className="performing-arts--video--description">{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}