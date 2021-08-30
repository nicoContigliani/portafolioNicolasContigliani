import React from 'react'
import { motion } from "framer-motion"


const Company = () => {
    return (
        <div>

            <div className="centrado">
                <div className="co">






                    <motion.div
                         animate={{ scale: 1,x:'100px' }}
                         transition={{ duration: 0.9 }}
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                    >
                        <h2> Experiencia en Empresa</h2>
                        <br />
                        <h5>GRUPO DEL PLATA SALUD - ENERO 2021</h5>
                        <h6>Desarrollor Backend y movil</h6>
                        <br />
                        <h5>Tecnologías Utilizadas

                        </h5>
                        <ul data-role="drag-items">
                            <li>Cake.php                                                                                                                                                                                                                                                                                                                                                                                                                                               </li>
                            <li>React Native</li>
                            <li>Postgres</li>
                            <li>Git</li>


                        </ul>

                    </motion.div>
                </div>


            </div>
            <hr />
        </div>
    )
}

export default Company
