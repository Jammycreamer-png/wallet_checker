const wallets = [
  "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
  "bc1zwfh7fpx6dls4f7s0fvcx3gy4kv9f2hqtp2v8ll",
  "bc1qpz4k20t7938ut5y57jxn99ew2nmgsww98wcvp3",
  "bc1qf3mghsrxjcl3vfd4yey2eu5th8rh03lht487f8"
  // Add more wallet addresses here
];

function isValidBitcoinAddress(address) {
  // For simplicity, let's assume any address starting with "bc1" is valid
  return address.toLowerCase().startsWith("bc1");
}

function checkWallet() {
  console.log("Function called"); // Check if the function is called
  const walletInput = document.getElementById("walletInput");
  const address = walletInput.value.trim().toLowerCase();

  console.log("Input value:", address); // Check the input value

  document.getElementById("debug").textContent = "Checking: " + address;

  if (isValidBitcoinAddress(address)) {
    document.getElementById("debug").textContent += "\nAddress is valid.";
    const resultElement = document.getElementById("result");
    if (wallets.includes(address)) {
      resultElement.textContent = "The wallet is on the list.";
    } else {
      resultElement.textContent = "The wallet is NOT on the list.";
    }
  } else {
    document.getElementById("debug").textContent += "\nInvalid address.";
    alert("Invalid Bitcoin wallet address. Please enter a valid address starting with 'bc1'.");
  }
}
