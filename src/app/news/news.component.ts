import { Component, OnInit } from '@angular/core';

interface IArticle {
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public articles: IArticle[] = [
    {
      title: "New Jersey's Jim Mullen Skipped State For Shot At World Glory",
      subtitle: "Jul 4, 2021",
      imageUrl: "https://tw-ads.s3-us-west-2.amazonaws.com/JimMullen_2021CadetWTT.jpg",
      content:
        `Jimmy Mullen has all kinds of opportunities, including a shot at two Cadet World medals in Budapest.`
    }
    ,{
      title: "Tyrant Bison Duals Viewer Guide",
      subtitle: "Jul 7, 2021",
      imageUrl: "https://tw-ads.s3.us-west-2.amazonaws.com/Tyler+Vazquez.jpg",
      content:
        `Tyrant Wrestling has assembled a 36-team field headlined by nationally-ranked competitors for this weekend's Bison Duals.`
    }
    ,{
      title: "NWCA's Moyer Works Tirelessly To Improve Sport",
      subtitle: "Jul 8, 2021",
      imageUrl: "https://tw-ads.s3.us-west-2.amazonaws.com/MikeMoyer.jpg",
      content:
        `Mike Moyer is putting his money where his mouth is with new Wrestlers In Business Network program`
    }
    ,{
      title: "Ned Shuck goes On The Mat",
      subtitle: "Jul 13, 2021",
      imageUrl: "https://tw-ads.s3.us-west-2.amazonaws.com/OTMNedShuck.jpg",
      content:
        `The newest D1 head coach is Ned Shuck at Bellarmine University in Louisville. Join Kyle Klingman and Andy Hamilton as they talk about the world of wrestling on the flagship podcast of Trackwrestling.com, part of FloSports.`
    }
    ,{
      title: "Every Ranked Registered Female Wrestler At Fargo",
      subtitle: "Jul 15, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/60ef3c413eb84.png?width=1200&quality=80",
      content:
        `All the nationally-ranked girls wrestlers we could find in the Fargo registration.`
    }
    ,{
      title: "All The Ranked Wrestlers Registered For Fargo",
      subtitle: "Jul 15, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/60ef282a40e36.png?width=1200&quality=80",
      content:
        `All the ranked participants we can find in the Fargo registration.`
    }
    ,{
      title: "A College Wrestling Fan's Guide To Fargo 2021",
      subtitle: "Jul 15, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/5f8b7ec031940.png?width=1200&quality=80",
      content:
        `Breaking down all the committed and uncommitted wrestlers in the boys' divisions at Fargo 2021.`
    }
    ,{
      title: "Complete & Total 16u Freestyle Preview And Predictions",
      subtitle: "Jul 16, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/60d3dbb7f0bbd.png?width=1200&quality=80",
      content:
        `The 16u division at Fargo will cement some of the top high schoolers in the country and allow new stars to break out. Here's what you need to know.`
    }
    ,{
      title: "Men's Junior Freestyle Bracket Reactions & Early Matches To Watch",
      subtitle: "Jul 18, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/60b7d8820b1de.png?width=1200&quality=80",
      content:
        `Take a look at our initial thoughts on the Junior MFS brackets and the best early-round matches.`
    }
    ,{
      title: "9 Must Watch 16u Quarterfinals",
      subtitle: "Jul 18, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/60f36c6dec8eb.png?width=660&quality=80",
      content:
        `The 16u Quarters are set! While all of the matches should be good, here are the ones you won't want to miss.`
    }
    ,{
      title: "Minnesota Narrows 16U Team Race Heading Into Finals",
      subtitle: "Jul 19, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/60c422bbdd2c3.png?width=660&quality=80",
      content:
        `Pennsylvania is still in the lead, but with the same number of finalists, the 16U team title is still up for grabs.`
    }
    ,{
      title: "Ohio Leads Team Race After Day 1 Of Junior Freestyle",
      subtitle: "Jul 19, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/60f4ea563b92d.png?width=400&quality=80",
      content:
        `In a bit of a surprise, Ohio leads PA, IL, and everyone else after day one of Junior freestyle.`
    }
    ,{
      title: "Must Watch Fargo Junior R16 Matches",
      subtitle: "Jul 19, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/5f921b630e519.png?width=1200&quality=80",
      content:
        `The best matches to watch on Day 3 of Fargo in the Junior men's freestyle brackets.`
    }
    ,{
      title: "Illinois Leading The Junior Team Race - Wisconsin, Iowa & Michigan Chasing",
      subtitle: "Jul 20, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/60f611d87cda5.png?width=400&quality=80",
      content:
        `Illinois takes the lead in the team race heading into the final day of matches in men's freestyle. Take a look at a full breakdown for the junior team race.`
    }
    ,{
      title: "Outstanding Fargo Matches In 2021",
      subtitle: "Jul 21, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/60f37601a007e.png?width=1200&quality=80",
      content:
        `Fargo always delivers incredible action, and this year has been no different. Check out some of the best matches from the Fargodome.`
    }
    ,{
      title: "Illinois Holds Off Pennsylvania And Michigan To Win Junior Team Title",
      subtitle: "Jul 21, 2021",
      imageUrl: "https://d2779tscntxxsw.cloudfront.net/60f7487793647.png?width=400&quality=80",
      content:
        `A recap of the team race for the 2021 Junior Nationals in Fargo`
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
