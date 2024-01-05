---
author: June U.
pubDatetime: 2023-12-22T23:50:49
modDatetime: 2024-01-04T17:25:00
title: "Teenage Coding Shenanigans: From Tweeting GTX 770s to Scrapping Google's Floor"
postSlug: teenage-coding-shenanigans
featured: true
draft: false
description: My previous quirky coding projects from teenage years, ranging from a fun barebones Twitter Client for unusual devices, to a random street view scraper.
---

Wheeew! First post written in Astro... Honestly I can't believe I wasted a huge amount of time on developing a barebones static generator tool (create-new-site), when I could've used Astro instead! I mean it would look good on my portfolio nonetheless, but the exhaustion and procrastination was so high that I couldn't move on forward with it.

Nonetheless... Hello! I am June (aka Juan/shmugo), and welcome to my Blog! For no reason other than pure documentation of my old shenanigans, here are my former _featured_ funny programming projects I made during my teenagehood. I didn't make that many, as I was on a forced mindset on making original unique programs/scripts, so my old shenanigans are at the same time featured ones too

---

### [TweetFromX](https://github.com/shmugoh/TweetFromX): Twitter for Gucci Smart Fridge

![TweetFromX](@assets/images/teenage_projects/TweetFromX.png)

  <blockquote class="max-w-md mx-auto">
  a screenshot of what TweetFromX used to look like
  </blockquote>

