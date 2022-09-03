import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
  {
    title: "High performance.",
    desc: `ُُُScene detection on the Loovi platform has the highest performance and support flagship and old devices .`,
    expand: "a",
  },
  {
    title: "Work on wide-range of devices and browsers",
    desc: ` It only takes 5 minutes. Set-up is smooth & simple, with fully
    customisable page design to reflect your brand lorem dummy.`,
    expand: "b",
  },
  {
    title: "Start selling ticket",
    desc: ` It only takes 5 minutes. Set-up is smooth & simple, with fully
    customisable page design to reflect your brand lorem dummy.`,
    expand: "c",
  },
];

const Faq = () => {
  return (
    <div className="accordion-style-two pr-5">
      <div className="faq-wrraper">
        <Accordion preExpanded={["a"]} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem className="card" key={i} uuid={item.expand}>
              <AccordionItemHeading className="card-header">
                <AccordionItemButton>
                  <h5 className="mb-0">
                    <button className="btn btn-link">{item.title}</button>{" "}
                  </h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel className="card-body fadeInUp">
                <p>{item.desc}</p>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
