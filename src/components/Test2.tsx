import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import Button from "./Button";
import { useState } from "react";

const Test2 = () => {
  const [copied, setCopied] = useState(false);

  const componentCode = `interface MonComposantProps {
    titre: string;
    contenu: string;
  }
  
  const MonComposant = (props: MonComposantProps) => {
    return (
      <div>
        <h1>{props.titre}</h1>
        <p>{props.contenu}</p>
      </div>
    );
  };
  
  export default MonComposant;`;

  const appCode = `import MonComposant from './MonComposant';

const App = () => {
  return (
    <div>
      <h1>Mon Application React</h1>
      <MonComposant titre="Titre du Composant" contenu="Contenu du Composant" />
    </div>
  );
};`;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container">
      <div className="main-content">
        <h2 className="code-header">Utilisation des Props :</h2>
        <p>
          Les props sont des propriétés qui permettent de passer des données de
          composant en composant dans une hiérarchie d'éléments React. Elles
          permettent de rendre les composants React dynamiques et réutilisables.
        </p>
        <h3>Création de Composant avec Props :</h3>
        <p>
          Lorsque vous créez un composant React, vous pouvez définir des props
          comme des paramètres de fonction dans la fonction de votre composant.
          Par exemple :
        </p>
        <div>
          <Button
            onClick={() => handleCopy(componentCode)}
            copied={copied}
            componentCode={componentCode}
          />
          <SyntaxHighlighter
            language="tsx"
            style={okaidia}
            className="code-highlight"
          >
            {componentCode}
          </SyntaxHighlighter>
        </div>

        <h3>Passage de Props :</h3>
        <p>
          Pour passer des props à un composant, vous les spécifiez simplement
          comme des attributs lors de l'utilisation du composant dans le JSX.
          Par exemple :
        </p>
        <div>
          <Button
            onClick={() => handleCopy(appCode)}
            copied={copied}
            componentCode={appCode}
          />
          <SyntaxHighlighter
            language="tsx"
            style={okaidia}
            className="code-highlight"
          >
            {appCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Test2;
