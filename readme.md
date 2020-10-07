# Caches autocleaner
Un script qui permet d'auto supprimer des caches
## Getting Started
### Prérequis
Vous devez avoir nodejs installer sur votre ordinateur
### Installation
Télécharger le projet
```
git clone https://github.com/yorreraj/caches-autocleaner.git
```
Installer les dependences
```
npm install
```
Modifier le fichier config.js
* **pathsToWatch**
Un tableau qui contient tout le chemin des fichiers à observer
```
Exemple: /home/yorre/dev/communecter/modules/costum/assets 
```
* **pathsToRemove**
Un tableau qui contient tout le chemin des caches à supprimer. Le dossier parent ne va pas supprimer.
```
Exemple: 
[
    /home/yorre/dev/communecter/pixelhumain/ph/assets,
    /home/yorre/dev/communecter/pixelhumain/ph/protected/runtime
]
```
### Démarrage
```
sudo npm start
```
A noter, faut toujours lancer le script en mode administrateur pour éviter le problème de permission de fichier.  
## Auteur
* **Yorre Rajaonarivelo**