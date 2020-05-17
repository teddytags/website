# HTML Imports - the future of HTML

[Pranav Karawale](https://github.com/obnoxiousnerd), 22 March, 2020

## Overview

There have been a lot of changes to the Web as we know in 2020. Virtual DOM, frameworks, PWAs, and a lot of stuff to say. Not necessary to say that JavaScript is as much advanced as contemporary non-web languages like C, C++, Java and Python. HTML is also progressing on its way, in fact, there are already discussions on [HTML6](https://www.script-tutorials.com/a-look-into-html6-what-is-it-and-what-it-has-to-offer/) and [CSS4](https://drafts.csswg.org/selectors-4). People have also devised specs and [proposals](https://css-tricks.com/forums/topic/html6-and-css4-my-proposals/) for those too.

Well, if you are a serious web developer like me, you must be knowing about JavaScript imports. They're awesome. The best alternative to _spitting-all-code-in-a-single-file_.

But as aforesaid, we are still _spitting-html-in-a-single-file_ which is extremely unpleasant. Working on a large HTML markup and suddenly got a UI issue?? Speeding through the HTML and after 10 minutes, found a tag to be misnamed. However, the larger the project becomes, the messy the HTML can become. Unfortunately, no one is cared of it. Even running through all the sites, Googling all the terms relevant to it, got something that says:

> HTML Imports are deprecated at M70, and will be removed in M80, by February, 2020.
>
> -_https://chromestatus.com/feature/5144752345317376_

The "HTML Imports" that are talked above, is just the `link` tag with an fancy attribute `import` like this:

```html
<link rel="import" href="yourhtmlfile.html" />
```

**Don't use the above thing, that is to be deprecated.**

Or you could do a fancy workaround like the one done in [this answer on StackOverflow](https://stackoverflow.com/a/26144812/12020232).

## The Plan

Me, the creator of TeddyTags, is thinking to save the whole world with this ugly one-file mess.

The tag that will save the world will look like this:

```html
<inlcude src="yourhtmlfile.html"></include>
```

You add that thing and, suddenly in the browser, the content of `yourhtmlfile.html` comes up in place of the tag. And if not, you'll encounter an error named `HTMLImportError` stright in the browser console. I'm even thinking of making a CLI/API that concatenates HTML files imported to the main one by that `<include>` tag.

> But hey! You forgot Web Components??

Absolutely not.
But they too have downsides:

- Disable JavaScript and whooosh, the page is blank.
- custom CSS pseudo selectors can’t be used with web components
- they don’t work seamlessly with native elements and their associated APIs
- if we wanted to create a custom button, for example, we can’t extend the HTMLButtonElement directly, we have to extend the HTMLElement
- [Poor cross-browser support](https://caniuse.com/#feat=custom-elementsv1). You might need to include polyfills that can only make the feaature available, partially.

> How are you going to do this 'import' thingy??

My dear `XMLHttpRequest` and `fetch()` will help me in doing the job. And for the sake of the `<include>` tag, our own TeddyTags will define it. Its a win-win situation.

What are your thoughts on this? Lets have some discussion at [Gitter](https://gitter.im/teddytags).