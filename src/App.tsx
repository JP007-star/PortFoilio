import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

function App() {
  useEffect(() => {
    // Force remove the dark class from the root element to ensure white theme
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 selection:bg-red-50 selection:text-red-600 transition-colors duration-500">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default App;
