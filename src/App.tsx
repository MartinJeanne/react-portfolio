import { AppContainer, CardGrid } from './styles/StyledComponents';
import { HeaderComponent } from './components/Header';
import {
  IntroCard,
  SkillsCard,
  RemoteWorkCard,
  ProjectCard,
  DeveloperCard,
  EducationCard,
  HobbiesCard,
  InterestsCard,
  LanguagesCard,
  SpotifyCard,
  SocialNetworksCard
} from './components/cards/PortfolioCards';

function App() {
  return (
    <AppContainer>
      <HeaderComponent />
      <CardGrid>
        <IntroCard />
        <SkillsCard />
        <RemoteWorkCard />
        <ProjectCard />
        <DeveloperCard />
        <EducationCard />
        <HobbiesCard />
        <InterestsCard />
        <LanguagesCard />
        <SpotifyCard />
        <SocialNetworksCard />
      </CardGrid>
    </AppContainer>
  );
}

export default App;
