var bio = {
    "name": "Geoff Humphrey",
    "role": "Sr. Training Manager, Design",
    "age": 45,
    "skills": ["Instructional Design", "Online Education", "Adult Education", "Front-End Web Development", "Graphic Design"],
    "contacts": {
        "mobile": "303-555-1234",
        "email": "geoff@zkdigital.com",
        "github": "geoffhumphrey",
        "twitter": "@apoundofobscure",
        "blog": "zkdigital.com",
        "location": "Parker, CO"
    },
    "biopic": "https://unsplash.it/200?image=972",
    "welcomeMessage": "Lorizzle ipsizzle dolizzle pizzle go to hizzle, fo shizzle my nizzle boofron."
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedNameRole = formattedName + formattedRole;


    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLblog.replace("%data%", bio.contacts.blog));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


    $("#header").prepend(formattedNameRole);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcome);


    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
    });

    $("#topContacts, #footerContacts").append(formattedContactInfo);
};

bio.display();

var work = {

    "jobs": [

        {
            "employer": "AT&T",
            "title": "Sr. Training Manager, Design",
            "dates": "January 1, 2017 - Present",
            "location": "Englewood, CO",
            "description": "Spicy jalapeno in doner enim burgdoggen pig occaecat incididunt nostrud exercitation tri-tip shoulder strip steak. Ipsum mollit occaecat culpa. Mollit chuck qui tenderloin pork landjaeger deserunt jerky frankfurter fatback bacon id lorem adipisicing nostrud. Capicola meatloaf drumstick nostrud et laborum, sirloin officia consequat cow irure proident ribeye bresaola meatball. Pork chop do bacon eiusmod in enim bresaola ham hock minim."
        },

        {
            "employer": "DIRECTV",
            "title": "Sr. Instructional Designer",
            "dates": "September 1, 2014 - January 1, 2017",
            "location": "Englewood, CO",
            "description": "Bacon boudin beef, non andouille velit fatback ullamco. Salami qui pancetta id. Cupim in qui, reprehenderit nulla est biltong duis ribeye id corned beef. Dolore laborum chuck velit, id picanha dolor cow tri-tip ex beef officia adipisicing. Ribeye tail ut irure, quis anim tenderloin et."
        },

        {
            "employer": "Jones International University",
            "title": "Sr. Instructional Designer",
            "dates": "December 6, 2006 - June 16, 2014",
            "location": "Englewood, CO",
            "description": "Velit ex bresaola, alcatra shankle eu doner mollit nostrud. Elit eiusmod nostrud sunt, aute filet mignon aliqua excepteur tongue pork belly consectetur do prosciutto enim. Aliquip picanha occaecat, doner minim eiusmod sausage ea kevin. Qui nostrud swine aliquip leberkas pork chop."
        }

    ]

};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var displayEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var displayTitle = HTMLworkTitle.replace("%data%", job.title);
        var displayDates = HTMLworkDates.replace("%data%", job.dates);
        var displayLocation = HTMLworkLocation.replace("%data%", job.location);
        var displayDescription = HTMLworkDescription.replace("%data%", job.description);
        var displayEmployerAll = displayEmployer + displayTitle + displayDates + displayLocation + displayDescription;
        $(".work-entry:last").append(displayEmployerAll);
    });
    /*
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var displayEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var displayTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var displayDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var displayLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var displayDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var displayEmployerAll = displayEmployer + displayTitle + displayDates + displayLocation + displayDescription;
        $(".work-entry:last").append(displayEmployerAll);
    };
    */
}; // end work object

work.display();

var projects = {

    "projects": [

        {
            "title": "Sample Project 1",
            "dates": 2017,
            "description": "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.",
            "images": ["https://placeimg.com/225/225/any", "http://loremflickr.com/g/225/225/boat", "http://placekitten.com/225/225", "http://unsplash.it/225/225/?random"]
        },

        {
            "title": "Sample Project 2",
            "dates": 2016,
            "description": "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
            "images": ["https://placeimg.com/225/225/any", "http://loremflickr.com/g/225/225/beer", "http://placekitten.com/225/225", "http://unsplash.it/225/225/?random"]
        },

        {
            "title": "Sample Project 3",
            "dates": 2016,
            "description": "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr. Glass.",
            "images": ["https://placeimg.com/225/225/any", "http://loremflickr.com/g/225/225/belgium", "http://placekitten.com/225/225", "http://unsplash.it/225/225/?random"]
        },

        {
            "title": "Sample Project 4",
            "dates": 2017,
            "description": "Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.",
            "images": ["https://placeimg.com/225/225/any", "http://loremflickr.com/g/225/225/disney", "http://placekitten.com/225/225", "http://unsplash.it/225/225/?random"]
        }

    ]

};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project) {
        var displayTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(displayTitle);
        var displayDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(displayDates);
        var displayDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(displayDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var displayImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(displayImage);
            });
        }
    });
    /*
    $("#projects").append(HTMLprojectStart);
    for (project in projects.projects) {
        var displayTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(displayTitle);
        var displayDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(displayDates);
        var displayDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(displayDescription);
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var displayImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(displayImage);
            }
        }
    }
    */
};

projects.display();

var education = {
    "schools": [{
            "name": "University of Northern Colorado",
            "location": "Greeley, CO",
            "degree": "BA",
            "majors": ["Social Science", "Secondary Education"],
            "dates": 1995,
            "url": "http://www.unco.edu/"
        },
        {
            "name": "University of Colorado",
            "location": "Denver, CO",
            "degree": "MA",
            "majors": ["Information and Learning Technologies", "Web Development"],
            "dates": 2001,
            "url": "http://www.colorado.edu/"
        }
    ],

    "onlineCourses": [{
            "title": "Front End Developer Nanodegree",
            "school": "Udacity",
            "dates": 2017,
            "url": "https://classroom.udacity.com/nanodegrees/nd001"
        },
        {
            "title": "jQuery Essential Training",
            "school": "Lynda",
            "dates": 2016,
            "url": "https://www.lynda.com/tutorial/494389"
        },
        {
            "title": "Learning Responsive Design",
            "school": "Lynda",
            "dates": 2016,
            "url": "https://www.lynda.com/tutorial/104969"
        },
        {
            "title": "Becoming a Web Developer: Full Stack vs. Front End",
            "school": "Lynda",
            "dates": 2016,
            "url": "https://www.lynda.com/tutorial/483022"
        }
    ]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var displayName = HTMLschoolName.replace("%data%", school.name);
        var displayDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var displayDates = HTMLschoolDates.replace("%data%", school.dates);
        var displayLocation = HTMLschoolLocation.replace("%data%", school.location);
        var displayMajors = [];
        if (school.majors.length > 0) {
            school.majors.forEach(function(major) {
                displayMajors.push(HTMLschoolMajor.replace("%data%", major));
            });
        }
        var displayEducationAll = displayName + displayDegree + displayDates + displayLocation + displayMajors;
        $(".education-entry:last").append(displayEducationAll);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        $("#education").append(HTMLschoolStart);
        var displayTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var displaySchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var displayDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var displayURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
        var displayOnlineAll = displayTitle + displaySchool + displayDates + displayURL;
        $(".education-entry:last").append(displayOnlineAll);
    });
};

education.display();

$("#mapDiv").append(googleMap);