document.addEventListener("DOMContentLoaded", function () {
  var leftPane = document.getElementById("left-pane");
  var rightPane = document.getElementById("right-pane");
  var syncToggle = document.getElementById("sync-toggle");
  var syncEnabled = syncToggle ? syncToggle.checked : true;

  if (!leftPane || !rightPane) {
    return;
  }

  if (syncToggle) {
    syncToggle.addEventListener("change", function () {
      syncEnabled = syncToggle.checked;
    });
  }

  var isSyncingLeft = false;
  var isSyncingRight = false;

  function syncScroll(source, target, directionFlag) {
    if (!syncEnabled) {
      return;
    }
    var scrollHeight = source.scrollHeight - source.clientHeight;
    var targetScrollHeight = target.scrollHeight - target.clientHeight;
    if (scrollHeight <= 0 || targetScrollHeight <= 0) {
      return;
    }
    var ratio = source.scrollTop / scrollHeight;
    target.scrollTop = ratio * targetScrollHeight;
  }

  leftPane.addEventListener("scroll", function () {
    if (isSyncingLeft) {
      return;
    }
    isSyncingRight = true;
    syncScroll(leftPane, rightPane, "left");
    isSyncingRight = false;
  });

  rightPane.addEventListener("scroll", function () {
    if (isSyncingRight) {
      return;
    }
    isSyncingLeft = true;
    syncScroll(rightPane, leftPane, "right");
    isSyncingLeft = false;
  });

  var blocks = document.querySelectorAll(".sync-block");
  blocks.forEach(function (block) {
    block.addEventListener("mouseenter", function () {
      var id = block.getAttribute("data-id");
      if (!id) {
        return;
      }
      var related = document.querySelectorAll('.sync-block[data-id="' + id + '"]');
      related.forEach(function (el) {
        el.classList.add("highlight");
      });
    });
    block.addEventListener("mouseleave", function () {
      var id = block.getAttribute("data-id");
      if (!id) {
        return;
      }
      var related = document.querySelectorAll('.sync-block[data-id="' + id + '"]');
      related.forEach(function (el) {
        el.classList.remove("highlight");
      });
    });
  });
});

