import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import RoutesProviders from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <RoutesProviders />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
