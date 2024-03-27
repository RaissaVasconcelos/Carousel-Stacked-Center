import ResponsiveCarousel from "./Carrousel-Stacked-Center"

function App() {
  return (
    <div
      style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div
        style={{ width: '550px' }}
      >
        <ResponsiveCarousel />
      </div>
    </div>
  )
}

export default App
