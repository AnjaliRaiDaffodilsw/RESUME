import chatapp from '../../assets/projects_images/chatapp.png'
import QUIZ_APP from '../../assets/projects_images/QUIZ_APP.png'
import CONTACT_BOOK from '../../assets/projects_images/CONTACT_BOOK.png'
import webapp from '../../assets/projects_images/webapp.jpeg'
import registeration from '../../assets/projects_images/registeration.jpeg'
import ludo from '../../assets/projects_images/ludo.png'
import guessno from '../../assets/projects_images/guessno.png'

const data_projects = [
    {
        name: 'Contact_Book Crud',
        image: CONTACT_BOOK,
        github_url: 'https://github.com/AnjaliRaiDaffodilsw/Contact_Book-',
        category: ['react.js']
    },

    {
        name: 'Quiz App',
        image: QUIZ_APP,
        github_url: 'https://github.com/AnjaliRaiDaffodilsw/QuizApp',
        category: ['react.js']
    },

    {
        name: 'Realtime Chat App',
        image: chatapp,
        github_url: 'https://github.com/AnjaliRaiDaffodilsw/ChattingApp',
        category: ['socket.io', 'react.js']
    },

    {
        name: 'Website',
        image: webapp,
        github_url: 'https://github.com/AnjaliRaiDaffodilsw/Website-using-Node',
        category: ['node', 'express', 'mongodb', 'mongoose']
    },

    {
        name: 'Registeration Form',
        image: registeration,
        github_url: 'https://github.com/AnjaliRaiDaffodilsw/RegisterationAndLogin',
        category: ['node', 'express', 'mongodb', 'mongoose', 'bcrypt']
    },

    {
        name: 'Ludo Game',
        image: ludo,
        github_url: 'https://github.com/AnjaliRaiDaffodilsw/Ludo_Game',
        category: ['JS']
    },

    {
        name: 'Guess The Number',
        image: guessno,
        github_url: 'https://github.com/AnjaliRaiDaffodilsw/Guess_Number/',
        category: ['JS']
    },
]

export default data_projects;
