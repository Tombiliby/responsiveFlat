import styles from './hello-world.module.scss'

export default function Flat() {
  return (
    <div className='flat'>
      <div className="mainBorder-left"></div>
      <div className="mainBorder-right"></div>
      <div className="mainBorder-top"></div>
      <div className="mainBorder-bottom"></div>

      <div className="livingRoom"></div>
      <div className="bathRoom"></div>
      <div className="bedRoom1"></div>
      <div className="bedRoom2"></div>
      <div className="room"></div>

      <div className="bathRoom-door door-container">
        <div className="door top-right"></div>
      </div>

      {/* BEDROOM1 */}
      <div className="bedRoom1-door door-container">
        <div className="door top-left negative-x"></div>
      </div>
      <div className="bedRoom1-bed bed-container">
        <div className="bed"></div>
      </div>

      {/* BEDROOM2 */}
      <div className="bedRoom2-door door-container">
        <div className="door top-right "></div>
      </div>

      <div className="room-door door-container">
        <div className="door top-right "></div>
      </div>

    </div>
  )
}
