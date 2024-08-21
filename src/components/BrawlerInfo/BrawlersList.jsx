import { useState } from "react"
import { BrawlersSearch } from "./BrawlersSearch"



export const BrawlersList = () => {

    const [brawlerSeleccionado, setbrawlerSeleccionado] = useState('')

    return (
        <>
            <div className="d-flex justify-content-center mx-auto ">
                <select className="form-select form-select-lg " style={{maxWidth: "300px"}} value={brawlerSeleccionado} onChange={e => setbrawlerSeleccionado(e.target.value)}>
                    <option disabled value="">Elige un Brawler</option>
                    <option value="16000027">8-Bit</option>
                    <option value="16000040">Amber</option>
                    <option value="16000079">Angelo</option>
                    <option value="16000051">Ash</option>
                    <option value="16000006">Barley</option>
                    <option value="16000029">Bea</option>
                    <option value="16000046">Belle</option>
                    <option value="16000082">Berry</option>
                    <option value="16000026">Bibi</option>
                    <option value="16000014">Bo</option>
                    <option value="16000058">Bonnie</option>
                    <option value="16000003">Brock</option>
                    <option value="16000002">Bull</option>
                    <option value="16000062">Buster</option>
                    <option value="16000049">Buzz</option>
                    <option value="16000042">Byron</option>
                    <option value="16000025">Carl</option>
                    <option value="16000074">Charlie</option>
                    <option value="16000063">Chester</option>
                    <option value="16000073">Chuck</option>
                    <option value="16000083">Clancy</option>
                    <option value="16000039">Colette</option>
                    <option value="16000001">Colt</option>
                    <option value="16000070">Cordelius</option>
                    <option value="16000012">Crow</option>
                    <option value="16000018">Darryl</option>
                    <option value="16000071">Doug</option>
                    <option value="16000080">Draco</option>
                    <option value="16000009">Dynamike</option>
                    <option value="16000043">Edgar</option>
                    <option value="16000010">El Primo</option>
                    <option value="16000030">Emz</option>
                    <option value="16000056">Eve</option>
                    <option value="16000054">Fang</option>
                    <option value="16000020">Frank</option>
                    <option value="16000035">Gale</option>
                    <option value="16000021">Gene</option>
                    <option value="16000064">Gray</option>
                    <option value="16000050">Griff</option>
                    <option value="16000048">Grom</option>
                    <option value="16000061">Gus</option>
                    <option value="16000069">Hank</option>
                    <option value="16000034">Jacky</option>
                    <option value="16000057">Janet</option>
                    <option value="16000007">Jessie</option>
                    <option value="16000076">Kit</option>
                    <option value="16000077">Larry & Lawrie</option>
                    <option value="16000023">Leon</option>
                    <option value="16000081">Lily</option>
                    <option value="16000053">Lola</option>
                    <option value="16000041">Lou</option>
                    <option value="16000068">Maisie</option>
                    <option value="16000065">Mandy</option>
                    <option value="16000032">Max</option>
                    <option value="16000052">Meg</option>
                    <option value="16000078">Melodie</option>
                    <option value="16000075">Mico</option>
                    <option value="16000011">Mortis</option>
                    <option value="16000031">Mr. P</option>
                    <option value="16000036">Nani</option>
                    <option value="16000008">Nita</option>
                    <option value="16000059">Otis</option>
                    <option value="16000016">Pam</option>
                    <option value="16000072">Pearl</option>
                    <option value="16000019">Penny</option>
                    <option value="16000015">Piper</option>
                    <option value="16000013">Poco</option>
                    <option value="16000066">R-T</option>
                    <option value="16000004">Rico</option>
                    <option value="16000024">Rosa</option>
                    <option value="16000044">Ruffs</option>
                    <option value="16000060">Sam</option>
                    <option value="16000028">Sandy</option>
                    <option value="16000000">Shelly</option>
                    <option value="16000005">Spike</option>
                    <option value="16000037">Sprout</option>
                    <option value="16000047">Squeak</option>
                    <option value="16000045">Stu</option>
                    <option value="16000038">Surge</option>
                    <option value="16000017">Tara</option>
                    <option value="16000022">Tick</option>
                    <option value="16000067">Willow</option>
                </select>

            </div>

            <BrawlersSearch id={brawlerSeleccionado} />

        </>
    )
}
