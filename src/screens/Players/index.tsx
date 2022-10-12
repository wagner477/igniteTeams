import { FlatList } from "react-native";

import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";

import { useState } from "react";
import { Button } from "@components/Button";

export const Players = () => {
  const [team, setTeam] = useState("TIME A");
  const [players, setPlayers] = useState([
    "Agnaldo",
    "Beto",
    "Cleiton",
    "Dudu",
    "Eduardo",
    "Fernando",
    "Gustavo",
    "Hugo",
    "Igor",
    "Jorge",
    "Kleber",
    "Lucas",
    "Marcos",
    "Natan",
    "Otávio",
    "Pedro",
    "Quirino",
    "Rafael",
    "Sandro",
    "Tiago",
    "Ubirajara",
    "Vitor",
    "Wagner",
    "Xavier",
    "Yuri",
    "Zé",
  ]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon type="PRIMARY" icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["TIME A", "TIME B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não a pessoas nesse time?" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
};
