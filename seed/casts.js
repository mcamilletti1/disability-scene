const db = require('../db')
const { Cast, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    try {
    const fundamentalsOfCaring = await Movie.find({ title: "The Fundamentals of Caring" })
    const forrestGump = await Movie.find({ title: "Forrest Gump" })
    const casts = [
        {
            name: "Paul Rudd",
            credits: fundamentalsOfCaring[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/xDg-it3VJIKrSQRQQBi-VuwOw-w=/100x120/v2/https://flxt.tmsimg.com/assets/50640_v9_bb.jpg")
        },
        {
            name: "Selena Gomez",
            credits: fundamentalsOfCaring[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/vIn7nGTc7foBleU5aNxUH-EHpqE=/100x120/v2/https://flxt.tmsimg.com/assets/506666_v9_bc.jpg")
        },
        {
            name: "Jennifer Ehle",
            credits: fundamentalsOfCaring[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/-UFQyEYRtBa0agTJysdiwivPKlg=/100x120/v2/https://flxt.tmsimg.com/assets/76517_v9_bb.jpg")
        },
        {
            name: "Craig Roberts",
            credits: fundamentalsOfCaring[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/LNGqQ2wfuFyQa69qsSa304EoF4o=/100x120/v2/https://flxt.tmsimg.com/assets/519720_v9_bb.jpg")
        },
        {
            name: "Megan Ferguson",
            credits: fundamentalsOfCaring[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/TK3OX4UqeK76zU9w9-bsGqFkKzs=/100x120/v2/https://flxt.tmsimg.com/assets/751474_v9_ba.jpg")
        },
        {
            name: "Julia Denton",
            credits: fundamentalsOfCaring[0]._id,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BMDUzNTc5ZmQtOWVjMy00YzFmLWI2YmYtNWU3OWRkZTkxM2IxXkEyXkFqcGdeQXVyMTkwMTE4NjM@._V1_.jpg")
        },
        {
            name: "Alex Huff",
            credits: fundamentalsOfCaring[0]._id,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BNmFlNzBmMDMtNGRiZS00ZTk4LWFiMzAtZjAwMDlmZTFhMGNmXkEyXkFqcGdeQXVyNDkyNTUwNTY@._V1_.jpg")
        },
        {
            name: "Samantha Huskey",
            credits: fundamentalsOfCaring[0]._id,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BNmE3MmE4MGYtZjc0OS00NDZlLTkxMDgtYjg0YzhhMDAyY2IyXkEyXkFqcGdeQXVyMjIxMDc5MDY@._V1_.jpg")
        },
        {
            name: "Bill Murphey",
            credits: fundamentalsOfCaring[0]._id,
            title: "Actor",
            img: new URL("https://encoreatlanta.com/wp-content/uploads/2010/08/Bill_Murphey.jpg")

        },
        {
            name: "Donna Biscoe",
            credits: fundamentalsOfCaring[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/1vF0YQy6_C9Gz0duV5RBc7JvDVA=/100x120/v2/https://flxt.tmsimg.com/assets/125340_v9_ab.jpg")
        },
        {
            name: "Rob Burnett",
            credits: fundamentalsOfCaring[0]._id,
            title: "Director, Screenwriter, Producer",
            img: new URL("https://resizing.flixster.com/1ermthdQH1Cz1eZUSYkXxVUjI5I=/100x120/v2/https://flxt.tmsimg.com/assets/346580_v9_ba.jpg")
        },
        {
            name: "Donna Gigliotti",
            credits: fundamentalsOfCaring[0]._id,
            title: "Producer",
            img: new URL("https://resizing.flixster.com/-8gix1U0hrsNW3VQMrT51G982jw=/100x120/v2/https://flxt.tmsimg.com/assets/310727_v9_ba.jpg")
        },
        {
            name: "James Spies",
            credits: fundamentalsOfCaring[0]._id,
            title: "Producer",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Jamal Daniel",
            credits: fundamentalsOfCaring[0]._id,
            title: "Executive Producer",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Renee Witt",
            credits: fundamentalsOfCaring[0]._id,
            title: "Executive Producer",
            img: new URL("https://images.mubicdn.net/images/cast_member/158074/cache-559025-1592889540/image-w856.jpg?size=800x")
        },
        {
            name: "Giles Nuttgens",
            credits: fundamentalsOfCaring[0]._id,
            title: "Cinematographer",
            img: new URL("https://www.themoviedb.org/t/p/w235_and_h235_face/jz40SpwgZtAshuVWq2ThsGpxObs.jpg")
        },
        {
           name: "Christopher Passig",
           credits: fundamentalsOfCaring[0]._id,
           title: "Film Editing",
           img: new URL("https://m.media-amazon.com/images/M/MV5BY2VhMTU3YzMtODJmMy00MDlhLWE2ODctYjZiNjM5NmRmNDVkXkEyXkFqcGdeQXVyNzQyMjgzNA@@._V1_.jpg")
        },
        {
            name: "Ryan Miller",
            credits: fundamentalsOfCaring[0]._id,
            title: "Original Music",
            img: new URL("https://upload.wikimedia.org/wikipedia/commons/5/5e/Ryan_miller_2010.jpg")
        },
        {
            name: "Meghan C. Rogers",
            credits: fundamentalsOfCaring[0]._id,
            title: "Production Design",
            img: new URL("https://images.squarespace-cdn.com/content/v1/5eab1bafda7c275fd55b8f92/1588281136269-WX9S0WPSB9QE43IFQ6GO/MR_still2.jpg?format=500w")
        },
        {
            name: "Gershon Ginsburg",
            credits: fundamentalsOfCaring[0]._id,
            title: "Art Director",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Maria Nay",
            credits: fundamentalsOfCaring[0]._id,
            title: "Set Decoration",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Peggy Stamper",
            credits: fundamentalsOfCaring[0]._id,
            title: "Costume Design",
            img: new URL("https://img1.wsimg.com/isteam/ip/34d9366c-17b3-4fdc-9393-6504b2ca2700/7d03f2f0-3ca4-4796-a90f-233d31dd95e5.jpg/:/rs=w:400,cg:true,m")
        },
        {
            name: "Andrea Craven",
            credits: fundamentalsOfCaring[0]._id,
            title: "Casting",
            img: new URL("https://media.licdn.com/dms/image/C4E03AQEzVp8UE8ykiw/profile-displayphoto-shrink_800_800/0/1622470511509?e=2147483647&v=beta&t=Gnb28favWCiG1LQd-LLXNl3xQMVs0USrLUPxbxzeSUI")
        },
        {
            name: "Tara Feldstein",
            credits: fundamentalsOfCaring[0]._id,
            title: "Casting",
            img: new URL("https://resizing.flixster.com/UG0p27gR3xk_95NZ4fu9sOfImiY=/100x120/v2/https://flxt.tmsimg.com/assets/985822_v9_ba.jpg")
        },
        {
            name: "Tom Hanks",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/HeUcXdScabNAup9uSQn4ll9wZEs=/100x120/v2/https://flxt.tmsimg.com/assets/62982_v9_bb.jpg")
        },
        {
            name: "Robin Wright",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/hXertawceMj96qXcNZT5mG2NrJE=/100x120/v2/https://flxt.tmsimg.com/assets/55876_v9_bc.jpg")
        },
        {
            name: "Gary Sinise",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/4RoZ46RaTB2bbTVkGu1H3pZDbmE=/100x120/v2/https://flxt.tmsimg.com/assets/22818_v9_bb.jpg")
        },
        {
            name: "Mykelti Williamson",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/i6slHgWmcC4MRofeMSF4dZuy9XE=/100x120/v2/https://flxt.tmsimg.com/assets/47337_v9_bc.jpg")
        },
        {
            name: "Sally Field",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/xLZwugf_NhLLe2xnsSaPMIMa8bk=/100x120/v2/https://flxt.tmsimg.com/assets/57499_v9_ba.jpg")
        },
        {
            name: "Rebecca Williams",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BZGVmNzAzODctNjI4MS00MzI2LThiZDItOGIyZGJlNDZmZDI5XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_QL75_UY207_CR131,0,140,207_.jpg")
        },
        {
            name: "Michael Conner Humphreys",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BNDE1NGY4ODAtODMxMS00YjU2LTk3ZWItMDFkNDAzOWJhZDE0XkEyXkFqcGdeQXVyNTgzMzk4NDQ@._V1_FMjpg_UX1000_.jpg")
        },
        {
            name: "Harold G. Herthum",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://images.kinorium.com/persona/180/287087.jpg?1480254121")
        },
        {
            name: "George Kelly",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Bob Penny",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://www.al.com/resizer/VxyNQW21ddbkx9sJD3MYDPBAfsw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/5MS33PSH2VDVBPLMCASWQFM3NQ.jpg")
        },
        {
            name: "John Randall",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Sam Anderson",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/W5UOC0FO9KKH9GZIC_gqcttU2AY=/100x120/v2/https://flxt.tmsimg.com/assets/79455_v9_bb.jpg")
        },
        {
            name: "Margo Moorer",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BMjdiMjgzYmMtNzJkNC00OTU5LTg4OTctYzViMjQ0YWYyYWI1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg")
        },
        {
            name: "Ione M. Telech",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://cache.legacy.net/legacy/images/cobrands/islandpacket/photos/photo_014501_C0A80180190d732007ZRt68903EC_1_49ed652ffa008dd99fe7a625970e2294_20151027.jpgx?w=141&h=180&option=3")
        },
        {
            name: "Peter Dobson",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/3liI4OIrdSRdvqOnuUZjXeG_N08=/100x120/v2/https://flxt.tmsimg.com/assets/71720_v9_ba.jpg")
        },
        {
            name: "Siobhan Fallon",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/XLPuSs7CsoReVhCPfFlp4biasIg=/100x120/v2/https://flxt.tmsimg.com/assets/70841_v9_bb.jpg")
        },
        {
            name: "Tyler Long",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://www.themoviedb.org/t/p/w500/bYnBUzr2aR3eTjJBwpfGQFUYaRX.jpg")
        },
        {
            name: "Christopher Jones",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/nzrulVtl79GzgV7hCgFAzbHaFTg=/100x120/v2/https://flxt.tmsimg.com/assets/658766_v9_ba.jpg")
        },
        {
            name: "Grady Bowman",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://www.broadwaydancecenter.com/sites/default/files/styles/bdc_max_width_1000px_/public/faculty-images/bowman_grady4.jpg?itok=1XiAhioz")
        },
        {
            name: "Jason McGuire",
            credits: forrestGump[0]._id,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BZTBkNjZjZjctYjYzYi00ZjBlLThjNDktOTU3N2RjZDNlZDM2L2ltYWdlXkEyXkFqcGdeQXVyMTEzNzczMA@@._V1_QL75_UY207_CR86,0,140,207_.jpg")
        },
        {
            name: "Robert Zemeckis",
            credits: forrestGump[0]._id,
            title: "Director",
            img: new URL("https://resizing.flixster.com/PqIEs_wYx16RC9gK8fXja9pWV5c=/100x120/v2/https://flxt.tmsimg.com/assets/1983_v9_bc.jpg")
        },
        {
            name: "Winston Groom",
            credits: forrestGump[0]._id,
            title: "Writer",
            img: new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Winston_Groom_%28cropped%29.jpg/640px-Winston_Groom_%28cropped%29.jpg")
        },
        {
            name: "Eric Roth",
            credits: forrestGump[0]._id,
            title: "Screenwriter",
            img: new URL("https://resizing.flixster.com/_CZsHA2-OOjyGwGSyEaGvI99y2Q=/100x120/v2/https://flxt.tmsimg.com/assets/282157_v9_bb.jpg")
        },
        {
            name: "Wendy Finerman",
            credits: forrestGump[0]._id,
            title: "Producer",
            img: new URL("https://resizing.flixster.com/fSv7z0C4AgbXgEwW6fi6VaIrC2k=/100x120/v2/https://flxt.tmsimg.com/assets/364700_v9_ba.jpg")
        },
        {
            name: "Steve Starkey",
            credits: forrestGump[0]._id,
            title: "Producer",
            img: new URL("https://resizing.flixster.com/d-8S2bizYw0WcZyeLuL5qR9F2hM=/100x120/v2/https://flxt.tmsimg.com/assets/427326_v9_ba.jpg")
        },
        {
            name: "Steve Tisch",
            credits: forrestGump[0]._id,
            title: "Producer",
            img: new URL("https://resizing.flixster.com/o97fbSfxjqsUDydpqUsTZAxGZv8=/100x120/v2/https://flxt.tmsimg.com/assets/431966_v9_ba.jpg")
        },
        {
            name: "Alan Silvestri",
            credits: forrestGump[0]._id,
            title: "Original Music",
            img: new URL("https://resizing.flixster.com/KmKHkGClcN7OUeSmaEYu95tFhb4=/100x120/v2/https://flxt.tmsimg.com/assets/457378_v9_bb.jpg")
        },
        {
            name: "Don Burgess",
            credits: forrestGump[0]._id,
            title: "Cinematographer",
            img: new URL("https://m.media-amazon.com/images/M/MV5BNmMxNzFlMDgtZWU5YS00MDkyLTgwMTgtNmE5ZDY1NTBkNTA0XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg")
        },
        {
            name: "Arthur Schmidt",
            credits: forrestGump[0]._id,
            title: "Film Editing",
            img: new URL("https://resizing.flixster.com/Yqw1lNNskcmjTumeTYbcZkslo8Q=/100x120/v2/https://flxt.tmsimg.com/assets/457375_v9_ba.jpg")
        },
        {
            name: "Ellen Lewis",
            credits: forrestGump[0]._id,
            title: "Casting",
            img: new URL("https://resizing.flixster.com/mUlUX_v3ygHTfHiLnYnKx9nHyGc=/100x120/v2/https://flxt.tmsimg.com/assets/457592_v9_ba.jpg")
        },
        {
            name: "Rick Carter",
            credits: forrestGump[0]._id,
            title: "Production Design",
            img: new URL("https://resizing.flixster.com/n2NNTVAj9JCPFnpK_tvz7_R4sCE=/100x120/v2/https://flxt.tmsimg.com/assets/348757_v9_bb.jpg")
        },
        {
            name: "Leslie McDonald",
            credits: forrestGump[0]._id,
            title: "Art Director",
            img: new URL("https://images.mubicdn.net/images/cast_member/131523/cache-290483-1513237858/image-w856.jpg?size=800x")
        },
        {
            name: "William James Teegarden",
            credits: forrestGump[0]._id,
            title: "Art Director",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Nancy Haigh",
            credits: forrestGump[0]._id,
            title: "Set Decoration",
            img: new URL("https://m.media-amazon.com/images/M/MV5BNDg5YWQzMDctNWQyZC00ZTY4LWI0ZjQtMjU0MGQwMjU1NTIyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY1200_CR586,0,630,1200_AL_.jpg")
        },
        {
            name: "Joanna Johnston",
            credits: forrestGump[0]._id,
            title: "Costume Design",
            img: new URL("https://resizing.flixster.com/RURsDcmstTRsTp05eFqNm58cvfU=/100x120/v2/https://flxt.tmsimg.com/assets/460132_v9_ba.jpg")
        }
    ]

    await Cast.insertMany(casts)
    console.log('Created cast members with movies!')
} catch (error) {
    console.error("Error seeding database", error)
}
}

const run = async () => {
    await main()
    db.close()
}

run()