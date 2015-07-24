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

## Current issues:

- Elm tries to render content outside the given outlet
- I need to refresh app in reactor, then refresh the app in rails in order to pick up changes

## TODO:

- I am just requiring http://0.0.0.0:8000/ in my views, this needs to be diff for other environments

## Deployment

To figure this out
Elm needs to put the relevant files inside the assets pipeline folders

https://gist.github.com/rtfeldman/db7b121100b6c6ff435b

