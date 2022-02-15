import React from 'react'
import '../../css/home.css'
import { Link } from 'react-router-dom'
import * as api from '../../api/api'
import { useEffect, useState } from 'react'

export default function Home() {
    const [beds, setBeds] = useState([]);
    const [sofas, setSofsa] = useState([]);
    const [tvstands, setTvstands] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);




    console.log(beds);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const bedsResults = await api.loadBeds();
                const sofsaResults = await api.loadSofsa();
                const tvstandResults = await api.loadTvstands();

                console.log(bedsResults.data.data)
                setBeds(bedsResults.data.data);
                setSofsa(sofsaResults.data.data);
                setTvstands(tvstandResults.data.data);


            } catch (err) {
                console.log(err);
            }

        }
        fetchData();
    }, [])



    return (

        <>


            <div>
                <div class="columns hero">
                    <div class="column is-half"><div class="field">
                        <label class="label">Product Title</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" />
                        </div>
                    </div>


                        <div class="field">
                            <label class="label">Category</label>
                            <div class="control">
                                <div class="select">
                                    <select>
                                        <option>Beds</option>
                                        <option>Sofas</option>
                                        <option>TV stands</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Description</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Textarea"></textarea>
                            </div>
                        </div>


                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-link">Submit</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="columns">
                    <div className="top-part">
                        <div className="column left">
                            Featured Beds
                        </div>
                        <div className="column right">
                            <button className="button is-primary"><Link to={`viewall/beds`}>View All</Link></button>
                        </div>
                    </div>

                    <div className="prod-sec">
                        {beds.map((bed, index) => (

                            <div className="card" key={index} onClick={() => setModalIsOpen(true)}>

                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src='https://bulma.io/images/placeholders/1280x960.png' alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{bed.attributes.title}</p>
                                            <p className="subtitle is-6">{bed.attributes.price}/- Kes</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        <p className='trank'>`{bed.attributes.description}`...</p>
                                        <button class="button is-danger is-small">Delete</button>
                                    </div>
                                </div>
                            </div>

                        ))}


                    </div>


                </div>

                <div className="columns">
                    <div className="top-part">
                        <div className="column left">
                            Featured Sofas
                        </div>
                        <div className="column right">
                            <button className="button is-primary"><Link to={`viewall/beds`}>View All</Link></button>
                        </div>
                    </div>

                    <div className="prod-sec">
                        {sofas.map((sofa, index) => (

                            <div className="card" key={index}>
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src='https://bulma.io/images/placeholders/1280x960.png' alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{sofa.attributes.title}</p>
                                            <p className="subtitle is-6">{sofa.attributes.price}/- Kes</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        <p className='trank'>`{sofa.attributes.description}`...</p>
                                        <button class="button is-danger is-small">Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>


                </div>

                <div className="columns">
                    <div className="top-part">
                        <div className="column left">
                            Featured TV Stands
                        </div>
                        <div className="column right">
                            <button className="button is-primary"><Link to={`viewall/beds`}>View All</Link></button>
                        </div>
                    </div>

                    <div className="prod-sec">
                        {tvstands.map((tvstand, index) => (

                            <div className="card" key={index}>
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src='https://bulma.io/images/placeholders/1280x960.png' alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{tvstand.attributes.title}</p>
                                            <p className="subtitle is-6">{tvstand.attributes.price}/- Kes</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        <p className='trank'>`{tvstand.attributes.description}`...</p>
                                        <button class="button is-danger is-small">Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>


                </div>


            </div>
        </>
    )
}
