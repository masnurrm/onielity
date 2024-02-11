function right() {
    var easing = anime({
      targets: "#easing .el",
      translateX: "-25%",
      easing: "easeInOutQuart"
    });
    var easing = anime({
      targets: "h1.right",
      opacity: 1,
      easing: "easeInOutQuart"
    });
    var easing = anime({
      targets: "h1.center, h1.left",
      opacity: 0,
      easing: "easeInOutQuart"
    });
  }
  
  function center() {
    var easing = anime({
      targets: "#easing .el",
      translateX: 0,
      easing: "easeInOutQuart"
    });
    var easing = anime({
      targets: "h1.center",
      opacity: 1,
      easing: "easeInOutQuart"
    });
    var easing = anime({
      targets: "h1.right, h1.left",
      opacity: 0,
      easing: "easeInOutQuart"
    });
  }
  
  function left() {
    var easing = anime({
      targets: "#easing .el",
      translateX: "25%",
      easing: "easeInOutQuart"
    });
    var easing = anime({
      targets: "h1.left",
      opacity: 1,
      easing: "easeInOutQuart"
    });
    var easing = anime({
      targets: "h1.right, h1.center",
      opacity: 0,
      easing: "easeInOutQuart"
    });
  }
  
  function up() {
    var easing = anime({
      targets: ".about",
      top: 0,
      height: "100%",
      easing: "easeInOutQuart"
    });
    var easing = anime({
      targets: "#about",
      fontWeight: 700,
      easing: "easeInOutQuart"
    });
    var easing = anime({
      targets: "#work",
      fontWeight: 100,
      easing: "easeInOutQuart"
    });
  }
  
  function down() {
    var easing = anime({
      targets: ".about",
      top: "100%",
      easing: "easeInOutQuart"
    });
    var easing = anime({
      targets: "#work",
      fontWeight: 700,
      easing: "easeInOutQuart"
    });
    var easing = anime({
      targets: "#about",
      fontWeight: 100,
      easing: "easeInOutQuart"
    });
  }