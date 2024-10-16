import HeroBgAnimation from "../HeroBgAnimation";
import {
    HeroContainer,
    HeroBg,
    HeroLeftContainer,
    Img,
    HeroRightContainer,
    HeroInnerContainer,
    TextLoop,
    Title,
    Span,
    SocialMediaIcons,
    SocialMediaIcon,
    ResumeButton,
  } from "./HomeStyle";
  import { Bio } from "../../data/constants";
  import Typewriter from "typewriter-effect";
  import HeroImg from "../../images/Img2.jpeg";
  import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
  
  const Home = () => {
    return (
      <div id="home">
        <HeroContainer>
          <HeroBg>
            <HeroBgAnimation/>
          </HeroBg>
          <HeroInnerContainer>
            <HeroLeftContainer id="Left">
              <Title>
                Hi, I am <br /> {Bio.name}
              </Title>
              <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
              {/* <SubTitle>{Bio.description}</SubTitle> */}
              <ResumeButton href={Bio.resume} target="display">
                Check Resume
              </ResumeButton>
              <SocialMediaIcons>
                <SocialMediaIcon href={Bio.linkedin} target="display">
                  <LinkedInIcon style={{fontSize:"40px"}}/>
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.twitter} target="display">
                  <TwitterIcon style={{fontSize:"40px"}}/>
                </SocialMediaIcon>
              </SocialMediaIcons>
            </HeroLeftContainer>
  
            <HeroRightContainer id="Right">
              <Img src={HeroImg} alt="hero-image" />
            </HeroRightContainer>
          </HeroInnerContainer>
        </HeroContainer>
      </div>
    );
  };
  
  export default Home;
  