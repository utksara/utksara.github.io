import * as shapes from './shapes.js';

class item {
    constructor( id ,shape, position){
        this.id = id;
        this.shape = shape;
        this.postion = position; 
    }
    render() {
        // let string_of_points = tranform_coordinates_to_string( this.shape.array_of_points );
        // console.log(string_of_points)
        document.getElementById(this.id).setAttribute('points', this.shape.get_points());
    }
}

var list_of_items  = [
    new item('cell', new shapes.jelly(100, [600,250], 5)), 
    new item('nucleus', new shapes.circle(20, [600,250]))
];

function init_setup(){
    // console.log(startime_time);
    document.getElementById("canvas").setAttribute('height',screen.height);
    document.getElementById("canvas").setAttribute('width',screen.width);
}

let break_sim = false;
function simulate(){

    if (!break_sim){
        for (let i = 0; i<list_of_items.length; i++){
            let an_item = list_of_items[i];
            an_item.render();
        }   
    }
}
setInterval(simulate, 10);

init_setup()
document.getElementById("wobble").onclick = function() {break_sim = false;}
document.getElementById("reset").onclick = function() {break_sim = true;}
