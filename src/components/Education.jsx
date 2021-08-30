import React from 'react'
import { motion } from "framer-motion"



const Education = () => {
    return (
        <div>
            <div className="centrado">
                <div className="co">


                    <motion.div
                        animate={{ scale: 1, x: '100px' }}
                        transition={{ duration: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >

                        <h2>
                            Educación


                        </h2>
                        <br /><br />
                        <h4>
                            TECNICATURA SUPERIOR EN ANÁLISIS Y PROGRAMACIÓN DE SISTEMAS <br />

                        </h4>
                        Inst. de Educación Superior Belgrano | 2016 - 2021 | Graduado



                        <br /><br /><br />
                        <h4>
                            TÉCNICO UNIVERSITARIO DE REDES DE DATOS Y TELECOMUNICACIONES

                        </h4>
                        ITU- Universidad Nacional De Cuyo

                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Education
