import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AboutTabs = () => {
  return (
    <>
      <Tabs>
        <TabList className="nav nav-tabs md-mt-50">
          <Tab className="nav-link font-slab">Our Story</Tab>
          <Tab className="nav-link font-slab">Our Mission</Tab>
          <Tab className="nav-link font-slab">Our Vision</Tab>
        </TabList>
        {/* End TabList */}

        <div className="tab-content mt-20">
          <TabPanel>
            <p className="font-rubik">
               Loovi, started with small team with different skills and expertises, our single mission created empathy and make us strong
            </p>
          </TabPanel>
          <TabPanel>
            <p className="font-rubik">
               Loovi contributes to the creation of a new reality, which will enhance the well-being of individuals worldwide, We give businesses the opportunity to create stronger connections with consumers
            </p>
          </TabPanel>
          <TabPanel>
            <p className="font-rubik">
              There are many variations of passages of Lorem Ipsum available,
              but the majority,
            </p>
            <p className="font-rubik">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>
          </TabPanel>
        </div>
        {/* End TabContent */}
      </Tabs>
    </>
  );
};

export default AboutTabs;
