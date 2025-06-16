function compterLettre(texte, lettre) {
	let i = 0;
	let compte = 0;
	texte = texte.toLowerCase();
	while (i < texte.length) {
		if (texte.substr(i, 1) === lettre) {
			compte++;
		}
		i++;
	}
	console.log(compte);
}
console.log(compterLettre("Abracadabra", "a")); // Résultat attendu : 5
