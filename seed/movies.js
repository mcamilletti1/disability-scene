const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
        {
            title: "The Fundamentals of Caring",
            mediaType: "Movie",
            year: 2016,
            genre: ["Comedy", "Drama"],
            duration: 97,
            actors: ["Paul Rudd", "Selena Gomez", "Jennifer Ehle", "Craig Roberts", "Megan Ferguson", "Julia Denton", "Alex Huff", "Samantha Huskey", "Bill Murphey", "Donna Biscoe", "Rob Burnett", "Rob Burnett", "Rob Burnett", "Donna Gigliotti", "James Spies", "Jamal Daniel", "Renee Witt", "Giles Nuttgens", "Christopher Passig", "Ryan Miller", "Meghan C. Rogers", "Gershon Ginsburg", "Maria Nay", "Peggy Stamper", "Andrea Craven", "Tara Feldstein"],
            characters: ["Ben Benjamin", "Dot", "Elsa", "Trevor", "Peaches", "Janet", "Jodie", "Kaitlin", "Mike", "Caregiving Instructor", "Director", "Screenwriter", "Producer", "Producer", "Producer", "Executive Producer", "Executive Producer", "Cinematographer", "Film Editing", "Original Music", "Production Design", "Art Director", "Set Decoration", "Costume Design", "Casting", "Casting"],
            disabilities: ["Duchenne Muscular Dystophy", "Muscular Dystrophy"],
            themes: ["Personal care assistance", "Caregiving", "Dating", "Parent Relationships", "Travel", "Mortality", "Romance"],
            img: new URL("https://upload.wikimedia.org/wikipedia/en/3/3b/The_Fundamentals_of_Caring_poster.jpg")
        },
        {
            title: "Forrest Gump",
            mediaType: "Movie",
            year: 1994,
            genre: ["Drama", "Romance"],
            duration: 142,
            actors: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Mykelti Williamson", "Sally Field", "Rebecca Williams", "Micahel Conner Humphreys", "Harold G. Herthum", "George Kelly", "Bob Penny", "John Randall", "Sam Anderson", "Margo Moorer", "Ione M Telech", "Peter Dobson", "Siobhan Fallon", "Tyler Long", "Christopher Jones", "Grady Bowman", "Jason McGuire", "Robert Zemeckis", "Winston Groom", "Eric Roth", "Wendy Finerman", "Steve Starkey", "Steve Tisch", "Alan Silvestri", "Don Burgess", "Arthur Schmidt", "Ellen Lewis", "Rick Carter", "Leslie McDonald", "William James Teegarden", "Nancy Haigh", "Joanna Johnston"],
            characters: ["Forrest Gump", "Jenny Curran", "Lt. Dan Taylor", "Pvt. Benjamin Buford 'Bubba' Blue", "Mrs. Gump", "Nurse at park bench", "Young Forrest Gump", "Doctor", "Barber", "Crony", "Crony", "Principal", "Louise, Mrs. Gump's housekeeper", "Elderly Woman", "Elvis Presley", "Dorothy Harris, school bus driver", "Red Headed Boy", "Boy with Cross", "Fat Boy", "Fat Teen", "Director", "Writer", "Screenwriter", "Producer", "Producer", "Producer", "Original Music", "Cinematographer", "Film Editing", "Casting", "Production Design", "Art Director", "Art Director", "Set Decoration", "Costume Design"],
            disabilities: ["Scoliosis", "Amputee"],
            themes: ["Intelligence", "Disabled Veteran", "Friendship", "Romance", "War", "Race and Disability", "History"],
            img: new URL("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg")
        },
        {
            title: "Hush",
            mediaType: "Movie",
            year: 2016,
            genre: ["Horror", "Thriller"],
            duration: 82,
            actors: ["John Gallagher Jr.", "Kate Siegel", "Michael Trucco", "Samantha Sloyan", "Emma Graves", "Mike Flanagan", "Mike Flanagan", "Kate Siegel", "Jason Blum", "Trevor Macy", "Jeanette Volturno", "Michael J. Fourticq Sr.", "Kate Lumpkin", "Couper Samuelson", "The Newton Brothers", "James Kniest", "Mike Flanagan", "Elizabeth Boller", "Jaan Childs"],
            characters: ["Man", "Maddie", "John", "Sarah", "Max", "Director", "Screenwriter", "Screenwriter", "Producer", "Producer", "Executive Producer", "Executive Producer", "Executive Producer", "Executive Producer", "Original Music", "Cinematographer", "Film Editing", "Production Design", "Set Decoration"],
            disabilities: ["Deaf", "Mute", "Deaf-Mute", "Non-verbal"],
            themes: ["Disability and Gender", "Disability Horror"],
            img: new URL("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zHzBTd502IZf60x8n2g0TB01vPF.jpg")
        },
        {
            title: "The Shape of Water",
            mediaType: "Movie",
            year: 2017,
            genre: ["Drama", "Fantasy", "Romance"],
            duration: 123,
            actors: ["Sally Hawkins", "Michael Shannon", "Richard Jenkins", "Octavia Spencer", "Michael Stuhlbarg", "Doug Jones", "David Hewlett", "Nick Searcy", "Stewart Arnott", "Nigel Bennett", "Lauren Lee Smith", "Martin Roach", "Allegra Fulton", "John Kapelos", "Morgan Kelly", "Guillermo del Toro", "Guillermo del Toro", "Vanessa Taylor", "Guillermo del Toro", "J. Miles Dale", "Liz Sayre", "Dan Laustsen", "Sidney Wolinksy", "Alexandre Desplat", "Paul Denham Austerberry", "Nigel Churcher", "Shane Vieau", "Jeffrey A. Melvin", "Luis Sequeira", "Robin D. Cook"],
            characters: ["Elisa Esposito", "Richard Strickland", "Giles", "Zelda Fuller", "Dr. Robert Hoffstetler", "Amphibian Man", "Fleming", "General Hoyt", "Bernard", "Mihalkov", "Elaine Strickland", "Brewster Fuller", "Yolanda", "Mr. Arzoumanian", "Pie Guy", "Director", "Screenwriter", "Screenwriter", "Producer", "Producer", "Producer", "Cinematographer", "Film Editing", "Original Music", "Production Design", "Art Director", "Set Decoration", "Set Decoration", "Costume Design", "Casting"],
            disabilities: ["Non-verbal", "Mute"],
            themes: ["Romance", "Discrimination", "Friendship", "Ableism"],
            img: new URL("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg")
        },
        {
            title: "Don't Worry, He Won't Get Far on Foot",
            mediaType: "Movie",
            year: 2018,
            genre: ["Biography", "Comedy", "Drama"],
            duration: 114,
            actors: ["Joaquin Phoenix", "Jonah Hill", "Rooney Mara", "Jack Black", "Carrie Brownstein", "Beth Ditto", "Kim Gordon", "Udo Kier", "Emilio Rivera", "Tony Greenhand", "Mark Webber", "Ronnie Adrian", "Angelique Rivera", "Rebecca Rittenhouse", "Jessica Jade Andres", "Rebecca Field", "Olivia Hamilton", "Santina Muha", "Christopher Thornton", "Edgar Momplaisir", "Gus Van Sant", "Gus Van Sant", "Charles-Marie Anthonioz", "Mourad Belkeddar", "Steve Golin", "Nicolas Lhermitte", "Chritopher Blauvelt", "Gus Van Sant", "David Marks", "Danny Elfman", "Jahmin Assa", "Danny Glicker", "Francine Maisler", "Kathy Driscoll"],
            characters: ["John Callahan", "Donnie", "Annu", "Dexter", "Suzanne", "Reba", "Corky", "Hans", "Jesus Alvarado", "Tim", "Mike", "Martingale", "Terry Alvarado", "Bonnie", "Cindy", "Margie Bighew", "Nurse Lilly", "Debbie", "Charles-Marie", "Roger Fairies", "Director", "Screenwriter", "Producer", "Producer", "Producer", "Producer", "Cinematographer", "Film Editing", "Film Editing", "Original Music", "Production Design", "Costume Design", "Casting", "Casting"],
            disabilities: ["Quadriplegic", "Wheelchair-user"],
            themes: ["Car Accident", "Addiction", "Disabled Later in Life", "Disability and Sex"],
            img: new URL("https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rKsiN37qMt8jad5GikZzSeevyI9.jpg")
        }
    ]

    await Movie.insertMany(movies)
    console.log('Created movies!')
}

const run = async () => {
    await main()
    db.close()
}

run()