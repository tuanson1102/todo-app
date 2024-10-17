import { useContext } from "react";
import AppContext from "../contexts/AppContext";

export default function Header() {
  const { addTodo } = useContext(AppContext);

  return (
    <>
      <header className="header">
        <h1>Todos App</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="Những công việc muộn làm?"
          autoFocus
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter" || e.keyCode === 13) {
              addTodo((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = "";
            }
          }}
        />
      </header>
    </>
  );
}
