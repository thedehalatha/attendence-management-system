
//const arr[10,20,300,40]
//arr.push(6)
//console.log(arr)

//const arr[10,20,300,[40,3,6]]
//console.log(arr.push(6))
//console.log(arr)

//find
//const arr= [

//    {
  //      rollno:24AG1A0500
    //    name:"deha"
      //  department="CSE"
    //},
    //{
       // rollno:24AG1A05P0
       // name:"deepika"
     //   department="CSE"
    //},
    //{
       // rollno:24AG1A05N8
       // name:"deepika"
      //  department="CSE"
    //},
    //{
        //rollno:24AG1A05P1
        //name:"tanvi"
      //  department="CSM"
    //},
    //{
        //rollno:24AG1A05P3
      //  name:"mammu"
    //    department="CSM"
  //  },
          

//]

//arr.find(
 //   s => s.name == "deepika"
//)
//console.log(studentreport)

//const fiter_arr = arr.filter (student => student.department="csm")
//console.log(filter_arr)
//console.log(filter_arr.length)

// const marks=[25,75,50,30,82,65]
// const total =marks.reduce(
//     (sum,sub) => sum + sub , 0
// )
// console.log(total)




//sorting menthod 
// const arr = [10,25,35,50,65]
// arr.sort() //sort method will conert numbers to string 

// console.log(arr)
// arr.sort(
//     (a,b) => a-b
// )


// console.log(arr)
// arr.sort(
//     (a,b) => b-a
// )
// console.log(arr)

// 

// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
//   { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
//   { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
//   { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

//   { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
//   { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
//   { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
//   { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
//   { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

//   { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
//   { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
//   { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
//   { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
//   { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

//   { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
//   { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
//   { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
//   { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
//   { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

//   { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
//   { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
//   { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
//   { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
//   { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

//   { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
//   { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
//   { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
//   { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
//   { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
// ];
// students.forEach((student) => {
//     console.log(student);
// });
// const placedstudentsnames =placedstudents.map(student =>({
//     name:student.name,
//     package:student.package
// }))
// console.log(placedstudentnames)

// const totalpackage=placedstudentsnames.reduce((SubmitEvent,students)=>sum +student.package,0)
// const averagepackage =totalpackage / placedstudents.length
// console.log(averagepackage)

// const morethan10lapstudents = placedstudentsnames.filter (student=>student,package >10)

let isColor = false;

function heartColorChange() {

    const heart = document.getElementById("0heart");

    if (isColor) {
        heart.src = "https://img.magnific.com/free-vector/white-heart-pink-background_78370-4945.jpg?semt=ais_hybrid&w=740&q=80";
        isColor = false;
    } else {
        heart.src = "https://static.vecteezy.com/system/resources/thumbnails/045/888/184/small/love-heart-symbol-icon-flat-red-valentine-heart-isolated-on-white-background-vector.jpg";
        isColor = true;
    }
}
