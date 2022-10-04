import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { Button } from "@components/Button";

import { Container } from "./styles";
import { ListEmpty } from "@components/ListEmpty";
export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Galera da Rocketseat",
    "Galera do Discord",
    "Galera do Youtube",
    "Galera do Twitch",
    "Galera do Twitter",
    "Galera do Facebook",
    "Galera do Instagram",
    "Galera do Linkedin",
  ]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 ? { flex: 1 } : {}}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma encontrada" />
        )}
      />

      <Button title="Criar nova turma" />
    </Container>
  );
}
