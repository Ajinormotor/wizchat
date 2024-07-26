export const chatdata = [ {
    "chat": {
        "participants": [
            {
                "id": "user_1",
                "name": "Alice",
                "avatar": "https://api.dicebear.com/9.x/lorelei/svg"
            },
            {
                "id": "user_2",
                "name": "Bob",
                "avatar": "https://api.dicebear.com/9.x/pixel-art/svg"
            }
        ],
        "messages": [
            {
                "id": "msg_1",
                "senderId": "user_1",
                "content": "Hey Bob, how are you?",
                "timestamp": "2024-07-04T10:00:00Z",
                "reactions": {
                    "like": ["user_2"],
                    "laugh": []
                },
                "replies": [],
                "forwardedFrom": null
            },
            {
                "id": "msg_2",
                "senderId": "user_2",
                "content": "I'm good, Alice! How about you?",
                "timestamp": "2024-07-04T10:01:00Z",
                "reactions": {
                    "like": ["user_1"],
                    "laugh": ["user_1"]
                },
                "replies": [],
                "forwardedFrom": null
            },
            {
                "id": "msg_3",
                "senderId": "user_1",
                "content": "I'm great! Just working on a new project.",
                "timestamp": "2024-07-04T10:02:00Z",
                "reactions": {
                    "like": ["user_2"]
                },
                "replies": [],
                "forwardedFrom": null
            },
            {
                "id": "msg_4",
                "senderId": "user_2",
                "content": "That sounds exciting! What's it about?",
                "timestamp": "2024-07-04T10:03:00Z",
                "reactions": {
                    "like": ["user_1"]
                },
                "replies": [],
                "forwardedFrom": null
            },
            {
                "id": "msg_5",
                "senderId": "user_1",
                "content": "It's a modern chat UI library. By the way, did you see the new feature in the app?",
                "timestamp": "2024-07-04T10:04:00Z",
                "reactions": {},
                "replies": [],
                "forwardedFrom": null
            },
            {
                "id": "msg_6",
                "senderId": "user_2",
                "content": "Yes, I did! I even forwarded it to our team.",
                "timestamp": "2024-07-04T10:05:00Z",
                "reactions": {
                    "like": ["user_1"]
                },
                "replies": [],
                "forwardedFrom": {
                    "id": "msg_7",
                    "senderId": "user_3",
                    "content": "Check out this awesome new feature!",
                    "timestamp": "2024-07-03T12:00:00Z",
                    "reactions": {},
                    "replies": [],
                    "forwardedFrom": null
                }
            },
            {
                "id": "msg_8",
                "senderId": "user_1",
                "content": "That's great! I hope the team likes it.",
                "timestamp": "2024-07-04T10:06:00Z",
                "reactions": {
                    "like": ["user_2"]
                },
                "replies": [
                    {
                        "id": "reply_1",
                        "senderId": "user_2",
                        "content": "I'm sure they will!",
                        "timestamp": "2024-07-04T10:07:00Z",
                        "reactions": {
                            "like": ["user_1"]
                        }
                    }
                ],
                "forwardedFrom": null
            },
            {
                "id": "msg_8",
                "senderId": "user_1",
                "content": "That's great! I hope the team likes it.",
                "timestamp": "2024-07-04T10:06:00Z",
                "reactions": {
                    "like": ["user_2"]
                },
                "replies": [
                    {
                        "id": "reply_1",
                        "senderId": "user_2",
                        "content": "I'm sure they will!",
                        "timestamp": "2024-07-04T10:07:00Z",
                        "reactions": {
                            "like": ["user_1"]
                        }
                    }
                ],
                "forwardedFrom": null
            },
            {
                "id": "msg_9",
                "senderId": "user_2",
                "content": "By the way, here's the link to the project repository: https://github.com/project/repo",
                "timestamp": "2024-07-04T10:08:00Z",
                "reactions": {
                    "like": ["user_1"]
                },
                "replies": [],
                "forwardedFrom": null,
                "attachments": [
                    {
                        "type": "link",
                        "url": "https://github.com/project/repo",
                        "title": "Project Repository"
                    }
                ]
            },
            {
                "id": "msg_10",
                "senderId": "user_1",
                "content": "Thanks! I'll check it out. Also, check out this document: [Project Plan](https://example.com/project-plan.pdf)",
                "timestamp": "2024-07-04T10:09:00Z",
                "reactions": {
                    "like": ["user_2"]
                },
                "replies": [],
                "forwardedFrom": null,
                "attachments": [
                    {
                        "type": "link",
                        "url": "https://drive.google.com/file/d/1tX7kEEIacOGz-xcy0-k_uJDh4E4UwF0C/view?usp=drivesdk",
                        "title": "Project Plan"
                    }
                ]
            },
            {
                "id": "msg_11",
                "senderId": "user_2",
                "content": "Got it. Also, I forwarded the project guidelines to the new team member.",
                "timestamp": "2024-07-04T10:10:00Z",
                "reactions": {
                    "like": ["user_1"]
                },
                "replies": [],
                "forwardedFrom": {
                    "id": "msg_12",
                    "senderId": "user_3",
                    "content": "Here are the project guidelines.",
                    "timestamp": "2024-07-03T15:00:00Z",
                    "reactions": {},
                    "replies": [],
                    "forwardedFrom": null,
                    "attachments": [
                        {
                            "type": "document",
                            "url": "https://drive.google.com/file/d/1tX7kEEIacOGz-xcy0-k_uJDh4E4UwF0C/view?usp=drivesdk",
                            "title": "Project Guidelines"
                        }
                    ]
                }
            },
            {
                "id": "msg_13",
                "senderId": "user_1",
                "content": "Perfect. Let's sync up later today for a quick catch-up.",
                "timestamp": "2024-07-04T10:11:00Z",
                "reactions": {
                    "like": ["user_2"]
                },
                "replies": [],
                "forwardedFrom": null
            },
            {
                "id": "msg_14",
                "senderId": "user_2",
                "content": "Sure, sounds good. Talk to you then!",
                "timestamp": "2024-07-04T10:12:00Z",
                "reactions": {
                    "like": ["user_1"]
                },
                "replies": [],
                "forwardedFrom": null
            }
        ]
    }
}

]