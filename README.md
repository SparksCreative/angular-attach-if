angular-attach-if
=================

Like ng-if but with maintained scope.

This simple directive may be used in place of the angular ngIf (or earlier angular-ui uiIf) directive in cases where
conditionally detaching and re-attaching components without re-initialising scope / controller state would be helpful.

When a child element is removed from the DOM tree, it's associated scope is taken out of the digest chain but not
destroyed. If the child element is later returned to the DOM, it's scope object is wired back in and child controllers
 may resume with their existing state.
