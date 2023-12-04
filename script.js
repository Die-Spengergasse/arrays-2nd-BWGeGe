const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");

const output = document.getElementById("output");
output.publish = function (arg) {
    this.innerHTML = JSON.stringify(arg);
};

const button_push = document.getElementById("button_push");
button_push.addEventListener("click", push);

const button_indexof = document.getElementById("button_indexof");
button_indexof.addEventListener("click", indexof);

const button_includes = document.getElementById("button_includes");
button_includes.addEventListener("click", includes);

const button_slice = document.getElementById("button_slice");
button_slice.addEventListener("click", slice);

const button_splice = document.getElementById("button_splice");
button_splice.addEventListener("click", splice);

const button_map = document.getElementById("button_map");
button_map.addEventListener("click", map);

const button_filter = document.getElementById("button_map");
button_map.addEventListener("click", filter);

function push() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    i1.push(i2);
    output.publish(i1);
}
function indexof() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    
    output.publish(i1.indexOf(i2));
}
function includes() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    output.publish(i1.includes(i2));
}
function slice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    output.publish(i1.slice(i2, i3));
}
function splice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    const i4 = eval(input4.value);
    output.publish(i1.splice(i2, i3, i4));
}
function map() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    let mapi1 = i1.map((x)=> {return x * i2});
    output.publish(mapi1);
}
function filter() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    output.publish(i1.filter((x)=>x, i2));
}