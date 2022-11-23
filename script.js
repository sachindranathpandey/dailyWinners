function send_handle() {
  let num = document.getElementById("number").value;

  let msg = document.getElementById("msg").value;
  let rank = document.getElementById("rank").value;
  console.log(rank);
  let rankMessage = "Your Rank is " + rank;

  // let name = document.getElementById("name").value;
  let name =
    "Dear Fan2Play User ! Thank you for participating in *WC Depositor Leaderboard (Nov 10th-13th)*. To send your Jersey, please share your complete shipping address with your Jersey Size. Thank you";

  var win = window.open(
    `https://wa.me/${num}?text=${name}%20%20${msg}}%20%20${rankMessage}`
  );
  win.focus();
}
