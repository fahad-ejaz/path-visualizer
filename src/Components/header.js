import { Fragment } from 'react'

export default function Header() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1 text-center">
        <h2 className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400
        text-8xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Path Finding Algorithm Visualizer
        </h2>
      </div>
    </div>
  )
}