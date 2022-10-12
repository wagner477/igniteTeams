import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

interface Props {
  name: string;
  onRemove?: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon name="person" />

      <Name>{name}</Name>

      <ButtonIcon type="SECONDARY" icon="close" onPress={onRemove} />
    </Container>
  );
}
