import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './QuizPage';
import HomePage from './HomePage';
import NavLink from './NavLink';
import ScoreboardPage from './ScoreboardPage';
import { QuizProvider } from './context';
import QuestionsLayout from './QuestionsLayout';

function App() {
  return (
    <QuizProvider>
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
    </QuizProvider>
  );
}

export default App;
