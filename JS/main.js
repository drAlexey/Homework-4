const students = ["Олександр","Ігор","Олена","Іра","Олексій","Світлана"];
const themes=["Диференційне рівняння","Теорія автоматів","Алгоритми і структури даних"];
const marks=[4,5,5,3,4,5];




function getPairedStudents() {
    return[[students[0],students[2]],[students[1],students[3]],[students[4],students[5]]];
}
const pairedStudents = getPairedStudents(students);
console.log('pairedStudents',pairedStudents);



const topicsStudents = [];

pairedStudents.forEach(function (element,index) {
      topicsStudents.push ([element.join(" i "),themes[index]]);
      
    })
    console.log("topicsStudents",topicsStudents);              


    const marksStudents = [];

    students.forEach(function(element,index){
        marksStudents.push ([element,marks[index]]);

    })

console.log("marksStudents",marksStudents);



 const randomMarks = [];

pairedStudents.forEach(function (element,index) {
randomMarks.push ([element.join(" i "),themes[index],(Math.ceil(Math.random() * marks[index]))]);

})

  console.log("randomMarks",randomMarks);




             
    
    
    
    
    






