function calculateProfitLoss() {
    const actualPrice = parseFloat(document.getElementById('actualPrice').value);
    const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(actualPrice) || actualPrice < 0) {
      resultDiv.textContent = 'Please enter a valid actual price.';
      resultDiv.className = 'result loss';
      return;
    }
    if (isNaN(sellingPrice) || sellingPrice < 0) {
      resultDiv.textContent = 'Please enter a valid selling price.';
      resultDiv.className = 'result loss';
      return;
    }

    if (sellingPrice > actualPrice) {
      const profit = sellingPrice - actualPrice;
      const profitPercent = (profit / actualPrice) * 100;
      resultDiv.textContent = `Profit: ₹${profit.toFixed(2)} ( ${profitPercent.toFixed(2)}% )`;
      resultDiv.className = 'result profit';
    } else if (sellingPrice < actualPrice) {
      const loss = actualPrice - sellingPrice;
      const lossPercent = (loss / actualPrice) * 100;
      resultDiv.textContent = `Loss: ₹${loss.toFixed(2)} ( ${lossPercent.toFixed(2)}% )`;
      resultDiv.className = 'result loss';
    } else {
      resultDiv.textContent = 'No Profit, No Loss.';
      resultDiv.className = 'result neutral';
    }
  }

  function clearInputs() {
    document.getElementById('actualPrice').value = '';
    document.getElementById('sellingPrice').value = '';
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
    resultDiv.className = 'result neutral';
  }