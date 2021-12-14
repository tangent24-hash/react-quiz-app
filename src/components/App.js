import "../styles/App.css";
import Layout from "./Layout";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <Quiz /> */}
        <Result />
      </Layout>
    </div>
  );
}

export default App;
