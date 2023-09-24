import React from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "@/components/atoms/Background/Background.styles";
import Button from "@/components/atoms/Button/Button";
import coco from "@/assets/images/COCO.png";
import { PATH } from "@/constants/path";
import { Image } from "@/components/atoms/Image/Image";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
 
 export const LandingPage = () => {
    const navigate = useNavigate();
    const navigatePage = (path: string) => {
      navigate(path);
    };

  return (
    <Background
      $colormode="blue"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container $margin="50px 0">
        <Wrapper $flexGrow={4}>
          <Image src={coco} width={12} />
        </Wrapper>
        <Wrapper $flexGrow={2} style={{ gap: "15px" }}>
          <Button onClick={() => navigatePage(PATH.LOGIN_FINGER)} size="large">
            로그인
          </Button>
          <Button
            onClick={() => navigatePage(PATH.SIGNUP)}
            option="activated"
            size="large"
          >
            회원가입
          </Button>
        </Wrapper>
      </Container>
    </Background>
  );
};