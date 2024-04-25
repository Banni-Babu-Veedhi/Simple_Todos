import "./styles.css";
import { Component } from "react";
import initialTodosList from "./Components/Data/Details.js";
import MaleList from "./Components/TodoItems/TodoItems.js";

class App extends Component {
  state = { list: initialTodosList };
  deletee = (id) => {
    const { list } = this.state;
    const filterData = list.filter((i) => i.id !== id);
    this.setState({ list: filterData });
  };

  render() {
    const { list, onDeleteList } = this.state;
    let items = list.length > 0;

    return (
      <div className="App">
        <div className="f">
          <h1 className="h">Simple Todos</h1>
          <ul className="ull">
            {items &&
              list.map((i) => (
                <MaleList data={i} key={i.id} deletee={this.deletee} />
              ))}
            {!items && (
              <div>
                <p>No Items</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
