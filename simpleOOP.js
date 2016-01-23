// Write a statement that outputs the following:

// The city of the library

// The name of the library

// The bestBook in the library

// The title of the bestBook in the library

// The company of the bestBook in the library

// The publisher of the company of the bestBook in the library

var library = {
    city: "San Francisco",
    name: "SF Public",
    bestBook: {
            title: "JavaScript for Dummies",
            company: {
                name: "BookCo",
                employees: {
                    writers: [
                        {
                            firstName: "Bob",
                            lastName: "Marley",
                        }
                    ],
                    publisher: {
                        firstName: "Fred",
                        lastName: "Bambam"
                    }
                }
            }
        }
    }
}

