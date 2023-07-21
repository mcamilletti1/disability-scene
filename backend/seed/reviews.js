const db = require('../db')
const { Review, Movie } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    const fundamentalsOfCaring = await Movie.find({ title: "The Fundamentals of Caring" })
    console.log(fundamentalsOfCaring)
    const forrestGump = await Movie.find({ title: "Forrest Gump" })
    const hush = await Movie.find({ title: "Hush" })
    const shapeOfWater = await Movie.find({ title: "The Shape of Water" })
    const dontWorryHe = await Movie.find({ title: "Don't Worry, He Won't Get Far on Foot" })
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
        },
        {
            movie: hush[0]._id,
            title: "What could have been tedious, one house with one mute girl inside, was the exact opposite with a few twists and turns worth a watch or two.",
            reviewerName: "Emilie Black",
            reviewText: "A deaf writer lives and works in her secluded home in the woods where she gets few visitors.  Then one night, a masked man shows up and stalks her in an unnerving game of cat and mouse. Director Mike Flannagan and lead actress Kate Siegel co-wrote Hush which all takes place in and around the lead’s, Maddie’s, home.  The limited settings work here as Maddie is trying to escape this mad man without help or access to the outside world.  This is a movie with a total of five characters, two of which support the bulk of the story.  The characters here feel real, not caricatures of real people or stereotypes.",
            date: "7 April 2016",
            castingScore: 4,
            characterScore: 4.5,
            originalityScore: 5,
            accuracyScore: 3.5
        },
        {
            movie: hush[0]._id,
            title: "Nothing makes me happier than a bit of originality in a film style normally filled with clichés.",
            reviewerName: "Jeremy Lowe",
            reviewText: "Kate Siegel plays Maddie, the deaf/mute protagonist of HUSH brilliantly. She is a strong independent woman and she is also a writer. Having Maddie be a writer living in an isolated area seems like something out of a Stephen King novel. I’m a huge fan of Stephen King, so this is high praise from me. The movie has barely started and I’m already in love with it! I also love Maddie’s neighbor Sarah (Samantha Sloyan). She’s so cute and friendly, and I love that she is teaching herself sign language to better communicate with Maddie. Their bond seems genuine, unforced.",
            date: "9 May 2016",
            castingScore: 4,
            characterScore: 4.5,
            originalityScore: 5,
            accuracyScore: 4
        },
        {
            movie: shapeOfWater[0]._id,
            title: "The Shape of Water probably had inclusive goals in mind, but execution is everything.",
            reviewerName: "Stan Clark",
            reviewText: "Before I dig into the injustice done to the deaf community and, at broader, the disabled community, I do want to give del Toro some credit for committing to a lead character who would carry the film’s story through nonverbal communication. This premise looks great on paper and a fantastic performance by a deaf actress could have transformed the tenor of this category altogether. Unfortunately, not only does del Toro hire a hearing actress who has played disabled characters in the past, the decision to employ American Sign Language (ASL) as Elisa’s main form of communication rings false to those who understand it.",
            date: "1 August 2020",
            castingScore: 0.5,
            characterScore: 2,
            originalityScore: 3.5,
            accuracyScore: 2.5
        },
        {
            movie: shapeOfWater[0]._id,
            title: "At its core, The Shape of Water is a film about being seen as a person without any asterisks.",
            reviewerName: "Ian Thomas Malone",
            reviewText: "Guillermo del Toro has always been an expert at crafting the world he wants his audience to exist in for the duration of his films. He ups the ante with The Shape of Water, a film that not only wows the viewer, but forces one to think about the way we view each other in a nation where diversity is often weaponized as a political tool. Elisa is mute, Giles is gay, Zelda is a person of color, and the “Asset” is a magical fish creature. These are details about these people, not singular traits that define their entire existence. We live in a world that often forgets to see people as people, or simply chooses not to. The film triumphs most when it flips this scenario, presenting characters who live and love without considering all the factors that set them apart.",
            date: "31 October 2018",
            castingScore: 3.5,
            characterScore: 4,
            originalityScore: 4,
            accuracyScore: 2
        },
        {
            movie: dontWorryHe[0]._id,
            title: "A Mediocre Work of Astounding Ableism",
            reviewerName: "Kristen Lopez",
            reviewText: "There comes a point during director Gus Van Sant’s Don’t Worry, He Won’t Get Far on Foot where main character John Callahan (Joaquin Phoenix) attends an AA meeting and brings up his disability. It’s a fact of his life that he’s paralyzed and in a wheelchair, and he happens to be an alcoholic as well. Instead of hearing his story, meeting organizer Donnie (Jonah Hill) stops Callahan, telling him no one wants to hear that. Hill’s Donnie seems to be speaking for Van Sant himself, a man who hopes that this tale of a disabled man will compel you to watch while simultaneously being irritated that his lead character is disabled at all. As a writer with a disability, these movies already skate on thin ice, but Don’t Worry makes a case that Hollywood itself needs to tell a new disabled narrative, one that understands why disability is so important to begin with.",
            date: "17 July 2018",
            castingScore: 1,
            characterScore: 2,
            originalityScore: 2.5,
            accuracyScore: 2
        },
        {
            movie: dontWorryHe[0]._id,
            title: "The film finds its characters to only be the sum of their tragedies rather than human beings.",
            reviewerName: "Chris Feil",
            reviewText: "To limping effect, the film is more concerned with painting its protagonist in the tragically heroic light of survival in the face of his disability than examining the layers and struggle of his alcoholism. The unfortunate result is a film that falls on the side of offensive ableism rather than the loving portraiture of its intentions. Its pathos can’t get past fetishizing the mechanics of John’s paralysis, leaving us to wonder if the film has any interest deeper than the saccharine or comforting.",
            date: "24 July 2018",
            castingScore: 3,
            characterScore: 2,
            originalityScore: 1,
            accuracyScore: 3
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