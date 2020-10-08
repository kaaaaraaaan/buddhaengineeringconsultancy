import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordionItem from "./AccordionItem";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const FAQ = (props) => {
  return (
    <section className="faq-one">
      <img src={faqBG} className="faq-one__bg-shape-1" alt="" />
      <Container>
        <BlockTitle
          textAlign="center"
          titleText={`Want to Ask Something From \n Buddha Engineering Consultancy?`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="How many days does it take to create a Ghar Naksa?"
            content="It might take around a week to create a Ghar Naksa."
            status={false}
          />
          <AccordionItem
            title="Will you perform the required procedure on Municipality for us?"
            content="For clients who are physically disabled and donot have any means to go to the Municipality to perfrom this process, certain compensations can be done."
            status={true}
          />
          <AccordionItem
            title="What is the basic charge for a Ghar Naksa for a normal house?"
            content="The flat charge for creating a Ghar Naksa is Rs.10 per square feet . Other additional charges may apply."
            status={false}
          />
          <AccordionItem
            title="In which municipalities will you perform the task?"
            content="We work on all municipalities over Rupandehi district."
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
