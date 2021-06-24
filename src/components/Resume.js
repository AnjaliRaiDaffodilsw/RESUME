import React from 'react'
import Bar from './Bar'
import react from '../assets/icons/react.png';
import html from '../assets/icons/html.png';
import java from '../assets/icons/java.png';
import C from '../assets/icons/C.png';
import boot from '../assets/icons/boot.jpeg';
import java_script from '../assets/icons/java-script.svg';
import { motion } from 'framer-motion'

const languages = [
    {
        icon: C,
        name: 'C',
        level: '45'
    },
    {
        icon: java,
        name: 'Java',
        level: '60'
    },
    {
        icon: html,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'react',
        level: '60'
    },
    {
        icon: java_script,
        name: 'react',
        level: '60'
    },
    {
        icon: boot,
        name: 'Bootstrap',
        level: '80'
    }
]
const tools = [
    {
        icon: react,
        name: ' CodeSandbox',
        level: '45'
    },
    {
        icon: react,
        name: 'React Developers Tools',
        level: '45'
    },
    {
        icon: java,
        name: 'Eclipse',
        level: '60'
    },
]
function Resume() {
    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="container resume"
            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        🏫  Education
                  </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science and Enginnering
                        </h5>
                        <p className="resume-card__name">
                            Dronacharya Group Of Insitutions(2017-2021)
                        </p>
                        <p className="resume-card__details">I am currently persuing B.tech in Computer Science Engineering from Academy of Technology</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        👩‍💼  Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern
                        </h5>
                        <p className="resume-card__name">
                            Coding Ninjas (2020-2021)
                        </p>
                        <p className="resume-card__details">I work as a intern in Coding Ninjas as a Teaching Assistant of Web Developement</p>
                        <p className="resume-card__name">
                            Coding Ninjas (2021)
                        </p>
                        <p className="resume-card__details">I work as a intern in Coding Ninjas as a Content Creator for Full Stack Web Development Course</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar
                                    value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool =>
                                <Bar
                                    value={tool} />
                            )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume
