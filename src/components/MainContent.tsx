import { useState } from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";

const MainContent = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  const renderSelected = () => {
    switch (selectedOption) {
      case "test1":
        return <Test1 />;
      case "test2":
        return <Test2 />;
      case "test3":
        return <div>Contenu du super test 3</div>;
      case "test4":
        return <div>Contenu du super test 4</div>;
      case "test5":
        return <div>Contenu du super test 5</div>;
      default:
        return <div></div>;
    }
  };

  return (
    <div>
      <div className="buttons-container">
        <button onClick={() => handleClick("test1")}>test1</button>
        <button onClick={() => handleClick("test2")}>test2</button>
        <button onClick={() => handleClick("test3")}>test3</button>
        <button onClick={() => handleClick("test4")}>test4</button>
        <button onClick={() => handleClick("test5")}>test5</button>
      </div>
      <div className="content-container">{renderSelected()}</div>{" "}
    </div>
  );
};

export default MainContent;
