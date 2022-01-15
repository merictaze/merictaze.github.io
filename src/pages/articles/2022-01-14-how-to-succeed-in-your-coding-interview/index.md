---
layout: post
title: "How to Succeed in Your Coding Interview"
date: "2022-01-14"
category: "Interview"
draft: false
path: "/posts/how-to-succeed-in-your-coding-interview/"
tags:
- "coding"
- "interview"
- "senior"
- "leetcode"
- "FAANG"
description: You solved 60 LeetCode hard and 300 LeetCode medium questions, you were a rockstar in your coding round and provided the most efficient solution in the world, but you couldn’t get the offer. Sounds familiar? Either case, keep reading, you might find some useful tips.
featuredImage: ./cover.jpg
---


You solved 60 LeetCode hard and 300 LeetCode medium questions, you were a rockstar in your coding round and provided the most efficient solution in the world, but you couldn’t get the offer. Sounds familiar? Either case, keep reading, you might find some useful tips.

![](./cover.jpg)<figcaption>Photo by <a href="https://unsplash.com/@clemhlrdt">Clément Hélardot</a> on <a href="https://unsplash.com">Unsplash</a></figcaption>

The main problem with leetcode or similar tools is that you get used to having all the details, requirements, boundaries, input, output, method you need to implement as a given. So, you don’t ask anything, just go ahead and start filling the given method with your solution. After doing this 10s or 100s of times, guess what, you do the exact same thing in the actual interview. Based on the given question, you’ll assume you know everything and start writing the code without asking anything to the interviewer. I’ve seen cases where candidate even forgot to define a method, they just threw the code in the empty shared doc. After that point, it’s hard to turn this into your favor. That’s why it’s so important to have a framework and follow the same steps again and again for every single leetcode question you solve till it becomes an instinct.

Another common problem is that candidate thinks coding round is all about finding the most efficient solution. It’s not. You’re not being hired to keep solving algorithm questions, but to contribute to huge code-bases. That means things below are as important as solving the question correctly. Sometimes these are assigned to different coding rounds and questions are selected accordingly

* Writing clean and maintainable code
* Understanding Data Structure and Algorithms
* Writing modular code (so, please don’t put everything in a single method)
* How much you know the details of the language you said you mastered at
* Can you apply OOP concepts if question looks like one.


Before going any further, please note each interviewer’s background and their expectations will be different. Some might prefer just going straight to the implementation without spending time on anything else. While following below steps, also keep an eye on interviewer’s tone to understand which part they care about more. Also note that some steps below are more important to get a senior offer, and might not be needed for more junior positions.

Let’s start with the steps you need to follow.

## Step 0: Write everything down in the shared doc

While following the steps below, make sure you write them down in the shared doc with the interviewer. Interviewers usually enter their feedback after a couple of days, and the notes they take might not be very detailed. Don’t leave it up to chance and write down everything. Most interviewers will copy+paste everything you write in that shared doc into their internal tools as a data point. So, write down everything so that they will remember you clarified the requirements, discussed the boundaries, provided a couple of solutions before implementing one.

## Step 1: Summarise the question statement

Question can be a one-liner (e.g. “Check if given binary tree is BST”) or a full page with a lot of requirements. In either case, summarize the question with your own words. You would be surprised how many times candidates make wrong assumptions on the question and solve a problem not even close to what was asked.

Maybe you forgot what a BST was. While writing the question in your own words, talk to the interviewer, explain what BST is. Maybe you miss a rule and they’ll correct, which will save the interview.

## Step 2: Ask requirements and boundaries

Just because interviewer said you’re given a number, it does not mean it’s an integer. It’s your responsibility to ask these questions:

* What’s the input and output
* Is integer boundaries fine, or we want to support bigger/smaller numbers so that you can use long or BigInteger
* Ask if you’re operating on negative, positive or all numbers
* What to do when you get null, empty list or invalid input. Do you need to return 0, -1 or throw an exception?
* Is it  possible to get an input sequence that is unsolvable

## Step 3: Talk through possible solutions

Even the most basic problem can have many different solutions. Before diving into one, make sure you think through possible solutions and list them down. You can mention that if you want to save on time, you can use a hashmap with this solution. But, if you want to save on space, you can sort the input first which will take more time but less space. Don’t miss the chance of showing off your knowledge. These conversations will help you especially for the cases that you couldn’t fully implement your solution. Some interviewers will be looking for “Data Structures and Algorithms” instead of “Problem Solving” competency.

## Step 4: Start implementing

After you agree on a possible solution, start implementing it. One common approach I use is the following

1. Create a solution template by defining the methods I need, only the signature and return type without the body
2. Start from the top method and use other methods as if they’re all implemented already
3. Then, start implementing the remaining methods

This allows me to write clean and modular code. Another benefit is that when you list down the methods you’ll implement, interviewer will get the idea. So, even if you don’t have time to implement it all, interviewer will not care much.

Some interviewers will prefer you to talk while writing code, some will prefer silence. Ask them their preference. If you have a preference, tell it to the interviewer as well. If you cannot solve the problem while talking, trying doing that will not make anything better.

When jumping between lines and commenting about those, please also mention the line number you’re looking at. Most of the time, it’s not a screen share but a shared doc. So, interviewer will not always see where your cursor is.

After you complete, please don’t say “I’m done, here is my solution, send me the next interviewer”. First implementation is rarely perfect, so continue with the steps below

## Step 5: Check edge cases/boundaries

Make sure you added the base cases. Check what your code does when null or empty list is given. If you ever access an index of an array or a list, make sure the given index never goes out of bound

## Step 6: Run through an example

Based on the time left, you may want to run your code through an example to make sure there are no bugs. Your interviewer will not tell you something is wrong most of the time, but if you don’t realize by yourself, they’ll surely take a note of it.

Take an example and start running the code line by line. Explain which line you’re evaluating and what’s the value of each variable at that point. It might be useful to add variable values as comments while you iterate.

## Step 7: Closing up

You’re not fully done here. Keep showing your knowledge. Tell them you could have used some OOP concepts here and there to make the code more readable and modular, or some complex data structures which would save on time or space. Once you have nothing else to say, ask them if they have any question for you. Interviewer might ask follow up questions like these

* What’s the time and space complexity of your solution
* How would you test your code
* Do you see any issue with the code you wrote

They might also make small variations to the question just to collect some more data points. Unless you completed it pretty early, these question will most likely be for discussion rather than expecting an actual implementation

* What if input was sorted
* How would you approach if we need the first 3 elements instead of 2
* What if you’re not allowed to use additional space
* Do you think using recursion will save on the additional space you use
* What if the file size is too big and cannot fit into the memory.

## Step 8: Ask questions

Usually last 5-10 minutes is spared for your questions about the team and company. If some time left at the end, and you say “I don’t have any questions, thanks, bye”, it might imply that you don’t really care about the team and company. Even though this is not part of the data points interviewers collect, it might leave a bad taste. So, keep a couple of questions ready to ask to your interviewers.

## Summary

Same suggestion here, write it on a paper, put it next to your screen and keep practicing. Even if it’s a LeetCode question, don’t skip to step 4 and hit the run button as soon as you finish. Practice will make perfect.

* Step 0: Write everything down in the shared doc
* Step 1: Summarise the question statement
* Step 2: Ask requirements and boundaries
* Step 3: Talk through possible solutions
* Step 4: Start implementing
* Step 5: Check edge cases/boundaries
* Step 6: Run through an example
* Step 7: Closing up
* Step 8: Ask questions

Good luck with your interview!
