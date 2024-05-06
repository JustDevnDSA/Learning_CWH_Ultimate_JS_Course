let marks_class_12 = [91,52,93,54,45,null,false,"Not Present"]
console.log(marks_class_12);
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]);
console.log(marks_class_12[8]); //undefined 

console.log('length of marks array is '+marks_class_12.length); //will not start from 0 as indexing starts from 0 not the counting 

marks_class_12[8]="changed"
marks_class_12[1]="ddddchanged" //arrays are mutable and elements of array can be changed but strings are immutable
console.log(marks_class_12[8]); //undefined 
// console.log(marks_class_12[1]);

console.log('length of marks array is '+marks_class_12.length); //will not start from 0 as indexing starts from 0 not the counting 
console.log(marks_class_12);
console.log(typeof marks_class_12); //arrray is type of object

for(let i=0 ; i<marks_class_12.length ; i++){
    console.log(marks_class_12[i]);
}
