// "Rotate device to landscape mode" functionality
// don't allow decimals in inputs

var Screens = {
  market: {
    id: "market-screen",
    header: "The Market",
    element: null
  },
  graph: {
    id: "graph-screen",
    header: "Master Graph",
    element: null
  },
  transactions: {
    id: "transactions-screen",
    header: "Transactions",
    element: null
  },
  leaderboard: {
    id: "leaderboard-screen",
    header: "Leaderboard",
    element: null
  }
}

var Buttons = {
  notifications: {
    show: function() {
      document.getElementById("notifications").style.display = "block";
      document.getElementById("notifications-outclick").style = "width: 100vw; height: 100vh;";
    },
    hide: function() {
      document.getElementById("notifications").style.display = "none";
      document.getElementById("notifications-outclick").style = "width: 0; height: 0;"
      document.getElementById("messages-icon").src = "images/messages.png";
    }
  }
}


window.onload = function() {
  for (var i in Screens) {
    Screens[i].element = document.getElementById(Screens[i].id);
  }
}


function showScreen(name) {
  document.getElementById("header").innerText = Screens[name].header;
  for (var i in Screens) {
    Screens[i].element.style = "display: none;";
  }
  Screens[name].element.style = "";
}
