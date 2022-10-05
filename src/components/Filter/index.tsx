import { TouchableOpacityProps } from "react-native";

import { Container, Title, FilterStylesProps } from "./styles";

type Props = TouchableOpacityProps &
  FilterStylesProps & {
    title: string;
  };

export const Filter = ({ title, isActive = false, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
