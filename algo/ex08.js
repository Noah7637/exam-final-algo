function tousPositifs(tab) {
	let i = 0;
	let negatif = 0;
	while (i < tab.length) {
		if (tab[i] < 0) {
			negatif++;
		} else {
		}

		i++;
	}
	if (negatif === 0) {
		console.log("true");
	} else {
		console.log("false");
	}
}
console.log(tousPositifs([2, 5, 7])); // Résultat attendu : true
console.log(tousPositifs([2, -1, 7])); // Résultat attendu : false
