import * as S from "./PageContainer.styles";

import { ContainerProps, Stack, StackDirection } from "@chakra-ui/react";
import { FC } from "react";

interface PageContainerProps extends ContainerProps {}
type CustomStyleType = {
  alignItems?: string;
  direction: StackDirection;
};

export const PageContainer: FC<PageContainerProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <S.Wrapper
      className={`page-container ${className}`}
      height={"100vh"}
      maxW={"100%"}
      paddingTop={"60px"}
      {...props}
    >
      <Stack height={"100%"} position="relative">
        {children}
      </Stack>
    </S.Wrapper>
  );
};
