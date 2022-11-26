function send_handle() {
  let num = document.getElementById("number").value;

  // let msg = document.getElementById("msg").value;

  // let name = document.getElementById("name").value;

  // var win = window.open(
  //   `https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${msg}`,
  //   "_blank"
  // );
  let windate = document.getElementById("wdate").value;
  let longMessage =
    "Dear Fan2Play User\n\n" +
    "      Thank you for playing on fan2play and being a consistent player on our platform " +
    "  It is our pleasure to inform you that you are selected as one of the top winners of the day " +
    "(" +
    windate +
    ")" +
    " To celebrate your success on our app, we would love to feature you in our Daily Winner list. Please send us a picture of yours along with your social media handles so we can create a post and share with our followers. You can re-share the post on your handles to grow more followers as well. Please share your Photo, Facebook, Twitter    " +
    "Thanks & Regards" +
    "Fan2Play Support Team";

  console.log(longMessage);

  console.log(windate);
  var win = window.open(
    `https://wa.me/${num}?text=%20${longMessage}`,
    "_blank"
  );
  // win.focus();
}
