import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { PaperclipHorizontal } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const NewGroup = () => {
  const navigation = useNavigation();

  const [group, setGroup] = useState("");

  const handleCreateGroup = () => {
    navigation.navigate("players", { group });
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

        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </Content>
    </Container>
  );
};
