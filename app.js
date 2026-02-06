        // Program data embedded from Excel
		const ALL_PROGRAMS = {
    "2x": {
        "1": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 60.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 15.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 97.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 35.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 115.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 55.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ]
        },
        "2": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 67.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 105.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ]
        },
        "3": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ]
        },
        "4": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 75.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 65.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 15.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 102.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 120.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ]
        },
        "5": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 70.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 107.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ]
        },
        "6": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 115.0,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ]
        },
        "7": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 52.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 12.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 30.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ]
        },
        "8": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 67.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 105.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ]
        },
        "9": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ]
        },
        "10": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 87.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ]
        },
        "11": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 70.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 107.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ]
        },
        "12": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 115.0,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ]
        },
        "13": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 87.5,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 90.0,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 80.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 122.5,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 147.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 70.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ]
        },
        "14": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 52.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 12.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 30.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ]
        },
        "15": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ]
        },
        "16": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 87.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ]
        },
        "17": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 92.5,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 125.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ]
        },
        "18": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 87.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ]
        },
        "19": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 92.5,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 125.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ]
        },
        "20": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 95.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Bench Press",
                    "weight": 97.5,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 87.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 22.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Deadlift",
                    "weight": 132.5,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 47.5,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 162.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 77.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ]
        }
    },
    "3x": {
        "1": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 77.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 72.5,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 17.5,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 35.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 150.0,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 97.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 55.0,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 150.0,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "2": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 82.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 77.5,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 20.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 162.5,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 105.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 162.5,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "3": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 87.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 20.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 175.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 175.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "4": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 20.0,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 75.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 157.5,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 102.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 157.5,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 7,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "5": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 80.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 20.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 82.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 170.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 107.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 170.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "6": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 90.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 87.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 22.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 87.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 182.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 115.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 182.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 22.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "7": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 65.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 15.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 30.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 125.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 125.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 15.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ]
        },
        "8": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 82.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 77.5,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 20.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 162.5,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 105.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 162.5,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "9": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 87.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 20.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 175.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 175.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "10": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 92.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 90.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 22.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 90.0,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 187.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 70.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 187.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 22.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ]
        },
        "11": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 80.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 20.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 82.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 170.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 107.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 170.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 6,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "12": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 90.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 87.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 22.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 87.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 182.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 115.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 182.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 22.5,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "13": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 97.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 92.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 22.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 92.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 195.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 122.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 195.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 22.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ]
        },
        "14": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 65.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 15.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 30.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 125.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 125.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 15.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ]
        },
        "15": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 87.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 20.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 175.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 175.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 5,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "16": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 92.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 90.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 22.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 90.0,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 187.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 70.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 187.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 22.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ]
        },
        "17": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 100.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 95.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 25.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 95.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 200.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 125.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 200.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 25.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                }
            ]
        },
        "18": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 92.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 90.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 22.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 90.0,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 187.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 70.0,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 187.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 22.5,
                    "reps": 4,
                    "target": 2,
                    "sets": 5
                }
            ]
        },
        "19": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 100.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 95.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 25.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 95.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 200.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 125.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 200.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 25.0,
                    "reps": 3,
                    "target": 2,
                    "sets": 5
                }
            ]
        },
        "20": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 105.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 102.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "DB Bench",
                    "weight": 25.0,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 100.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "OHP",
                    "weight": 47.5,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 212.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 132.5,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 77.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 212.5,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 25.0,
                    "reps": 2,
                    "target": 1,
                    "sets": 5
                }
            ]
        }
    },
    "4x": {
        "1": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 55.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 60.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 115.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 15.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 97.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 55.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 35.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 115.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ]
        },
        "2": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 65.0,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 105.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ]
        },
        "3": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ]
        },
        "4": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 62.5,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 120.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 15.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 102.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 120.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ]
        },
        "5": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 67.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 107.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ]
        },
        "6": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 115.0,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ]
        },
        "7": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 50.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 12.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 30.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ]
        },
        "8": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 65.0,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 105.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ]
        },
        "9": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ]
        },
        "10": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ]
        },
        "11": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 67.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 107.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ]
        },
        "12": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 115.0,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ]
        },
        "13": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 87.5,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 70.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 87.5,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 147.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 122.5,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 70.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 147.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ]
        },
        "14": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 50.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 12.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 30.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ]
        },
        "15": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ]
        },
        "16": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ]
        },
        "17": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 125.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ]
        },
        "18": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ]
        },
        "19": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 125.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ]
        },
        "20": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 95.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 77.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 95.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 162.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 22.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 132.5,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 77.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 47.5,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 162.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ]
        }
    },
    "5x": {
        "1": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 15.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 115.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 97.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 55.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 35.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 115.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 55.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 60.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ]
        },
        "2": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 105.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 65.0,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ]
        },
        "3": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ]
        },
        "4": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 15.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 120.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 102.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 120.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 62.5,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ]
        },
        "5": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 107.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 67.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ]
        },
        "6": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 115.0,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ]
        },
        "7": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 12.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 30.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 50.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ]
        },
        "8": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 105.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 65.0,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ]
        },
        "9": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ]
        },
        "10": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ]
        },
        "11": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 107.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 67.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ]
        },
        "12": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 115.0,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ]
        },
        "13": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 87.5,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 87.5,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 147.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 122.5,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 70.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 147.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 70.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ]
        },
        "14": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 12.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 30.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 50.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ]
        },
        "15": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ]
        },
        "16": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ]
        },
        "17": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 125.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ]
        },
        "18": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ]
        },
        "19": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 125.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ]
        },
        "20": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 95.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "DB OHP",
                    "weight": 22.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "Bench Press",
                    "weight": 95.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 162.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Deadlift",
                    "weight": 132.5,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 77.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "OHP",
                    "weight": 47.5,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 162.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Incline Press",
                    "weight": 77.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ]
        }
    },
    "6x": {
        "1": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 55.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 15.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 60.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 115.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 55.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 115.0,
                    "reps": 7,
                    "target": 14,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 97.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 35.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ]
        },
        "2": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 65.0,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 105.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ]
        },
        "3": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ]
        },
        "4": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 15.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 62.5,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 120.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 120.0,
                    "reps": 7,
                    "target": 13,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 102.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ]
        },
        "5": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 67.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 107.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ]
        },
        "6": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 115.0,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                }
            ]
        },
        "7": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 12.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 50.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 30.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ]
        },
        "8": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 65.0,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 57.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 122.5,
                    "reps": 6,
                    "target": 12,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 105.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 37.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ]
        },
        "9": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ]
        },
        "10": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ]
        },
        "11": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 67.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 60.0,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 127.5,
                    "reps": 6,
                    "target": 11,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 107.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ]
        },
        "12": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 72.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 82.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 65.0,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 137.5,
                    "reps": 5,
                    "target": 9,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 115.0,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 3,
                    "target": 5,
                    "sets": 5
                }
            ]
        },
        "13": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 87.5,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 70.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 77.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 87.5,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 147.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 70.0,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 147.5,
                    "reps": 4,
                    "target": 7,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 122.5,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 2,
                    "target": 3,
                    "sets": 5
                }
            ]
        },
        "14": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 12.5,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 50.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 60.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 45.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 95.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 85.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 30.0,
                    "reps": 5,
                    "target": null,
                    "sets": 5
                }
            ]
        },
        "15": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 17.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 70.0,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 62.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 132.5,
                    "reps": 5,
                    "target": 10,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 112.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 40.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ]
        },
        "16": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ]
        },
        "17": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 125.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                }
            ]
        },
        "18": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 75.0,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 67.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 142.5,
                    "reps": 4,
                    "target": 8,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 120.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 42.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ]
        },
        "19": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 20.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 80.0,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 90.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 72.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 152.5,
                    "reps": 3,
                    "target": 6,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 125.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 45.0,
                    "reps": 1,
                    "target": 2,
                    "sets": 5
                }
            ]
        },
        "20": {
            "1": [
                {
                    "name": "Squat",
                    "weight": 95.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Incline Press",
                    "weight": 77.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "2": [
                {
                    "name": "DB OHP",
                    "weight": 22.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Romanian Deadlift",
                    "weight": 85.0,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "3": [
                {
                    "name": "Bench Press",
                    "weight": 95.0,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 162.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "4": [
                {
                    "name": "Incline Press",
                    "weight": 77.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                },
                {
                    "name": "Leg Press",
                    "weight": 162.5,
                    "reps": 2,
                    "target": 4,
                    "sets": 5
                }
            ],
            "5": [
                {
                    "name": "Deadlift",
                    "weight": 132.5,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                }
            ],
            "6": [
                {
                    "name": "OHP",
                    "weight": 47.5,
                    "reps": 1,
                    "target": 1,
                    "sets": 5
                }
            ]
        }
    }
};
        
        const AMRAP_HISTORY_DATA = {
        "1": {
                "1": [
                        10,
                        17,
                        21
                ],
                "2": [
                        12,
                        10,
                        20
                ],
                "3": [
                        10,
                        20,
                        20,
                        14
                ]
        },
        "2": {
                "1": [
                        8,
                        18,
                        15
                ],
                "2": [
                        9,
                        10,
                        15
                ],
                "3": [
                        10,
                        20,
                        20,
                        14
                ]
        },
        "3": {
                "1": [
                        6,
                        15,
                        13
                ],
                "2": [
                        6,
                        6,
                        null
                ],
                "3": [
                        10,
                        15,
                        15,
                        null
                ]
        },
        "4": {
                "1": [
                        10,
                        15,
                        13
                ],
                "2": [
                        10,
                        6,
                        15
                ],
                "3": [
                        11,
                        15,
                        15,
                        15
                ]
        },
        "5": {
                "1": [
                        8,
                        14,
                        11
                ],
                "2": [
                        8,
                        9,
                        20
                ],
                "3": [
                        10,
                        15,
                        15,
                        9
                ]
        },
        "6": {
                "1": [
                        null,
                        null,
                        null
                ],
                "2": [
                        5,
                        6,
                        10
                ],
                "3": [
                        5,
                        12,
                        12,
                        15
                ]
        },
        "7": {
                "1": [
                        null,
                        null,
                        null
                ],
                "2": [
                        null,
                        null,
                        null
                ],
                "3": [
                        null,
                        null,
                        null,
                        null
                ]
        },
        "8": {
                "1": [
                        null,
                        null,
                        null
                ],
                "2": [
                        10,
                        9,
                        18
                ],
                "3": [
                        9,
                        12,
                        18,
                        14
                ]
        },
        "9": {
                "1": [
                        null,
                        null,
                        null
                ],
                "2": [
                        9,
                        8,
                        10
                ],
                "3": [
                        null,
                        null,
                        null,
                        null
                ]
        },
        "10": {
                "1": [
                        null,
                        null,
                        null
                ],
                "2": [
                        6,
                        null,
                        null
                ],
                "3": [
                        null,
                        null,
                        null,
                        null
                ]
        },
        "11": {
                "1": [
                        null,
                        null,
                        null
                ],
                "2": [
                        null,
                        null,
                        null
                ],
                "3": [
                        null,
                        null,
                        null,
                        null
                ]
        },
        "12": {
                "1": [
                        5,
                        10,
                        9
                ],
                "2": [
                        5,
                        6,
                        10
                ],
                "3": [
                        7,
                        5,
                        10,
                        10
                ]
        },
        "13": {
                "1": [
                        4,
                        8,
                        7
                ],
                "2": [
                        4,
                        4,
                        8
                ],
                "3": [
                        4,
                        7,
                        null,
                        8
                ]
        },
        "14": {
                "1": [
                        null,
                        null,
                        null
                ],
                "2": [
                        null,
                        null,
                        null
                ],
                "3": [
                        null,
                        null,
                        null,
                        null
                ]
        },
        "15": {
                "1": [
                        6,
                        14,
                        11
                ],
                "2": [
                        7,
                        7,
                        10
                ],
                "3": [
                        null,
                        null,
                        null,
                        null
                ]
        }
};


        // Intensity percentages for each week (% of Training Max)
        // SBS program progressively increases intensity week-to-week
        const WEEK_INTENSITY = {
            1: 0.60, 2: 0.65, 3: 0.70, 4: 0.625, 5: 0.675,
            6: 0.725, 7: 0.50, 8: 0.65, 9: 0.70, 10: 0.75,
            11: 0.675, 12: 0.725, 13: 0.775, 14: 0.50, 15: 0.70,
            16: 0.75, 17: 0.80, 18: 0.75, 19: 0.80, 20: 0.85
        };

        const STRENGTH_LIFT_INTENSITY = {
            'Squat': {
                1: 0.7, 2: 0.75, 3: 0.8, 4: 0.725, 5: 0.775, 6: 0.825,
                7: 0.6, 8: 0.75, 9: 0.8, 10: 0.85, 11: 0.775, 12: 0.825,
                13: 0.875, 14: 0.6, 15: 0.8, 16: 0.85, 17: 0.9, 18: 0.85,
                19: 0.9, 20: 0.95, 21: 0.6
            },
            'Bench Press': {
                1: 0.7, 2: 0.75, 3: 0.8, 4: 0.725, 5: 0.775, 6: 0.825,
                7: 0.6, 8: 0.75, 9: 0.8, 10: 0.85, 11: 0.775, 12: 0.825,
                13: 0.875, 14: 0.6, 15: 0.8, 16: 0.85, 17: 0.9, 18: 0.85,
                19: 0.9, 20: 0.95, 21: 0.6
            },
            'Deadlift': {
                1: 0.7, 2: 0.75, 3: 0.8, 4: 0.725, 5: 0.775, 6: 0.825,
                7: 0.6, 8: 0.75, 9: 0.8, 10: 0.85, 11: 0.775, 12: 0.825,
                13: 0.875, 14: 0.6, 15: 0.8, 16: 0.85, 17: 0.9, 18: 0.85,
                19: 0.9, 20: 0.95, 21: 0.6
            },
            'OHP': {
                1: 0.7, 2: 0.75, 3: 0.8, 4: 0.725, 5: 0.775, 6: 0.825,
                7: 0.6, 8: 0.75, 9: 0.8, 10: 0.85, 11: 0.775, 12: 0.825,
                13: 0.875, 14: 0.6, 15: 0.8, 16: 0.85, 17: 0.9, 18: 0.85,
                19: 0.9, 20: 0.95, 21: 0.6
            },
            'Leg Press': {
                1: 0.6, 2: 0.65, 3: 0.7000000000000001, 4: 0.625, 5: 0.675, 6: 0.725,
                7: 0.5, 8: 0.65, 9: 0.7000000000000001, 10: 0.75, 11: 0.675, 12: 0.725,
                13: 0.775, 14: 0.5, 15: 0.7000000000000001, 16: 0.75, 17: 0.8, 18: 0.75,
                19: 0.8, 20: 0.85, 21: 0.5
            },
            'Incline Press': {
                1: 0.6, 2: 0.65, 3: 0.7000000000000001, 4: 0.625, 5: 0.675, 6: 0.725,
                7: 0.5, 8: 0.65, 9: 0.7000000000000001, 10: 0.75, 11: 0.675, 12: 0.725,
                13: 0.775, 14: 0.5, 15: 0.7000000000000001, 16: 0.75, 17: 0.8, 18: 0.75,
                19: 0.8, 20: 0.85, 21: 0.5
            },
            'Romanian Deadlift': {
                1: 0.6, 2: 0.65, 3: 0.7000000000000001, 4: 0.625, 5: 0.675, 6: 0.725,
                7: 0.5, 8: 0.65, 9: 0.7000000000000001, 10: 0.75, 11: 0.675, 12: 0.725,
                13: 0.775, 14: 0.5, 15: 0.7000000000000001, 16: 0.75, 17: 0.8, 18: 0.75,
                19: 0.8, 20: 0.85, 21: 0.5
            },
            'DB OHP': {
                1: 0.6, 2: 0.65, 3: 0.7000000000000001, 4: 0.625, 5: 0.675, 6: 0.725,
                7: 0.5, 8: 0.65, 9: 0.7000000000000001, 10: 0.75, 11: 0.675, 12: 0.725,
                13: 0.775, 14: 0.5, 15: 0.7000000000000001, 16: 0.75, 17: 0.8, 18: 0.75,
                19: 0.8, 20: 0.85, 21: 0.5
            }
        };

        const HYPERTROPHY_LIFT_INTENSITY = {
            'Squat': {
                1: 0.7, 2: 0.725, 3: 0.75, 4: 0.725, 5: 0.75, 6: 0.775,
                7: 0.6, 8: 0.725, 9: 0.75, 10: 0.775, 11: 0.75, 12: 0.775,
                13: 0.8, 14: 0.6, 15: 0.75, 16: 0.775, 17: 0.8, 18: 0.775,
                19: 0.8, 20: 0.825, 21: 0.6
            },
            'Bench Press': {
                1: 0.7, 2: 0.725, 3: 0.75, 4: 0.725, 5: 0.75, 6: 0.775,
                7: 0.6, 8: 0.725, 9: 0.75, 10: 0.775, 11: 0.75, 12: 0.775,
                13: 0.8, 14: 0.6, 15: 0.75, 16: 0.775, 17: 0.8, 18: 0.775,
                19: 0.8, 20: 0.825, 21: 0.6
            },
            'Block Pulls': {
                1: 0.7, 2: 0.725, 3: 0.75, 4: 0.725, 5: 0.75, 6: 0.775,
                7: 0.6, 8: 0.725, 9: 0.75, 10: 0.775, 11: 0.75, 12: 0.775,
                13: 0.8, 14: 0.6, 15: 0.75, 16: 0.775, 17: 0.8, 18: 0.775,
                19: 0.8, 20: 0.825, 21: 0.6
            },
            'OHP': {
                1: 0.7, 2: 0.725, 3: 0.75, 4: 0.725, 5: 0.75, 6: 0.775,
                7: 0.6, 8: 0.725, 9: 0.75, 10: 0.775, 11: 0.75, 12: 0.775,
                13: 0.8, 14: 0.6, 15: 0.75, 16: 0.775, 17: 0.8, 18: 0.775,
                19: 0.8, 20: 0.825, 21: 0.6
            },
            'Leg Press': {
                1: 0.65, 2: 0.675, 3: 0.7, 4: 0.675, 5: 0.7, 6: 0.725,
                7: 0.55, 8: 0.675, 9: 0.7, 10: 0.725, 11: 0.7, 12: 0.725,
                13: 0.75, 14: 0.55, 15: 0.7, 16: 0.725, 17: 0.75, 18: 0.725,
                19: 0.75, 20: 0.775, 21: 0.55
            },
            'Hack Squat': {
                1: 0.65, 2: 0.675, 3: 0.7, 4: 0.675, 5: 0.7, 6: 0.725,
                7: 0.55, 8: 0.675, 9: 0.7, 10: 0.725, 11: 0.7, 12: 0.725,
                13: 0.75, 14: 0.55, 15: 0.7, 16: 0.725, 17: 0.75, 18: 0.725,
                19: 0.75, 20: 0.775, 21: 0.55
            },
            'Incline Press': {
                1: 0.65, 2: 0.675, 3: 0.7, 4: 0.675, 5: 0.7, 6: 0.725,
                7: 0.55, 8: 0.675, 9: 0.7, 10: 0.725, 11: 0.7, 12: 0.725,
                13: 0.75, 14: 0.55, 15: 0.7, 16: 0.725, 17: 0.75, 18: 0.725,
                19: 0.75, 20: 0.775, 21: 0.55
            },
            'DB Bench': {
                1: 0.65, 2: 0.675, 3: 0.7, 4: 0.675, 5: 0.7, 6: 0.725,
                7: 0.55, 8: 0.675, 9: 0.7, 10: 0.725, 11: 0.7, 12: 0.725,
                13: 0.75, 14: 0.55, 15: 0.7, 16: 0.725, 17: 0.75, 18: 0.725,
                19: 0.75, 20: 0.775, 21: 0.55
            },
            'Romanian Deadlift': {
                1: 0.65, 2: 0.675, 3: 0.7, 4: 0.675, 5: 0.7, 6: 0.725,
                7: 0.55, 8: 0.675, 9: 0.7, 10: 0.725, 11: 0.7, 12: 0.725,
                13: 0.75, 14: 0.55, 15: 0.7, 16: 0.725, 17: 0.75, 18: 0.725,
                19: 0.75, 20: 0.775, 21: 0.55
            },
            'DB OHP': {
                1: 0.65, 2: 0.675, 3: 0.7, 4: 0.675, 5: 0.7, 6: 0.725,
                7: 0.55, 8: 0.675, 9: 0.7, 10: 0.725, 11: 0.7, 12: 0.725,
                13: 0.75, 14: 0.55, 15: 0.7, 16: 0.725, 17: 0.75, 18: 0.725,
                19: 0.75, 20: 0.775, 21: 0.55
            }
        };

        const STRENGTH_LIFT_INTENSITY_BY_NAME = Object.fromEntries(
            Object.entries(STRENGTH_LIFT_INTENSITY).map(([name, table]) => [
                String(name).trim().toLowerCase(),
                table
            ])
        );

        const HYPERTROPHY_LIFT_INTENSITY_BY_NAME = Object.fromEntries(
            Object.entries(HYPERTROPHY_LIFT_INTENSITY).map(([name, table]) => [
                String(name).trim().toLowerCase(),
                table
            ])
        );

        function getIntensityForExercise(exerciseName, weekNum) {
            if (!weekNum) return null;
            const weekKey = String(weekNum);

            if (exerciseName) {
                const key = String(exerciseName).trim().toLowerCase();
                if (isStrengthProgram()) {
                    const table = STRENGTH_LIFT_INTENSITY_BY_NAME[key];
                    if (table && table[weekKey] !== undefined) {
                        return table[weekKey];
                    }
                } else if (isHypertrophyProgram()) {
                    const table = HYPERTROPHY_LIFT_INTENSITY_BY_NAME[key];
                    if (table && table[weekKey] !== undefined) {
                        return table[weekKey];
                    }
                }
            }

            return WEEK_INTENSITY[weekNum] || null;
        }

        // App state
        const DATA_VERSION = 2;
        const DATA_STORAGE_KEY = 'sbs-tracker-v2';
        let appData = {
            version: DATA_VERSION,
            programType: 'strength_rtf',  // 'strength_rtf', 'strength_rir', or 'hypertrophy'
            selectedProgram: '3x',  // 2x, 3x, 4x, 5x (or 6x for hypertrophy)
            currentWeek: 16,
            currentDay: 1,
            weightUnit: 'kg',  // 'kg' or 'lbs' - global setting for all weights
            workouts: {},
            completedDays: {}, // Track completed days per week: { weekNum: { 1: true, 2: false, 3: true } }
            oneRepMaxes: {
                squat: 100,
                bench: 100,
                deadlift: 140,
                ohp: 50,
                blockPulls: 147.5
            },
            auxiliaryExercises: {
                'squat-aux-1': 'Leg Press',
                'squat-aux-2': 'Hack Squat',
                'bench-aux-1': 'Incline Press',
                'bench-aux-2': 'DB Bench',
                'deadlift-aux': 'Romanian Deadlift',
                'ohp-aux': 'DB OHP'
            },
            plateCalculator: {
                enabled: true,
                barbellWeight: 20,  // stored in same unit as weightUnit
                availablePlates: [20, 15, 10, 5, 2.5, 1.25]  // stored in same unit as weightUnit
            },
            personalRecords: {
                // Track PRs per exercise: { exerciseName: { estimated1RM, weight, reps, date, week } }
            },
            restTimer: {
                enabled: true,
                duration: 180,  // seconds (3 minutes default)
                autoStart: false
            },
            setupComplete: false
        };

        // Hevy integration state (stored separately from appData)
        const HEVY_STORAGE_KEY = 'sbs-hevy-v1';
        const HEVY_API_BASE = 'https://api.hevyapp.com';
        const DEFAULT_HEVY_NAME_OVERRIDES = {
            'Bench Press': 'Bench Press (Barbell)',
            'Block Pulls': 'Rack Pull',
            'DB Bench': 'Bench Press (Dumbbell)',
            'DB OHP': 'Overhead Press (Dumbbell)',
            'Deadlift': 'Deadlift (Barbell)',
            'Hack Squat': 'Hack Squat',
            'Incline Press': 'Incline Bench Press (Barbell)',
            'Leg Press': 'Leg Press (Machine)',
            'OHP': 'Overhead Press (Barbell)',
            'Romanian Deadlift': 'Romanian Deadlift (Barbell)',
            'Squat': 'Squat (Barbell)'
        };
        let hevyState = {
            apiKey: '',
            templatesByName: {},
            templatesLastSync: null,
            nameOverrides: {},
            defaultDurationMinutes: 60,
            isPrivate: true
        };

        // Timer state (not persisted)
        let timerState = {
            active: false,
            paused: false,
            remaining: 0,
            interval: null
        };

        // Helper function to get max week based on program type
        function isStrengthProgram() {
            return appData.programType === 'strength_rtf' || appData.programType === 'strength_rir';
        }

        function isHypertrophyProgram() {
            return appData.programType === 'hypertrophy';
        }

        function getMaxWeek() {
            return isHypertrophyProgram() ? 21 : 20;
        }

        function isRIRProgram() {
            return appData.programType === 'strength_rir';
        }

        // Progression table
        function calculateProgressionFromDelta(delta) {
            if (delta <= -2) return -0.05;  // -5%
            if (delta === -1) return -0.02;  // -2%
            if (delta === 0) return 0.0;     // 0%
            if (delta === 1) return 0.005;   // +0.5%
            if (delta === 2) return 0.01;    // +1%
            if (delta === 3) return 0.015;   // +1.5%
            if (delta === 4) return 0.02;    // +2%
            if (delta >= 5) return 0.03;     // +3%
            return 0;
        }

        function calculateProgression(amrapReps, target) {
            if (!target) return 0;
            const diff = amrapReps - target;
            return calculateProgressionFromDelta(diff);
        }

        function roundWeight(weight) {
            // Excel MROUND rounds to nearest multiple (kg: 2.5, lbs: 5)
            const rounding = (appData.weightUnit || 'kg') === 'lbs' ? 5 : 2.5;
            return Math.round(weight / rounding) * rounding;
        }


        // Load/save data
        // Weight conversion and display helpers
        const KG_TO_LBS = 2.20462;
        const LBS_TO_KG = 1 / KG_TO_LBS;

        function kgToLbs(kg) {
            return kg * KG_TO_LBS;
        }

        function lbsToKg(lbs) {
            return lbs * LBS_TO_KG;
        }

        function displayWeight(kg) {
            const unit = appData.weightUnit || 'kg';
            if (unit === 'lbs') {
                const lbs = kgToLbs(kg);
                return `${Math.round(lbs * 2) / 2} lbs`; // Round to nearest 0.5 lbs
            }
            return `${kg} kg`;
        }

        function getWeightUnit() {
            return appData.weightUnit || 'kg';
        }

        function getSelectOptions(selectId) {
            const select = document.getElementById(selectId);
            if (!select) return [];
            return Array.from(select.options).map(option => option.value);
        }

        function normalizeAuxiliaryExercises() {
            const defaults = {
                'squat-aux-1': 'Leg Press',
                'squat-aux-2': 'Hack Squat',
                'bench-aux-1': 'Incline Press',
                'bench-aux-2': 'DB Bench',
                'deadlift-aux': 'Romanian Deadlift',
                'ohp-aux': 'DB OHP'
            };

            const stored = appData.auxiliaryExercises || {};

            // Migrate legacy keys to new slots if present.
            if (stored.squat && !stored['squat-aux-1']) stored['squat-aux-1'] = stored.squat;
            if (stored.bench && !stored['bench-aux-1']) stored['bench-aux-1'] = stored.bench;
            if (stored.deadlift && !stored['deadlift-aux']) stored['deadlift-aux'] = stored.deadlift;
            if (stored.ohp && !stored['ohp-aux']) stored['ohp-aux'] = stored.ohp;

            const slotSelectMap = {
                'squat-aux-1': 'settings-squat-aux-1',
                'squat-aux-2': 'settings-squat-aux-2',
                'bench-aux-1': 'settings-bench-aux-1',
                'bench-aux-2': 'settings-bench-aux-2',
                'deadlift-aux': 'settings-deadlift-aux',
                'ohp-aux': 'settings-ohp-aux'
            };

            const normalized = {};
            Object.entries(slotSelectMap).forEach(([slot, selectId]) => {
                const options = getSelectOptions(selectId);
                const candidate = stored[slot] || defaults[slot];
                normalized[slot] = options.includes(candidate) ? candidate : defaults[slot];
            });

            appData.auxiliaryExercises = normalized;
        }

        function isDayComplete(weekNum, dayNum) {
            const completed = appData.completedDays?.[weekNum]?.[dayNum] === true;
            const weekData = appData.workouts?.[weekNum];
            if (!weekData || !weekData[dayNum]) return completed;
            const hasLastSetMetrics = weekData[dayNum].some(ex => getLastSetValue(ex) !== undefined);
            return completed || hasLastSetMetrics;
        }

        function migrateData(data) {
            const migrated = {...data};
            if (!migrated.version) {
                migrated.version = 1;
            }

            if (!migrated.completedDays) migrated.completedDays = {};
            if (!migrated.workouts) migrated.workouts = {};
            if (!migrated.personalRecords) migrated.personalRecords = {};
            if (!migrated.restTimer) {
                migrated.restTimer = { enabled: true, duration: 180, autoStart: false };
            }
            if (!migrated.programType || migrated.programType === 'strength') {
                migrated.programType = 'strength_rtf';
            }
            if (!migrated.plateCalculator) {
                migrated.plateCalculator = {
                    enabled: true,
                    barbellWeight: migrated.weightUnit === 'kg' ? 20 : 45,
                    availablePlates: migrated.weightUnit === 'kg'
                        ? [20, 15, 10, 5, 2.5, 1.25]
                        : [45, 35, 25, 10, 5, 2.5]
                };
            } else {
                // Ensure plate list exists and includes small plates
                const unit = migrated.weightUnit || 'kg';
                if (!Array.isArray(migrated.plateCalculator.availablePlates) || migrated.plateCalculator.availablePlates.length === 0) {
                    migrated.plateCalculator.availablePlates = unit === 'kg'
                        ? [20, 15, 10, 5, 2.5, 1.25]
                        : [45, 35, 25, 10, 5, 2.5];
                } else if (unit === 'kg' && !migrated.plateCalculator.availablePlates.includes(1.25)) {
                    migrated.plateCalculator.availablePlates = [...migrated.plateCalculator.availablePlates, 1.25].sort((a, b) => b - a);
                }
            }
            if (!migrated.oneRepMaxes) {
                migrated.oneRepMaxes = { squat: 100, bench: 100, deadlift: 140, ohp: 50, blockPulls: 147.5 };
            } else if (migrated.oneRepMaxes.blockPulls === undefined || migrated.oneRepMaxes.blockPulls === null) {
                const deadlift = Number(migrated.oneRepMaxes.deadlift) || 0;
                migrated.oneRepMaxes.blockPulls = deadlift ? Math.round(deadlift * 1.05 * 4) / 4 : 147.5;
            }

            migrated.version = DATA_VERSION;
            return migrated;
        }

        function getLastSetValue(exercise) {
            if (exercise.rirValue !== undefined && exercise.rirValue !== null) {
                const value = Number(exercise.rirValue);
                return Number.isFinite(value) ? value : undefined;
            }
            if (exercise.amrapReps !== undefined && exercise.amrapReps !== null) {
                const value = Number(exercise.amrapReps);
                return Number.isFinite(value) ? value : undefined;
            }
            return undefined;
        }

        function setLastSetValue(exercise, value) {
            if (value === null || value === undefined || value === '') {
                exercise.rirValue = undefined;
                exercise.amrapReps = undefined;
                return;
            }
            const numeric = Number(value);
            if (!Number.isFinite(numeric) || numeric < 0) {
                exercise.rirValue = undefined;
                exercise.amrapReps = undefined;
                return;
            }
            if (isRIRProgram()) {
                exercise.rirValue = numeric;
                exercise.amrapReps = undefined;
            } else {
                if (numeric <= 0) {
                    exercise.amrapReps = undefined;
                    exercise.rirValue = undefined;
                } else {
                    exercise.amrapReps = numeric;
                    exercise.rirValue = undefined;
                }
            }
        }

        function ensureDayState(weekNum, dayNum) {
            const weekData = appData.workouts[weekNum];
            if (!weekData || !weekData[dayNum]) return;

            weekData[dayNum].forEach(ex => {
                const hasLastSetMetric = !!ex.target;
                const clickableCount = hasLastSetMetric ? ex.sets - 1 : ex.sets;
                if (!ex.completedSets || ex.completedSets.length !== clickableCount) {
                    ex.completedSets = new Array(clickableCount).fill(false);
                }
            });
        }

        function prepareCurrentDay() {
            ensureDayState(appData.currentWeek, appData.currentDay);
        }

        function setDataStatus(state, message) {
            const pill = document.getElementById('data-status-pill');
            const text = document.getElementById('data-status-text');
            if (!pill || !text) return;

            pill.classList.remove('success', 'warning', 'error');
            let label = 'Ready';
            if (state === 'loading') {
                label = 'Loading';
            } else if (state === 'warning') {
                label = 'Check';
                pill.classList.add('warning');
            } else if (state === 'error') {
                label = 'Error';
                pill.classList.add('error');
            } else {
                label = 'Saved';
                pill.classList.add('success');
            }

            pill.textContent = label;
            text.textContent = message || 'All changes saved';
        }

        function getAppData() {
            return appData;
        }

        function validateStoredData(data) {
            const errors = [];
            const warnings = [];
            if (!data || typeof data !== 'object') {
                errors.push('Backup data is not an object.');
                return { ok: false, errors, warnings };
            }

            if (!data.selectedProgram) errors.push('Missing selected program.');
            if (data.currentWeek === undefined || data.currentWeek === null) errors.push('Missing current week.');
            if (data.workouts && typeof data.workouts !== 'object') errors.push('Workouts data is invalid.');
            if (data.oneRepMaxes && typeof data.oneRepMaxes !== 'object') warnings.push('1RM data missing or invalid.');

            if (data.programType && !['strength_rtf', 'strength_rir', 'hypertrophy', 'strength'].includes(data.programType)) {
                warnings.push('Unknown program type. Defaulting to strength.');
            }

            return { ok: errors.length === 0, errors, warnings };
        }

        async function loadData() {
            setDataStatus('loading', 'Loading saved data');
            let loadedData = null;
            let loadedFrom = '';

            if (window.dataStore && dataStore.isAvailable()) {
                loadedData = await dataStore.getData();
                if (loadedData) {
                    loadedFrom = 'indexeddb';
                }
            }

            if (!loadedData) {
                const saved = localStorage.getItem(DATA_STORAGE_KEY);
                if (saved) {
                    try {
                        loadedData = JSON.parse(saved);
                        loadedFrom = 'localStorage';
                    } catch (error) {
                        console.error('Failed to parse saved data:', error);
                        showToast('Saved data could not be loaded. Using defaults.', 'error', 6000);
                        setDataStatus('error', 'Saved data unreadable');
                    }
                }
            }

            if (loadedData) {
                const validation = validateStoredData(loadedData);
                if (!validation.ok) {
                    console.warn('Stored data validation failed:', validation.errors);
                    showToast('Saved data was invalid. Using defaults.', 'warning', 6000);
                    setDataStatus('warning', 'Saved data invalid, using defaults');
                } else {
                    if (validation.warnings.length) {
                        console.warn('Stored data warnings:', validation.warnings);
                        setDataStatus('warning', 'Saved data repaired');
                    }
                    const data = migrateData(loadedData);
                    appData = {...appData, ...data};
                }

                if (loadedFrom === 'localStorage' && window.dataStore && dataStore.isAvailable()) {
                    dataStore.setData(appData).then((ok) => {
                        if (ok) {
                            setDataStatus('saved', 'Migrated data to local database');
                        }
                    });
                }
            }

            normalizeAuxiliaryExercises();

            // Load current week workout if not in appData
            if (!appData.workouts[appData.currentWeek]) {
                appData.workouts[appData.currentWeek] = getWeekData(appData.currentWeek);
            }
            ensureDayState(appData.currentWeek, appData.currentDay);

            if (document.getElementById('data-status-pill')?.textContent === 'Loading') {
                setDataStatus('saved', 'All changes saved');
            }
        }

        function saveData() {
            try {
                localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(appData));
                setDataStatus('saved', 'All changes saved');
            } catch (error) {
                console.error('Failed to save data:', error);
                showToast('Failed to save data. Storage may be full.', 'error', 5000);
                setDataStatus('error', 'Save failed');
            }

            if (window.dataStore && dataStore.isAvailable()) {
                dataStore.setData(appData).then((ok) => {
                    if (!ok) {
                        setDataStatus('warning', 'Saved locally, database sync failed');
                    }
                });
            }
        }

        function loadHevyState() {
            const saved = localStorage.getItem(HEVY_STORAGE_KEY);
            if (saved) {
                try {
                    const data = JSON.parse(saved);
                    hevyState = {...hevyState, ...data};
                } catch (error) {
                    console.warn('Failed to parse Hevy settings:', error);
                }
            }
            hevyState.nameOverrides = {
                ...DEFAULT_HEVY_NAME_OVERRIDES,
                ...(hevyState.nameOverrides || {})
            };
            updateHevySettingsUI();
        }

        function saveHevyState() {
            try {
                localStorage.setItem(HEVY_STORAGE_KEY, JSON.stringify(hevyState));
            } catch (error) {
                console.error('Failed to save Hevy settings:', error);
                showToast('Failed to save Hevy settings.', 'error', 4000);
            }
        }

        function updateHevySettingsUI() {
            const apiKeyInput = document.getElementById('hevy-api-key');
            const durationInput = document.getElementById('hevy-duration');
            const privacySelect = document.getElementById('hevy-privacy');
            const overridesInput = document.getElementById('hevy-name-overrides');
            const statusEl = document.getElementById('hevy-sync-status');

            if (apiKeyInput) apiKeyInput.value = hevyState.apiKey || '';
            if (durationInput) durationInput.value = hevyState.defaultDurationMinutes || 60;
            if (privacySelect) privacySelect.value = hevyState.isPrivate ? 'private' : 'public';
            if (overridesInput) {
                overridesInput.value = JSON.stringify(hevyState.nameOverrides || {}, null, 2);
            }
            if (statusEl) {
                const lastSync = hevyState.templatesLastSync
                    ? new Date(hevyState.templatesLastSync).toLocaleString()
                    : 'Not synced yet';
                statusEl.textContent = `Templates: ${Object.keys(hevyState.templatesByName || {}).length} loaded. Last sync: ${lastSync}.`;
            }
        }

        function getWeekData(weekNum) {
            // Get week data based on program type
            const programSource = isHypertrophyProgram()
                ? (typeof HYPERTROPHY_PROGRAM_WEEKS !== 'undefined' ? HYPERTROPHY_PROGRAM_WEEKS : null)
                : (appData.programType === 'strength_rir'
                    ? (typeof STRENGTH_RIR_PROGRAM_WEEKS !== 'undefined' ? STRENGTH_RIR_PROGRAM_WEEKS : null)
                    : ALL_PROGRAMS);

            if (!programSource) {
                showToast('Program data not loaded yet. Please refresh.', 'error', 5000);
                return {1: []};
            }

            const programData = programSource[appData.selectedProgram];
            if (!programData) {
                showToast(`Program ${appData.selectedProgram} not found.`, 'error', 5000);
                return {1: []};
            }

            const weekData = programData[weekNum.toString()];
            if (!weekData) {
                showToast(`Week ${weekNum} data not found for ${appData.selectedProgram}.`, 'error', 5000);
                return {1: []};
            }

            // Deep copy to avoid modifying the source data
            const copiedData = JSON.parse(JSON.stringify(weekData));

            // Apply user's auxiliary exercise selections
            const adjustedData = applyAuxiliaryExercises(copiedData);

            // Recalculate weights based on user's 1RMs and program intensities
            return applyTrainingMaxWeights(adjustedData, weekNum);
        }

        function buildAuxiliaryTrainingMaxes(isHypertrophy) {
            return {
                // Squat auxiliaries - template defaults (multiplier differs by program)
                'Leg Press': appData.oneRepMaxes.squat * (isHypertrophy ? 0.857 : (250 / 110)),
                'Hack Squat': appData.oneRepMaxes.squat * (isHypertrophy ? 0.939 : 1.10),
                // Squat auxiliaries - user-selectable options (% of squat 1RM)
                'Front Squat': appData.oneRepMaxes.squat * 0.85,
                'Paused Squat': appData.oneRepMaxes.squat * 0.88,
                'High Bar Squat': appData.oneRepMaxes.squat * 0.98,
                'Beltless Squat': appData.oneRepMaxes.squat * 0.90,
                'Wider Stance Squat': appData.oneRepMaxes.squat * 0.95,
                'Narrower Stance Squat': appData.oneRepMaxes.squat * 0.95,
                'Box Squat': appData.oneRepMaxes.squat * 0.90,
                'Pin Squat': appData.oneRepMaxes.squat * 0.85,
                'Half Squat': appData.oneRepMaxes.squat * 1.15,
                'Good Morning': appData.oneRepMaxes.squat * 0.50,
                'Squat With Slow Eccentric': appData.oneRepMaxes.squat * 0.85,
                'Bulgarian Split Squat': appData.oneRepMaxes.squat * 0.55,
                'Lunges': appData.oneRepMaxes.squat * 0.50,

                // Bench auxiliaries - template defaults
                'Incline Press': appData.oneRepMaxes.bench * (isHypertrophy ? 0.954 : (92 / 105)),
                'DB Bench': appData.oneRepMaxes.bench * (isHypertrophy ? 0.862 : (30 / 105)),
                // Bench auxiliaries - user-selectable options (% of bench 1RM)
                'Close Grip Bench': appData.oneRepMaxes.bench * 0.88,
                'Long Pause Bench': appData.oneRepMaxes.bench * 0.88,
                'Spoto Press': appData.oneRepMaxes.bench * 0.85,
                'Wider Grip Bench': appData.oneRepMaxes.bench * 0.95,
                'Board Press': appData.oneRepMaxes.bench * 1.05,
                'Pin Press': appData.oneRepMaxes.bench * 0.85,
                'Slingshot Bench': appData.oneRepMaxes.bench * 1.10,
                'Bench With Feet Up': appData.oneRepMaxes.bench * 0.85,
                'Bench With Slow Eccentric': appData.oneRepMaxes.bench * 0.85,

                // Deadlift auxiliaries - template defaults
                'Romanian Deadlift': appData.oneRepMaxes.deadlift * (isHypertrophy ? 0.952 : (120 / 140)),
                // Deadlift auxiliaries - user-selectable options (% of deadlift 1RM)
                'Sumo Deadlift': appData.oneRepMaxes.deadlift * 0.95,
                'Conventional Deadlift': appData.oneRepMaxes.deadlift * 1.00,
                'Block Pull': appData.oneRepMaxes.deadlift * 1.05,
                'Block Pulls': appData.oneRepMaxes.deadlift * 1.05,
                'Rack Pull': appData.oneRepMaxes.deadlift * 1.10,
                'Deficit Deadlift': appData.oneRepMaxes.deadlift * 0.85,
                'Stiff Leg Deadlift': appData.oneRepMaxes.deadlift * 0.75,
                'Snatch Grip Deadlift': appData.oneRepMaxes.deadlift * 0.80,
                'Trap Bar Deadlift': appData.oneRepMaxes.deadlift * 1.05,
                'Paused Deadlift': appData.oneRepMaxes.deadlift * 0.88,

                // OHP auxiliaries - template defaults
                'DB OHP': appData.oneRepMaxes.ohp * (isHypertrophy ? 1.225 : (30 / 50)),
                // OHP auxiliaries - user-selectable options (% of OHP 1RM)
                'Push Press': appData.oneRepMaxes.ohp * 1.15,
                'Behind The Neck OHP': appData.oneRepMaxes.ohp * 0.85,
                'Seated OHP': appData.oneRepMaxes.ohp * 0.95
            };
        }

        function getTrainingMaxForExercise(exerciseName) {
            if (!exerciseName) return null;
            const name = String(exerciseName).trim();
            const isHypertrophy = isHypertrophyProgram();
            const auxiliary1RMs = buildAuxiliaryTrainingMaxes(isHypertrophy);

            const mainLiftMap = {
                'Squat': appData.oneRepMaxes.squat,
                'Bench Press': appData.oneRepMaxes.bench,
                'Deadlift': appData.oneRepMaxes.deadlift,
                'OHP': appData.oneRepMaxes.ohp,
                // Hypertrophy main lift variant
                'Block Pulls': appData.oneRepMaxes.blockPulls
            };

            return mainLiftMap[name] || auxiliary1RMs[name] || null;
        }

        function applyTrainingMaxWeights(weekData, weekNum) {
            for (let day in weekData) {
                const exercises = weekData[day];
                exercises.forEach(ex => {
                    const intensity = getIntensityForExercise(ex.name, weekNum);
                    const trainingMax = getTrainingMaxForExercise(ex.name);
                    if (intensity && trainingMax) {
                        ex.weight = roundWeight(trainingMax * intensity);
                    }
                });
            }
            return weekData;
        }

        function applyAuxiliaryExercises(weekData) {
            // Define which exercises are main lifts (these should never be replaced)
            const mainLifts = ['Squat', 'Bench Press', 'Deadlift', 'OHP', 'Block Pulls'];

            // Map default exercise names to their auxiliary category
            // Based on SBS Hypertrophy Template defaults
            const defaultAuxiliaryMap = {
                'Leg Press': 'squat-aux-1',
                'Hack Squat': 'squat-aux-2',
                'Incline Press': 'bench-aux-1',
                'DB Bench': 'bench-aux-2',
                'Romanian Deadlift': 'deadlift-aux',
                'DB OHP': 'ohp-aux'
            };

            // Define 1RM values for auxiliary exercises - all relative to user's main lift 1RMs.
            // Template default exercises use multipliers derived from their respective Excel templates.
            // Strength: Squat=100, Bench=100, Deadlift=140, OHP=50, LegPress=190, Incline=90, RDL=100, DBOHP=25
            // Hypertrophy: Squat=490, Bench=325, BlockPulls=525, OHP=200, LegPress=420, HackSquat=460, Incline=310, DBBench=280, RDL=500, DBOHP=245
            const isHypertrophy = isHypertrophyProgram();
            const auxiliary1RMs = buildAuxiliaryTrainingMaxes(isHypertrophy);

            // Process each day in the week
            for (let day in weekData) {
                const exercises = weekData[day];

                // Replace auxiliary exercises based on default name mapping
                exercises.forEach(ex => {
                    if (!mainLifts.includes(ex.name)) {
                        // Store the original exercise name for weight calculation
                        const originalExerciseName = ex.name;

                        // Check if this is a default auxiliary exercise
                        const auxCategory = defaultAuxiliaryMap[ex.name];

                        // Apply the replacement if we have user preferences for this category
                        if (auxCategory && appData.auxiliaryExercises && appData.auxiliaryExercises[auxCategory]) {
                            const newExerciseName = appData.auxiliaryExercises[auxCategory];
                            // Only replace if we can compute an auxiliary 1RM for the choice.
                            if (!auxiliary1RMs[newExerciseName]) {
                                return;
                            }

                            ex.name = newExerciseName;
                        }
                        // Also check old format for backwards compatibility
                        else if (appData.auxiliaryExercises) {
                            // Map old categories to new for backwards compatibility
                            const oldCategoryMap = {
                                'Romanian Deadlift': 'deadlift',
                                'Leg Press': 'squat',
                                'Hack Squat': 'squat',
                                'Incline Press': 'bench',
                                'DB Bench': 'bench',
                                'DB OHP': 'ohp'
                            };

                            const oldCategory = oldCategoryMap[ex.name];
                            if (oldCategory && appData.auxiliaryExercises[oldCategory]) {
                                const newExerciseName = appData.auxiliaryExercises[oldCategory];
                                // Skip invalid legacy choices so the default stays intact.
                                if (!auxiliary1RMs[newExerciseName]) {
                                    return;
                                }

                                ex.name = newExerciseName;
                            }
                        }
                    }
                });
            }

            return weekData;
        }

        function getNumDays() {
            // Return number of days based on selected program
            const numDaysMap = {'2x': 2, '3x': 3, '4x': 4, '5x': 5};
            return numDaysMap[appData.selectedProgram] || 3;
        }

        function hasCompletedWorkouts(weekNum) {
            // Check if a week has any completed workouts (AMRAP data or completed days)
            if (!appData.workouts[weekNum]) {
                return false;
            }

            const weekData = appData.workouts[weekNum];

            for (let day = 1; day <= getNumDays(); day++) {
                if (weekData[day] && isDayComplete(weekNum, day)) {
                    return true;
                }
            }

            return false;
        }

        // Theme Toggle Function
        function toggleTheme() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Update icon
            const icon = document.getElementById('theme-icon');
            if (icon) {
                icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
            }

            // Update PWA theme color
            const metaThemeColor = document.querySelector('meta[name="theme-color"]');
            if (newTheme === 'dark') {
                metaThemeColor.setAttribute('content', '#0f0f0f');
            } else {
                metaThemeColor.setAttribute('content', '#1e40af');
            }
        }

        // Load saved theme on page load
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = savedTheme === 'system' ? (prefersDark ? 'dark' : 'light') : savedTheme;

            document.documentElement.setAttribute('data-theme', theme);

            // Update icon
            const icon = document.getElementById('theme-icon');
            if (icon) {
                icon.textContent = theme === 'dark' ? '☀️' : '🌙';
            }

            // Update PWA theme color
            const metaThemeColor = document.querySelector('meta[name="theme-color"]');
            if (theme === 'dark') {
                metaThemeColor.setAttribute('content', '#0f0f0f');
            } else {
                metaThemeColor.setAttribute('content', '#1e40af');
            }
        }

        // UI Functions
        function switchTab(tabName) {
            // Update top tabs
            document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            // Update bottom nav
            document.querySelectorAll('.bottom-nav-item').forEach(item => item.classList.remove('active'));

            // Find and activate the clicked tab (top)
            const clickedTab = Array.from(document.querySelectorAll('.nav-tab')).find(
                tab => tab.textContent.toLowerCase().includes(tabName.toLowerCase())
            );
            if (clickedTab) {
                clickedTab.classList.add('active');
            }

            // Find and activate the bottom nav item
            const clickedBottomNavItem = document.querySelector(`.bottom-nav-item[data-tab="${tabName}"]`);
            if (clickedBottomNavItem) {
                clickedBottomNavItem.classList.add('active');
            }

            // Show the tab content
            document.getElementById(`${tabName}-tab`).classList.add('active');

            if (tabName === 'history') {
                renderHistory();
            } else if (tabName === 'settings') {
                loadAuxiliarySettings();
            } else if (tabName === 'progress') {
                renderProgress();
            }
        }

        function renderDaySelector() {
            const container = document.getElementById('day-selector');
            const numDays = getNumDays();

            let html = '';
            for (let day = 1; day <= numDays; day++) {
                const activeClass = day === appData.currentDay ? 'active' : '';
                html += `<button class="day-btn ${activeClass}" onclick="selectDay(${day})">Day ${day}</button>`;
            }
            container.innerHTML = html;
        }

        function selectDay(day) {
            appData.currentDay = day;
            ensureDayState(appData.currentWeek, appData.currentDay);
            updateDayButtons();
            renderWorkout();
        }

        function updateDayButtons() {
            document.querySelectorAll('.day-btn').forEach((btn, idx) => {
                const dayNum = idx + 1;
                btn.classList.toggle('active', dayNum === appData.currentDay);
                btn.classList.toggle('completed', isDayComplete(appData.currentWeek, dayNum));
            });
        }

        function renderWorkout() {
            const container = document.getElementById('workout-container');
            const weekData = appData.workouts[appData.currentWeek];
            const exercises = weekData[appData.currentDay];

            const usesRIR = isRIRProgram();
            const inputLabel = usesRIR ? 'Log Last Set RIR:' : 'Log AMRAP Reps:';
            const helperText = usesRIR
                ? 'RIR is required to track progression.'
                : 'AMRAP is required to track progress and PRs.';
            const targetLabel = usesRIR ? 'Target (RIR)' : 'Target (AMRAP)';

            // Initialize personalRecords if it doesn't exist (for backward compatibility)
            if (!appData.personalRecords) {
                appData.personalRecords = {};
            }

            container.innerHTML = exercises.map((ex, idx) => {
                const currentPR = appData.personalRecords[ex.name];
                const hasPR = !usesRIR && currentPR !== undefined;
                const lastSetValue = getLastSetValue(ex);

                // Calculate reps needed to beat PR
                let prBeatText = '';
                if (hasPR && ex.target) {
                    const repsNeededToBeatPR = calculateRepsNeededToBeatPR(ex.weight, currentPR.estimated1RM);
                    if (repsNeededToBeatPR > 0) {
                        prBeatText = `<div class="pr-beat-hint" id="pr-beat-${appData.currentDay}-${idx}">🎯 Beat PR: Need ${repsNeededToBeatPR}+ reps</div>`;
                    }
                }

                return `
                <div class="exercise-card card reveal">
                    <div class="exercise-name">
                        ${ex.name}
                        ${hasPR ? `<span class="pr-badge">PR: ${Math.round(currentPR.estimated1RM)} ${getWeightUnit()}</span>` : ''}
                    </div>
                    <div class="exercise-details">
                        <div>
                            <div class="detail-label">Weight</div>
                            <div class="detail-value">${ex.weight} ${getWeightUnit()}</div>
                        </div>
                        <div>
                            <div class="detail-label">Reps per Set</div>
                            <div class="detail-value">${ex.reps}</div>
                        </div>
                        <div>
                            <div class="detail-label">${targetLabel}</div>
                            <div class="detail-value">${ex.target || 'N/A'}</div>
                        </div>
                        <div>
                            <div class="detail-label">Total Sets</div>
                            <div class="detail-value">${ex.sets}</div>
                        </div>
                    </div>
                    ${renderSetCircles(ex, appData.currentDay, idx)}
                    <div class="set-actions">
                        <button class="set-action-btn" onclick="completeAllSets(${appData.currentDay}, ${idx})">Complete sets</button>
                        <button class="set-action-btn" onclick="resetSets(${appData.currentDay}, ${idx})">Reset sets</button>
                    </div>
                    ${renderPlateDisplay(ex.weight)}
                    ${ex.target ? `
                    <div class="amrap-input">
                        <label>${inputLabel}</label>
                        <div class="stepper-control">
                            <button class="stepper-btn" onclick="adjustAmrap(${appData.currentDay}, ${idx}, -1)" ${lastSetValue === undefined || lastSetValue <= 0 ? 'disabled' : ''}>−</button>
                            <input type="number"
                                   class="stepper-value ${lastSetValue === undefined ? 'empty' : ''}"
                                   id="amrap-${appData.currentDay}-${idx}"
                                   value="${lastSetValue !== undefined ? lastSetValue : ''}"
                                   placeholder="?"
                                   min="0"
                                   inputmode="numeric"
                                   onchange="updateAmrapDirect(${appData.currentDay}, ${idx}, this.value)"
                                   onblur="updateAmrapDirect(${appData.currentDay}, ${idx}, this.value)">
                            <button class="stepper-btn" onclick="adjustAmrap(${appData.currentDay}, ${idx}, 1)">+</button>
                        </div>
                    </div>
                    <div class="amrap-helper">${helperText}</div>
                    ${prBeatText}
                    <div class="progression-hint" id="hint-${appData.currentDay}-${idx}"></div>
                    ` : '<div class="note note-muted">Deload week - no last set metric</div>'}
                </div>
            `;
            }).join('');

            // Update hints
            exercises.forEach((ex, idx) => {
                if (getLastSetValue(ex) !== undefined && ex.target) {
                    updateProgressionHint(appData.currentDay, idx);
                }
                // Update PR beat hint for exercises with existing PRs
                if (!usesRIR && ex.target && appData.personalRecords[ex.name]) {
                    updatePRBeatHint(appData.currentDay, idx);
                }
            });

            // Update week displays
            document.getElementById('current-week').textContent = appData.currentWeek;
            document.getElementById('workout-week-display').textContent = appData.currentWeek;
            const programTypeLabel = isHypertrophyProgram()
                ? 'Hypertrophy'
                : (isRIRProgram() ? 'Strength (RIR)' : 'Strength (RTF)');
            const programVariantLabel = appData.selectedProgram || '3x';
            document.getElementById('program-type-display').textContent = programTypeLabel;
            document.getElementById('program-variant-display').textContent = programVariantLabel;

            // Render day selector
            renderDaySelector();
            updateDayButtons();
            updateNavigationButtons();
            updateMarkDayButton();

            const hint = document.getElementById('workout-onboarding');
            if (hint) {
                const hasLogged = exercises.some(ex => {
                    const completed = Array.isArray(ex.completedSets) && ex.completedSets.some(Boolean);
                    const hasLastSet = getLastSetValue(ex) !== undefined;
                    return completed || hasLastSet;
                });
                hint.classList.toggle('hidden', hasLogged);
            }
        }

        // Haptic Feedback Utility
        function hapticFeedback(pattern = 'light') {
            if (!navigator.vibrate) return; // Check if vibration API is supported

            const patterns = {
                'light': 10,           // Quick tap for buttons
                'medium': 20,          // Slightly longer for confirmations
                'success': [10, 50, 10, 50, 10],  // Success pattern
                'error': [100, 50, 100]  // Error pattern
            };

            navigator.vibrate(patterns[pattern] || patterns.light);
        }

        // Toast Notification System
        function showToast(message, type = 'info', duration = 3000) {
            const container = document.getElementById('toast-container');
            if (!container) return;

            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;

            const messageEl = document.createElement('div');
            messageEl.className = 'toast-message';
            messageEl.textContent = message;

            const closeBtn = document.createElement('button');
            closeBtn.className = 'toast-close';
            closeBtn.innerHTML = '×';
            closeBtn.onclick = () => removeToast(toast);

            toast.appendChild(messageEl);
            toast.appendChild(closeBtn);
            container.appendChild(toast);

            // Auto-remove after duration
            setTimeout(() => removeToast(toast), duration);

            // Haptic feedback for errors
            if (type === 'error') {
                hapticFeedback('error');
            }
        }

        function showUpdateToast(message, onAction, actionLabel = 'Update', duration = 10000) {
            const container = document.getElementById('toast-container');
            if (!container) return;

            const toast = document.createElement('div');
            toast.className = 'toast toast-info';

            const messageEl = document.createElement('div');
            messageEl.className = 'toast-message';
            messageEl.textContent = message;

            const actionBtn = document.createElement('button');
            actionBtn.className = 'toast-action';
            actionBtn.textContent = actionLabel;
            actionBtn.onclick = () => {
                if (onAction) onAction();
                removeToast(toast);
            };

            const closeBtn = document.createElement('button');
            closeBtn.className = 'toast-close';
            closeBtn.innerHTML = '×';
            closeBtn.onclick = () => removeToast(toast);

            toast.appendChild(messageEl);
            toast.appendChild(actionBtn);
            toast.appendChild(closeBtn);
            container.appendChild(toast);

            setTimeout(() => removeToast(toast), duration);
        }

        function removeToast(toast) {
            if (!toast || !toast.parentNode) return;
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }

        // Debounce timer for PR notifications
        let prDebounceTimer = null;
        let pendingPR = null;

        function toggleSetComplete(day, exIdx, setIdx) {
            hapticFeedback('light');
            const ex = appData.workouts[appData.currentWeek][day][exIdx];
            if (!ex.completedSets) {
                const hasLastSetMetric = !!ex.target;
                ex.completedSets = new Array(hasLastSetMetric ? ex.sets - 1 : ex.sets).fill(false);
            }
            ex.completedSets[setIdx] = !ex.completedSets[setIdx];
            // Update circle directly
            const circle = document.querySelector(`[data-set="${day}-${exIdx}-${setIdx}"]`);
            if (circle) {
                circle.classList.toggle('completed', ex.completedSets[setIdx]);
            }
            saveData();
        }

        function completeAllSets(day, exIdx) {
            const ex = appData.workouts[appData.currentWeek][day][exIdx];
            const hasLastSetMetric = !!ex.target;
            const clickableCount = hasLastSetMetric ? ex.sets - 1 : ex.sets;
            ex.completedSets = new Array(clickableCount).fill(true);
            saveData();
            renderWorkout();
        }

        function resetSets(day, exIdx) {
            const ex = appData.workouts[appData.currentWeek][day][exIdx];
            const hasLastSetMetric = !!ex.target;
            const clickableCount = hasLastSetMetric ? ex.sets - 1 : ex.sets;
            ex.completedSets = new Array(clickableCount).fill(false);
            saveData();
            renderWorkout();
        }

        function adjustAmrap(day, exIdx, delta) {
            // Haptic feedback on button press
            hapticFeedback('light');

            const ex = appData.workouts[appData.currentWeek][day][exIdx];
            const currentValue = getLastSetValue(ex) || 0;
            const newValue = Math.max(0, currentValue + delta);
            const usesRIR = isRIRProgram();

            updateAmrap(day, exIdx, newValue);

            // Re-render to update button states
            const valueEl = document.getElementById(`amrap-${day}-${exIdx}`);
            if (valueEl) {
                const stepper = valueEl.closest('.stepper-control');
                if (stepper) {
                    const decBtn = stepper.querySelector('.stepper-btn');
                    if (decBtn) {
                        decBtn.disabled = newValue <= 0;
                    }
                }
                if (!usesRIR && newValue <= 0) {
                    valueEl.value = '';
                    valueEl.classList.add('empty');
                } else {
                    valueEl.value = newValue;
                    valueEl.classList.remove('empty');
                }
            }
        }

        // Direct input handler for tapping/typing reps
        function updateAmrapDirect(day, exIdx, value) {
            const inputEl = document.getElementById(`amrap-${day}-${exIdx}`);
            if (value === '') {
                updateAmrap(day, exIdx, null);
                if (inputEl) inputEl.classList.add('empty');
                return;
            }
            const reps = parseInt(value);
            if (!isNaN(reps) && reps >= 0) {
                updateAmrap(day, exIdx, reps);
                if (inputEl) inputEl.classList.toggle('empty', !isRIRProgram() && reps <= 0);
                if (inputEl) {
                    const stepper = inputEl.closest('.stepper-control');
                    if (stepper) {
                        const decBtn = stepper.querySelector('.stepper-btn');
                        if (decBtn) {
                            decBtn.disabled = reps <= 0;
                        }
                    }
                }
            }
        }

        function updateAmrap(day, exIdx, value) {
            const ex = appData.workouts[appData.currentWeek][day][exIdx];
            if (value === null || value === undefined || value === '') {
                setLastSetValue(ex, undefined);
            } else {
                const reps = parseInt(value);
                if (!isNaN(reps)) {
                    setLastSetValue(ex, reps);
                }
            }

            const lastSetValue = getLastSetValue(ex);
            const usesRIR = isRIRProgram();

            // Update AMRAP circle
            const amrapCircle = document.querySelector(`[data-set="${day}-${exIdx}-amrap"]`);
            if (amrapCircle) {
                const hasValue = lastSetValue !== undefined && (usesRIR ? lastSetValue >= 0 : lastSetValue > 0);
                amrapCircle.classList.toggle('has-value', hasValue);
                const valueEl = amrapCircle.querySelector('.amrap-value');
                if (valueEl) valueEl.textContent = hasValue ? lastSetValue : '?';
            }

            // Check for PR (but don't show notification yet)
            const isPR = checkAndUpdatePR(ex, appData.currentWeek);

            saveData();
            updateProgressionHint(day, exIdx);
            updatePRBeatHint(day, exIdx); // Update PR beat indicator

            // Debounce PR notification - wait 2 seconds after last change
            if (isPR) {
                pendingPR = ex;
                clearTimeout(prDebounceTimer);
                prDebounceTimer = setTimeout(() => {
                    if (pendingPR) {
                        showPRNotification(pendingPR);
                        pendingPR = null;
                    }
                }, 2000); // Wait 2 seconds after last change
            }

            // Auto-start rest timer if enabled
            if (appData.restTimer && appData.restTimer.enabled && appData.restTimer.autoStart) {
                showRestTimer();
                startTimer();
            }
        }

        function calculateEstimated1RM(weight, reps) {
            // Epley formula: weight × (1 + reps/30)
            return weight * (1 + reps / 30);
        }

        function calculateRepsNeededToBeatPR(weight, currentPR1RM) {
            // Inverse Epley formula to find reps needed to achieve target 1RM
            // currentPR1RM = weight × (1 + reps/30)
            // reps = 30 × (currentPR1RM/weight - 1)
            const repsToMatchPR = 30 * (currentPR1RM / weight - 1);
            // Need to beat it, so add 1 rep
            return Math.max(1, Math.ceil(repsToMatchPR) + 1);
        }

        function updatePRBeatHint(day, exIdx) {
            if (isRIRProgram()) return;
            const ex = appData.workouts[appData.currentWeek][day][exIdx];
            const currentPR = appData.personalRecords[ex.name];
            const hintEl = document.getElementById(`pr-beat-${day}-${exIdx}`);

            if (!hintEl || !currentPR) return;

            if (ex.amrapReps === undefined || ex.amrapReps === 0) {
                // No reps entered yet
                const repsNeeded = calculateRepsNeededToBeatPR(ex.weight, currentPR.estimated1RM);
                hintEl.textContent = `🎯 Beat PR: Need ${repsNeeded}+ reps`;
                hintEl.className = 'pr-beat-hint';
            } else {
                // Reps entered - check if beating PR
                const currentEst1RM = calculateEstimated1RM(ex.weight, ex.amrapReps);
                if (currentEst1RM > currentPR.estimated1RM) {
                    const improvement = Math.round(currentEst1RM - currentPR.estimated1RM);
                    hintEl.textContent = `🎉 NEW PR! +${improvement} ${getWeightUnit()} on estimated 1RM!`;
                    hintEl.className = 'pr-beat-hint beating';
                } else {
                    const repsNeeded = calculateRepsNeededToBeatPR(ex.weight, currentPR.estimated1RM);
                    const repsShort = repsNeeded - ex.amrapReps;
                    if (repsShort === 1) {
                        hintEl.textContent = `💪 Just 1 more rep to beat PR!`;
                    } else {
                        hintEl.textContent = `🎯 ${repsShort} more reps to beat PR`;
                    }
                    hintEl.className = 'pr-beat-hint';
                }
            }
        }

        function checkAndUpdatePR(exercise, weekNum) {
            if (isRIRProgram()) return false;
            // Only check PR if AMRAP reps are recorded
            if (exercise.amrapReps === undefined) return false;

            const exerciseName = exercise.name;
            const estimated1RM = calculateEstimated1RM(exercise.weight, exercise.amrapReps);

            // Initialize personalRecords if it doesn't exist (for backward compatibility)
            if (!appData.personalRecords) {
                appData.personalRecords = {};
            }

            const currentPR = appData.personalRecords[exerciseName];
            const isPR = !currentPR || estimated1RM > currentPR.estimated1RM;

            if (isPR) {
                appData.personalRecords[exerciseName] = {
                    estimated1RM: Math.round(estimated1RM * 10) / 10,
                    weight: exercise.weight,
                    reps: exercise.amrapReps,
                    date: new Date().toISOString(),
                    week: weekNum
                };
                return true;
            }

            return false;
        }

        function showPRNotification(exercise) {
            hapticFeedback('success');
            const estimated1RM = calculateEstimated1RM(exercise.weight, exercise.amrapReps);
            showToast(`New PR: ${exercise.name} · e1RM ${Math.round(estimated1RM)} ${getWeightUnit()}`, 'success', 6000);
        }

        // Rest Timer Functions
        function showRestTimer() {
            // Initialize rest timer settings if not present
            if (!appData.restTimer) {
                appData.restTimer = {
                    enabled: true,
                    duration: 180,
                    autoStart: false
                };
            }

            document.getElementById('rest-timer').style.display = 'block';
            timerState.remaining = appData.restTimer.duration;
            updateTimerDisplay();
        }

        function closeTimer() {
            stopTimerInterval();
            document.getElementById('rest-timer').style.display = 'none';
            timerState.active = false;
            timerState.paused = false;
            timerState.remaining = appData.restTimer.duration;
        }

        function startTimer() {
            if (!timerState.active || timerState.paused) {
                timerState.active = true;
                timerState.paused = false;

                // Update button visibility
                document.getElementById('start-timer-btn').style.display = 'none';
                document.getElementById('pause-timer-btn').style.display = 'inline-block';

                // Start countdown
                timerState.interval = setInterval(() => {
                    timerState.remaining--;
                    updateTimerDisplay();

                    if (timerState.remaining <= 0) {
                        timerComplete();
                    }
                }, 1000);
            }
        }

        function pauseTimer() {
            if (timerState.active && !timerState.paused) {
                timerState.paused = true;
                stopTimerInterval();

                // Update button visibility
                document.getElementById('start-timer-btn').style.display = 'inline-block';
                document.getElementById('pause-timer-btn').style.display = 'none';
            }
        }

        function resetTimer() {
            stopTimerInterval();
            timerState.active = false;
            timerState.paused = false;
            timerState.remaining = appData.restTimer.duration;
            updateTimerDisplay();

            // Update button visibility
            document.getElementById('start-timer-btn').style.display = 'inline-block';
            document.getElementById('pause-timer-btn').style.display = 'none';
        }

        function stopTimerInterval() {
            if (timerState.interval) {
                clearInterval(timerState.interval);
                timerState.interval = null;
            }
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(timerState.remaining / 60);
            const seconds = timerState.remaining % 60;
            const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            document.getElementById('timer-display').textContent = display;
        }

        function timerComplete() {
            stopTimerInterval();
            timerState.active = false;
            document.getElementById('timer-display').textContent = 'DONE!';

            // Play audio notification
            playTimerSound();

            showToast('Rest period complete! Ready for your next set.', 'success', 5000);

            // Update button visibility
            document.getElementById('start-timer-btn').style.display = 'inline-block';
            document.getElementById('pause-timer-btn').style.display = 'none';
        }

        function playTimerSound() {
            // Create a simple beep sound using Web Audio API
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.frequency.value = 800;
                oscillator.type = 'sine';

                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.5);
            } catch (e) {
                console.log('Audio not supported');
            }
        }

        function updateProgressionHint(day, exIdx) {
            const ex = appData.workouts[appData.currentWeek][day][exIdx];
            const hint = document.getElementById(`hint-${day}-${exIdx}`);

            if (!hint || !ex.target) return;

            const usesRIR = isRIRProgram();
            const lastSetValue = getLastSetValue(ex);
            if (lastSetValue === undefined) return;

            const diff = lastSetValue - ex.target;
            const delta = usesRIR ? (ex.target - lastSetValue) : (lastSetValue - ex.target);
            const progression = calculateProgressionFromDelta(delta);

            // Calculate next week's weight using TM-based progression
            const currentWeek = appData.currentWeek;
            const nextWeek = currentWeek + 1;
            const currentIntensity = getIntensityForExercise(ex.name, currentWeek) || 0.75;
            const nextIntensity = getIntensityForExercise(ex.name, nextWeek) || 0.80;

            // TM = current_weight / current_intensity
            const trainingMax = ex.weight / currentIntensity;
            // Apply AMRAP progression to TM
            const newTrainingMax = trainingMax * (1 + progression);
            // Next week working weight = newTM * next_intensity
            const nextWeight = roundWeight(newTrainingMax * nextIntensity);
            const change = nextWeight - ex.weight;

            if (diff < 0) {
                hint.className = 'progression-hint progression-positive';
                const absDiff = Math.abs(diff);
                hint.textContent = usesRIR
                    ? `${absDiff} RIR below target! Next week: ~${nextWeight} ${getWeightUnit()} (+${change} ${getWeightUnit()})`
                    : `+${absDiff} from target! Next week: ~${nextWeight} ${getWeightUnit()} (+${change} ${getWeightUnit()})`;
            } else if (diff > 0) {
                hint.className = 'progression-hint progression-negative';
                hint.textContent = usesRIR
                    ? `${diff} RIR above target. Next week: ~${nextWeight} ${getWeightUnit()} (${change >= 0 ? '+' : ''}${change} ${getWeightUnit()})`
                    : `${diff} from target. Next week: ~${nextWeight} ${getWeightUnit()} (${change >= 0 ? '+' : ''}${change} ${getWeightUnit()})`;
            } else {
                hint.className = 'progression-hint';
                hint.textContent = usesRIR
                    ? `Target RIR hit! Next week: ~${nextWeight} ${getWeightUnit()}`
                    : `Target hit! Next week: ~${nextWeight} ${getWeightUnit()}`;
            }
        }

        function markDayComplete() {
            // Haptic feedback for completion
            hapticFeedback('success');

            const currentDay = appData.currentDay;
            const currentWeek = appData.currentWeek;
            const dayExercises = appData.workouts[currentWeek]?.[currentDay] || [];
            const missingAmraps = dayExercises.filter(ex => ex.target && getLastSetValue(ex) === undefined);

            if (missingAmraps.length > 0) {
                showUpdateToast(
                    `${isRIRProgram() ? 'RIR' : 'AMRAP'} missing for ${missingAmraps.length} exercise${missingAmraps.length > 1 ? 's' : ''}.`,
                    () => finalizeDayComplete(currentWeek, currentDay),
                    'Complete anyway',
                    8000
                );
                return;
            }

            finalizeDayComplete(currentWeek, currentDay);
        }

        function finalizeDayComplete(currentWeek, currentDay) {
            const numDays = getNumDays();

            // Initialize completedDays for this week if not exists
            if (!appData.completedDays[currentWeek]) {
                appData.completedDays[currentWeek] = {};
            }

            // Mark current day as complete
            appData.completedDays[currentWeek][currentDay] = true;

            // Check if all days are complete
            const allDaysComplete = Array.from({length: numDays}, (_, i) => i + 1)
                .every(day => appData.completedDays[currentWeek][day] === true);

            saveData();
            updateDayButtons();

            if (allDaysComplete) {
                // All days complete - offer to move to next week
                if (confirm(`All days complete! Move to Week ${currentWeek + 1}?`)) {
                    advanceWeekWithProgression();
                } else {
                    showToast(`Day ${currentDay} marked complete!`, 'success');
                }
            } else {
                // Move to next incomplete day
                let nextDay = currentDay;
                for (let i = 1; i <= numDays; i++) {
                    if (!appData.completedDays[currentWeek][i]) {
                        nextDay = i;
                        break;
                    }
                }
                if (nextDay !== currentDay) {
                    appData.currentDay = nextDay;
                    ensureDayState(currentWeek, nextDay);
                    saveData();
                    renderWorkout();
                }
                showToast(`Day ${currentDay} marked complete!`, 'success');
            }
        }

        function advanceWeekWithProgression() {
            const currentWeek = appData.currentWeek;
            const nextWeek = currentWeek + 1;

            // Load next week's baseline data (preserves completed weeks automatically)
            if (!appData.workouts[nextWeek]) {
                appData.workouts[nextWeek] = getWeekData(nextWeek);
            }

            // Apply TM-based AMRAP progressions to next week's weights
            for (let day = 1; day <= getNumDays(); day++) {
                const currentDayExercises = appData.workouts[currentWeek][day];
                const nextDayExercises = appData.workouts[nextWeek][day];

                if (!currentDayExercises || !nextDayExercises) continue;

                // Match exercises by name and apply TM-based progressions
                const usesRIR = isRIRProgram();

                currentDayExercises.forEach(currentEx => {
                    if (getLastSetValue(currentEx) === undefined || !currentEx.target) return;

                    // Find matching exercise in next week by name
                    const nextEx = nextDayExercises.find(ex => ex.name === currentEx.name);
                    if (!nextEx) return;

                    const currentIntensity = getIntensityForExercise(currentEx.name, currentWeek) || 0.75;
                    const nextIntensity = getIntensityForExercise(currentEx.name, nextWeek) || 0.80;

                    // Calculate Training Max from current working weight
                    const trainingMax = currentEx.weight / currentIntensity;

                    // Apply AMRAP progression to TM
                    const lastSetValue = getLastSetValue(currentEx);
                    const delta = usesRIR ? (currentEx.target - lastSetValue) : (lastSetValue - currentEx.target);
                    const progression = calculateProgressionFromDelta(delta);
                    const newTrainingMax = trainingMax * (1 + progression);

                    // Calculate next week's working weight at new intensity
                    const nextWorkingWeight = newTrainingMax * nextIntensity;
                    nextEx.weight = roundWeight(nextWorkingWeight);
                });
            }

            appData.currentWeek = nextWeek;
            appData.currentDay = 1; // Reset to day 1
            saveData();
            prepareCurrentDay();
            renderWorkout();
            showToast(
                `Moved to Week ${nextWeek}. Weights adjusted based on ${isRIRProgram() ? 'RIR' : 'AMRAP'} performance.`,
                'success',
                5000
            );
        }

        function navigateWeek(direction) {
            const newWeek = appData.currentWeek + direction;
            const maxWeek = getMaxWeek();

            // Validate week range (1-20 for strength, 1-21 for hypertrophy)
            if (newWeek < 1 || newWeek > maxWeek) {
                return;
            }

            appData.currentWeek = newWeek;
            appData.currentDay = 1; // Reset to day 1

            // Load week data if not exists (preserves completed weeks automatically)
            if (!appData.workouts[newWeek]) {
                appData.workouts[newWeek] = getWeekData(newWeek);
            }

            saveData();
            document.getElementById('week-selector').value = appData.currentWeek;
            prepareCurrentDay();
            renderWorkout();
        }

        function updateNavigationButtons() {
            const prevBtn = document.getElementById('prev-week-btn');
            const nextBtn = document.getElementById('next-week-btn');
            const maxWeek = getMaxWeek();

            prevBtn.disabled = appData.currentWeek <= 1;
            nextBtn.disabled = appData.currentWeek >= maxWeek;
        }

        function updateMarkDayButton() {
            const btn = document.getElementById('mark-day-btn');
            const dayComplete = isDayComplete(appData.currentWeek, appData.currentDay);

            if (dayComplete) {
                btn.textContent = `Day ${appData.currentDay} Already Complete ✓`;
                btn.style.opacity = '0.6';
            } else {
                btn.textContent = `Mark Day ${appData.currentDay} Complete`;
                btn.style.opacity = '1';
            }
        }

        // Settings functions
        function save1RMs() {
            appData.oneRepMaxes = {
                squat: parseFloat(document.getElementById('1rm-squat').value),
                bench: parseFloat(document.getElementById('1rm-bench').value),
                deadlift: parseFloat(document.getElementById('1rm-deadlift').value),
                ohp: parseFloat(document.getElementById('1rm-ohp').value),
                blockPulls: parseFloat(document.getElementById('1rm-block-pulls').value)
            };
            saveData();
            showToast('1RMs saved.', 'success');
        }

        function saveAuxiliaryExercises() {
            appData.auxiliaryExercises = {
                'squat-aux-1': document.getElementById('settings-squat-aux-1').value,
                'squat-aux-2': document.getElementById('settings-squat-aux-2').value,
                'bench-aux-1': document.getElementById('settings-bench-aux-1').value,
                'bench-aux-2': document.getElementById('settings-bench-aux-2').value,
                'deadlift-aux': document.getElementById('settings-deadlift-aux').value,
                'ohp-aux': document.getElementById('settings-ohp-aux').value
            };

            // Clear future workouts so they'll be regenerated with new auxiliary exercises
            // BUT preserve completed weeks to maintain historical accuracy
            const currentWeek = appData.currentWeek;
            for (let week = currentWeek; week <= 20; week++) {
                // Only delete weeks that don't have completed workouts
                if (!hasCompletedWorkouts(week)) {
                    delete appData.workouts[week];
                }
            }

            // Reload current week with new auxiliary exercises only if not completed
            if (!hasCompletedWorkouts(currentWeek)) {
                appData.workouts[currentWeek] = getWeekData(currentWeek);
            }

            saveData();
            prepareCurrentDay();
            renderWorkout();
            showToast('Auxiliary exercises updated.', 'success', 4000);
        }

        function loadAuxiliarySettings() {
            if (appData.auxiliaryExercises) {
                document.getElementById('settings-squat-aux-1').value = appData.auxiliaryExercises['squat-aux-1'] || 'Leg Press';
                document.getElementById('settings-squat-aux-2').value = appData.auxiliaryExercises['squat-aux-2'] || 'Hack Squat';
                document.getElementById('settings-bench-aux-1').value = appData.auxiliaryExercises['bench-aux-1'] || 'Incline Press';
                document.getElementById('settings-bench-aux-2').value = appData.auxiliaryExercises['bench-aux-2'] || 'DB Bench';
                document.getElementById('settings-deadlift-aux').value = appData.auxiliaryExercises['deadlift-aux'] || 'Romanian Deadlift';
                document.getElementById('settings-ohp-aux').value = appData.auxiliaryExercises['ohp-aux'] || 'DB OHP';
            }

            // Load weight unit setting
            const unit = appData.weightUnit || 'kg';
            document.getElementById('weight-unit').value = unit;
            updateWeightUnitLabels();

            // Load plate calculator settings
            if (appData.plateCalculator) {
                document.getElementById('plate-calculator-enabled').checked = appData.plateCalculator.enabled !== false;
                updateBarbellWeightOptions();
                document.getElementById('barbell-weight').value = appData.plateCalculator.barbellWeight || (unit === 'kg' ? 20 : 45);
            }

            // Load rest timer settings
            if (!appData.restTimer) {
                appData.restTimer = {
                    enabled: true,
                    duration: 180,
                    autoStart: false
                };
            }
            document.getElementById('rest-timer-enabled').checked = appData.restTimer.enabled !== false;
            document.getElementById('rest-timer-duration').value = appData.restTimer.duration || 180;
            document.getElementById('rest-timer-autostart').checked = appData.restTimer.autoStart === true;

            // Load program settings
            document.getElementById('settings-program-type').value = appData.programType || 'strength_rtf';
            document.getElementById('settings-program-variant').value = appData.selectedProgram || '3x';
            updateSettingsProgramVariants();
        }

        function updateSettingsProgramVariants() {
            const programType = document.getElementById('settings-program-type').value;
            const programSelect = document.getElementById('settings-program-variant');
            const currentValue = programSelect.value;

            // Clear existing options
            programSelect.innerHTML = '';

            // Add standard options (2x-5x)
            ['2x', '3x', '4x', '5x'].forEach(variant => {
                const option = document.createElement('option');
                option.value = variant;
                option.textContent = `${variant} Frequency`;
                programSelect.appendChild(option);
            });

            // Add 6x option for hypertrophy only
            if (programType === 'hypertrophy') {
                const option = document.createElement('option');
                option.value = '6x';
                option.textContent = '6x Frequency';
                programSelect.appendChild(option);
            }

            // Restore previous selection if valid
            if (currentValue && (programType === 'hypertrophy' || currentValue !== '6x')) {
                programSelect.value = currentValue;
            }
        }

        function setSettingsSection(sectionId) {
            const panels = document.querySelectorAll('.settings-panel');
            const buttons = document.querySelectorAll('.settings-nav-button');
            if (!panels.length || !buttons.length) return;

            panels.forEach(panel => {
                const isActive = panel.dataset.section === sectionId;
                panel.classList.toggle('active', isActive);
                panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
                panel.tabIndex = isActive ? 0 : -1;
            });

            buttons.forEach(button => {
                const isActive = button.dataset.section === sectionId;
                button.classList.toggle('active', isActive);
                button.setAttribute('aria-selected', isActive ? 'true' : 'false');
                button.setAttribute('tabindex', isActive ? '0' : '-1');
                if (isActive) {
                    button.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                }
            });

            localStorage.setItem('sbs-settings-section', sectionId);
        }

        function initSettingsNavigation() {
            const buttons = document.querySelectorAll('.settings-nav-button');
            const panels = document.querySelectorAll('.settings-panel');
            if (!buttons.length || !panels.length) return;

            const orderedButtons = Array.from(buttons);
            const handleArrowKey = (event, index) => {
                let nextIndex = null;
                switch (event.key) {
                    case 'ArrowRight':
                    case 'ArrowDown':
                        nextIndex = (index + 1) % orderedButtons.length;
                        break;
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        nextIndex = (index - 1 + orderedButtons.length) % orderedButtons.length;
                        break;
                    case 'Home':
                        nextIndex = 0;
                        break;
                    case 'End':
                        nextIndex = orderedButtons.length - 1;
                        break;
                    default:
                        return;
                }
                event.preventDefault();
                const nextButton = orderedButtons[nextIndex];
                nextButton.focus();
                setSettingsSection(nextButton.dataset.section);
            };

            orderedButtons.forEach((button, index) => {
                button.addEventListener('click', () => {
                    setSettingsSection(button.dataset.section);
                });
                button.addEventListener('keydown', (event) => handleArrowKey(event, index));
            });

            const stored = localStorage.getItem('sbs-settings-section');
            const fallback = buttons[0].dataset.section;
            const initial = stored && document.querySelector(`.settings-panel[data-section=\"${stored}\"]`)
                ? stored
                : fallback;
            setSettingsSection(initial);
        }

        function changeProgram() {
            const newProgramType = document.getElementById('settings-program-type').value;
            const newVariant = document.getElementById('settings-program-variant').value;
            const currentProgramType = appData.programType;
            const currentVariant = appData.selectedProgram;

            // Check if anything changed
            if (newProgramType === currentProgramType && newVariant === currentVariant) {
                showToast('No changes detected. You are already using this program.', 'info', 4000);
                return;
            }

            const confirmMsg = `Change program from ${currentProgramType} ${currentVariant} to ${newProgramType} ${newVariant}?\n\n` +
                `Your workout history will be preserved, but future weeks will use the new program structure.\n\n` +
                `Current week will be reset to use the new program.`;

            if (!confirm(confirmMsg)) {
                return;
            }

            // Update program type and variant
            appData.programType = newProgramType;
            appData.selectedProgram = newVariant;

            // Clear future weeks (preserve completed weeks)
            const currentWeek = appData.currentWeek;
            const maxWeek = getMaxWeek();
            for (let week = currentWeek; week <= maxWeek; week++) {
                if (!hasCompletedWorkouts(week)) {
                    delete appData.workouts[week];
                }
            }

            // Reload current week with new program
            if (!hasCompletedWorkouts(currentWeek)) {
                appData.workouts[currentWeek] = getWeekData(currentWeek);
            }

            saveData();
            updateWeekSelectors();
            prepareCurrentDay();
            renderWorkout();
            showToast(`Program changed to ${newProgramType} ${newVariant}.`, 'success', 5000);
        }

        function saveRestTimerSettings() {
            const enabled = document.getElementById('rest-timer-enabled').checked;
            const duration = parseInt(document.getElementById('rest-timer-duration').value);
            const autoStart = document.getElementById('rest-timer-autostart').checked;

            if (isNaN(duration) || duration < 30 || duration > 600) {
                showToast('Enter a duration between 30 and 600 seconds.', 'error', 5000);
                return;
            }

            appData.restTimer = {
                enabled,
                duration,
                autoStart
            };

            saveData();
            showToast('Rest timer settings saved.', 'success');
        }

        function jumpToWeek() {
            const weekNum = parseInt(document.getElementById('week-selector').value);
            appData.currentWeek = weekNum;
            appData.currentDay = 1; // Reset to day 1

            // Only generate new week data if it doesn't exist
            // Don't regenerate weeks with completed workouts to preserve actual exercises
            if (!appData.workouts[weekNum]) {
                appData.workouts[weekNum] = getWeekData(weekNum);
            }

            saveData();
            switchTab('workout');
            prepareCurrentDay();
            renderWorkout();
        }

        function loadHistoricalData() {
            if (isRIRProgram()) {
                showToast('AMRAP history applies to RTF programs only.', 'error', 5000);
                return;
            }
            if (!confirm('Load weeks 1-15 AMRAP history from Excel? This will overwrite any existing data for those weeks.')) {
                return;
            }

            // Load AMRAP history for weeks 1-15
            for (let week = 1; week <= 15; week++) {
                const weekStr = week.toString();

                // Load week data if not already loaded
                // Don't regenerate if the week already has completed workouts (preserves actual exercise names)
                if (!appData.workouts[week]) {
                    appData.workouts[week] = getWeekData(week);
                } else if (hasCompletedWorkouts(week)) {
                    // Week already has data - skip regeneration to preserve actual exercises
                    continue;
                }

                // Load AMRAP data if it exists
                if (AMRAP_HISTORY_DATA[weekStr]) {
                    const historyData = AMRAP_HISTORY_DATA[weekStr];

                    // Apply AMRAP data to each day
                    for (let day = 1; day <= getNumDays(); day++) {
                        const dayStr = day.toString();
                        if (historyData[dayStr] && appData.workouts[week][day]) {
                            const amrapValues = historyData[dayStr];

                            // Apply AMRAP values to exercises
                            amrapValues.forEach((amrapReps, exIdx) => {
                                if (appData.workouts[week][day][exIdx]) {
                                    appData.workouts[week][day][exIdx].amrapReps = amrapReps;
                                }
                            });
                        }
                    }
                }
            }

            saveData();
            showToast('Historical data loaded for weeks 1-15.', 'success', 5000);

            // If we're viewing a week with loaded history, refresh the view
            if (appData.currentWeek <= 15) {
                prepareCurrentDay();
                renderWorkout();
            }
        }

        function resetAll() {
            if (!confirm('Reset ALL data? This cannot be undone!')) {
                return;
            }
            localStorage.removeItem(DATA_STORAGE_KEY);
            if (window.dataStore && dataStore.isAvailable()) {
                dataStore.removeData().finally(() => location.reload());
            } else {
                location.reload();
            }
        }

        // Contact Form Handler
        async function handleContactFormSubmit(event) {
            event.preventDefault();

            const form = event.target;
            const submitBtn = document.getElementById('contact-submit-btn');
            const messageDiv = document.getElementById('contact-form-message');

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            messageDiv.style.display = 'none';
            messageDiv.classList.remove('success', 'error');

            try {
                const formData = new FormData(form);
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.success) {
                    // Show success message
                    messageDiv.textContent = 'Message sent successfully! We\'ll get back to you soon.';
                    messageDiv.classList.add('success');
                    messageDiv.style.display = 'block';

                    // Reset form
                    form.reset();
                } else {
                    throw new Error(result.message || 'Failed to send message');
                }
            } catch (error) {
                // Show error message
                messageDiv.textContent = 'Failed to send message. Please try again or email directly.';
                messageDiv.classList.add('error');
                messageDiv.style.display = 'block';
                console.error('Contact form error:', error);
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        }

        // Export & Import Functions
        function getDebugSnapshot() {
            return {
                meta: {
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent,
                    version: appData.version || 'unknown',
                    weightUnit: appData.weightUnit || 'kg'
                },
                appData: appData
            };
        }

        function copyDebugSnapshot() {
            const snapshot = JSON.stringify(getDebugSnapshot(), null, 2);
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(snapshot)
                    .then(() => showToast('Debug snapshot copied to clipboard.', 'success'))
                    .catch(() => showToast('Unable to copy debug snapshot.', 'error'));
            } else {
                showToast('Clipboard not available. Use Download Debug JSON.', 'info', 5000);
            }
        }

        function downloadDebugSnapshot() {
            const dataStr = JSON.stringify(getDebugSnapshot(), null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            const date = new Date().toISOString().split('T')[0];
            link.download = `sbs-tracker-debug-${date}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            showToast('Debug snapshot downloaded.', 'success');
        }

        function exportToJSON() {
            // Create a full backup of app data
            const dataStr = JSON.stringify(appData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });

            // Create download link
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;

            // Generate filename with date
            const date = new Date().toISOString().split('T')[0];
            const programType = appData.programType || 'strength_rtf';
            link.download = `sbs-tracker-backup-${programType}-week${appData.currentWeek}-${date}.json`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            showToast('Backup exported successfully.', 'success');
        }

        function exportToCSV() {
            // Create CSV of workout history
            const weeks = Object.keys(appData.workouts).sort((a, b) => parseInt(a) - parseInt(b));

            if (weeks.length === 0) {
                showToast('No workout data to export.', 'info', 4000);
                return;
            }

            // CSV headers
            let csvContent = `Week,Day,Exercise,Weight (${getWeightUnit()}),Reps,Target,Sets,Last Set,Completed\n`;

            // Add workout data
            weeks.forEach(weekNum => {
                const weekData = appData.workouts[weekNum];
                Object.keys(weekData).forEach(dayNum => {
                    const dayExercises = weekData[dayNum];
                    dayExercises.forEach(exercise => {
                        const lastSetValue = getLastSetValue(exercise);
                        const lastSetCell = lastSetValue === undefined ? '' : lastSetValue;
                        const completed = isDayComplete(weekNum, parseInt(dayNum)) ? 'Yes' : 'No';

                        csvContent += `${weekNum},${dayNum},"${exercise.name}",${exercise.weight},${exercise.reps},${exercise.target},${exercise.sets},${lastSetCell},${completed}\n`;
                    });
                });
            });

            // Create download link
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;

            const date = new Date().toISOString().split('T')[0];
            const programType = appData.programType || 'strength_rtf';
            link.download = `sbs-tracker-history-${programType}-${date}.csv`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            showToast('Workout history exported to CSV.', 'success');
        }

        function exportToHevyCSV() {
            const currentWeek = appData.currentWeek;
            const currentDay = appData.currentDay;

            ensureDayState(currentWeek, currentDay);

            const dayExercises = appData.workouts?.[currentWeek]?.[currentDay] || [];
            if (dayExercises.length === 0) {
                showToast('No workout data to export for the current day.', 'info', 4000);
                return;
            }

            const dateObj = new Date();
            const date = formatLocalDate(dateObj);
            const dateTime = `${date} 00:00:00`;
            const programTypeLabel = isHypertrophyProgram()
                ? 'Hypertrophy'
                : (isRIRProgram() ? 'Strength (RIR)' : 'Strength (RTF)');
            const programVariantLabel = appData.selectedProgram || '';
            const workoutName = `SBS ${programTypeLabel} ${programVariantLabel} - Week ${currentWeek} Day ${currentDay}`.trim();

            const headers = [
                'Date',
                'Workout Name',
                'Duration',
                'Exercise Name',
                'Set Order',
                'Weight',
                'Reps',
                'Distance',
                'Seconds',
                'Notes',
                'Workout Notes',
                'RPE'
            ];

            const rows = [headers.join(',')];
            const usesRIR = isRIRProgram();

            dayExercises.forEach(exercise => {
                const totalSets = Math.max(1, parseInt(exercise.sets || 0, 10));
                for (let setIndex = 1; setIndex <= totalSets; setIndex++) {
                    const lastSetValue = getLastSetValue(exercise);
                    const isLastSet = setIndex === totalSets;
                    const reps = (!usesRIR && isLastSet && lastSetValue !== undefined && lastSetValue !== null && lastSetValue !== '')
                        ? lastSetValue
                        : exercise.reps;
                    const notes = (usesRIR && isLastSet && lastSetValue !== undefined)
                        ? `RIR ${lastSetValue}`
                        : '';

                    const row = [
                        dateTime,
                        workoutName,
                        0,
                        exercise.name,
                        setIndex,
                        exercise.weight,
                        reps,
                        0,
                        0,
                        notes,
                        '',
                        ''
                    ];

                    rows.push(row.map(csvEscape).join(','));
                }
            });

            const csvContent = rows.join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;

            link.download = `sbs-hevy-week${currentWeek}-day${currentDay}-${date}.csv`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            showToast('Hevy CSV exported. Import using Hevy\'s Strong CSV option.', 'success', 6000);
        }

        function formatLocalDate(dateObj) {
            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const day = String(dateObj.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        function csvEscape(value) {
            if (value === null || value === undefined) {
                return '';
            }
            let str = String(value);
            if (str.includes('"')) {
                str = str.replace(/"/g, '""');
            }
            if (/[",\n]/.test(str)) {
                return `"${str}"`;
            }
            return str;
        }

        function saveHevySettings() {
            const apiKeyInput = document.getElementById('hevy-api-key');
            const durationInput = document.getElementById('hevy-duration');
            const privacySelect = document.getElementById('hevy-privacy');
            const overridesInput = document.getElementById('hevy-name-overrides');

            if (apiKeyInput) {
                hevyState.apiKey = apiKeyInput.value.trim();
            }

            if (durationInput) {
                const duration = parseInt(durationInput.value, 10);
                hevyState.defaultDurationMinutes = Number.isFinite(duration) ? Math.max(0, duration) : 60;
            }

            if (privacySelect) {
                hevyState.isPrivate = privacySelect.value === 'private';
            }

            if (overridesInput) {
                const raw = overridesInput.value.trim();
                if (!raw) {
                    hevyState.nameOverrides = {};
                } else {
                    try {
                        const parsed = JSON.parse(raw);
                        hevyState.nameOverrides = parsed && typeof parsed === 'object' ? parsed : {};
                    } catch (error) {
                        showToast('Invalid JSON in exercise name overrides.', 'error', 5000);
                        return;
                    }
                }
            }

            saveHevyState();
            updateHevySettingsUI();
            showToast('Hevy settings saved.', 'success');
        }

        async function hevyApiRequest(path, options = {}) {
            if (!hevyState.apiKey) {
                showToast('Add your Hevy API key first.', 'error', 5000);
                throw new Error('Missing Hevy API key');
            }

            const headers = {
                'api-key': hevyState.apiKey,
                ...(options.headers || {})
            };

            if (options.body && !headers['Content-Type']) {
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(`${HEVY_API_BASE}${path}`, {
                ...options,
                headers
            });

            if (!response.ok) {
                const errorText = await response.text().catch(() => '');
                throw new Error(`Hevy API error ${response.status}: ${errorText || response.statusText}`);
            }

            const contentType = response.headers.get('content-type') || '';
            if (contentType.includes('application/json')) {
                return response.json();
            }
            return response.text();
        }

        function normalizeHevyName(name) {
            return String(name || '').trim().toLowerCase();
        }

        function normalizeHevyLoose(name) {
            return normalizeHevyName(name).replace(/[^a-z0-9]+/g, ' ').trim();
        }

        async function syncHevyExerciseTemplates() {
            try {
                showToast('Syncing Hevy templates...', 'info', 3000);

                const pageSize = 100;
                let page = 1;
                let templates = [];
                let totalPages = null;

                while (true) {
                    const data = await hevyApiRequest(`/v1/exercise_templates?page=${page}&page_size=${pageSize}`);
                    const items = data?.results || data?.items || data?.exercise_templates || data?.data || data;
                    if (!Array.isArray(items)) {
                        throw new Error('Unexpected template response shape.');
                    }

                    templates = templates.concat(items);

                    if (data?.total_pages) {
                        totalPages = data.total_pages;
                        if (page >= totalPages) break;
                    } else if (items.length < pageSize) {
                        break;
                    }

                    page += 1;
                }

                const templatesByName = {};
                templates.forEach(template => {
                    const name = template.title || template.name || template.exercise_name;
                    const id = template.id || template.exercise_template_id;
                    if (!name || !id) return;
                    const normalized = normalizeHevyName(name);
                    const normalizedLoose = normalizeHevyLoose(name);
                    templatesByName[normalized] = id;
                    if (normalizedLoose && !templatesByName[normalizedLoose]) {
                        templatesByName[normalizedLoose] = id;
                    }
                });

                hevyState.templatesByName = templatesByName;
                hevyState.templatesLastSync = new Date().toISOString();
                saveHevyState();
                updateHevySettingsUI();

                showToast(`Synced ${Object.keys(templatesByName).length} Hevy templates.`, 'success', 5000);
            } catch (error) {
                console.error('Hevy template sync failed:', error);
                const message = String(error?.message || error);
                if (message.toLowerCase().includes('failed to fetch')) {
                    showToast('Failed to reach Hevy API. CORS may block direct calls; a proxy may be required.', 'error', 7000);
                } else {
                    showToast(`Hevy sync failed: ${message}`, 'error', 7000);
                }
            }
        }

        function resolveHevyTemplateId(exerciseName) {
            const overrides = hevyState.nameOverrides || {};
            const normalizedKey = normalizeHevyName(exerciseName);
            const overrideName =
                overrides[exerciseName] ||
                overrides[exerciseName.trim?.() || ''] ||
                overrides[normalizedKey] ||
                exerciseName;
            const normalized = normalizeHevyName(overrideName);
            const normalizedLoose = normalizeHevyLoose(overrideName);
            const templatesByName = hevyState.templatesByName || {};

            if (templatesByName[normalized]) {
                return templatesByName[normalized];
            }
            if (normalizedLoose && templatesByName[normalizedLoose]) {
                return templatesByName[normalizedLoose];
            }

            const fallbackCandidates = {
                'deadlift': ['Barbell Deadlift', 'Conventional Deadlift', 'Deadlift (Barbell)'],
                'squat': ['Barbell Squat', 'Barbell Back Squat', 'Back Squat', 'Low Bar Back Squat', 'High Bar Back Squat', 'Squat (Barbell)'],
                'bench press': ['Barbell Bench Press', 'Bench Press (Barbell)', 'Flat Barbell Bench Press'],
                'ohp': ['Overhead Press', 'Standing Overhead Press', 'Barbell Overhead Press', 'OHP'],
                'hack squat': ['Hack Squat', 'Hack Squat Machine', 'Hack Squat (Machine)', 'Machine Hack Squat'],
                'leg press': ['Leg Press', '45 Degree Leg Press', 'Horizontal Leg Press', 'Leg Press (Machine)'],
                'block pulls': ['Block Pull', 'Block Pulls', 'Block Pull (Barbell)', 'Deadlift (Block Pull)'],
                'romanian deadlift': ['Romanian Deadlift', 'RDL', 'Barbell Romanian Deadlift'],
                'incline press': [
                    'Incline Bench Press',
                    'Incline Barbell Bench Press',
                    'Incline Press (Barbell)',
                    'Incline Dumbbell Press',
                    'Incline Dumbbell Bench Press',
                    'Incline Bench Press (Dumbbell)',
                    'Incline Bench Press Dumbbell',
                    'Dumbbell Incline Bench Press',
                    'Dumbbell Incline Press',
                    'DB Incline Press',
                    'Incline DB Press'
                ],
                'db bench': ['Dumbbell Bench Press', 'Dumbbell Bench', 'DB Bench Press', 'DB Bench'],
                'db ohp': ['Dumbbell Overhead Press', 'Dumbbell Shoulder Press', 'DB Shoulder Press', 'DB OHP']
            };

            const candidates = [overrideName];
            if (fallbackCandidates[normalized]) {
                candidates.push(...fallbackCandidates[normalized]);
            }
            if (fallbackCandidates[normalizedLoose]) {
                candidates.push(...fallbackCandidates[normalizedLoose]);
            }

            for (const candidate of candidates) {
                const candidateKey = normalizeHevyName(candidate);
                if (templatesByName[candidateKey]) {
                    return templatesByName[candidateKey];
                }
                const candidateLoose = normalizeHevyLoose(candidate);
                if (candidateLoose && templatesByName[candidateLoose]) {
                    return templatesByName[candidateLoose];
                }
            }

            const normalizedEntries = Object.entries(templatesByName);
            const matches = normalizedEntries.filter(([name]) =>
                name.includes(normalized) || (normalizedLoose && name.includes(normalizedLoose))
            );
            if (matches.length) {
                const preferred = matches.find(([name]) =>
                    name === normalized ||
                    name.endsWith(` ${normalized}`) ||
                    name.startsWith(`${normalized} `) ||
                    (normalizedLoose && (name === normalizedLoose || name.endsWith(` ${normalizedLoose}`) || name.startsWith(`${normalizedLoose} `)))
                );
                if (preferred) {
                    return preferred[1];
                }

                matches.sort((a, b) => a[0].length - b[0].length);
                return matches[0][1];
            }

            return undefined;
        }

        function convertWeightToKg(weight) {
            if (weight === null || weight === undefined) return 0;
            const unit = getWeightUnit();
            const numeric = Number(weight);
            if (!Number.isFinite(numeric)) return 0;
            if (unit === 'lbs') {
                return Math.round(lbsToKg(numeric) * 100) / 100;
            }
            return Math.round(numeric * 100) / 100;
        }

        function buildHevyWorkoutPayload() {
            const currentWeek = appData.currentWeek;
            const currentDay = appData.currentDay;

            ensureDayState(currentWeek, currentDay);
            const dayExercises = appData.workouts?.[currentWeek]?.[currentDay] || [];

            if (dayExercises.length === 0) {
                throw new Error('No exercises for the current day.');
            }

            const now = new Date();
            const durationMinutes = Math.max(0, parseInt(hevyState.defaultDurationMinutes || 0, 10));
            const endTime = new Date(now.getTime() + durationMinutes * 60 * 1000);

            const programTypeLabel = isHypertrophyProgram()
                ? 'Hypertrophy'
                : (isRIRProgram() ? 'Strength (RIR)' : 'Strength (RTF)');
            const programVariantLabel = appData.selectedProgram || '';
            const workoutName = `SBS ${programTypeLabel} ${programVariantLabel} - Week ${currentWeek} Day ${currentDay}`.trim();
            const usesRIR = isRIRProgram();

            const exercises = dayExercises.map(exercise => {
                const templateId = resolveHevyTemplateId(exercise.name);
                if (!templateId) {
                    throw new Error(`Missing Hevy template for "${exercise.name}". Add an override in Settings → Hevy Sync or sync templates again.`);
                }

                const totalSets = Math.max(1, parseInt(exercise.sets || 0, 10));
                const sets = [];
                const lastSetValue = getLastSetValue(exercise);
                const lastSetNote = (usesRIR && lastSetValue !== undefined)
                    ? `Last set RIR: ${lastSetValue}`
                    : '';
                const notes = lastSetNote.trim().length > 0 ? lastSetNote : null;

                for (let setIndex = 1; setIndex <= totalSets; setIndex++) {
                    const isLastSet = setIndex === totalSets;
                    const reps = (!usesRIR && isLastSet && lastSetValue !== undefined && lastSetValue !== null && lastSetValue !== '')
                        ? Number(lastSetValue)
                        : Number(exercise.reps);

                    sets.push({
                        type: 'normal',
                        weight_kg: convertWeightToKg(exercise.weight),
                        reps: Number.isFinite(reps) ? reps : 0,
                        distance_meters: 0,
                        duration_seconds: 0
                    });
                }

                return {
                    exercise_template_id: templateId,
                    superset_id: null,
                    notes,
                    sets
                };
            });

            return {
                title: workoutName,
                description: 'Generated by SBS Workout Tracker',
                start_time: now.toISOString(),
                end_time: endTime.toISOString(),
                is_private: hevyState.isPrivate,
                exercises
            };
        }

        async function sendCurrentDayToHevy() {
            try {
                if (!hevyState.apiKey) {
                    showToast('Add your Hevy API key first.', 'error', 5000);
                    return;
                }

                if (!hevyState.templatesByName || Object.keys(hevyState.templatesByName).length === 0) {
                    await syncHevyExerciseTemplates();
                }

                let payload;
                try {
                    payload = buildHevyWorkoutPayload();
                } catch (error) {
                    const message = String(error?.message || error);
                    if (message.toLowerCase().includes('missing hevy template')) {
                        await syncHevyExerciseTemplates();
                        payload = buildHevyWorkoutPayload();
                    } else {
                        throw error;
                    }
                }
                const requestBody = { workout: payload };
                await hevyApiRequest('/v1/workouts', {
                    method: 'POST',
                    body: JSON.stringify(requestBody)
                });

                showToast('Workout sent to Hevy.', 'success', 5000);
            } catch (error) {
                console.error('Hevy send failed:', error);
                const message = String(error?.message || error);
                if (message.toLowerCase().includes('failed to fetch')) {
                    showToast('Failed to reach Hevy API. CORS may block direct calls; a proxy may be required.', 'error', 7000);
                } else {
                    showToast(`Hevy export failed: ${message}`, 'error', 7000);
                }
            }
        }

        function importFromJSON() {
            const fileInput = document.getElementById('import-file');
            const file = fileInput.files[0];

            if (!file) {
                showToast('Please select a JSON file to import.', 'error', 4000);
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importedData = JSON.parse(e.target.result);
                    const validation = validateStoredData(importedData);
                    if (!validation.ok) {
                        throw new Error(`Invalid backup file format: ${validation.errors.join(' ')}`);
                    }

                    // Confirm import
                    const warningText = validation.warnings.length
                        ? `Warnings:\n- ${validation.warnings.join('\n- ')}\n\n`
                        : '';
                    const confirmMsg = `Import backup data?\n\n` +
                        `Program: ${importedData.programType || 'strength_rtf'} ${importedData.selectedProgram}\n` +
                        `Current Week: ${importedData.currentWeek}\n` +
                        `Workouts: ${Object.keys(importedData.workouts || {}).length} weeks\n\n` +
                        warningText +
                        `This will replace ALL current data!`;

                    if (!confirm(confirmMsg)) {
                        return;
                    }

                    // Import data
                    appData = {...appData, ...migrateData(importedData)};
                    normalizeAuxiliaryExercises();
                    saveData();

                    // Update UI
                    updateWeekSelectors();
                    prepareCurrentDay();
                    renderWorkout();

                    // Update settings inputs
                    document.getElementById('1rm-squat').value = appData.oneRepMaxes.squat;
                    document.getElementById('1rm-bench').value = appData.oneRepMaxes.bench;
                    document.getElementById('1rm-deadlift').value = appData.oneRepMaxes.deadlift;
                    document.getElementById('1rm-ohp').value = appData.oneRepMaxes.ohp;
                    document.getElementById('1rm-block-pulls').value = appData.oneRepMaxes.blockPulls;
                    document.getElementById('week-selector').value = appData.currentWeek;
                    loadAuxiliarySettings();

                    showToast('Backup imported successfully.', 'success', 5000);
                    setDataStatus('saved', 'Backup imported');

                    // Clear file input
                    fileInput.value = '';

                } catch (error) {
                    showToast('Error importing backup. Please check the file and try again.', 'error', 6000);
                    console.error('Import error:', error);
                }
            };

            reader.readAsText(file);
        }

        // Plate Calculator Functions
        function calculatePlates(weight) {
            if (!appData.plateCalculator.enabled) {
                return null;
            }

            const barbellWeight = appData.plateCalculator.barbellWeight;
            const availablePlates = appData.plateCalculator.availablePlates;
            const unit = appData.weightUnit || 'kg';

            // Weight per side (subtract barbell, divide by 2)
            let weightPerSide = (weight - barbellWeight) / 2;

            // Handle edge cases
            if (weightPerSide < 0) {
                return { plates: [], perSide: 0, error: 'Weight less than barbell' };
            }

            if (weightPerSide === 0) {
                return { plates: [], perSide: 0, error: null };
            }

            // Calculate plates using greedy algorithm
            const plates = [];
            let remaining = weightPerSide;

            for (const plate of availablePlates) {
                while (remaining >= plate - 0.01) { // Allow small float tolerance
                    plates.push(plate);
                    remaining -= plate;
                }
            }

            // Check if we have remainder (can't load exact weight)
            const remainder = remaining > 0.1 ? remaining : 0;

            return {
                plates: plates,
                perSide: weightPerSide,
                remainder: remainder,
                error: remainder > 0.1 ? `Closest: ${(weight - remainder * 2).toFixed(1)} ${unit}` : null
            };
        }

        function renderSetCircles(ex, day, idx) {
            const hasLastSetMetric = !!ex.target;
            const clickableSets = hasLastSetMetric ? ex.sets - 1 : ex.sets;
            const completedSets = ex.completedSets || [];
            let html = '<div class="set-circles">';
            for (let i = 0; i < clickableSets; i++) {
                const done = completedSets[i] === true;
                html += `<button class="set-circle ${done ? 'completed' : ''}" onclick="toggleSetComplete(${day}, ${idx}, ${i})" data-set="${day}-${idx}-${i}">${ex.reps}</button>`;
            }
            if (hasLastSetMetric) {
                const lastSetValue = getLastSetValue(ex);
                const hasVal = lastSetValue !== undefined && lastSetValue > 0;
                const label = isRIRProgram() ? 'RIR' : 'AMRAP';
                html += `<button class="set-circle amrap-circle ${hasVal ? 'has-value' : ''}" data-set="${day}-${idx}-amrap" data-label="${label}">
                    <span class="amrap-value">${hasVal ? lastSetValue : '?'}</span>
                </button>`;
            }
            html += '</div>';
            return html;
        }

        function renderPlateDisplay(weight) {
            const result = calculatePlates(weight);

            if (!result) {
                return '';
            }

            if (result.error === 'Weight less than barbell') {
                return '<div class="note note-warning">⚠️ Weight less than barbell</div>';
            }

            const barbellWeight = appData.plateCalculator.barbellWeight;
            const unit = appData.weightUnit || 'kg';

            // Calculate summary text + chips
            let summaryText = '';
            let chipsHtml = '';
            if (result.plates.length === 0) {
                summaryText = `Empty bar (${barbellWeight} ${unit})`;
                chipsHtml = `<div class="plate-empty">${summaryText}</div>`;
            } else {
                const plateCounts = {};
                result.plates.forEach(plate => {
                    plateCounts[plate] = (plateCounts[plate] || 0) + 1;
                });
                const summaryParts = [];
                const chipParts = [];
                Object.keys(plateCounts).sort((a, b) => parseFloat(b) - parseFloat(a)).forEach(plate => {
                    summaryParts.push(`${plateCounts[plate]}×${plate}${unit}`);
                    chipParts.push(`<div class="plate-chip">${plateCounts[plate]}×${plate}${unit}</div>`);
                });
                summaryText = summaryParts.join(', ');
                chipsHtml = `<div class="plate-chips">${chipParts.join('')}</div>`;
            }

            const perSideText = result.perSide % 1 === 0
                ? result.perSide.toString()
                : result.perSide.toFixed(2).replace(/\.?0+$/, '');

            let html = `
                <div class="plate-calculator">
                    <div class="plate-calculator-header">
                        <div class="plate-summary-label">Plates per side</div>
                        <div class="plate-total">Total: ${weight} ${unit}</div>
                    </div>
                    ${chipsHtml}
                    <div class="plate-info">
                        <div>
                            <div class="plate-info-label">Bar</div>
                            <div class="plate-info-value">${barbellWeight} ${unit}</div>
                        </div>
                        <div>
                            <div class="plate-info-label">Per side</div>
                            <div class="plate-info-value">${perSideText} ${unit}</div>
                        </div>
                    </div>
                </div>`;

            if (result.remainder) {
                html += `<div class="note note-warning note-compact">
                    ⚠️ ${result.error}
                </div>`;
            }

            return html;
        }

        function updateWeightUnitLabels() {
            const unit = appData.weightUnit || 'kg';
            const unitText = unit === 'kg' ? 'kg' : 'lbs';
            const step = unit === 'kg' ? '2.5' : '5';

            // Update 1RM labels in settings
            document.getElementById('label-squat-1rm').textContent = `Squat 1RM (${unitText})`;
            document.getElementById('label-bench-1rm').textContent = `Bench Press 1RM (${unitText})`;
            document.getElementById('label-deadlift-1rm').textContent = `Deadlift 1RM (${unitText})`;
            document.getElementById('label-ohp-1rm').textContent = `OHP 1RM (${unitText})`;
            document.getElementById('label-block-pulls-1rm').textContent = `Block Pulls 1RM (${unitText})`;

            // Update step values
            document.getElementById('1rm-squat').step = step;
            document.getElementById('1rm-bench').step = step;
            document.getElementById('1rm-deadlift').step = step;
            document.getElementById('1rm-ohp').step = step;
            document.getElementById('1rm-block-pulls').step = step;

            // Update quick setup labels
            if (document.getElementById('setup-1rm-header')) {
                document.getElementById('setup-1rm-header').textContent = `Enter your 1RM maxes (${unitText})`;
            }
            if (document.getElementById('setup-squat')) {
                document.getElementById('setup-squat').step = step;
                document.getElementById('setup-bench').step = step;
                document.getElementById('setup-deadlift').step = step;
                document.getElementById('setup-ohp').step = step;
                document.getElementById('setup-block-pulls').step = step;
            }

            // Update barbell weight label
            document.getElementById('label-barbell-weight').textContent = `Barbell Weight (${unitText})`;
        }

        function convertAllWeights(conversionFactor, roundTo) {
            Object.keys(appData.workouts || {}).forEach(weekNum => {
                const weekData = appData.workouts[weekNum];
                Object.keys(weekData || {}).forEach(dayNum => {
                    weekData[dayNum].forEach(ex => {
                        if (typeof ex.weight === 'number') {
                            ex.weight = Math.round((ex.weight * conversionFactor) / roundTo) * roundTo;
                        }
                    });
                });
            });

            if (appData.personalRecords) {
                Object.keys(appData.personalRecords).forEach(name => {
                    const pr = appData.personalRecords[name];
                    if (typeof pr.weight === 'number') {
                        pr.weight = Math.round((pr.weight * conversionFactor) / roundTo) * roundTo;
                    }
                    if (typeof pr.estimated1RM === 'number') {
                        pr.estimated1RM = Math.round((pr.estimated1RM * conversionFactor) / roundTo) * roundTo;
                    }
                });
            }
        }

        function updateWeightUnit() {
            const newUnit = document.getElementById('weight-unit').value;
            const oldUnit = appData.weightUnit || 'kg';

            if (newUnit !== oldUnit) {
                // Convert all weights
                const conversionFactor = newUnit === 'lbs' ? KG_TO_LBS : LBS_TO_KG;
                const roundTo = newUnit === 'lbs' ? 0.5 : 0.25;

                // Convert 1RMs
                appData.oneRepMaxes.squat = Math.round((appData.oneRepMaxes.squat * conversionFactor) / roundTo) * roundTo;
                appData.oneRepMaxes.bench = Math.round((appData.oneRepMaxes.bench * conversionFactor) / roundTo) * roundTo;
                appData.oneRepMaxes.deadlift = Math.round((appData.oneRepMaxes.deadlift * conversionFactor) / roundTo) * roundTo;
                appData.oneRepMaxes.ohp = Math.round((appData.oneRepMaxes.ohp * conversionFactor) / roundTo) * roundTo;
                appData.oneRepMaxes.blockPulls = Math.round((appData.oneRepMaxes.blockPulls * conversionFactor) / roundTo) * roundTo;

                // Update 1RM inputs
                document.getElementById('1rm-squat').value = appData.oneRepMaxes.squat;
                document.getElementById('1rm-bench').value = appData.oneRepMaxes.bench;
                document.getElementById('1rm-deadlift').value = appData.oneRepMaxes.deadlift;
                document.getElementById('1rm-ohp').value = appData.oneRepMaxes.ohp;
                document.getElementById('1rm-block-pulls').value = appData.oneRepMaxes.blockPulls;

                // Convert stored workout and PR weights
                convertAllWeights(conversionFactor, roundTo);

                // Convert plate calculator barbell weight
                appData.plateCalculator.barbellWeight = Math.round((appData.plateCalculator.barbellWeight * conversionFactor) / roundTo) * roundTo;

                // Update available plates based on unit
                if (newUnit === 'kg') {
                    appData.plateCalculator.availablePlates = [20, 15, 10, 5, 2.5, 1.25];
                } else {
                    appData.plateCalculator.availablePlates = [45, 35, 25, 10, 5, 2.5];
                }

                appData.weightUnit = newUnit;
                updateWeightUnitLabels();
                updateBarbellWeightOptions();
                document.getElementById('barbell-weight').value = appData.plateCalculator.barbellWeight;

                saveData();
                prepareCurrentDay();
                renderWorkout();

                showToast(`Weight unit changed to ${newUnit}. All weights converted.`, 'success', 5000);
            }
        }

        function updateBarbellWeightOptions() {
            const unit = appData.weightUnit || 'kg';
            const barbellWeightSelect = document.getElementById('barbell-weight');

            if (unit === 'kg') {
                barbellWeightSelect.innerHTML = `
                    <option value="20">20kg (Standard Olympic)</option>
                    <option value="15">15kg (Women's Olympic)</option>
                    <option value="10">10kg (Training Bar)</option>
                    <option value="0">0kg (Dumbbells/Machines)</option>
                `;
            } else {
                barbellWeightSelect.innerHTML = `
                    <option value="45">45lbs (Standard Olympic)</option>
                    <option value="35">35lbs (Women's Olympic)</option>
                    <option value="15">15lbs (Training Bar)</option>
                    <option value="0">0lbs (Dumbbells/Machines)</option>
                `;
            }
        }

        function savePlateSettings() {
            const enabled = document.getElementById('plate-calculator-enabled').checked;
            const barbellWeight = parseFloat(document.getElementById('barbell-weight').value);

            appData.plateCalculator.enabled = enabled;
            appData.plateCalculator.barbellWeight = barbellWeight;

            saveData();
            prepareCurrentDay();
            renderWorkout();

            showToast('Plate calculator settings saved.', 'success');
        }

        function togglePlateCalculator() {
            appData.plateCalculator.enabled = document.getElementById('plate-calculator-enabled').checked;
            saveData();
            prepareCurrentDay();
            renderWorkout();
        }

        function renderHistory() {
            const container = document.getElementById('history-container');
            const allWeeks = Object.keys(appData.workouts).sort((a, b) => b - a);
            const usesRIR = isRIRProgram();

            // Filter to only show weeks with completed workouts
            const completedWeeks = allWeeks.filter(weekNum => hasCompletedWorkouts(weekNum));

            if (completedWeeks.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📜</div>
                        <h3 class="empty-state-title">No Workout History Yet</h3>
                        <p class="empty-state-description">
                            Complete your first workout day to start building your workout history and track your progress over time!
                        </p>
                    </div>
                `;
                return;
            }

            const numDays = getNumDays();

            container.innerHTML = completedWeeks.map(weekNum => {
                const weekData = appData.workouts[weekNum];

                // Get only the days that are marked complete (or have AMRAP data)
                const completedDays = [];
                for (let day = 1; day <= numDays; day++) {
                    if (weekData[day] && isDayComplete(weekNum, day)) {
                        completedDays.push(day);
                    }
                }

                // Only show weeks that have at least one completed day
                if (completedDays.length === 0) return '';

                return `
                    <div class="history-week card reveal">
                        <h3>Week ${weekNum}</h3>
                        ${completedDays.map(day => `
                            <div class="history-day">
                                <strong>Day ${day}</strong>
                                ${weekData[day].map(ex => `
                                    <div class="history-exercise">
                                        ${ex.name}: ${ex.weight} ${getWeightUnit()} × ${ex.reps} reps × ${ex.sets} sets
                                        ${getLastSetValue(ex) !== undefined
                                            ? `<span class="completed-badge">${usesRIR ? 'RIR' : 'AMRAP'}: ${getLastSetValue(ex)}</span>`
                                            : (ex.target ? `<span class="completed-badge muted">${usesRIR ? 'RIR' : 'AMRAP'} missing</span>` : '')}
                                    </div>
                                `).join('')}
                            </div>
                        `).join('')}
                    </div>
                `;
            }).join('');
        }

        // Helper: Create progress ring SVG
        function createProgressRing(percentage, gradient, size = 120, strokeWidth = 8) {
            const radius = (size - strokeWidth) / 2;
            const circumference = radius * 2 * Math.PI;
            const offset = circumference - (percentage / 100) * circumference;

            return `
                <div class="progress-ring-container" style="width: ${size}px; height: ${size}px;">
                    <svg class="progress-ring" width="${size}" height="${size}">
                        <circle class="progress-ring-bg" cx="${size/2}" cy="${size/2}" r="${radius}"></circle>
                        <circle
                            class="progress-ring-fill"
                            cx="${size/2}"
                            cy="${size/2}"
                            r="${radius}"
                            stroke="url(#${gradient})"
                            stroke-dasharray="${circumference}"
                            stroke-dashoffset="${offset}"
                        ></circle>
                        <defs>
                            <linearGradient id="gradient-success" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#00B894;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#00cec9;stop-opacity:1" />
                            </linearGradient>
                            <linearGradient id="gradient-bench" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#4FACFE;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#00F2FE;stop-opacity:1" />
                            </linearGradient>
                            <linearGradient id="gradient-squat" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#FF8E53;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div class="progress-ring-text">
                        <div class="progress-ring-value">${Math.round(percentage)}%</div>
                    </div>
                </div>
            `;
        }

        function renderProgress() {
            const container = document.getElementById('progress-container');
            const weeks = Object.keys(appData.workouts).sort((a, b) => parseInt(a) - parseInt(b));

            if (weeks.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="7" y1="17" x2="7" y2="13"/><line x1="12" y1="17" x2="12" y2="9"/><line x1="17" y1="17" x2="17" y2="5"/>
                            </svg>
                        </div>
                        <h3 class="empty-state-title">No Progress Data Yet</h3>
                        <p class="empty-state-description">Complete some workouts to see your progress, stats, and personal records here!</p>
                    </div>
                `;
                return;
            }

            // Calculate statistics
            const stats = calculateProgressStats();

            // Calculate program completion percentage
            const maxWeeks = isHypertrophyProgram() ? 21 : 20;
            const completionPercentage = (stats.weeksCompleted / maxWeeks) * 100;

            container.innerHTML = `
                <div class="stats-grid">
                    <div class="stat-card card with-ring reveal">
                        ${createProgressRing(completionPercentage, 'gradient-primary', 100, 6)}
                        <div class="stat-label">Program Complete</div>
                    </div>
                    <div class="stat-card card reveal">
                        <div class="stat-value">${stats.totalVolume.toLocaleString()}</div>
                        <div class="stat-label">Total Volume (${getWeightUnit()})</div>
                    </div>
                    <div class="stat-card card reveal">
                        <div class="stat-value">${stats.workoutsCompleted}</div>
                        <div class="stat-label">Workouts Done</div>
                    </div>
                    <div class="stat-card card reveal">
                        <div class="stat-value">${stats.avgVolumePerWeek.toLocaleString()}</div>
                        <div class="stat-label">Avg Volume/Week</div>
                    </div>
                </div>

                <div class="chart-container">
                    <div class="chart-title">Total Volume by Week</div>
                    <div class="chart-canvas">
                        <div class="bar-chart">
                            ${stats.weeklyVolume.map(wv => {
                                const maxVol = Math.max(...stats.weeklyVolume.map(v => v.volume));
                                const height = (wv.volume / maxVol) * 100;
                                return `
                                    <div class="bar" style="height: ${height}%">
                                        <div class="bar-value">${(wv.volume / 1000).toFixed(1)}k</div>
                                        <div class="bar-label">W${wv.week}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>

                <div class="progress-section">
                    <h3>Estimated 1RM Progress</h3>
                    ${renderEstimated1RMs(stats)}
                </div>

                <div class="progress-section">
                    <h3>Performance by Lift</h3>
                    ${renderLiftBreakdown(stats)}
                </div>

                <div class="progress-section">
                    <h3>🏆 Personal Records</h3>
                    ${renderPersonalRecords()}
                </div>
            `;
        }

        function calculateProgressStats() {
            const weeks = Object.keys(appData.workouts).sort((a, b) => parseInt(a) - parseInt(b));
            let totalVolume = 0;
            let workoutsCompleted = 0;
            let weeksCompleted = 0;
            const weeklyVolume = [];
            const liftData = {};
            const numDays = getNumDays();

            weeks.forEach(weekNum => {
                const weekData = appData.workouts[weekNum];
                let weekVolume = 0;
                let weekComplete = true;
                let hasDayData = false;

                for (let day = 1; day <= numDays; day++) {
                    if (weekData[day]) {
                        hasDayData = true;
                        const dayComplete = isDayComplete(weekNum, day);
                        if (!dayComplete) weekComplete = false;
                        weekData[day].forEach(ex => {
                            // Calculate volume for this exercise
                            const volume = ex.weight * ex.reps * ex.sets;
                            weekVolume += volume;
                            totalVolume += volume;

                            // Track lift data for progress tracking
                            if (!liftData[ex.name]) {
                                liftData[ex.name] = [];
                            }
                            liftData[ex.name].push({
                                week: weekNum,
                                weight: ex.weight,
                                reps: ex.reps,
                                amrapReps: ex.amrapReps,
                                lastSetValue: getLastSetValue(ex),
                                target: ex.target,
                                sets: ex.sets
                            });

                        });
                        if (dayComplete) workoutsCompleted++;
                    }
                }

                weeklyVolume.push({ week: weekNum, volume: weekVolume });
                if (weekComplete && hasDayData) {
                    weeksCompleted++;
                }
            });

            const avgVolumePerWeek = weeks.length > 0 ? Math.round(totalVolume / weeks.length) : 0;

            return {
                totalVolume: Math.round(totalVolume),
                workoutsCompleted,
                weeksCompleted,
                avgVolumePerWeek,
                weeklyVolume,
                liftData
            };
        }

        function renderEstimated1RMs(stats) {
            if (isRIRProgram()) {
                return '<p class="empty-state-note">Estimated 1RM tracking is disabled for RIR-based strength templates.</p>';
            }
            const mainLifts = ['Squat', 'Bench Press', 'Deadlift', 'OHP'];
            let html = '';

            mainLifts.forEach(liftName => {
                const liftHistory = stats.liftData[liftName];
                if (!liftHistory || liftHistory.length === 0) return;

                // Get first and last recorded weights
                const firstEntry = liftHistory[0];
                const lastEntry = liftHistory[liftHistory.length - 1];

                // Estimate 1RM using Epley formula: weight × (1 + reps/30)
                const getEstimated1RM = (entry) => {
                    const reps = entry.amrapReps !== undefined ? entry.amrapReps : entry.reps;
                    return entry.weight * (1 + reps / 30);
                };

                const first1RM = getEstimated1RM(firstEntry);
                const last1RM = getEstimated1RM(lastEntry);
                const change = last1RM - first1RM;
                const changePercent = ((change / first1RM) * 100).toFixed(1);

                html += `
                    <div class="lift-progress">
                        <div class="lift-name">${liftName}</div>
                        <div class="lift-stats">
                            <span>Est. 1RM: ${last1RM.toFixed(1)} ${getWeightUnit()}</span>
                            <span class="lift-change ${change >= 0 ? 'positive' : 'negative'}">
                                ${change >= 0 ? '+' : ''}${change.toFixed(1)} ${getWeightUnit()} (${changePercent >= 0 ? '+' : ''}${changePercent}%)
                            </span>
                        </div>
                    </div>
                `;
            });

            return html || '<p class="empty-state-note">Complete AMRAP sets to track estimated 1RM progress</p>';
        }

        function renderLiftBreakdown(stats) {
            const lifts = Object.keys(stats.liftData);
            if (lifts.length === 0) return '<p class="empty-state-note">No lift data available</p>';

            let html = '';
            lifts.forEach(liftName => {
                const history = stats.liftData[liftName];
                const totalVolume = history.reduce((sum, entry) => sum + (entry.weight * entry.reps * (entry.sets || 5)), 0);
                const avgWeight = history.reduce((sum, entry) => sum + entry.weight, 0) / history.length;
                const completedLastSetValues = history.filter(e => e.lastSetValue !== undefined).length;

                html += `
                    <div class="lift-progress">
                        <div class="lift-name">${liftName}</div>
                        <div class="lift-stats">
                            <span>Avg: ${avgWeight.toFixed(1)} ${getWeightUnit()}</span>
                            <span>Volume: ${(totalVolume / 1000).toFixed(1)}k ${getWeightUnit()}</span>
                            <span>${isRIRProgram() ? 'RIRs' : 'AMRAPs'}: ${completedLastSetValues}</span>
                        </div>
                    </div>
                `;
            });

            return html;
        }

        function renderPersonalRecords() {
            if (isRIRProgram()) {
                return '<p class="empty-state-note">Personal records are tracked for AMRAP-based programs only.</p>';
            }
            // Initialize personalRecords if it doesn't exist (for backward compatibility)
            if (!appData.personalRecords) {
                appData.personalRecords = {};
            }

            const prs = Object.keys(appData.personalRecords);
            if (prs.length === 0) {
                return '<p class="empty-state-note">Complete AMRAP sets to start tracking your personal records!</p>';
            }

            // Sort PRs by estimated 1RM descending
            const sortedPRs = prs.map(exerciseName => ({
                name: exerciseName,
                ...appData.personalRecords[exerciseName]
            })).sort((a, b) => b.estimated1RM - a.estimated1RM);

            let html = '<div class="pr-list">';
            sortedPRs.forEach(pr => {
                const date = new Date(pr.date);
                const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

                html += `
                    <div class="pr-card">
                        <div class="pr-card-header">
                            <div>
                                <div class="pr-card-title">${pr.name}</div>
                                <div class="pr-card-meta">
                                    ${pr.weight} ${getWeightUnit()} × ${pr.reps} reps
                                    <span>e1RM: ${Math.round(pr.estimated1RM)} ${getWeightUnit()}</span>
                                </div>
                            </div>
                            <div class="pr-card-date">
                                <div>Week ${pr.week}</div>
                                <div>${formattedDate}</div>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';

            return html;
        }

        // Setup functions
        function showSetup() {
            document.getElementById('setup-overlay').classList.add('active');
            updateProgramVariants();
        }

        function hideSetup() {
            document.getElementById('setup-overlay').classList.remove('active');
        }

        function updateProgramVariants() {
            const programType = document.getElementById('setup-program-type').value;
            const programSelect = document.getElementById('setup-program');
            const currentValue = programSelect.value;

            // Clear existing options
            programSelect.innerHTML = '';

            // Add base options (2x-5x)
            const baseOptions = [
                { value: '2x', label: '2x - 2 days per week' },
                { value: '3x', label: '3x - 3 days per week' },
                { value: '4x', label: '4x - 4 days per week' },
                { value: '5x', label: '5x - 5 days per week' }
            ];

            baseOptions.forEach(opt => {
                const option = document.createElement('option');
                option.value = opt.value;
                option.textContent = opt.label;
                programSelect.appendChild(option);
            });

            // Add 6x option for hypertrophy only
            if (programType === 'hypertrophy') {
                const option = document.createElement('option');
                option.value = '6x';
                option.textContent = '6x - 6 days per week';
                programSelect.appendChild(option);
            }

            // Restore previous selection if still valid, otherwise default to 3x
            if (currentValue && (programType === 'hypertrophy' || currentValue !== '6x')) {
                programSelect.value = currentValue;
            } else {
                programSelect.value = '3x';
            }

            // Temporarily update appData.programType to show correct weeks in selector
            const oldProgramType = appData.programType;
            appData.programType = programType;
            updateWeekSelectors();
            appData.programType = oldProgramType;
        }

        function completeSetup() {
            // Get values from setup form
            const programType = document.getElementById('setup-program-type').value;
            const selectedProgram = document.getElementById('setup-program').value;
            const startWeek = parseInt(document.getElementById('setup-week').value);
            const squat1RM = parseFloat(document.getElementById('setup-squat').value);
            const bench1RM = parseFloat(document.getElementById('setup-bench').value);
            const deadlift1RM = parseFloat(document.getElementById('setup-deadlift').value);
            const ohp1RM = parseFloat(document.getElementById('setup-ohp').value);
            const blockPulls1RM = parseFloat(document.getElementById('setup-block-pulls').value);

            // Get auxiliary exercise selections
            const squatAux1 = document.getElementById('setup-squat-aux-1').value;
            const squatAux2 = document.getElementById('setup-squat-aux-2').value;
            const benchAux1 = document.getElementById('setup-bench-aux-1').value;
            const benchAux2 = document.getElementById('setup-bench-aux-2').value;
            const deadliftAux = document.getElementById('setup-deadlift-aux').value;
            const ohpAux = document.getElementById('setup-ohp-aux').value;

            // Validate inputs
            if (isNaN(squat1RM) || isNaN(bench1RM) || isNaN(deadlift1RM) || isNaN(ohp1RM)) {
                showToast('Please enter valid numbers for all 1RM values.', 'error', 4000);
                return;
            }

            // Update app data
            appData.programType = programType;
            appData.selectedProgram = selectedProgram;
            appData.currentWeek = startWeek;
            appData.currentDay = 1;  // Reset to day 1
            appData.oneRepMaxes = {
                squat: squat1RM,
                bench: bench1RM,
                deadlift: deadlift1RM,
                ohp: ohp1RM,
                blockPulls: Number.isFinite(blockPulls1RM) ? blockPulls1RM : Math.round(deadlift1RM * 1.05 * 4) / 4
            };
            appData.auxiliaryExercises = {
                'squat-aux-1': squatAux1,
                'squat-aux-2': squatAux2,
                'bench-aux-1': benchAux1,
                'bench-aux-2': benchAux2,
                'deadlift-aux': deadliftAux,
                'ohp-aux': ohpAux
            };
            appData.setupComplete = true;

            // Load the starting week
            if (!appData.workouts[startWeek]) {
                appData.workouts[startWeek] = getWeekData(startWeek);
            }

            // Save and update UI
            saveData();
            updateWeekSelectors();
            hideSetup();
            prepareCurrentDay();
            renderWorkout();

            // Update settings inputs
            document.getElementById('1rm-squat').value = squat1RM;
            document.getElementById('1rm-bench').value = bench1RM;
            document.getElementById('1rm-deadlift').value = deadlift1RM;
            document.getElementById('1rm-ohp').value = ohp1RM;
            document.getElementById('1rm-block-pulls').value = appData.oneRepMaxes.blockPulls;
            document.getElementById('week-selector').value = startWeek;
        }

        function checkSetupNeeded() {
            if (!appData.setupComplete) {
                showSetup();
            }
        }

        function updateWeekSelectors() {
            const maxWeek = getMaxWeek();
            const selectors = ['week-selector', 'setup-week'];

            selectors.forEach(selectorId => {
                const select = document.getElementById(selectorId);
                if (!select) return;

                const currentValue = select.value;
                select.innerHTML = '';

                for (let week = 1; week <= maxWeek; week++) {
                    const option = document.createElement('option');
                    option.value = week;

                    // Add deload labels
                    if (week === 7 || week === 14) {
                        option.textContent = `Week ${week} (Deload)`;
                    } else {
                        option.textContent = `Week ${week}`;
                    }

                    select.appendChild(option);
                }

                // Restore previous selection if still valid
                if (currentValue && parseInt(currentValue) <= maxWeek) {
                    select.value = currentValue;
                }
            });
        }

        async function initApp() {
            await loadData();
            loadHevyState();
            loadTheme(); // Load saved theme preference
            updateWeekSelectors();
            checkSetupNeeded();
            prepareCurrentDay();
            renderWorkout();
            if (window.initSyncUI) {
                window.initSyncUI();
            }

            // Update 1RM inputs
            document.getElementById('1rm-squat').value = appData.oneRepMaxes.squat;
            document.getElementById('1rm-bench').value = appData.oneRepMaxes.bench;
            document.getElementById('1rm-deadlift').value = appData.oneRepMaxes.deadlift;
            document.getElementById('1rm-ohp').value = appData.oneRepMaxes.ohp;
            document.getElementById('1rm-block-pulls').value = appData.oneRepMaxes.blockPulls;
            document.getElementById('week-selector').value = appData.currentWeek;

            // Load auxiliary exercise settings
            loadAuxiliarySettings();
            initSettingsNavigation();
        }

        initApp();

        window.getAppData = getAppData;
    
