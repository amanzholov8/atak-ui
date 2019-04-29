# DP4
---
## POV & Tasks

Our persona Chansoo Jung, a professional street dancer with vast choreo experience, needs to have the music sorted our by pace and/or genre because the music selection is long and important process of performance preparation and he needs to be able to customize the movements by adding comments, pictures, videos because the customization when denoting each move is an important, but challenging part of his choreo creation process.

1. Add a photo to the track timeline.
- Why it is essential task: the photo is one of the key ways to capture the dance move, where the **exact** positions of hands, legs, and body during dance can be seen.

2. Make some part of the track play on repeat.
- Why it is essential task: it is frequently needed for the dancers to focus on specific part of the dance during rehearsal.

3. Cut some part of the song.
- Why it is essential task: apparently, every dance is accompanied by some song, which are usually edited (e.g. cutted) before using it for the performance.




## Prototype

#### Link to prototype
https://invis.io/2ARE5EEYVD4#/356672676_TrackTimeline

#### Prototyping tool

We used InVision as a prototyping tool for our design project. Defining structure of an app was quite convenient with InVision, however some animations were hard to make. (for example, in our case the looping animation was difficult to make). 
InVision also restricted some of the functionality. To be specific, the boundaries which were supposed to be dragged had to be just clicked when being tested on PC. This confused the test users a lot.


#### Design Choices

Here we will describe what we chose, what parts implement and what to omit with our reasoning.

 - Make **consistent UI** throughout all screens for pleasurable UI experience.
 - Make the prototype for **smartphone** since it is easy to integrate with photo and video-shooting. No need to upload photo/video to other devices.
 - **Separate** audio-editing and choreo-movement recording into different screens due to small screen size.
 - Make the song repeat after small-break during the looping for users to have some pause.
 - Maintain **external consistency** in the design of icons and click responses with other apps. For this, we just added all the icons from templates nicely drawn by other professionals.

- For making some part of the song play on repeat task we chose "selected area" of the track in advance, so user would not be able to choose any part, only that which is supported.

- For making some part of the song play on repeat, users wont't able to listen the song, since InVision does not support this option. However, user would see how song is looping visually on the prototype and music will be supported by another phone using Wizard-of-Oz method. 

- For cutting the song in editor mode, users will only be able to select the part which is supported by our prototype.

- For editing the song, we have changed navigation bar a bit by removing "menu" icon and putting "back" icon. So, when user finishes edit song, by taping "back" he will be back at the track timeline window.

- For cutting some part of the song, when user wants to select area, he should tap the boundaries twice, since InVision doesn't support dragging it for selecting.

- For adding a photo to the track timeline task, users won't be able to select any photo on the camera roll only one picture is supported.

- For editing the song, we have changed navigation bar a bit by removing "menu" icon and putting "back" icon. So, when user finishes edit song, by taping "back" he will be back at the track timeline window.

- We chose not to implement audio playing/pausing and navigation (i.e. 10 seconds back and forth) since InVision does not support the playing of the music, i.e. it is not possible to incorporate such functionality into InVision). It is also not included in our end-to-end scenarios. However, we tried to simulate playing of the track during the looping by framing and timeouting the screens (Yay, we did it, **we simulated animation**).

- In addition, we implemented only one option in each pop up, since all others were not needed for our end-to-end scenarios. We did not implement the save button because we did not need that button for our scenarios.

#### Representative screenshots

<a href="https://ibb.co/pyP6MzJ"><img src="https://i.ibb.co/ySRmZyW/Screen-Shot-2019-04-22-at-7-21-41-PM.png" alt="Screen-Shot-2019-04-22-at-7-21-41-PM" border="0"></a>

<a href="https://ibb.co/Jj7ghh6"><img src="https://i.ibb.co/m5qgxxZ/Screen-Shot-2019-04-22-at-7-22-51-PM.png" alt="Screen-Shot-2019-04-22-at-7-22-51-PM" border="0"></a>

