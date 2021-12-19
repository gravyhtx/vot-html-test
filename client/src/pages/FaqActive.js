import React from "react";
import { Collapsible,  CollapsibleItem } from "react-materialize";

import Header from "../components/Header";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";

import ImageContainer from "../components/ImageContainer";
import Questions from "../components/modules/FaqModule";
import RandomQuote from "../components/modules/RandomQuote";

import Cartas from "../images/art/cartas.png";
// import Bro from "../images/art/bro.png";
// document.body.classList.add('scroll');

const FaqActive = () => {
    const questions = Questions()
    // const checkId = window.location.hash ? window.location.hash.substring(1) : "";
    // useEffect needed for "scrollIntoView({ behavior: 'smooth' })"
    const question = () => {
        return (
            questions.map((q) =>
                <CollapsibleItem
                    expanded={false}
                    // className={checkId === q.id ? "active" : ""}
                    className="active"
                    id={"header-"+q.id}
                    header={
                        <div className="faq-question-header" key={"header-"+q.id}>
                            {q.id+"//"}&emsp;{q.question}
                        </div>}
                    key={"header-"+q.id}>
                        <div>
                            {q.answer.map((a) =><p className="faq-answer" key={a}>{a}</p>)}
                        </div>
                </CollapsibleItem>
            )
        )
    }
    return(
        <div className="animate__animated animate__fadeIn">
        <Header />
        <NavMobile />
        <div className="faq-container animate__animated animate__fadeIn" id="faq-container">
            <br />
            <ImageContainer imgClasses="faq-image" description="Cartas" src={Cartas} />
            <h1 className="faq-header center italics thin">frequently ask questions...</h1>
            <div className="faq-collapsible container">
            <br />
            <Collapsible accordion={false}>
                {question()}
            </Collapsible>
            </div>
        </div>
        <br/><br/>
        <RandomQuote className={"center small"} type={"rap"} />
        <br/><br/>
        <NavDesktop />
        <Footer />
        </div>
    )
}

export default FaqActive;