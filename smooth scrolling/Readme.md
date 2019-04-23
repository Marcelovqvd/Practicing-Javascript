<h1>Practicing Vanilla Javascript smooth scroll</h1>

<p>method: scrollIntoView()</p>
<p>Element.scrollIntoView()</p>

<p>
Is an Object with the following properties:
behavior;
block;
inline;
ex.
element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
{
  behavior: "auto"  | "instant" | "smooth",
  block:    "start" | "end",
}
</p>