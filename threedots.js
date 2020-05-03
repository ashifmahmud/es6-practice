 const ages = [12,15,16,17];
 const ages2 = [15,16,12];
 const ages3 = [25,36,38,40];
 const allAges = ages.concat(ages2).concat(ages3);
 const allAges2 = [...ages,...ages2,...ages3]
 const maximum = Math.max(...ages);
 console.log(allAges);
console.log(allAges2);
console.log(maximum);