import { useState } from 'react'
import './App.css'
import QuestionnaireApp from "./apps/QuestionnaireApp/QuestionnaireApp";
import questionnaireStore from "./apps/QuestionnaireApp/redux/store";
import { Provider } from "react-redux";
import quotesStore from  "./apps/QuotesApp/redux/store";
import QuotesApp from './apps/QuotesApp/QuotesApp';
import NewApp from './apps/NewApp/NewApp';


function App() {
const [activeApp, setActiveApp] = useState("");
 console.log("Active App: ", activeApp); 

const renderApp = () => {
    switch (activeApp) {
      case "questionnaireStore":
        return (
         <Provider store={questionnaireStore}>
          <QuestionnaireApp />
         </Provider>
        );
       case "quotesStore":
      return (
        <Provider store={quotesStore}>
          <QuotesApp />
        </Provider>
      );
      
      case "newapp":
        console.log("Rendering NewApp now");
        return <NewApp />;
        

        default:
        return <p>Select an app to view</p>;
    }
  };

   return (
    <div className="App">
      <label htmlFor="app-select" className="app-label">Choose an app: </label>

<select
        id="app-select"
        value={activeApp}
        onChange={(e) => setActiveApp(e.target.value)}
        className="app-select"
      >
        <option value="">---</option>
        <option value="questionnaireStore">📝 Questionnaire App</option>
        <option value="quotesStore">💬 Quotes App</option>
        <option value="newapp">💡 New App</option>
        </select>
       
      {renderApp()}
    
    </div>
  );
}

export default App
