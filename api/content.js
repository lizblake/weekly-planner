export default async function handler(request, res) {
    var content = [
        {
            "counter": "",
            "title": "Introduction",
            "description": "Why take this course?",
            "time" : "2 hours to complete",
            "objectives" : "4 videos (Total 13 min), 11 readings",
            "videos": [
                {
                    "title": "Course Introduction: Welcome to Developing Back-End Apps with Node.js & Express",
                    "duration": 3
                },
                {
                    "title": "What is Back End Development?",
                    "duration": 7
                },
                {
                    "title": "Introduction to Node.js",
                    "duration": 3
                },
                {
                    "title": "Expert Viewpoints: Introductory Thoughts on Server-Side JavaScript and Node.js",
                    "duration": 5
                },
            ],
            "readings": [
                {
                    "title": "Welcome",
                    "duration": 2
                },
                {
                    "title": "Module Summary",
                    "duration": 2
                }
            ],
            "quizzes": [
                {
                    "title": "Practice Weeks",
                    "duration": 16
                },
                {
                    "title": "Graded Quiz",
                    "duration": 20
                }
            ]
        },
        {
            "counter": "",
            "title": "Misconceptions About Happiness",
            "description": "What do we think will make us happy?",
            "time" : "2 hours to complete",
            "objectives" : "7 videos (Total 63 min), 3 readings, 1 quiz"
        },
        {
            "counter": "",
            "title": "Why Our Expectations are so Bad",
            "description": "Why do we mispredict what makes us happy?",
            "time" : "2 hours to complete",
            "objectives" : "8 videos (Total 64 min), 3 readings, 1 quiz"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(content);

}
