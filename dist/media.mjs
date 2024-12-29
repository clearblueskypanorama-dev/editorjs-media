(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.media-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.media-tool__media{border-radius:3px;overflow:hidden;margin-bottom:10px}.media-tool__media-picture{max-width:100%;vertical-align:bottom;display:block}.media-tool__media-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.media-tool__media-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:media-preloader-spin 2s infinite linear;box-sizing:border-box}.media-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.media-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.media-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.media-tool--empty .media-tool__media,.media-tool--empty .media-tool__caption,.media-tool--loading .media-tool__caption{display:none}.media-tool .cdx-button{display:flex;align-items:center;justify-content:center}.media-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.media-tool--filled .cdx-button,.media-tool--filled .media-tool__media-preloader{display:none}.media-tool--loading .media-tool__media{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.media-tool--loading .media-tool__media-picture,.media-tool--loading .cdx-button{display:none}.media-tool--withBorder .media-tool__media{border:1px solid var(--border-color)}.media-tool--withBackground .media-tool__media{padding:15px;background:var(--bg-color)}.media-tool--withBackground .media-tool__media-picture{max-width:60%;margin:0 auto}.media-tool--stretched .media-tool__media-picture{width:100%}@keyframes media-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const N = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', q = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', V = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function O(k, n = null, e = {}) {
  const s = document.createElement(k);
  Array.isArray(n) ? s.classList.add(...n) : n && s.classList.add(n);
  for (const i in e)
    s[i] = e[i];
  return s;
}
const H = /* @__PURE__ */ new Set(["apng", "avif", "gif", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "png", "svg", "webp"]), U = /* @__PURE__ */ new Set(["m4a", "m4b", "mp4a", "mpga", "mp2", "mp2a", "mp3", "m2a", "m3a", "wav", "weba", "aac", "oga", "spx", "flac", "opus"]), x = /* @__PURE__ */ new Set(["mp4", "ogg", "ogv", "webm", "mov", "m4v", "mkv", "3gp", "avi", "mpeg"]), G = new RegExp(`https?:\\/\\/\\S+\\.(${[...H, ...U, ...x].join("|")})(\\?[a-z0-9=]*)?$`, "i");
function P(k) {
  const n = k.split(".").pop();
  if (H.has(n))
    return "IMG";
  if (U.has(n))
    return "AUDIO";
  if (x.has(n))
    return "VIDEO";
}
class j {
  /**
   * @param {object} ui - media tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {MediaConfig} ui.config - user config
   * @param {string} ui.status - status
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: n, config: e, onSelectFile: s, readOnly: i }) {
    this.api = n, this.config = e, this.status = "empty", this.onSelectFile = s, this.readOnly = i, this.nodes = {
      wrapper: O("div", [this.CSS.baseClass, this.CSS.wrapper]),
      mediaContainer: O("div", [this.CSS.mediaContainer]),
      fileButton: this.createFileButton(),
      mediaEl: void 0,
      mediaPreloader: O("div", this.CSS.mediaPreloader),
      caption: O("div", [this.CSS.input, this.CSS.caption], {
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
  render(n) {
    return !n.file || Object.keys(n.file).length === 0 ? this.toggleStatus(j.status.EMPTY) : this.toggleStatus(j.status.UPLOADING), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const n = O("div", [this.CSS.button]);
    return n.innerHTML = this.config.buttonContent || `${D} ${this.api.i18n.t("Select a media file")}`, n.addEventListener("click", () => {
      this.onSelectFile();
    }), n;
  }
  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(n) {
    this.nodes.mediaPreloader.style.backgroundImage = `url(${n})`, this.toggleStatus(j.status.UPLOADING);
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
  fillMedia(n, e = P(new URL(n).pathname) || "IMG") {
    const s = {
      src: n
    };
    let i = "load";
    (e === "VIDEO" || e === "AUDIO") && (s.muted = !0, s.playsinline = !0, s.controls = !0, e === "AUDIO" && (s.style = "width: 100%;"), i = "loadedmetadata"), this.nodes.mediaEl = O(e, this.CSS.mediaEl, s), this.nodes.mediaEl.addEventListener(i, () => {
      this.toggleStatus(j.status.FILLED), this.nodes.mediaPreloader && (this.nodes.mediaPreloader.style.backgroundImage = "");
    }), this.nodes.mediaContainer.appendChild(this.nodes.mediaEl);
  }
  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(n) {
    this.nodes.caption && (this.nodes.caption.innerHTML = n);
  }
  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(n) {
    this.status = n, console.debug(n, this);
    for (const e in j.status)
      Object.prototype.hasOwnProperty.call(j.status, e) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${j.status[e]}`, n === j.status[e]);
  }
  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(n, e) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${n}`, e);
  }
}
function $(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
var A = { exports: {} };
(function(k, n) {
  (function(e, s) {
    k.exports = s();
  })(window, function() {
    return function(e) {
      var s = {};
      function i(a) {
        if (s[a])
          return s[a].exports;
        var r = s[a] = { i: a, l: !1, exports: {} };
        return e[a].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = e, i.c = s, i.d = function(a, r, d) {
        i.o(a, r) || Object.defineProperty(a, r, { enumerable: !0, get: d });
      }, i.r = function(a) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
      }, i.t = function(a, r) {
        if (1 & r && (a = i(a)), 8 & r || 4 & r && typeof a == "object" && a && a.__esModule)
          return a;
        var d = /* @__PURE__ */ Object.create(null);
        if (i.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: a }), 2 & r && typeof a != "string")
          for (var v in a)
            i.d(d, v, (function(l) {
              return a[l];
            }).bind(null, v));
        return d;
      }, i.n = function(a) {
        var r = a && a.__esModule ? function() {
          return a.default;
        } : function() {
          return a;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(a, r) {
        return Object.prototype.hasOwnProperty.call(a, r);
      }, i.p = "", i(i.s = 3);
    }([function(e, s) {
      var i;
      i = function() {
        return this;
      }();
      try {
        i = i || new Function("return this")();
      } catch {
        typeof window == "object" && (i = window);
      }
      e.exports = i;
    }, function(e, s, i) {
      (function(a) {
        var r = i(2), d = setTimeout;
        function v() {
        }
        function l(o) {
          if (!(this instanceof l))
            throw new TypeError("Promises must be constructed via new");
          if (typeof o != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(o, this);
        }
        function f(o, c) {
          for (; o._state === 3; )
            o = o._value;
          o._state !== 0 ? (o._handled = !0, l._immediateFn(function() {
            var u = o._state === 1 ? c.onFulfilled : c.onRejected;
            if (u !== null) {
              var g;
              try {
                g = u(o._value);
              } catch (m) {
                return void y(c.promise, m);
              }
              h(c.promise, g);
            } else
              (o._state === 1 ? h : y)(c.promise, o._value);
          })) : o._deferreds.push(c);
        }
        function h(o, c) {
          try {
            if (c === o)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (c && (typeof c == "object" || typeof c == "function")) {
              var u = c.then;
              if (c instanceof l)
                return o._state = 3, o._value = c, void w(o);
              if (typeof u == "function")
                return void t((g = u, m = c, function() {
                  g.apply(m, arguments);
                }), o);
            }
            o._state = 1, o._value = c, w(o);
          } catch (p) {
            y(o, p);
          }
          var g, m;
        }
        function y(o, c) {
          o._state = 2, o._value = c, w(o);
        }
        function w(o) {
          o._state === 2 && o._deferreds.length === 0 && l._immediateFn(function() {
            o._handled || l._unhandledRejectionFn(o._value);
          });
          for (var c = 0, u = o._deferreds.length; c < u; c++)
            f(o, o._deferreds[c]);
          o._deferreds = null;
        }
        function b(o, c, u) {
          this.onFulfilled = typeof o == "function" ? o : null, this.onRejected = typeof c == "function" ? c : null, this.promise = u;
        }
        function t(o, c) {
          var u = !1;
          try {
            o(function(g) {
              u || (u = !0, h(c, g));
            }, function(g) {
              u || (u = !0, y(c, g));
            });
          } catch (g) {
            if (u)
              return;
            u = !0, y(c, g);
          }
        }
        l.prototype.catch = function(o) {
          return this.then(null, o);
        }, l.prototype.then = function(o, c) {
          var u = new this.constructor(v);
          return f(this, new b(o, c, u)), u;
        }, l.prototype.finally = r.a, l.all = function(o) {
          return new l(function(c, u) {
            if (!o || o.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(o);
            if (g.length === 0)
              return c([]);
            var m = g.length;
            function p(C, M) {
              try {
                if (M && (typeof M == "object" || typeof M == "function")) {
                  var T = M.then;
                  if (typeof T == "function")
                    return void T.call(M, function(_) {
                      p(C, _);
                    }, u);
                }
                g[C] = M, --m == 0 && c(g);
              } catch (_) {
                u(_);
              }
            }
            for (var E = 0; E < g.length; E++)
              p(E, g[E]);
          });
        }, l.resolve = function(o) {
          return o && typeof o == "object" && o.constructor === l ? o : new l(function(c) {
            c(o);
          });
        }, l.reject = function(o) {
          return new l(function(c, u) {
            u(o);
          });
        }, l.race = function(o) {
          return new l(function(c, u) {
            for (var g = 0, m = o.length; g < m; g++)
              o[g].then(c, u);
          });
        }, l._immediateFn = typeof a == "function" && function(o) {
          a(o);
        } || function(o) {
          d(o, 0);
        }, l._unhandledRejectionFn = function(o) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", o);
        }, s.a = l;
      }).call(this, i(5).setImmediate);
    }, function(e, s, i) {
      s.a = function(a) {
        var r = this.constructor;
        return this.then(function(d) {
          return r.resolve(a()).then(function() {
            return d;
          });
        }, function(d) {
          return r.resolve(a()).then(function() {
            return r.reject(d);
          });
        });
      };
    }, function(e, s, i) {
      function a(t) {
        return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
          return typeof o;
        } : function(o) {
          return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        })(t);
      }
      i(4);
      var r, d, v, l, f, h, y, w = i(8), b = (d = function(t) {
        return new Promise(function(o, c) {
          t = l(t), (t = f(t)).beforeSend && t.beforeSend();
          var u = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          u.open(t.method, t.url), u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var p = t.headers[m];
            u.setRequestHeader(m, p);
          });
          var g = t.ratio;
          u.upload.addEventListener("progress", function(m) {
            var p = Math.round(m.loaded / m.total * 100), E = Math.ceil(p * g / 100);
            t.progress(Math.min(E, 100));
          }, !1), u.addEventListener("progress", function(m) {
            var p = Math.round(m.loaded / m.total * 100), E = Math.ceil(p * (100 - g) / 100) + g;
            t.progress(Math.min(E, 100));
          }, !1), u.onreadystatechange = function() {
            if (u.readyState === 4) {
              var m = u.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var p = w.parseHeaders(u.getAllResponseHeaders()), E = { body: m, code: u.status, headers: p };
              y(u.status) ? o(E) : c(E);
            }
          }, u.send(t.data);
        });
      }, v = function(t) {
        return t.method = "POST", d(t);
      }, l = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && a(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(r).includes(t.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(o) {
        }, t.beforeSend = t.beforeSend || function(o) {
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
            var o = h(t.data, r.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + o : t.url + "?" + o;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var c = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || r.JSON;
            }(t);
            (w.isFormData(t.data) || w.isFormElement(t.data)) && (c = r.FORM), t.data = h(t.data, c), c !== b.contentType.FORM && (t.headers["content-type"] = c);
        }
        return t;
      }, h = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case r.URLENCODED:
            return w.urlEncode(t);
          case r.JSON:
            return w.jsonEncode(t);
          case r.FORM:
            return w.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: r = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(t) {
        return t.method = "GET", d(t);
      }, post: v, transport: function(t) {
        return t = l(t), w.selectFiles(t).then(function(o) {
          for (var c = new FormData(), u = 0; u < o.length; u++)
            c.append(t.fieldName, o[u], o[u].name);
          w.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var p = t.data[m];
            c.append(m, p);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(o);
          }, t.data = c, v(t);
        });
      }, selectFiles: function(t) {
        return delete (t = l(t)).beforeSend, w.selectFiles(t);
      } });
      e.exports = b;
    }, function(e, s, i) {
      i.r(s);
      var a = i(1);
      window.Promise = window.Promise || a.a;
    }, function(e, s, i) {
      (function(a) {
        var r = a !== void 0 && a || typeof self < "u" && self || window, d = Function.prototype.apply;
        function v(l, f) {
          this._id = l, this._clearFn = f;
        }
        s.setTimeout = function() {
          return new v(d.call(setTimeout, r, arguments), clearTimeout);
        }, s.setInterval = function() {
          return new v(d.call(setInterval, r, arguments), clearInterval);
        }, s.clearTimeout = s.clearInterval = function(l) {
          l && l.close();
        }, v.prototype.unref = v.prototype.ref = function() {
        }, v.prototype.close = function() {
          this._clearFn.call(r, this._id);
        }, s.enroll = function(l, f) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = f;
        }, s.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, s._unrefActive = s.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var f = l._idleTimeout;
          f >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, f));
        }, i(6), s.setImmediate = typeof self < "u" && self.setImmediate || a !== void 0 && a.setImmediate || this && this.setImmediate, s.clearImmediate = typeof self < "u" && self.clearImmediate || a !== void 0 && a.clearImmediate || this && this.clearImmediate;
      }).call(this, i(0));
    }, function(e, s, i) {
      (function(a, r) {
        (function(d, v) {
          if (!d.setImmediate) {
            var l, f, h, y, w, b = 1, t = {}, o = !1, c = d.document, u = Object.getPrototypeOf && Object.getPrototypeOf(d);
            u = u && u.setTimeout ? u : d, {}.toString.call(d.process) === "[object process]" ? l = function(p) {
              r.nextTick(function() {
                m(p);
              });
            } : function() {
              if (d.postMessage && !d.importScripts) {
                var p = !0, E = d.onmessage;
                return d.onmessage = function() {
                  p = !1;
                }, d.postMessage("", "*"), d.onmessage = E, p;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", w = function(p) {
              p.source === d && typeof p.data == "string" && p.data.indexOf(y) === 0 && m(+p.data.slice(y.length));
            }, d.addEventListener ? d.addEventListener("message", w, !1) : d.attachEvent("onmessage", w), l = function(p) {
              d.postMessage(y + p, "*");
            }) : d.MessageChannel ? ((h = new MessageChannel()).port1.onmessage = function(p) {
              m(p.data);
            }, l = function(p) {
              h.port2.postMessage(p);
            }) : c && "onreadystatechange" in c.createElement("script") ? (f = c.documentElement, l = function(p) {
              var E = c.createElement("script");
              E.onreadystatechange = function() {
                m(p), E.onreadystatechange = null, f.removeChild(E), E = null;
              }, f.appendChild(E);
            }) : l = function(p) {
              setTimeout(m, 0, p);
            }, u.setImmediate = function(p) {
              typeof p != "function" && (p = new Function("" + p));
              for (var E = new Array(arguments.length - 1), C = 0; C < E.length; C++)
                E[C] = arguments[C + 1];
              var M = { callback: p, args: E };
              return t[b] = M, l(b), b++;
            }, u.clearImmediate = g;
          }
          function g(p) {
            delete t[p];
          }
          function m(p) {
            if (o)
              setTimeout(m, 0, p);
            else {
              var E = t[p];
              if (E) {
                o = !0;
                try {
                  (function(C) {
                    var M = C.callback, T = C.args;
                    switch (T.length) {
                      case 0:
                        M();
                        break;
                      case 1:
                        M(T[0]);
                        break;
                      case 2:
                        M(T[0], T[1]);
                        break;
                      case 3:
                        M(T[0], T[1], T[2]);
                        break;
                      default:
                        M.apply(v, T);
                    }
                  })(E);
                } finally {
                  g(p), o = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? a === void 0 ? this : a : self);
      }).call(this, i(0), i(7));
    }, function(e, s) {
      var i, a, r = e.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function v() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(u) {
        if (i === setTimeout)
          return setTimeout(u, 0);
        if ((i === d || !i) && setTimeout)
          return i = setTimeout, setTimeout(u, 0);
        try {
          return i(u, 0);
        } catch {
          try {
            return i.call(null, u, 0);
          } catch {
            return i.call(this, u, 0);
          }
        }
      }
      (function() {
        try {
          i = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          i = d;
        }
        try {
          a = typeof clearTimeout == "function" ? clearTimeout : v;
        } catch {
          a = v;
        }
      })();
      var f, h = [], y = !1, w = -1;
      function b() {
        y && f && (y = !1, f.length ? h = f.concat(h) : w = -1, h.length && t());
      }
      function t() {
        if (!y) {
          var u = l(b);
          y = !0;
          for (var g = h.length; g; ) {
            for (f = h, h = []; ++w < g; )
              f && f[w].run();
            w = -1, g = h.length;
          }
          f = null, y = !1, function(m) {
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
          }(u);
        }
      }
      function o(u, g) {
        this.fun = u, this.array = g;
      }
      function c() {
      }
      r.nextTick = function(u) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var m = 1; m < arguments.length; m++)
            g[m - 1] = arguments[m];
        h.push(new o(u, g)), h.length !== 1 || y || l(t);
      }, o.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = c, r.addListener = c, r.once = c, r.off = c, r.removeListener = c, r.removeAllListeners = c, r.emit = c, r.prependListener = c, r.prependOnceListener = c, r.listeners = function(u) {
        return [];
      }, r.binding = function(u) {
        throw new Error("process.binding is not supported");
      }, r.cwd = function() {
        return "/";
      }, r.chdir = function(u) {
        throw new Error("process.chdir is not supported");
      }, r.umask = function() {
        return 0;
      };
    }, function(e, s, i) {
      function a(d, v) {
        for (var l = 0; l < v.length; l++) {
          var f = v[l];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(d, f.key, f);
        }
      }
      var r = i(9);
      e.exports = function() {
        function d() {
          (function(h, y) {
            if (!(h instanceof y))
              throw new TypeError("Cannot call a class as a function");
          })(this, d);
        }
        var v, l, f;
        return v = d, f = [{ key: "urlEncode", value: function(h) {
          return r(h);
        } }, { key: "jsonEncode", value: function(h) {
          return JSON.stringify(h);
        } }, { key: "formEncode", value: function(h) {
          if (this.isFormData(h))
            return h;
          if (this.isFormElement(h))
            return new FormData(h);
          if (this.isObject(h)) {
            var y = new FormData();
            return Object.keys(h).forEach(function(w) {
              var b = h[w];
              y.append(w, b);
            }), y;
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
          return new Promise(function(y, w) {
            var b = document.createElement("INPUT");
            b.type = "file", h.multiple && b.setAttribute("multiple", "multiple"), h.accept && b.setAttribute("accept", h.accept), b.style.display = "none", document.body.appendChild(b), b.addEventListener("change", function(t) {
              var o = t.target.files;
              y(o), document.body.removeChild(b);
            }, !1), b.click();
          });
        } }, { key: "parseHeaders", value: function(h) {
          var y = h.trim().split(/[\r\n]+/), w = {};
          return y.forEach(function(b) {
            var t = b.split(": "), o = t.shift(), c = t.join(": ");
            o && (w[o] = c);
          }), w;
        } }], (l = null) && a(v.prototype, l), f && a(v, f), d;
      }();
    }, function(e, s) {
      var i = function(r) {
        return encodeURIComponent(r).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, a = function(r, d, v, l) {
        return d = d || null, v = v || "&", l = l || null, r ? function(f) {
          for (var h = new Array(), y = 0; y < f.length; y++)
            f[y] && h.push(f[y]);
          return h;
        }(Object.keys(r).map(function(f) {
          var h, y, w = f;
          if (l && (w = l + "[" + w + "]"), typeof r[f] == "object" && r[f] !== null)
            h = a(r[f], null, v, w);
          else {
            d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
            var b = r[f];
            b = (b = (b = (b = b === !0 ? "1" : b) === !1 ? "0" : b) === 0 ? "0" : b) || "", h = i(w) + "=" + i(b);
          }
          return h;
        })).join(v).replace(/[!'()*]/g, "") : "";
      };
      e.exports = a;
    }]);
  });
})(A);
var X = A.exports;
const S = /* @__PURE__ */ $(X), J = 0.85, W = 50, Y = "image/webp", K = "image/jpeg";
function R(k, n) {
  return k.toDataURL(n, J);
}
function B(k, n) {
  const e = document.createElement("canvas"), s = e.getContext("2d"), i = document.createElement("canvas"), a = i.getContext("2d"), r = Math.min(n.width, n.height), d = W / r, v = n.width * d;
  e.width = v, e.height = v;
  let l = Math.floor(n.width * 0.5);
  if (i.width = l, i.height = l, a.drawImage(k, Math.max(0, (n.width - r) / 2), Math.max(0, (n.height - r) / 2), r, r, 0, 0, l, l), !a.getImageData(0, 0, e.width, e.height).data.every((f) => f === 0)) {
    for (; l * 0.5 > v; )
      l = Math.floor(l * 0.5), a.drawImage(i, 0, 0, l * 2, l * 2, 0, 0, l, l);
    return s.drawImage(i, 0, 0, l, l, 0, 0, e.width, e.height), R(e, Y) || R(e, K) || void 0;
  }
}
const Q = 5;
function Z(k) {
  return new Promise((n) => {
    const e = URL.createObjectURL(k), s = document.createElement("video");
    s.oncanplay = () => {
      s.onseeked = () => {
        n(B(s, { width: s.videoWidth, height: s.videoHeight })), s.remove(), URL.revokeObjectURL(e);
      }, s.currentTime = Math.min(s.duration / 2, Q);
    }, s.src = e;
  });
}
function z(k) {
  return new Promise((n) => {
    const e = URL.createObjectURL(k), s = document.createElement("img");
    s.onload = () => {
      n(B(s, { width: s.naturalWidth, height: s.naturalHeight })), s.remove(), URL.revokeObjectURL(e);
    }, s.src = e;
  });
}
async function F(k, n) {
  switch (n) {
    case "VIDEO":
      return await Z(k);
    case "IMG":
      return await z(k);
  }
  return "";
}
function L(k) {
  return k.type ? k.type.split("/")[0].toUpperCase() : P(k.name);
}
class tt {
  /**
   * @param {object} params - uploader module params
   * @param {MediaConfig} params.config - media tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: n, onUpload: e, onError: s }) {
    this.config = n, this.onUpload = e, this.onError = s;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  async uploadSelectedFile({ onPreview: n }) {
    try {
      let e, s;
      if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
        const a = (await S.selectFiles({ accept: this.config.types }))[0];
        s = L(a), F(a, s).then((r) => {
          e || n(r);
        }), e = await this.config.uploader.uploadByFile(a);
      } else
        e = await S.transport({
          url: this.config.endpoints.byFile,
          data: this.config.additionalRequestData,
          accept: this.config.types,
          headers: this.config.additionalRequestHeaders,
          beforeSend: (i) => {
            preparePreview(i[0]);
            const a = i[0];
            s = L(a), F(a, s).then(n);
          },
          fieldName: this.config.field
        }).then((i) => i.body);
      e.file.tag || (e.file.tag = s), this.onUpload(e);
    } catch (e) {
      this.onError(e);
    }
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - media source url
   */
  async uploadByUrl(n) {
    try {
      let e;
      this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? e = await this.config.uploader.uploadByUrl(n) : e = await S.post({
        url: this.config.endpoints.byUrl,
        data: Object.assign({
          url: n
        }, this.config.additionalRequestData),
        type: S.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((s) => s.body), e.file.tag || (e.file.tag = P(n)), this.onUpload(e);
    } catch (e) {
      this.onError(e);
    }
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  async uploadByFile(n, { onPreview: e }) {
    const s = L(n);
    try {
      let i;
      if (F(n, s).then((a) => {
        i || e(a);
      }), this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
        i = await this.config.uploader.uploadByFile(n);
      else {
        const a = new FormData();
        a.append(this.config.field, n), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([r, d]) => {
          a.append(r, d);
        }), i = S.post({
          url: this.config.endpoints.byFile,
          data: a,
          type: S.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((r) => r.body);
      }
      i.file.tag || (i.file.tag = s), this.onUpload(i);
    } catch (i) {
      this.onError(i);
    }
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
class I {
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
      icon: D,
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
        icon: V,
        title: "Stretch media",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: N,
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
  constructor({ data: n, config: e, api: s, readOnly: i, block: a }) {
    this.api = s, this.readOnly = i, this.block = a, this.config = {
      endpoints: e.endpoints || "",
      additionalRequestData: e.additionalRequestData || {},
      additionalRequestHeaders: e.additionalRequestHeaders || {},
      field: e.field || "media",
      types: e.types || "image/*,audio/*,video/*",
      captionPlaceholder: this.api.i18n.t(e.captionPlaceholder || "Caption"),
      buttonContent: e.buttonContent || "",
      uploader: e.uploader || void 0,
      actions: e.actions || []
    }, this.uploader = new tt({
      config: this.config,
      onUpload: (r) => this.onUpload(r),
      onError: (r) => this.uploadingFailed(r)
    }), this.ui = new j({
      api: s,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (r) => {
            this.ui.showPreloader(r);
          }
        });
      },
      readOnly: i
    }), this._data = {}, this.data = n;
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
  validate(n) {
    return n.file && n.file.url;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {MediaToolData}
   */
  save() {
    const n = this.ui.nodes.caption;
    return this._data.caption = n.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch media
   *
   * @public
   *
   * @returns {Array}
   */
  renderSettings() {
    return I.tunes.concat(this.config.actions).map((e) => ({
      icon: e.icon,
      label: this.api.i18n.t(e.title),
      name: e.name,
      toggle: e.toggle,
      isActive: this.data[e.name],
      onActivate: () => {
        if (typeof e.action == "function") {
          e.action(e.name);
          return;
        }
        this.tuneToggled(e.name);
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
  async onPaste(n) {
    switch (n.type) {
      case "tag": {
        const e = n.detail.data;
        if (/^blob:/.test(e.src)) {
          const i = await (await fetch(e.src)).blob();
          this.uploadFile(i);
          break;
        }
        this.uploadUrl(e.src);
        break;
      }
      case "pattern": {
        const e = n.detail.data;
        this.uploadUrl(e);
        break;
      }
      case "file": {
        const e = n.detail.file;
        this.uploadFile(e);
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
  set data(n) {
    this.media = n.file, this._data.caption = n.caption || "", this.ui.fillCaption(this._data.caption), I.tunes.forEach(({ name: e }) => {
      const s = typeof n[e] < "u" ? n[e] === !0 || n[e] === "true" : !1;
      this.setTune(e, s);
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
  set media(n) {
    this._data.file = n || {}, n && n.url && this.ui.fillMedia(n.url, n.tag);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(n) {
    n.success && n.file ? this.media = n.file : this.uploadingFailed("incorrect response: " + JSON.stringify(n));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(n) {
    console.log("Media Tool: uploading failed because of", n), this.api.notifier.show({
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
  tuneToggled(n) {
    this.setTune(n, !this._data[n]);
  }
  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(n, e) {
    this._data[n] = e, this.ui.applyTune(n, e), n === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = e;
    }).catch((s) => {
      console.error(s);
    });
  }
  /**
   * Show preloader and upload media file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(n) {
    this.uploader.uploadByFile(n, {
      onPreview: (e) => {
        this.ui.showPreloader(e);
      }
    });
  }
  /**
   * Show preloader and upload media by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(n) {
    this.ui.showPreloader(n), this.uploader.uploadByUrl(n);
  }
}
export {
  I as default
};
