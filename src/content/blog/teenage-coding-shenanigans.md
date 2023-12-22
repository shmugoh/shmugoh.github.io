---
author: June U.
pubDatetime: 2023-12-22T15:22:00Z
title: "Teenage Coding Shenanigans: From Tweeting GTX 770s to Discord Cons"
postSlug: teenage-coding-shenanigans
featured: true
draft: false
description:
  Some rules & recommendations for creating or adding new posts using AstroPaper
  theme.
---

wheeew! first post written in astro... honestly i can't believe i wasted a huge amount of time on developing a useless barebones static generator tool (create-new-site), when i could've used astro instead! i mean it would look good on my portfolio nonetheless, but the exhaustion and procrastination was so high i couldn't move on forward with it.

nonetheless... hello! i am june, and welcome to my blog. for no reason other than pure documentation of my old shenanigans, here are my former _featured_ funny programming projects i made during my teenagehood

---

### [TweetFromX](https://github.com/shmugoh/TweetFromX): Twitter for Smart Raggedy Shoes

![TweetFromX](@assets/images/TweetFromX.png)

ever seen tweets from bizarre devices like _Twitter for Gucci Smart Fridge_? yeah.. one of my buddies did the same with a GTX 770, and later on complained personally towards me the setup hassle huge setup hazzle you had to do. enter [TweetFromX](https://github.com/shmugoh/tweetfromx), a project that started as a funny experiment with the Twitter API, and also my first attempt at coding with Java.

the idea? make tweeting from quirky apps a breeze without the headache of downloading programming languages, or from an average point-of-view, learning a whole computer science degree to decipher cryptic scripts. all you had to do was download the app, type your tweet, and voilà! a graphical user interface made it grandma-friendly. sadly, the fun got cut short as [elon nixed the feature not that long ago](https://www.theverge.com/2022/11/15/23460186/elon-musk-twitter-sent-from-iphone-label-eliminated-police), but hey, it was a tweet-worthy attempt at innovation!

this app was pretty easy to manage. create the twitter developer app with the name you wish to tweet from, open the app and enter the twitter credentials, tweet content, and all done!

initially, my intention was to build this application as a web app, with the idea of sending payload requests directly from the client-side. unfortunately, this approach was not successful due to [Twitter's lack of support for CORS](https://twittercommunity.com/t/will-twitter-api-support-cors-headers-soon/28276/2). theoretically we could bypass this by routing the payloads through a server, but this means we would have to deal with multiple requests on the same server with different credentials, which twitter would not favor. serverless could work too, but costs could heavily rise up and i would not be able to afford such loss.

### [Random-Street-View Bot](https://github.com/shmugoh/random-street-view): Street View, but Fun - 2021

#### a.k.a. sv-dlp - 2021-present

[_random-street-view_](https://github.com/shmugoh/random-street-view) initially originated as a [google street view twitter bot](https://twitter.com/Moved2Tenny). the concept involved generating a random coordinate, ensuring it fell within a randomly generated region and country; the next step involved parsing this coordinate through google's official API to obtain a panorama, resulting in a static panorama image. initially the plan was to generate panoramas per country, but this became repetitive as it always skipped certain countries (especially african nations). thus, the focus shifted to first generating a random region.

<!-- example of a static panorama image -->

unfortunately, the cost using the official API became too high. dissatisfied with both its costs and various unreliable slow-scripts, i took matters into my own hands and the core of _sv-dlp_ was born; an unofficial google street view API wrapper.

initially, i hard-coded _sv-dlp_ into _random-street-view_ and abandoned the project out of burnout, but as the codebase became unreliable, and a personal desire to archive a few google street view panoramas, i resurrected and optimized the code. the twist? i transformed it into both a library and a cli. [feel free to check it out!](https://github.com/shmugoh/sv-dlp)

### F\*\*kEveryROBLOXUsername - 2020

back in the day, there used to be this trend of creating automated gimmick accounts that would link adjectives to a well-known-randomly-picked character.
well, i made one for old roblox usernames. it was like introducing chaos to a tea party. some kids fell for it; others thought i was harassing them. good times.

similarly to _Random-Street-View_, _FERUN_ undertook the mapping of username IDs over the years; thanks to a friend, the IDs for usernames registered during 2006-2015 were pre-mapped. however, the mapping for the accounts made between the years 2016-2020 was based on the first ID of 2016 and the last ID ever created. to accomplish this, i backported an rbxlua live script to python that tracked recently registered users, ran it on a separate thread while the bot was active, and saved the last ID to a configuration file; in return, the boat read from this config file. a bit awkward, ain't it?

if any search engine crawler wants the ids for personal gain needs, here you go!

- **2006-2007**: 1-141923
- **2008-2009**: 141924-5881290
- **2010-2012**: 5881291-36347234
- **2013-2015**: 36347235-103531549
  - honorable mention: 103536227
- **2016-2019**: 103531550-1390794503

### Unnamed Discord Bot - 2019-2020 - NSFW

this one is a little funny. a friend initially created this bot as a joke aimed at someone who was causing trouble within our group. the bot would trigger when a specific keyword was mentioned, and it would reply with a randomly generated meme, quote, or joke. later, with my friend's permission, i rewrote the bot and added new features such as message logging, the remote ability to send messages to servers or dms, and remotely purge messages.

an important note is that this bot was never used for malicious purposes, such as blackmail. we always ensured that it was only used on servers where the owners were aware of its functionality and potential threat. the bot was only used for lighthearted fun, such as sending memes or silly greetings in dms. it was pretty hilarious seeing people's reactions to bots sending the most random things you could ever think of, or purging channels (with the owner's consent).

**this goes to show how discord bots, when given specific permissions without caution, can become potential threats**. to those setting up servers, **i strongly advise being mindful of the permissions granted to a bot**, as providing a bot with excessive privileges -as was the case with this one- could compromise your server's security. do keep in mind  
it's important to note that this bot was relatively very barebones; bots with more in-depth advanced functionalities can do harm

### Meaningless Trackers: Because Why Not Track the Untrackable?

#### gsv-list-tracker

this one keeps tabs on changes in google street view driving dates. perfect for street view nerds like me, silently judging google's driving behavior worldwide.

#### amazon-locale-tracker

ever wondered if amazon's marketplace is expanding? yeah, me neither. but just in case, there's a tracker for that.

---

and there you have it, folks! my coding escapades, where laughter meets serious bits. stay tuned for more chuckles and lines of code coming your way!
