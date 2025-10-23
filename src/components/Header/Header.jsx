import React from 'react'

const Header = ({ balance }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">💰 ФинКопилка</h1>
            <p className="text-gray-600 mt-1">Твой личный финансовый помощник</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-800">{balance} ₽</div>
            <div className="text-sm text-gray-500">Текущий баланс</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header