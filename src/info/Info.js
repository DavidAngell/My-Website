import self from "../img/self.png"
import project1 from "../img/project1.png"
import project2 from "../img/project2.png"
import project3 from "../img/project3.png"
import project4 from "../img/project4.png"
import project5 from "../img/project5.png"

export let colors = ["rgb(29, 181, 190)", "rgb(153, 54, 211)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "David",
    lastName: "Angell",
    initials: "David Angell", // the example uses first and last, but feel free to use three or more if you like.
    position: "an aspiring Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by RedBull (not sponsored)'
        },
        {
            emoji: '🌎',
            text: 'from Ipswich, MA'
        },
        {
            emoji: "💼",
            text: "High School Student"
        },
        {
            emoji: "📧",
            text: "davidjangell42@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/davidaangle/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/DavidAngell",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://twitter.com/DavidJAngell42",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm David. I started my foray into electronics when I was 11 by modding my flywheel-powered Nerf guns to shoot farther and faster, and I have only continued exploring from there. Nowadays, I focus more on the software side of things, but I still dip my toes into various hardware projects every now and then —even recently getting to create my own Nerf gun from scratch!",
    skills: {
        proficientWith: ['arduino', 'javascript & nodejs', 'java', 'C++', 'linux'],
        exposedTo: ['react', 'python', 'network admin', 'embeded programming', 'adobe illustrator', 'adobe premiere pro']
    },
    hobbies: [
        {
            label: 'philosophy',
            emoji: '📖'
        },
        {
            label: 'chess',
            emoji: '♟️'
        },
        {
            label: 'movie analysis',
            emoji: '🎥'
        },
    ],
    portfolio: [
        {
            title: "Viewers Control",
            desciption: "The local client (game-side) for a program that my friend John and myself have been working on for a livestream chat to control/mess with your Rocket League game.",
            live: "https://viewerscontrol.com",
            live_demo: false,
            source: "https://github.com/DavidAngell/Viewers-Control-Rocket-League",
            image: project1,
        },
        {
            title: "Overkill Nerf Gun",
            desciption: "A Nerf Gun with a range finder that I made as a final project / friendly competition is AP Physics",
            live: "",
            live_demo: false,
            source: "https://github.com/DavidAngell/Overkill-Nerf-Gun",
            image: project2,
        },
        {
            title: "Project 3",
            desciption: "",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: project3,
            live_demo: false,
        },
        {
            title: "Aspen-SIS",
            desciption: "An npm package for scraping user data off of sites using Aspen Student Information System. Mobile app enabling Aspen push notifications coming soon...",
            live: "",
            source: "https://github.com/DavidAngell/Aspen-SIS",
            image: project4,
            live_demo: false,
        },
        {
            title: "Project 5",
            desciption: "",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: project5,
            live_demo: true,
        }
    ]
}