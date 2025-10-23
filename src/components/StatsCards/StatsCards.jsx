import React from 'react'

const StatsCards = ({ totalIncome, totalExpenses, balance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
        <div className="text-green-500 text-sm font-medium mb-1">ДОХОДЫ</div>
        <div className="text-2xl font-bold text-gray-800">+{totalIncome} ₽</div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
        <div className="text-red-500 text-sm font-medium mb-1">РАСХОДЫ</div>
        <div className="text-2xl font-bold text-gray-800">-{totalExpenses} ₽</div>
      </div>
      
      <div className={`rounded-2xl p-6 shadow-sm border ${
        balance >= 0 
          ? 'bg-green-50 border-green-200' 
          : 'bg-red-50 border-red-200'
      }`}>
        <div className="text-gray-600 text-sm font-medium mb-1">БАЛАНС</div>
        <div className={`text-2xl font-bold ${
          balance >= 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {balance >= 0 ? '+' : ''}{balance} ₽
        </div>
      </div>
    </div>
  )
}

export default StatsCards