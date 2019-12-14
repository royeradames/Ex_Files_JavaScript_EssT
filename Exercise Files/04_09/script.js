/* make an object name course with values of 
title
instructor
level
published
views
*/
// long hand
// var course = Object();

// course.title = "JavaScript Essential Training";
// course.instructor = "Morten Ranhendriksen";
// course.level = 1;
// course.published = 2019;
// course.views = 0;

// short hand
//add a function that updates the view
var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Ranhendriksen",
    level: 1,
    published: 2019,
    views: 0,
    updateViews: function(){
        return ++course.views;
    };
}

//call properties and log it on the console
console.log(course.views);
console.log(course.title);
course.updateViews()
console.log(course.views);