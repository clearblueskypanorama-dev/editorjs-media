import { IconPicture } from '@codexteam/icons';
import { make } from './utils/dom';
import { getFileType } from './utils/fileTypes';

/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
export default class Ui {
  /**
   * @param {object} ui - media tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {MediaConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api, config, onSelectFile, readOnly }) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.readOnly = readOnly;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      mediaContainer: make('div', [this.CSS.mediaContainer]),
      href: make('a', [], { target: "_blank" }),
      fileButton: this.createFileButton(),
      mediaEl: undefined,
      mediaPreloader: make('div', this.CSS.mediaPreloader),
    };

    /**
     * Create base structure
     *  <wrapper>
     *    <href>
     *      <media-container>
     *        <media-preloader />
     *      </media-container>
     *    <href />
     *    <select-file-button />
     *  </wrapper>
     */
    this.nodes.href.appendChild(this.nodes.mediaContainer);
    this.nodes.mediaContainer.appendChild(this.nodes.mediaPreloader);
    this.nodes.wrapper.appendChild(this.nodes.href);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);
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
      wrapper: 'media-tool',
      mediaContainer: 'media-tool__media',
      mediaPreloader: 'media-tool__media-preloader',
      mediaEl: 'media-tool__media-picture',
    };
  };

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
      EMPTY: 'empty',
      UPLOADING: 'loading',
      FILLED: 'filled',
    };
  }

  /**
   * Renders tool UI
   *
   * @param {MediaToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(toolData) {
    if (!toolData.file || Object.keys(toolData.file).length === 0) {
      this.toggleStatus(Ui.status.EMPTY);
    } else {
      this.toggleStatus(Ui.status.UPLOADING);
    }

    if (toolData.link) {
      this.nodes.href.href = toolData.link
    }

    return this.nodes.wrapper;
  }

  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const button = make('div', [this.CSS.button]);

    button.innerHTML = this.config.buttonContent || `${IconPicture} ${this.api.i18n.t('Select media file(s)')}`;

    button.addEventListener('click', () => {
      this.onSelectFile();
    });

    return button;
  }

  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(src = "") {
    this.nodes.mediaPreloader.style.backgroundImage = src ? `url(${src})` : "";
    this.toggleStatus(Ui.status.UPLOADING);
  }

  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.mediaPreloader.style.backgroundImage = '';
    this.toggleStatus(Ui.status.EMPTY);
  }

  /**
   * Shows a medium
   *
   * @param {string} url - medium source
   * @param {'VIDEO'|'AUDIO'|'IMG'|undefined} tag - medium source
   * @returns {void}
   */
  fillMedia(url, tag = getFileType((new URL(url)).pathname)) {
    const attributes = {
      src: url,
    };

    /**
     * We use eventName variable because IMG and VIDEO tags have different event to be called on source load
     * - IMG: load
     * - VIDEO: loadedmetadata
     *
     * @type {string}
     */
    let eventName = 'load';

    /**
     * Update attributes and eventName if source is a mp4 video
     */
    if (tag === 'VIDEO' || tag === 'AUDIO') {
      /**
       * Add attributes for playing muted mp4 as a gif
       *
       * @type {boolean}
       */
      attributes.muted = true;
      attributes.playsinline = true;
      attributes.controls = true;

      if (tag === 'AUDIO') {
        attributes.style = "width: 100%;"
      }

      /**
       * Change event to be listened
       *
       * @type {string}
       */
      eventName = 'loadedmetadata';
    }

    /**
     * Compose tag with defined attributes
     *
     * @type {Element}
     */
    this.nodes.mediaEl = make(tag, this.CSS.mediaEl, attributes);

    /**
     * Add load event listener
     */
    this.nodes.mediaEl.addEventListener(eventName, () => {
      this.toggleStatus(Ui.status.FILLED);

      /**
       * Preloader does not exists on first rendering with presaved data
       */
      if (this.nodes.mediaPreloader) {
        this.nodes.mediaPreloader.style.backgroundImage = '';
      }
    });

    this.nodes.mediaContainer.appendChild(this.nodes.mediaEl);
  }

  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(status) {
    for (const statusType in Ui.status) {
      if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${Ui.status[statusType]}`, status === Ui.status[statusType]);
      }
    }
  }

  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(tuneName, status) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${tuneName}`, status);
  }
}

