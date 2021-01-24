---
layout: post
title: "Web security unknowns: Same-origin Policy"
date: "2019-07-16"
category: "Web"
draft: false
path: "/posts/web-security-unknowns-same-origin-policy/"
tags:
  - "same-origin-policy"
  - "javascript"
  - "web-security"
  - "http-request"
canonical: https://medium.com/@merictaze/web-security-unknowns-same-origin-policy-9182639bdb5f
description: Attacks like CSRF or XSS are still not clear to many of us. It is not because they are super hard to understand, but it requires some basic understanding of concepts like SOP, CORS, CSP, HTTPS. Let's start with what's Same-origin Policy
featuredImage: ./cover.jpeg
---

Attacks like CSRF or XSS are still not clear to many of us. It is not because they are super hard to understand, but it requires some basic understanding of concepts like SOP, CORS, CSP, HTTPS. In this series of posts, I’ll try to clear them up one-by-one, and next time you read about attacks, you’ll understand everything.

![](./cover.jpeg)<figcaption>Photo by <a href="https://unsplash.com/@randyfath">Randy Fath</a> on <a href="https://unsplash.com">Unsplash</a></figcaption>

## What is Same-origin Policy(SOP)

It is a security measure implemented by most browsers to protect users from the bad guys. It’s meant to keep you secure and it isn’t something new. It dates back to the old Netscape times. What it does is simple, blocks reading resources from other domains, only same-origin is allowed.

The resource here can be the DOM of an iframe you embedded in the page, a JSON response in an http request, or cookies.

Why does it exist? It’s there to keep you secure from the malicious scripts which might be running on the websites you visit. Although you’re visiting _evil.com_, scripts running on this site can make requests to _my-bank.com/get-account-details_, or embed an iframe with source _my-bank.com/get-account-details_ and then try to read the response/DOM to access your data. In case you think _“it’s fine as they don’t know my credentials”_, think twice. Browser will use existing cookies for _my-bank.com_ automatically. It means if you have an active session on _my-bank.com_, malicious scripts don’t need your credential.

There are also some common misconceptions on SOP. It does not block sending requests to the backend. It only blocks reading the response. _“That’s great, let me trigger a call to mybank.com/transfer-money in my malicious script. I just want the request to reach the backend, I don’t care about the response, I’ll see it in my bank account anyways”_ you might be saying. Not that fast. Of course, from SOP point of view, that’s perfectly fine. But, there are other security measures to prevent that. That’s the most important aspect you should really understand about SOP. Let’s repeat again: you can freely send any request to any domain, SOP does not care about requests, it only blocks reading the response from other domains.

Due to the same reason above, SOP not blocking the requests, it does not help with CSRF attacks. This attack relies on sending the request under the hood with the cookies you already have for that domain . It does not care about the response.

If you’re saying _“yes, there is no news here to me”_, great! you can stop reading. Otherwise, keep going.

## What is considered as same-origin

**Protocol** (http, https) **+Host** (example.com) **+Port** (8080)

Given definition above, [http://example.com/abc](http://example.com/abc) and [http://example.com/xyz](http://example.com/xyz) will be in the same-origin, but not

- [http://example.com:8000/abc](http://example.com:8000/abc) due to different port
- [https://example.com/abc](https://example.com/abc) due to different protocol
- [http://test.example.com/abc](http://example.com/abc) due to different host

## SOP to rescue

Please note that below examples assume there is no additional security checks at the backend and focuses on SOP only.

### iframe

What happens when you type _gmail.com_? Assuming you have an account and already logged-in before, it will show all your emails. Let’s say I own _evil.com_ and used an iframe to embed _gmail.com_ in it. Once you hit _evil.com_, can you imagine what can go wrong if I read the content in that iframe with JavaScript as being the owner of _evil.com_? Yes, you guessed it, I can read all your emails and even save them in some DB. But, don’t worry. Since you’re on _evil.com_, scripts running on this domain will not be able to read DOM content in an iframe from another domain (ie. _gmail.com_).

SOP saves the day and blocks reading the DOM of an iframe which belong to another domain.

### http request

I hear some of you saying _“I never used iframe, do you have some other example?”_. Okay, let’s give the same example without iframes. I own _evil.com_ and you visit it since you don’t know I do evil things. The JS code I added in _evil.com_ sends a GET request to _gmail.com/get-all-emails_. Do you think I’ll be able to send it?

The answer is yes (what?!). Just to point out again, SOP does not do anything for the requests, it blocks response only. My request will be sent to gmail and browser will get a 200 success. When my script tries to see the response, however, it won’t be able to, neither will you when you check Network/Response tab in Chrome dev tools. Browser will block it as SOP promised. (This can be relaxed using CORS though)

SOP rescues us again and blocks reading the response of an http request from another domain.

### cookies

Web mostly relies on cookies for authentication. Web server sets some cookies for its domain so that it can identify you when it receives a request from you. To keep things simple, let’s say when you login to _gmail.com_ it sets a cookie username="test@gmail.com" for domain gmail.com. Whenever there is a request going to gmail.com, your browser will add all your valid cookies belong to that domain. That means, when you call _gmail.com/get-all-emails_, it will also send username=”test@gmail.com” without you realising. And Gmail’s web server will see who you are from the cookie and return all the emails you have.

In real world, it’s not that simple. Gmail actually sets something to identify you, but it’s more complex and if anyone changes any part of that string, they would know and refuse to respond to your request.

I think it’s somewhat clear now that whoever has that string can actually get all your emails. So, it’s super important for the browser not to expose cookies from one domain to another one. Again, as being the owner of _evil.com_, I can send a request to _gmail.com_ on your behalf and browser will include all cookies belong to _gmail.com_ domain. But, the scripts running on evil.com won’t be able to read the cookies and server’s response. Yayy!

Just a small note on this: different protocol and port does not make a resource cross-domain for cookies. For example, [http://example.com](http://example.com), [https://example.com](https://example.com) and [https://example.com:7000](https://example.com:7000) are considered as the same-origin.

### form

_“What about if I use a form”_ I hear you ask. Let’s say I did some JS tricks and submitted a form using my malicious code running on _evil.com_ which sends a request to _gmail.com/send-email_ with the payload I provided in the code. Same goes here, browser will send it. But after submitting, browser will take you from _evil.com_ to the action url (ie. _gmail.com/send-email_), so _evil.com couldn’t_ read the response from other domains as the user is redirected to _gmail_. Please note, this is not a feature of SOP, just default form behaviour in browsers.

## Is everything coming from another domain blocked?

Nope. You can still

- Embed iframes
- Use image, audio, video files
- Import script and css files
- Submit forms

However, you

- cannot read the DOM of the iframe you embedded
- cannot read the files/bytes of the image, audio and video files.
- cannot read the content of JS, CSS files you imported
- cannot read the response of the submitted form

In addition to that, there are some techniques for relaxing SOP. You can use Cross-origin Resource Sharing(CORS), JSON with Padding(JSONP), and some others. Please note, this is not something browser can do alone to workaround SOP. Both frontend and backend need to be configured properly to achieve accessing cross-domain resources.

## Wrap up

Browsers implement SOP to keep your resources secure since you never now what’s going on behind the scenes when you visit _evil.com_. SOP does not prevent taking actions(sending requests etc), but makes sure bad guys won’t be able to see the outcome of that action(reading response/cookies/DOM).

It does not block you from using images, videos, scripts, css files from other domains. Long live CDNs! And there are ways to relax SOP by using things like CORS, JSONP.

Hope this post gave you some understanding of Same-origin Policy. Keep reading other unknowns in my other posts to have the full picture. Fell free to leave comments below.