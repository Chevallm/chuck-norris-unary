# Projet: coding-game EASY Chuck Norris
===
* Auteur: Maxime Chevallier-Pichon
* Date: 22/09/2016
* Description: Résolution d'un exercice [codinggame.com](https://www.codingame.com/ide/5629107bbf998257c8796d28a1f429a9a7a6787)
* Langage: JavaScript
 
 
 > Le binaire avec des 1 et des 0 c'est cool, mais du binaire seulement avec des 0 (ou presque) c'est encore mieux ! A l'origine, c'est un concept de Chuck Norris
 

 Ecriver un programme qui transforme un message en entrée et affiche une sortie en utilisant la méthode de Chuck Norris.
 
	
	## Règles

	
### Voici le principe de cet encodage:


Le message d'entrée est un caractere ASCII (7-bit)

Le message de sortie encodé contient un ou plusieurs blocs de zéros

Touts les blocs sont séparés par un caractère espace

Deux blocs consécutifs sont utilisé pour produire une série de bits(0 ou 1)


* Le premier bloc est soit 0 ou soit 00. Si c'est 0, alors le second bloc contient des 1, sinon le second bloc contient des 0

* Pour le second bloc, le nombre de 0 est le nombre d'éléments de la série

 	Exemple


> Prenons un exemple avec un seul caractere : la lettre capitale "C". "C" en binaire est égale  à 1000011, donc avec la technique de tonton Norris on a:
>
>
> 0 0 (la première série représente "1")
> 00 0000 (la seconde série représente "0000")
> 0 00 (la troisième série représente "11")
> donc C est encodé: 0 0 00 0000 0 00
> 
> Second exemple, on encode CC (en binaire 10000111000011):
> 
> * 0 0 <==> 1
> * 00 0000 <==> 0000
> * 00 0000("0000")
> * 0 00 ("11")
> * donc CC est encodé: 0 0 00 0000 0 000 00 0000 0 00

	### Entrée
#### Entrée
*Ligne 1: le Message en ASCII*
#### Sortie
*Le message encodé*
#### Contraintes
*0 < N < 100*

### Exemple
#### Entree
*C*
#### Sortie
*0 0 00 0000 0 00*

