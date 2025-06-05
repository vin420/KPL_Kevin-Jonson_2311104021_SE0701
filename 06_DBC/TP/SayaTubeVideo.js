class SayaTubeVideo {
    constructor(title) {
        if (typeof title !== 'string' || title.length === 0 || title.length > 100) {
            throw new Error("Title must be a non-empty string with a maximum length of 100 characters.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (typeof count !== 'number' || count <= 0 || count > 10000000) {
            throw new Error("Play count increment must be between 1 and 10,000,000.");
        }
        try {
            let newPlayCount = this.playCount + count;
            if (newPlayCount > Number.MAX_SAFE_INTEGER) {
                throw new Error("Play count overflow detected.");
            }
            this.playCount = newPlayCount;
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    PrintVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

try {
    const video = new SayaTubeVideo("Tutorial Design By Contract – [Kevin Jonson]");
    
    for (let i = 0; i < 1000; i++) {
        video.IncreasePlayCount(10000000);
    }
    
    video.PrintVideoDetails();
} catch (error) {
    console.error("Error:", error.message);
}