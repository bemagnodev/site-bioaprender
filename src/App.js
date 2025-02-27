import Banner from "./components/Banner";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <Section1 />
    </div>
  );
}

export default App;
