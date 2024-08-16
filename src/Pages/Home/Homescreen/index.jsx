import AboutMe from "../AboutMe";
import Experience from "../Experience";
import Footer from "../Footer";
import MainSection from "../MainSection";
import MyPortfolio from "../MyPortfolio";

export default function Home () {
    return(
        <>
            <MainSection />
            <Experience />
            <MyPortfolio/>
            <AboutMe />
            <Footer />
        </>
    );
}