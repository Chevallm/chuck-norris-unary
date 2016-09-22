# Projet: coding-game EASY Chuck Norris
===
* Auteur: Maxime Chevallier-Pichon
* Date: 22/09/2016
* Description: Résolution d'un exercice [codinggame.com](https://www.codingame.com/ide/5629107bbf998257c8796d28a1f429a9a7a6787)
* Langage: JavaScript
 
 
 > Le binaire avec des 1 et des 0 c'est cool, mais du binaire seulement avec des 0 (ou presque) c'est encore mieux ! A l'origine, c'est un concept de Chuck Norris
 > Binary with 0 and 1 is good, but binary with only 0, or almost, is even better! Originally, this is a concept designed by Chuck Norris to send so called unary messages.

 Ecriver un programme qui transforme un message en entrée et affiche une sortie en utilisant la méthode de Chuck Norris.
 Write a program that takes an incoming message as input and displays as output the message encoded using Chuck Norris’ method.
	
	## Règles
 	Rules
	
### Voici le principe de cet encodage:
Here is the encoding principle:

Le message d'entrée est un caractere ASCII (7-bit)
The input message consists of ASCII characters (7-bit)
Le message de sortie encodé contient un ou plusieurs blocs de zéros
The encoded output message consists of blocks of 0
Touts les blocs sont séparés par un caractère espace
A block is separated from another block by a space
Deux blocs consécutifs sont utilisé pour produire une série de bits(0 ou 1)
Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):

* Le premier bloc est soit 0 ou soit 00. Si c'est 0, alors le second bloc contient des 1, sinon le second bloc contient des 0
- First block: it is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
* Pour le second bloc, le nombre de 0 est le nombre d'éléments de la série
- Second block: the number of 0 in this block is the number of bits in the series
 	Exemple
	Example

Prenons un exemple avec un seul caractere : la lettre capitale "C". "C" en binaire est égale  à 1000011, donc avec la technique de tonton Norris on a:
Let’s take a simple example with a message which consists of only one character: Capital C. C in binary is represented as 1000011, so with Chuck Norris’ technique this gives:

0 0 (la première série représente "1")
0 0 (the first series consists of only a single 1)
00 0000 (la seconde série représente "0000")
00 0000 (the second series consists of four 0)
0 00 (la troisième série représente "11")
0 00 (the third consists of two 1)
donc C est encodé: 0 0 00 0000 0 00
So C is coded as: 0 0 00 0000 0 00

Second exemple, on encode CC (en binaire 10000111000011):
Second example, we want to encode the message CC (i.e. the 14 bits 10000111000011) :

0 0 <==> 1
0 0 (one single 1)
00 0000 <==> 0000
0 000 (three 1)
00 0000("0000")
00 0000 (four 0)
0 00 ("11")
0 00 (two 1)
donc CC est encodé: 0 0 00 0000 0 000 00 0000 0 00
So CC is coded as: 0 0 00 0000 0 000 00 0000 0 00

	### Entrée
 	Game Input
#### Entrée
Input
Ligne 1: le Message en ASCII
Line 1: the message consisting of N ASCII characters (without carriage return)
#### Sortie
Output
Le message encodé
The encoded message
#### Contraintes
Constraints
0 < N < 100
#### Exemple
Example
Entree
Input
C
#### Sortie
Output
0 0 00 0000 0 00

