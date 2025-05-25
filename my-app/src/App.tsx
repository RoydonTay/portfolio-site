import React from "react";
import Header from "./components/Header/Header";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import SkillsPanel from "./components/SkillsPanel/SkillsPanel";
import ResumeDownloadButton from "./components/ResumeDownloadButton/ResumeDownloadButton"; // Added import
import "./index.css"; // Ensure index.css is imported for global styles
// import './App.css'; // App.css will be cleared or removed

function App() {
  return (
    <>
      {/* Global styles are now handled by index.css */}
      <Header />
      <ProjectsSection />
      <SkillsPanel />
      <ResumeDownloadButton />
    </>
  );
}

export default App;
