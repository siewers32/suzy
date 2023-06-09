---
title: Database login
key: 1414
difficulty: medium
date: 2022-11-10
author: jsiewers
technology: php, html, dbq
---


> #### Voorkennis
> * Basiskennis HTML
> * Programmeertaal: PHP
> * Basiskennis SQL queries

> #### Dit ga je leren
> * Basiskennis PHP
> * Sessievariabelen toepassen
> * Gebruik maken van condities (if..else)
> * Een database maken met tabellen en queries toepassen

## Resultaat
* Een login-systeem met een formulier waar je een naam en een wachtwoord in kunt vullen.
* Nadat het formulier met gegevens is verstuurd, wordt er in database gecontroleerd of de gegevens valide zijn. 
* Meerdere gebruikers kunnen toegang krijgen tot de welkomstpagina met de tekst "Hey, welkom in onze app". 
* Bij verkeerd inloggen krijg je de waarschuwing "Je hebt geen toegang met deze naam- en wachtwoord-combinatie".

## Userstory
* Als bezoeker wil ik kunnen inloggen in de applicatie zodat ik toegang krijg tot een pagina met de tekst "Hey, welkom in onze app".

## Activity diagram

{{ '/_assets/backend/schema_db_login.svg' | url | image: 'schema loginform', 100 }}