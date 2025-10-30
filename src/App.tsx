import { BrowserRouter as Router, Routes, Route } from "react-router";
import { LanguageProvider } from "./context/LanguageContext";
import { lazy } from "react";
import BlackJack from "./views/games/BlackJack";
import FruitFinder from "./views/games/FruitFinder";
import SpaceBubbles from "./views/games/SpaceBubbles";
import Main from "./shared/layout/Main";
import TrickyBricks from "./views/games/TrickyBricks";
import JungleTreasures from "./views/games/JungleTreasures";
import SunnyBlocks from "./views/games/SunnyBlocks";
import JustBingo from "./views/games/JustBingo";
import Domino from "./views/games/Domino";
import IntoTheDungeon from "./views/games/IntoTheDungeon";
import SolitaireParadise from "./views/games/SolitaireParadise";

const Home = lazy( () => import('./views/Home') )


function App() {

      const helpRoutes = [
        {
          component: <FruitFinder />,
          route: "/fruit-finder"
        },
        {
          component: <BlackJack />,
          route: "/21-blackjack/"
        },
        {
          component: <SpaceBubbles />,
          route: "/space-bubbles/"
        },
        {
          component: <JungleTreasures />,
          route: "/jungle-treasures/"
        },
        {
          component: <TrickyBricks />,
          route: "/tricky-bricks/"
        },
        {
          component: <SunnyBlocks />,
          route: "/sunny-blocks/"
        },
        {
          component: <SolitaireParadise />,
          route: "/solitare/"
        },
        {
          component: <JustBingo />,
          route: "/just-bingo"
        },
        {
          component: <IntoTheDungeon />,
          route: "/into-the-dungeon"
        },
        {
          component: <Domino />,
          route: "/domino"
        },
        {
          component: <BlackJack />,
          route: "/gems-blast"
        },
    ]

  return (
    <Router>
      <LanguageProvider>
        <Main >
          <Routes>
            <Route path="/" index element={<Home/>} /> 

            {
              helpRoutes.map(({ component, route }) =>{
                return <Route
                  path={route}
                  element={component}
                />
              })
            }

          </Routes>
        </Main>
      </LanguageProvider>
    </Router>
  )
}

export default App
