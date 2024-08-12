/*
* Interface to Define methods for the Inputs with suggestions menu
*/
class SuggestionInteface {

    inputElement() {
      throw new Error('Method "inputOrigin" must be implemented');
    }
  
    suggestionMenu() {
      throw new Error('Method "suggestionMenu" must be implemented');
    }

    suggestionMenuItems() {
      throw new Error('Method "suggestionMenuItems" must be implemented');
    }
}
  
module.exports = SuggestionInteface;
