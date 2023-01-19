import styles from "./hello-world.module.scss";
import Bed from "./Bed";
import Toilet from "./Toilet";
import Washbasin from "./Washbasin";
import DiningTable from "./DiningTable";
import Lounge from "./Lounge";
import WorkingPlan from "./WorkingPlan";

export default function Flat() {
  return (
    <div className="flat">
      <div className="mainBorder-left"></div>
      <div className="mainBorder-right"></div>
      <div className="mainBorder-top"></div>
      <div className="mainBorder-bottom"></div>

      <div className="livingRoom"></div>
      <div className="bathRoom"></div>
      <div className="bedRoom1"></div>
      <div className="bedRoom2"></div>
      <div className="room"></div>

      {/* LIVINGROOM */}
      <div className="livingRoom-diningTable diningTable-container">
        <DiningTable className="" />
      </div>
      <div className="livingRoom-lounge lounge-container">
        <Lounge className="" />
      </div>
      <div className="livingRoom-workingPlan workingPlan-container">
        <WorkingPlan />
      </div>

      {/* BATHROOM */}
      <div className="bathRoom-door door-container">
        <div className="door top-right"></div>
      </div>
      <div className="bathRoom-toilet toilet-container">
        <Toilet className="bottom" />
      </div>
      <div className="bathRoom-washbasin washbasin-container">
        <Washbasin className="bottom" />
      </div>

      {/* BEDROOM1 */}
      <div className="bedRoom1-door door-container">
        <div className="door top-left negative-x"></div>
      </div>
      <div className="bedRoom1-bed bed-container">
        <Bed />
      </div>
      {/* BEDROOM2 */}
      <div className="bedRoom2-door door-container">
        <div className="door top-right "></div>
      </div>
      <div className="bedRoom2-bed bed-container">
        <Bed className="single right" />
      </div>

      <div className="room-door door-container">
        <div className="door top-right "></div>
      </div>
    </div>
  );
}
