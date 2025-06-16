function produitTotal(tab) {
	let i = 0;
	let calcul = [tab[i]];
	i++;
	while (tab.length > i) {
		calcul *= tab[i];
		i++;
	}

	console.log(calcul);
}
console.log(produitTotal([1, 2, 3, 4])); // Résultat attendu : 24
