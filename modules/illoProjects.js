class IlloProject {
  constructor(name, projectUrl, desc, cover) {
    this.name = name;
    this.projectUrl = projectUrl;
    this.desc = desc;
    this.cover = cover;
  }
}

const illoProjects =
[
  new IlloProject("Memento Mori",
                  "mori",
                  "LI Pulse",
                  "https://s3.amazonaws.com/blackwright/portfolio/illo/mori.jpg"),

  new IlloProject("J and K",
                  "jandk",
                  "A Wedding Gift",
                  "https://s3.amazonaws.com/blackwright/portfolio/illo/jandk.jpg"),

  new IlloProject("Space Race",
                  "spacerace",
                  "Wired Magazine",
                  "https://s3.amazonaws.com/blackwright/portfolio/illo/spacerace.jpg"),

  new IlloProject("Genie",
                  "genie",
                  "Creative Quarterly",
                  "https://s3.amazonaws.com/blackwright/portfolio/illo/genie.jpg"),

  new IlloProject("I'm Worried About",
                  "worried",
                  "Personal",
                  "https://s3.amazonaws.com/blackwright/portfolio/illo/worried.jpg"),

  new IlloProject("Charlie Kelly, King of Rats",
                  "charlie",
                  "Personal",
                  "https://s3.amazonaws.com/blackwright/portfolio/illo/charlie.jpg"),

  new IlloProject("Rude",
                  "rude",
                  "Personal",
                  "https://s3.amazonaws.com/blackwright/portfolio/illo/rude.jpg"),

  new IlloProject("A Boy and His Birds",
                  "birds",
                  "Personal",
                  "https://s3.amazonaws.com/blackwright/portfolio/illo/birds.jpg"),

  new IlloProject("Zodiac",
                  "zodiac",
                  "Personal",
                  "https://s3.amazonaws.com/blackwright/portfolio/illo/zodiac.jpg"),

  new IlloProject("Hush",
                  "hush",
                  "Thesis",
                  "https://s3.amazonaws.com/blackwright/portfolio/illo/hush-cover.jpg")
];

module.exports = { IlloProject, illoProjects };
