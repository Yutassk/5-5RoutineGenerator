"use client";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "../../../node_modules/react-tabs/style/react-tabs.scss";
import { BpRMConversion } from "./BpRMConversion";
import { SqDlRMConversion } from "./SqDlRMConversion";

const RMTabs = () => {
  return (
    <div className="my-6">
      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>ベンチプレス</Tab>
          <Tab>スクワット / デッドリフト</Tab>
        </TabList>
        <TabPanel>
          <BpRMConversion />
        </TabPanel>
        <TabPanel>
          <SqDlRMConversion />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RMTabs;
