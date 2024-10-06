import { Route } from "../../routes/todo/$indexvalue.lazy";

export const NumberIndex = () => {
  const { indexvalue } = Route.useParams();
  return <>NumberIndex #{indexvalue}</>;
};
