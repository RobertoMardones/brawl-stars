import { useState } from "react"
import { EventSearch } from "./EventSearch"


export const EventList = () => {
    const [eventSeleccionado, seteventSeleccionado] = useState('active')

    return (
        <>
            <div className="d-flex justify-content-center mx-auto">
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

                    <input type="radio" className="btn-check" name="btnradio" id="active" autoComplete="off" checked={eventSeleccionado == 'active'} onChange={e => seteventSeleccionado(e.target.id)} />
                    <label className="btn btn-outline-info btn-lg" htmlFor="active">Active</label>

                    <input type="radio" className="btn-check" name="btnradio" id="upcoming" autoComplete="off" checked={eventSeleccionado == 'upcoming'} onChange={e => seteventSeleccionado(e.target.id)}/>
                    <label className="btn btn-outline-info btn-lg" htmlFor="upcoming">Upcoming</label>

                </div>

            </div>

            <EventSearch eventSeleccionado={eventSeleccionado} />
        </>

    )
}
