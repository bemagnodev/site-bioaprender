import Banner from './components/Banner';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
