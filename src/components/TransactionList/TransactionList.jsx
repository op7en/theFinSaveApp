import React from 'react'
import TransactionItem from '../TransactionItem/TransactionItem'

const TransactionList = ({ transactions, onDeleteTransaction, categoryIcons, categoryCodeMCC }) => {
  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <div className="text-gray-500 text-lg">Пока нет операций</div>
          <div className="text-gray-400 text-sm mt-1">Добавьте первую операцию!</div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800">📊 История операций</h3>
        <div className="text-sm text-gray-500">
          {transactions.length} операций
        </div>
      </div>
      
      <div className="space-y-3">
        {transactions.map(transaction => (
          <TransactionItem 
            key={transaction.id}
            transaction={transaction}
            onDeleteTransaction={onDeleteTransaction}
            categoryIcons={categoryIcons}
            categoryCodeMCC={categoryCodeMCC}  // ← ЭТУ СТРОКУ ДОБАВЬ
          />
        ))}
      </div>
    </div>
  )
}

export default TransactionList