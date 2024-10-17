import { useQuery } from "@tanstack/react-query";
import { USER_LOCALSTORAGE_KEY } from "../../shared/consts/localstorage";
import { $api } from "../../shared/api/api";
import { PizzaList } from "../../entities/Pizza/ui/PizzaList/PizzaList";

export const MainPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["pizzaCatalog"],
    queryFn: async () => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (!token) {
        throw new Error("не найден токен");
      }

      const response = await $api.get<any>("/pizza/catalog");
      return response.data;
    },
  });

  if (isPending) return "Загрузка...";
  if (error) return "Произошла ошибка: " + error.message;
  
  return (
    <div>
      <PizzaList pizzaList={data.catalog} />
    </div>
  );
};
