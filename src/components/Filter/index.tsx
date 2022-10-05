import { TouchableOpacityProps } from "react-native";

import { Container, Title, FilterStylesProps } from "./styles";

type Props = TouchableOpacityProps &
  FilterStylesProps & {
    title: string;
  };

export const Filter = ({ title, isActive = true, ...rest }: Props) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
