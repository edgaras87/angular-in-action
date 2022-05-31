# Community

## Clarity UI library from a team at VMware
Install packages
npm install @clr/icons @clr/angular @clr/ui @cds/core @webcomponents/webcomponentsjs

# Routing

## ActivatedRoute
Many of the values returned by ActivatedRoute are exposed as observables, so you’ll have to subscribe 
to get the values. The primary reason why is that when you have nested routes where a parent and child 
route are active at the same time, a parent component can subscribe to get updates as any child routes 
are loaded.
