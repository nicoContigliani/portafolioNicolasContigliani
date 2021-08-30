import React from 'react'
import { motion } from "framer-motion"


const Skill = () => {
    return (
        <div>
            <div className="centrado">
                <div className="co">

                    <h2>Habilidades Personales</h2>
                    Autodidacta,
                    Creativo,
                    Organizado y
                    Emprendedor
                    <hr />
                    <h2>Habilidades Profesionales</h2>
                    <div className="row">
                        <motion.div className="col-sm-6"
                            animate={{
                                x: 200,
                                y: 0,
                                scale: 1,
                                rotate: 0,
                                borderRadius: "100%"
                            }}
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: 'tween',
                                duration: 1
                            }}
                        ><br />
                            <h5>
                                Back End
                            </h5>
                            Node.js
                            <br /><br />
                            <h5>
                                Front End
                            </h5>
                            ES6, MAterial UI, Bootstrap,Metro <br />
                            Figma,Frame Motion y React.js(Hooks), Jest

                            <h5>
                                Movile
                            </h5>
                            React Native
                        </motion.div>
                        <motion.div className="col-sm-6"
                            animate={{
                                x: 200,
                                y: 0,
                                scale: 1,
                                rotate: 0,
                                borderRadius: "100%"
                            }}
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: 'tween',
                                duration: 1
                            }}

                        >


                            <h5>
                                Base de Datos
                            </h5>
                            Mysql,Postgres y SQL server

                            <br /><br />
                            <h5>
                                Control de Versión
                            </h5>
                            GitHub
                            <br /><br />
                            <h5>
                                Redes de Datos y S.O.
                            </h5>
                            Cisco,GNU/LINUX,y Windows Server.

                        </motion.div>
                    </div>


                    <br /><br />
                    <br />
                    <hr />
                    <h2>Idiomas</h2>
                    <motion.div
                    >
                        <div className="co">

                        Español nativo <br />
                        Ingles - A2 en proceso
                        </div>


                    </motion.div>

                </div>
            </div>


        </div>
    )
}

export default Skill