<a href="https://ibb.co/McDppkH"><img src="https://i.ibb.co/ByVjj2J/Screen-Shot-2019-04-22-at-8-41-26-PM.png" alt="Screen-Shot-2019-04-22-at-8-41-26-PM" border="0"></a>

<a href="https://ibb.co/0fPF1Hh"><img src="https://i.ibb.co/qRbWhTk/Screen-Shot-2019-04-22-at-8-41-53-PM.png" alt="Screen-Shot-2019-04-22-at-8-41-53-PM" border="0"></a>

#### Instructions
**Note: It is strongly recommended to do tasks 1,2, and 3 in the specified order. Otherwise, there may be unexpected behaviour due to some InVision limitations**.

1. For PC/Laptop:
 - Paste the shared link into any web browser.
 - Enjoy the prototype.
 
2. For iPhone users:
**Note that there is status bar at the top, which cannot be deleted due to restrictions of InVision. Thus, we would recommend to rather use the PC version.**
 - Paste the shared link into the Safari web browser.
 - Tap the "Share" icon and choose "Add to Home Screen".
 - Enter a name, and click "Add". 
 - Enjoy the prototype.



## Observations

### Theme 1: Learnability

**Task 2**

    
- Some users tried to select looping area first and then loop icon(P3, Medium).

    **Addressing:** Change the interface of looping since it is confusing for new users. Allow users first to select the region and then let them press play to loop the region. 

---

### Theme 2: Affordance

**Task 2**
- Looping icon resembles refresh icon(P3, Low).

    **Addressing:** There are two ways. First, we can instead of picture use the word 'loop' for button. Second, during the tutorial explain that this button is responsible for looping. 
---
**Task 3**
- User confused undo and back buttons while editing the song. (P3, Medium)
   
   **Addressing:** As was mentioned earlier, we will add "Undo" button to solve this problem
---

### Theme 3: Usability
**Task 1**
- Users were confused about where the photo will be placed after adding it. (P1, Medium)

    **Addressing:** We will put "+" icon in each bar so that user can add photo/comment/video/sketch on the desired location without confusion
---

**Task 3**
- Need 'Undo' button in the edit song interface (for example if user makes mistake). (P1, P2, P3, High)

    **Addressing:** Add 'Undo' button and remove the 'Back' button to avoid confusion. 
---
**Task 3**
- Not clear how to save the edited audio (P2, Medium)

    **Addressing:** The edited audio will be saved automatically. 
---
**General**
- The size of the photo (that is on the timeline) is big enough and therefore it is easy to see the details of the photo without need for scaling it.
---
**General**
- External consistency of our app is good(P1, P2, Low).

---
### Theme 4: Miscellaneous

**Task 2**
- The selected region cannot be extended by dragging (i.e. the InVision prototype does not afford the dragging functionality) (P1, P2, Low)

    **Addressing:** This problem can be addressed once we implement our prototype by using some other tool than InVision.
---
**General**
- Overall design is quite ugly(color, icons)(P1, P2, Low).
    
    **Addressing:** In our later prototypes, we will put more focus on the design of our app.
---
**General**
- Very simple and clean app(P3, Low).

---

**General**
- Ability to change the speed of the song is desired. (P1, Low)

    **Addressing:** We will try to add button for changing the speed of the song in our later prototypes.
---



