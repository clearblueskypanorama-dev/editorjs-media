const IMAGE = new Set(["apng", "avif", "gif", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "png", "svg", "webp"])
const AUDIO = new Set(["m4a", "m4b", "mp4a", "mpga", "mp2", "mp2a", "mp3", "m2a", "m3a", "wav", "weba", "aac", "oga", "spx", "flac", "opus"])
const VIDEO = new Set(["mp4", "ogg", "ogv", "webm", "mov", "m4v", "mkv", "3gp", "avi", "mpeg"])
export const REGEX = new RegExp(`https?:\\/\\/\\S+\\.(${[...IMAGE, ...AUDIO, ...VIDEO].join("|")})(\\?[a-z0-9=]*)?$`, "i")

/**
 * Get file type from url string
 *
 * @param  {URL} url
 * @returns {'VIDEO'|'AUDIO'|'IMG'|undefined}
 */
export function getUrlFileType({ pathname }) {
    const ext = pathname.split(".").pop()
    if (IMAGE.has(ext)) return "IMG"
    if (AUDIO.has(ext)) return "AUDIO"
    if (VIDEO.has(ext)) return "VIDEO"
}