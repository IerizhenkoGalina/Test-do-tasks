//Task #3

let a = "Task#3";
console.log(a);

let i=1;                 // 1 min -the first pancake and the first side
for(; i<=3; i++){        // 3 min- put second side the first pancake
	if(i==2) continue;   // 2 min- continue (we have only one side the first pancake)
	console.log(i);
}

let j=1;                //1 min - the second pancake and the first side
for(; j<=2; j++){       //2 min - the second pancake and the second side
	console.log(j);
}

let b=2;               // 2 min - the third pancake and the first side
for(; b<=3; b++){      // 3 min - the third pancake and the second side
	console.log(b);
	                   // We have three pancakes in 3 minutes
}