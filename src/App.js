import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Row, Col, Layout } from "antd";

import { auth, signIn, signOut } from "./utils/firebaseAuth";

import InputArea from "./components/InputArea";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Logout from "./components/Logout";

export const AuthContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const [idToken, setIdToken] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL } = user;

        user.getIdToken(true).then(setIdToken);

        setUser({ displayName, email, photoURL });
      } else {
        setUser(null);
        setIdToken(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, idToken, signIn, signOut }}>
      <Router>
        <Layout className="wrapper">
          <Route path="/" component={Header} />
          <Layout.Content>
            <Row>
              <Col span={4}></Col>
              <Col span={16} className="input-area">
                <Switch>
                  <Route path="/" exact component={InputArea} />
                  <Route path="/about" component={About} />
                  <Route path="/login" component={Login} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/not-found">
                    <span>
                      Sorry, the URL you requested cannot be found! :(
                    </span>
                  </Route>
                  <Route path="/:random">
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </Col>
              <Col span={4}></Col>
            </Row>
          </Layout.Content>
          <Route path="/" component={Footer} />
        </Layout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
