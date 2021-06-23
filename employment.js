var listJobs = document.querySelector(".listJobs");
var viewBtn = document.querySelector(".viewBtn");
var applyBtn = document.querySelector(".applyBtn");
var key = document.querySelector(".key");

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



function jobs(){

    listJobs.innerHTML = `<h3 style="padding-left:40px;">Careers in Tech</h3>`
//var search = searchBox.value;
jobList.forEach(function (jobList) {
   

    listJobs.innerHTML += `<ol>${'Job : '+ jobList.job + ' ,  ' + 'Qualification required :  ' + jobList.qual}</ol>`

});
}


viewBtn.addEventListener('click',jobs)