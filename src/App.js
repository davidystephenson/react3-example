import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './QuizPage';
import HomePage from './HomePage';
import NavLink from './NavLink';
import ScoreboardPage from './ScoreboardPage';
import QuestionsLayout from './QuestionsLayout';
import { Provider } from 'react-redux';
import store from './storage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavLink pathname='/'>Home</NavLink>
        <NavLink pathname='/questions/quiz'>Quiz</NavLink>
        <NavLink pathname='/questions/scoreboard'>Scoreboard</NavLink>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/questions' element={<QuestionsLayout />}>
            <Route
              path='quiz'
              element={<QuizPage />}
            />
            <Route
              path='scoreboard'
              element={<ScoreboardPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
