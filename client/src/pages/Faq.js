import React from "react";
import Header from "../components/Header";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer"
import { Collapsible,  CollapsibleItem } from "react-materialize";
import Questions from "../components/modules/FaqModule"

const Faq = () => {
    const questions = Questions()

    console.log(questions.length)

    const question = () => {
        let number = 1
        if(number<10){number="00"+number}
        else if(number<100){number="0"+number}
        for(let i=0; i < questions.length; i++) {
            const header  = <div className="faq-question-header">{number+"//"}&emsp;{questions[i].question}</div>;
            const content = questions[i].answer.map( a => <p key={i}>{a}</p> )
            number++
            return (
                <CollapsibleItem expanded={false} header={header}><div>
                    {content}
                </div></CollapsibleItem>
            )
        }
    }

    console.log(question())

    return(
        <>
        <Header />
        <NavMobile />
        <div className="faq-container animate__animated animate__fadeIn" id="faq-container">
            <br />
            <h1 className="faq-header center">FAQ</h1>
            <br />
            <div className="faq-collapsible container">
                <Collapsible>
                    {question()}
                </Collapsible>
            </div>
            <br />
        </div>
        <NavDesktop />
        <Footer />
        </>
    )
}

export default Faq;