## Paper vs Digital

 ### Types of usability issues they helped to identify
 
 - _Paper_ ptototype helped to identify the affordances issues. After they were addressed, more and deeper affordance issues were found in the _digital_ prototype.
 - More functionality-related (affecting usability) issues were identified in _digital_ prototype. The reason is due to the richer feedback of the users, because they thought of it as a real app when testing it. For example, test users said that they lack understanding of whether the audio track is saved after editing.
 - We also found that some usability issues of _paper_ prototype are not relevant. For instance, opening the media in the full-screen mode is not needed. The feedback of _digital_ prototype says that it is quite clearly seen from the bars themselves.


 ### Participants' reaction and expectation to prototypes
 - In _digital_ prototype, participants felt **more confident** in pressing the buttons, while in _paper_ prototype, participants could not even believe the buttons are clickable. 
 - Similarly,  in _digital_ prototype, they felt more free to **discover** the interface and had less fear of making mistakes; they just went back when being wrong.
 - For _digital_ prototype, some of the participants quickly grasped that it is **prototype** they are testing (not the real system), so they quickly understood that some strange behaviour is due to shortcomings or InVision (e.g. having to click to the boundaries instead of dragging them). They understood that some buttons are **just unclickable** since they are not included in our end-to-end scenarios. Some of them, in contrast, were deliberately trying to drag the boundaries or press unclickable buttons like 5-10 times, because it was the most intuitive action (and this is how it is actually supposed to work when we actually implement it). 
 - For the _paper_ prototype, most of participants understood that lack of some functionality was due to fact that it is prototype, because it was just on _paper_. However, there were still some of them trying to deliberately press non-clickable buttons and questioning us about why it doesn't work.
 
 
 ### Changes we made in the digital prototype based on the feedback from our paper prototyping testing
 
 - Firstly, we changed "+ Add Note" button to just "**+**" icon. Noticeably, this made it easier for most users to accomplish the task "**Add** photo to the track timeline".
 - As from DP3, we understood that it is not needed to open the pictures or other media in the full screen mode. To add, it is not needed to combine all the added media into integrated separate video. So we just **scaled up** every beat in the track timeline (increased it in size), so that when the track (with the audio) is playing, the photos and other media are just seen in their corresponding beats (demonstration of playing the track can be seen in the "2. Loop the track".)
 - We added all the buttons from prepared button templates instead of drawing them ourselves - by hand. This resulted in clear understanding of the purpose of each button (external consistency), as opposed to the paper prototype. 
 

## Studio Reflections
- It was suggested to make each elements in prototype to be more visible.
    **Addressing:** We think it is visible when user looking closer, during presentation it might be invisible.
---
- It was suggested to use distinct color for general information(like bpm).
    **Addressing:** The current design is matter of change, so we will consider it in our future high fidelity prototype.
---
- It was suggested to add slow mode for video review.
    **Addressing:** This option can be done in song editing where user can change bpm, and song become slower. So if user see the tutorial of app using, he could understand it.
---
- It was suggested to add mirror mode for pictures and videos.
    **Addressing:** We think it is great idea for our app, however this is more about video editing, our app focuses on choreo creation, so it was not included in our end-to-end scenarios.
---
- The fixed red line on the screen might confuse users when scrolling to the other area of the song.
    **Addressing:** The red line is very important in that app since it's used for showing user current playing location.
---

## Appendix

 ### Meaning of (1:1, 2:1, etc) notation in prototype
 
 - The notation (x: y) denotes (the bar number: the beat number). For example, (3:4) means 3rd bar, 4th beat of the song.
 
 ### Glossary

 - <a id="bar">**Bar**</a> (or measure) is a segment of time corresponding to a specific number of beats in which each beat is represented by a particular note value and the boundaries of the bar are indicated by **vertical** bar lines. Dividing music into bars provides regular reference points to pinpoint locations within a musical composition. It also makes written music easier to follow, since each bar of staff symbols can be read and played as a batch.

  - In music and music theory, the **beat** is the basic unit of time, the pulse (regularly repeating event), of the mensural level (or beat level).

  - <a id="bpm">**Bitrate**</a> refers to the number of bits or the amount of data that are processed over a certain amount of time. In audio, this usually means **kilobits per second** or, shortly, **kbps**.

 - <a id="choreo">**Choreography**</a> is the art or practice of **designing sequences of movements** of physical bodies (or their depictions) in which motion, form, or both are specified. Choreography may also refer to the design itself.

  - In the performing arts, a **performance** generally comprises an event in which a performer or group of performers present one or more works of art to an audience. 

 - **Locking, hip-hop, house, etc** are just the dance styles.
