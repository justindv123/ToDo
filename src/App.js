import logo from './logo.svg';
import React from 'react';
import './App.css';
import Lists from "./components/Lists";
import{
  BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ListPage from "./Pages/ListPage";

let localData = { lists: []}


function App() {

  const [lists, setListsState] = React.useState(localData.lists);
  const [tasks, setTasks] = React.useState([])

    function addTask(task){
      setTasks([...tasks, task]);
    }

    function removeTask(id){
      const tempTasks = tasks.slice();
      const index = tempTasks.findIndex(task => task.id ===id);
      tempTasks.slice(index,1);
      setTasks(tempTasks);
    }

  function addList(list) {
    setLists([...lists, list]);
  }

  function setLists(lists_) {
    setListsState(lists_);
  }

  function removeList(id) {
    const tempLists = lists.slice();
  }

  return (
      <Router>
      <Lists data={lists} onAddList={addList} onRemoveList={removeList} />
        <Switch>

          {lists.map((list) => (
              <Route path={"/" + lists.id}>
                <ListPage list={list} tasks={tasks} onRemoveTask={removeTask} onAddTask={addTask}/>
              </Route>
          ))}

          <Route>
            <p>Homepage</p>
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
