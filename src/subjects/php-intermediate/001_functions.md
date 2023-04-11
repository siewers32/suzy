---
title: Image gallery functions
key: 2550
difficulty: basic
date: 2023-03-24
author: rkerssies
technology: php
---


> #### Voorkennis
> * Basiskennis programmeren in php
 
> #### Dit ga je leren
> * Functies maken en gebruiken
> * Parameters meegeven aan een functie
> * Een waarde teruggeven uit een functie.

{{ '/_assets/basis/functions.png' | url | image: 'functions', 10 }}


## Opdracht
Je gaat een gallery maken met afbeeldingen in php zoals in [dit voorbeeld](https://by9sfe.csb.app/)
Je mag zelf bepalen welke afbeeldingen je gebruikt.  
Gebruik een image-editor (paint.net of photoshop) om van de afbeeldingen een uitsnede te maken en op te slaan in een geschikt formaat. (bijv. 300 x 400 px.).


1. Maak een map 'images' met daarin de afbeeldingen.
2. Maak een php-pagina met daarin een functie waarin de paden van alle afbeeldingen in de map 'images' worden verzameld in een array. Bijvoorbeeld met [scandir](https://www.php.net/manual/en/function.scandir.php) of [glob](https://www.php.net/manual/en/function.glob.php).
3. Maak in diezefde functie een lus waarbij de array met image-paden wordt doorlopen
4. Combineer de paden met html zodat de afbeeldingen worden weergegeven. 
5. Geef de complete html-code terug uit de functie
    * image-tags
    * een attribute 'class' die verwijst naar een css-class voor de opmaak
    * een attribute 'src' met het pad naar de afbeelding
6. Roep de functie aan en toon het resultaat.


## Uitleg
* [Uitleg over het bijsnijden en opslaan van afbeeldingen](https://www.edutorial.nl/html/afbeeldingen-aanpassen/)
* [Uitleg over functions in php](https://www.edutorial.nl/php/functions/)
* [Uitleg over functions op w3schools](https://www.w3schools.com/php/php_functions.asp)

Signatuur van de functie:
```php
<?php
   /*
   * @param array $map
   * @return string
   * 
   * /
   function showPictures($map) {

      // code om alle afbeeldingen in $map toe te voegen aan een array
      // foreach-loop met code om afbeeldingen in '$map' weer te geven
      
      return $html;
   }

   $result = function showPictures("/map/afbeeldingen/")
 
 <html> 
   <body>
       <?php echo $result; ?>
   </body> 
</html>
```

Output:
```html
 <html> 
   <body>
      <img class="image-class" src="/path/to/image1.png" alt="image image1.png">
      <img class="image-class" src="/path/to/image2.png" alt="image image2.png">
      <img class="image-class" src="/path/to/image3.png" alt="image image3.png">
      ...
   </body> 
</html>
```

## Resultaat
* Een php-pagina met daarin html-code en 1 php functie.
* Functionaliteit volgens de beschrijving in de opdracht.


## Evaluatie
Vraag om een code-review om feedback en tips voor best-practices op jouw aanpak te krijgen.
