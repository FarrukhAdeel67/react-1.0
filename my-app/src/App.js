import "./App.css";
import Header from './MyComponents/Header'
import {Footer} from './MyComponents/Footer'
import {Todos} from './MyComponents/Todos'

function App() {
  let todos =[
    {
      sno: 1,
      title:"Go to the market",
      discription: "this job needs to be done before the deadline."
    },
    {
      sno: 2,
      title:"Go to the School",
      discription: "this job needs to be done before the deadline."
    },
    {
      sno: 3,
      title:"Go to the College",
      discription: "this job needs to be done before the deadline."
    }
  ]
  return (
    <>
    <Header title = "MyTodosList" searchBar = {true}/>
    <Todos todos = {todos}/>
    <Footer/>
    </>
  );
}

export default App;
