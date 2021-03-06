Tinytest.add("sass - presence", function(test) {

  var d = OnscreenDiv(Meteor.render(function() {
    return '<p class="sass-dashy-left-border"></p>'; }));
  d.node().style.display = 'block';

  var p = d.node().firstChild;
  test.equal(getStyleProperty(p, 'border-left-style'), "dashed");

  // test @import
  test.equal(getStyleProperty(p, 'border-right-style'), "dotted");

  d.kill();
});
