// var course = new Object();

// var course = {
//     title: "JavaScript Essential Training",
//     instructor: "Morten Rand-Hendriksen",
//     level: 1,
//     published: true,
//     views: 0,
//     updateViews: function() {
//         return ++course.views;
//     }
// }

// console.log(course);

//build a constructor 
//make an istance
//log it out

var Course = function(title, instructor, level, published, views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function(){
        return ++this.views;
    }
};

//put all instances on an array to make it easier to work with
//new is an important key word you need when making an instance
var courses = [ new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0), new Course("Make work your friend and your life will be better","Royer Adames", 1, true, 0)];
console.log(courses);


