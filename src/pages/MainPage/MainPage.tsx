import { useQuery } from "@tanstack/react-query";
import { USER_LOCALSTORAGE_KEY } from "../../shared/consts/localstorage";
import { $api } from "../../shared/api/api";
import { PizzaListItem } from "../../entities/User/Pizza/ui/PizzaListItem/PizzaListItem";
import { PizzaList } from "../../entities/User/Pizza/ui/PizzaList/PizzaList";

export const MainPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["pizzaCatalog"],
    queryFn: async () => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (!token) {
        throw new Error("не найден токен");
      }

      const response = await $api.get<any>("/pizza/catalog");
      console.log(response);
      return response.data;
    },
  });

  if (isPending) return "Загрузка...";
  if (error) console.log(error);
  if (error) return "Произошла ошибка: " + error.message;
  return (
    <div>
      <PizzaList pizzaList={data.catalog} />
    </div>
  );
};
