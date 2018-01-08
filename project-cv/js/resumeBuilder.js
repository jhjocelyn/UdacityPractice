/*
This is empty on purpose! Your code to build the resume will go here.
1.html+css
2.javaScript
3.jQuery
4.Bootstrap/React
5.Git+shell
 */
var bio = {
    "name": "Hui Jiang",
    "role": "Web Devloper",
    "contact info":{
    "mobile": "15686110467 (China)"
    "email":"jhjocleyn@outlook.com",
    "github":"jhjocelyn",
    },
    "biopic": "images/jh.jpg",
    "welcomeMsg": "Welcome to my Resume page",
    "skills":["Java","javaScript","Html","Css","jQuery","Bootstrap","Git"]
};

bio.displayBio = function (){
    var name = HTMLheaderName.replace("%data%",bio.name);
    var role = HTMLheaderRole.replace("%data%",bio.role);

    $("#header").prepend(role);
    $("#header").prepend(name);

    var mobile = HTMLmobile.replace("%data%",bio["contact info"].mobile);
    var email = HTMLemail.replace("%data%",bio["contact info"].email);
    var github = HTMLgithub.replace("%data%",bio["contact info"].github);
    var location = HTMLlocation.replace("%data%",bio["contact info"].location);


    $("#topContacts").append(mobile);
    $("#topContacts").append(email);
    $("#topContacts").append(github);
    $("#topContacts").append(location);

    var bioPicture = HTMLbioPic.replace("%data%",bio.biopic);
    var bioMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);

    $("#header").append(bioPicture);
    $("#header").append(bioMsg);

    if(bio.skills.length>0){
        $("#header").append(HTMLskillsStart);
        for(var i = 0;i < bio.skills.length; i++){
            var skill = HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(skill);
        }
    }
}

bio.displayBio();


var work ={
    jobs:[
        {"employer":"Hino Travel Agency",
         "title":"junior tour guide",
         "location":"Nottingham,UK",
         "dates":"2014/09-2014/12",
         "description":"leading Chinese tourists to visit famous attractions in the UK and being responsible for ."
        }
    ]
}


work.displayWork = function(){
    for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

// // $(document).click(function(loc) {
// //   // your code goes here!
// //   var x = loc.pageX;
// //   var y = loc.pageY;
// //   logClicks(x,y);
// // });



// var education={
//  school:[
//      {"name":"the University of Liverpool",
//       "country":"Britain"
//       "city": "Liverpool",
//       "major":"Telecommunication",
//       "degree":"Bachelor",
//       "graduation year":2016
//      },
//      {"name":"the University of Melbourne",
//       "country": "Australia",
//       "city": "Melbourne",
//       "major":"Information Technology",
//       "degree":"Master",
//       "graduation year": 2019
//       }
//  ]
// };

// var project={
//     projects:[
//          {"title":"Melanoma Diagnosis-neural network and chromaticity analysis",
//          "content":"Collected chromaticity, thickness and edge complexity of the melanoma in the preprocessing image as a training set and adjusted the neural network to make it automatically identify these characteristics, so melanoma was clear.",
//          "dates":"2015/10-2016/03",
//          "url":"",
//          "image":["images/fyp-1.png","images/fyp-2.png"]
//         },
//         {"title":"Multithread Dictionary Server",
//          "content":"This server was built to improve word library with Client-Server model. Multiple clients could access to the server. Clients could search words meaning, add and delete words",
//          "dates":"2017/08-2017/09",
//          "url":"",
//          "image":["images/pro1-1.png"]
//         },
//         {"title":"Shared White Board",
//          "content":"Building a distributed shared whiteboard that allows multiple users to draw simultaneously and "+
//                     "chat with each other. To achieve this goal, Remote Method Invocation technology is implemented.",
//          "dates":"2017/09-2017/10",
//          "url":"",
//          "image":["images/pro2-2.png"]
//         }
//     ]
// };

project.display = function(){
    for (pro in project.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.projects[pro].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",project.projects[pro].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.projects[pro].content);
        $(".project-entry:last").append(formattedDescription);
        if (project.projects[pro].image.length>0){
            for (image in project.projects[pro].image){
                var formattedImage = HTMLprojectImage.replace("%data%",project.projects[pro].image[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

// for-in project.projects
// for(pro in project.projects){
    //     $("#projects").append(HTMLprojectStart);
    //     var projectTitle = HTMLprojectTitle.replace("%data%",project.projects[pro].title);
    //     var projectDates = HTMLprojectDates.replace("%data%",project.projects[pro].dates);
    //     var projectDes = HTMLprojectDescription.replace("%data%",project.projects[pro].content);
    //     $(".project-entry:last").append(projectTitle);
    //     $(".project-entry:last").append(projectDates);
    //     $(".project-entry:last").append(projectDes);
    //     if(project.projects[pro].image.length>0){
    //         project.projects[pro].image.forEach(function (img){
    //         var projectImage = HTMLprojectImage.replace("%data%",img);
    //         $(".project-entry:last").append(projectImage);
    //         });
    //     }
    // }
project.display();
// // function inName(name){
// //     name = name.trim().split(" ");
// //     name[1] = name[1].toUpperCase;
// //     name[0] = name[0].slice(0,1).toUpperCase + name[0].slice(1).toLowerCase();
// //     return name[0]+" "+name[1];
// // }
// // $("#main").append(internationalizeButton);


















