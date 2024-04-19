import React from "react";

export const Header = (): React.JSX.Element => {
  return (
    <header>
      <h1>todos</h1>

      <input type="text" placeholder="What heeds to be done?" />
    </header>
  );
};
