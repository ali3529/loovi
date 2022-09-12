import React from "react";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AboutTabs = ({ data }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Tabs>
        <TabList className="nav nav-tabs md-mt-50">
          <Tab className="nav-link font-slab">
            {i18n.language == "en"
              ? data?.about_tab?.about_tab_1
              : data?.about_tab?.about_tab_1_fa}
          </Tab>
          <Tab className="nav-link font-slab">
            {i18n.language == "en"
              ? data?.about_tab?.about_tab_2
              : data?.about_tab?.about_tab_2_fa}
          </Tab>
          <Tab className="nav-link font-slab">
            {i18n.language == "en"
              ? data?.about_tab?.about_tab_3
              : data?.about_tab?.about_tab_3_fa}
          </Tab>
        </TabList>
        {/* End TabList */}

        <div className="tab-content mt-20">
          <TabPanel>
            <p className="font-rubik">
          
              {i18n.language == "en"
                ? data?.about_tab?.about_tab_1_description
                : data?.about_tab?.about_tab_1_description_fa}
            </p>
          </TabPanel>
          <TabPanel>
            <p className="font-rubik">
            {i18n.language == "en"
                ? data?.about_tab?.about_tab_2_description
                : data?.about_tab?.about_tab_2_description_fa}
            </p>
          </TabPanel>
          <TabPanel>
            <p className="font-rubik">
            {i18n.language == "en"
                ? data?.about_tab?.about_tab_3_description
                : data?.about_tab?.about_tab_3_description_fa}
            </p>
           
          </TabPanel>
        </div>
        {/* End TabContent */}
      </Tabs>
    </>
  );
};

export default AboutTabs;
