document.addEventListener("DOMContentLoaded", function() {
    let today = new Date().toISOString().split('T')[0];
    document.getElementById("Date").value = today;
});


document.getElementById("salesForm").addEventListener("submit", function(event) {
    event.preventDefault();

       let date = document.getElementById("Date").value;
       let product = document.getElementById("ProductItem").value;
       let qty = document.getElementById("Qty").value;
       let unitPrice = document.getElementById("UnitPrice").value;

        let date = document.getElementById("Date").value;
        let product = document.getElementById("ProductItem").value;
        let qty = document.getElementById("Qty").value;
        let unitPrice = document.getElementById("UnitPrice").value;

        if (date && product && qty && unitPrice) {
        let table = document.getElementById("salesTable");
        let row = table.insertRow();
        row.insertCell(0).innerText = product;
        row.insertCell(1).innerText = qty;
        row.insertCell(2).innerText = unitPrice;
        row.insertCell(3).innerText = unitPrice * qty;

        // Send data to Google Sheets (API needed)
        sendToGoogleSheets(date, product, qty, unitPrice);

        // Clear form
        document.getElementById("salesForm").reset();
        document.getElementById("Date").value = today; // Reset date to today
    }
});

function sendToGoogleSheets(ProductItem, UnitPrice, date) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbyLs7Lv2DwzhwnIdVvyeT9qMll2lFWrx5AEPPwGa0QuUPg73sSvc1bxhSgbpGfvHYlv/exec";
    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ date, product, qty, unitPrice }),
        headers: { "Content-Type": "application/json" }
    }).then(response => console.log("Success!", response))
      .catch(error => console.error("Error!", error));
}
