function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];

  const sortedNames = bandNames.sort((a, b) => {
    const nameA = a.toLowerCase().replace(/^(a|an|the)\s+/i, '');
    const nameB = b.toLowerCase().replace(/^(a|an|the)\s+/i, '');
    return nameA.localeCompare(nameB);
  });

  return sortedNames;
}

document.getElementById('submit').addEventListener('click', () => {
  const inputElement = document.getElementById('input');
  const input = inputElement.value;

  const bandNames = input.split(',').map(name => name.trim());

  const sortedBandNames = sortBandNames(bandNames);

  const ulElement = document.getElementById('band');
  ulElement.innerHTML = ''; // Clear existing list

  sortedBandNames.forEach((name) => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
  });

  inputElement.value = ''; // Clear input
});
