import ajax from '@codexteam/ajax';
import { getFileType } from './utils/fileTypes';
import { getPreview } from './utils/preview';

/**
 * @param {File} file
 * @returns {string}
 */
function getTag(file) {
  return file.type ? file.type.split("/")[0].toUpperCase() : getFileType(file.name)
}

/**
 * Module for file uploading. Handle 3 scenarios:
 *  1. Select file from device and upload
 *  2. Upload by pasting URL
 *  3. Upload by pasting file from Clipboard or by Drag'n'Drop
 */
export default class Uploader {
  /**
   * @param {object} params - uploader module params
   * @param {MediaConfig} params.config - media tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config, onUpload, onError }) {
    this.config = config;
    this.onUpload = onUpload;
    this.onError = onError;
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  async uploadSelectedFile({ onPreview }) {
    try {
      let result;

      // custom
      if (this.config.uploader && typeof this.config.uploader.uploadByFile === 'function') {
        const files = await ajax.selectFiles({ accept: this.config.types })
        const file = files[0]
        const tag = getTag(file)

        getPreview(file, tag).then(onPreview)

        result = await this.config.uploader.uploadByFile(file)
      }

      // default
      else {
        result = await ajax.transport({
          url: this.config.endpoints.byFile,
          data: this.config.additionalRequestData,
          accept: this.config.types,
          headers: this.config.additionalRequestHeaders,
          beforeSend: (files) => {
            preparePreview(files[0]);
            const file = files[0]
            const tag = getTag(file)
            getPreview(file, tag).then(onPreview)
          },
          fieldName: this.config.field,
        }).then((response) => response.body);
      }

      if (!result.file.tag) result.file.tag = tag;
      this.onUpload(result);
    } catch (error) {
      this.onError(error);
    }
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - media source url
   */
  async uploadByUrl(url) {

    try {
      let result;

      // custom
      if (this.config.uploader && typeof this.config.uploader.uploadByUrl === 'function') {
        result = await this.config.uploader.uploadByUrl(url)
      }

      // default
      else {
        result = await ajax.post({
          url: this.config.endpoints.byUrl,
          data: Object.assign({
            url: url,
          }, this.config.additionalRequestData),
          type: ajax.contentType.JSON,
          headers: this.config.additionalRequestHeaders,
        }).then(response => response.body);
      }

      if (!result.file.tag) result.file.tag = getFileType(url);
      this.onUpload(result);
    } catch (error) {
      this.onError(error);
    }
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  async uploadByFile(file, { onPreview }) {
    const tag = getTag(file)
    getPreview(file, tag).then(onPreview)

    try {
      let result;

      // custom
      if (this.config.uploader && typeof this.config.uploader.uploadByFile === 'function') {
        result = await this.config.uploader.uploadByFile(file)
      }

      // default
      else {
        const formData = new FormData();

        formData.append(this.config.field, file);

        if (this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length) {
          Object.entries(this.config.additionalRequestData).forEach(([name, value]) => {
            formData.append(name, value);
          });
        }

        result = ajax.post({
          url: this.config.endpoints.byFile,
          data: formData,
          type: ajax.contentType.JSON,
          headers: this.config.additionalRequestHeaders,
        }).then(response => response.body);
      }

      if (!result.file.tag) result.file.tag = tag;
      this.onUpload(result);
    } catch (error) {
      this.onError(error);
    }
  }
}

