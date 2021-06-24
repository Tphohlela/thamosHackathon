var jobList = [
    { job: 'software developer', qual: 'bachelors degree', },
    { job: 'IT technician', qual: 'matric', },
    { job: 'front end developer', qual: 'matric', },
    { job: 'back end developer', qual: 'matric', }
];
var category =[
    { job: 'software developer',matchCounter:1, unmatchCounter:1},
    { job: 'IT technician',matchCounter:1, unmatchCounter:1},
    { job: 'front end developer',matchCounter:1, unmatchCounter:1 },
    { job: 'back end developer',matchCounter:1, unmatchCounter:1}
]
var userDetails= {
    Qualification : 'bachelors degree',
    interest :'software developer'
}
var categoryName =[]
var matchList =[]
var unmatchList=[]
var categoryMap = jobList.map(function(element){
    categoryName.push(element.job)
})
var matching = category.map(function(element){
matchList.push(element.matchCounter)
unmatchList.push(element.unmatchCounter)
})
var match = jobList.filter(function(element){
    return element.qual == userDetails.Qualification
})
console.log(match)
        var mychart = document.getElementById('chart').getContext('2d');
        var newChart = new Chart(mychart, {
            type: "bar",
            data: {
                labels: categoryName,
                datasets: [{
                    label: 'matching skills',
                    data: matchList,
                backgroundColor:'orange',
                },
                {
                    label: 'unmatching skills',
                    data: unmatchList,
                backgroundColor:'red',
                }]
        },
            options: {}
        });