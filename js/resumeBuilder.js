/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Rishi Sukul");
 var formattedName = HTMLheaderName.replace("%data%","Rishi Sukul");
 var formattedRole = HTMLheaderRole.replace("%data%","NGO-IT-specialist");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {};
var education = {};
var work = {};
var projects = {};

bio = {
    "name": "Rishi Sukul",
    "role": "Medical Data & System Support Technician",
    "welcomeMessage": "NGO IT-specialist",
    "contacts": {
        "mobile": "please email me",
        "email": "justRishi@gmail.com",
        "github": "justRishi",
        "linkedIn": "https://es.linkedin.com/in/rishisukul",
        "location": "Barcelona (spain)"
    },
    "skills": [
        "Managing SharePoint projects",
        "Web development",
        "Business intelligence",
        "HR systems",
        "Software development"
    ],
    "languages": [
        {
            "language": "dutch",
            "level": "native speaker"
        },
        {
            "language": "english",
            "level": "fluent"
        },
        {
            "language": "spanish",
            "level": "basic"
        },
        {
            "language": "german",
            "level": "basic"
        }
    ]
};

education = {
	"schools" : [{
			"name"				: "the Hague University of Applied Sciences",
			"location"			: "the Hague",
			"degree"			: "Bachelor",
			"specialisation"	: "information systems and technical infrastructures",
			"dates"				: "July 2002",
			"url"				: "http://www.thehagueuniversity.com/"
		},
		{
			"name"				: "University of Amsterdam",
			"location"			: "Amsterdam",
			"degree"			: "post graduate courses",
			"specialisation"	: "philosophy",
			"dates"				: "July 2009",
			"url"				: "http://www.uva.nl/en/home"
		}	
	],
	"courses" : [
		{
			"title"				: "Nanodegree frontend web developer",
			"school"			: "Udacity",																								
			"date"				: "ongoing",
			"url"				: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title"				: "Nanodegree Data analyst",
			"school"			: "Udacity",
			"date"				: "ongoing",
			"url"				: "https://www.udacity.com/course/data-analyst-nanodegree--nd002"
		}
	]
}

work = {
	"jobs" : [
		{
			"employer"	: "MSF Spain (MSF = doctors without borders)", 
			"title"		: "Medical Data & System Support Technician",
			"location"	: "Barcelona",
			"dates"		: "june 2015 - now",
			"description" : "A temporary position to help setup Health Information Systems in the MSF Spain missions. The purpose of this project is to improve decision making by speeding up and improving the capture, validation, storage, aggregation and analysis of the medical data. For this I will travel to some of the MSF missions. "
		},
		{
			"employer"	: "MSF Spain (MSF = doctors without borders)", 
			"title"		: "Information Management Coordination", 
			"location"	: "Barcelona, Spain",
			"dates"		: "May 2012 - May 2015",
			"description" : "To coordinate work related to the ECMS in use(SharePoint) and supporting activities related to document management. Managing a team and evolution of the solutions implemented and organizing improvements to document processes. Participating in O&S departmental coordinator meetings."
		},
		{
			"employer"	: "MSF Holland (MSF = doctors without borders)", 
			"title"		: "SharePoint advisor + HR-field Support", 
			"location"	: "Amsterdam, the Netherlands",
			"dates"		: "August 2011 - April 2012",
			"description" : "Developing and maintaining the SharePoint environment so that the continuity and functioning of the various community spaces (e.g. intranet) of the organization are ensured. Part time Supporting MSF-teams in the Field with their payroll system (Homere)."
		},
		{
			"employer"	: "Motion10", 
			"title"		: "BI consultant", 
			"location"	: "Rotterdam, the Netherlands",
			"dates"		: "May 2011 - Juky 2011",
			"description" : "IT consultancy solution provider in the Netherlands.Implementing and designing portals, information interchange (Biz-Talk) and Business Intelligence solutions (SQL -Server) for large companies such as Shell  and Universities, e.g. Erasmus University."
		},
		{
			"employer"	: "Performation B.V.", 
			"title"		: "BI-consultant", 
			"location"	: "Bilthoven, the Netherlands",
			"dates"		: "2007 - 2010",
			"description" : "IT consultancy and Business Intelligence (BI) solution provider in the Netherlands. Implementing and maintaining Business Intelligence (SQL-Server)/ SharePoint solutions for healthcare"
		},
		{
			"employer"	: "Defense Telematics Organization", 
			"title"		: "Software Developer / Information architect", 
			"location"	: "Rijswijk, the Netherlands",
			"dates"		: "2007 - 2010",
			"description" : "IT service supplier for the Dutch Ministry of Defense.   Integrating multiple systems maintained by multiple units. Writing work instructions for administrators and developers and supporting the organization’s database administration unit. Developing and maintaining ECM."
		},
		{
			"employer"	: "I&I Detachering B.V & Défi B.V", 
			"title"		: "Software Developer", 
			"location"	: "Rotterdam, the Netherlands",
			"dates"		: "1999 - 2000",
			"description" : "Hired by I&I to design and build a new reporting system for the CBS (National Bureau for Statistics) with migration of historical data.  "
		}

	]	
}

projects = {
	"projects": [
		{
			"title" : "Upgrading and Migrating to new SharePoint version (version 2013)",
			"dates" : "September 2014 - May 2015" ,
			"description" : "Selecting solution provider to help us with upgrading and migrating, based on selection criteria after creating a RFP (2014). This project included changing and improving Infrastructure before migrating and simplifying solutions with modern insights."
		},
		{
			"title": "Organizing & doing the Migration of the old intranet to the new intranet", 
			"dates": "June 2012 - August 2012",
			"description": "Managing migrating the old (plone based) intranet to SharePoint(2012)"  
		}
	]
}

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill, i, arr){
    	$("#skills").append(HTMLskills.replace("%data%", skill));
    });
}

function displayWork(){
	if (work.jobs.length > 0){
		work.jobs.forEach(function(job, i, arr){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", job.title);
			
			$(".work-entry:last").append( formattedEmployer + formattedJobTitle);
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
		});
	}
}

displayWork();

$("#main").append(internationalizeButton);

function inName(fn, ln){
	var names = bio.name.trim().split(" ");
    
    if (names.length === 2){
    	names[1] = names[1].toUpperCase();
    	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    }

	return names.join(" ");
}
