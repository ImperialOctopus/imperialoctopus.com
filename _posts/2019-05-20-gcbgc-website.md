---
layout: post
title: "GCBGC Website"
categories: []
image: assets/images/gcbgc/gcbgc-website.jpg
description: "Website for the Girton College Board Games Club."
external_url: "https://gcbgc.soc.srcf.net/"
github: "https://github.com/ImperialOctopus/gcbgc-website"
featured: false
comments: true
---

[GCBGC Website](https://gcbgc.soc.srcf.net/)

Being offered free web hosting by the [Cambridge Student-Run Computing Facility](https://www.srcf.net/) inspired me to make a little website for our college's board games society. It's very basic but I'm happy with the simple, clean look and it really only needs to serve as a vessel for two or three jokes to fulfil its purpose!

The fantastic pixel art icon of our mascot Noodle was created by [Jenny Fletcher](https://github.com/JennyLynnFletcher) specifically for this website.

[![Pixel art of the GCBGC mascot Noodle, a round green dinosaur](/assets/images/gcbgc/noodle.png)](/assets/images/gcbgc/noodle.png)

My favourite part of this project is the newsprint-style dotted background I created with the help of a friend.

![Screenshot of dotted background from the GCBGC website.](/assets/images/gcbgc/dots.png){:class="shadow"}

It's quite easy to miss on the website but I think it adds a nice subtle separation between the main body of the page and the background without having to make either too dark in colour. If you're interested in trying out a similar look, here's the CSS I used:

{% highlight css %}
body {
    background:
        radial-gradient(#DDDDDD 20%, transparent 20%),
        radial-gradient(#DDDDDD 20%, transparent 20%),
        white;
    background-size: 8px 8px;
}
{% endhighlight %}
