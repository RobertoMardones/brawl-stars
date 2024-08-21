import { useState } from "react"
import { MapSearch } from "./MapSearch"

export const MapList = () => {
    const [mapaSeleccionado, setmapaSeleccionado] = useState('')
    return (
        <>
            <div className="d-flex justify-content-center mx-auto ">
                <select className="form-select form-select-lg" style={{ maxWidth: "300px" }} value={mapaSeleccionado} onChange={e => setmapaSeleccionado(e.target.value)} >
                    <option disabled value="">Elige un Modo de Juego</option>

                    <option value="Gem-Grab">Gem Grab</option>
                    <option value="Heist">Heist</option>
                    <option value="Bounty">Bounty</option>
                    <option value="Brawl-Ball">Brawl Ball</option>
                    <option value="Solo-Showdown">Solo Showdown</option>
                    <option value="Duo-Showdown">Duo Showdown</option>
                    <option value="Hot-Zone">HotZone</option>
                    <option value="Knockout">Knockout</option>
                    <option value="Duels">Duels</option>
                    <option value="Wipeout">Wipeout</option>
                    <option value="Wipeout-5v5">Wipeout 5v5</option>
                    <option value="Brawl-Ball-5v5">Brawl Ball 5v5</option>
                    <option value="Gem-Grab-5v5">Gem Grab 5v5</option>
                    <option value="Trophy-Escape">Trophy Escape</option>
                    <option value="Knockout-5v5">Knockout 5v5</option>
                    <option value="Paint-Brawl">Paint Brawl</option>
                    <option value="Trio-Showdown">Trio Showdown</option>
                    <option value="Drum-Roll">Drum Roll</option>
                    <option value="Mirror-Match">Mirror Match</option>

                </select>
            </div>

            <MapSearch gameMode={mapaSeleccionado} />
        </>

    )
}
