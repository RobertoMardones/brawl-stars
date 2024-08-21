import { useEffect, useState } from "react"
import { EventCard } from "./EventCard";



export const EventSearch = ({ eventSeleccionado }) => {
    const [eventInfo, seteventInfo] = useState([])

    useEffect(() => {

        fetch(`https://api.brawlify.com/v1/events`)
            .then((response) => response.json())
            .then((data) => {
                const events = eventSeleccionado == 'active' ? data.active : data.upcoming;
                seteventInfo(events);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [eventSeleccionado]);


    return (
        <EventCard eventInfo={eventInfo} />

    )

}

