---
title: URL-getriggerde functies
key: 2551
difficulty: medium
date: 2023-03-24
author: rkerssies
technology: ide, html, css
---


> #### Voorkennis
> * Basis programmeren; variabelen, if-else, arrays, loops
> * Renderen (verzalelen gegevens, bijvoorbeeld gegevens in één lange string verzamelen)
> * Structuur-> eerst logica, daarna weergave.

> #### Dit ga je leren
> * Content laden op basis van een query-string in de url

{{ '/_assets/php_intermediate/functions.png' | url | image: 'image functions', 10 }}

## Opdracht
1. Maak een index-file en een map 'content'.

```shell
website
 |-- content
 |-- index.php
```

2. Maak tenminste twee files in de map content, bijvoorbeeld: 'home' en 'bla'.
Geef beide files in ieder geval een titel als inhoud, bijv:  `<h1>Home</h1>`

```shell
website
 |-- content
     |-- home.php
     |-- bla.php
 |-- index.php
```

3. Zet in de index-file ankers die verwijzen naar de index-file, maar voeg een query-string toe.  


```php

<?php
   // php-code komt hier!
?>
<!DOCTYPE html>
<html lang="en">
<body>
  <a href="index.php?controller=home">home</a> | 
  <a href="index.php?controller=bla">bla</a>
  <article>
      <?php
         // gerenderde output komt hier!
      ?>
  </article>
</body>
</html>

```
4. Gebruik de `$_GET` superglobal om de bestanden in de map content in te voegen in `index.php` (file-inclusion).
   * Let op! Als er geen query-string is in de url (1e maal site bezoeken; get-controller is empty), wat doe je dan?!
   * Het invoegen van externe bestanden is onveilig. Waar om eigenlijk? [Maak je code veiliger door gebruik te maken van een whitelist](https://medium.com/purple-team/exploiting-local-file-inclusion-vulnerabilities-37a66702c17b).
5. Voer de logica uit voor de html-tag, maar toon de opgevraagde content wel in de article tag.
   Gebruik bijvoorbeeld een functie zoals 'file_get_contents'.

6. Controleer of de juiste content wordt getoond.

Mooi als dit werkt, maar er zijn geen functies gebruikt.

7. Maak in beide content-bestanden een functie die exact dezelfde naam heeft als de bestandsnaam en daarmee ook overeenkomt met een waarde in de query-string van een url in het menu.

8. Pas het inlezen en aanroepen van de content op basis van de query-string aan. Bekijk daarvoor evt het volgende stukje code;<br>

```php
if( empty($_GET['controller'])) { 
	$_GET['controller'] = 'home';
}

include( 'content/'.$_GET['controller'].'.php' );

$function = $_GET['controller']; 
$render = $function();

<html>
   <article>
        <?php echo $render; ?>
   </article>
</html>
```
9. Maak het opvragen van content op basis van menu-items compleet werkend, waarbij alles in functies is geplaatst. Ook het stukje code dat ervoor zorgt dat de content wordt aangeroepen. 

## Resultaat
* Een werkend menu, dat content ophaalt uit een specifiek bestand en de functie aanroept die daar in staat.
* Heldere en duidelijke folderstructuur voor content en core-bestanden die de applicatie laten werken.
* Een Layout, geen herhalingen van de complete html-structuur, zoals <html>, <head> en <article>.
* Bij benadering van de website voor de eerste keer wordt een 'hompage' getoond.

## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br>
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd