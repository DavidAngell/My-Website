export const POST_LIST = {
    "my-philosophy" : {
        title: "My Philosophy",
        subtitle: "How the heck do we even ground our ethics?",
        first_publication_date: "9/10/2022",
        text: `
# Arduino Code

If you aren’t familiar with Arduinos, here is a quick rundown of how Arduino code differs from C/C++ code. The key difference is that there is no *main()* function that acts as the single entrance point of your code. Rather, there is *setup()* which contains all of the code that runs at startup and *loop()* which runs after the *setup()* function and, as the name implies, repeats while the Arduino is on. 

So, in *loop()* I display one of three screens: a range finder input screen in which the user points the gun at their chosen target; a height input screen in which the user input’s their height above the ground in feet; and a targeting screen in which the users aims the gun at the location which would hit the target.

## Libraries

These are some of the simple libraries I threw together to help aid code readability. If I have named my functions well, you should not need an understanding of these to understand main.cpp. Regardless, all three of these are structured in the same way: they are namespaces that have a *begin()* function which is run during *setup()* and contain useful functions from their respective devices. 

### Display.cpp

This one is probably the easiest to understand. It is basically a wrapper for the Adafruit SSD1306 display library. Normally, if one wanted to write something to the display, they would need to do this:

This is a pain. 

None of us high-level programmers ever wanna look at that ugly mess all over our code. Instead, *Display.cpp* contains this:


Now, any text or numbers can easily be written to the display like this:

*readPitchAngle()* just reads the $y$ and $z$ acceleration from the accelerometer, plugs them into *atan2()* —a function in *math.h* that computes the inverse tangent in the range $[-\pi, +\pi]$ radians— and converts the output into degrees.

### RangeFinder.cpp

I’m too lazy to explain this right now :(



## main.cpp

The *main.cpp* file starts by running the *begin()* method for the ranger finder, accelerometer, and display inside of *setup()*. Then, it sets the pin mode of the “confirm” and “change screen” pins on the gun controller as INPUT_PULLUP; meaning that it reads whether the pin is pulled to +5v or ground and uses the Arduino Nano’s built-in pull-up resistors to do so.


After this, the Arduino runs the *loop()* for the rest of the on-time of the device. Within *loop()*, we check whether the “change screen” pin has been pressed (pulled up to +5v), and if it has, the current screen number gets updated accordingly. Otherwise, the Arduino just checks what the screen number mod 3 is because there are 3 screens. This method will cause an overflow after every 256 screen changes, but (1) it won’t really be too noticeable to the user because they will just have to press the button again and (2) I’m too lazy to fix it —if you want it fixed, make a pull request so I can ignore it :)



The next major part of *main.cpp* are the two functions which read the firing height pot and translate the resistance of it into a height in feet and meters respectively. The math itself is a tad arbitrary —I just divided *sensorVal* by 12 because it gave me a nice result of an 85 inch / 2.165 meter max.



Finally, we have the application of the math —[explained here](Range%20Finder%20Math.md)— that is used to calculate the firing angle of the gun.
                
        `
    },

    "tax-policy" : {
        title: "Taxes *Snore*",
        subtitle: "A breif arguement in favor of more progressive tax policies...",
        first_publication_date: "6/25/2022",
        text: `
# Taxes * Snore *

---

## My Policy

Money does buy happiness. Sort of. More precisely, it is a barrier to happiness. It is really hard to be happy with no money, but that doesn’t mean one will necessarily be happy with money. Based on the current research, emotional well-being steadily increases with income level, but it is believed “[that beyond about $75,000/y, there is no improvement whatsoever in any of the three measures of emotional well-being.](https://www.pnas.org/doi/10.1073/pnas.1011492107#fig01)” Of course, we cannot infer that money *causes* greater happiness, but we can say that more money seems to be associated with greater happiness. I believe that this association stems from a lack of money being a significant stressor. The way I think about it is that people have some baseline level of happiness when they have every opportunity they could ever want. This baseline varies from person-to-person because some people have more or less drive to take up these opportunities. The less money you have, the more stress this causes, so it takes away from people’s baseline level of happiness. Around $75,000, though, money is no longer a significant stressor and you have most of the opportunities that money is going to give you, so you are brought up to your baseline level of happiness, but no further.

Because of this, I believe in a more progressive tax system. I am open to the idea of raising capital gains tax, but there is [some evidence to suggest that such a policy would discourage investment, meaning it might actually be better to reduce the capital gains tax](https://www.jec.senate.gov/public/_cache/files/b3116098-c577-4e64-8b3f-b95263d38c0e/the-economic-effects-of-capital-gains-taxation-june-1997.pdf). It seems as though raising the income tax rate on higher-income workers will not significantly reduce their productivity, and it will increase the productivity of formerly impoverished workers and free up their wallets to buy goods and services which they would otherwise be unable to afford. Such a process stimulates the economy, leading to the taxed money actually being returned to the taxed parties (and then some) —[possibly “actually boost[ing] long-run growth if increased public saving (or, more accurately at present, decreased public dissaving) outweighs any decrease in private savings, as some economic research suggests.](http://epi.org/publication/raising-income-taxes/)” Trade is not a zero-sum game, nor are taxes.

Furthermore, one wouldn’t necessarily need to raise the rate of each individual tax bracket, we could just add more tax brackets instead. This wouldn’t raise as much revenue, but it would at least help and be more palatable to a more conservative audience.

---

## Common Critiques

### “The Government Wastes Money”

The argument has been brought up that the government wastes tax money, so we shouldn't give them more to waste. This argument is interesting but doesn't actually meaningfully address whether we should make taxes more progressive. Policies that help the impoverished still need to be implemented in one way or another, so unless another, more efficient solution is proposed, pointing to the inefficiency is useless; this would be like saying that we shouldn't move to renewable energy because solar panels are only "[between 15% and 18% efficient](https://www.vivintsolar.com/learning-center/how-efficient-are-solar-panels#:~:text=Most%20figures%20say%20that%20solar,like%20it%20would%20anything%20else.)." Additionally, I don't know of a single person who advocates for a more progressive tax system that believes that we shouldn't also streamline our bloated federal government. Even if it turns out that we could have solved all of our problems with our current tax revenue, increasing taxes *now* will still get us there faster. We can increase taxes now as we streamline the government so that we are helping the people who need it right now; then, once we have streamlined the government, if we find that we don't need such high taxes, then we can bring them down again. Raising taxes and making the government more efficient are not mutually exclusive. The government's inefficiency is not an argument against making taxes more progressive; it is an argument in favor of making the government more efficient.

### “Taxation is Theft”

Yes, it is, but not all theft is bad. [I build my morals off of reciprocated values](https://www.notion.so/Core-Philosophy-2f13acb0b6b143a8bbaa83b5fede7b1b); it can be thought of as a more rigorous form of the “Golden Rule.” The difference is that all rules are universalized (i.e., Rule Utilitarianism). This gets around some of the really irrational parts of Act Utilitarianism which measures the outcome of a single action within a single context. So, I would say that we should murder people because I wouldn’t want to be murdered, and in order for other people to not murder me, I agree not to murder them, and they agree not to murder me; the values are reciprocated. Applying this to taxes, if I were poor, I would want aid from the government to help me out of my poverty, and if I had a high enough income, I would be willing to give that up because it means that my impoverished self would be helped. So this becomes a rule: it is fine to increase the taxes on those who can afford the increased taxes while still living comfortable lives. Because the economic evidence seems to show that a more progressive tax rate helps the poor without significantly harming higher-income households, I think that it is fine to “steal” this money.

### “The Rich Avoid Taxes”

It has also been brought up that the rich will just avoid the taxes. Again, this does not actually address the argument. Not a single person advocating for a more progressive tax system wouldn't also be in favor of streamlining our tax code such that there are fewer loopholes. Furthermore, if the rich can really so easily get around taxes, then aren't they just not paying taxes now? Increasing taxes wouldn't change that. It's not like we will magically receive less tax revenue. Now for some people, this might matter —especially those of us who think that we ought to tax the rich because taxing them is inherently moral— but I don't fall into that camp. Just as before, we can increase taxes now (or even add more tax brackets) while streamlining the tax code at the same time. The rich avoiding taxes is not an argument against making taxes more progressive; it is an argument against letting the rich avoid taxes.     
        `
    },
    "dark-humor" : {
        title: "On Dark Humor",
        subtitle: "Where is the line? Does it change in specific contexts?",
        first_publication_date: "9/10/2022",
        text: `
# On Dark Humor

---

## My Criteria for Jokes

### My Sole Criterion

Fundamentally, I believe that any interaction whose effects are limited to the people who give informed consent to said interaction is morally neutral —in other words, it is neither good nor bad. For example, I think that gay sex is fine between consenting adults because both parties are capable of giving informed consent, but I don’t think that sex is fine between an adult and a child because a child is incapable of giving informed consent. I wouldn’t, however, say that consensual gay sex is “good” or that consensual straight sex is “good” because that doesn’t make any sense; it is just neutral. This principle applies to every interaction in life, including humor.

### Extending My Criterion to Dark Humor

My criterion works for normal humor, but it gets a bit muddier for dark humor. Firstly, let me make it clear that I define dark humor as “humor that is viewed as dark, morbid, cruel, offensive to some, and or graphic in nature.” The key issue with dark humor that distinguishes it from other forms of humor is [its ability to reinforce negative stereotypes](https://journals.sagepub.com/doi/10.1177/1368430213502558). This means that the effects of dark humor are not always limited to just the people making the jokes: if I tell a racist joke to a friend, and this makes them more likely to express their negative stereotypes in the form of voting for a candidate who enacts policies that hurt the Black community, the joke has now affected people who didn’t consent to the joke in the first place; this would also be true of someone who gets comfortable making racist jokes and goes on to make a racist joke in a context that hurts someone, leading to a non-consenting party being affected by the original joke. Intuitively, I think that this makes sense to most people —nobody wants to make jokes with a *genuinely* racist person. All of these are implications of my sole criterion, but it takes a lot more brainpower to think all of this through before making a joke, so here are my modified criteria that are derived from my initial criterion:

1. All immediate parties give informed consent to the joke
2. The people engaging with the joke have made a meaningful effort to ensure that they are not unintentionally reinforcing negative stereotypes in any immediate parties (including themselves)

---

## Observance of the Criteria

Coming soon!

---

## Transgression of the Criteria

Coming soon!

---

## Counterarguments

### You Can’t Be Sure

Coming soon!

### Alternative Standard: Joking About Yourself 

Coming soon! 

        `
    },
    "bum" : {
        title: "Abi",
        subtitle: "How the heck do we even ground our ethics?",
        first_publication_date: "9/10/2022",
        text: `
# Abi          
        `
    },
}