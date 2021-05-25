function smoothner(angle){
    const frequency = 10;
    const period = 2 * Math.PI / frequency;
    if (angle >= 0 && angle < period/4)  
    return Math.sin(frequency * angle);
    else if (angle >= period/4 && angle < 2 * Math.PI - period/4)  
    return 1;
    else if (angle >= 2 * Math.PI - period/4 && angle < 2 * Math.PI)  
    return Math.cos(frequency * (angle - 2 * Math.PI + period/4));
    else return 0;
}

var center = {
    "x" : Math.floor(screen.width/2),
    "y" : Math.floor(screen.height/2)
}

function create_fluctuations(magnitude, no_of_points){
    const A = Math.random() * magnitude;
    const B = Math.random() * magnitude;
    const C = Math.random() * magnitude;
    const f = 2;
    points = []
    for (var theta = 0; theta < 2 * Math.PI; theta += 2 * Math.PI/no_of_points){
        var r = (A*Math.sin(f * theta) + B*Math.sin( 2 * theta + Math.PI/2) + C*Math.sin( 3 * theta + 3*Math.PI/2));
        points.push([r*Math.cos(theta), r*Math.sin(theta)]);
    }
    return points;
}

function tranform_coordinates_to_string(coords){
    var string_of_coords = "";
    for (var i = 0 ; i < coords.length ; i++){
        string_of_coords = string_of_coords.concat(Math.floor(coords[i][0].toString()), ",", Math.floor(coords[i][1].toString())," ")
    }
    return string_of_coords;
}create_fluctuations(10, 100)

function create_circle(radius, no_of_points){
    coords = [];
    const delta = 2 * Math.PI/(no_of_points-1);
    for (var theta = 0; theta <= 2 * Math.PI; theta += delta){
        var point = [center["x"] + radius * Math.cos(theta), center["y"] + radius * Math.sin(theta)]
        coords.push(point);
    }
    return coords;
}

function add_coords(array1, array2){
    sum = []
    for (var i = 0; i < array1.length; i++)
        sum.push([array1[i][0] + array2[i][0], array1[i][1] + array2[i][1]]);
    return sum;
}

var list_of_all_points = []


var circ = create_circle(100, 100);
var fluct = create_fluctuations(20, 100);

var shape = add_coords(circ, fluct)

points = tranform_coordinates_to_string(shape)

document.getElementById("hom").setAttribute('points', points);
document.getElementById("canvas").setAttribute('height',screen.height)
document.getElementById("canvas").setAttribute('width',screen.width)

