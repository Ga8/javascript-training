var topics = require('../data').topics;

var result = topics.filter(function (topic) {
    //returns true if we keep this topic

    if ((topic.user.name) === "Leonard")
        return true;
});
//console.log(result);

result2 = topics.filter(topic => topic.user.name === "leonard");


var titles = topics.map(function (topic) {
    return topic.title;
});

//console.log("titles", titles);

var hasViolence = topics.some(function (topic) {

    return topic.tags.includes('violence');
});


//console.log("violence : ", hasViolence);


//1

var filtered = topics.filter(function (topic) {

    return topic.comments.some(function (comment) {
        return comment.user.name === "Sheldon"
    })
});

var titles = filtered.map(function (topic) {
    return topic.title;

});
console.log("filtered topics", titles);


//fat arrow
var filter2 = topics.filter(topic => topic.comments.some(comment=> comment.user.name === "Sheldon"));

var title2 = filter2.map(topic=>topic.title);

console.log("filter2 ", title2);


//2
PennyTab = [];
var Pen = topics.forEach(function (topic) {
    topic.comments.forEach(function (comment) {
        if (comment.user.id === 6) {
            PennyTab.push(comment.id)
        }
    })
});
console.log("table des ids de penny :", PennyTab);


//3
tabViolent = [];
var violent = topics.forEach(function (topic) {
    topic.comments.forEach(function (comment) {
        if (comment.user.admin !== true && comment.tags !== undefined &&comment.tags.includes("science")){
            tabViolent.push(comment.id);
        }
})
})
;

console.log(tabViolent);







