---
id: lab3
title: Lab 3
sidebar_position: 3
description: Lab 3 for Students to Complete and Submit
---

# Lab 3

## Scanning, Enumeration & Vulnerability Testing

### Introduction

This lab focuses on identifying and exploiteng a server's vulnerabilities in order to gain access to that system. Information assembled in the reconnaissance phase provides the data used in the **scanning & enumeration** phases.

Students will obtain information from reconnaissance of their vulnerable VMs (IP_ADDRESS) and use _scanning_ & _enumeration_ to better map and then exploit their vulnerable _Linux_ and _Windows_ servers. They will do this in the following manner:

1. Students will first use the **nmap** utility to scan a server to determine that the server is active (running). Verifying active servers can reduce the amount of scanning time to help avoid detection.
2. The **nmap** utility will then be used to list various **services** (ports) that are running on a server.
3. The student will perform enumeration (via **banner-grabbing**) to identify running services, and will perform **fingerprinting** to determine the version and type of the operating system on that targetted server.
4. Once students have completed the _scanning_ & _enumeration_ phase, they will use that information to perform _vulnerability testing_ (using **Nessus** and **Metasploit**) to gain access to that targeted server.
5. Finally, once students sign a waiver form and receive authorization to perform penetration testing on Seneca's **Tank** server, they can apply what they have learned in this lab on the Tank server. Students will also receive accounts to access this server for penetration testing...
6. Once students have completed the scanning & enumeration phase, they will use that information to perform vulnerability testing (using **Nessus** and **Metasploit**) to gain access to that targeted server.

### Objectives

1. Use the **nmap** utility to verify that a targeted server is active (running).
2. Learn various options of the nmap utility to perform **half-open scans**, **UDP scans**, and list **running ports**.
3. Use the **nmap** utility to generate reports.
4. Use the **nmap** and **netcat** utilities to verify the type and version of the operating system (**finger-printing**), and verify the version running services (**banner grabbing**).
5. Use the **nessus** and **Metasploit** frameworks to flag, exploit, and gain access to a vulnerable computer system.
6. Practice scanning and enumeration on the **Tank** server at Seneca College (assuming permissions forms submitted, and permission granted by your instructor / ACS).

### Required Materials (Bring to All Labs)

- **SATA Hard Disk** (in removable disk tray).
- **Lab Logbook** (Lab3 Reference Sheet) (to make notes and observations).

### Prerequisites

- [SEC520 Lab 2](./lab2.md)

### Online Tools and References

**Scanning & Enumeration**

