/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {};
var education = {};
var work = {};
var projects = {};

bio = {
    "name": "Rishi Sukul",
    "role": "Medical Data & System Support Technician",
    "welcomeMessage": "Please contact me for any questions",
    "contacts": {
        "mobile": "please email me",
        "email": "justRishi@gmail.com",
        "github": "justRishi",
        "linkedIn": "https://es.linkedin.com/in/rishisukul",
        "location": "Barcelona, Spain"
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
    ],
    "biopic" : "images/me_small.jpg",
    "display": function(){
    	var formattedName = HTMLheaderName.replace("%data%","Rishi Sukul");
		var formattedRole = HTMLheaderRole.replace("%data%","NGO-IT-specialist");

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#header").append(HTMLwelcomeMsg.replace("%data%",this.welcomeMessage));

    	$("#topContacts").append(HTMLlocation.replace("%data%",this.contacts.location));
    	$("#topContacts").append(HTMLmobile.replace("%data%",this.contacts.mobile));
    	$("#topContacts").append(HTMLemail.replace("%data%",this.contacts.email));
    	$("#topContacts").append(HTMLgithub.replace("%data%",this.contacts.github));
    	$("#header").append(HTMLbioPic.replace("%data%",this.biopic));

    	if (this.skills.length > 0){
			$("#header").append(HTMLskillsStart);
    		this.skills.forEach(function(skill, i, arr){
    			$("#skills-h3").append(HTMLskills.replace("%data%", skill));
    		});
		}
    }
};

