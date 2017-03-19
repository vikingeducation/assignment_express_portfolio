class DesignProject {
  constructor(name, projectUrl, client, desc, cover, gallery) {
    this.name = name;
    this.projectUrl = projectUrl;
    this.client = client;
    this.desc = desc;
    this.cover = cover;
    this.gallery = gallery;
  }
}

const designProjects =
[
  new DesignProject("Voith",
                    "voith",
                    "Voith, Big Spaceship",
                    "High-fidelity design mockups for a site redesign pitch.",
                    "https://s3.amazonaws.com/blackwright/portfolio/design/voith/Voith_Mockup.png",
                    ["https://s3.amazonaws.com/blackwright/portfolio/design/voith/Voith_Landing.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/voith/Voith_Industries.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/voith/Voith_Products.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/voith/Voith_Contact.jpg"]),

  new DesignProject("The Illustrated Man",
                    "illustratedman",
                    "Personal",
                    "A project to create covers for the short stories in Ray Bradbury's The Illustrated Man.",
                    "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/collection_thumb.jpg",
                    ["https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/veldt_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/zero-hour-fox-forest_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/thecity_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/long-rain-highway_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/marionettesinc_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/last-night-rocket-man_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/other-foot_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/fire-ballons-fog-horn_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/waits_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/noparticular-exiles_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/concrete-mixer-visitor_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/kaleidoscope_cover.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/illustrated-man/rocket-the-man_cover.jpg"]),

  new DesignProject("Email Marketing Campaign",
                    "ipemails",
                    "Island Photography",
                    "Designed then coded in HTML/CSS",
                    "https://s3.amazonaws.com/blackwright/portfolio/design/ip-emails/cover.jpg",
                    []),

  new DesignProject("Clams Casino",
                    "clamscasino",
                    "Freelance",
                    "Exploratory mockups for a musician website.",
                    "https://s3.amazonaws.com/blackwright/portfolio/design/clams-casino/Clams_Mockup.png",
                    ["https://s3.amazonaws.com/blackwright/portfolio/design/clams-casino/Clams_Landing.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/clams-casino/Clams_Menu.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/clams-casino/Clams_MobileViews.png",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/clams-casino/Clams_AlbumPlay.png",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/clams-casino/Clams_About.jpg"]),

  new DesignProject("Estée Lauder BCA",
                    "bca",
                    "Estée Lauder, Big Spaceship",
                    "High-fidelity design mockups for a site redesign pitch.",
                    "https://s3.amazonaws.com/blackwright/portfolio/design/bca/BCA_mockup.png",
                    ["https://s3.amazonaws.com/blackwright/portfolio/design/bca/BCA_Landing.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/bca/BCA_Stories.jpg",
                     "https://s3.amazonaws.com/blackwright/portfolio/design/bca/BCA_Products.jpg"]),

  new DesignProject("Races",
                    "races",
                    "Island Photography, Various",
                    "Branding/identity/package design for race events.",
                    "https://s3.amazonaws.com/blackwright/portfolio/design/races/cover.jpg",
                    [])
];

module.exports = { DesignProject, designProjects };
