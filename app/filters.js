module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  filters.anyCategories = function(data) {
    return anyThingFromAList(data['product-categories']);
  }

  filters.getCategories = function(data) {
    return getListOfThings(data['product-categories']);
  }

  filters.anyTestingType = function(data) {
    return anyThingFromAList(data['testing-type']);
  }

  filters.getTestingType = function(data) {
    return getListOfThings(data['testing-type']);
  }  

  function toTitleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function getListOfThings(array) {
    if (!anyThingFromAList(array)) {
      return "";
    }
    return array.map(function(thing) {
      return toTitleCase(thing.replace(new RegExp('-', 'g'), ' '));
    });
  }

  function anyThingFromAList(array) {
    return array && array.length !== 0;
  }


  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
