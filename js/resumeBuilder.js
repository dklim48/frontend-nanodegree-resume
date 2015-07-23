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

var work = {
        jobs: [
            {
                "employer": "Liberty Mutual",
                "title": "Sr Software Developer",
                "descripton": "Go to man",
                "dates": "Nov 2010 - Current",
                "location": "Dover, NH",
        },
            {
                "employer": "Bradford Networks",
                "title": "QA Engineer",
                "descripton": "Hell on earth",
                "dates": "April 2007 - Nov 2010",
                "location": "Concord, NH",
        }
    ],
    "display": function () {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descripton);
            $(".work-entry:last").append(formEmp + formTitle + formDates + formLocation + formDescription);
        }
    }
};

work.display();

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

var education = {
    "schools":[
        {
            "name":"University of New Hampshire",
            "degree":"B.S.",
            "majors":["Computer Engineering"],
            "location":"Durham, NH",
            "dates":2006,
            "url":"www.unh.edu"
        },
        {
            "name":"Timerlane Regional High School",
            "degree":"Diploma",
            "majors":"Standard",
            "location":"Plaistow, NH",
            "dates":2002,
            "url":"http://wp.timberlane.net/hs/"
        }
    ],
    "onlineCourses":[
        {
            "title": "Front End Nanodegree",
            "school": "Udacity",
            "date": 2015,
            "url": "www.udacity.com",
        }
    ],
    "display": function () {
        for (var school in this.schools) {
            $("#education").append(HTMLschoolStart);
            var formName = HTMLschoolName.replace("%data%", this.schools[school].name);
            formName = formName.replace("#", this.schools[school].url);
            var formDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            var formDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
            var formLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            var formMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
            $(".education-entry:last").append(formName + formDegree + formDates + formLocation + formMajor);
        }
        if(this.onlineCourses.length !== 0){
            $("#education").append(HTMLonlineClasses);
        }
        for (var course in this.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
            formTitle = formTitle.replace("#", this.onlineCourses[course].url);
            var formSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
            var formDate = HTMLonlineDates.replace("%data%", this.onlineCourses[course].date);
            var formURL = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
            formURL = formURL.replace("#", this.onlineCourses[course].url);
            $(".education-entry:last").append(formTitle + formSchool + formDate + formURL);
        }
    }
};

education.display();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$("#map-div").append(googleMap);