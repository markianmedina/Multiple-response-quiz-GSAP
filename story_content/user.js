window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var incorrectCheckmark = document.querySelectorAll("[data-acc-text='tick_wrong']");
var correctCheckmark = document.querySelectorAll("[data-acc-text='tick_check']");

gsap.set(incorrectCheckmark, {opacity:0});
gsap.set(correctCheckmark, {opacity:0});
}

window.Script2 = function()
{
  var incorrectCheckmark = document.querySelectorAll("[data-acc-text='tick_wrong']");
var correctCheckmark = document.querySelectorAll("[data-acc-text='tick_check']");

gsap.set(incorrectCheckmark, {opacity:1});
gsap.set(correctCheckmark, {opacity:1});
}

window.Script3 = function()
{
  var incorrectCheckmark = document.querySelectorAll("[data-acc-text='tick_wrong']");
var correctCheckmark = document.querySelectorAll("[data-acc-text='tick_check']");

gsap.set(incorrectCheckmark, {opacity:0});
gsap.set(correctCheckmark, {opacity:1});
}

};
