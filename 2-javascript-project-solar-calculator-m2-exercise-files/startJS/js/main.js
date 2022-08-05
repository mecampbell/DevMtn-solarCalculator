const across = document.getElementById("across");
const height = document.getElementById("height");

// function with 1 parameter

function floor(diameter){
    var radius = diameter/2;
    var floorArea = Math.PI * (radius * radius);
    return floorArea;
}

// function with 2 parameters

function walls(diameter, height){
    var radius = diameter/2;
    var circumference = 2 * Math.PI * radius;
    var wallArea = circumference * height;
    return wallArea;
}

// functions calling functions

function materialsNeeded(){
    
    
    var d = across.value;
    var h = height.value;

    var carpetNeeded = Math.ceil(floor(d));
    var paintNeeded = Math.ceil(walls(d, h));

    alert(`Carpet Needed is: ${carpetNeeded} sqft \nPaint Needed is: ${paintNeeded} sqft`);


} //end of function

