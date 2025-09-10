import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-xl">
        <div className="flex justify-center items-center space-x-8 mb-8">
          <a 
            href="https://vite.dev" 
            target="_blank" 
            className="transition-transform hover:scale-110"
          >
            <img src={viteLogo} className="h-20 w-20" alt="Vite logo" />
          </a>
          <a 
            href="https://react.dev" 
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img src={reactLogo} className="h-20 w-20 animate-spin" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Vite + React + TypeScript + Tailwind
        </h1>
        
        <div className="text-center space-y-6">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200 transform hover:scale-105"
          >
            Count is {count}
          </button>
          
          <p className="text-gray-600">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/App.tsx</code> and save to test HMR
          </p>
          
          <p className="text-sm text-gray-500">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
