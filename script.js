document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
  
    // Simulate validation
    if (cardNumber && expiryDate && cvv) {
      document.getElementById('paymentMessage').innerHTML = "<p class='success'>Payment Successful! Thank you.</p>";
    } else {
      document.getElementById('paymentMessage').innerHTML = "<p class='error'>Error: Please fill all fields correctly.</p>";
    }
  });
  