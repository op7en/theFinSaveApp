import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import StatsCards from './components/StatsCards/StatsCards'
import TransactionForm from './components/TransactionForm/TransactionForm'
import TransactionList from './components/TransactionList/TransactionList'

const App = () => {
  const [transactions, setTransactions] = useState([])
  const [balance, setBalance] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)

  // Загрузка из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fincopilka-transactions')
    if (saved) {
      const parsed = JSON.parse(saved)
      setTransactions(parsed)
      calculateTotals(parsed)
    }
  }, [])

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem('fincopilka-transactions', JSON.stringify(transactions))
    calculateTotals(transactions)
  }, [transactions])

  const calculateTotals = (transactions) => {
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0)
    
    const expenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0)

    setTotalIncome(income)
    setTotalExpenses(expenses)
    setBalance(income - expenses)
  }

  const addTransaction = (amount, type, category, description) => {
    const newTransaction = {
      id: Date.now(),
      amount: Number(amount),
      type,
      category,
      description: description || category,
      date: new Date().toLocaleDateString('ru-RU'),
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    }
    
    setTransactions(prev => [newTransaction, ...prev])
  }

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id))
  }

  const categories = {
    income: ['Зарплата', 'Стипендия', 'Подработка', 'Подарок', 'Прочее'],
    expense: ['Еда', 'Транспорт', 'Развлечения', 'Одежда', 'Жилье', 'Здоровье', 'Образование', 'Прочее']
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header balance={balance} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <StatsCards 
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          balance={balance}
        />

        <TransactionForm 
          onAddTransaction={addTransaction} 
          categories={categories}
        />

        <TransactionList 
          transactions={transactions}
          onDeleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  )
}

export default App