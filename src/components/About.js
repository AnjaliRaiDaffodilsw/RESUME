import React from 'react';
import Skillcard from './Skillcard';
import api from '../assets/icons/api.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'
import { motion } from 'framer-motion'

const skills = [
    {
        icon: computer,
        title: "Frontend Developement",
        about: "I can build a beautiful and scalable webiste using HTML,CSS and React.js",
    },
    {
        icon: repair,
        title: "Backend Developement",
        about: "Handle database,server,api using",
    },
    {
        icon: algo,
        title: "Coder",
        about: "A daily problem solver in hacker earth and leet code",
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "Lorem ipsum dolor sit amet cosectetur adipisticing elit. Quibusdam,consequatur",
    },
    {
        icon: api,
        title: "Lorem ipsum dolor sit.",
        about: "Lorem ipsum dolor sit amet cosectetur adipisticing elit. Quibusdam,consequatur",
    },
    {
        icon: computer,
        title: "Lorem ipsum dolor sit.",
        about: "Lorem ipsum dolor sit amet cosectetur adipisticing elit. Quibusdam,consequatur",
    }
]
function About() {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6,
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
        <motion.div className="about"
            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <h6 className="about__intro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I Offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard
                                skill={skill} />
                        )

                    }
                </div>
            </div>
        </motion.div>
    )
}

export default About
