module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  filters.anyCategories = function(data) {
    return anyCategories(data);
  }

  filters.getCategoriesString = function(data) {
    if (!anyCategories(data)) {
      return "";
    }
    var categories = data['product-categories'].map(function(category) {
      return toTitleCase(category.replace(new RegExp('-', 'g'), ' '));
    });
    return categories.join(', ');
  }

  function anyCategories(data) {
    return data['product-categories'] && data['product-categories'].length !== 0;
  }

  function toTitleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
