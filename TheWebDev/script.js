let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);


function inputMsg() {
    let name = prompt('Enter name of student ');
    namasteBtn.textContent = 'Roll No. 22: ' + name;
}
//Data type in javascript are boolean
//undefined
//var myVar; declared but not initalised

// int float hex exponential

//Funtion 