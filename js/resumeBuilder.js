var bio = {
    "name": "David Klimaszewski",
    "role": "Web Developer",
    "biopic": "images/fry.jpg",
    "contacts": {
        "email": "DaKlimaszewski@gmail.com",
        "mobile": "(555) 555 - 5555",
        "location": "Nottingham, NH",
        "github": "dklim48",
        "twitter": "N/A"
    },
    "skills": ["test", "testingAgain"],
    "welcomeMessage": "New England is better than you.",
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        var formattedPic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        $("#header").prepend(formattedName + formattedRole);
        $("#header").append(formattedPic + formattedMessage);
        $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
        $("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
        $("#header").append(HTMLskillsStart);
        for(var skill in this.skills){
            $("#skills").append(HTMLskills.replace("%data%",this.skills[skill]));
        }
    }
};

bio.display();

var project = {
    projects: [
        {
            "title": "URTL REST Services",
            "dates": "04/2015 - 09/2015",
            "description": "Created REST services utilizing Swagger notation and Liberty Profile server.",
            "images": ["images/fry.jpg", "images/fry.jpg"]
        },
        {
            "title": "Automation Services",
            "dates": "11/2010 - 12/2014",
            "description": "Helped create and maintan a Selenium based automation framework utilizing the Java bindings.",
            "images": ["images/fry.jpg"]
        }
    ],
    "display": function () {
        for (var work in this.projects) {
            $("#projects").append(HTMLprojectStart);
            var formTitle = HTMLprojectTitle.replace("%data%", this.projects[work].title);
            var formDates = HTMLprojectDates.replace("%data%", this.projects[work].dates);
            var formDesc = HTMLprojectDescription.replace("%data%", this.projects[work].description);
            $(".project-entry:last").append(formTitle + formDates + formDesc);
            for(image in this.projects[work].images){
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", this.projects[work].images[image]));
            }
        }
    }
};

project.display();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$("#map-div").append(googleMap);
