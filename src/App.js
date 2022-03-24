import { Container, GlobalStyle, Card } from "./components/StyleGeral";
import { useState } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./constants/theme";
import Matches from "./pages/Matches";
import Button from "@material-ui/core/Button";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import { clearAll } from "./services/integracoes";
import CardInitial from "./components/CardInitial";

function App() {
  const [page, setPage] = useState("home");
  const [name, setName] = useState("");
  const [heightCard, setHeightCard] = useState("200px");

  const changeMatches = () => {
    setPage("matches");
  };

  const changeHome = () => {
    setPage("home");
  };

  const clearMatches = () => {
    clearAll(name);
    setName("");
    setHeightCard("200px");
  };

  const clickInitial = (newName) => {
    setName(newName.trim());
    setHeightCard("600px");
  }

  const changePage = () => {
    switch (page) {
      case "home":
        return (
          <Home
            name={name}
            changeMatches={changeMatches}
          />
        );
      case "matches":
        return <Matches name={name} changeHome={changeHome} />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Card altura={heightCard}>
          {name ? (
            changePage()
          ) : (
            <CardInitial clickInitial={clickInitial} />
          )}
        </Card>
        <Button
          color="primary"
          className="button-clear"
          startIcon={<ClearAllIcon />}
          variant="contained"
          onClick={clearMatches}
          size='small'
        >
          Limpar Matches
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
