const db = require('../db')
const { Cast, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    try {
    const fundamentalsOfCaring = await Movie.find({ title: "The Fundamentals of Caring" })
    const forrestGump = await Movie.find({ title: "Forrest Gump" })
    const hush = await Movie.find({ title: "Hush" })
    const shapeOfWater = await Movie.find({ title: "The Shape of Water" })
    const dontWorryHe = await Movie.find({ title: "Don't Worry, He Won't Get Far on Foot" })
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
        },
        {
            name: "John Gallagher Jr.",
            credits: hush[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/kQ2IgVgtCYhWw1bYl6TS4J6mPn8=/100x120/v2/https://flxt.tmsimg.com/assets/205722_v9_bb.jpg")
        },
        {
            name: "Kate Siegel",
            credits: hush[0]._id,
            title: "Actor, Screenwriter",
            img: new URL("https://resizing.flixster.com/nCloWgsd8BKISO7hwz0wUtd1gT4=/100x120/v2/https://flxt.tmsimg.com/assets/506732_v9_bb.jpg")
        },
        {
            name: "Michael Trucco",
            credits: hush[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/Z4PhC_IdwmYUtA8Br99sKu5uwJc=/100x120/v2/https://flxt.tmsimg.com/assets/199125_v9_bb.jpg")
        },
        {
            name: "Samantha Sloyan",
            credits: hush[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/krji-1im9LmVKuuIixOoMVXpC6A=/100x120/v2/https://flxt.tmsimg.com/assets/595762_v9_bb.jpg")
        },
        {
            name: "Emma Graves",
            credits: hush[0]._id,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BMDA5MjBiN2UtZmQyNS00MWI1LWIxYjItNjcxZTIwNWQ3MjMwXkEyXkFqcGdeQXVyMjg3NjU4MTc@._V1_.jpg")
        },
        {
            name: "Mike Flanagan",
            credits: hush[0]._id,
            title: "Director, Screenwriter, Film Editing",
            img: new URL("https://resizing.flixster.com/KHpiI81rEmqKr-VVqalcI0HTaNU=/100x120/v2/https://flxt.tmsimg.com/assets/630544_v9_bf.jpg")
        },
        {
            name: "Jason Blum",
            credits: hush[0]._id,
            title: "Producer",
            img: new URL("https://resizing.flixster.com/QwmcFmoizn_ldsdd_Mye5NsYhUE=/100x120/v2/https://flxt.tmsimg.com/assets/318219_v9_bc.jpg")
        },
        {
            name: "Trevor Macy",
            credits: hush[0]._id,
            title: "Producer",
            img: new URL("https://resizing.flixster.com/LTkr-UQglUxePWQtKK2ThZULySo=/100x120/v2/https://flxt.tmsimg.com/assets/394323_v9_ba.jpg")
        },
        {
            name: "Jeanette Volturno",
            credits: hush[0]._id,
            title: "Executive Producer",
            img: new URL("https://images.squarespace-cdn.com/content/v1/571bdafd2b8ddefbf1626f67/1530570779133-GUVLEUCOZFAOP2KNOZ5X/jeanette+IMG_4938+2+%282%29.jpeg")
        },
        {
            name: "Michael J. Fourticq Sr.",
            credits: hush[0]._id,
            title: "Executive Producer",
            img: new URL("https://images.mubicdn.net/images/cast_member/732852/cache-557240-1592368306/image-w856.jpg")
        },
        {
            name: "Kate Lumpkin",
            credits: hush[0]._id,
            title: "Executive Producer",
            img: new URL("https://images.squarespace-cdn.com/content/v1/564a11fbe4b0be3215aa52a9/1632775088352-3325BNAN5EPO5V8GMO32/Untitled+design+%2847%29.png?format=1000w")
        },
        {
            name: "Couper Samuelson",
            credits: hush[0]._id,
            title: "Executive Producer",
            img: new URL("https://resizing.flixster.com/R9I1iMtiaGoEciCPfWrArUbUdBY=/100x120/v2/https://flxt.tmsimg.com/assets/743136_v9_ba.jpg")
        },
        {
            name: "The Newton Brothers",
            credits: hush[0]._id,
            title: "Original Music",
            img: new URL("https://resizing.flixster.com/OFJN0IsV-GsthIs0PnxDpbd4T9c=/100x120/v2/https://flxt.tmsimg.com/assets/540365_v9_bb.jpg")
        },
        {
            name: "James Kniest",
            credits: hush[0]._id,
            title: "Cinematographer",
            img: new URL("https://www.btlnews.com/wp-content/uploads/2020/10/JamesKniest-229x300.jpg")
        },
        {
            name: "Elizabeth Boller",
            credits: hush[0]._id,
            title: "Production Design",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Jaan Childs",
            credits: hush[0]._id,
            title: "Set Decoration",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Sally Hawkins",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/eYKqo6mbUCFzkWwfDQ-Q_kFqXck=/100x120/v2/https://flxt.tmsimg.com/assets/274613_v9_bc.jpg")
        }, 
        {
            name: "Michael Shannon",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/k23tvyyXyuvzg_qpIsDUGCn_OvA=/100x120/v2/https://flxt.tmsimg.com/assets/225797_v9_bb.jpg")
        }, 
        {
            name: "Richard Jenkins",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/VUbXnf21AwsXEDWJlowWL51ZN5o=/100x120/v2/https://flxt.tmsimg.com/assets/76717_v9_bb.jpg")
        }, 
        {
            name: "Octavia Spencer",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/vPGaqFeQegT1m5hmYzY-XKG6vdk=/100x120/v2/https://flxt.tmsimg.com/assets/221666_v9_bc.jpg")
        }, 
        {
            name: "Michael Stuhlbarg",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/0fl4QYjnTMXkSQ9QFlhM2H3GERU=/100x120/v2/https://flxt.tmsimg.com/assets/428835_v9_bc.jpg")
        },
        {
            name: "Doug Jones",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/AWDy4crdV-dhX7OlA6VXFCql9c8=/100x120/v2/https://flxt.tmsimg.com/assets/201034_v9_bc.jpg")
        },
        {
            name: "David Hewlett",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/Kr8l2D6VcPJFbu7CfqgcZORbDjg=/100x120/v2/https://flxt.tmsimg.com/assets/83720_v9_bb.jpg")
        },
        {
            name: "Nick Searcy",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/vgq-z_S4MZpvPzZkz_vYcNo48MY=/100x120/v2/https://flxt.tmsimg.com/assets/48236_v9_ba.jpg")
        },
        {
            name: "Stewart Arnott",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BZGNkZDhlZGQtODMyZi00YjM1LWE2ODQtMTQ3YWY4OWY4NjlhXkEyXkFqcGdeQXVyNDU0NzUzOQ@@._V1_.jpg")
        },
        {
            name: "Nigel Bennett",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/6DIVWZoWiBzLFnii-XNeJgchKN0=/100x120/v2/https://flxt.tmsimg.com/assets/76125_v9_aa.jpg")
        },
        {
            name: "Lauren Lee Smith",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/WgnkrtmGD33HJ9Ezhb7d9nNMaiI=/100x120/v2/https://flxt.tmsimg.com/assets/170339_v9_bb.jpg")
        },
        {
            name: "Martin Roach",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/hajtXJbidZ7nN2MLkQim4P4yknM=/100x120/v2/https://resizing.flixster.com/lP6RU3Y_WT342iiVcO2uQ4q4zWI=/ems.ZW1zLXByZC1hc3NldHMvY2VsZWJyaXRpZXMvYjViMWZmNGUtOWQzNS00MDdiLTk5MmItM2E4MjY1OTJkZjYyLmpwZw==")
        },
        {
            name: "Allegra Fulton",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/jOzLDhPbqIdFEd8DK7_lXnbU6x8=/100x120/v2/https://flxt.tmsimg.com/assets/249040_v9_ba.jpg")
        },
        {
            name: "John Kapelos",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/ElCaa-EV-xhgFlQsDHuocNjlFlg=/100x120/v2/https://flxt.tmsimg.com/assets/33040_v9_bc.jpg")
        },
        {
            name: "Morgan Kelly",
            credits: shapeOfWater[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/D8G4NVrmuJEB_c1J6EsMmWdLnA0=/100x120/v2/https://flxt.tmsimg.com/assets/174869_v9_ba.jpg")
        },
        {
            name: "Guillermo del Toro",
            credits: shapeOfWater[0]._id,
            title: "Director, Screenwriter, Producer",
            img: new URL("https://resizing.flixster.com/shHSjrGI-M_AeZnLZwDRWS5XH9s=/100x120/v2/https://flxt.tmsimg.com/assets/25025_v9_bb.jpg")
        },
        {
            name: "Vanessa Taylor",
            credits: shapeOfWater[0]._id,
            title: "Screenwriter",
            img: new URL("https://resizing.flixster.com/suvlJ2FKEXL7uuuE1HxS26lv-hk=/100x120/v2/https://flxt.tmsimg.com/assets/149952_v9_ba.jpg")
        },
        {
            name: "J. Miles Dale",
            credits: shapeOfWater[0]._id,
            title: "Producer",
            img: new URL("https://resizing.flixster.com/xqm4-BCqsHrOLqQi2uyUBLaNtyA=/100x120/v2/https://flxt.tmsimg.com/assets/296035_v9_ba.jpg")
        },
        {
            name: "Liz Sayre",
            credits: shapeOfWater[0]._id,
            title: "Executive Producer",
            img: new URL("https://media.licdn.com/dms/image/C4E03AQG00z_zplVIhQ/profile-displayphoto-shrink_800_800/0/1611859976495?e=2147483647&v=beta&t=vA4bxlr_1YDl_vfbxhFyuPNo-4B4cFD7bs3BRwR8Mx8")
        },
        {
            name: "Dan Lausten",
            credits: shapeOfWater[0]._id,
            title: "Cinematographer",
            img: new URL("https://resizing.flixster.com/b12q4BsLFymWSQS_6S5YQgvJpKU=/100x120/v2/https://flxt.tmsimg.com/assets/458882_v9_bb.jpg")
        },
        {
            name: "Sidney Wolinksy",
            credits: shapeOfWater[0]._id,
            title: "Film Editing",
            img: new URL("https://resizing.flixster.com/e2LaCgPylAr4Ag_xW2P2GoSlc3U=/100x120/v2/https://flxt.tmsimg.com/assets/476131_v9_ba.jpg")
        },
        {
            name: "Alexandre Desplat",
            credits: shapeOfWater[0]._id,
            title: "Original Music",
            img: new URL("https://resizing.flixster.com/amgxD0wz8IuVZIXqF2GLsURHOls=/100x120/v2/https://flxt.tmsimg.com/assets/478586_v9_bc.jpg")
        },
        {
            name: "Paule Denham Austerberry",
            credits: shapeOfWater[0]._id,
            title: "Production Design",
            img: new URL("https://resizing.flixster.com/Xf4RlEedXODfoX6zUdGWpYi0Kuo=/100x120/v2/https://flxt.tmsimg.com/assets/459772_v9_ba.jpg")
        },
        {
            name: "Nigel Churcher",
            credits: shapeOfWater[0]._id,
            title: "Art Director",
            img: new URL("https://images.mubicdn.net/images/cast_member/446299/cache-630648-1610241535/image-w856.jpg?size=800x")
        },
        {
            name: "Shane Vieau",
            credits: shapeOfWater[0]._id,
            title: "Set Decoration",
            img: new URL("https://resizing.flixster.com/q2XLS-Yir3PzkVeDY51gBBEhHII=/100x120/v2/https://flxt.tmsimg.com/assets/498136_v9_ba.jpg")
        },
        {
            name: "Jeffrey A. Melvin",
            credits: shapeOfWater[0]._id,
            title: "Set Decoration",
            img: new URL("https://resizing.flixster.com/3gHsKSkyZH6A23rLqSOme3PK8to=/100x120/v2/https://flxt.tmsimg.com/assets/760046_v9_ba.jpg")
        },
        {
            name: "Luis Sequeira",
            credits: shapeOfWater[0]._id,
            title: "Costume Design",
            img: new URL("https://resizing.flixster.com/PVcT8NA7JVCtUA6QiwOlxH7loZE=/100x120/v2/https://flxt.tmsimg.com/assets/457355_v9_ba.jpg")
        },
        {
            name: "Robin D. Cook",
            credits: shapeOfWater[0]._id,
            title: "Casting",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Joaquin Phoenix",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/DAWMCyQ0au6qgwqyBpVbJ2M5Uew=/100x120/v2/https://flxt.tmsimg.com/assets/69768_v9_bc.jpg")
        },
        {
            name: "Jonah Hill",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/PAa5Bc0wR1py2_wp--eT2FuQgKc=/100x120/v2/https://resizing.flixster.com/yi4YZrPc85XC_HrOcoJDaaa5vzE=/ems.cHJkLWVtcy1hc3NldHMvY2VsZWJyaXRpZXMvZmU5NjQwM2YtNTEwZC00YWNlLWFhYTUtMTRhNjc4NTBiOTkxLmpwZw==")
        },
        {
            name: "Rooney Mara",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/HfJ3GFhF7ef2RIiWajU_ioqo0mo=/100x120/v2/https://flxt.tmsimg.com/assets/532661_v9_ba.jpg")
        },
        {
            name: "Jack Black",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/hLw0HEyF6PBw3fWv1PVkvVO3jPw=/100x120/v2/https://flxt.tmsimg.com/assets/71804_v9_bb.jpg")
        },
        {
            name: "Carrie Brownstein",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/bPxb7OwbCFnzCqL2tBTmwM75n4o=/100x120/v2/https://flxt.tmsimg.com/assets/329150_v9_bb.jpg")
        },
        {
            name: "Beth Ditto",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/s0Il1hCguRwH6b56eoUikkUYZuo=/100x120/v2/https://flxt.tmsimg.com/assets/665275_v9_bc.jpg")
        },
        {
            name: "Kim Gordon",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/0SiRtMvfpYZf_JMckFt35mNx0vg=/100x120/v2/https://flxt.tmsimg.com/assets/1070279_v9_ba.jpg")
        },
        {
            name: "Udo Kier",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/PSwfj045tayyGup7HkHxdufB-4c=/100x120/v2/https://flxt.tmsimg.com/assets/63928_v9_bb.jpg")
        },
        {
            name: "Emilio Rivera",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/MS_xBxyVivRSA2IB-aribf9CqL4=/100x120/v2/https://flxt.tmsimg.com/assets/228688_v9_bb.jpg")
        },
        {
            name: "Tony Greenhand",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BMjE1NjE0NTg2NV5BMl5BanBnXkFtZTgwNDcyMDE5NTM@._V1_.jpg")
        },
        {
            name: "Mark Webber",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/6SDEkIZmEmJL09citkPwaMFpjZg=/100x120/v2/https://flxt.tmsimg.com/assets/170581_v9_bb.jpg")
        },
        {
            name: "Ronnie Adrian",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/v-K7H-KzwDzQE9PdWUPVM1Lhco8=/100x120/v2/https://flxt.tmsimg.com/assets/810619_v9_aa.jpg")
        },
        {
            name: "Angelique Rivera",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/3--03kZ-alHiNDDxVxxhS4N_yDo=/100x120/v2/https://flxt.tmsimg.com/assets/919552_v9_ba.jpg")
        },
        {
            name: "Rebecca Rittenhouse",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/4nBYwx_EJOvjzdaYDGmNkNgHD50=/100x120/v2/https://flxt.tmsimg.com/assets/785165_v9_bc.jpg")
        },
        {
            name: "Jessica Jade Andres",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/WnaFPnTfI7mQbONNG8qtiW2IpSM=/100x120/v2/https://flxt.tmsimg.com/assets/917008_v9_aa.jpg")
        },
        {
            name: "Rebecca Field",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/xNC-k0gpBbo4ECM3urQ9r7K3dN8=/100x120/v2/https://flxt.tmsimg.com/assets/502688_v9_bb.jpg")
        },
        {
            name: "Olivia Hamilton",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/7AraakHVL4XG67xj1E-KclMx8ac=/100x120/v2/https://flxt.tmsimg.com/assets/1184221_v9_ba.jpg")
        },
        {
            name: "Santina Muha",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/B5fPztlVS8YtsBab_t4x2ZjNC8k=/100x120/v2/https://flxt.tmsimg.com/assets/1031583_v9_ba.jpg")
        },
        {
            name: "Christopher Thornton",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://resizing.flixster.com/AEuGwBzy-eN-OOaT9CMZr8XooAk=/100x120/v2/https://flxt.tmsimg.com/assets/231927_v9_ba.jpg")
        },
        {
            name: "Edgar Momplaisir",
            credits: dontWorryHe[0]._id,
            title: "Actor",
            img: new URL("https://m.media-amazon.com/images/M/MV5BOTEyYTU0YjktZmM0Ny00OTM5LTgxMmMtZDVhZTBlYWVkOGFhXkEyXkFqcGdeQXVyMjY1NzM3MTE@._V1_.jpg")
        },
        {
            name: "Gus Van Sant",
            credits: dontWorryHe[0]._id,
            title: "Director, Screenwriter, Film Editing",
            img: new URL("https://resizing.flixster.com/JfekSq7A1cGIkMvSQt8tvubJEPw=/100x120/v2/https://flxt.tmsimg.com/assets/25142_v9_bb.jpg")
        },
        {
            name: "Charles-Marie Anthonioz",
            credits: dontWorryHe[0]._id,
            title: "Producer",
            img: new URL("https://medias.unifrance.org/medias/8/194/49672/format_page/charles-marie-anthonioz.jpg")
        },
        {
            name: "Mourad Belkeddar",
            credits: dontWorryHe[0]._id,
            title: "Producer",
            img: new URL("https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        },
        {
            name: "Steve Golin",
            credits: dontWorryHe[0]._id,
            title: "Producer",
            img: new URL("https://resizing.flixster.com/--0EuJOtwhw8Snox4NOYg5BvXLs=/100x120/v2/https://flxt.tmsimg.com/assets/295950_v9_bb.jpg")
        },
        {
            name: "Nicolas Lhermitte",
            credits: dontWorryHe[0]._id,
            title: "Producer",
            img: new URL("https://resizing.flixster.com/--0EuJOtwhw8Snox4NOYg5BvXLs=/100x120/v2/https://flxt.tmsimg.com/assets/295950_v9_bb.jpg")
        },
        {
            name: "Christopher Blauvelt",
            credits: dontWorryHe[0]._id,
            title: "Cinematographer",
            img: new URL("https://resizing.flixster.com/haQlWxQoLA4dzP5XsNOwKewXjAE=/100x120/v2/https://flxt.tmsimg.com/assets/717463_v9_ab.jpg")
        },
        {
            name: "David Marks",
            credits: dontWorryHe[0]._id,
            title: "Film Editing",
            img: new URL("https://media.licdn.com/dms/image/C5603AQHLnYCoD27cBA/profile-displayphoto-shrink_800_800/0/1590033204829?e=2147483647&v=beta&t=NSt3Ovm74U6fPC9lwzMqraK1BD5vqkeRwe9p1-KfxIM")
        },
        {
            name: "Danny Elfman",
            credits: dontWorryHe[0]._id,
            title: "Original Music",
            img: new URL("https://resizing.flixster.com/aqoRIsCIYWRIdaK-PZ4FEK193m4=/100x120/v2/https://flxt.tmsimg.com/assets/79342_v9_bc.jpg")
        },
        {
            name: "Jahmin Assa",
            credits: dontWorryHe[0]._id,
            title: "Production Design",
            img: new URL("https://m.media-amazon.com/images/M/MV5BYzUyMTFkNTgtZDNhZC00NDg5LTg4ZjItM2Y3MWYyMDg5N2E1XkEyXkFqcGdeQXVyODg5MDY0MDI@._V1_FMjpg_UX1000_.jpg")
        },
        {
            name: "Danny Glicker",
            credits: dontWorryHe[0]._id,
            title: "Costume Design",
            img: new URL("https://resizing.flixster.com/nYqy3IgP5sURQVqQM7Zest4uakg=/100x120/v2/https://flxt.tmsimg.com/assets/487132_v9_ba.jpg")
        },
        {
            name: "Francine Maisler",
            credits: dontWorryHe[0]._id,
            title: "Casting",
            img: new URL("https://resizing.flixster.com/fAvNMV67ECCAD5NozL2qvfFW-GM=/100x120/v2/https://flxt.tmsimg.com/assets/458410_v9_ba.jpg")
        },
        {
            name: "Kathy Driscoll",
            credits: dontWorryHe[0]._id,
            title: "Casting",
            img: new URL("https://pbs.twimg.com/profile_images/925092109480116224/_YSm7iV5_400x400.jpg")
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