---
id: lab2
title: Lab 2
sidebar_position: 2
description: Lab 2 for Students to Complete and Submit
---

# Lab 2

## Information Gathering

### Introduction

- This lab teaches various methods of **gathering information** from a **targeted computer system**. Normally, an individual or a company can be hired to perform **Penetration Testing** in order to detect weaknesses in an organization's computer system. The first phase (called the "**reconnaissance phase**" is considered to be a "harmless activity", where a person can simply gather information to be used later in other aspects of penetration testing (network _scanning_ and _enumeration_).
- Students will first learn how to gather various documents / information via a web-browser in order to obtain information regarding the **structure**, **relationships** and **policies** of a target company, as well as partners or servers that are associated with that target company (with emphasis on IP addresses). Once the relevant information has been collected, the student will then utilize open-source applications in order to perform **link analysis** to make connections between various IP addresses.
- Students will then learn how to use Interent-Based tools and technolgies to **mine data** that pertains more to the internal structure of the targeted organization's server(s), as well as it's specific IP Address ranges (subnets).
- Students will also learn how to use tools to gather information of the **users** of a targeted server, as well as **verifying** the targetted IP Addresses immediately prior to the _scanning_ and _enumeration_ phases.

### Objectives

1. Use the **search engine website (google.ca)** to obtain computer system information (including IP address).
2. Use various open-source applications to perform IP address associations with IP address (**Link Analysis**).
3. Understand the basic concepts of "**footprintng**" a targeted server with respect to the following open-source technologies:

    - DNS Lookup
    - WHOIS (Website Service)
    - Domain Name Expansion
    - HOST
    - SMTP

4. Using open-source tools in order to focus on _technical aspects_ of the server, in order to be more successful in the _scanning_ and _enumeration_ phase.
5. Use tools to gather user information such as e-mail addresses or other information via social networking sites.
6. Verify (confirm and narrow-down) valid IP Addresses (and ranges) to help reduce the time during the scanning and enumeration phases.
7. Practice skills learned in this lab to gather information of an educational penetration-testing server at Seneca College (**tank.senecac.on.ca**).

### Required Materials (Bring to All Labs)

- **SATA Hard Disk** (in removable disk tray).
- **Lab Logbook (Lab2 Reference Sheet)** (to make notes and observations).

### Prerequisites

- [SEC520 Lab 1](./lab1.md)

### Online Tools and References

**Information Gathering**

