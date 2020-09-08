import React from "react";
import { Provider } from "react-redux";
import {
  Container,
  Card,
  CardContent,
} from "@material-ui/core";

import store from "./store";
import AppTitle from "./components/blocks/AppTitle";
import InputTodoArea from './components/blocks/InputTodoArea';
import TodoList from './components/blocks/TodoList';

const App = () => {

  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <AppTitle/>
            <InputTodoArea />
            <TodoList />
          </CardContent>
        </Card>
      </Container>
    </Provider>
  );
};

export default App;
