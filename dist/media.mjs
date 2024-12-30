(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.media-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.media-tool__media{border-radius:3px;overflow:hidden;margin-bottom:10px}.media-tool__media-picture{max-width:100%;vertical-align:bottom;display:block}.media-tool__media-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.media-tool__media-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:media-preloader-spin 2s infinite linear;box-sizing:border-box}.media-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.media-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.media-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.media-tool--empty .media-tool__media,.media-tool--empty .media-tool__caption,.media-tool--loading .media-tool__caption{display:none}.media-tool .cdx-button{display:flex;align-items:center;justify-content:center}.media-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.media-tool--filled .cdx-button,.media-tool--filled .media-tool__media-preloader{display:none}.media-tool--loading .media-tool__media{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.media-tool--loading .media-tool__media-picture,.media-tool--loading .cdx-button{display:none}.media-tool--withBorder .media-tool__media{border:1px solid var(--border-color)}.media-tool--withBackground .media-tool__media{padding:15px;background:var(--bg-color)}.media-tool--withBackground .media-tool__media-picture{max-width:60%;margin:0 auto}.media-tool--stretched .media-tool__media-picture{width:100%}@keyframes media-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const V = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', q = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', W = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', $ = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function _(b, e = null, o = {}) {
  const i = document.createElement(b);
  Array.isArray(e) ? i.classList.add(...e) : e && i.classList.add(e);
  for (const s in o)
    i[s] = o[s];
  return i;
}
const D = /* @__PURE__ */ new Set(["apng", "avif", "gif", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "png", "svg", "webp"]), U = /* @__PURE__ */ new Set(["m4a", "m4b", "mp4a", "mpga", "mp2", "mp2a", "mp3", "m2a", "m3a", "wav", "weba", "aac", "oga", "spx", "flac", "opus"]), A = /* @__PURE__ */ new Set(["mp4", "ogg", "ogv", "webm", "mov", "m4v", "mkv", "3gp", "avi", "mpeg"]), G = new RegExp(`https?:\\/\\/\\S+\\.(${[...D, ...U, ...A].join("|")})(\\?[a-z0-9=]*)?$`, "i");
function P(b) {
  const e = b.split(".").pop();
  if (D.has(e))
    return "IMG";
  if (U.has(e))
    return "AUDIO";
  if (A.has(e))
    return "VIDEO";
}
class j {
  /**
   * @param {object} ui - media tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {MediaConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: e, config: o, onSelectFile: i, readOnly: s }) {
    this.api = e, this.config = o, this.onSelectFile = i, this.readOnly = s, this.nodes = {
      wrapper: _("div", [this.CSS.baseClass, this.CSS.wrapper]),
      mediaContainer: _("div", [this.CSS.mediaContainer]),
      href: _("a", [], { target: "_blank" }),
      fileButton: this.createFileButton(),
      mediaEl: void 0,
      mediaPreloader: _("div", this.CSS.mediaPreloader)
    }, this.nodes.href.appendChild(this.nodes.mediaContainer), this.nodes.mediaContainer.appendChild(this.nodes.mediaPreloader), this.nodes.wrapper.appendChild(this.nodes.href), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "media-tool",
      mediaContainer: "media-tool__media",
      mediaPreloader: "media-tool__media-preloader",
      mediaEl: "media-tool__media-picture"
    };
  }
  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: "empty",
      UPLOADING: "loading",
      FILLED: "filled"
    };
  }
  /**
   * Renders tool UI
   *
   * @param {MediaToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(e) {
    return !e.file || Object.keys(e.file).length === 0 ? this.toggleStatus(j.status.EMPTY) : this.toggleStatus(j.status.UPLOADING), e.link && (this.nodes.href.href = e.link), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const e = _("div", [this.CSS.button]);
    return e.innerHTML = this.config.buttonContent || `${R} ${this.api.i18n.t("Select a media file")}`, e.addEventListener("click", () => {
      this.onSelectFile();
    }), e;
  }
  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(e = "") {
    this.nodes.mediaPreloader.style.backgroundImage = e ? `url(${e})` : "", this.toggleStatus(j.status.UPLOADING);
  }
  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.mediaPreloader.style.backgroundImage = "", this.toggleStatus(j.status.EMPTY);
  }
  /**
   * Shows a medium
   *
   * @param {string} url - medium source
   * @param {'VIDEO'|'AUDIO'|'IMG'|undefined} tag - medium source
   * @returns {void}
   */
  fillMedia(e, o = P(new URL(e).pathname)) {
    const i = {
      src: e
    };
    let s = "load";
    (o === "VIDEO" || o === "AUDIO") && (i.muted = !0, i.playsinline = !0, i.controls = !0, o === "AUDIO" && (i.style = "width: 100%;"), s = "loadedmetadata"), this.nodes.mediaEl = _(o, this.CSS.mediaEl, i), this.nodes.mediaEl.addEventListener(s, () => {
      this.toggleStatus(j.status.FILLED), this.nodes.mediaPreloader && (this.nodes.mediaPreloader.style.backgroundImage = "");
    }), this.nodes.mediaContainer.appendChild(this.nodes.mediaEl);
  }
  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(e) {
    for (const o in j.status)
      Object.prototype.hasOwnProperty.call(j.status, o) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${j.status[o]}`, e === j.status[o]);
  }
  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(e, o) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${e}`, o);
  }
}
function X(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
}
var H = { exports: {} };
(function(b, e) {
  (function(o, i) {
    b.exports = i();
  })(window, function() {
    return function(o) {
      var i = {};
      function s(a) {
        if (i[a])
          return i[a].exports;
        var n = i[a] = { i: a, l: !1, exports: {} };
        return o[a].call(n.exports, n, n.exports, s), n.l = !0, n.exports;
      }
      return s.m = o, s.c = i, s.d = function(a, n, u) {
        s.o(a, n) || Object.defineProperty(a, n, { enumerable: !0, get: u });
      }, s.r = function(a) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
      }, s.t = function(a, n) {
        if (1 & n && (a = s(a)), 8 & n || 4 & n && typeof a == "object" && a && a.__esModule)
          return a;
        var u = /* @__PURE__ */ Object.create(null);
        if (s.r(u), Object.defineProperty(u, "default", { enumerable: !0, value: a }), 2 & n && typeof a != "string")
          for (var v in a)
            s.d(u, v, (function(l) {
              return a[l];
            }).bind(null, v));
        return u;
      }, s.n = function(a) {
        var n = a && a.__esModule ? function() {
          return a.default;
        } : function() {
          return a;
        };
        return s.d(n, "a", n), n;
      }, s.o = function(a, n) {
        return Object.prototype.hasOwnProperty.call(a, n);
      }, s.p = "", s(s.s = 3);
    }([function(o, i) {
      var s;
      s = function() {
        return this;
      }();
      try {
        s = s || new Function("return this")();
      } catch {
        typeof window == "object" && (s = window);
      }
      o.exports = s;
    }, function(o, i, s) {
      (function(a) {
        var n = s(2), u = setTimeout;
        function v() {
        }
        function l(r) {
          if (!(this instanceof l))
            throw new TypeError("Promises must be constructed via new");
          if (typeof r != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(r, this);
        }
        function f(r, d) {
          for (; r._state === 3; )
            r = r._value;
          r._state !== 0 ? (r._handled = !0, l._immediateFn(function() {
            var c = r._state === 1 ? d.onFulfilled : d.onRejected;
            if (c !== null) {
              var g;
              try {
                g = c(r._value);
              } catch (m) {
                return void w(d.promise, m);
              }
              h(d.promise, g);
            } else
              (r._state === 1 ? h : w)(d.promise, r._value);
          })) : r._deferreds.push(d);
        }
        function h(r, d) {
          try {
            if (d === r)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (d && (typeof d == "object" || typeof d == "function")) {
              var c = d.then;
              if (d instanceof l)
                return r._state = 3, r._value = d, void y(r);
              if (typeof c == "function")
                return void t((g = c, m = d, function() {
                  g.apply(m, arguments);
                }), r);
            }
            r._state = 1, r._value = d, y(r);
          } catch (p) {
            w(r, p);
          }
          var g, m;
        }
        function w(r, d) {
          r._state = 2, r._value = d, y(r);
        }
        function y(r) {
          r._state === 2 && r._deferreds.length === 0 && l._immediateFn(function() {
            r._handled || l._unhandledRejectionFn(r._value);
          });
          for (var d = 0, c = r._deferreds.length; d < c; d++)
            f(r, r._deferreds[d]);
          r._deferreds = null;
        }
        function k(r, d, c) {
          this.onFulfilled = typeof r == "function" ? r : null, this.onRejected = typeof d == "function" ? d : null, this.promise = c;
        }
        function t(r, d) {
          var c = !1;
          try {
            r(function(g) {
              c || (c = !0, h(d, g));
            }, function(g) {
              c || (c = !0, w(d, g));
            });
          } catch (g) {
            if (c)
              return;
            c = !0, w(d, g);
          }
        }
        l.prototype.catch = function(r) {
          return this.then(null, r);
        }, l.prototype.then = function(r, d) {
          var c = new this.constructor(v);
          return f(this, new k(r, d, c)), c;
        }, l.prototype.finally = n.a, l.all = function(r) {
          return new l(function(d, c) {
            if (!r || r.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(r);
            if (g.length === 0)
              return d([]);
            var m = g.length;
            function p(M, C) {
              try {
                if (C && (typeof C == "object" || typeof C == "function")) {
                  var T = C.then;
                  if (typeof T == "function")
                    return void T.call(C, function(I) {
                      p(M, I);
                    }, c);
                }
                g[M] = C, --m == 0 && d(g);
              } catch (I) {
                c(I);
              }
            }
            for (var E = 0; E < g.length; E++)
              p(E, g[E]);
          });
        }, l.resolve = function(r) {
          return r && typeof r == "object" && r.constructor === l ? r : new l(function(d) {
            d(r);
          });
        }, l.reject = function(r) {
          return new l(function(d, c) {
            c(r);
          });
        }, l.race = function(r) {
          return new l(function(d, c) {
            for (var g = 0, m = r.length; g < m; g++)
              r[g].then(d, c);
          });
        }, l._immediateFn = typeof a == "function" && function(r) {
          a(r);
        } || function(r) {
          u(r, 0);
        }, l._unhandledRejectionFn = function(r) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", r);
        }, i.a = l;
      }).call(this, s(5).setImmediate);
    }, function(o, i, s) {
      i.a = function(a) {
        var n = this.constructor;
        return this.then(function(u) {
          return n.resolve(a()).then(function() {
            return u;
          });
        }, function(u) {
          return n.resolve(a()).then(function() {
            return n.reject(u);
          });
        });
      };
    }, function(o, i, s) {
      function a(t) {
        return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        })(t);
      }
      s(4);
      var n, u, v, l, f, h, w, y = s(8), k = (u = function(t) {
        return new Promise(function(r, d) {
          t = l(t), (t = f(t)).beforeSend && t.beforeSend();
          var c = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          c.open(t.method, t.url), c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var p = t.headers[m];
            c.setRequestHeader(m, p);
          });
          var g = t.ratio;
          c.upload.addEventListener("progress", function(m) {
            var p = Math.round(m.loaded / m.total * 100), E = Math.ceil(p * g / 100);
            t.progress(Math.min(E, 100));
          }, !1), c.addEventListener("progress", function(m) {
            var p = Math.round(m.loaded / m.total * 100), E = Math.ceil(p * (100 - g) / 100) + g;
            t.progress(Math.min(E, 100));
          }, !1), c.onreadystatechange = function() {
            if (c.readyState === 4) {
              var m = c.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var p = y.parseHeaders(c.getAllResponseHeaders()), E = { body: m, code: c.status, headers: p };
              w(c.status) ? r(E) : d(E);
            }
          }, c.send(t.data);
        });
      }, v = function(t) {
        return t.method = "POST", u(t);
      }, l = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && a(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(n).includes(t.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(r) {
        }, t.beforeSend = t.beforeSend || function(r) {
        }, t.ratio && typeof t.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, f = function(t) {
        switch (t.method) {
          case "GET":
            var r = h(t.data, n.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + r : t.url + "?" + r;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var d = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || n.JSON;
            }(t);
            (y.isFormData(t.data) || y.isFormElement(t.data)) && (d = n.FORM), t.data = h(t.data, d), d !== k.contentType.FORM && (t.headers["content-type"] = d);
        }
        return t;
      }, h = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case n.URLENCODED:
            return y.urlEncode(t);
          case n.JSON:
            return y.jsonEncode(t);
          case n.FORM:
            return y.formEncode(t);
          default:
            return t;
        }
      }, w = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: n = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: u, get: function(t) {
        return t.method = "GET", u(t);
      }, post: v, transport: function(t) {
        return t = l(t), y.selectFiles(t).then(function(r) {
          for (var d = new FormData(), c = 0; c < r.length; c++)
            d.append(t.fieldName, r[c], r[c].name);
          y.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var p = t.data[m];
            d.append(m, p);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(r);
          }, t.data = d, v(t);
        });
      }, selectFiles: function(t) {
        return delete (t = l(t)).beforeSend, y.selectFiles(t);
      } });
      o.exports = k;
    }, function(o, i, s) {
      s.r(i);
      var a = s(1);
      window.Promise = window.Promise || a.a;
    }, function(o, i, s) {
      (function(a) {
        var n = a !== void 0 && a || typeof self < "u" && self || window, u = Function.prototype.apply;
        function v(l, f) {
          this._id = l, this._clearFn = f;
        }
        i.setTimeout = function() {
          return new v(u.call(setTimeout, n, arguments), clearTimeout);
        }, i.setInterval = function() {
          return new v(u.call(setInterval, n, arguments), clearInterval);
        }, i.clearTimeout = i.clearInterval = function(l) {
          l && l.close();
        }, v.prototype.unref = v.prototype.ref = function() {
        }, v.prototype.close = function() {
          this._clearFn.call(n, this._id);
        }, i.enroll = function(l, f) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = f;
        }, i.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, i._unrefActive = i.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var f = l._idleTimeout;
          f >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, f));
        }, s(6), i.setImmediate = typeof self < "u" && self.setImmediate || a !== void 0 && a.setImmediate || this && this.setImmediate, i.clearImmediate = typeof self < "u" && self.clearImmediate || a !== void 0 && a.clearImmediate || this && this.clearImmediate;
      }).call(this, s(0));
    }, function(o, i, s) {
      (function(a, n) {
        (function(u, v) {
          if (!u.setImmediate) {
            var l, f, h, w, y, k = 1, t = {}, r = !1, d = u.document, c = Object.getPrototypeOf && Object.getPrototypeOf(u);
            c = c && c.setTimeout ? c : u, {}.toString.call(u.process) === "[object process]" ? l = function(p) {
              n.nextTick(function() {
                m(p);
              });
            } : function() {
              if (u.postMessage && !u.importScripts) {
                var p = !0, E = u.onmessage;
                return u.onmessage = function() {
                  p = !1;
                }, u.postMessage("", "*"), u.onmessage = E, p;
              }
            }() ? (w = "setImmediate$" + Math.random() + "$", y = function(p) {
              p.source === u && typeof p.data == "string" && p.data.indexOf(w) === 0 && m(+p.data.slice(w.length));
            }, u.addEventListener ? u.addEventListener("message", y, !1) : u.attachEvent("onmessage", y), l = function(p) {
              u.postMessage(w + p, "*");
            }) : u.MessageChannel ? ((h = new MessageChannel()).port1.onmessage = function(p) {
              m(p.data);
            }, l = function(p) {
              h.port2.postMessage(p);
            }) : d && "onreadystatechange" in d.createElement("script") ? (f = d.documentElement, l = function(p) {
              var E = d.createElement("script");
              E.onreadystatechange = function() {
                m(p), E.onreadystatechange = null, f.removeChild(E), E = null;
              }, f.appendChild(E);
            }) : l = function(p) {
              setTimeout(m, 0, p);
            }, c.setImmediate = function(p) {
              typeof p != "function" && (p = new Function("" + p));
              for (var E = new Array(arguments.length - 1), M = 0; M < E.length; M++)
                E[M] = arguments[M + 1];
              var C = { callback: p, args: E };
              return t[k] = C, l(k), k++;
            }, c.clearImmediate = g;
          }
          function g(p) {
            delete t[p];
          }
          function m(p) {
            if (r)
              setTimeout(m, 0, p);
            else {
              var E = t[p];
              if (E) {
                r = !0;
                try {
                  (function(M) {
                    var C = M.callback, T = M.args;
                    switch (T.length) {
                      case 0:
                        C();
                        break;
                      case 1:
                        C(T[0]);
                        break;
                      case 2:
                        C(T[0], T[1]);
                        break;
                      case 3:
                        C(T[0], T[1], T[2]);
                        break;
                      default:
                        C.apply(v, T);
                    }
                  })(E);
                } finally {
                  g(p), r = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? a === void 0 ? this : a : self);
      }).call(this, s(0), s(7));
    }, function(o, i) {
      var s, a, n = o.exports = {};
      function u() {
        throw new Error("setTimeout has not been defined");
      }
      function v() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(c) {
        if (s === setTimeout)
          return setTimeout(c, 0);
        if ((s === u || !s) && setTimeout)
          return s = setTimeout, setTimeout(c, 0);
        try {
          return s(c, 0);
        } catch {
          try {
            return s.call(null, c, 0);
          } catch {
            return s.call(this, c, 0);
          }
        }
      }
      (function() {
        try {
          s = typeof setTimeout == "function" ? setTimeout : u;
        } catch {
          s = u;
        }
        try {
          a = typeof clearTimeout == "function" ? clearTimeout : v;
        } catch {
          a = v;
        }
      })();
      var f, h = [], w = !1, y = -1;
      function k() {
        w && f && (w = !1, f.length ? h = f.concat(h) : y = -1, h.length && t());
      }
      function t() {
        if (!w) {
          var c = l(k);
          w = !0;
          for (var g = h.length; g; ) {
            for (f = h, h = []; ++y < g; )
              f && f[y].run();
            y = -1, g = h.length;
          }
          f = null, w = !1, function(m) {
            if (a === clearTimeout)
              return clearTimeout(m);
            if ((a === v || !a) && clearTimeout)
              return a = clearTimeout, clearTimeout(m);
            try {
              a(m);
            } catch {
              try {
                return a.call(null, m);
              } catch {
                return a.call(this, m);
              }
            }
          }(c);
        }
      }
      function r(c, g) {
        this.fun = c, this.array = g;
      }
      function d() {
      }
      n.nextTick = function(c) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var m = 1; m < arguments.length; m++)
            g[m - 1] = arguments[m];
        h.push(new r(c, g)), h.length !== 1 || w || l(t);
      }, r.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = d, n.addListener = d, n.once = d, n.off = d, n.removeListener = d, n.removeAllListeners = d, n.emit = d, n.prependListener = d, n.prependOnceListener = d, n.listeners = function(c) {
        return [];
      }, n.binding = function(c) {
        throw new Error("process.binding is not supported");
      }, n.cwd = function() {
        return "/";
      }, n.chdir = function(c) {
        throw new Error("process.chdir is not supported");
      }, n.umask = function() {
        return 0;
      };
    }, function(o, i, s) {
      function a(u, v) {
        for (var l = 0; l < v.length; l++) {
          var f = v[l];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(u, f.key, f);
        }
      }
      var n = s(9);
      o.exports = function() {
        function u() {
          (function(h, w) {
            if (!(h instanceof w))
              throw new TypeError("Cannot call a class as a function");
          })(this, u);
        }
        var v, l, f;
        return v = u, f = [{ key: "urlEncode", value: function(h) {
          return n(h);
        } }, { key: "jsonEncode", value: function(h) {
          return JSON.stringify(h);
        } }, { key: "formEncode", value: function(h) {
          if (this.isFormData(h))
            return h;
          if (this.isFormElement(h))
            return new FormData(h);
          if (this.isObject(h)) {
            var w = new FormData();
            return Object.keys(h).forEach(function(y) {
              var k = h[y];
              w.append(y, k);
            }), w;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(h) {
          return Object.prototype.toString.call(h) === "[object Object]";
        } }, { key: "isFormData", value: function(h) {
          return h instanceof FormData;
        } }, { key: "isFormElement", value: function(h) {
          return h instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(w, y) {
            var k = document.createElement("INPUT");
            k.type = "file", h.multiple && k.setAttribute("multiple", "multiple"), h.accept && k.setAttribute("accept", h.accept), k.style.display = "none", document.body.appendChild(k), k.addEventListener("change", function(t) {
              var r = t.target.files;
              w(r), document.body.removeChild(k);
            }, !1), k.click();
          });
        } }, { key: "parseHeaders", value: function(h) {
          var w = h.trim().split(/[\r\n]+/), y = {};
          return w.forEach(function(k) {
            var t = k.split(": "), r = t.shift(), d = t.join(": ");
            r && (y[r] = d);
          }), y;
        } }], (l = null) && a(v.prototype, l), f && a(v, f), u;
      }();
    }, function(o, i) {
      var s = function(n) {
        return encodeURIComponent(n).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, a = function(n, u, v, l) {
        return u = u || null, v = v || "&", l = l || null, n ? function(f) {
          for (var h = new Array(), w = 0; w < f.length; w++)
            f[w] && h.push(f[w]);
          return h;
        }(Object.keys(n).map(function(f) {
          var h, w, y = f;
          if (l && (y = l + "[" + y + "]"), typeof n[f] == "object" && n[f] !== null)
            h = a(n[f], null, v, y);
          else {
            u && (w = y, y = !isNaN(parseFloat(w)) && isFinite(w) ? u + Number(y) : y);
            var k = n[f];
            k = (k = (k = (k = k === !0 ? "1" : k) === !1 ? "0" : k) === 0 ? "0" : k) || "", h = s(y) + "=" + s(k);
          }
          return h;
        })).join(v).replace(/[!'()*]/g, "") : "";
      };
      o.exports = a;
    }]);
  });
})(H);
var B = H.exports;
const O = /* @__PURE__ */ X(B), J = 0.85, Y = 50, K = "image/webp", Q = "image/jpeg";
function x(b, e) {
  return b.toDataURL(e, J);
}
function N(b, e) {
  const o = document.createElement("canvas"), i = o.getContext("2d"), s = document.createElement("canvas"), a = s.getContext("2d"), n = Math.min(e.width, e.height), u = Y / n, v = e.width * u;
  o.width = v, o.height = v;
  let l = Math.floor(e.width * 0.5);
  if (s.width = l, s.height = l, a.drawImage(b, Math.max(0, (e.width - n) / 2), Math.max(0, (e.height - n) / 2), n, n, 0, 0, l, l), !a.getImageData(0, 0, o.width, o.height).data.every((f) => f === 0)) {
    for (; l * 0.5 > v; )
      l = Math.floor(l * 0.5), a.drawImage(s, 0, 0, l * 2, l * 2, 0, 0, l, l);
    return i.drawImage(s, 0, 0, l, l, 0, 0, o.width, o.height), x(o, K) || x(o, Q) || void 0;
  }
}
const Z = 5;
function z(b) {
  return new Promise((e) => {
    const o = URL.createObjectURL(b), i = document.createElement("video");
    i.oncanplay = () => {
      i.onseeked = () => {
        e(N(i, { width: i.videoWidth, height: i.videoHeight })), i.remove(), URL.revokeObjectURL(o);
      }, i.currentTime = Math.min(i.duration / 2, Z);
    }, i.src = o;
  });
}
function tt(b) {
  return new Promise((e) => {
    const o = URL.createObjectURL(b), i = document.createElement("img");
    i.onload = () => {
      e(N(i, { width: i.naturalWidth, height: i.naturalHeight })), i.remove(), URL.revokeObjectURL(o);
    }, i.src = o;
  });
}
async function et(b, e) {
  switch (e) {
    case "VIDEO":
      return await z(b);
    case "IMG":
      return await tt(b);
  }
  return "";
}
function nt(b) {
  return b.type ? { IMAGE: "IMG", VIDEO: "VIDEO", AUDIO: "AUDIO" }[b.type.split("/")[0].toUpperCase()] : P(b.name);
}
class rt {
  /**
   * @param {object} params - uploader module params
   * @param {MediaConfig} params.config - media tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: e, onUpload: o, onError: i }) {
    this.config = e, this.onUpload = o, this.onError = i;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - media source url
   */
  async uploadByUrl(e) {
    try {
      let o;
      this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? o = await this.config.uploader.uploadByUrl(e) : o = await O.post({
        url: this.config.endpoints.byUrl,
        data: Object.assign({
          url: e
        }, this.config.additionalRequestData),
        type: O.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((i) => i.body), o.file.tag || (o.file.tag = P(e)), this.onUpload(o);
    } catch (o) {
      this.onError(o);
    }
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  async uploadByFile(e, { onPreview: o }) {
    const i = nt(e);
    try {
      let s;
      if (et(e, i).then((a) => {
        s || o(a);
      }), this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
        s = await this.config.uploader.uploadByFile(e);
      else {
        const a = new FormData();
        a.append(this.config.field, e), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([n, u]) => {
          a.append(n, u);
        }), s = await O.post({
          url: this.config.endpoints.byFile,
          data: a,
          type: O.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((n) => n.body);
      }
      s.file.tag || (s.file.tag = i), this.onUpload(s);
    } catch (s) {
      this.onError(s);
    }
  }
}
const F = "cdx-list", L = {
  wrapper: `${F}-start-with-field`,
  input: `${F}-start-with-field__input`,
  startWithElementWrapperInvalid: `${F}-start-with-field--invalid`
};
function ot(b, { value: e, placeholder: o, attributes: i, sanitize: s }) {
  const a = _("div", L.wrapper), n = _("input", L.input, {
    placeholder: o,
    /**
     * Used to prevent focusing on the input by Tab key
     * (Popover in the Toolbar lays below the blocks,
     * so Tab in the last block will focus this hidden input if this property is not set)
     */
    tabIndex: -1,
    /**
     * Value of the start property, if it is not specified, then it is set to one
     */
    value: e
  });
  for (const u in i)
    n.setAttribute(u, i[u]);
  return a.appendChild(n), n.addEventListener("input", () => {
    s !== void 0 && (n.value = s(n.value));
    const u = n.checkValidity();
    !u && !a.classList.contains(L.startWithElementWrapperInvalid) && a.classList.add(L.startWithElementWrapperInvalid), u && a.classList.contains(L.startWithElementWrapperInvalid) && a.classList.remove(L.startWithElementWrapperInvalid), u && b(n.value);
  }), a;
}
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * media: {
 *   class: MediaTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class S {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: R,
      title: "Media"
    };
  }
  /**
   * Available media tools
   *
   * @returns {Array}
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: q,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: $,
        title: "Stretch media",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: V,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {MediaToolData} tool.data - previously saved data
   * @param {MediaConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   * @param {BlockAPI|{}} tool.block - current Block API
   */
  constructor({ data: e, config: o, api: i, readOnly: s, block: a }) {
    this.api = i, this.readOnly = s, this.block = a, this.config = {
      endpoints: o.endpoints || "",
      additionalRequestData: o.additionalRequestData || {},
      additionalRequestHeaders: o.additionalRequestHeaders || {},
      field: o.field || "media",
      types: o.types || "image/*,audio/*,video/*",
      buttonContent: o.buttonContent || "",
      uploader: o.uploader || void 0,
      actions: o.actions || []
    }, this.uploader = new rt({
      config: this.config,
      onUpload: (n) => this.onUpload(n),
      onError: (n) => this.uploadingFailed(n)
    }), this.ui = new j({
      api: i,
      config: this.config,
      onSelectFile: async () => {
        const n = await B.ajax.selectFiles({ accept: this.config.types, multiple: !0 });
        if (n.length > 0 && this.uploadFile(n[0]), n.length > 1)
          for (let u = n.length - 1; u > 0; u--)
            this.api.blocks.insert(this.config.field, { _file: n[u] });
      },
      readOnly: s
    }), e._file && (this.initialFile = e._file, e = {}), this._data = {}, this.data = e;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   *
   * @param {MediaToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return e.file && e.file.url;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {MediaToolData}
   */
  save() {
    return this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch media
   *
   * @public
   *
   * @returns {Array}
   */
  renderSettings() {
    const o = S.tunes.concat(this.config.actions).map((i) => ({
      icon: i.icon,
      label: this.api.i18n.t(i.title),
      name: i.name,
      toggle: i.toggle,
      isActive: this.data[i.name],
      children: i.children,
      onActivate: () => {
        if (typeof i.action == "function") {
          i.action(i.name, this._data);
          return;
        }
        this.tuneToggled(i.name);
      }
    }));
    return this._renderSettings.concat(o);
  }
  get _renderSettings() {
    return [
      // hyperlink
      {
        name: "link",
        icon: W,
        label: this.api.i18n.t("Link"),
        children: {
          items: [
            {
              element: ot(
                (e) => {
                  this._data.link = e, this.ui.nodes.href.href = e;
                },
                {
                  value: this._data.link || "",
                  placeholder: this.api.i18n.t("Add a link")
                }
              ),
              type: "html"
            }
          ]
        }
      }
    ];
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.initialFile ? this.uploadFile(this.initialFile) : this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of media into the Editor
       */
      patterns: {
        media: G
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*", "audio/*", "video/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   *
   * @public
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param {CustomEvent} event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   * @returns {void}
   */
  async onPaste(e) {
    switch (e.type) {
      case "tag": {
        this.ui.showPreloader();
        const o = e.detail.data;
        if (/^blob:/.test(o.src)) {
          const s = await (await fetch(o.src)).blob();
          this.uploadFile(s);
          break;
        }
        this.uploadUrl(o.src);
        break;
      }
      case "pattern": {
        this.ui.showPreloader();
        const o = e.detail.data;
        this.uploadUrl(o);
        break;
      }
      case "file": {
        this.ui.showPreloader();
        const o = e.detail.file;
        this.uploadFile(o);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {MediaToolData} data - data in Image Tool format
   */
  set data(e) {
    this.media = e.file, S.tunes.forEach(({ name: o }) => {
      const i = typeof e[o] < "u" ? e[o] === !0 || e[o] === "true" : !1;
      this.setTune(o, i);
    }), e.link && (this._data.link = e.link);
  }
  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {MediaToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * Set new media file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set media(e) {
    this._data.file = e || {}, e && e.url && this.ui.fillMedia(e.url, e.tag);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(e) {
    e.success && e.file ? this.media = e.file : this.uploadingFailed("incorrect response: " + JSON.stringify(e));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(e) {
    console.log("Media Tool: uploading failed because of", e), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload medium. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  tuneToggled(e) {
    this.setTune(e, !this._data[e]);
  }
  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(e, o) {
    this._data[e] = o, this.ui.applyTune(e, o), e === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = o;
    }).catch((i) => {
      console.error(i);
    });
  }
  /**
   * Show preloader and upload media file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(e) {
    this.uploader.uploadByFile(e, {
      onPreview: (o) => {
        this.ui.showPreloader(o);
      }
    });
  }
  /**
   * Show preloader and upload media by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(e) {
    this.ui.showPreloader(e), this.uploader.uploadByUrl(e);
  }
}
export {
  S as default
};