- [Google Search Engine](http://www.google.ca/) (site, filetype, link)
- [Netcraft](http://news.netcraft.com/)
- [BiLE Utilities](http://github.com/sensepost/BiLE-suite)

**Foot-printing**

- [whois](http://linuxmanpages.com/man1/whois.1.php)
- WHOIS Online Proxies: ([whois.domaintools.com](http://whois.domaintools.com/))
- [host](http://linuxmanpages.com/man1/host.1.php)

**User Information**

- [theHarvester.py](http://www.ehacking.net/2011/08/theharvester-backtrack-5-information.html)
- [Metagoofil.py](http://www.ehacking.net/2011/12/metagoofil-backtrack-5-tutorial.html)

**Verification**

- www.bing.com
- [nslookup](http://www.computerhope.com/unix/unslooku.htm)
- [dnsmap](http://www.ehacking.net/2011/02/dnsmap-dns-network-mapper.html)

**Other**

- [Online Linux Man Pages](http://linuxmanpages.com/)

### Course Notes

- [odp](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w1_l2.odp)| [pdf](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w1_l2.pdf)| [ppt](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w1_l2.ppt) (Slides: Reconnaissance)
- [Reconnaissance](http://www.youtube.com/watch?v=AHEt0mUZH_0) (YouTube Video)
- [Penetration Tester's Open Source Toolkit (E-book)](http://libcat.senecac.on.ca/vwebv/holdingsInfo?searchId=89542&recCount=50&recPointer=0&bibId=315433) (Chapter 2: Reconnaissance)

## Performing Lab 2

### Task #1: Using Search Engines to Obtain Target Server Information

With the "information gathering" phase of penetration testing, it is recommended to obtain as much data regarding a targeted organization. This would include viewing the website, noting contacts, following-up information from social media sites (eg. facebook, etc). In addition to the above-mentioned techniques, there are other techniques and tools to help gather useful server information of a targeted organization.

**sensepost.com**

This is a website that is dedicated to internet security, and provides a platform to help gather information regarding a server. In fact, examples from the textbook: **Penetration Tester's Open Source Toolkit** use examples from this website. We will be using this site for the majority of lab2...

**INSTRUCTIONS:**

1. Boot your **Kali Linux** (host) system, and start a graphical session.
2. Open a web-browser and go to the Google website ( http://www.google.ca/ )
3. Type in the following URL in the Google search box: **sensepost.com**
4. Note the type of links that are associated with this type of search (i.e total number of links at the top of the search results), and record the total number of links for this type of search in your lab logbook.
5. Now, enter the following directive in the Google search box: **site:sensepost.com**

**Enter Site Directive in Google Search Textbox:** Don't enter the "site" directive in the URL textbox at the top of the web-browser - enter this directive in the Google SEARCH text; otherwise, the directive will not work. Also make certain remain in the google web-page when performing this operation...

6. You should notice a change in the display of links. How does this search method differ from the previous search method using only the text: "sensepost.com"? Record your findings (including the new total number of links) in your lab log-book.
7. We will now be narrowing our search in the **sensepost.com** website for specific types of files for **pdf** with the filename keyword **hacking**

    - Enter the following directive in the Google search box: **site:sensepost.com filetype:pdf hacking**

8. What are the total amount of links? Are all of the links contained in sensepost.com? Record your findings in your log lab-book.
9. Issue directives to search for links in the sensepost.com website that contains MS Word documents (**doc**), and MS Word PowerPoint Presentations (**ppt**) that contain the pattern hacking. Record these findings in your lab log-book.
10. Finally, the **link** directive is used to display links that are associated with a target website. In order to display all websites that link to the _sensepost.com_ website, issue the following directive in the Google searchbox: **link:sensepost.com**
11. Record the total number of links in your lab log-book. Are there any other links outside the sensepost.com domain that are associated? How do you think this is useful in terms of penetration testing?
12. How do you think that you could use this information that you have just collected during this lab for penetration testing? (Record your answer in your lab log-book)
13. Repeat the information-gathering process for the following URL: **linux.senecac.on.ca** for practice.

**Gathering Information in your Own Server at Home**

Just for Interest, it is not that difficult to obtain SOME information regarding your own computer system at home. First, determine your IP address by using the **ifconfig** command for Linux, or the **ipconfig** command in windows. One very quick way to determine your IP Address is to simply type **IP Address** in the URL Window of your web-browser. Knowing your own IP Address at home is useful during the **link analysis** and **domain name expansion** steps in the next task...

14. Proceed to Task #2

**Answer the Task #1 observations / questions in your lab log book.**

### Task #2: Server Detection, Link Analysis & Domain Name Expansion

In this section, we will use the site information (obtained from _Task #1_) to gain more detailed information regarding the targeted organization's server (eg. IP address, Type of operating system, History of uptimes, name server information , Related IP addresses of other servers).


**INSTRUCTIONS:**

1. Assuming that your web-browser is still running, click on the following link (which should open in another browser window): http://www.netcraft.com.

    - **NOTE**: Do not worry if you are redirected to another URL (eg. news.netcraft.com) - it will provides the same information we require.

2. Let's find out additional information regarding the **sensepost.com** website. In the **What's that site running**? box, enter the following: **sensepost.com**
3. Record the following server information for "sensepost.com" (and record in your lab log-book):

    - IP Address
    - Type of Operating System
    - Name Server
    - Country Origin
    - Date First Noticed (Tracked)
    - Frequency of Uptimes

4. The next step in the reconnassaince phase involves **Linux Analysis**, which will list and categorize relationships between other websites, and the "_target_" website called "**sensepost.com**". You will be downloading, installing and running serveral open-source tools (a series of packages packaged as **BiLE** (which stands for: "_Bi-directional Link Extraction_" tools) to asssist in obtaining this information.

**Installing Dependencies for BiLE.pl, BiLE-Weigh.pl**

You may need to download the **BiLE** Utilities, consisting of useful Perl Scripts. Your Kali Linux distribution most likely comes with Perl already loaded. On the other hand, prior to running these Perl Scripts, you may be required to first install the application called **HTTrack**. You can do this by installing "httrack" via "apt-get" or use a graphical application (such as **Synaptic Package Manager**)

5. Issue the command: **which httrack** to confirm that this dependent application has been installed (refer to warning message above).
6. In a web-browser, go to the following website (which will open in a separate browser window): http://github.com/sensepost/BiLE-suite
7. Download the Perl Scripts called **BiLE.pl**, **BiLE-Weigh.pl**, and **tld-expand.pl** to your Kali Linux system.

**Perl Scripts Containing Errors When Executed**

If errors occur, **check to see if that Perl Scripts were properly downloaded. If they contain HTML code, an alternative to downloading is to display the Perl Script in the web-browser, copying and pasting the code to the file on your computer** (_as opposed to right-clicking link and saving to your computer_).

8. Run the following command: **perl BiLE.pl sensepost.com output.sensepost.com** (assuming BiLE.pl is located in the current directory).

    - Note: This process may take serveral minutes to complete.

9. When the process has completed, a report called "**output.sensepost.com.mine**" (contained in the current directory) will be created that display associated links with the sensepost.com website. Using a text editor, view the contents of that file. Write in your lab log-book the number of lines in the file "output.sensepost.com.mine".
10. If there is not enough information in this file, run the **BiLE.pl** script for the URL: **linux.senecac.on.ca** to be sorted in the file called **output.linux.senecac.on.ca**
11. Another Perl Script called **BiLE-weigh.pl** is used to rank the significance (relevance) of the related links with higher ranking links near the bottom of the file. This Perl Script requires the URL of the target website, as well as the output-file (generated by the BiLE.pl Perl Script.
12. Issue the following command: **perl BiLE-weigh.pl sensepost.com output.sensepost.com.mine** (Assuming BiLE.pl Script and "output.sensepost.com" are contained in the current directory).

**Error: Sort: open failed: +1: No such file or directory**

If you run the **BiLE-Weigh.pl** command, and encounter the above error, then make the following editing changes for this script:

**change following line**: 

```bash
'cat temp | sort -r -t ";" +1 -n > @ARGV[1].sorted';
```

**to read**: 

```bash
`cat temp | sort -r -t ":" -k 2 -n > @ARGV[1].sorted`;
```

(Note: \` in this case is "Left-Tick" representing command substitution - not to be confused with a single-quote.

13. View the contents of the file "output.sensepost.com.sorted" in your current directory. Notice the ranking of the relavance of links associated with "sensepost.com" website. Record the number of lines in this file in your lab log-book. What conclusions can you draw in terms of link analysis? Write this information down in your lab log-book.
14. Run the **BiLE-weigh.pl** perl script for the URL: **linux.senecac.on.ca** and using the file: **output.linux.senecac.on.ca.mine**
15. The final step in the information gathering process is to perform **Domain Name Expansion**. There are two parts to this process:

    - Variations in the DNS Name (use **host** command)
    - Variations in the Top Level Domain (use **tld-expand.pl** Perl Script)

16. Open a shell terminal, and type the following command: **host -t ns sensepost.com** (If there is a long list of variations, you can redirect stdout to a text file).
17. Record the various name servers that are listed in your lab log-book.
18. Create an input file called **sensepost.com.domains.txt**, and place any domain names that you have discovered, and then save and exit editing session.
19. Issue the command: **perl tld-expand.pl sensepost.com.domains.txt sensepost.com.domains.variations.txt**. What do these variations represent in terms of reconnaissance? Record your finds in your lab log-book.
Proceed to Task #3

**Answer Task #2 observations / questions in your lab log book.**

### Task #3: Foot-printing

As opposed to the Information Gathering phase (that collects information such as IP Addresses), the Foot-printing phase tends to gain a “clearer picture” of the structure of the organization's computer system. This can include **relationships among servers**, as well as noting **IP Address ranges**.

Footprinting (in simpler terms) means **Network Mapping**.

**Note**: You will be using information that you gathered from the server: **sensepost.com** in order to assist you with this lab.

INSTRUCTIONS:

1. In a shell window, issue the following command: **host sensepost.com**
2. Record the results in your lab log-book.
3. Issue the same command with following options: **host -t ns sensepost.com**
4. Record the results in your lab log-book.
5. Issue the following command: **nslookup sensepost.com**
6. How does this information differ from the other 2 commands previously issued?
7. Issue the following command: **whois sensepost.com**
8. List the additional general information that is provided from your all three previous commands.
9. How do you think that this recently collected information can help you "map" the target computer's network?
10. Proceed to Task #4

**Answer the Task #3 observations / questions in your lab log book.**

### Task #4: Obtaining User Information

You will be using the information collected in Task #1 to assist with obtaining User information in this task.

**Install metagoofil program:** The harvester program is already installed in your Kali system, but you will need to install the program metagoofil. Issue the command (as root): **apt-get install metagoofil**

**INSTRUCTIONS:**

1. Issue the command **theharvester --help**, to learn how to run this script again with the following options:

    - Domain: **sensepost.com**
    - Number of limited results: **100**
    - Data Source: **google**
    - Output filename: **~/sensepost.user**

2. Record any user information that you consider relevant (for penetration testing) in your lab log-book.
3. For user information collected so far, use this information to see if you can access their profiles or other information on social media sites (eg. Facebook, Classmates, MySpace, Twitter, etc.).
4. Finally, we will be obtaining documents from the targeted network (via Google) that may help provide more information regarding the users.
5. Issue the following command: **metagoofil --help** to learn how to run this script again with the following options:

    - Domain: **sensepost.com**
    - Number of limited results: **10**
    - Number of files to download (_-n option_): **10**
    - Filetype: **pdf,ppt**
    - output directory: **sensepost.docs**

6. Check to see if any files were downloaded. If so, write the filenames in your lab log-book.
7. Proceed to Task #5

**Answer Task #4 observations / questions in your lab log book.**

### Task #5: Verification / The "Tank" Server

**Location of dnsmap Utility in Kali Linux:** The **dnsmap** utility is a time-saving method of determining reverse dns lookups in a batch mode involving an input file of collected dns entries.

This utility is contained in your Kali Linux boot media under the file pathname: **/pentest/enumeration/dns/dnsmap**

It is important to "double-check" the validity of your collected information - in particular, your IP addresses. If any servers are no longer running, this can waste a tremendous amount of time during the scanning process. Remember: the longer a scan takes to execute, the more vulnerable you are as the penetration tester to detection.

INSTRUCTIONS:

1. Open a web-broswer and go to the website: **www.bing.com**
2. Enter the IP addresses that you have gathered during your reconnaisance phase for **sensepost.com**. Verify that each IP address is valid, and it currently operational.
3. For each of the related IP address information you have gathered regarding sensepost.com, use the **nslookup** command to verify it's existence.
4. Change to the directory that contains **dnsmap** utility.
5. Run the **dnsmap** utility with an input file containing your collected IP_ADDRESSES.
6. Seneca College has a special server (called **tank**) that is used for penetration testing. No only is this server intended for educational purposeses only, but students are **NOT** allowed to perform penetration testing unless that have completed a form that is distributed and collected by your instructor to permit students to perform testing on that server for the semester!

    - **Once you have signed and given the tank server consent form your your instructor, try gathering information regarding this server called "tank", and record your findings in your lab log-book.**

7. Proceed to "Completing the Lab"

**Answer Task #5 observations / questions in your lab log book.**

## Completing the Lab

**Arrange evidence for each of these items on your screen, then ask your instructor to review them and sign off on the lab's completion:**

1. Reconnaissance Information from sensepost.com:

    - Basic information from **sensepost.com** website via the Netcraft utility site.
    - Reports from running _BiLE.pl_ and _BiLE-Weigh.pl_ for _sensepost.com_
    - Main DNS information (Footprint) for _sensepost.com_
    - User information (e-mail addresses) for the _sensepost.com_ site.
    - Verification of DNS information for _sensepost.com_ site.

2. Completed Lab 2 notes (including common commands, etc).

## Preparing for Quizzes

1. List the major phases contained in penetration testing.
2. Explain the difference between **reconnaissance** and **footprinting**.
3. List 3 open-source tools to assist in the **Footprinting** phase of penetration testing.
4. Briefly describe the process to obtain key documents from a server using **google.ca**
5. Briefly describe the steps to obtain IP, operating system information from a website called **linux.senecac.on.ca**. Indicate how this information might be useful in future stages of penetration testing.
6. Define the term **link analysis**. What open-source tools can be used to perform _link analysis_?
7. Define the term **Footprinting** as it relates to penetration testing.
8. List the steps (using open source tools) to obtrain user account information of a targeted server. Indicate how this information might be usedful in future stages of penetration testing.
9. Why do you think that verification of gathered information (such as IP address (IP address ranges) is critical prior to proceeding to the scanning and enumeration phases?
