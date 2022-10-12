import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { groupsGetAll } from "./groupsGetAll";

export const groupCreate = async (newGroup: string) => {
  try {
    const storedGroups = await groupsGetAll();

    const groupExists = storedGroups.find((group) => group === newGroup);

    if (groupExists) {
      throw new AppError("Group already exists");
    }

    const newGroups = [...storedGroups, newGroup];

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGroups));
  } catch (error: any) {
    throw new Error(error);
  }
};
