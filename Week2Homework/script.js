// this is the javascript for index.html

// const courseName = document.getElementById('courseName');
// const searchButton = document.getElementById('searchButton');
// const course = document.getElementById('course');

// create 2 variables for the search object
var pythonCourse = 
{
    Course: 1001 ,
    Name: "python101",
    Description: "This is an entry level programming course to start your computer programming journey!" 
}

var javaScript =
{
    Course: 1010 ,
    Name: "Javascript101" ,
    Description: "This is a level two website development course to help enhance your knowledge on designing websites."
}

// This function will create the ability to find the input and display in the HTML
function submitCourse(courseName)
{
    console.log(courseName);

    let output = document.getElementById("course");
    output.innerHTML = courseName;

}