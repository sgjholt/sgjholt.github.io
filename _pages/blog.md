---
layout: default
title: Blog Posts and Updates
permalink: /blog/
---

## Latest Posts

<ul>
  {% for post in site.posts %}
  <li><a href="{{ post.url }}" class="post-preview">{{post.date |  date: "%-d %B %Y"}} | {{ post.title }}</a></li>
  {% endfor %}
</ul>