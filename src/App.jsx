import Hero from './components/v1/Hero'
import CardBarras from './components/CardBarras'
import GridSystems from './components/GridSystems'

function App() {
  return (
    <section className="bg-slate-300">
      <article className="w-full max-w-6xl mx-auto min-h-screen bg-slate-800">
        <Hero />
        <GridSystems />
        <CardBarras />
        <CardBarras />
      </article>
    </section>
  )
}

export default App