education = {
	"schools" : [{
			"name"				: "the Hague University of Applied Sciences",
			"location"			: "the Hague, the Netherlands",
			"degree"			: "Bachelor",
			"specialisation"	: "information systems and technical infrastructures",
			"dates"				: "July 2002",
			"start"				: new Date(1996, 9, 1),
			"end"				: new Date(2002, 6, 30),
			"url"				: "http://www.thehagueuniversity.com/"
		},
		{
			"name"				: "University of Amsterdam",
			"location"			: "Amsterdam, the Netherlands",
			"degree"			: "post graduate courses",
			"specialisation"	: "philosophy",
			"dates"				: "July 2009",
			"start"				: new Date(2008, 9, 1),
			"end"				: new Date(2009, 7, 1),
			"url"				: "http://www.uva.nl/en/home"
		}],
	"certifications" :	[
		{
			"title"				: "Microsoft Certified Professional",
			"location"			: "Rotterdam, The Netherlands",
			"school"			: "Microsoft Cerfication",
			"date"				: "April 16, 2012",
			"start"				: new Date(2012, 4, 15),
			"end"				: new Date(2012, 4, 16),
			"url"				: "docs/MS_Learning_Transcript.PDF"
		},
		{
			"title"				: "Business Intelligence Developer 2008",
			"location"			: "Goa, India",
			"school"			: "Koenig -  Microsoft Certified IT Professional",
			"date"				: "March 14, 2011",
			"start"				: new Date(2011, 3, 1),
			"end"				: new Date(2011, 3, 14),
			"url"				: "docs/MS_Learning_Transcript.PDF"
		},
		{
			"title"				: "SharePoint Administrator 2010",
			"location"			: "Goa, India",
			"school"			: "Koenig -  Microsoft Certified IT Professional",
			"date"				: "February 19, 2011",
			"start"				: new Date(2011, 2, 1),
			"end"				: new Date(2012, 2, 19),
			"url"				: "docs/MS_Learning_Transcript.PDF"
		},
		{
			"title"				: "SharePoint Developer 2010",
			"location"			: "Goa, India",
			"school"			: "Koenig -  Microsoft® Certified Professional Developer",
			"date"				: "March 3, 2011",
			"start"				: new Date(2012, 2, 20),
			"end"				: new Date(2012, 3, 3),
			"url"				: "docs/MS_Learning_Transcript.PDF"
		},
		{
			"title"				: "Web Developer",
			"location"			: "Shimla, India",
			"school"			: "Koenig - Microsoft Certified Professional Developer",
			"date"				: "June 14, 2007",
			"start"				: new Date(2007, 5, 14),
			"end"				: new Date(2007, 6, 1),
			"url"				: "docs/MS_Learning_Transcript.PDF"
		},
		{
			"title"				: "Oracle 8i Certified Professional",
			"location"			: "The Hague, The Netherlands",
			"school"			: "Oracle University",
			"date"				: "February 2nd, 2002",
			"start"				: new Date(2000, 10, 1),
			"end"				: new Date(2001, 2, 2),
			"url"				: "http://education.oracle.com"
		},
		{
			"title"				: "Java Certified Programmer 1.2",
			"location"			: "The Hague, The Netherlands",
			"school"			: "Sun",
			"date"				: "January 5th, 2002",
			"start"				: new Date(2001, 10, 1),
			"end"				: new Date(2002, 2, 2),
			"url"				: "http://education.oracle.com"
		}
	],
	"courses" : [
		{
			"title"				: "Nanodegree frontend web developer",
			"school"			: "Udacity",
			"date"				: "ongoing",
			"start"				: new Date(2015, 6, 1),
			"end"				: new Date(),
			"url"				: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title"				: "Nanodegree Data analyst",
			"school"			: "Udacity",
			"date"				: "ongoing",
			"start"				: new Date(2015, 6, 1),
			"end"				: new Date(),
			"url"				: "https://www.udacity.com/course/data-analyst-nanodegree--nd002"
		}
	],
	"display" : function(){
		var formattedNameDegree;

		if (this.schools.length > 0){
			this.schools.forEach( function(school, i, arr){
				$("#education").append(HTMLschoolStart);

				formattedNameDegree = HTMLschoolName.replace("%data%",school.name).replace("#",school.url) + HTMLschoolDegree.replace("%data%",school.degree);

				$(".education-entry:last").append(formattedNameDegree);
				$(".education-entry:last").append(HTMLschoolDates.replace("%data%",school.dates));
				$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",school.location));
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",school.specialisation));
			});
		}

		if (this.courses.length > 0){
			$("#education").append(HTMLonlineClasses);
			this.courses.forEach( function(course, i, arr){
				$("#education").append(HTMLschoolStart);

				formattedNameDegree = HTMLonlineTitle.replace("%data%",course.title).replace("#",course.url) + 	HTMLonlineSchool.replace("%data%",course.school);

				$(".education-entry:last").append(formattedNameDegree);
				$(".education-entry:last").append(HTMLonlineDates.replace("%data%",course.date));
			});
		}

		if (this.certifications.length > 0){
			$("#education").append(HTMLCertification);
			this.certifications.forEach( function(certification, i, arr){
				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(HTMLCertificationSchool.replace("%data%",certification.school).replace("#",certification.url));
				$(".education-entry:last").append(HTMLCertificationDate.replace("%data%",certification.date));
				$(".education-entry:last").append(HTMLCertificationLocation.replace("%data%",certification.location));
				$(".education-entry:last").append(HTMLCertificationTitle.replace("%data%",certification.title));
			});
		}
	}
}

