import "../styles/App.css";
import Layout from "./Layout";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Signup /> */}
        {/* <Login /> */}
        <Quiz />
      </Layout>
    </div>
  );
}

export default App;
