---
title: "Sketchy Business"
date: "2020-01-02"
url: "https://dry-mesa-58962.herokuapp.com/"
photoID: "1focNicoczWmlh69YGJYV6kMuM7encDuw"
---

Sketchy Business is an ecommerce site that

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
