// task #1

(function () {

	console.log('Task #1');

	const dsCount=(str, a, b) =>{
		let count = 0,
			 i = str.toUpperCase().indexOf(a.toUpperCase())
		while ( i != -1 ) {
			
			i ++;
			
			if (i == str.toUpperCase().indexOf(b.toUpperCase(), i))
				count++;

			i = str.toUpperCase().indexOf(a.toUpperCase(), i);
		}
		return count;
	}


	try {
		test(dsCount, ['ab___ab__', 'a', 'b'], 2);
		test(dsCount, ['___cd____', 'c', 'd'], 1);
		test(dsCount, ['de_______', 'd', 'e'], 1);
		test(dsCount, ['12_12__12', '1', '2'], 3);
		test(dsCount, ['_ba______', 'a', 'b'], 0);
		test(dsCount, ['_a__b____', 'a', 'b'], 0);
		test(dsCount, ['-ab-аb-ab', 'a', 'b'], 2);
		test(dsCount, ['aAa', 'a', 'a'], 2);

		console.info("Congratulations! All tests success passed.");
	} catch(e) {
		console.error(e);
	}

	function test(call, args, count, n) {
		let r = (call.apply(n, args) === count);
		console.assert(r, `Finded items count: ${count}`);
		if (!r) throw "Test failed!";
	}

	console.log('\n');
})();

