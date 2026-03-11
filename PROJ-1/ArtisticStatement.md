# Artistic Statement I

Aliyah Renomeron-Ward 40319978 <br>
Lanna Check 40341878 

CART 263 SECTION AA 

Sabine Rosenberg<br>
03-10-2026 

### INTRO: 

Most of us can admit we are addicted to social media, but when it comes to explaining why we are so addicted, it becomes less obvious. Multiple factors influence the level of addiction we have towards social media such as our mental state or our personal motivations, but the main reason turns to be that these platforms were created to be addictive. Since social media addiction is a reality that affects most of us we decided to create a project that exposes the protocols that hooks users into their platforms. We wanted to take a satirical stance on this topic by creating a game that puts players into the shoes of those in power, those who organize the protocols behind these platforms. 

### INSPIRATION:
First we will talk about our inspiration for this project. On one hand, In The Guardian article by Richard Seymour, he analyzed the different factors that drives our addiction to social media. The 2 aspects that stood out the most to us were: intermittent variable rewards and the protocols of the platform​[^SR_MAC]. To start off, intermittent variable rewards can be thought of as gambling; the reward is given after a random/unpredictable amount of interactions. In other words, every time we scroll through our TikTok algorithms we are gambling to see if will be rewarded with a video we are interested in or stumble across a video we don’t like. This variability wasn’t done by mistake; it was careful structured using behavioural experiments done in psychology such as Skinner’s box. Evidently, the results of these experiments have proven that unpredictability of reinforcement results in more consistent responses than predictable reinforcement​​[^LA_SCH]. Next, we focused on the protocols of social media platforms, or simply put, how are these platforms structured to control and reinforce our interactions. For instance, Seymour highlights how “The protocols of Twitter itself, for example, encourage people to post quickly and often. The feed has an extremely rapid turnover, so that anything posted will, unless it “goes viral”, tend to be quickly forgotten by most followers”​ [^SR_MAC]​. This means the way apps are structured are not simply made for users to interact with each other freely, they follow rules that given an impression that the network is decentralized, but in actuality it controls the way we communicate and interact with these networks [^GA_PRO]​.

On the other hand, we explored idea about the biases behind data collection using the knowledge we received after reading the Guardian Interview with Catherine D’Ignazio by Zoë Corbyn. In this interview the key takeaway we got was that data is never neutral, “it is information that has been collected in certain ways by certain actors and institutions for certain reasons”​ (Corbyn 2020)​. A powerful quote by Catherine D’Ignazio spoke out to us: “numbers should never be allowed to “speak for themselves” because they don’t tell the whole story when there are power imbalances in the collection environment.”​ (Corbyn 2020)​. We connected this idea to how our humanity is reduced to numbers on social media. On social media platforms, our likes, comments and shares are reduced to data that do only benefit institutions that make profit through selling our data. These numbers don’t tell the full story and other data such as the other activities we missed out by being online shows how biased data compilation is and emphasizes who truly benefits from the data being collected.

### PROCES:
Our main goal for this project was to create something that reflected the addiction many people have problems with today which is the consumption of social media and its reward systems. While the final project does reflect that, our initial ideas have changed as time went on.  

Our first ideas were to create a social media game that would eventually make the character addicted to the screen and keep them from doing actual important tasks, such as cooking, cleaning, or spending time with friends, which quickly morphed into the idea of using Skinner’s Box.  

We had concept for gameplay that stuck with us until the end, which includes a singular character within a small room, AI movement, and UI/UX elements that make the character approach the wall. One of the bigger challenges we faced was trying to decide how we wanted the game to function and incorporating that into our code. We wanted the character’s behavior to feel autonomous at some point in the game, rather than constantly having them controlled by the player. This led us to implement different game states, animations and randomized reward and penalty systems. Another part that was tricky was managing these concepts/elements to keep them coherent with the flow of the game.  

### PROJECT DESCRIPTION:
As previously mentioned, the whole idea of this project is to make the character within our game addicted to getting hearts, which reflects the addiction we have to social media and its conditioning. There’s a notify button, that when pressed, will make the player push the button within the box and pick up a heart. And the goal is to eventually make the character want to pick up the hearts of its own volition, without any player intervention. You can adjust the variability of the hearts dropping, which ranges on a scale from 1-20. Increasing the variability changes the randomization of the hearts dropping. This is implemented in the radomizedHeartDrop function, which generates a random number and determines if the heart will be visible or not.  

At 1, there will be an 100% chance of the heart dropping, decreasing the character’s incentive to push the button on its own, referencing how social media is like gambling for rewards, such as likes, shares, comments, follows and reposts. Increasing the variability will make the character move on its own to highlight the need for gambling-based rewards, but will decrease the chance of a heart appearing, implementing the luck factors. This is implemented in the calculateIncentive function. It generates an incentive score based on the number of hearts collected, the variability of rewards and a penalty related to luck. The final value ranges from 1-50 and is used to determine how likely the character is to push the button on its own.   

Your goal as the player is to have the highest number of hearts per second without having to press the notify button to make the character pick up the hearts, and to find that balance on your own by playing around and adjusting the heart variability.

### RELATING THE PROJECT TO OUR INSPIRATION:

​​Bibliography 

[^GA_PRO]: ​​Galloway, Alexander R. 2004. Protocol : how control exists after decentralization. Cambridge: MIT Press. 

[^LA_SCH]: Lim, Annabelle G.Y. 2024. Schedules of Reinforcement in Psychology (Examples). February 2. Accessed March 5, 2026. https://www.simplypsychology.org/schedules-of-reinforcement.html. 

[^SR_MAC]: ​Seymour, Richard. 2019. The machine always wins: what drives our addiction to social media. August 23. Accessed March 5, 2026. https://www.theguardian.com/technology/2019/aug/23/social-media-addiction-gambling?utm_term=RWRpdG9yaWFsX1RoZUxvbmdSZWFkLTE5MDgyNA%3D%3D&utm_source=esp&utm_medium=Email&utm_campaign=TheLongRead&CMP=longread_email. 
