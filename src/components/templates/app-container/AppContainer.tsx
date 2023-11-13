import * as S from "./AppContainer.styles";

import { FC } from "react";
import { ContainerProps } from "@chakra-ui/react";

interface AppContainerProps extends ContainerProps {}

export const AppContainer: FC<AppContainerProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <S.Wrapper className={`app-container ${className}`} {...props}>
      {children}
    </S.Wrapper>
  );
};
