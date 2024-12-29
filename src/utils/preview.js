const MEDIA_THUMBNAIL_QUALITY = 0.85
const MEDIA_THUMBNAIL_PX_MAX = 50
const MEDIA_THUMBNAIL_FORMAT = "image/webp"
const MEDIA_THUMBNAIL_FORMAT_FALLBACK = "image/jpeg"

/**
 * @param  {HTMLCanvasElement} canvas
 * @param {string} format
 * @returns {string}
 */
function getDataURLFromCanvas(canvas, format) {
    return canvas.toDataURL(format, MEDIA_THUMBNAIL_QUALITY)
}

/**
 * @param  {CanvasImageSource} source
 * @param {{ width: number, height: number }} sourceSize
 * @returns {string}
 */
function getThumbnailFromSource(source, sourceSize) {
    /**
     * Stepped scaling
     * https://stackoverflow.com/a/39637827
     */
    const canvas = document.createElement('canvas'),
        ctx = canvas.getContext("2d"),
        oc = document.createElement('canvas'),
        octx = oc.getContext('2d');

    const min = Math.min(sourceSize.width, sourceSize.height)
    const multiplyer = MEDIA_THUMBNAIL_PX_MAX / min
    const px = sourceSize.width * multiplyer // destination px

    canvas.width = px;
    canvas.height = px;

    let cur = Math.floor(sourceSize.width * 0.5)

    oc.width = cur;
    oc.height = cur;

    // crop square
    octx.drawImage(source, Math.max(0, (sourceSize.width - min) / 2), Math.max(0, (sourceSize.height - min) / 2), min, min, 0, 0, cur, cur);

    // check image is empty
    if (octx.getImageData(0, 0, canvas.width, canvas.height).data.every(v => v === 0)) return;

    while (cur * 0.5 > px) {
        cur = Math.floor(cur * 0.5)
        octx.drawImage(oc, 0, 0, cur * 2, cur * 2, 0, 0, cur, cur);
    }

    ctx.drawImage(oc, 0, 0, cur, cur, 0, 0, canvas.width, canvas.height);

    // get blob

    return getDataURLFromCanvas(canvas, MEDIA_THUMBNAIL_FORMAT) ||
        getDataURLFromCanvas(canvas, MEDIA_THUMBNAIL_FORMAT_FALLBACK) ||
        undefined
}

const VIDEO_THUMBNAIL_SEC = 5

/**
 * @param  {Blob} blob
 * @returns {Promise<string>}
 */
function getMetadataVideo(blob) {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(blob)
        const video = document.createElement("video")

        video.oncanplay = () => {
            // seek end
            video.onseeked = () => {
                resolve(getThumbnailFromSource(video, { width: video.videoWidth, height: video.videoHeight }))
                video.remove()
                URL.revokeObjectURL(url)
            }

            // seek
            video.currentTime = Math.min(video.duration / 2, VIDEO_THUMBNAIL_SEC)
        }

        video.src = url
    })
}

/**
 * @param  {Blob} blob
 * @returns {Promise<string>}
 */
function getMetadataImage(blob) {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(blob)
        const image = document.createElement("img")

        image.onload = () => {
            resolve(getThumbnailFromSource(image, { width: image.naturalWidth, height: image.naturalHeight }))
            image.remove()
            URL.revokeObjectURL(url)
        }

        image.src = url
    })
}

/**
 * @param  {Blob} blob
 * @returns {'VIDEO'|'AUDIO'|'IMAGE'|undefined}
 * @returns {Promise<string>}
 */
export async function getPreview(blob, tag) {
    /*switch (tag) {
        case "VIDEO":
            return await getMetadataVideo(blob)

        case "IMAGE":
            return await getMetadataImage(blob)
    }*/
    return ""
}