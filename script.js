document.getElementById("salesForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let product = document.getElementById("ProductItem").value;
    let amount = document.getElementById("UnitPrice").value;
    let date = document.getElementById("Qty").value;

    if (product && amount && date) {
        let table = document.getElementById("salesTable");
        let row = table.insertRow();
        row.insertCell(0).innerText = ProductItem;
        row.insertCell(1).innerText = UnitPrice;
        row.insertCell(2).innerText = Qty;
        row.insertCell(3).innerText = amount * qty;

        // Send data to Google Sheets (API needed)
        sendToGoogleSheets(ProductItem, UnitPrice, Qty);

        // Clear form
        document.getElementById("salesForm").reset();
    }
});

function sendToGoogleSheets(ProductItem, UnitPrice, date) {
    const scriptURL = "https://docs.google.com/spreadsheets/d/1FMTUdtTTLuS6pzh5EJ2W23Id0gbMw8GcgLNRYvooN_c/edit?gid=1445226343#gid=1445226343";
    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ ProductItem, UnitPrice, Qty }),
        headers: { "Content-Type": "application/json" }
    }).then(response => console.log("Success!", response))
      .catch(error => console.error("Error!", error));
}
