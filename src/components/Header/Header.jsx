import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

const Header = ({ balance }) => {
  const { currentUser, logout } = useAuth()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">💰 ФинКопилка</h1>
            <p className="text-gray-600 mt-1">
              Добро пожаловать, {currentUser?.email}!
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">{balance} ₽</div>
              <div className="text-sm text-gray-500">Текущий баланс</div>
            </div>
            
            <button 
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200 font-medium"
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header