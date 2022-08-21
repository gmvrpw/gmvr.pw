import Index from "page/Index";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "styles";

const App = () => {
  return (
    <ThemeProvider theme={theme.dark}>
      <Index />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
