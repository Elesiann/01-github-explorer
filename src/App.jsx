import { Counter } from "./components/Counter";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/global.scss";

export function App() {
  return (
    //sempre deve existir um conteiner pai acima de duas expressoes jsx
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}
