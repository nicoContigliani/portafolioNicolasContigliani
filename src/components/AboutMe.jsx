import React from 'react'
import { motion } from "framer-motion"


const AboutMe = () => {
    return (
        <div>
            <div className="centrado"><br />
                <div className="co">

                    <motion.h1 className="text-center"
                        animate={{ scale: 2 }}
                        transition={{ duration: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Sobre mi
                    </motion.h1>
                    <br /><br />
                    <motion.h5
                        //  animate={{
                        //     x: '0px'
                        // }}
                        // transition={{
                        //     type: 'tween',
                        //     duration: 10
                        // }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Soy un profesional de TI con la capacidad de trabajar en equipo .Estoy
                        abierto a diversos tipos de experiencia, buscando el crecimiento del grupo,
                        así como el desarrollo personal. Estoy ansioso por implementar nuevos
                        avances tecnológicos. También estoy dedicado a mis obligaciones con la
                        disciplina y responsabilidad. Abordo los problemas con una estrategia
                        centrada en la solución.

                    </motion.h5>
                    <br />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default AboutMe
