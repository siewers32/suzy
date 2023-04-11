---
title: Simpele login
key: 1417
difficulty: basic
date: 2022-10-01
author: jsiewers
technology: php, html
---

> #### Voorkennis
> * Basiskennis HTML
> * PHP Arrays en superglobals $_POST en $_GET

> #### Dit ga je leren
> * Basiskennis PHP
> * Gebruik maken van condities (if..else)
> * Uitvoer van PHP weergeven in HTML


## Resultaat
* Een login-systeem met een formulier waar je een naam en een wachtwoord in kunt vullen.
* Nadat het formulier met gegevens is verstuurd, wordt er gecontroleerd of de gegevens valide zijn. 
* Er kunnen 5 verschillende gebruikers toegang krijgen tot de welkomstpagina met de tekst "Hey, welkom in onze app". 
* Bij verkeerd inloggen krijg je de waarschuwing "Je hebt geen toegang met deze naam- en wachtwoord-combinatie".

## Userstory
* Als bezoeker wil ik kunnen inloggen in de applicatie zodat ik toegang krijg tot een pagina met de tekst "Hey, welkom in onze app".

## Activity diagram


{{ '/_assets/backend/schema_loginform.svg' | url | image: 'schema loginform', 100 }}