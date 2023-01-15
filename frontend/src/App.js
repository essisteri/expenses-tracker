import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [newDate, setNewDate] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newShop, setNewShop] = useState("");

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/api/expenses/`
      );
      if (response.data.length > 0) {
        setExpenses(response.data);
      }
    } catch (e) {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Deleting a expense
  const deleteExpense = (id) => {
    if (window.confirm("Are you sure to delete an expense?")) {
      axios
        .delete(`${process.env.REACT_APP_BACKEND}/api/expenses/${id}`)
        .then(() => {
          let response = expenses.filter((item) => id !== item.id);
          setExpenses(response);
        });
    }
  };

  //Handling submit / adding a expense
  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseItem = {
      date: newDate,
      amount: newAmount,
      category: newCategory,
      shop: newShop,
    };

    axios
      .post(`${process.env.REACT_APP_BACKEND}/api/expenses`, expenseItem)
      .then((response) => {
        setExpenses(expenses.concat(response.data));
        setNewDate("");
        setNewAmount("");
        setNewCategory("");
        setNewShop("");
      });
  };

  return (
    <div className="expenses">
      <h1>Expenses</h1>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            required
            pattern="\d{4}-\d{2}-\d{2}"
            placeholder="YYYY-MM-DD"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <br />
        <div className="row">
          <input
            required
            pattern="^\d*(\.\d{0,2})?$"
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
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{expense.date}</td>

                <td>{expense.amount}</td>

                <td>{expense.shop}</td>

                <td>{expense.category}</td>

                <td>
                  <button
                    className="btn btn-sm btn-danger me-1"
                    onClick={() => deleteExpense(expense.id)}
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