work = {
	"jobs" : [
		{
			"employer"	: "MSF Spain (doctors without borders)",
			"title"		: "Medical Data & System Support Technician",
			"location"	: "Barcelona, Spain",
			"dates"		: "june 2015 - now",
			"start"		: new Date(2015, 6, 1),
			"end"		: new Date(2015, 12, 31),
			"description" : "A temporary position to help setup Health Information Systems in the MSF Spain missions. The purpose of this project is to improve decision making by speeding up and improving the capture, validation, storage, aggregation and analysis of the medical data. For this I will travel to some of the MSF missions. ",
			"url"		: "http://www.msf.es/"
		
		},
		{
			"employer"	: "MSF Spain (doctors without borders)",
			"title"		: "Information Management Coordination",
			"location"	: "Barcelona, Spain",
			"dates"		: "May 2012 - May 2015",
			"start"		: new Date(2012, 5, 1),
			"end"		: new Date(2015, 5, 30),
			"description" : "To coordinate work related to the ECMS in use(SharePoint) and supporting activities related to document management. Managing a team and evolution of the solutions implemented and organizing improvements to document processes. Participating in O&S departmental coordinator meetings.",
			"url"		: "http://www.msf.es/"
		},
		{
			"employer"	: "MSF Holland (doctors without borders)",
			"title"		: "SharePoint advisor + HR-field Support",
			"location"	: "Amsterdam, the Netherlands",
			"dates"		: "August 2011 - April 2012",
			"start"		: new Date(2011, 8, 1),
			"end"		: new Date(2012, 4, 30),
			"description" : "Developing and maintaining the SharePoint environment so that the continuity and functioning of the various community spaces (e.g. intranet) of the organization are ensured. Part time Supporting MSF-teams in the Field with their payroll system (Homere).",
			"url"		: "www.artsenzondergrenzen.nl"
		},
		{
			"employer"	: "Motion10",
			"title"		: "BI consultant",
			"location"	: "Rotterdam, the Netherlands",
			"dates"		: "April 2011 - July 2011",
			"start"		: new Date(2011, 4, 1),
			"end"		: new Date(2011, 7, 30),
			"description" : "IT consultancy solution provider in the Netherlands.Implementing and designing portals, information interchange (Biz-Talk) and Business Intelligence solutions (SQL -Server) for large companies such as Shell  and Universities, e.g. Erasmus University.",
			"url"		: "http://www.motion10.nl"
		},
		{
			"employer"	: "Performation B.V.",
			"title"		: "BI-consultant",
			"location"	: "Bilthoven, the Netherlands",
			"dates"		: "2007 - 2010",
			"start"		: new Date(2007, 1, 1),
			"end"		: new Date(2010, 12, 31),
			"description" : "IT consultancy and Business Intelligence (BI) solution provider in the Netherlands. Implementing and maintaining Business Intelligence (SQL-Server)/ SharePoint solutions for healthcare",
			"url"		: "http://www.performation.nl/"
		},
		{
			"employer"	: "Defense Telematics Organization",
			"title"		: "Software Developer / Information architect",
			"location"	: "Rijswijk, the Netherlands",
			"dates"		: "2000 - 2007",
			"start"		: new Date(2000, 8, 1),
			"end"		: new Date(2006, 12, 31),
			"description" : "IT service supplier for the Dutch Ministry of Defense.   Integrating multiple systems maintained by multiple units. Writing work instructions for administrators and developers and supporting the organization’s database administration unit. Developing and maintaining ECM.",
			"url"		: "https://www.defensie.nl/organisatie/dmo/inhoud/onderdelen/jivc"
		},
		{
			"employer"	: "I&I Detachering B.V & Défi B.V",
			"title"		: "Software Developer",
			"location"	: "Rotterdam, the Netherlands",
			"dates"		: "1999 - 2000",
			"start"		: new Date(1999, 8, 1),
			"end"		: new Date(2000, 7, 30),
			"description" : "Hired by I&I to design and build a new reporting system for the CBS (National Bureau for Statistics) with migration of historical data.  "
		}

	],
	"display" : function(){
		if (this.jobs.length > 0){
			this.jobs.forEach(function(job, i, arr){
				$("#workExperience").append(HTMLworkStart);

				var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer).replace("#",job.url);
				var formattedJobTitle = HTMLworkTitle.replace("%data%", job.title);

				$(".work-entry:last").append( formattedEmployer + formattedJobTitle);
				$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
				$(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
				$(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
			});
		}
	}
}

projects = {
	"projects": [
		{
			"title": "Imp. Health Information System for MSF",
			"dates": "October 2015",
			"start"		: new Date(2015, 10, 22),
			"end"		: new Date(2015, 10, 29),
			"location"  : "Kilis, Turkey",
			"description": "Replace excel files In MSF Projects with an on- and offline webbased Health Information System." 
//			"image" : "images/oldOLE_small.jpg"
		},
		{
			"title": "Imp. Health Information System for MSF",
			"dates": "October 2015",
			"start"		: new Date(2015, 10, 22),
			"end"		: new Date(2015, 10, 29),
			"location"  : "Jerusalem, Israel",
			"description": "Replace excel files In MSF Projects with an on- and offline webbased Health Information System." 
//			"image" : "images/oldOLE_small.jpg"
		},
		{
			"title": "Imp. Health Information System for MSF",
			"dates": "August 2015",
			"start"		: new Date(2015, 8, 7),
			"end"		: new Date(2015, 8, 14),
			"location"  : "Mexico city, Mexico",
			"description": "Replace excel files In MSF Projects with an on- and offline webbased Health Information System. " 
			               + " I was hired to replace the project manager and finanlize it." ,
			//"image" : "images/oldOLE_small.jpg"
		},
		{
			"title": "Imp. Health Information System for MSF",
			"dates": "August 2015",
			"start"		: new Date(2015, 8, 14),
			"end"		: new Date(2015, 8, 21),
			"location"  : "Acapulco, Mexico",
			"description": "Replace excel files In MSF Projects with an on- and offline webbased Health Information System." ,
			"image" : "images/oldOLE_small.jpg"
		},
		{
			"title" : "Upgrading and Migrating to new SharePoint version (version 2013)",
			"dates" : "September 2014 - May 2015" ,
			"start"		: new Date(2014, 9, 1),
			"end"		: new Date(2015, 5, 31),
			"location"  : "Barcelona, Spain",
			"description" : "Selecting solution provider to help us with upgrading and migrating, " +
			"based on selection criteria after creating a RFP (2014). This project included changing " +
			"and improving Infrastructure before migrating and simplifying solutions with modern insights.",		
			"employer" : "",
			"image" : "images/newOLE_small.jpg"
		},
		{
			"title": "Organizing & doing the Migration of the old intranet to the new intranet",
			"dates": "June 2012 - August 2012",
			"start"		: new Date(2012, 6, 1),
			"end"		: new Date(2012, 8, 31),
			"location"  : "Barcelona, Spain",
			"description": "Managing migrating the old (plone based) intranet to SharePoint(2012)" ,
			"image" : "images/oldOLE_small.jpg"
		}
	],
	"display": function(){
		this.projects.forEach(function(project, i, arr){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
			$(".project-entry:last").append(HTMLprojectLocation.replace("%data%", project.location));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
			
			if (project.image != null ){
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.image));
			}
		});
	}
}

bio.display();
projects.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);

//$("#main").append(internationalizeButton);

function inName(fn, ln){
	var names =	 bio.name.trim().split(" ");

    if (names.length === 2){
    	names[1] = names[1].toUpperCase();
    	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    }

	return names.join(" ");
}

google.load("visualization", "1", {packages:["timeline"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Position' });
    dataTable.addColumn({ type: 'string', id: 'Company' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });

    work.jobs.forEach(function(job, i, arr){
        dataTable.addRow(["Work", job.employer,job.start, job.end]);
	});

	education.schools.forEach(function(school, i, arr){
        dataTable.addRow(["school", school.name,school.start, school.end]);
	});

	education.certifications.forEach(function(cert, i, arr){
        dataTable.addRow(["certification", cert.title,cert.start, cert.end]);
	});

	education.courses.forEach(function(course, i, arr){
		if (course.start > 0 ){
        	dataTable.addRow(["Course", course.school + " - " + course.title,course.start, course.end]);
		}
	});

	var options = {
    	timeline: { groupByRowLabel: true }
  	};

    chart.draw(dataTable, options);
}