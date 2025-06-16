function genererTableau(n) {
	let nbr = 1;
	let tab = [0];
	while (nbr < n + 1) {
		tab += `, ${[nbr]}`;
		nbr++;
	}
	console.log(tab);
}
console.log(genererTableau(12)); // Résultat attendu : [0, 1, 2, 3, 4]
