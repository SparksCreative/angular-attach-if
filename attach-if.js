/*
 * attach-if v0.3.0
 * (c) 2014 Sparks Creative Limited http://sparks.uk.net
 * License: MIT
 */

'use strict';

angular.module('sparkscreative.attach-if', [])

    /*
     * Variation of the uiIf / ngIf directive with maintained scope.
     * Allows detachment and reattachment of components without reinitialising controller state.
     */
    .directive('attachIf', [function () {
        return {
            restrict: 'A',
            transclude: 'element',
            priority: 1000,
            terminal: true,
            compile: function (element, attr, transclude) {
                return function (scope, element, attr) {

                    var childElement,
                        childScope;

                    scope.$watch(attr.attachIf, function (attach) {
                        if (attach) {
                            if(childScope) {
                                childScope.$broadcast('attach');
                                childScope.$parent = scope;
                                scope.$$childHead = scope.$$childTail = childScope;
                            } else {
                                childScope = scope.$new();
                            }

                            if(childElement) {
                                element.after(childElement);
                            } else {
                                transclude(childScope, function (clone) {
                                    childElement = clone;
                                    element.after(clone);
                                });
                            }
                            childScope.$broadcast('attached');
                        } else {
                            if(childScope) {
                                childScope.$broadcast('detach');
                                scope.$$childHead = scope.$$childTail = null;
                                childScope.$parent = null;
                            }

                            if(childElement) {
                                for (var elem, i = 0; (elem = childElement[i]); i++) {
                                    if (elem.parentNode) {
                                        elem.parentNode.removeChild(elem);
                                    }
                                }
                            }
                        }
                    });
                };
            }
        };
    }]);