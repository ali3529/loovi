import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useTranslation } from "react-i18next";



const Faq = ({data}) => {
  const { t, i18n } = useTranslation();
  const FaqContent = [
    {
      title: i18n.language == "en" ?data?.faq?.faq_1:data?.faq?.faq_1_fa,
      desc: i18n.language == "en" ?data?.faq?.faq_1_description:data?.faq?.faq_1_description_fa,
      expand: "a",
    },
    {
     
      title: i18n.language == "en" ?data?.faq?.faq_2:data?.faq?.faq_2_fa,
      desc: i18n.language == "en" ?data?.faq?.faq_2_description:data?.faq?.faq_2_description_fa,
      expand: "b",
    },
    {
     
      title: i18n.language == "en" ?data?.faq?.faq_2:data?.faq?.faq_2_fa,
      desc: i18n.language == "en" ?data?.faq?.faq_2_description:data?.faq?.faq_2_description_fa,
      expand: "c",
    },
  ];
 
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
