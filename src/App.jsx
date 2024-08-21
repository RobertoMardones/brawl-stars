import { BrawlersList } from "./components/BrawlerInfo/BrawlersList"
import { MapList } from "./components/MapInfo/MapList"
import { Footer } from "./components/Footer"
import { EventList } from "./components/EventInfo/EventList"

function App() {


  return (
    <div>
      <h1 className="text-center fw-bold " id="title">Brawl Stats</h1>
      <h3 className="text-center mb-3" id="description">Selecciona a un brawler para ver una breve descripción</h3>

      <div>
        <BrawlersList />
      </div>

      <h2 className="text-center fw-bold " id="title">Game Mode Map-Pool</h2>
      <h3 className="text-center mb-3" id="description">Selecciona un modo de juego para ver su rotación de mapas</h3>

      <div>
        <MapList/>
      </div>

      <h2 className="text-center fw-bold " id="title">Events (Active - Upcoming)</h2>
      <h3 className="text-center mb-3" id="description">Selecciona los mapas activos o próximos</h3>

      <div>
        <EventList/>
      </div>

      <Footer/>
      
    </div>

  )
}

export default App
