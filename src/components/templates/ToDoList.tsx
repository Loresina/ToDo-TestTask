export const ToDoList = ({ title }: { title: string }): React.JSX.Element => {
  return (
    <main>
      <h2>Пока нет {title} дел.</h2>
    </main>
  );
};
