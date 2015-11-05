var HashMap = require('hashmap');

// Generate a random number between 1 and rangeTop inclusive
function getRandomNumber(rangeTop){

	return Math.round(Math.random()*100,0)%rangeTop+1;
}

function recordDistribution(distributionMap, randNum){

	if (randNum in distributionMap){
			distributionMap[randNum].count++;
	} else {
		distributionMap[randNum] = {count:1};
	}
}


var firstdistMap   = new HashMap();
var firstDistRange = 5;

var secondDistMap = new HashMap();
var secondDistRange = 7;

for (var i = 0; i < 1000; i++){
	recordDistribution(firstdistMap, getRandomNumber(firstDistRange));
}

for (var x in firstdistMap)
{
    console.log('Key:\n—- ' + x + '\n');
    console.log('Values: ');
    var value = firstdistMap[x];
    for (var y in value)
    {
        console.log('—- ' + y + ':' + value[y]);
    }
    console.log('\n');
}