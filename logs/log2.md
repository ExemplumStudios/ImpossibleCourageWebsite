# 08 October 2016

## Overview

This is the first in a series of weekly development logs on the progress of "Over a Refugee’s Shoulders." This log comes after several weeks of development, so it's a little longer. I’m going to try and chronicle the rationale behind every decision.

## Development

I am working in conjunction with the UVA Immersive team to build the whole VR experience. The rationale behind this is to get help with learning/programming in game engines. We started off the project working with Unity and Unreal Engine, both programs I have little to no experience with. The UVA Immersive team has helped me get up to speed in a short amount of time, which has been super helpful. They also provide candid feedback on changes and direction, which is very helpful.

The final format for "Over a Refugee’s Shoulders" is going to be an interactive game engine, as opposed to a pre-rendered video. The reasoning behind that is to let the viewer look around objects in the environment, pick things up, and otherwise immerse themselves in the experience. Building the experience into a game engine can also help increase interaction between the exhibit and the virtual environment. We’ve come up with ideas such as dioramas that come to life inside a VR headset. However, a pre-rendered video is a great way to test environments and the experience before programming a more complicated, full-featured app.

The choice between a live-rendered game and a pre-rendered animation also comes from the choice of platform. The major platforms are room-scale VR, locomotive VR, and mobile VR. An example of the first is the HTC Vive. Locomotive VR was the Oculus Rift paired with a controller, but the recently announced Oculus Touch makes Oculus compatible with room-scale experiences as well. Google Cardboard was the first mobile VR platform, popularizing it and paving the way for GearVR from Oculus. The recently announced Google Daydream headset adds a controller to mobile VR, bringing crossover into the realm of the Vive or Oculus Touch. It is clear that there are many choices for the platform, the ultimate goal is to bring Over a Refugee’s Shoulder to all of them.

For HTC Vive and Oculus, a diorama-style fully developed interactive VR experience will be created. This is the most complicated to produce, and will be last in the process. Until we get there, I’m working on developing a 3D 360 video animation that works great on Google Cardboard. It is a cheap and efficient way to produce many iterations, and an easy way to test the product. I bought a small, after market VR headset that I have been polling people with. We recently presented it to prospective students, and the mobile experience alone is very impactful. Starting with a pre-rendered animation allows me to employ the design-thinking process, iterating quickly and testing along the way.

Every part of this project has been thought through in the design thinking process. For example, the development of my representation of refugees evolved directly through feedback from classmates and strangers. I polled students about the character model, asking which was easier to empathize with. Eventually, we reached a style that I could replicate for other assets. A decision I am still in the process of making and will write about in a future dev log is how to represent graphic experiences in the journey (e.g. whether or not to show refugees as statues). As of today, I have finished modeling everything I need for three main scenes.

For Libya, I created a cityscape with rubble, a T-52 tank, and a Libyan army Technical. Rigging the treads was relatively easy, they links follow a path that loops every 18 frames. The Technical was a little more difficult, the tires are mapped to vertices on a shrink wrapped plane that tracks the surface. The tires are mapped to the z-position of those vertices, so they move up and down within their axle. Both the tank and truck have hierarchically linked parts. The turret in the bed of the Technical rotates with the barrel, and the gun of the tank works the same way.

For the Mediterranean, I have created 3 different boats. I settled on the rubber dinghy, it is the most detailed and accurate of the models. I also modeled several types of refugees, including a man, a child, two women (one with a headscarf and one without) and a baby. I used Blender’s built in ocean generator to create an ocean that loops every 600 frames and had the boat filled with refugees follow a circular path that also loops over that same time frame. The boat is mapped to the waves in the same way the technical was mapped to the ground, a shrink-wrap modifier provides data averaged across the vertices of a plane to orient the boat on the surface of the ocean. I ran into two problems with the ocean, both related. First, the ocean would clip through the bottom of the boat. I used a dynamic paint modifier to have the boat dent the ocean wherever it traveled. However, the plane was now shrink-wrapped to this dip in the ocean, which threw off the boat’s orientation. So I used a duplicate, second, hidden ocean without the dynamic paint canvas for the ocean’s surface data.

For the Lampedusa scene, I created mattresses and used cloth simulations for the sheets. I used refugees from the last scene as people laying on the beds and walking through the room. The environment I modeled was the gym in the refugee center, it showed the extent of their desperation. The basketball hoops I modeled also doubled as clothes hangers, so cloth sims were used for that too. All the clothes and sheets are simple, subdivided planes. After the simulation they easily pass for pieces of clothing. One of the problems I ran into with the cloth simulations was the threshold for collision with other meshes. The cloth left a little space between the surface it was laying on and it. That space created heavy, dark shadows that looked out of place. I solved this problem by adding a solidify modifier, making the sheet thicker and filling that space.

## Research

I’ve met with many professors about this project, first and foremost my advisor Elgin Cleckley. His thesis was called “Concrete Jungle/Urban Fabric” and created an exhibition that explored the historical sites of African American heritage in Manhattan. Elgin advised me to make sure my project doesn’t become a tech demo. One of the potential precedents for my work is Janet Cardiff, who does life size dioramas of different environments/scenes.

I also met with Shiqiao Li, who helped me form ideas about the theoretical portion of my thesis. He wants me to explore this idea of the Human Body and Machine, and how Augmented Reality/Virtual Reality blurs this line. He told me to look into Jason Johnson, who works with machines and the city. Overall, he told me to either explore this idea of augmented reality or write a theses that explores how to generate empathy for refugees. How has that been done in the past? Why use VR as opposed to a TV campaign, live broadcast, presentations, or a film? Answering these questions will make my thesis razor sharp.

I also had an amazing meeting with Mona Kasra, which provided so many resources I’ll have to include it in the next log. I’m going to go into her suggestions in much more detail. She also gave me many potential precedents for my project.