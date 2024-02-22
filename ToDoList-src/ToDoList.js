// Local Save
document.addEventListener('DOMContentLoaded', function() {
  // Check if there is a saved input value in localStorage
  const savedInput = localStorage.getItem('savedInput');
  const savedInput2 = localStorage.getItem('savedInput2');
  const savedInput3 = localStorage.getItem('savedInput3');

  if (savedInput !== null) {
      document.getElementById('textList1').value = savedInput;
  }
  if (savedInput2 !== null) {
      document.getElementById('textList2').value = savedInput2;
  }
  if (savedInput3 !== null) {
      document.getElementById('textList3').value = savedInput3;
  }

  // Add an event listener to the "Save" button
  document.getElementById('saveButton').addEventListener('click', function() {
      saveToLocalStorage('textList1', 'savedInput');
      saveToLocalStorage('textList2', 'savedInput2');
      saveToLocalStorage('textList3', 'savedInput3');
  });

  // Function to save input value to localStorage
  function saveToLocalStorage(inputId, storageKey) {
      const newValue = document.getElementById(inputId).value;
      const oldValue = localStorage.getItem(storageKey);

      // Check if the value has changed before saving
      if (newValue !== oldValue) {
          localStorage.setItem(storageKey, newValue);
          alert(`Data for ${inputId} saved successfully!`);
      } else {
          alert(`No changes for ${inputId} to save.`);
      }
  }
});