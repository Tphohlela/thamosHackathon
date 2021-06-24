var a = document.querySelector(".a");
var b = document.querySelector(".b");
var y = document.querySelector(".y");
var listJobs = document.querySelector(".listJobs");

// const interest = document.querySelector(".")
// const Qualification = document.querySelector(".")


var store = {};


var jobList = [
    { job: 'software-developer', qual: 'National Higher Certificate', },
    { job: 'software-developer', qual: 'National Higher Certificate', },
    { job: 'software-developer', qual: 'Diploma', },
    { job: 'software-developer', qual: 'Bachelors Degree', },
    { job: 'software-engineer', qual: 'Bachelors Degree', },
    { job: 'software-engineer', qual: 'Bachelors Degree', },
    { job: 'software-engineer', qual: 'Bachelors Degree', },
    { job: 'software-engineer', qual: 'Bachelors Degree', },
    { job: 'software-engineer', qual: 'Bachelors Degree', },
    { job: 'IT technician', qual: 'National Higher Certificate', },
    { job: 'IT technician', qual: 'National Higher Certificate', },
    { job: 'IT technician', qual: 'National Higher Certificate', },
    { job: 'IT technician', qual: 'National Higher Certificate', },
    { job: 'front end developer', qual: 'National Higher Certificate', },
    { job: 'front end developer', qual: 'National Higher Certificate', },
    { job: 'front end developer', qual: 'Bachelors Degree', },
    { job: 'back end developer', qual: 'Diploma', }
];



if (localStorage['s']) {
    store = JSON.parse(localStorage['s']);
}

function track() {

    var name = a.value;
    var date = y.value;
    //var cert = c.value;

    if (name) {
        store[name] = 0;
        localStorage['s'] = JSON.stringify(store);
    }





}

var list1 = [];
var list2 = [];


document.getElementById('select').onclick = function () {
    var name = a.value;
    if (localStorage['s']) {

        store = JSON.parse(localStorage['s']);

    }
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var dropdowns = document.getElementById("qualifi").value;
    var date = document.getElementById("date").value;
    for (var checkbox of checkboxes) {
        if (!list1.includes(checkbox.value)) {
            list1.push(checkbox.value)
        }
    }

    jobList.forEach(function (jobList) {
        for (let i = 0; i < list1.length; i++) {
            const element = list1[i];
            // const rhythmic = list2[t];
            // alert(element)
            if (element == jobList.job && dropdowns == jobList.qual) {
                listJobs.innerHTML = 'You have been matched successfully';
                listJobs.innerHTML += `<ol>${'Job : ' + jobList.job + ' ,  ' + 'Qualification required :  ' + jobList.qual}</ol>`
                store[name] = 1;
                store[date] = 1;
               
            }
            // else {
            //     listJobs.innerHTML = 'Unfortunately,we have not been able to find a match for you'
            //     store[name] = 0;
            //     store[date] = 1;

            // }
            localStorage['s'] = JSON.stringify(store);
        }
        //  listJobs.innerHTML += `<ol>${'Job : '+ jobList.job + ' ,  ' + 'Qualification required :  ' + jobList.qual}</ol>`
        // console.log(jobList.job);
    });

}

