# Portfolio
A fantasy stock-trading application that uses generated data which changes several times a minute to 
simulate real market changes.

# Service

## Roles

- Injectable services are the typical Angular services that provide a feature for the application and 
work with Angular’s DI system to be injected into components.An example would be a service that handles 
how to load data from an API.
- Non-injectable services are JavaScript objects that aren’t tied into Angular’s DI system and are just 
imported into the file. This can be useful to make a service available outside of Angular’s DI, such as 
in the application’s main file.
- Helper services are services that make it easier to use a component or feature. An example would be a 
service to help manage the currently active alert on the page.
- Data services are for sharing data across the application. An example is an object holding data for 
the logged-in user.