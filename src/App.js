import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout"
import Main from "./main/Main"
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/">
          <Main/>
        </Route>
      </Layout>
    </div>
  );
}

export default App;
