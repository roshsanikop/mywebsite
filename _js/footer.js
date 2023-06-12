// Fetch footer.html file
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    // Insert the fetched HTML into the footerContainer div
    document.getElementById('footerContainer').innerHTML = data;
  });
     