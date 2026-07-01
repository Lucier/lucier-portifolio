import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/features/hero/HeroSection'
import { AboutSection } from '@/features/about/AboutSection'
import { TechnologiesSection } from '@/features/technologies/TechnologiesSection'
import { ProjectsSection } from '@/features/projects/ProjectsSection'
import { CaseStudiesSection } from '@/features/case-studies/CaseStudiesSection'
import { ArchitectureSection } from '@/features/architecture/ArchitectureSection'
import { GitHubSection } from '@/features/github/GitHubSection'
import { LinkedInSection } from '@/features/linkedin/LinkedInSection'
import { ContactSection } from '@/features/contact/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <ArchitectureSection />
      <GitHubSection />
      <LinkedInSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
