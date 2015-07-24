# Rails - Elm integration

This is an attempt to integrate Elm Reactor into a nice workflow when working with a framework like Rails

This Rails app has to sections:

/one
/two

Each section is a discreet ELM application

During development:

- I want to run elm-reactor for those apps
- I want to see my outer navigation (provided by Rails)
- I want the CSS provided by Rails

All Elm code lives in the 'client' folder.

## Dev setup

- start rails: `puma`
- start elm: 'elm-reactor'

## Deployment

To figure this out
Elm needs to put the relevant files inside the assets pipeline folders

