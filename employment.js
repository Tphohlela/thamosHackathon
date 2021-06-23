var listJobs = document.querySelector(".listJobs");
var viewBtn = document.querySelector(".viewBtn");
var applyBtn = document.querySelector(".applyBtn");
var searchBox = document.querySelector(".searchBox")

// var search = searchBox.value;


var jobList = [
    { job: 'software developer', qual: 'bachelors degree', },
    { job: 'software developer', qual: 'bachelors degree', },
    { job: 'software developer', qual: 'bachelors degree', },
    { job: 'software developer', qual: 'bachelors degree', },
    { job: 'software engineer', qual: 'bachelors degree', },
    { job: 'software engineer', qual: 'bachelors degree', },
    { job: 'software engineer', qual: 'bachelors degree', },
    { job: 'software engineer', qual: 'bachelors degree', },
    { job: 'software engineer', qual: 'bachelors degree', },
    { job: 'IT technician', qual: 'matric', },
    { job: 'IT technician', qual: 'matric', },
    { job: 'IT technician', qual: 'matric', },
    { job: 'IT technician', qual: 'matric', },
    { job: 'front end developer', qual: 'matric', },
    { job: 'front end developer', qual: 'matric', },
    { job: 'front end developer', qual: 'matric', },
    { job: 'back end developer', qual: 'matric', }
];



// function jobs(){

//var search = searchBox.value;
jobList.forEach(function (jobList) {

    listJobs.innerHTML += `<ol>${jobList.job}</ol>`
});