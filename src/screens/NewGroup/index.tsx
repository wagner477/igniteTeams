import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { PaperclipHorizontal } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export const NewGroup = () => {
  const navigation = useNavigation();

  const handleCreateGroup = () => {
    navigation.navigate("players", { group: "Turma da Rocketseat" });
  };

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </Content>
    </Container>
  );
};
