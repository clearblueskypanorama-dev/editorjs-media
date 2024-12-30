(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.media-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.media-tool__media{border-radius:3px;overflow:hidden;margin-bottom:10px}.media-tool__media-picture{max-width:100%;vertical-align:bottom;display:block}.media-tool__media-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.media-tool__media-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:media-preloader-spin 2s infinite linear;box-sizing:border-box}.media-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.media-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.media-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.media-tool--empty .media-tool__media,.media-tool--empty .media-tool__caption,.media-tool--loading .media-tool__caption{display:none}.media-tool .cdx-button{display:flex;align-items:center;justify-content:center}.media-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.media-tool--filled .cdx-button,.media-tool--filled .media-tool__media-preloader{display:none}.media-tool--loading .media-tool__media{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.media-tool--loading .media-tool__media-picture,.media-tool--loading .cdx-button{display:none}.media-tool--withBorder .media-tool__media{border:1px solid var(--border-color)}.media-tool--withBackground .media-tool__media{padding:15px;background:var(--bg-color)}.media-tool--withBackground .media-tool__media-picture{max-width:60%;margin:0 auto}.media-tool--stretched .media-tool__media-picture{width:100%}@keyframes media-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const q = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', W = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', $ = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', G = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function L(k, e = null, n = {}) {
  const i = document.createElement(k);
  Array.isArray(e) ? i.classList.add(...e) : e && i.classList.add(e);
  for (const s in n)
    i[s] = n[s];
  return i;
}
const A = /* @__PURE__ */ new Set(["apng", "avif", "gif", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "png", "svg", "webp"]), H = /* @__PURE__ */ new Set(["m4a", "m4b", "mp4a", "mpga", "mp2", "mp2a", "mp3", "m2a", "m3a", "wav", "weba", "aac", "oga", "spx", "flac", "opus"]), B = /* @__PURE__ */ new Set(["mp4", "ogg", "ogv", "webm", "mov", "m4v", "mkv", "3gp", "avi", "mpeg"]), X = new RegExp(`https?:\\/\\/\\S+\\.(${[...A, ...H, ...B].join("|")})(\\?[a-z0-9=]*)?$`, "i");
function D(k) {
  const e = k.split(".").pop();
  if (A.has(e))
    return "IMG";
  if (H.has(e))
    return "AUDIO";
  if (B.has(e))
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
  constructor({ api: e, config: n, onSelectFile: i, readOnly: s }) {
    this.api = e, this.config = n, this.onSelectFile = i, this.readOnly = s, this.nodes = {
      wrapper: L("div", [this.CSS.baseClass, this.CSS.wrapper]),
      mediaContainer: L("a", [this.CSS.mediaContainer]),
      fileButton: this.createFileButton(),
      mediaEl: void 0,
      mediaPreloader: L("div", this.CSS.mediaPreloader)
    }, this.nodes.mediaContainer.appendChild(this.nodes.mediaPreloader), this.nodes.wrapper.appendChild(this.nodes.mediaContainer), this.nodes.wrapper.appendChild(this.nodes.fileButton);
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
    return !e.file || Object.keys(e.file).length === 0 ? this.toggleStatus(j.status.EMPTY) : this.toggleStatus(j.status.UPLOADING), e.link && (this.nodes.mediaContainer.href = e.link), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const e = L("div", [this.CSS.button]);
    return e.innerHTML = this.config.buttonContent || `${U} ${this.api.i18n.t("Select a media file")}`, e.addEventListener("click", () => {
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
  fillMedia(e, n = D(new URL(e).pathname)) {
    const i = {
      src: e
    };
    let s = "load";
    (n === "VIDEO" || n === "AUDIO") && (i.muted = !0, i.playsinline = !0, i.controls = !0, n === "AUDIO" && (i.style = "width: 100%;"), s = "loadedmetadata"), this.nodes.mediaEl = L(n, this.CSS.mediaEl, i), this.nodes.mediaEl.addEventListener(s, () => {
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
    for (const n in j.status)
      Object.prototype.hasOwnProperty.call(j.status, n) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${j.status[n]}`, e === j.status[n]);
  }
  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(e, n) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${e}`, n);
  }
}
function J(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
var N = { exports: {} };
(function(k, e) {
  (function(n, i) {
    k.exports = i();
  })(window, function() {
    return function(n) {
      var i = {};
      function s(a) {
        if (i[a])
          return i[a].exports;
        var r = i[a] = { i: a, l: !1, exports: {} };
        return n[a].call(r.exports, r, r.exports, s), r.l = !0, r.exports;
      }
      return s.m = n, s.c = i, s.d = function(a, r, d) {
        s.o(a, r) || Object.defineProperty(a, r, { enumerable: !0, get: d });
      }, s.r = function(a) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
      }, s.t = function(a, r) {
        if (1 & r && (a = s(a)), 8 & r || 4 & r && typeof a == "object" && a && a.__esModule)
          return a;
        var d = /* @__PURE__ */ Object.create(null);
        if (s.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: a }), 2 & r && typeof a != "string")
          for (var v in a)
            s.d(d, v, (function(l) {
              return a[l];
            }).bind(null, v));
        return d;
      }, s.n = function(a) {
        var r = a && a.__esModule ? function() {
          return a.default;
        } : function() {
          return a;
        };
        return s.d(r, "a", r), r;
      }, s.o = function(a, r) {
        return Object.prototype.hasOwnProperty.call(a, r);
      }, s.p = "", s(s.s = 3);
    }([function(n, i) {
      var s;
      s = function() {
        return this;
      }();
      try {
        s = s || new Function("return this")();
      } catch {
        typeof window == "object" && (s = window);
      }
      n.exports = s;
    }, function(n, i, s) {
      (function(a) {
        var r = s(2), d = setTimeout;
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
                return void w(c.promise, m);
              }
              h(c.promise, g);
            } else
              (o._state === 1 ? h : w)(c.promise, o._value);
          })) : o._deferreds.push(c);
        }
        function h(o, c) {
          try {
            if (c === o)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (c && (typeof c == "object" || typeof c == "function")) {
              var u = c.then;
              if (c instanceof l)
                return o._state = 3, o._value = c, void y(o);
              if (typeof u == "function")
                return void t((g = u, m = c, function() {
                  g.apply(m, arguments);
                }), o);
            }
            o._state = 1, o._value = c, y(o);
          } catch (p) {
            w(o, p);
          }
          var g, m;
        }
        function w(o, c) {
          o._state = 2, o._value = c, y(o);
        }
        function y(o) {
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
              u || (u = !0, w(c, g));
            });
          } catch (g) {
            if (u)
              return;
            u = !0, w(c, g);
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
            function p(M, C) {
              try {
                if (C && (typeof C == "object" || typeof C == "function")) {
                  var T = C.then;
                  if (typeof T == "function")
                    return void T.call(C, function(I) {
                      p(M, I);
                    }, u);
                }
                g[M] = C, --m == 0 && c(g);
              } catch (I) {
                u(I);
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
        }, i.a = l;
      }).call(this, s(5).setImmediate);
    }, function(n, i, s) {
      i.a = function(a) {
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
    }, function(n, i, s) {
      function a(t) {
        return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
          return typeof o;
        } : function(o) {
          return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        })(t);
      }
      s(4);
      var r, d, v, l, f, h, w, y = s(8), b = (d = function(t) {
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
              var p = y.parseHeaders(u.getAllResponseHeaders()), E = { body: m, code: u.status, headers: p };
              w(u.status) ? o(E) : c(E);
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
            (y.isFormData(t.data) || y.isFormElement(t.data)) && (c = r.FORM), t.data = h(t.data, c), c !== b.contentType.FORM && (t.headers["content-type"] = c);
        }
        return t;
      }, h = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case r.URLENCODED:
            return y.urlEncode(t);
          case r.JSON:
            return y.jsonEncode(t);
          case r.FORM:
            return y.formEncode(t);
          default:
            return t;
        }
      }, w = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: r = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(t) {
        return t.method = "GET", d(t);
      }, post: v, transport: function(t) {
        return t = l(t), y.selectFiles(t).then(function(o) {
          for (var c = new FormData(), u = 0; u < o.length; u++)
            c.append(t.fieldName, o[u], o[u].name);
          y.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var p = t.data[m];
            c.append(m, p);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(o);
          }, t.data = c, v(t);
        });
      }, selectFiles: function(t) {
        return delete (t = l(t)).beforeSend, y.selectFiles(t);
      } });
      n.exports = b;
    }, function(n, i, s) {
      s.r(i);
      var a = s(1);
      window.Promise = window.Promise || a.a;
    }, function(n, i, s) {
      (function(a) {
        var r = a !== void 0 && a || typeof self < "u" && self || window, d = Function.prototype.apply;
        function v(l, f) {
          this._id = l, this._clearFn = f;
        }
        i.setTimeout = function() {
          return new v(d.call(setTimeout, r, arguments), clearTimeout);
        }, i.setInterval = function() {
          return new v(d.call(setInterval, r, arguments), clearInterval);
        }, i.clearTimeout = i.clearInterval = function(l) {
          l && l.close();
        }, v.prototype.unref = v.prototype.ref = function() {
        }, v.prototype.close = function() {
          this._clearFn.call(r, this._id);
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
    }, function(n, i, s) {
      (function(a, r) {
        (function(d, v) {
          if (!d.setImmediate) {
            var l, f, h, w, y, b = 1, t = {}, o = !1, c = d.document, u = Object.getPrototypeOf && Object.getPrototypeOf(d);
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
            }() ? (w = "setImmediate$" + Math.random() + "$", y = function(p) {
              p.source === d && typeof p.data == "string" && p.data.indexOf(w) === 0 && m(+p.data.slice(w.length));
            }, d.addEventListener ? d.addEventListener("message", y, !1) : d.attachEvent("onmessage", y), l = function(p) {
              d.postMessage(w + p, "*");
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
              for (var E = new Array(arguments.length - 1), M = 0; M < E.length; M++)
                E[M] = arguments[M + 1];
              var C = { callback: p, args: E };
              return t[b] = C, l(b), b++;
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
                  g(p), o = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? a === void 0 ? this : a : self);
      }).call(this, s(0), s(7));
    }, function(n, i) {
      var s, a, r = n.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function v() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(u) {
        if (s === setTimeout)
          return setTimeout(u, 0);
        if ((s === d || !s) && setTimeout)
          return s = setTimeout, setTimeout(u, 0);
        try {
          return s(u, 0);
        } catch {
          try {
            return s.call(null, u, 0);
          } catch {
            return s.call(this, u, 0);
          }
        }
      }
      (function() {
        try {
          s = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          s = d;
        }
        try {
          a = typeof clearTimeout == "function" ? clearTimeout : v;
        } catch {
          a = v;
        }
      })();
      var f, h = [], w = !1, y = -1;
      function b() {
        w && f && (w = !1, f.length ? h = f.concat(h) : y = -1, h.length && t());
      }
      function t() {
        if (!w) {
          var u = l(b);
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
        h.push(new o(u, g)), h.length !== 1 || w || l(t);
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
    }, function(n, i, s) {
      function a(d, v) {
        for (var l = 0; l < v.length; l++) {
          var f = v[l];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(d, f.key, f);
        }
      }
      var r = s(9);
      n.exports = function() {
        function d() {
          (function(h, w) {
            if (!(h instanceof w))
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
            var w = new FormData();
            return Object.keys(h).forEach(function(y) {
              var b = h[y];
              w.append(y, b);
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
            var b = document.createElement("INPUT");
            b.type = "file", h.multiple && b.setAttribute("multiple", "multiple"), h.accept && b.setAttribute("accept", h.accept), b.style.display = "none", document.body.appendChild(b), b.addEventListener("change", function(t) {
              var o = t.target.files;
              w(o), document.body.removeChild(b);
            }, !1), b.click();
          });
        } }, { key: "parseHeaders", value: function(h) {
          var w = h.trim().split(/[\r\n]+/), y = {};
          return w.forEach(function(b) {
            var t = b.split(": "), o = t.shift(), c = t.join(": ");
            o && (y[o] = c);
          }), y;
        } }], (l = null) && a(v.prototype, l), f && a(v, f), d;
      }();
    }, function(n, i) {
      var s = function(r) {
        return encodeURIComponent(r).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, a = function(r, d, v, l) {
        return d = d || null, v = v || "&", l = l || null, r ? function(f) {
          for (var h = new Array(), w = 0; w < f.length; w++)
            f[w] && h.push(f[w]);
          return h;
        }(Object.keys(r).map(function(f) {
          var h, w, y = f;
          if (l && (y = l + "[" + y + "]"), typeof r[f] == "object" && r[f] !== null)
            h = a(r[f], null, v, y);
          else {
            d && (w = y, y = !isNaN(parseFloat(w)) && isFinite(w) ? d + Number(y) : y);
            var b = r[f];
            b = (b = (b = (b = b === !0 ? "1" : b) === !1 ? "0" : b) === 0 ? "0" : b) || "", h = s(y) + "=" + s(b);
          }
          return h;
        })).join(v).replace(/[!'()*]/g, "") : "";
      };
      n.exports = a;
    }]);
  });
})(N);
var Y = N.exports;
const O = /* @__PURE__ */ J(Y), K = 0.85, Q = 50, Z = "image/webp", z = "image/jpeg";
function x(k, e) {
  return k.toDataURL(e, K);
}
function V(k, e) {
  const n = document.createElement("canvas"), i = n.getContext("2d"), s = document.createElement("canvas"), a = s.getContext("2d"), r = Math.min(e.width, e.height), d = Q / r, v = e.width * d;
  n.width = v, n.height = v;
  let l = Math.floor(e.width * 0.5);
  if (s.width = l, s.height = l, a.drawImage(k, Math.max(0, (e.width - r) / 2), Math.max(0, (e.height - r) / 2), r, r, 0, 0, l, l), !a.getImageData(0, 0, n.width, n.height).data.every((f) => f === 0)) {
    for (; l * 0.5 > v; )
      l = Math.floor(l * 0.5), a.drawImage(s, 0, 0, l * 2, l * 2, 0, 0, l, l);
    return i.drawImage(s, 0, 0, l, l, 0, 0, n.width, n.height), x(n, Z) || x(n, z) || void 0;
  }
}
const tt = 5;
function et(k) {
  return new Promise((e) => {
    const n = URL.createObjectURL(k), i = document.createElement("video");
    i.oncanplay = () => {
      i.onseeked = () => {
        e(V(i, { width: i.videoWidth, height: i.videoHeight })), i.remove(), URL.revokeObjectURL(n);
      }, i.currentTime = Math.min(i.duration / 2, tt);
    }, i.src = n;
  });
}
function nt(k) {
  return new Promise((e) => {
    const n = URL.createObjectURL(k), i = document.createElement("img");
    i.onload = () => {
      e(V(i, { width: i.naturalWidth, height: i.naturalHeight })), i.remove(), URL.revokeObjectURL(n);
    }, i.src = n;
  });
}
async function S(k, e) {
  switch (e) {
    case "VIDEO":
      return await et(k);
    case "IMG":
      return await nt(k);
  }
  return "";
}
function F(k) {
  return k.type ? { IMAGE: "IMG", VIDEO: "VIDEO", AUDIO: "AUDIO" }[k.type.split("/")[0].toUpperCase()] : D(k.name);
}
class rt {
  /**
   * @param {object} params - uploader module params
   * @param {MediaConfig} params.config - media tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: e, onUpload: n, onError: i }) {
    this.config = e, this.onUpload = n, this.onError = i;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  async uploadSelectedFile({ onPreview: e }) {
    try {
      let n, i;
      if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
        const a = (await O.selectFiles({ accept: this.config.types }))[0];
        i = F(a), S(a, i).then((r) => {
          n || e(r);
        }), n = await this.config.uploader.uploadByFile(a);
      } else
        n = await O.transport({
          url: this.config.endpoints.byFile,
          data: this.config.additionalRequestData,
          accept: this.config.types,
          headers: this.config.additionalRequestHeaders,
          beforeSend: (s) => {
            preparePreview(s[0]);
            const a = s[0];
            i = F(a), S(a, i).then(e);
          },
          fieldName: this.config.field
        }).then((s) => s.body);
      n.file.tag || (n.file.tag = i), this.onUpload(n);
    } catch (n) {
      this.onError(n);
    }
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - media source url
   */
  async uploadByUrl(e) {
    try {
      let n;
      this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? n = await this.config.uploader.uploadByUrl(e) : n = await O.post({
        url: this.config.endpoints.byUrl,
        data: Object.assign({
          url: e
        }, this.config.additionalRequestData),
        type: O.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((i) => i.body), n.file.tag || (n.file.tag = D(e)), this.onUpload(n);
    } catch (n) {
      this.onError(n);
    }
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  async uploadByFile(e, { onPreview: n }) {
    const i = F(e);
    try {
      let s;
      if (S(e, i).then((a) => {
        s || n(a);
      }), this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
        s = await this.config.uploader.uploadByFile(e);
      else {
        const a = new FormData();
        a.append(this.config.field, e), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([r, d]) => {
          a.append(r, d);
        }), s = await O.post({
          url: this.config.endpoints.byFile,
          data: a,
          type: O.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((r) => r.body);
      }
      s.file.tag || (s.file.tag = i), this.onUpload(s);
    } catch (s) {
      this.onError(s);
    }
  }
}
const P = "cdx-list", _ = {
  wrapper: `${P}-start-with-field`,
  input: `${P}-start-with-field__input`,
  startWithElementWrapperInvalid: `${P}-start-with-field--invalid`
};
function ot(k, { value: e, placeholder: n, attributes: i, sanitize: s }) {
  const a = L("div", _.wrapper), r = L("input", _.input, {
    placeholder: n,
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
  for (const d in i)
    r.setAttribute(d, i[d]);
  return a.appendChild(r), r.addEventListener("input", () => {
    s !== void 0 && (r.value = s(r.value));
    const d = r.checkValidity();
    !d && !a.classList.contains(_.startWithElementWrapperInvalid) && a.classList.add(_.startWithElementWrapperInvalid), d && a.classList.contains(_.startWithElementWrapperInvalid) && a.classList.remove(_.startWithElementWrapperInvalid), d && k(r.value);
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
class R {
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
      icon: U,
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
        icon: W,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: G,
        title: "Stretch media",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: q,
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
  constructor({ data: e, config: n, api: i, readOnly: s, block: a }) {
    this.api = i, this.readOnly = s, this.block = a, this.config = {
      endpoints: n.endpoints || "",
      additionalRequestData: n.additionalRequestData || {},
      additionalRequestHeaders: n.additionalRequestHeaders || {},
      field: n.field || "media",
      types: n.types || "image/*,audio/*,video/*",
      buttonContent: n.buttonContent || "",
      uploader: n.uploader || void 0,
      actions: n.actions || []
    }, this.uploader = new rt({
      config: this.config,
      onUpload: (r) => this.onUpload(r),
      onError: (r) => this.uploadingFailed(r)
    }), this.ui = new j({
      api: i,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (r) => {
            this.ui.showPreloader(r);
          }
        });
      },
      readOnly: s
    }), this._data = {}, this.data = e;
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
    const n = R.tunes.concat(this.config.actions).map((i) => ({
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
    return this._renderSettings.concat(n);
  }
  get _renderSettings() {
    return [
      // hyperlink
      {
        name: "link",
        icon: $,
        label: this.api.i18n.t("Link"),
        children: {
          items: [
            {
              element: ot(
                (e) => {
                  this._data.link = e, this.ui.nodes.mediaContainer.href = e;
                },
                {
                  value: this._data.link || "",
                  placeholder: this.api.i18n.t("Add a link"),
                  target: "_blank"
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
        media: X
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
        const n = e.detail.data;
        if (/^blob:/.test(n.src)) {
          const s = await (await fetch(n.src)).blob();
          this.uploadFile(s);
          break;
        }
        this.uploadUrl(n.src);
        break;
      }
      case "pattern": {
        this.ui.showPreloader();
        const n = e.detail.data;
        this.uploadUrl(n);
        break;
      }
      case "file": {
        this.ui.showPreloader();
        const n = e.detail.file;
        this.uploadFile(n);
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
    this.media = e.file, R.tunes.forEach(({ name: n }) => {
      const i = typeof e[n] < "u" ? e[n] === !0 || e[n] === "true" : !1;
      this.setTune(n, i);
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
  setTune(e, n) {
    this._data[e] = n, this.ui.applyTune(e, n), e === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = n;
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
      onPreview: (n) => {
        this.ui.showPreloader(n);
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
  R as default
};
