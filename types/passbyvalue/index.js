var a = 5;
var b = a;

// here incrementing b doesn't impact the value of a, as primitive assignment creates a copy so that the original value isn't impacted
b++;

console.log({ a, b });