import { history, store } from '@redux/store';
import { Provider } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { useTranslation } from 'react-i18next';
import AnimatedCursor from 'react-animated-cursor';

import '@styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        showSystemCursor={true}
        hasBlendMode={true}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
      />
    </Provider>
  );
}

export default App;

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <h2>{t('title')}</h2>
      </main>
      <nav>
        <Link to='/about'>About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, dont you think?</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
}
