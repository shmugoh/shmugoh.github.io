# Projects
## Résumé-Friendly
## [TweetFromX](https://github.com/juanpisss/TweetFromX)
TweetFromX was a project that started as a funny experiment with the Twitter API, mainly because I saw one of my friends tweeting from "Twitter for Geforce GTX 770" then complained to me about how it was such a hassle setting it up.
The idea was to create an easier way to tweet from applications created in the API (like Twitter for Samsung Smart Fridge, Twitter for Gucci Smart Fridge, etc.), without the hassle of downloading programming languages such as Python, installing various libraries and testing out different scripts.

All you had to do with TweetFromX was download the app, and type in whatever you wanted to tweet. The program was a graphical user interface so it made it easy for anyone to use.

Unfortunately, the project has been abandoned, as [the function that identified the device/application name has been removed.](https://www.theverge.com/2022/11/15/23460186/elon-musk-twitter-sent-from-iphone-label-eliminated-police) In my honest opinion, it still remained an innovative solution for those looking to tweet from the most anormal device known to mankind.

### Birth of sv-dlp
I initially made a ["Random-Street-View"](https://github.com/juanpisss/Random-Street-View) Twitter Bot, which basically generated oordinates inside a given GeoJSON bound, obtained the panoramas IDs and downloaded them via the Google API. Unfortunately costs were piling up (as of how inefficient and costly-expensive Google Street View' API pricing is) so I resorted to using the unofficial API.

I first tried using other developers's unofficial API scripts (as I didn't have the enough motivation to create one by myself) but they were either slow, (no multi-threading!), always were unreliable, or simply outdated. I became frustrated with the constant issues and the lack of proper support that I had to make one by myself.
I began with a working proof-of-concept of the unofficial API, but halfway-thru I gave up and never implemented it as of how messy the codebase was. The idea on making an unofficial API library still was on my mind though.

A year later, I wanted to archive a few Google Street View panoramas that were not intended to be released (specifically the Japan Gen 1 panoramas). I dusted off my old codebase, optimized it, and was finally able to get it to work. During the setup process, I decided to integrate the codebase into an argparse/CLI program to make it easier for me to download these panoramas. To my surprise, not only was I able to accomplish my goal, but the program was also much more user-friendly and efficient. As I matured the program more and more, I took advantage of using its current structure and converting it into a Python Library. Unfortunately development has been somewhat-slow due to unavoidable events and school, but I try my best to keep it in development

## (Irrelevant) Side Projects
I don't usually publicly showcase my side-projects as I prefer to highlight my coding skills through larger, more impactful projects (such the ones in Résumé-Friendly). However when I need specific online tools for stuff like content scraping and tracking, or if I want to impress my friends, these types of projects wouldn't fit in a portfolio; I've categorized these projects into two categories: meaningless and non-resume-friendly.

Keep in mind that I am not going to link the repositories of these, as these are NOT relevant and are just gimmicks.

## Meaningless
I've made a few trackers, ran by GitHub actions, that detect if a specific important change is made on a site or file.

### gsv-list-tracker
Tracks changes made under the Google Street View Driving Dates List; mostly used by Street View nerds like me, who wants to monitor Google's global Street View driving behavior

### amazon-locale-tracker
Also tracks changes mande under specific parts of Amazon's site to detect any marketplace expansion; will probably deactivate soon, as there's barely no activity.

## NON-Friendly-Maybe-NSFW-ish-4-Resumes

### F**kEveryROBLOXUsername - 2020
Back in the day, there was this trend of creating gimmick Twitter bots that would tweet an adjective or some random word and linking it to a certain known randomly picked character.
My friends were discussing about old Roblox usernames and how messy they were, so my 13.5yo brain thought it would be funny creating a bot that would pick any Roblox username from a specific era (we had all the IDs mapped from their respectful years).
Some kids bought into it, others have tried reporting us for "harrassment", but it really never caught popularity at the end of the day.

### Unnamed Discord bot - 2019-2020
This one is a little funny. A friend initially created this bot as a joke aimed at someone who was causing trouble within our group. The bot would trigger when a specific keyword was mentioned, and it would reply with a randomly generated meme, quote, or joke.
Later, with my friend's permission, I rewrote the bot and added new features such as message logging, the remote ability to send messages to servers or DMs, and the remotely purge or ban messages.

A big IMPORTANT note is that this bot was never used for malicious purposes such as blackmail, and we always ensured that it was only used on servers where the owners were aware of its functionality and potential threat. The bot was only used for lighthearted fun, such as sending memes or silly greetings in DMs (it was pretty hilarious seeing people's reaction of bots sending the most random thing you could ever think of), or purging channels (with the permission of the owner).