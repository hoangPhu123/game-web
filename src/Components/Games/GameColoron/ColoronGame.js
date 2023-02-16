import React, { Component } from "react";
import * as $ from "jquery";
import "../../../assets/css/coloronGame.css";
import io from 'socket.io-client';

export default class ColorBlast extends Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      message: '',
      messages: [],
    };
  }

  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
    this.socket = io('http://localhost:3000');

    this.socket.on('message', (data) => {
      this.setState({ messages: [...this.state.messages, data] });
    });

  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.socket) {
      this.socket.emit('message', this.state.message);
    }

    this.setState({ message: '' });
  };

  handleLoad() {
    function set(key, value) {
      localStorage.setItem(key, value);
    }
    function get(key) {
      return localStorage.getItem(key);
    }
    function increase(el) {
      set(el, parseInt(get(el)) + 1);
    }
    function decrease(el) {
      set(el, parseInt(get(el)) - 1);
    }

    var toTime = function (nr) {
      if (nr == "-:-") return nr;
      else {
        var n = " " + nr / 1000 + " ";
        return n.substr(0, n.length - 1) + "s";
      }
    };

    function updateStats() {
      $("#stats").html(
        '<div class="padded"><h2>Figures: <span>' +
          "<b>" +
          get("flip_won") +
          "</b><i>Won</i>" +
          "<b>" +
          get("flip_lost") +
          "</b><i>Lost</i>" +
          "<b>" +
          get("flip_abandoned") +
          "</b><i>Abandoned</i></span></h2>" +
          "<ul><li><b>Best Casual:</b> <span>" +
          toTime(get("flip_casual")) +
          "</span></li>" +
          "<li><b>Best Medium:</b> <span>" +
          toTime(get("flip_medium")) +
          "</span></li>" +
          "<li><b>Best Hard:</b> <span>" +
          toTime(get("flip_hard")) +
          "</span></li></ul>" +
          "<ul><li><b>Total Flips:</b> <span>" +
          parseInt(
            (parseInt(get("flip_matched")) + parseInt(get("flip_wrong"))) * 2
          ) +
          "</span></li>" +
          "<li><b>Matched Flips:</b> <span>" +
          get("flip_matched") +
          "</span></li>" +
          "<li><b>Wrong Flips:</b> <span>" +
          get("flip_wrong") +
          "</span></li></ul></div>"
      );
    }

    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    function startScreen(text) {
      $("#g").removeAttr("class").empty();
      $(".logo").fadeIn(250);

      $(".c1").text(text.substring(0, 1));
      $(".c2").text(text.substring(1, 2));
      $(".c3").text(text.substring(2, 3));
      $(".c4").text(text.substring(3, 4));

      // If won game
      if (text == "nice") {
        increase("flip_won");
        decrease("flip_abandoned");
      }

      // If lost game
      else if (text == "fail") {
        increase("flip_lost");
        decrease("flip_abandoned");
      }

      // Update stats
      updateStats();
    }

    /* LOAD GAME ACTIONS */

    // Init localStorage
    if (!get("flip_won") && !get("flip_lost") && !get("flip_abandoned")) {
      //Overall Game stats
      set("flip_won", 0);
      set("flip_lost", 0);
      set("flip_abandoned", 0);
      //Best times
      set("flip_casual", "-:-");
      set("flip_medium", "-:-");
      set("flip_hard", "-:-");
      //Cards stats
      set("flip_matched", 0);
      set("flip_wrong", 0);
    }

    // Fill stats
    if (
      get("flip_won") > 0 ||
      get("flip_lost") > 0 ||
      get("flip_abandoned") > 0
    ) {
      updateStats();
    }

    // Toggle start screen cards
    $('.logo .card:not(".twist")').on("click", function (e) {
      $(this)
        .toggleClass("active")
        .siblings()
        .not(".twist")
        .removeClass("active");
      if ($(e.target).is(".playnow")) {
        $(".logo .card").last().addClass("active");
      }
    });

    // Start game
    $(".play").on("click", function () {
      increase("flip_abandoned");
      $(".info").fadeOut();

      var difficulty = "",
        timer = 1000,
        level = $(this).data("level");

      // Set game timer and difficulty
      if (level == 8) {
        difficulty = "casual";
        timer *= level * 4;
      } else if (level == 18) {
        difficulty = "medium";
        timer *= level * 5;
      } else if (level == 32) {
        difficulty = "hard";
        timer *= level * 6;
      }

      $("#g").addClass(difficulty);

      $(".logo").fadeOut(250, function () {
        var startGame = $.now(),
          obj = [];

        // Create and add shuffled cards to game
        for (let i = 0; i < level; i++) {
          obj.push(i);
        }

        var shu = shuffle($.merge(obj, obj)),
          cardSize = 100 / Math.sqrt(shu.length);

        for (let i = 0; i < shu.length; i++) {
          var code = shu[i];
          if (code < 10) code = "0" + code;
          if (code == 30) code = 10;
          if (code == 31) code = 21;
          $(
            '<div class="card" style="width:' +
              cardSize +
              "%;height:" +
              cardSize +
              '%;">' +
              '<div class="flipper"><div class="f"></div><div class="b" data-f="&#xf0' +
              code +
              ';"></div></div>' +
              "</div>"
          ).appendTo("#g");
        }

        // Set card actions
        $("#g .card").on({
          mousedown: function () {
            if ($("#g").attr("data-paused") == 1) {
              return;
            }
            var data = $(this).addClass("active").find(".b").attr("data-f");

            if ($("#g").find(".card.active").length > 1) {
              setTimeout(function () {
                var thisCard = $("#g .active .b[data-f=" + data + "]");

                if (thisCard.length > 1) {
                  thisCard
                    .parents(".card")
                    .toggleClass("active card found")
                    .empty(); //yey
                  increase("flip_matched");

                  // Win game
                  if (!$("#g .card").length) {
                    var time = $.now() - startGame;
                    if (
                      get("flip_" + difficulty) == "-:-" ||
                      get("flip_" + difficulty) > time
                    ) {
                      set("flip_" + difficulty, time); // increase best score
                    }

                    startScreen("nice");
                  }
                } else {
                  $("#g .card.active").removeClass("active"); // fail
                  increase("flip_wrong");
                }
              }, 401);
            }
          },
        });

        // Add timer bar
        $('<i class="timer"></i>')
          .prependTo("#g")
          .css({
            animation: "timer " + timer + "ms linear",
          })
          .one(
            "webkitAnimationEnd oanimationend msAnimationEnd animationend",
            function (e) {
              startScreen("fail"); // fail game
            }
          );

        // Set keyboard (p)ause and [esc] actions
        $(window)
          .off()
          .on("keyup", function (e) {
            // Pause game. (p)
            if (e.keyCode == 80) {
              if ($("#g").attr("data-paused") == 1) {
                //was paused, now resume
                $("#g").attr("data-paused", "0");
                $(".timer").css("animation-play-state", "running");
                $(".pause").remove();
              } else {
                $("#g").attr("data-paused", "1");
                $(".timer").css("animation-play-state", "paused");
                $('<div class="pause"></div>').appendTo("body");
              }
            }
            // Abandon game. (ESC)
            if (e.keyCode == 27) {
              startScreen("flip");
              // If game was paused
              if ($("#g").attr("data-paused") == 1) {
                $("#g").attr("data-paused", "0");
                $(".pause").remove();
              }
              $(window).off();
            }
          });
      });
    });
  }
  render() {
    return (
      <div className="flip-container">
        <div id="g"></div>

        <div className="logo">
          <p className="info">Click the P to get started.</p>
          <div className="card left">
            <div className="flipper">
              <div className="f c1">F</div>
              <div className="b contentbox" id="stats">
                <div className="padded">
                  <h2>Figures</h2>
                  Looks like you haven't FLIPped yet.
                  <a href="javascript:;" className="playnow">
                    Play now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card active twist">
            <div className="flipper">
              <div className="b f">
                <div className="c2">L</div>
              </div>
            </div>
          </div>
          <div className="card left">
            <div className="flipper">
              <div className="f c3">I</div>
              <div className="b contentbox instructions">
                <div className="padded">
                  <h2>Instructions</h2>
                  <p>Press [p] to pause, or [ESC] to abandon game.</p>
                  <p>
                    Flip is a timed card memory game. Click the green cards to
                    see what symbol they uncover and try to find the matching
                    symbol underneath the other cards.
                  </p>
                  <p>
                    Uncover two matching symbols at once to eliminate them from
                    the game.
                  </p>
                  <p>
                    Eliminate all cards as fast as you can to win the game. Have
                    fun FLIPing!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flipper">
              <div className="f c4">P</div>
              <div className="b contentbox levels">
                <a href="javascript:;" data-level="8" className="play">
                  Casual
                </a>
                <a href="javascript:;" data-level="18" className="play">
                  Medium
                </a>
                <a href="javascript:;" data-level="32" className="play">
                  Hard
                </a>
              </div>
            </div>
          </div>

          <p className="info">
            Flip should work best in Google Chrome, decent in Firefox, IE10 and
            Opera;
          </p>
        </div>
        <div>
        <ul>
          {this.state.messages.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          />
          <button type="submit">Send</button>
        </form>
      </div>
      </div>
    );
  }
}
