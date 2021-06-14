import { ThemeProvider } from "styled-components";
import Layout from "../src/containers/Layout";
import "@common/styles/fonts.css";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from '@common/redux/store'
import LanguageProvider from "@containers/App/LanguageProvider";
import theme from "@common/styles/theme";
import GlobalStyle from "@common/styles/globalStyle";
import { apolloClient } from "@apollo/index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <LanguageProvider>
            <Layout>
              <Component {...pageProps} />
              <GlobalStyle />
            </Layout>
          </LanguageProvider>
        </ApolloProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
