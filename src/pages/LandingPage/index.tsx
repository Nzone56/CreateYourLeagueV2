import { LandingContent } from "./LandingContent";
import { LandingHeader } from "./LandingHeader";
import { LandingPageContainer } from "./LandingPage.styled";

export const LandingPage = () => {
  return (
    <LandingPageContainer>
      <LandingHeader />
      <LandingContent />
    </LandingPageContainer>
  );
};
