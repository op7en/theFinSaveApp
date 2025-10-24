import React, { useState } from 'react'

const TransactionItem = ({ transaction, onDeleteTransaction, categoryIcons, categoryCodeMCC }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const getCategoryIcon = (category, type) => {
    return categoryIcons[category] || (type === 'income' ? '💰' : '🛒')
  }

  const getMccCode = (category) => {
    return categoryCodeMCC[category] || 'MCC: Не указан'
  }

  return (
    <div className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all hover:shadow-md ${
      transaction.type === 'income' 
        ? 'bg-green-50 border-green-200 hover:border-green-300' 
        : 'bg-red-50 border-red-200 hover:border-red-300'
    }`}>
      <div className="flex items-center space-x-4">
        {/* Контейнер для иконки с tooltip */}
        <div 
          className="relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
            transaction.type === 'income' 
              ? 'bg-green-100 hover:bg-green-200' 
              : 'bg-red-100 hover:bg-red-200'
          }`}>
            <span className="text-2xl cursor-help hover:scale-110 transition-transform duration-200">
              {getCategoryIcon(transaction.category, transaction.type)}
            </span>
          </div>
          
          {/* Tooltip с MCC-кодом */}
          <div className={`
            absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
            transition-all duration-200 ease-in-out z-10
            ${showTooltip ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}>
            <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg max-w-xs text-center">
              <div className="font-semibold">{transaction.category}</div>
              <div className="text-gray-300 text-xs mt-1">
                {getMccCode(transaction.category)}
              </div>
              {/* Стрелочка */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
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