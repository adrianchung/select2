define(function () {
  // French
  return {
    errorLoading: function () {
      return 'Les résultats n\'ont pas pu être chargés';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Veuillez supprimez ' + overChars + ' caractère';

      if (overChars !== 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Veuillez entrer ' + remainingChars + ' ou plusieurs caractère';

      if (remainingChars !== 1) {
        message += 's';
      }

      return message;
    },
    loadingMore: function () {
      return 'Chargement de résultats supplémentaires…';
    },
    maximumSelected: function (args) {
      var message = 'Vous ne pouvez sélectionner que ' +
        args.maximum + ' élément';

      if (args.maximum !== 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'Aucun résultat trouvé';
    },
    searching: function () {
      return 'Recherche en cours…';
    }
  };
});
