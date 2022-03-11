import Flat from '../components/Flat'

export default function Home() {
  return (
    <div className="app">
      <Flat />
      <div className="bathRoom-door door-container">
        <div className="door top-left"></div>
      </div>
      <div className="door-container">
      <div className="door top-right"></div>
      </div>
      <div className="door-container">
      <div className="door bottom-left"></div>
      </div>
      <div className="door-container">
      <div className="door bottom-right"></div>
      </div>
    </div>
  )
}
