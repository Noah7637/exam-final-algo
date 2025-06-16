function compterImpairs(tab) {
	let i = 0;
	let impair = 0;
	while (i < tab.length) {
		if (tab[i] % 2 !== 0) {
			impair++;
		}

		i++;
	}

	console.log(impair);
}
console.log(compterImpairs([1, 2, 3, 4, 5]));
