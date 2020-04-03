// var marks = [10,20,50,60,70];

// var max = marks[0];

// for(var i=0;i<marks.length;i++){
//   var element = marks[i];
//    if(element>max){
//        max = element;
//    }
// }

// console.log("highest value is: ", max);

// var numbers = [10, 20, 30, 40, 50];
// var sum = 0;

// for(var i=0; i<numbers.length;i++){
//  var element = numbers[i];
//  sum = sum + element;
// } 
// console.log("Totall: ", sum);

// var name = [3,6,2,7,3,2,8,1,9,11,56];
// var uniqueName = [];
// for (var i = 0; i < name.length; i++) {
//    var element = name[i];

//    var index = uniqueName.indexOf(element);

//    if (index == -1) {
//       uniqueName.push(element);
//    }
   
// }

// console.log(uniqueName);


// const doubleIt = num => num * 2;
// const add = (x, y) => x + y;
// const give5 = () => 5;

// const result = add(5,6);
// const result2 = give5();
// console.log(result2);


// const ages = [10,15,20];
// const ages2 = [25,30,35];
// const ages3 = [40,45,50];

// const allAges = [...ages,...ages2,...ages3];

// console.log(allAges);

class parent{
    constructor(){
        this.fatherName = "father";
    }
}

class baby extends parent{
    constructor(name){
        super();
        this.name = name;
    }

    fullName(){
        return this.name + " " + this.fatherName;
    }
}

const stName = new baby("nipun");
console.log(stName.fullName());
