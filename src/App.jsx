import "./App.css";
import CardModel from "./components/CardModel";
import products from "./proudct";
import User from "./components/User";

function App(props) {
  let username = "";
  console.log(username);
  return (
    <>
      <div id="all">
        <div id="container">
          <div id="item">
            <CardModel data={props} />
          </div>

          <div id="item">
            <User />
          </div>
        </div>
      </div>
    </>
  );
}

App.defaultProps = products;

export default App;
