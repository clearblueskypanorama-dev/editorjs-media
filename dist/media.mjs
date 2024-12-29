(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.media-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.media-tool__media{border-radius:3px;overflow:hidden;margin-bottom:10px}.media-tool__media-picture{max-width:100%;vertical-align:bottom;display:block}.media-tool__media-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.media-tool__media-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:media-preloader-spin 2s infinite linear;box-sizing:border-box}.media-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.media-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.media-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.media-tool--empty .media-tool__media,.media-tool--empty .media-tool__caption,.media-tool--loading .media-tool__caption{display:none}.media-tool .cdx-button{display:flex;align-items:center;justify-content:center}.media-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.media-tool--filled .cdx-button,.media-tool--filled .media-tool__media-preloader{display:none}.media-tool--loading .media-tool__media{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.media-tool--loading .media-tool__media-picture,.media-tool--loading .cdx-button{display:none}.media-tool--withBorder .media-tool__media{border:1px solid var(--border-color)}.media-tool--withBackground .media-tool__media{padding:15px;background:var(--bg-color)}.media-tool--withBackground .media-tool__media-picture{max-width:60%;margin:0 auto}.media-tool--stretched .media-tool__media-picture{width:100%}@keyframes media-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', A = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function M(E, r = null, o = {}) {
  const l = document.createElement(E);
  Array.isArray(r) ? l.classList.add(...r) : r && l.classList.add(r);
  for (const n in o)
    l[n] = o[n];
  return l;
}
const R = /* @__PURE__ */ new Set(["apng", "avif", "gif", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "png", "svg", "webp"]), I = /* @__PURE__ */ new Set(["m4a", "m4b", "mp4a", "mpga", "mp2", "mp2a", "mp3", "m2a", "m3a", "wav", "weba", "aac", "oga", "spx", "flac", "opus"]), D = /* @__PURE__ */ new Set(["mp4", "ogg", "ogv", "webm", "mov", "m4v", "mkv", "3gp", "avi", "mpeg"]), B = new RegExp(`https?:\\/\\/\\S+\\.(${[...R, ...I, ...D].join("|")})(\\?[a-z0-9=]*)?$`, "i");
function N({ pathname: E }) {
  const r = E.split(".").pop();
  if (R.has(r))
    return "IMG";
  if (I.has(r))
    return "AUDIO";
  if (D.has(r))
    return "VIDEO";
}
class S {
  /**
   * @param {object} ui - media tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {MediaConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: r, config: o, onSelectFile: l, readOnly: n }) {
    this.api = r, this.config = o, this.onSelectFile = l, this.readOnly = n, this.nodes = {
      wrapper: M("div", [this.CSS.baseClass, this.CSS.wrapper]),
      mediaContainer: M("div", [this.CSS.mediaContainer]),
      fileButton: this.createFileButton(),
      mediaEl: void 0,
      mediaPreloader: M("div", this.CSS.mediaPreloader),
      caption: M("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.mediaContainer.appendChild(this.nodes.mediaPreloader), this.nodes.wrapper.appendChild(this.nodes.mediaContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
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
      mediaEl: "media-tool__media-picture",
      caption: "media-tool__caption"
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
  render(r) {
    return !r.file || Object.keys(r.file).length === 0 ? this.toggleStatus(S.status.EMPTY) : this.toggleStatus(S.status.UPLOADING), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const r = M("div", [this.CSS.button]);
    return r.innerHTML = this.config.buttonContent || `${L} ${this.api.i18n.t("Select a media file")}`, r.addEventListener("click", () => {
      this.onSelectFile();
    }), r;
  }
  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(r) {
    this.nodes.mediaPreloader.style.backgroundImage = `url(${r})`, this.toggleStatus(S.status.UPLOADING);
  }
  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.mediaPreloader.style.backgroundImage = "", this.toggleStatus(S.status.EMPTY);
  }
  /**
   * Shows a medium
   *
   * @param {string} url - medium source
   * @returns {void}
   */
  fillMedia(r) {
    let o = N(new URL(r));
    const l = {
      src: r
    };
    let n = "load";
    (o === "VIDEO" || o === "AUDIO") && (l.muted = !0, l.playsinline = !0, l.controls = !0, o === "AUDIO" && (l.style = "width: 100%;"), n = "loadeddata"), this.nodes.mediaEl = M(o, this.CSS.mediaEl, l), this.nodes.mediaEl.addEventListener(n, () => {
      this.toggleStatus(S.status.FILLED), this.nodes.mediaPreloader && (this.nodes.mediaPreloader.style.backgroundImage = "");
    }), this.nodes.mediaContainer.appendChild(this.nodes.mediaEl);
  }
  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(r) {
    this.nodes.caption && (this.nodes.caption.innerHTML = r);
  }
  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(r) {
    for (const o in S.status)
      Object.prototype.hasOwnProperty.call(S.status, o) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${S.status[o]}`, r === S.status[o]);
  }
  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(r, o) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${r}`, o);
  }
}
function q(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var H = { exports: {} };
(function(E, r) {
  (function(o, l) {
    E.exports = l();
  })(window, function() {
    return function(o) {
      var l = {};
      function n(a) {
        if (l[a])
          return l[a].exports;
        var i = l[a] = { i: a, l: !1, exports: {} };
        return o[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
      }
      return n.m = o, n.c = l, n.d = function(a, i, d) {
        n.o(a, i) || Object.defineProperty(a, i, { enumerable: !0, get: d });
      }, n.r = function(a) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
      }, n.t = function(a, i) {
        if (1 & i && (a = n(a)), 8 & i || 4 & i && typeof a == "object" && a && a.__esModule)
          return a;
        var d = /* @__PURE__ */ Object.create(null);
        if (n.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: a }), 2 & i && typeof a != "string")
          for (var b in a)
            n.d(d, b, (function(c) {
              return a[c];
            }).bind(null, b));
        return d;
      }, n.n = function(a) {
        var i = a && a.__esModule ? function() {
          return a.default;
        } : function() {
          return a;
        };
        return n.d(i, "a", i), i;
      }, n.o = function(a, i) {
        return Object.prototype.hasOwnProperty.call(a, i);
      }, n.p = "", n(n.s = 3);
    }([function(o, l) {
      var n;
      n = function() {
        return this;
      }();
      try {
        n = n || new Function("return this")();
      } catch {
        typeof window == "object" && (n = window);
      }
      o.exports = n;
    }, function(o, l, n) {
      (function(a) {
        var i = n(2), d = setTimeout;
        function b() {
        }
        function c(e) {
          if (!(this instanceof c))
            throw new TypeError("Promises must be constructed via new");
          if (typeof e != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(e, this);
        }
        function f(e, u) {
          for (; e._state === 3; )
            e = e._value;
          e._state !== 0 ? (e._handled = !0, c._immediateFn(function() {
            var s = e._state === 1 ? u.onFulfilled : u.onRejected;
            if (s !== null) {
              var g;
              try {
                g = s(e._value);
              } catch (m) {
                return void y(u.promise, m);
              }
              p(u.promise, g);
            } else
              (e._state === 1 ? p : y)(u.promise, e._value);
          })) : e._deferreds.push(u);
        }
        function p(e, u) {
          try {
            if (u === e)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (u && (typeof u == "object" || typeof u == "function")) {
              var s = u.then;
              if (u instanceof c)
                return e._state = 3, e._value = u, void w(e);
              if (typeof s == "function")
                return void t((g = s, m = u, function() {
                  g.apply(m, arguments);
                }), e);
            }
            e._state = 1, e._value = u, w(e);
          } catch (h) {
            y(e, h);
          }
          var g, m;
        }
        function y(e, u) {
          e._state = 2, e._value = u, w(e);
        }
        function w(e) {
          e._state === 2 && e._deferreds.length === 0 && c._immediateFn(function() {
            e._handled || c._unhandledRejectionFn(e._value);
          });
          for (var u = 0, s = e._deferreds.length; u < s; u++)
            f(e, e._deferreds[u]);
          e._deferreds = null;
        }
        function v(e, u, s) {
          this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof u == "function" ? u : null, this.promise = s;
        }
        function t(e, u) {
          var s = !1;
          try {
            e(function(g) {
              s || (s = !0, p(u, g));
            }, function(g) {
              s || (s = !0, y(u, g));
            });
          } catch (g) {
            if (s)
              return;
            s = !0, y(u, g);
          }
        }
        c.prototype.catch = function(e) {
          return this.then(null, e);
        }, c.prototype.then = function(e, u) {
          var s = new this.constructor(b);
          return f(this, new v(e, u, s)), s;
        }, c.prototype.finally = i.a, c.all = function(e) {
          return new c(function(u, s) {
            if (!e || e.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(e);
            if (g.length === 0)
              return u([]);
            var m = g.length;
            function h(T, C) {
              try {
                if (C && (typeof C == "object" || typeof C == "function")) {
                  var j = C.then;
                  if (typeof j == "function")
                    return void j.call(C, function(O) {
                      h(T, O);
                    }, s);
                }
                g[T] = C, --m == 0 && u(g);
              } catch (O) {
                s(O);
              }
            }
            for (var k = 0; k < g.length; k++)
              h(k, g[k]);
          });
        }, c.resolve = function(e) {
          return e && typeof e == "object" && e.constructor === c ? e : new c(function(u) {
            u(e);
          });
        }, c.reject = function(e) {
          return new c(function(u, s) {
            s(e);
          });
        }, c.race = function(e) {
          return new c(function(u, s) {
            for (var g = 0, m = e.length; g < m; g++)
              e[g].then(u, s);
          });
        }, c._immediateFn = typeof a == "function" && function(e) {
          a(e);
        } || function(e) {
          d(e, 0);
        }, c._unhandledRejectionFn = function(e) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }, l.a = c;
      }).call(this, n(5).setImmediate);
    }, function(o, l, n) {
      l.a = function(a) {
        var i = this.constructor;
        return this.then(function(d) {
          return i.resolve(a()).then(function() {
            return d;
          });
        }, function(d) {
          return i.resolve(a()).then(function() {
            return i.reject(d);
          });
        });
      };
    }, function(o, l, n) {
      function a(t) {
        return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
      }
      n(4);
      var i, d, b, c, f, p, y, w = n(8), v = (d = function(t) {
        return new Promise(function(e, u) {
          t = c(t), (t = f(t)).beforeSend && t.beforeSend();
          var s = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          s.open(t.method, t.url), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var h = t.headers[m];
            s.setRequestHeader(m, h);
          });
          var g = t.ratio;
          s.upload.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * g / 100);
            t.progress(Math.min(k, 100));
          }, !1), s.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * (100 - g) / 100) + g;
            t.progress(Math.min(k, 100));
          }, !1), s.onreadystatechange = function() {
            if (s.readyState === 4) {
              var m = s.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var h = w.parseHeaders(s.getAllResponseHeaders()), k = { body: m, code: s.status, headers: h };
              y(s.status) ? e(k) : u(k);
            }
          }, s.send(t.data);
        });
      }, b = function(t) {
        return t.method = "POST", d(t);
      }, c = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && a(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(i).includes(t.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(e) {
        }, t.beforeSend = t.beforeSend || function(e) {
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
            var e = p(t.data, i.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var u = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || i.JSON;
            }(t);
            (w.isFormData(t.data) || w.isFormElement(t.data)) && (u = i.FORM), t.data = p(t.data, u), u !== v.contentType.FORM && (t.headers["content-type"] = u);
        }
        return t;
      }, p = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case i.URLENCODED:
            return w.urlEncode(t);
          case i.JSON:
            return w.jsonEncode(t);
          case i.FORM:
            return w.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: i = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(t) {
        return t.method = "GET", d(t);
      }, post: b, transport: function(t) {
        return t = c(t), w.selectFiles(t).then(function(e) {
          for (var u = new FormData(), s = 0; s < e.length; s++)
            u.append(t.fieldName, e[s], e[s].name);
          w.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var h = t.data[m];
            u.append(m, h);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(e);
          }, t.data = u, b(t);
        });
      }, selectFiles: function(t) {
        return delete (t = c(t)).beforeSend, w.selectFiles(t);
      } });
      o.exports = v;
    }, function(o, l, n) {
      n.r(l);
      var a = n(1);
      window.Promise = window.Promise || a.a;
    }, function(o, l, n) {
      (function(a) {
        var i = a !== void 0 && a || typeof self < "u" && self || window, d = Function.prototype.apply;
        function b(c, f) {
          this._id = c, this._clearFn = f;
        }
        l.setTimeout = function() {
          return new b(d.call(setTimeout, i, arguments), clearTimeout);
        }, l.setInterval = function() {
          return new b(d.call(setInterval, i, arguments), clearInterval);
        }, l.clearTimeout = l.clearInterval = function(c) {
          c && c.close();
        }, b.prototype.unref = b.prototype.ref = function() {
        }, b.prototype.close = function() {
          this._clearFn.call(i, this._id);
        }, l.enroll = function(c, f) {
          clearTimeout(c._idleTimeoutId), c._idleTimeout = f;
        }, l.unenroll = function(c) {
          clearTimeout(c._idleTimeoutId), c._idleTimeout = -1;
        }, l._unrefActive = l.active = function(c) {
          clearTimeout(c._idleTimeoutId);
          var f = c._idleTimeout;
          f >= 0 && (c._idleTimeoutId = setTimeout(function() {
            c._onTimeout && c._onTimeout();
          }, f));
        }, n(6), l.setImmediate = typeof self < "u" && self.setImmediate || a !== void 0 && a.setImmediate || this && this.setImmediate, l.clearImmediate = typeof self < "u" && self.clearImmediate || a !== void 0 && a.clearImmediate || this && this.clearImmediate;
      }).call(this, n(0));
    }, function(o, l, n) {
      (function(a, i) {
        (function(d, b) {
          if (!d.setImmediate) {
            var c, f, p, y, w, v = 1, t = {}, e = !1, u = d.document, s = Object.getPrototypeOf && Object.getPrototypeOf(d);
            s = s && s.setTimeout ? s : d, {}.toString.call(d.process) === "[object process]" ? c = function(h) {
              i.nextTick(function() {
                m(h);
              });
            } : function() {
              if (d.postMessage && !d.importScripts) {
                var h = !0, k = d.onmessage;
                return d.onmessage = function() {
                  h = !1;
                }, d.postMessage("", "*"), d.onmessage = k, h;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", w = function(h) {
              h.source === d && typeof h.data == "string" && h.data.indexOf(y) === 0 && m(+h.data.slice(y.length));
            }, d.addEventListener ? d.addEventListener("message", w, !1) : d.attachEvent("onmessage", w), c = function(h) {
              d.postMessage(y + h, "*");
            }) : d.MessageChannel ? ((p = new MessageChannel()).port1.onmessage = function(h) {
              m(h.data);
            }, c = function(h) {
              p.port2.postMessage(h);
            }) : u && "onreadystatechange" in u.createElement("script") ? (f = u.documentElement, c = function(h) {
              var k = u.createElement("script");
              k.onreadystatechange = function() {
                m(h), k.onreadystatechange = null, f.removeChild(k), k = null;
              }, f.appendChild(k);
            }) : c = function(h) {
              setTimeout(m, 0, h);
            }, s.setImmediate = function(h) {
              typeof h != "function" && (h = new Function("" + h));
              for (var k = new Array(arguments.length - 1), T = 0; T < k.length; T++)
                k[T] = arguments[T + 1];
              var C = { callback: h, args: k };
              return t[v] = C, c(v), v++;
            }, s.clearImmediate = g;
          }
          function g(h) {
            delete t[h];
          }
          function m(h) {
            if (e)
              setTimeout(m, 0, h);
            else {
              var k = t[h];
              if (k) {
                e = !0;
                try {
                  (function(T) {
                    var C = T.callback, j = T.args;
                    switch (j.length) {
                      case 0:
                        C();
                        break;
                      case 1:
                        C(j[0]);
                        break;
                      case 2:
                        C(j[0], j[1]);
                        break;
                      case 3:
                        C(j[0], j[1], j[2]);
                        break;
                      default:
                        C.apply(b, j);
                    }
                  })(k);
                } finally {
                  g(h), e = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? a === void 0 ? this : a : self);
      }).call(this, n(0), n(7));
    }, function(o, l) {
      var n, a, i = o.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function b() {
        throw new Error("clearTimeout has not been defined");
      }
      function c(s) {
        if (n === setTimeout)
          return setTimeout(s, 0);
        if ((n === d || !n) && setTimeout)
          return n = setTimeout, setTimeout(s, 0);
        try {
          return n(s, 0);
        } catch {
          try {
            return n.call(null, s, 0);
          } catch {
            return n.call(this, s, 0);
          }
        }
      }
      (function() {
        try {
          n = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          n = d;
        }
        try {
          a = typeof clearTimeout == "function" ? clearTimeout : b;
        } catch {
          a = b;
        }
      })();
      var f, p = [], y = !1, w = -1;
      function v() {
        y && f && (y = !1, f.length ? p = f.concat(p) : w = -1, p.length && t());
      }
      function t() {
        if (!y) {
          var s = c(v);
          y = !0;
          for (var g = p.length; g; ) {
            for (f = p, p = []; ++w < g; )
              f && f[w].run();
            w = -1, g = p.length;
          }
          f = null, y = !1, function(m) {
            if (a === clearTimeout)
              return clearTimeout(m);
            if ((a === b || !a) && clearTimeout)
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
          }(s);
        }
      }
      function e(s, g) {
        this.fun = s, this.array = g;
      }
      function u() {
      }
      i.nextTick = function(s) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var m = 1; m < arguments.length; m++)
            g[m - 1] = arguments[m];
        p.push(new e(s, g)), p.length !== 1 || y || c(t);
      }, e.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = u, i.addListener = u, i.once = u, i.off = u, i.removeListener = u, i.removeAllListeners = u, i.emit = u, i.prependListener = u, i.prependOnceListener = u, i.listeners = function(s) {
        return [];
      }, i.binding = function(s) {
        throw new Error("process.binding is not supported");
      }, i.cwd = function() {
        return "/";
      }, i.chdir = function(s) {
        throw new Error("process.chdir is not supported");
      }, i.umask = function() {
        return 0;
      };
    }, function(o, l, n) {
      function a(d, b) {
        for (var c = 0; c < b.length; c++) {
          var f = b[c];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(d, f.key, f);
        }
      }
      var i = n(9);
      o.exports = function() {
        function d() {
          (function(p, y) {
            if (!(p instanceof y))
              throw new TypeError("Cannot call a class as a function");
          })(this, d);
        }
        var b, c, f;
        return b = d, f = [{ key: "urlEncode", value: function(p) {
          return i(p);
        } }, { key: "jsonEncode", value: function(p) {
          return JSON.stringify(p);
        } }, { key: "formEncode", value: function(p) {
          if (this.isFormData(p))
            return p;
          if (this.isFormElement(p))
            return new FormData(p);
          if (this.isObject(p)) {
            var y = new FormData();
            return Object.keys(p).forEach(function(w) {
              var v = p[w];
              y.append(w, v);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(p) {
          return Object.prototype.toString.call(p) === "[object Object]";
        } }, { key: "isFormData", value: function(p) {
          return p instanceof FormData;
        } }, { key: "isFormElement", value: function(p) {
          return p instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, w) {
            var v = document.createElement("INPUT");
            v.type = "file", p.multiple && v.setAttribute("multiple", "multiple"), p.accept && v.setAttribute("accept", p.accept), v.style.display = "none", document.body.appendChild(v), v.addEventListener("change", function(t) {
              var e = t.target.files;
              y(e), document.body.removeChild(v);
            }, !1), v.click();
          });
        } }, { key: "parseHeaders", value: function(p) {
          var y = p.trim().split(/[\r\n]+/), w = {};
          return y.forEach(function(v) {
            var t = v.split(": "), e = t.shift(), u = t.join(": ");
            e && (w[e] = u);
          }), w;
        } }], (c = null) && a(b.prototype, c), f && a(b, f), d;
      }();
    }, function(o, l) {
      var n = function(i) {
        return encodeURIComponent(i).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, a = function(i, d, b, c) {
        return d = d || null, b = b || "&", c = c || null, i ? function(f) {
          for (var p = new Array(), y = 0; y < f.length; y++)
            f[y] && p.push(f[y]);
          return p;
        }(Object.keys(i).map(function(f) {
          var p, y, w = f;
          if (c && (w = c + "[" + w + "]"), typeof i[f] == "object" && i[f] !== null)
            p = a(i[f], null, b, w);
          else {
            d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
            var v = i[f];
            v = (v = (v = (v = v === !0 ? "1" : v) === !1 ? "0" : v) === 0 ? "0" : v) || "", p = n(w) + "=" + n(v);
          }
          return p;
        })).join(b).replace(/[!'()*]/g, "") : "";
      };
      o.exports = a;
    }]);
  });
})(H);
var V = H.exports;
const F = /* @__PURE__ */ q(V);
function _(E) {
  return E && typeof E.then == "function";
}
class $ {
  /**
   * @param {object} params - uploader module params
   * @param {MediaConfig} params.config - media tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: r, onUpload: o, onError: l }) {
    this.config = r, this.onUpload = o, this.onError = l;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: r }) {
    const o = function(n) {
      if (!r)
        return;
      const a = new FileReader();
      a.readAsDataURL(n), a.onload = (i) => {
        r(i.target.result);
      };
    };
    let l;
    this.config.uploader && typeof this.config.uploader.uploadByFile == "function" ? l = F.selectFiles({ accept: this.config.types }).then((n) => {
      o(n[0]);
      const a = this.config.uploader.uploadByFile(n[0]);
      return _(a) || console.warn("Custom uploader method uploadByFile should return a Promise"), a;
    }) : l = F.transport({
      url: this.config.endpoints.byFile,
      data: this.config.additionalRequestData,
      accept: this.config.types,
      headers: this.config.additionalRequestHeaders,
      beforeSend: (n) => {
        o(n[0]);
      },
      fieldName: this.config.field
    }).then((n) => n.body), l.then((n) => {
      this.onUpload(n);
    }).catch((n) => {
      this.onError(n);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - media source url
   */
  uploadByUrl(r) {
    let o;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (o = this.config.uploader.uploadByUrl(r), _(o) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : o = F.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: r
      }, this.config.additionalRequestData),
      type: F.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((l) => l.body), o.then((l) => {
      this.onUpload(l);
    }).catch((l) => {
      this.onError(l);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(r, { onPreview: o }) {
    if (o) {
      const n = new FileReader();
      n.readAsDataURL(r), n.onload = (a) => {
        o(a.target.result);
      };
    }
    let l;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      l = this.config.uploader.uploadByFile(r), _(l) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const n = new FormData();
      n.append(this.config.field, r), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([a, i]) => {
        n.append(a, i);
      }), l = F.post({
        url: this.config.endpoints.byFile,
        data: n,
        type: F.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((a) => a.body);
    }
    l.then((n) => {
      this.onUpload(n);
    }).catch((n) => {
      this.onError(n);
    });
  }
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
class P {
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
      icon: L,
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
        icon: U,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: A,
        title: "Stretch media",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: x,
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
  constructor({ data: r, config: o, api: l, readOnly: n, block: a }) {
    this.api = l, this.readOnly = n, this.block = a, this.config = {
      endpoints: o.endpoints || "",
      additionalRequestData: o.additionalRequestData || {},
      additionalRequestHeaders: o.additionalRequestHeaders || {},
      field: o.field || "media",
      types: o.types || "image/*,audio/*,video/*",
      captionPlaceholder: this.api.i18n.t(o.captionPlaceholder || "Caption"),
      buttonContent: o.buttonContent || "",
      uploader: o.uploader || void 0,
      actions: o.actions || []
    }, this.uploader = new $({
      config: this.config,
      onUpload: (i) => this.onUpload(i),
      onError: (i) => this.uploadingFailed(i)
    }), this.ui = new S({
      api: l,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (i) => {
            this.ui.showPreloader(i);
          }
        });
      },
      readOnly: n
    }), this._data = {}, this.data = r;
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
  validate(r) {
    return r.file && r.file.url;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {MediaToolData}
   */
  save() {
    const r = this.ui.nodes.caption;
    return this._data.caption = r.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch media
   *
   * @public
   *
   * @returns {Array}
   */
  renderSettings() {
    return P.tunes.concat(this.config.actions).map((o) => ({
      icon: o.icon,
      label: this.api.i18n.t(o.title),
      name: o.name,
      toggle: o.toggle,
      isActive: this.data[o.name],
      onActivate: () => {
        if (typeof o.action == "function") {
          o.action(o.name);
          return;
        }
        this.tuneToggled(o.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
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
        media: B
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
  async onPaste(r) {
    switch (r.type) {
      case "tag": {
        const o = r.detail.data;
        if (/^blob:/.test(o.src)) {
          const n = await (await fetch(o.src)).blob();
          this.uploadFile(n);
          break;
        }
        this.uploadUrl(o.src);
        break;
      }
      case "pattern": {
        const o = r.detail.data;
        this.uploadUrl(o);
        break;
      }
      case "file": {
        const o = r.detail.file;
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
  set data(r) {
    this.media = r.file, this._data.caption = r.caption || "", this.ui.fillCaption(this._data.caption), P.tunes.forEach(({ name: o }) => {
      const l = typeof r[o] < "u" ? r[o] === !0 || r[o] === "true" : !1;
      this.setTune(o, l);
    });
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
  set media(r) {
    this._data.file = r || {}, r && r.url && this.ui.fillMedia(r.url);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(r) {
    r.success && r.file ? this.media = r.file : this.uploadingFailed("incorrect response: " + JSON.stringify(r));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(r) {
    console.log("Media Tool: uploading failed because of", r), this.api.notifier.show({
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
  tuneToggled(r) {
    this.setTune(r, !this._data[r]);
  }
  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(r, o) {
    this._data[r] = o, this.ui.applyTune(r, o), r === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = o;
    }).catch((l) => {
      console.error(l);
    });
  }
  /**
   * Show preloader and upload media file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(r) {
    this.uploader.uploadByFile(r, {
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
  uploadUrl(r) {
    this.ui.showPreloader(r), this.uploader.uploadByUrl(r);
  }
}
export {
  P as default
};
