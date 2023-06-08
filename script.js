//your code here
function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];

  const sortedNames = bandNames.sort((a, b) => {
    const nameA = a.toLowerCase().replace(/^(a|an|the)\s+/i, '');
    const nameB = b.toLowerCase().replace(/^(a|an|the)\s+/i, '');
    return nameA.localeCompare(nameB);
  });

  return sortedNames;
}

// Example usage
const bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

const sortedBandNames = sortBandNames(bandNames);

const ulElement = document.getElementById('band');
sortedBandNames.forEach((name) => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});
