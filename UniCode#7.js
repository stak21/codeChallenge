//Data
//SID# (9 digits)
//fName (<20Char)
//Sex (M/F)
//Sexual orientation (M/F)
//age
//political leaning (0-conservative - 10-liberal)
//Major Hobby (<20Char)
//minor Hobby (<20Chat)
//height (in.)
//weight (lbs)

//entries are ordered by SID
//Match if sex and sexO are compatible
//And ONE of the following match
//1. Social identity (political leaning +-2)
//2. Personality (both hobbies)
//3. Appearance (10% height/weight)
//Add the sid, name, etc to an nodeList

//
//I want to register for the matchmaking
//Create a website that allows quick registeration by entering all necessary information
//be able to type in an sid and get matches
//output the match below
//

//To do above
//I will need to create the layout of the website
//connect the html with js and css
//once thats done, write the js
//it should allow input varied by the button the user pressed
//js should recieve the information and act on it
//following function should activate
//register
//there should be X input boxes and a button
//once the button is pressed call a function
//the function should check all input boxes and verify valid
//anything invalid should respond with whichever field is incorrect
//if valid then it should push them into an array elment object and add the properties accordingly
//give a alert telling user that it was sucessful
//match
//User will be able to put in their SId in an input box and press the button
//the button will call a function Match
//the parameter should accept the sid and use it to


// Define a structure that represents each individual.
class Student {
  constructor(SID, fName, sex, sexualOrientation, age, politicalLeaning, majorHobby, minorHobby, height, weight) {
    this.SID = SID;
    this.fName = fName;
    this.sex = sex;
    this.sexualOrientation = sexualOrientation;
    this.age = age;
    this.politicalLeaning = politicalLeaning;
    this.majorHobby = majorHobby;
    this.minorHobby = minorHobby;
    this.height = height;
    this.weight = weight;
  }
}

const student = new Student(123, 'Taki', 'M', 'F', 23, 1, 'gaming', 'tennis', 167, 140);

console.log(student);
// Write a function that reads each entry from the database file, and creates a structure object that is inserted in a linked list of individuals.

//Read and Write all student information and inserted each student to a node list

// Write a function that finds an individual in the linked list based on their SID.
// const findStudent = (SID) => {
//   let currentNodePTR; //set it to head
//   while (currentNodePTR !== null) {
//     if (currentNodePTR.student.SID === SID) {
//       return currentNodePTR;
//     } else {
//       currentNodePTR = currentNodePTR.next;
//     }
//   }
//   return console.error('Error: cannot find any SID in the database. Please try again.');
// };
// Write a function that finds all the matches between an individual and all of the individuals represented in the linked list, and outputs the matches in a file.

// Write a function that destroy the linked list.

// Write the main() function which receives the command-line arguments and then calls all the functions above in the appropriate order.