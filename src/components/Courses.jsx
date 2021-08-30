import React from 'react'
import { motion } from "framer-motion"


const Courses = () => {
    return (
        <div>
            <div className="centrado">
                <div className="co">


                    <h1 className="text-center">Cursos</h1>

                    <motion.div
                        animate={{ scale: 1, x: '100px' }}
                        transition={{ duration: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >


                        <br /><br /><br />

                        <h3>PLATAFORMA UDEMY</h3>
                        <br />


                        <h5>
                            JavaScript 2020: Curso desde Principiante hasta ProfesionalUso Json con Axios y Fetch <br />
                            Linux para Principiantes <br />
                            React JS ⭐Desde Cero! Hooks, Redux, Context, Firebase y más! <br />
                            De cero a experto (Hooks MERN) <br />
                            Patrones de Diseño en Javascript y Node <br />
                            UX Design: Conceptos básicos para principiantes
                        </h5>

                        <br />
                        <h3>PLATAFORMA PLATZY</h3>
                        <br />
                        <h5>
                            Postgres <br />
                            Clases del Curso de Administración de Servidores Linux 2017
                        </h5>

                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Courses