- [netcat](http://www.howtoforge.com/useful-uses-of-netcat)

**Vulnerability Testing**

- [nessus](http://www.symantec.com/connect/articles/introduction-nessus)
- [Metasploit Framework](http://www.ehacking.net/2011/10/metasploit-tutorials-from-beginner-to.html)

### Course Notes / Resources

- [odp](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w2_l1.odp) | [pdf](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w2_l1.pdf) | [ppt](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w2_l1.ppt) (Slides: Scanning & Enumeration)
- [odp](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w2_l2.odp) | [pdf](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w2_l2.pdf) | [ppt](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w2_l2.ppt) (Slides: Vulnerability Testing)
- [Scanning 1](http://www.youtube.com/watch?v=_Ch0RJlHFBo) | [Scanning 2](http://www.youtube.com/watch?v=WKLNAAt57Wg) | [Enumeration](http://www.youtube.com/watch?v=_Ch0RJlHFBo) | [Vulnerability Testing - Overview](https://www.youtube.com/watch?v=FMgAIfcPsyw) (YouTube Videos)
- [Installing Nessus in Kali Linux](http://www.youtube.com/watch?v=BDTLdCllfr4) (YouTube Video)
- [Using Nessus in Kali Linux](http://www.youtube.com/watch?v=QjuyasD1aBE) (YouTube Video)
- [Using Metasploit Pro in Kali Linux](http://www.youtube.com/watch?v=WlZuq6Vj5AI) (YouTube Video)
- [Use Armitage to Exploit Multiple Machines in Kali Linux](http://www.youtube.com/watch?v=xErWWX2jllU) (YouTube Video)

## Performing Lab 3

### Task #1: Verifying Server is Active

After the _reconnaissance_ phase, it is important to verify that the target IP Address(es) are active (running). A great amount of time can be saved during the scanning and enumeration process by simply confirming that your target exists. Wasting time while scanning invalid targets can also increase the chance of detection from a server's IDS (Instrusion Detection System).

In investigations 1 - 3, you will be learning to perform manual scans of targeted servers using the nmap utility. It is useful to learn how to use nmap, since other penetration testing software such as Nessus and Metasploit (discussed in later investigations) use the nmap utility.

**CAUTION!**
To date, any reconnaissance activity is considered to be “safe” for the penetration tester. **The tester will “cross the line” when they start to scan ports, or use utilities that scan ports to identify vulnerabilities on a server (enumeration)**. If the tester does NOT have written permission to scan a server's ports, they may be subject to **legal action or account suspension from their ISP!**

**There are safe-guards that are available for performing scanning and enumeration at Seneca College:**

- The **IFS lab** is designed for user to switch from the Internet to an internal network to practice authorized scanning & enumeration.
- Students have created **Virtual Machines** (_Linux_ and _Windows 2003 server_) in _lab1_ to practice scanning & enumeration.
- Seneca's **Tank**

server available for SEC520 students to practice scanning & enumeration at college or at home (on the basis of the student properly

completing a signed permission form from ACS).

**INSTRUCTIONS:**

1. Boot-up your _Kali Linux_ (_host_).
2. Prior to booting up your vulnerable Linux and Windows VMs, follow the steps in the message box below to changes the network settings for each VM.
3. After making the network settings changes (above for each VM), boot your vulnerable Linux and Windows VMs.
4. Determine the IP Addresses for your Linux VM (**/sbin/ifconfig** for LINUX_IP_ADDRESS) and your Windows 2003 Server VM (**ipconfig** for WINDOWS_IP_ADDRESS). Write this information in your lab log-book.
5. Take several minutes to review **class notes**, **YouTube videos**, and the **online man pages** to learn how to use the **nmap** utility before proceeding.
6. Switch to your Kali Linux (host) machine and open a shell terminal.
7. Issue the following command to verify that the virtual server is active:

```bash
nmap -v -sn LINUX_IP_ADDRESS
```

8. Is this server active?

**Paranoid of Making a Mistake with nmap?:** If you are worried about making a mistake when using nmap (eg. scanning a wrong network), you can **disconnect from the Seneca wireless or lan connection prior to scanning and enumeration**. In this way, you are disconnected from Seneca's computer network prior to experimenting with your own host machine and virtual machines. Remember to establish the wireless or lan connection after you have performed your scan...

9. Try to verify that the Windows 2003 Server is active (running nmap with your WINDOWS_IP_ADDRESS).
10. Can you detect this server? Write the result in your lab log-book.
11. Try performing a **UDP scan** for **both the Linux and Windows VMs** by issuing the following commands:

```bash
nmap -v -sU LINUX_IP_ADDRESS
nmap -v -sU WINDOWS_IP_ADRESS
```

   - This may take some time. Try to time how long this UDP scan takes, and compare it with the TCP ping scan you previously performed. Why do you think it is useful to perform a UDP scan in addition to a TCP scan?

12. Record your findings in your lab log-book.
13. Proceed to Task #2

**Answer the Task #1 observations / questions in your lab log book.**

### Task #2: Various Scanning Techniques

Now that we have verified that our targeted IP Addresses are active, we can perform a scan to determine which services are running on those servers. We can also record this information in a report format (which can be inserted into a later Security Audit Report).

**INSTRUCTIONS:**

1. Use the **nmap** command to perform a **stealthy scan** in order to list the ports for the Linux VM by issuing the following command:

```bash
nmap -sS LINUX_IP_ADDRESS
```

2. Record any running services (with associated port numbers) in your lab log-book.
3. Repeat step 2, but view course notes and add an **option** to record findings in report file(s) called **/root/linux_vm_scan**
4. The reports are created in 3 different formats. List those formats, and give a reason how these can be incorporated into a Security Audit Report.
5. Repeat steps 2 and 3, generating similar reports for the Windows 2003 Server VM called **/root/windows_vm_scan.**
6. Use what you have learned in task #2 to assemble a scanning report for your Linux and Windows VMs. These files must be available for your instructor to check when you have completed this lab.
7. Proceed to Task #3.

**Answer Task #2 observations / questions in your lab log book.**

### Task #3: Enumeration Techniques

The process of enumeration places more emphasis on scanning information of a server's **operating system (finger-printing)**, and on software versions of a server's running services (**banner-grabbing**).

**INSTRUCTIONS:**

1. Issue the following command for the Linux VM:

```bash
nmap -O LINUX_IP_ADDRESS
```

2. Can you detect the type and version of the operating system? Record your findings in your log lab-book.
3. Perform the same scan, but for the Windows 2003 Server VM. Record your findings in your log lab-book.
4. Issue the following command to perform a **banner grab** for your vulnerable Linux VM:

```bash
nmap -sV LINUX_IP_ADDRESS
```

5. Take several minutes to review **class notes**, **YouTube videos**, and the **online man pages** to learn how to use the **netcat** utility before proceeding.
6. Use the **netcat** utility to verify the purpose of the running services on the Linux VM.
7. Record your findings in your lab log-book.
8. Repeat the 2 previous steps, but for the Windows 2003 Server.
9. Use what you have learned in task #2 to perform enumeration for your Windows and Linux VMs. Incorporate this information into a file called: **vm_security_audit_linux** and **vm_security_audit_windows** respectively.
10. Proceed to Task #4

**Answer Task #3 observations / questions in your lab log book.**

### Task #4: Identifying Server Vulnerabilities Using Nessus

This section will reap the benefits from the previous phases of penetration testing you have performed in the previous labs. You will be using the information assembled in your previous labs to **gain access** into your vulnerable **Windows** VM (possibly Linux VM) by exploiting weaknesses of their running services. You will be using two common utilties (or _frameworks_) in order to achieve access: **Nessus** and **Metasploit**.

**INSTRUCTIONS:**

1. Make certain that your **Kali Linux system is running**, and that both of your **Windows and Linux VMs are running**.

**Exploiting Local Systems: Nessus Server-Client:** This application is a server-client model that is run on the running server to determine its vulnerabilities. This application has the **nmap** utility built into the application, and allows for plugins to be added to enhance vulnerability testing. The Nessus server (**daemon**) must run first to allow the penetration test to graphically interface with the application (**client**).

2. First you should register a free account on the **Nessus Website** in order to download plugins (and run the nessus server). To register, go to the following URL, and select home use: http://www.nessus.org/register/. Once you complete the registration form, an e-mail will be sent with a "one-time" ACTIVATION_CODE_# (you will need this in an up-coming step).
3. Next, in your host machine, open a shell terminal and issue the following command to install the **gdebi** application to allow you to automatically download and install debian packages by clicking on a .deb file link:

```bash
sudo apt-get install gdebi
```

**Is There a Previous Version of Nessus?** If there is already an older version of **nessus** that exists on your host, remove it by issuing the command:

```bash
sudo apt-get remove nessus
```

3. Next go to the following website: http://www.tenable.com/products/nessus/nessus-download-agreement

    - (select to download a version for **Debian** for your appropriate OS: 32-bit or 64-bit).

4. A dialog box will appear to allow you to save the file. Note the directory where you have saved the deb file.
5. In the **Administration** menu, selec the **Gdebi Package Manager**. Click the **File** menu, and **open** and then select the downloaded deb file. Allow the program to install the Nessus package.
6. Allow the installation to complete (it may take a long time to download the newest plugins).
7. You need to create a username and password in order to access the Nessus server (from web-browser). Run the following command to create a username and password:

```bash
sudo /opt/nessus/sbin/nessus-adduser
```

8. Prior to starting the Nessus server, you need to register this application. **Use the registration/activiation code (provided from e-mail you received from above procedure)** by issuing the command:

```bash
sudo /opt/nessus/bin/nessus-fetch --register xxxx-xxxx-xxxx-xxxx
```

   - **(i.e. xxxx-xxxx-xxxx-xxxx represents activation-code contained in received e-mail message)**

9. Issue the following command to start the Nessus server:

```bash
sudo service nessusd start
```

10. You can run the Nessus client application in order to connect to the Nessus server (recommended) by web-browser. Simply launch a web-browser and type the following URL: https://127.0.0.1:8834/

**Problems connecting to Future Nessus Sessions:** If you have installed and setup Nessus, yet cannot connect to the Nessus client, check to see if the Nessus server is running, and if no, start the service. It is recommended to make this service persistent.

11. When the application launches in the web-browser resource, you may have to indicate that you trust the connection, and to add an exception. It may take serveral minutes for the application to initialize. Login to your default user account (with the corresponding password).
12. Go to the **Policies** section, and create a new policy called **Basic** for a "Basic Scan". Select this policy for Windows, but you are NOT required to provide the Window's username and password.
13. Click the **Scan** section and add a new scan called **Windows 2003 Server** using the **Basic** policy, and adding the IP ADDRESS at the bottom target area. Click on the **Launch** button to begin the scan.
14. You will be able to view the status of the scan. When the scanning has been completed, view and note the vulnerabilities that are listed in the scanning report.
15. What vulnerabilities do you see? Which ones were the most severe? Record these observations in your lab log-book.
16. How do you think that you can use the above-mentioned information that you have collected? Note your observations in your lab log-book.
17. Try creating other policies for the different types, and repeat scanning for the Windows target. What other vulnerabilities did you discover? Record your findings in your lab Log-book.
18. Repeat **steps 12 to 16**, but for your **Vulnerable Linux (Fedora) server VM**. Make certain to use your **VULNERABLE_IP_ADDRESS (or range)** and name the report **Fedora 5 Linux**. Note your observations in your lab log-book.
19. Proceed to Task #5

**Answer Task #4 observations / questions in your lab log book.**

### Task #5: Accessing Vulnerable Servers Using Metasploit

**Metasploit** is a framework (collection of utilities) for penetration testing. This framework acts as a server-client model that is run on an **internal network** (unlike **Nessus** which can be run from a remote server). This framework is ideal when working on your host/VM setup for penetration testing. Depending on the targeted server's vulnerability, the penetration tester may be able to access that system.

1. For both vulnerable machines, log-in as a regular-user.
2. To obtain the Proprietary version of Metasploit, you need to register first. Here is the link to Metasploit Pro website: https://www.rapid7.com/products/metasploit/metasploit-community-registration.jsp
3. You will presented with a form to fill-out your personal information, and then you are required to **create account**. Make certain to apply for the free (community edition). During that process, you will be required to fill out information (including e-mail) in order to get an activation code.
4. At some point, you will be redirected to another screen to download the file for Metaspoit Pro. Once downloaded, you need to add execution permissions for the downloaded file, and run the file from the shell.
5. After the file installs, you will be prompted to open a web interface (open it). Make certain to create a new user.
6. Once you check your e-mail to obtain the activation code, enter the product key (activation code) in the required field to obtain your account.
7. If all goes well, there will be an indication that the activation is successful.
8. Back in your e-mail message with the **activiation code**, there is a link to a "**Getting Started Guide (pdf)**". Take a few minutes to read the pdf to get a sense of how to setup and use Metasploit to exploit your Window and Linux servers.
9. In your screen, click **New Project**. For this new project, give it a name of **Windows 2003 Server**. Set the scan range for your Windows IP ADDRESS, then click to perform a scan, and then click on **Launch Scan**. The scanning process can take a few minutes to complete.

**Scanning is Required Prior to Exploitation**

Other than configuration there are generally three steps in using Metasploit:

- **Scan the targeted server(s)** to detect vulnerabilities
- If any vulnerabilities are discovered, **load the attack(s) to exploit the server**, thus hopefully gaining access to the targeted server
- **Collect evidence** to show employer or client proof of vulnerable server being penetrated

After proving server penetration, then steps can be taken to make it harder for the server to be penetrated (referred to as system "hardening").

10. Refer to the **YouTube Video** on how to use both **Nessus** and **Metasploit** to penetrate the target server(s): [Kali Linux - Security by Penetration Testing Tutorial: Metasploit Pro](http://www.youtube.com/watch?v=WlZuq6Vj5AI)

**Upgrade to Pro Trial Version Required:** When you start an exploit or "brute force" attack, you will be shown a webpage that allows you to upgrade to the Pro version (trial version). Click on that link to download activation code to install and register the trial version, then continue with your exploit.

11. Learn how to penetrate, and capture proof that you pentrated the Windows 2003 server. Make certain to record the procedures in your lab log-book.
12. Perform the same operations above, but for your vulnerable Linux server. Where you successful? If not, why do you think you were unsucessful? Perform a netsearch in Google to see if there are recommended approaches on how to penetrate the Fedora Core 5 system.
13. Do you think performing a "**Brute Force**" or "**Hail Mary**" attack is advised? If not, provide the reasons why an alternative should be used.

**Armitage is Open Source (free) GUI Alternative**

The company **rapid7** has taken over ownership of Metasploit, and the the full version of this application costs approximately $1800! On the positive side, there is an open source (free) GUI for Metasploit client called **armitage**. If armitage does not appear to be present on your Kali Linux system, it has been added to the default repository for install.

You will be following instructions below to install and run armitage and compare the common scanning and exploit attacks to gain access.

14. Open a shell terminal, and login as root.
15. Issue the command: `which armitage` to confirm that this application exists on this server. If there is no pathname to that application, issue the command: `apt-get install armitage` (make certain application has been installed).
16. While logged on as root, issue the command: `armitage`
17. Refer to the following YouTube video to learn how to use armitage to scan and run exploitation attacks: [Use Armitage to Exploit Multiple Machines in Kali Linux](https://www.youtube.com/watch?v=j7uLBzULOE0&feature=youtu.be)
18. Note the differences between using armitage and the proprietory application Metasploit Pro in your lab log-book.

**Additional Practice with Metasploit (Optional)**

If you were not able to access the Fedora Core 5 machine, you can always perform a Google search to find out techniques to help to access the machine. You ca n also create another VM using a more vulnerable Linux Distribution (like Metasploitable: [Download Metasploitable OS](http://www.rapid7.com/resources/videos/test-metasploit-with-metasploitable.jsp)

Another thing to consider is to learn how to use the Metasploit command conso le to learn how to load and launch singluar attacks (resource: [MSF Console Commands](http://www.offensive-security.com/metasploit-unleashed/Msfconsole_Commands))

19. After you have received authorization (i.e. "green light" from your instructor) try penetration testing on your **Tank** server accounts, login to confirm IP_ADDRESS, and start to perform penetration testing in this server. **WORD TO THE WISE: Don't do anything relating to penetration testing with the Tank server without "thinking it through" first!** (i.e. you have been warned)...

**Preparing for Lab #4**

Now that you have learned to pentrate a network server, you will learn now to protect (_harden_) the server. We will learn how to harden the Linux server first, and then learn how to harden the Windows 2003 server (in a later lab).

You will be creating a new virtual machine called "**Hardened Linux**" with the most recent version of Fedora. The reason why we do this is that **Fedora 5 is no longer supported**, and we want to learn the proper way to harden a Linux system (which involves constant upgrading).

In Virtualbox, you can install a downloaded Fedora image as a **virtual file**. You will learn how to perform this in lab4. In the meantime, you can download the most recent version of the Fedora install DVD image from (32-bit or 64-bit): https://getfedora.org/en/workstation/

20. Proceed to "Completing The Lab".

**Answer Task #5 observations / questions in your lab log book.**

## Completing the Lab

**Arrange evidence for each of these items on your screen, then ask your instructor to review them and sign off on the lab's completion:**

1. File contents of your Linux and Windows system **enumeration** (both Nessus and Metasploit).
2. Completed Lab 3 notes (indicating scanning and enumeration techniques).

## Preparing for Quizzes

1. Explain the difference between **scanning** and **enumeration**.
2. What is the purpose of a **half-open scan** when using the **nmap** utility?
3. What is the purpose of a **UDP scan** when using the **nmap** utility?
4. List 3 unique methods and permitted methods of performing penetration-testing at Seneca College?
5. Explain how to issue the **nmap** command in order to save the results of the scan in a file. What is it useful to save results into a file?
6. Define the term **banner-grabbing**. How does this term differ from **fingerprinting**?
7. List and explain two types of utilities (frameworks) that can be used to exploit (gain access) to targetted servers?
8. In your opinion, how can successfully exploiting a targetted server be useful?
9. Try to instinctively guess 3 steps to take in order to help the targeted sever from being exploited.
