import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

export default function App() {
const pages = import.meta.glob('./pages/*.jsx', { eager: true })

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default
  }
})
  return (
    <h1>NearMe</h1>
  )
}
