const students = ["Олександр","Ігор","Олена","Іра","Олексій","Світлана"];
const themes = ["Диференційне рівняння","Теорія автоматів","Алгоритми і структури даних"];
const marks = [4,5,5,3,4,5];

//Функция 1 Пары студентов-мальчик,девочка.
function getPairedStudents() {
  return[[students[0],students[2]],[students[1],students[3]],[students[4],students[5]]];
}

const pairedStudents = getPairedStudents(students);

console.log('pairedStudents',pairedStudents);

//Функция 2 Пары студентов + темы.
const topicsStudents = [];

pairedStudents.forEach(function (element,index) {
  topicsStudents.push ([element.join(" i "),themes[index]]);
})      

console.log("topicsStudents",topicsStudents);              

//Функция 3 Студент + оценка.
const marksStudents = [];

students.forEach(function(element,index) {
  marksStudents.push ([element,marks[index]]);
})

console.log("marksStudents",marksStudents);

//Функция 4 Пара студентов + рандомная оценка.
const randomMarks = [];

pairedStudents.forEach(function (element,index) {
  randomMarks.push ([element.join(" i "),themes[index],(Math.ceil(Math.random() * marks[index]))]);
})

console.log("randomMarks",randomMarks);





 



    


             



    
    
    
    
    






