angular-attach-if
=================

## Like ng-if but with maintained scope.

This simple directive may be used in place of the angular ngIf (or the earlier angular-ui uiIf) directive in cases where
conditionally detaching and re-attaching components without re-initialising scope / controller state would be helpful.

With this variation, when a child element is removed from the DOM tree it's associated scope is taken out of the digest
chain but is not destroyed. If the child element is later returned to the DOM, it's scope object is wired back in and
any child controllers resume with their existing state and watchers.


## Demo
A [demo page](https://rawgithub.com/Sparks-Creative-Limited/angular-attach-if/master/demo.html) is available to show how
 the attach-if directive works.

Two interactive sections of the page are presented, the first uses a top-level "parent" controller and the second uses
a nested "child" controller. Both sections share a text value from the parent scope and the condition value for
attaching the child section. The child section also maintains another locally scoped text value.

The parent section has a control for detaching and re-attaching the child section and shows how the child controller
resumes listening to scope changes on the shared text value and maintains the state of it's local text value.


## License
MIT
