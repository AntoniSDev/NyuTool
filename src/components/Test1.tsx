import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import Button from "./Button";
import { useState } from "react";

const Test1 = () => {
  const [copied, setCopied] = useState(false);

  const componentCode = `const MonComposant = () => {
  return (
    <div>
      <h1>Mon Composant</h1>
      <p>Ceci est mon composant React.</p>
    </div>
  );
};

export default MonComposant;`;

  const appCode = `import MonComposant from './MonComposant';

const App = () => {
  return (
    <div>
      <h1>Mon Application React</h1>
      <MonComposant />
    </div>
  );
};

export default App;`;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container">
      <div className="main-content">
        <h2 className="code-header">Création de composant :</h2>
        <p>
          Pour créer un composant React, il faut définir une fonction qui
          retourne du JSX (JavaScript XML) et exporter le composant à la fin de
          sa définition.
        </p>
        <p>Exemple :</p>
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

        <h2 className="code-header">Appeler un composant :</h2>
        <p>
          Une fois que le composant est créé, il faut l'appeler dans d'autres
          parties de l'application, en l'incluant dans le code JSX là où il doit
          être affiché.
        </p>
        <p>
          Par exemple, le composant <code>MonComposant</code>. On l'appelle dans
          d'autres composants ou dans le fichier racine de notre application (
          App ) :
        </p>
        <div>
          <Button //
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

export default Test1;
