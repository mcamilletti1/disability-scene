const db = require('../db')
const { Review, Movie } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    const fundamentalsOfCaring = await Movie.find({ title: "The Fundamentals of Caring" })
    console.log(fundamentalsOfCaring)
    const forrestGump = await Movie.find({ title: "Forrest Gump" })
    const reviews = [
        {
         movie: fundamentalsOfCaring[0]._id,
         title: "Surprisingly Pleasant and Overly Warming",
         reviewerName: "Christopher Stone",
         reviewText: "I never review movies, but this is an exception. I haven't been so pleasantly surprised by a movie in such a long time and I really have to commend the cast for doing such a great job. The movie was heartfelt from start to finish. Would definitely recommend to other disabled folks!",
         date: "27 June 2016",
         castingScore: 5,
         characterScore: 1.5,
         originalityScore: 4,
         accuracyScore: 2.5
        },
        {
            movie: fundamentalsOfCaring[0]._id,
            title: "Easy to Care About",
            reviewerName: "Lisa Lockson",
            reviewText: "Novels about teenagers disabled or dying have become hugely popular lately. Looking at books like 'The Fault in Our Stars,' 'The Beginning of Everything', and 'Wonder', it's clear that the way to engage with a modern audience is to tell a sad story about disability.",
            date: "29 June 2016",
            castingScore: 4.5,
            characterScore: 2,
            originalityScore: 3.5,
            accuracyScore: 2
        },
        {
            movie: forrestGump[0]._id,
            title: "Not Good Disability Representation",
            reviewerName: "Ken Hanke",
            reviewText: "Gets my vote for the most offensive, morally repugnant film ever made.",
            date: "2 October 2002",
            castingScore: 0,
            characterScore: 1,
            originalityScore: 1,
            accuracyScore: 1
        },
        {
            movie: forrestGump[0]._id,
            title: "Life's Not a Box of Chocolates",
            reviewerName: "Howland Crowe",
            reviewText: "All the left-wing activism in the film becomes crude caricature, Black people made into aesthetically interesting scenery, and the disabilities and disorders of our heroes merely obstacles to overcome. Forrest is able to walk without braces by “magic.” Lieutenant Dan is able to walk again with prosthetics. And Forrest’s son with Jenny, who dies of a virus implied to be AIDS, shows no signs of having any mental disorders that would mark him as different from other children. Forrest Gump’s mental disorder is less a commentary on ableism and more a vehicle for his impenetrable innocence to exorcise America of its sins. That’s why Forrest isn’t relatable to me, because he’s not representative of people with disabilities and disorders and he was never meant to be. He’s a representative of American “innocence.”",
            date: "2 December 2020",
            castingScore: 1,
            characterScore: 1,
            originalityScore: 1,
            accuracyScore: 0
        }
    ]

    await Review.insertMany(reviews)
    console.log('Created reviews with movies!')
}

const run = async () => {
    await main()
    db.close()
}

run()