import React from 'react'
import './Hello.css';

import { motion } from "framer-motion"


const Hellos = () => {
    return (
        <div>
            <motion.div
                animate={{
                    x: '100px'
                }}
                transition={{
                    type: 'tween',
                    duration: 1
                }}
            >
                {/* <img width="60" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjZmZmIi8+CiAgPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="React Logo" /> */}
                {/* <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Nodejs"/> */}
                {/* <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="HTML5"/> */}
            </motion.div>
            <div class="jumbotron">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJ383LM3ttm1HYDEImCq9rFtS0-iTbE0ILxy54yXkO8xF_m74NbmKWB7D3S37Mzo7H3Y&usqp=CAU" alt="" srcset="" /> */}

                <div className="row">
                    {/* <div className="col-sm-2">
                        <div className="container"><br />
                            <div className="fotos">
                                <div data-role="tile" data-size="wide" data-effect="image-set">
                                    <img src="https://media-exp1.licdn.com/dms/image/D4D35AQGL3_wVSKongQ/profile-framedphoto-shrink_200_200/0/1625536410859?e=1630242000&v=beta&t=7kel_NUB6bJkrROLbb9wHATbnjuwelEgWlxHJlFbWtU" />
                                    <img src="https://www.facebook.com/photo/?fbid=4545122308852196&set=a.911417628889367&__cft__[0]=AZWtAI3kFlm9hI1xc5qj1MkGAT9djcPG6_nk5GiPf5I3JLBATuCCFSZ4zdY0l_L4G5f73TvLwYmY-h_QThwMfL_zS3mXCd_F-5siS22WJCP5if3O3Glgl2n7N56RNC90b-E&__tn__=EH-R" />
                                    <img src="https://scontent.fmdz2-1.fna.fbcdn.net/v/t31.18172-8/13735544_1216802911684169_2561930546643043547_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeHs11hviEZykT5Qh7Qqq5cguUHyr_-fUbe5QfKv_59RtzNxTTn59s3MpZUTim8gpl7zah95f13Tdds8VhFMwbKd&_nc_ohc=vxGqCQKZE6oAX_f0dIi&_nc_ht=scontent.fmdz2-1.fna&oh=778a976bb9694af5cb1da48bd4b8dc26&oe=6150569A" />
                                    <img src="https://scontent.fmdz2-1.fna.fbcdn.net/v/t1.6435-9/125218552_3712903368740765_289218680734459417_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFjXEFEpsPUv1Z_zSIX1VjqaDd_dynHVdZoN393KcdV1oaaml8tJipWr8vLgBX5Dy9K-vV3FwBrztAmcx_MNwcK&_nc_ohc=ECUXbG9l_dsAX_CD-V6&_nc_ht=scontent.fmdz2-1.fna&oh=7a93ceba680370e2bc83f58df640f874&oe=614F151F" />
                                    <img src="https://scontent.fmdz2-1.fna.fbcdn.net/v/t1.6435-9/165021877_4080507375313694_8227720356374171516_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFWceRKAvq9tn29nwJw9mbpIedw4_EldXQh53Dj8SV1dFQkcBztkebTTG_-otePkPVEJDfHcdcEVo3ig_eZcxoM&_nc_ohc=YLOx7d9FW-cAX97TYkd&_nc_ht=scontent.fmdz2-1.fna&oh=2cfc93e1a1899db1943ca7ef69de8363&oe=61522158" />
                                    <img src="https://scontent.fmdz2-1.fna.fbcdn.net/v/t1.6435-9/118620864_3485757824788655_7429408801964311548_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFlovt3voAQIHMF8AdXfTNELMSn39Q-ozAsxKff1D6jMDFOfpK9zg4ySvo4iQOue1soEr2NaCmj8T-bo4CifHxD&_nc_ohc=BwW0KnWAZsgAX89eKR9&tn=W3pg0avz1knsoeZp&_nc_ht=scontent.fmdz2-1.fna&oh=343b627f581a4405f31fc06329871315&oe=614EDC95" />
                                    <img src="https://www.facebook.com/photo/?fbid=1021703864527409&set=a.100287793335692&__cft__[0]=AZWclg4LI3hvFwhmf6YxvN8D6m6pDaCpmkkUXwztDT6v9UTRtbdb4oM_PNECWMkwrYv7eCx7uL5VHEOiqkNStvqrZMc4n1n9r6pNG1rygpcuA-CnIcYQoCxolfo3MymyfKcUP6zfksYweJKw3xRCiGt-&__tn__=EHH-R" />

                                </div>

                            </div>

                        </div>

                    </div> */}
                    <div className="col-sm-12">
                        <hr />
                        <div className="container">


                            {/* 
                            <div class="contenedor">
                                <p>Hola</p>
                                <ul>
                                    <li>mundo</li>
                                    <li>Usuario</li>
                                    <li>Jeancarlos</li>
                                </ul>
                            </div> */}
                            <br /><br />

                            <motion.h1 className="text-center"

                                animate={{
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    rotate: 0,
                                    borderRadius: "100%"
                                }}
                                whileHover={{ scale: 1.4 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                    type: 'tween',
                                    duration: 1
                                }}
                            >
                                <h1 className="text-center">¡Hola!   ¡Bienvenido a mi Portafolio!
                                </h1>
                                <img className="centrado" src="https://media-exp1.licdn.com/dms/image/D4D35AQGL3_wVSKongQ/profile-framedphoto-shrink_200_200/0/1625536410859?e=1630242000&v=beta&t=7kel_NUB6bJkrROLbb9wHATbnjuwelEgWlxHJlFbWtU" class="rounded-circle" alt="Cinque Terre" width="300" height="300" ></img>
                                <br />
                                <br />  Soy Nicolás Contigliani

                                <motion.h5 className="text-center"
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        scale: 1.1,
                                        rotate: 0,
                                        borderRadius: "100%"
                                    }}
                                    whileHover={{ scale: 1.5 }}
                                    whileTap={{ scale: 0.9 }}
                                >Desarrollador web y movil</motion.h5>

                            </motion.h1>
                            <br /><br />
                            
                            
                        </div><br />
                        <hr />
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Hellos
