import { HomeFind } from "./components/HomeFind/HomeFind"
import { HomeTabs } from "./components/HomeTabs/HomeTabs"
import './Home.scss';

export const Home = () => {
  return (
    <div className="home">
    <HomeFind />
    <HomeTabs />
    </div>
  )
}
