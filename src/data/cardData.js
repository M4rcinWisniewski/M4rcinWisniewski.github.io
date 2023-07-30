import image from '../static/dataImages/vienna.jpg'
import image4 from '../static/dataImages/start.png'
import image2 from '../static/dataImages/quennsGambit.png'
import image3 from '../static/dataImages/chess-playing-hand.png'
const data = [
    {
        id: 1,
        name:  'First steps',
        level: 'begginer ',
        image: image4,
        price: 'FREE',
        path: '/Courses/Learn-To-Play'
    },
    {
        id: 2,
        name: 'Vienna game',
        level: 'begginer ',
        image: image,
        price: '$20',
        path: '/Courses/Learn-To-Play'
    },
    {
        id: 3,
        name: 'Queens Gambit',
        level: 'intermidiate ',
        image: image2,
        price: '$30',
        path: '/Courses/Learn-To-Play'
    },
    {
        id: 4,
        name: 'Slav defense',
        level: 'intermidiate ',
        image: image3,
        price: '$15',
        path: '/Courses/Learn-To-Play'
    },
    {
        id: 5,
        name: 'Caro-kann defense',
        level: 'intermidiate ',
        image: image,
        price: '$20',
        path: '/Courses/Learn-To-Play'
    },
    {
        id: 6,
        name: 'Tactics',
        level: 'Beginner ',
        image: image3,
        price: '$10',
        path: '/Courses/Learn-To-Play'
    },
    {
        id: 7,
        name: 'Endgames Theory',
        level: 'Master ',
        image: image2,
        price: '$30',
        path: '/Courses/Learn-To-Play'
    },
]

export default data