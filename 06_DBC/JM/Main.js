import SayaTubeVideo from './SayaTubeVideo.js';
import SayaTubeUser from './SayaTubeUser.js';

function generateRandomTitle() {
    const words1 = ["Petualangan", "Kisah", "Legenda", "Rahasia", "Misteri", "Perjalanan", "Kehidupan"];
    const words2 = ["Sang", "Si", "Anak", "Pahlawan", "Monster", "Dukun", "Malaikat"];
    const words3 = ["Terakhir", "Ajaib", "Terlarang", "Tersembunyi", "Terbang", "Berbahaya", "Menakutkan"];

    const randomWord1 = words1[Math.floor(Math.random() * words1.length)];
    const randomWord2 = words2[Math.floor(Math.random() * words2.length)];
    const randomWord3 = words3[Math.floor(Math.random() * words3.length)];

    return `${randomWord1} ${randomWord2} ${randomWord3}`;
}

try {
    const user = new SayaTubeUser("Kevin Jonson");

    for (let i = 0; i < 10; i++) {
        let video = new SayaTubeVideo(`Review Film ${generateRandomTitle()} oleh Kevin Jonson`);

        for (let j = 0; j < 10; j++) {
            try {
                video.IncreasePlayCount(25000000);
            } catch (error) {
                console.error(`Error saat menambah play count pada video ${i + 1}: ${error.message}`);
                break;
            }
        }

        user.AddVideo(video);
    }

    user.PrintAllVideoPlaycount();
    console.log(`Total Play Count: ${user.GetTotalVideoPlayCount()}`);
} catch (error) {
    console.error("Error:", error.message);
}