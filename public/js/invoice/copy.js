window.addEventListener("load", () => {
  document.getElementById("copy-text").addEventListener("click", function (_0x8861x13) {
    _0x8861x13.preventDefault();
    document.getElementById("text-to-copy").select();
    var _0x8861x14;
    try {
      _0x8861x14 = document.execCommand("copy");
    } catch (ex) {
      _0x8861x14 = false;
    }
    ;
    if (_0x8861x14) {
      document.getElementById("copy-text").innerHTML = `Copied`;
      document.getElementById("copy-text").style.background = "gold";
    }
  });
  document.getElementById("text-to-copy").addEventListener("click", function (_0x8861x13) {
    _0x8861x13.preventDefault();
    document.getElementById("text-to-copy").select();
    var _0x8861x14;
    try {
      _0x8861x14 = document.execCommand("copy");
    } catch (ex) {
      _0x8861x14 = false;
    }
    ;
    if (_0x8861x14) {
      document.getElementById("copy-text").innerHTML = `Copied`;
      document.getElementById("copy-text").style.background = "gold";
    }
  });
});
    