Ever seen tweets from bizarre devices like _Twitter for Gucci Smart Fridge_? Yeah.. One of my buddies did the same with a GTX 770, and later on complained personally towards me the setup hassle huge setup hazzle you had to do. Enter [TweetFromX](https://github.com/shmugoh/tweetfromx), a project that started as a funny experiment using the Twitter API, and also my first attempt at coding with java.

The idea? Make tweeting from quirky developer apps a breeze without the headache of downloading programming languages, or from an average point-of-view, learning a whole computer science degree to decipher ""cryptic"" scripts.

All you had to do was create a Twitter App with the name you wish to tweet from; open the app, type your tweet, and voilà! A graphical user interface made it grandma-friendly. Sadly, the fun got cut short as [Elon nixed the feature not that long ago](https://www.theverge.com/2022/11/15/23460186/elon-musk-twitter-sent-from-iphone-label-eliminated-police), but hey, it was a tweet-worthy attempt at innovation!

![TwitterForX570](@assets/images/teenage_projects/TwitterForX570.png)

  <blockquote class="max-w-md mx-auto">
  proudly sent from TweetFromX
  </blockquote>

Initially, my intention was to build this application as a web app, with the idea of sending payload requests directly from the client-side. Unfortunately, this approach was not successful due to [Twitter's lack of support for CORS](https://twittercommunity.com/t/will-twitter-api-support-cors-headers-soon/28276/2). Theoretically we could bypass this by routing the payloads through a server (instead of handling it from the client), but this means we would have to deal with multiple requests on the same server with different credentials, which Twitter would proobably not favor. Serverless could work too, but costs could heavily rise up and I would not be able to afford such loss.

### [Random-Street-View Bot](https://github.com/shmugoh/random-street-view): Street View, but Fun - 2021

#### a.k.a. sv-dlp - 2021-present

<div class="max-w-md mx-auto">
  <blockquote class="twitter-tweet tw-align-center" width="70%">
    <a href="https://twitter.com/Moved2Tenny/status/1372688380115439624"></a>
  </blockquote>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

  <blockquote class="max-w-md mx-auto">
  example of a static panoramic image
  </blockquote>

[_sv-dlp_](https://github.com/shmugoh/random-street-view) initially originated as a [Random Google Street View Twitter Bot](https://twitter.com/moved2tenny). The concept involved generating a random coordinate, ensuring it fell within a randomly generated region and country; the next step involved parsing this coordinate through Google's official api to obtain a panorama, resulting in a static panorama image. Initially the plan was to generate panoramas per country, but this became repetitive as it always skipped certain countries (especially African nations). Thus the focus shifted to first generating a random region.

Unfortunately, the costs of using the official API became too high. Dissatisfied with both its costs and various unreliable scrapping slow-scripts available online, I took matters into my own hands. Thus, the core of _sv-dlp_ was born; an unofficial Google Street View API Wrapper.

![](@assets/images/teenage_projects/New_RSV.png)

  <blockquote>
  scraping the panorama images from google and posting a stitched-yet-cropped 16:9 image of it on twitter to see how it would look
  </blockquote>

I initially hard-coded _sv-dlp_ into _random-street-view_; shortly after abandoned the project out of burnout, but as the codebase became unreliable, and a personal desire to archive a few GSV panoramas, I resurrected and optimized the code.

![](@assets/images/teenage_projects/EarlySVDLPDev_2.png)

  <blockquote>
  initial testing of tile scraping. this was <em>sloooow</em> as it was inefficiently scrapping them by excessively sending requests to google's cdn  servers and downloading each; tile per tile, row per row. <a href="https://github.com/shmugoh/sv-dlp/commit/89dd8d9cc8fbfc523d6f037bfb9d55a48fdbb345#diff-2f535b383135b37dd521c9a2ab7500ee064ac0f0b55eb070873f687b698997a8L188" target="_blank">tile approximation was optimized years later by getting an approximation of the height and width of tiles per resolution based off the given metadata
  </blockquote>

The twist? I transformed it into a Command-Line Interface Program... and as it matured, it evolved further into a library. [feel free to check it out!](https://github.com/shmugoh/sv-dlp)

### [F\*\*kEveryROBLOXUsername](https://github.com/shmugoh/FuckEveryROBLOXUsername) - 2020

![](@assets/images/teenage_projects/FERUN.png)

  <blockquote class="max-w-md mx-auto">
  funny how one of this bot's first tweets grabbed a close friend of mine's usernames; that is MILLIONS TO ONE
  </blockquote>

Back in the day, there used to be this trend of creating automated gimmick accounts that would link adjectives to a well-known-randomly-picked character.
I made one for Roblox usernames, and it was like introducing chaos to a tea party. Some kids fell for it; others thought I was harassing them. Good times.

Configuring the bot was a hassle, as it initially kept re-using the same old ids...

![](@assets/images/teenage_projects/FERUN_FAIL1.png)

  <blockquote class="max-w-md mx-auto">
  and took me a while to fix it!
  </blockquote>

...then twitter suspended the bot for a few days for no reason other than having a very Professional Formal App Name

![](@assets/images/teenage_projects/FERUN_FAIL2.png)
![](@assets/images/teenage_projects/FERUN_FAIL3.png)

but after constant days of going back 'n forth between the twitter team, i managed to correctly set it up

![](@assets/images/teenage_projects/FERUN_AWS.png)

  <blockquote class="max-w-md mx-auto">
  clearly this is not consistent with the previous dates... but you get the idea
  </blockquote>

Similarly to _Random-Street-View_, _FERUN_ undertook the mapping of username IDs over the years; thanks to a friend, the IDs for usernames registered during 2006-2015 were pre-mapped. however, the mapping for the accounts made between the years 2016-2020 was based on the first ID of 2016 and the last ID ever created. To accomplish this, I backported an RBXLUA script to Python (which unfortunately is broken now and have no interest in fixing it) that tracked recently registered users, ran it on a separate thread while the bot was active, and saved the last ID to a configuration file; in return, the boat read from this config file. A bit awkward, ain't it?

If any search engine crawler wants the IDs for personal gain needs, here you go!

- **2006-2007**: 1-141923
- **2008-2009**: 141924-5881290
- **2010-2012**: 5881291-36347234
- **2013-2015**: 36347235-103531549
- **2016-2019**: 103531550-1390794503

---

And there you have it! That's what I've been up to during my teenage years. Small, messy, micro projects yet a cool start. While I've had some negative influences that didn't make my programming skills better than others my age, over time, I've been picking it up slowly and getting better.

Don't let negative influences get to your hobbies; refrain from letting them consume you like a black abyss, and let your passions paint your canvas you long to gaze upon.
