---
title: Een klasse maken
key: 2600
difficulty: basic
date: 2023-03-24
author: rkerssies
technology: ide, html, css, php, functions, oop, csharp
---


> #### Voorkennis
> * Basiskennis van een backend-taal zoals php of C#
> * Zelf methodes kunnen maken en toepassen  

> #### Dit ga je leren
> * Basiskennis Objectgeoriënteerd programmeren
> * Het gebruik van klassen, objecten en methods

{{ '/_assets/api/PHP-logo.png' | url | image: 'PHP Logo', 10 }}
{{ '/_assets/api/c-sharp.png' | url | image: 'C# Logo', 10 }}


## Opdracht
Houdt de volgende structuur aan in je code:
* Definiëren van een klasse
* Objecten maken (initialiseren) 
* Een methode van een object aanroepen
* Renderen en weergeven van het resultaat in html  
  
Een voorbeeld:

```php
<?php
    // define classes with methods
    class clsCalc
    {
        public function som( $pX, $pY=1 )		
        {
            return ( $pX + $pY );
        }
    }
    // initiating an object from a clasess and logic
    $objectSom = new clsCalc();	        // maak een object ofwel instantie 
    $renderedSom =  $objectSom->som(10);	// roep een methode aan op het object (methode van de class)
?>

<!-- showing html and rendered variables -->
<html> 
   <body>
       <?php echo $renderedSom; ?>
   </body> 
</html>
```

#### Stappen
1. Maak een klasse met daarin één methode.  
2. In de methode wordt bij het aanroepen van die methode een teller opgehoogd.  
3. Maak een object van de klasse en roep vanuit het object de methode aan.   
4. Toon het resultaat (return van de method) op het scherm.  

## Resultaat
Een werkend script gebaseerd op een klasse, object en een method.  
Het resultaat wordt weergegeven

## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br>
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd