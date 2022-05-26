# Datacenter

## ng-bootstrap project
https://ng-bootstrap.github.io/#/getting-started
https://www.youtube.com/watch?v=n1PA4L0hGfw

### problems running: ng add @ng-bootstrap/ng-bootstrap
https://stackoverflow.com/questions/66014183/error-when-installing-ng-add-ng-bootstrap-ng-bootstrap
https://stackoverflow.com/questions/66014183/error-when-installing-ng-add-ng-bootstrap-ng-bootstrap
admin privilage

# tsconfig.json: "strictPropertyInitialization"
https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc

# CSS 
## style
priority order in which the rules are applied if the same rule is declared in multiple places, with each item overriding 
any rules below it:
1 Inline style attribute rules
2 Inline style block rules in the template
3 Component styles property (metadata)
4 Component styleUrls property linked to a CSS file
5 Global CSS rules 

## encapsulation modes

- None
No encapsulation is used during rendering of the view, and the component DOM is subject to the normal rules of CSS. Templates aren’t modified when
injected into the app except for the removal of any CSS style elements from the
template to the document head.
- Emulated
Emulated encapsulation is used to simulate styling encapsulation by
adding unique CSS selectors to your CSS rules at runtime. CSS can cascade into
the component easily from the global CSS rules.
- Native
Uses the native Shadow DOM for styling and markup encapsulation and
provides the best encapsulation. All styles are injected inside the shadow root
and are therefore localized to the component. None of the templates or styles
declared for the component are visible outside the component.