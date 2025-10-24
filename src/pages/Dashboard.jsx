import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import StatsCards from '../components/StatsCards/StatsCards'
import TransactionForm from '../components/TransactionForm/TransactionForm'
import TransactionList from '../components/TransactionList/TransactionList'

const Dashboard = () => {
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
    income: ['Зарплата', 'Стипендия', 'Подработка', 'Подарок', 'Прочеe'],
    expense: ['Еда', "Супермаркеты", 'Фастфуд', 'Салон красоты', 'Кино и театры', 'Транспорт', 'Развлечения', 'Одежда', 'Жилье', 'Здоровье', 'Образование', 'Прочее']
  }

  const categoryIcons = {
    'Зарплата': '💼', 'Стипендия': '🎓', 'Подработка': '💻', 'Подарок': '🎁', 'Прочее': '💰',
    'Еда': '🥪', 'Фастфуд': '🍕', 'Супермаркеты': '🛒', 'Транспорт': '🚗', 'Кино и театры': '🎬',
    'Развлечения': '🥳', 'Одежда': '👕', 'Жилье': '🏠', 'Здоровье': '🏥', 'Образование': '📚',
    'Салон красоты': '💇', 'Прочее': '📦'
  }

  const categoryCodeMCC = {
    'Зарплата': 'MCC: 9399 (Госуслуги)', 'Стипендия': 'MCC: 8299 (Образовательные услуги)',
    'Подработка': 'MCC: 7399 (Бизнес услуги)', 'Подарок': 'MCC: 5947 (Подарки)',
    'Супермаркеты': 'MCC: 5411 (Супермаркеты)', 'Фастфуд': 'MCC: 5814 (Фастфуд)',
    'Еда': 'MCC: 5499 (Продукты)', 'Транспорт': 'MCC: 4111 (Транспорт)',
    'Кино и театры': 'MCC: 7832 (Кинотеатры)', 'Развлечения': 'MCC: 7999 (Развлечения)',
    'Одежда': 'MCC: 5651 (Одежда)', 'Жилье': 'MCC: 6513 (Аренда жилья)',
    'Здоровье': 'MCC: 8011 (Медицинские услуги)', 'Образование': 'MCC: 8299 (Образовательные услуги)',
    'Салон красоты': 'MCC: 7230 (Парикмахерские)', 'Прочее': 'MCC: 9399 (Прочие услуги)'
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
          categoryIcons={categoryIcons}
          categoryCodeMCC={categoryCodeMCC}
        />
      </div>
    </div>
  )
}

export default Dashboard