import React, { useState } from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Back from "@/components/atoms/Back/Back";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import cards from "@/assets/images/img-cardsAnimation.png";

const OnbordnigPage2 = () => {
  return (
    <Container
      // $left={true}
      // style={{
      //   // backgroundImage: `url(${})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center center",
      // }}
      $border={true}
    >
      <Container
        $left={true}
        // align-items="left"
        $paddingTop="63px"
        height="auto"
        $padding="0px"
        // $border={true}
      >
        <Text size="body2" fontWeight="bold">
          지갑속의
        </Text>
        <Text size="body2" fontWeight="bold">
          수많은 카드들..
        </Text>
      </Container>
      {/* TODO:크기 조절해서 맞추기 */}
      <Image src={cards} width={24.5} height={34}></Image>
    </Container>
  );
};

export default OnbordnigPage2;
