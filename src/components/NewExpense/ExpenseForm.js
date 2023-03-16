import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredName, setAddedByName] = useState('');
  const [isValid, setIsValid] = useState(true);
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredTitle(event.target.value);
    
  };

  const amountChangeHandler = (event) => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredDate(event.target.value);
    
  };

  const addedByChangeHandler = (event) =>{
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setAddedByName(event.target.value);
  }

  const totalamountHandler = () => {
    console.log('Clicked!'+enteredAmount)
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let error = '';
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      name: enteredName,
      date: new Date(enteredDate),
    };
    if(enteredAmount.trim().length===0){
      setIsValid(false);
      return; 
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setAddedByName('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className={`new-expense__control ${!isValid? 'invalid':''}`}>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={`new-expense__control ${!isValid? 'invalid':''}`}> 
        {/* We can also change styles dynamically by using styled **components and dynamic props**. 
        We have to use css as used in newExpense and give conditions ## color: ${props => (props.invalid? 'red':'black')} ; */}
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={`new-expense__control ${!isValid? 'invalid':''}`}>
          <label>Added By</label>
          <input
            type='text'
            value={enteredName}
            onChange={addedByChangeHandler}
          />
        </div>
        <div className={`new-expense__control ${!isValid? 'invalid':''}`}>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={totalamountHandler}>Total Amount</button>  
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;