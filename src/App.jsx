import { useState } from 'react'
import './App.css'
import QuestionnaireApp from "./apps/QuestionnaireApp/QuestionnaireApp";
import questionnaireStore from "./apps/QuestionnaireApp/redux/store";
import { Provider } from "react-redux";
import quotesStore from  "./apps/QuotesApp/redux/store";
import QuotesApp from './apps/QuotesApp/QuotesApp';
import store from './apps/QuestionnaireApp/redux/store';
import NewApp from './apps/NewApp/NewApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
const [activeApp, setActiveApp] = useState("");

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
      case "NewApp":
        return (
          <Provider store={store}> 
            <NewApp />
          </Provider>
        );
        

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
        <option value="NewApp">💡 New App</option>
        </select>
         <BrowserRouter> {/* Главное приложение оборачиваем в BrowserRouter */}
        <Routes>
          <Route path="/" element={<p>Select an app to view</p>} />
          <Route path="/newapp/*" element={<NewApp />} /> {/* Новый рут для NewApp */}
        </Routes>

      {renderApp()}
      </BrowserRouter>
    </div>
  );
}

export default App
