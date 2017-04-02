class Project {
    constructor(name, repo, img, ...tech) {
        this.name = name
        this.tech = tech
        this.repo = repo
        this.img = img
    }
}

const projects = [
    new Project(
        'Survey Poll',
        'https://github.com/bhefty/reactive-voting',
        'https://res.cloudinary.com/bhefty/image/upload/v1491096960/mockup_voting_ob3p9o.png',
        'React', 'MongoDB', 'Auth0'
    ),
    new Project(
        'Recipe Box',
        'https://github.com/bhefty/react-recipe-box',
        'https://res.cloudinary.com/bhefty/image/upload/v1482035023/mockup-recipebox_evjjtw.png',
        'React'
    ),
    new Project(
        'Markdown Previewer',
        'http://codepen.io/bhefty/full/MbawLa/',
        'https://res.cloudinary.com/bhefty/image/upload/v1480042840/mockup-markdown_ktvzmt.png',
        'React'
    ),
    new Project(
        'FreeCodeCamp Leaderboard',
        'http://codepen.io/bhefty/full/oYxgyR/',
        'https://res.cloudinary.com/bhefty/image/upload/v1480042840/mockup-leaderboard_vpilbx.png',
        'React'
    ),
    new Project(
        'Simon Says Game',
        'https://github.com/bhefty/simon-says',
        'https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814008/simon-says_tjllpp.png',
        'jQuery'
    ),
    new Project(
        'Calculator',
        'https://github.com/bhefty/calculator',
        'https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814008/Screen_Shot_2016-09-11_at_11.12.57_PM-macbookgrey-front_voxw8w.png',
        'JavaScript'
    ),
    new Project(
        'Pomodoro Timer',
        'https://github.com/bhefty/pomodoro-clock',
        'https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814009/pomodoro-clock_fl4mzr.png',
        'JavaScript'
    ),
    new Project(
        'Tic-Tac-Toe',
        'https://github.com/bhefty/tic-tac-toe',
        'https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814009/tic-tac-toe_hwlnlf.png',
        'jQuery'
    )
]

module.exports = {
    Project,
    projects
}