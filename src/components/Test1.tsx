import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const Test1 = () => {
  return (
    <div>
      <h2>Comment créer un composant :</h2>
      <p>
        Pour créer un composant React, commencez par définir une fonction qui
        retourne du JSX (JavaScript XML). Exportez ensuite le composant à la fin
        de sa définition.
      </p>
      <p>Voici un exemple simple de création d'un composant :</p>
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

      <h2>Comment appeler un composant :</h2>
      <p>
        Une fois que vous avez créé un composant, vous pouvez l'appeler dans
        d'autres parties de votre application. Pour cela, importez simplement le
        composant et incluez-le dans le code JSX où vous souhaitez qu'il soit
        rendu.
      </p>
      <p>
        Par exemple, supposons que nous ayons créé un composant{" "}
        <code>MonComposant</code> comme illustré ci-dessus. Nous pouvons
        maintenant l'appeler dans d'autres composants ou dans le fichier racine
        de notre application :
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
