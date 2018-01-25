// Chinese version Resume

// Part1-Bio
var bio ={
    "name": "蒋慧",
    "role": "初级前端工程师",
    "contact":{
        "mobile": "15686110467",
        "email":"jhjocelyn@outlook.com",
        "github":"jhjocelyn",
        "weChat":"Jocelyn_Jiang0906",
        "location":"西安 中国"
    },
    "welcomeMessage": "澹泊明志，宁静致远",
    "skills":["Java","JavaScript","HTML","CSS","JQuery","Bootstrap","Git"],
    "biopic":"images/jh.jpg"
};

bio.display = function (){
    var name = HTMLheaderName.replace("%data%",bio.name);
    var role = HTMLheaderRole.replace("%data%",bio.role);

    $("#header").prepend(role,name);

    var mobile = HTMLmobile.replace("%data%",bio["contact"].mobile);
    var email = HTMLemail.replace("%data%",bio["contact"].email);
    var github = HTMLgithub.replace("%data%",bio["contact"].github);
    var weChat = HTMLweChat.replace("%data%",bio["contact"].weChat);
    var location = HTMLlocation.replace("%data%",bio["contact"].location);


    $("#topContacts","#footerContacts").append(mobile,email,github,weChat,location);

//footer:contacts display
    $("#footerContacts").append(mobile,email,github,weChat,location);
    
    var bioPicture = HTMLbioPic.replace("%data%",bio.biopic);
    var bioMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

    $("#header").append(bioPicture,bioMsg);

    if(bio.skills.length>0){
        $("#header").append(HTMLskillsStart);
        for(var i = 0;i < bio.skills.length; i++){
            var skill = HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(skill);
        }
    }
};

bio.display();


//Part2-Work Experience
var work ={
    jobs:[
        {"employer":"海诺旅行",
         "title":"实习导游",
         "location":"Nottingham",
         "dates":"2014/09-2014/12",
         "description":"负责联系英国当地司机和对应景点工作人员，沟通安排购票，乘车事宜，并带领中国旅游团参观英国本地风景名胜（如牛津，剑桥，约克郡等）。"+
                       "在此次兼职中，更好地锻炼了自己的英文交流能力和安排协调事务的能力。"
        }
    ]
};

work.display = function(){
    $("#workExperience").append(HTMLworkStart);
    for(let i=0; i<work.jobs.length;i++){
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
    
}

work.display();

//Part3-Project
var project={
    projects:[
        {
             "title":"多线程在线字典",
             "content":"该项目采用的是客户-服务器模式实现多线程。这个多线程服务器可以同时允许多个客户机接入，各客户机都可以通过服务器搜索单词释义，增加，删减单词",
             "dates":"2017/08-2017/09",
             "image":["images/pro1.png"]
        },
        {
            "title":"在线共享画板",
            "content":"该项目是使用RMI技术建立一个共享画板，使得不同用户可以在同一画板上绘图，此外该系统含一个聊天室功能；管理员可以批准普通用户加入共享画板并且拥有删除普通用户，保存画板内容的权限"
                      +"在该小组项目中我主要负责RMI聊天室的建立和画板的设计以及部分实现",
            "dates":"2017/09-2017/10",
            "image":["images/pro2-2.png"]
        },
        {
            "title":"基于神经网络和色度学分析的黑色素瘤诊断",
            "content":"通过对一系列黑色素瘤图片进行图像预处理，提取图像中黑色素瘤的色度，厚度，边缘复杂度等特征作为训练集，然后对神经网络进行多次训练和调试，使这些神经网络可以自动识别这些特征，从而达到使神经网络能够识别黑色素瘤的目的",
            "dates":"2015/10-2016/03",
            "image":["images/fyp-1.png","images/fyp-2.png"]
        }
    ]
};

project.display = function(){
    project.projects.forEach(function (pro){
        $("#projects").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace("%data%",pro.title);
        var projectDates = HTMLprojectDates.replace("%data%",pro.dates);
        var projectDes = HTMLprojectDescription.replace("%data%",pro.content);
        $(".project-entry:last").append(projectTitle);
        $(".project-entry:last").append(projectDates);
        $(".project-entry:last").append(projectDes);
        if(pro.image.length>0){
            pro.image.forEach(function (img){
            var projectImage = HTMLprojectImage.replace("%data%",img);
            $(".project-entry:last").append(projectImage);
            });
        }
    });
}

project.display();

//Part4-Education
var education = {
     schools:[
                 {
                     "name":"西安交通-利物浦大学",
                     "location":"Suzhou",
                     "degree":"学士学位",
                     "majors":["通信工程"],
                     "dates":"2012-2014",
                     "url":"www.xjtlu.edu.cn/zh"
                 },
                 {
                     "name":"英国利物浦大学",
                     "location":"Liverpool",
                     "degree":"学士学位",
                     "majors":["通信工程"],
                     "dates":"2014-2016",
                     "url":"https://www.liverpool.ac.uk/"
                 },
                 {
                      "name":"墨尔本大学",
                      "location":"Melbourne",
                      "degree":"研究生学位",
                      "majors":["IT"],
                      "dates": "2017-2019",
                      "url":"http://www.unimelb.edu.au"
                  }
            ],
};

education.display = function (){
    education.schools.forEach(function (sch){
       $("#education").append(HTMLschoolStart);
       var schName = HTMLschoolName.replace("%data%",sch.name);
       var schDegree = HTMLschoolDegree.replace("%data%",sch.degree);
       var schDates = HTMLschoolDegree.replace("%data%",sch.dates);
       var schLocation = HTMLschoolLocation.replace("%data%",sch.location);

       sch.majors.forEach(function(major){
            var schMajor = HTMLschoolMajor.replace("%data%",major);
            $(".education-entry:last").append(schMajor);
       });
       
       $(".education-entry:last").append(schName,schDates,schLocation,schDegree);
    });

};

education.display();

$("#mapDiv").append(googleMap);
