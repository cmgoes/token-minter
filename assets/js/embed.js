(function () {
  function receiveMessage(callback) {
    if (window["postMessage"]) {
      if (window["addEventListener"]) {
        window[callback ? "addEventListener" : "removeEventListener"]("message", callback, !1);
      } else {
        window[callback ? "attachEvent" : "detachEvent"]("onmessage", callback);
      }
    }
  }
  receiveMessage(function (message) {
    console.log(message);
    var data = JSON.parse(message.data);
    if (data.action === "eth_request") {
      if (window.ethereum) {
        window.ethereum.request(data.payload);
      } else {
        alert("Could not detect any Web3/Metamask Providers!");
      }
    }
  });
})();

