import React from "react";
import TemplateOne from "../components/TemplateOne.jsx";
import TemplateTwo from "../components/TemplateTwo.jsx";
import TemplateThree from "../components/TemplateThree.jsx";
const RenderResume = ({ templateId, resumeData, containerWidth }) => {
  switch (templateId) {
    case "01":
      return (
        <TemplateOne resumeData={resumeData} containerWidth={containerWidth} />
      );
    case "02":
      return (
        <TemplateTwo resumeData={resumeData} containerWidth={containerWidth} />
      );
    case "03":
      return (
        <TemplateThree
          resumeData={resumeData}
          containerWidth={containerWidth}
        />
      );
    default:
      return (
        <TemplateOne resumeData={resumeData} containerWidth={containerWidth} />
      );
  }
};

export default RenderResume;
