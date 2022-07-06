import React, { Component } from 'react';
import ExpenseServices from '../services/ExpenseServices'
import { withRouter } from '../components/withRouter';

class ListExpenseComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
        }
        this.addExpense = this.addExpense.bind(this);
        this.updateExpense = this.updateExpense.bind(this);
        this.deleteExpense = this.deleteExpense.bind(this);
    }

    addExpense() {
        this.props.navigate('/add-expense/_add')
    }

    updateExpense(id) {
        this.props.navigate(`/add-expense/${id}`);
    }

    deleteExpense(id) {
        ExpenseServices.deleteExpense(id).then((res) => {
            this.setState({expenses: this.state.expenses.filter(expense => expense.id !== id)}) ;
        })
    }

    componentDidMount() {
        ExpenseServices.getExpenses().then((res) => {
            this.setState({expenses: res.data});
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">List of Expenses</h2>
                <button className="btn btn-outline-primary" onClick={this.addExpense}>Add Expense</button>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Expense Category</th>
                                <th>Expense Description</th>
                                <th>Date of Expense</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.expenses.map(
                                    expense =>
                                    <tr key={expense.id}>
                                        <td>{expense.category}</td>
                                        <td>{expense.description}</td>
                                        <td>{expense.expensedate}</td>
                                        <td>{expense.amount}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => this.updateExpense(expense.id)}>Update</button>
                                            <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={() => this.deleteExpense(expense.id)}>Delete</button>
                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(ListExpenseComponent);