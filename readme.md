# Rails - Elm integration

This is an attempt to integrate Elm Reactor into a nice workflow when working with a framework like Rails

This Rails app has to sections:

/one

/two

Each section is a discreet ELM application

A typical section will have navigation provided by Rails. The Elm application needs to life inside an specified outlet:

<img src="https://docs.google.com/drawings/d/1gQHqXKZ0AzKjPeQX26UYaiUJyQG0d1FDWP5Z8GN8eeA/pub?w=449&h=312" />

During development:

- I want to run elm-reactor for those apps
- I want elm-reactor to automatically recompile code when I refresh the page
- I want to see my outer navigation (provided by Rails)
- I want the CSS provided by Rails

## Folder structure

This is a typical Rails app, but all Elm code lives in the 'client' folder.
The code is loaded via Rails views e.g. /app/views/ones/show.html.erb

## Dev setup

- start rails: `puma`
- start elm: 'elm-reactor'

## Current issues:

#### Elm tries to connect to the wrong socket

e.g.  ws://localhost:3000/socket?file=/client/One.elm
Reactor thinks the socket is running in 3000, but this is the Rails app

#### Elm render content outside the given outlet

e.g. <div><%= yield %></div>
Elm renders the content outside of the div

### An elm app is only available when viewer in reactor first

Go to http://localhost:3000/one, not available

Then go to http://0.0.0.0:8000/client/One.elm
Then to http://localhost:3000/one, it is available

Each time an app is views in http://0.0.0.0:8000/ reactor regenerates elm.js to include just that app
When refreshing in the rails app, this doesn't happen

#### I need to refresh app in reactor, then refresh the app in rails in order to pick up changes

Just making a change in .elm source and refreshing http://localhost:3000/one won't work


## TODO:

- I am just requiring http://0.0.0.0:8000/ in my views, this needs to be diff for other environments

## Deployment

To figure this out
Elm needs to put the relevant files inside the assets pipeline folders

https://gist.github.com/rtfeldman/db7b121100b6c6ff435b

