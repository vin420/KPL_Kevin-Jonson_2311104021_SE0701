import SayaTubeVideo from './SayaTubeVideo.js';

export default class SayaTubeUser {
    constructor(username) {
        if (typeof username !== 'string' || username.length === 0 || username.length > 100) {
            throw new Error("Username must be a non-empty string with a maximum length of 100 characters.");
        }
        this.username = username;
        this.uploadedVideos = [];
    }

    AddVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Invalid video object.");
        }
        if (video.playCount > Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count exceeds maximum integer value.");
        }
        this.uploadedVideos.push(video);
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        const maxVideosToPrint = Math.min(8, this.uploadedVideos.length);
        for (let i = 0; i < maxVideosToPrint; i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}