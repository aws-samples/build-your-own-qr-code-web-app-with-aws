import Table from "./components/Table";
import Button from "./components/Button";
import axios from 'axios';
import { useEffect, useState} from "react";
import "./Hopper.css";

function Home() { 
  
  const [dataTable, setDataTable] = useState([]);

  /* 
  ####################
  ADD API HERE: 
  ####################
  */
  
  useEffect(() => {
    axios('API ENDPOINT')
    .then(res => setDataTable(res.data))
    .catch(err => console.log(err))
  }, []);
  
  /*
  console.log('DynamoDB Table Data:')
  console.log(dataTable)
  */

  const column = [
    {heading: 'Full-Name', value:'name'},
    {heading: 'Email', value: 'email'},
    {heading: 'Title', value: 'title'},
  ]

/* here we are passing in dataTable data and column const into the table component */
  return (
    <div>
      <img class="ImageHeader" src="ghc.png"></img>
      <h1> Fellow Hoppers</h1>
      <Table data={dataTable} column={column}/>
      <Button />
    </div>
  );
}
export default Home;