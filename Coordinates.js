let lat_center = 47.5951;
let long_center = -122.3178;

let lat_min = lat_center - 0.045;
let lat_max = lat_center + 0.045;
let long_min = long_center - (0.045 / Math.cos(lat_center*Math.PI/180));
let long_max = long_center + (0.045 / Math.cos(lat_center*Math.PI/180));

console.log(lat_min, lat_max, long_min, long_max)