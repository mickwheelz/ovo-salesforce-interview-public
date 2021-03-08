/**
 * For the original lightning/navigation mock that comes by default with
 * @salesforce/sfdx-lwc-jest, see:
 * https://github.com/salesforce/sfdx-lwc-jest/blob/master/src/lightning-stubs/navigation/navigation.js
 */
export const CurrentPageReference = jest.fn();
export const Navigate = jest.fn();

const _navigate = Symbol("Navigate");
const _generateUrl = Symbol("GenerateUrl");
let _navigatePageReference, _replace;

export const NavigationMixin = (Base) => {
  return class extends Base {
    [_navigate](pageReference, replace) {
      _navigatePageReference = pageReference;
      _replace = replace;
    }
    [_generateUrl](pageReference) {}
  };
};

NavigationMixin.Navigate = _navigate;
NavigationMixin.GenerateUrl = _generateUrl;

/*
 * Tests do not have access to the internals of this mixin used by the
 * component under test so save a reference to the arguments the Navigate method is
 * invoked with and provide access with this function.
 */
export const getNavigateCalledWith = () => {
  return {
    pageReference: _navigatePageReference,
    replace: _replace
  };
};
