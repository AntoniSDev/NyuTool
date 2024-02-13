import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const Test1 = () => {
  return (
    <div>
      <h2>Créer un composant :</h2>
      <p>
        Pour créer un composant React, il faut définir une fonction qui retourne
        du JSX (JavaScript XML) et exporter le composant à la fin de sa
        définition.
      </p>
      <p>Exemple de création d'un composant :</p>
      <SyntaxHighlighter language="tsx" style={okaidia}>
        {`const MonComposant = () => {
  return (
    <div>
      <h1>Mon Composant</h1>
      <p>Ceci est mon composant React.</p>
    </div>
  );
};

export default MonComposant;`}
      </SyntaxHighlighter>

      <h2>Appeler un composant :</h2>
      <p>
        Une fois que le composant est crée, il faut l'appeler dans d'autres
        parties de l'application, en l'incluant dans le code JSX là où il doit
        être affiché.
      </p>
      <p>
        Par exemple, le composant <code>MonComposant</code>. On l'apelle dans
        d'autres composants ou dans le fichier racine de notre application ( App
        ) :
      </p>
      <SyntaxHighlighter language="tsx" style={okaidia}>
        {`
import MonComposant from './MonComposant';

const App = () => {
  return (
    <div>
      <h1>Mon Application React</h1>
      <MonComposant />
    </div>
  );
};

export default App;`}
      </SyntaxHighlighter>
    </div>
  );
};

export default Test1;
