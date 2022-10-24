# Hsno[hoɕino]

🐳 !mportantImport's Next-Gen Blog Starter. [WIP]

---

This project is currently under active development, welcome to join!

## Status

- Routing: WIP, Waiting [qwik#1844](https://github.com/BuilderIO/qwik/issues/1844)
- Style: [Shiraha](https://github.com/importantimport/shiraha)
- Feed: TODO (JSON Feed & JF2 Feed)
- i18n: TODO

---

## Here is the original intro

Happy to announce this project!

Currently development is stuck on not being able to get MDXContent from dynamic routing, so this is just a README file for soliciting collaborator/members.

I'll talk more about the technology stack and goals, and how it differs from Urara.

## Qwik (Qwik City) + Partytown

In Urara I used SvelteKit, which is very powerful but slightly less powerful in terms of loading performance - I had to [read a full `posts.json` file into stores on every page](https://github.com/importantimport/urara/blob/main/src/routes/%2Blayout.ts).

Lack of partial hydration is the main cause of this problem. while it wasn't slow in comparison - it wasn't enough, and I wanted to be able to do 100% mobile Lighthouse runs, so I tried Astro afterwards.

I don't like Astro's template syntax and the Astro API is only available in `.astro` files. that's when I discovered [Qwik](https://github.com/BuilderIO/qwik), a framework with a strong emphasis on performance. It's fantastic!

[Partytown](https://github.com/BuilderIO/partytown) is a good way to optimize for third-party scripts, for which there is really nothing worth mentioning. just use it!

## !mportantImport All-in-one

I'm going to put everything together for this organization, so it will be
[FFF Flavored Frontmatter](https://github.com/importantimport/fff) + [Shiraha](https://github.com/importantimport/shiraha) + [Content-based Material color schemes](https://github.com/importantimport/material-color-utilities).

Like [Gumori](https://github.com/importantimport/gumori), It will focus on semantic HTML rather than the complex nested layouts in Urara. but since Shiraha is also authored by me, I have full control over the display.

Sounds good, doesn't it? besides, there's no reason not to use [UnoCSS](https://github.com/unocss/unocss) to enhance on top of that.

## [i18n (Qwik Speak)](https://github.com/robisim74/qwik-speak) & Multi Author

It will be painful, but worth it.

## Supports all post types available in [Indiekit](https://github.com/getindiekit/indiekit)

Functionally, this is a very important change.
