import React from 'react'

const Proyects = () => {
    return (
        <div>
            <div className="container">
                <div className="co centrado">

                    <h1 className="text-center">Proyectos Freelancer</h1><br />

                    <div className="row">
                        <div className="col-sm-6">
                            <div class="flex-shrink-0">
                                <h5>Sistema Seguros</h5>
                                <iframe width="800" height="300" src="https://www.youtube.com/embed/Z13lBykzBCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="container">

                                <h5>
                                    Descripción

                                </h5>
                                <span>Se puede dar de alta usuario y poliza con un sistema guiado.Posee el envio de mensajes por Wathssapp y correos Gmail</span>

                                <div data-role="gradient-box">

                                </div>
                                <h5>Tecnologías Utilizadas

                                </h5>
                                <ul data-role="drag-items">
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>Postgres</li>
                                    <li>React.js Hoocks</li>
                                    <li>Bootstrap</li>
                                    <li>Material UI</li>
                                    <li>Bootstrap</li>
                                    <li>NodeMail</li>
                                    <li>Api Wathsapp</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Proyects
