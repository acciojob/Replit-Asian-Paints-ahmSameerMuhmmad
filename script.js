//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');

document.getElementById('change_button').addEventListener('click', function() {
  const blockId = document.getElementById('block_id').value;
  const color = document.getElementById('color_id').value;

  // Find the selected grid item by its id
  const selectedGridItem = document.getElementById(blockId);

  // Set the background color of the selected item
  selectedGridItem.style.backgroundColor = color;

  // Reset the background color of all other items to transparent
  gridItems.forEach(function(item) {
    if (item !== selectedGridItem) {
      item.style.backgroundColor = 'transparent';
    }
  });
});

document.getElementById('Reset').addEventListener('click', function() {
  // Reset the background color of all items to transparent
  gridItems.forEach(function(item) {
    item.style.backgroundColor = 'transparent';
  });
});

