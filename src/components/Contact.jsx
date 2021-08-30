import React from 'react'
import { motion } from "framer-motion"


const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="co">

                    <h1 className="text-center">
                        Contacto
                    </h1><br /><br /><br /><br /><br />

                    <motion.div
                        animate={{ scale: 1, x: '100px' }}
                        transition={{ duration: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >

                        <h3><strong> <span class="mif-phone"></span>

                        </strong>  <samp>:  +5492612444106</samp></h3>
                        <h3><strong><span class="mif-mail"></span>
                        </strong>  <samp>: nico.contigliani@gmail.com</samp></h3>
                        <h3><strong><span class="mif-github"></span></strong> : <a href="https://github.com/nicoContigliani">https://github.com/nicoContigliani</a> </h3>
                        <h3><strong><span class="mif-linkedin"> </span></strong> : <a href="www.linkedin.com/in/nicolas-contigliani"><samp> www.linkedin.com/in/nicolas-contigliani</samp></a> </h3>
                        <h3><strong><span class="mif-facebook2"></span></strong> : <a href="https://www.facebook.com/nico.contiglliani/"><samp> https://www.facebook.com/nico.contiglliani/</samp></a> </h3><br />
                        <div className="centrado">

                            <a href="./Analista_en_sistemas.pdf" download="./Analista_en_sistemas.pdf">
                                <button className="btn btn-outline-primary">CV Nicolás Contigliani</button>
                            </a>

                        </div>

                    </motion.div>


                </div>
            </div>




        </div>
    )
}

export default Contact
