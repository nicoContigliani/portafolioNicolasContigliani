import React, { useState } from 'react'

const ProyectE = () => {
    const [pagina, setPagina] = useState("true")

    return (
        <div>
            <div className="container">
                <div className="co">


                    <h1 className="text-center">Proyectos de estudio</h1><br /><br />

                    <button className="btn btn-primary" onClick={() => setPagina(false)}>
                        Primera Pagina
                    </button>
                    <button className="btn btn-primary" onClick={() => setPagina(true)}>
                        Segunda Pagina
                    </button>

                    {
                        pagina ? (
                            <div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-6 ">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <h5>Sistema Clima</h5>

                                                    <img src="https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fweather-the-world.netlify.app&s=4&e=h" alt="..." />
                                                </div>

                                                <div class="flex-grow-1 ms-3">
                                                    <div className="container">
                                                        <br /><br />
                                                        <h5>
                                                            Descripción

                                                        </h5>
                                                        <span>Se ingresa las siglas de la ciudad y la api responde con la temperatura</span>

                                                        <div data-role="gradient-box">

                                                        </div>
                                                        <h5>Tecnologías Utilizadas

                                                        </h5>
                                                        <ul data-role="drag-items">
                                                            <li>React.js</li>
                                                            <li>ApiClima</li>


                                                        </ul>
                                                        <h5>
                                                            respositorio:
                                                        </h5>
                                                        https://github.com/nicoContigliani/clima_React
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 ">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <h5>Crimenes UK</h5>

                                                    <img src="https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fcrimen-uk.netlify.app&s=4&e=h" alt="..." />
                                                </div>

                                                <div class="flex-grow-1 ms-3">
                                                    <div className="container">
                                                        <br /><br />
                                                        <h5>
                                                            Descripción

                                                        </h5>
                                                        <span>Se ingresa en el mapa y se puede ver puntos gps de donde se produjo crimenes</span>

                                                        <div data-role="gradient-box">

                                                        </div>
                                                        <h5>Tecnologías Utilizadas

                                                        </h5>
                                                        <ul data-role="drag-items">
                                                            <li>React.js</li>
                                                            <li>ApiCrimenes</li>


                                                        </ul>
                                                        <h5>
                                                            respositorio:
                                                        </h5>
                                                        https://github.com/nicoContigliani/reactleafle
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-6 ">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <h5>Menú Restaurante</h5>

                                                    <img src="https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fmenu-restaurant.netlify.app&s=4&e=h" alt="..." />
                                                </div>

                                                <div class="flex-grow-1 ms-3">
                                                    <div className="container">
                                                        <br /><br />
                                                        <h5>
                                                            Descripción

                                                        </h5>
                                                        <span>Menú Virtual </span>

                                                        <div data-role="gradient-box">

                                                        </div>
                                                        <h5>Tecnologías Utilizadas

                                                        </h5>
                                                        <ul data-role="drag-items">
                                                            <li>Html</li>
                                                            <li>Javascript</li>


                                                        </ul>
                                                        <h5>
                                                            respositorio:
                                                        </h5>
                                                        https://github.com/nicoContigliani/clima_React
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5 ">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <h5>Scraping Node</h5>

                                                    <img src="https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fgithub.com%2FnicoContigliani%2FscrapingNode&s=4&e=m" alt="..." />
                                                </div>

                                                <div class="flex-grow-1 ms-3">
                                                    <div className="container">
                                                        <br /><br />
                                                        <h5>
                                                            Descripción

                                                        </h5>
                                                        <span>Se captura datos de una pagina web</span>

                                                        <div data-role="gradient-box">

                                                        </div>
                                                        <h5>Tecnologías Utilizadas

                                                        </h5>
                                                        <ul data-role="drag-items">
                                                            <li>Node</li>
                                                            <li>Express</li>
                                                            <li>Ejs</li>


                                                        </ul>
                                                        <h5>
                                                            respositorio:
                                                        </h5>
                                                        https://github.com/nicoContigliani/scrapingNode
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div>
                                Sin contenido aun
                              

                              

                            </div>
                        )
                    }






                </div>


                <br />




            </div>

            <hr />


        </div>
    )
}

export default ProyectE
