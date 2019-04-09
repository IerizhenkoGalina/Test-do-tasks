// Task #5

let task = 'Task #5';
	console.log(task);

 const newDrawRating = vote => {
 if (vote>=0 && vote<=100) {
		let count = (vote != 0) ? Math.ceil(vote/20) : 1 
		
		return Array(count+1).join("★") + Array(6-count).join("☆")
	}
}

	// Проверка работы результата
	console.log(newDrawRating(0));   // ★☆☆☆☆
	console.log(newDrawRating(1));   // ★☆☆☆☆
	console.log(newDrawRating(20));  // ★☆☆☆☆
	console.log(newDrawRating(21));  // ★★☆☆☆
	console.log(newDrawRating(40));  // ★★☆☆☆
	console.log(newDrawRating(41));  // ★★★☆☆
	console.log(newDrawRating(50));  // ★★★☆☆
	console.log(newDrawRating(80));  // ★★★★☆
	console.log(newDrawRating(99));  // ★★★★★
	console.log(newDrawRating(100)); // ★★★★★
    console.log(newDrawRating(101)); // undefined