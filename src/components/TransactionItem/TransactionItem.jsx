import React from 'react'

const TransactionItem = ({ transaction, onDeleteTransaction }) => {
  return (
    <div 
      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all hover:shadow-md ${
        transaction.type === 'income' 
          ? 'bg-green-50 border-green-200 hover:border-green-300' 
          : 'bg-red-50 border-red-200 hover:border-red-300'
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
        }`}>
          <span className="text-2xl">
            {transaction.type === 'income' ? '💸' : '🛒'}
          </span>
        </div>
        
        <div>
          <div className="font-semibold text-gray-800">{transaction.description}</div>
          <div className="text-sm text-gray-500 flex items-center space-x-2">
            <span>{transaction.category}</span>
            <span>•</span>
            <span>{transaction.date} в {transaction.time}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className={`text-xl font-bold ${
          transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
        }`}>
          {transaction.type === 'income' ? '+' : '-'}{transaction.amount} ₽
        </div>
        
        <button 
          onClick={() => onDeleteTransaction(transaction.id)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-red-500 transition duration-200"
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default TransactionItem