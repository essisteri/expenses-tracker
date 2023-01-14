import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newDate, setNewDate] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const [newShop, setNewShop] = useState("");

  //Fetchin data from json-server
  const fetchData = async () => {
    try {
      let response = await axios.get(
        "https://expences-app-essi.onrender.com/api/expenses"
      );
      if (response.data.length > 0) {
        setTasks(response.data);
      }
    } catch (e) {
      console.log("Virhe");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Deleting a task
  const deleteTask = (id) => {
    if (window.confirm("Haluatko varmasti poistaa tehtävän?")) {
      axios
        .delete(`https://expences-app-essi.onrender.com/api/expenses/${id}`)
        .then(() => {
          let response = tasks.filter((item) => id !== item.id);
          setTasks(response);
        });
    }
  };

  //Handling submit / adding a task
  const handleSubmit = (e) => {
    e.preventDefault();

    const taskItem = {
      date: newDate,
      amount: newAmount,
      category: newCategory,
      shop: newShop,
    };

    axios
      .post("https://expences-app-essi.onrender.com/api/expenses", taskItem)
      .then((response) => {
        setTasks(tasks.concat(response.data));
        setNewDate("");
        setNewAmount("");
        setNewCategory("");
        setNewShop("");
      });
  };

  return (
    <div className="tasks">
      <h1>Expenses</h1>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            required
            placeholder="Date YYYY-MM-DD"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <br />
        <div className="row">
          <input
            required
            placeholder="Amount 123,89"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <br />
        <div className="row">
          <input
            required
            placeholder="Shop"
            value={newShop}
            onChange={(e) => setNewShop(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <br />
        <div className="row">
          <input
            required
            placeholder="Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <br />
        <div className="col-auto">
          <button className="btn btn-lg btn-success">Add expense</button>
        </div>
      </form>
      <br />

      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Shop</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.date}</td>

                <td>{task.amount}</td>

                <td>{task.shop}</td>

                <td>{task.category}</td>

                <td>
                  <button
                    className="btn btn-sm btn-danger me-1"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;