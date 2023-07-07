---
id: lab5
title: Lab 5
sidebar_position: 5
description: Lab 5 for Students to Complete and Submit
---

# Lab 5

## Hardening Windows

### Introduction

In the previous two labs, you should have learned how to penetrate your vulnerable Windows 2003 server using a variety of vulnerability testing strategies. In this lab, students will learn how to make their Windows servers less vulnerable to these types of attacks (i.e. **hardening** the Windows 2003 server):

- Students will learn to setup **Account & Auditing Policies** (including the shutting-down of unnecessary services). This is performed an application called the **Security Configuration Wizard (SCW)**.
- Students will then learn to **limit the roles and priviledges of regular and administrative accounts**, and set up a method of **logging to help monitor any suspicious activity**.
- Students will learn to setup and implement **NTFS** to provide addition security for files (similar to using _ACLs_ when you hardened your Linux system).
- Finally, students will learn to **apply sofware upgrades (patches)** to make their Windows server less vulnerable, and to automate the process of software updates.

### Objectives

1. Setup and maintain **User Account and Auditing (logging) Policies** (including shutting down any unnecessary services).
2. Implement **NTFS** to provide additional security access to files
3. **Monitor system logs** for any suspicious activity (intrusion)
4. **Apply and automate software updates** (patches)

### Required Materials (Bring to All Labs)

- **SATA Hard Disk** (in removable disk tray).
- **Lab Logbook (Lab4 Reference Sheet)** (to make notes and observations).

### Prerequisites

- [SEC520 Lab 4](./lab4.md)

### Online Tools and References

- [Security Configuration Wizard (Service Pack 1 - Windows 2003 Server)](http://techgenix.com/security-configuration-wizard-windows-server-2003-sp1/)
- [NTFS (Setting up Share Permissions)](http://techgenix.com/Understanding-Windows-NTFS-Permissions/)
- [Automating Updates - Windows 2003 Server](http://support.microsoft.com/kb/327838)
- [Intrusion Discovery (Windows)](https://www.sans.org/media/score/checklists/ID-Windows.pdf)

### Course Notes

- [odp](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w8_l1.odp) | [pdf](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w8_l1.pdf) | [ppt](http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w8_l1.ppt) (Slides: Hardening Windows 2003 Server)
- [Hardening Windows Second Edition (E-book)](http://lcweb.senecac.on.ca:2052/assetviewer.aspx?bookid=12602&chunkid=978290911&rowid=177) (Chapter 5)
- YouTube Video: [Security Configuration Wizard 2003](http://www.youtube.com/watch?v=df1_yx2fa8g)

## Performing Lab 5

### Task #1: Setting Account & Auditing Policies (Security Configuration Wizard)

The Security Configuration Wizard (**SCW**) is a tool to allow the adminstrator to control or "lock down" your Windows 2003 server in terms of:

- Which services can be turned on and off
- Which users have access to running services
- Service policies

In this section, you will learn to install, configure and implement security policies using **SCW**.

**Locking Down the Server's BIOS:** The system adminstrator should prevent the server's BIOS from bootin from removable drives, and setup a BIOS password to limit access to editing the server's BIOS. Since you are using the college's computers, you are not able to lock down the BIOS, but it is worth mentioning when you are securing computers in the future.

**INSTRUCTIONS:**

**Service Pack 1 Required**

In order to install, setup and configure the Security Configuration Wizard, you need to install Service Pack 1 on your Windows 2003 server before proceeding with this section.

In order to **install Service Pack 1**, you need to download and install. Here is a link to obtain Service Pack 1: http://technet.microsoft.com/en-us/windowsserver/bb463273.aspx

1. Boot up your Kali Linux (host), and boot up your Windows 2003 server.
2. Log in as **administrator**.
3. Make certain that you installed **Service Pack 1** before proceeding (refer to "_Service Pack 1 Required_" above).
4. In order to install **SCW**, select **Control Panel** , double click **Add/Remove Programs** , select **Security Configuration Wizard** checkbox, click **Next**, and click **Finish**.
5. Launch the **SCW** application, click **Next**.
6. At the **Configuration Action** dialog box, select **Create a new security policy** and then click **Next**.
7. The **Select Server** dialog box should appear. select **current server** and click **Next**
8. It may a few minutes for **SCW** to process the default settings.

    - Click **View Configuration** and then click **Next** in order to view the _various roles_, _running applications_ and _open ports_ on your current server.

**Security Policy Template:** **SCW** allows security settings to be saved in a file, that can be used to import into other newly-installed or exising Window 2003 servers in order to save time...

9. Click **Next** to go to the **Select Client Features** dialog box. This allows the administrator to run various client services on the server.
10. Click **Next** to go tot he **Select Administration and Other Options** dialog box. This section allows the adminstrator to enable special (usually remote) services (ports).
11. Click **Next** to access the **Select Additional Services** dialog box. This allows the administrator to detect running services and display other services that are not enabled, but are available.
12. Click **Next** to proceed to the last (verification) dialog box, and click **Next** to proceed with setting the various parts of your current server's security policy.

**Security Policy Elements**

Security policies in **SCW** consists of several categories:

- **Network Security** (port and application settings
- **Registry** (communication protocols between machines)
- **Audit Policy** (logging user and system events)

13. In the **Network Security** section, make selections to tighten up your system to expose the smallest possible number of services running on your Windows Server (as you did in lab 4: _System Hardening Linux - Part 1_).
14. In the **Registry Settings** section, make selections for **encryption type** relating to what was taught in class (slides). You can also setup **LDAP** to require users on remote machines to provide authentication when logging in.
15. In the **Audit Policy** section, set the policy to **complete auditing**.
16. Proceed to the summary dialog box to confirm settings, and also save your security policy using the name **lab8_security_policy**
17. Proceed to Task #2

**Answer the Task #1 observations / questions in your lab log book.**

### Task #2: Implementing New Technology File System (NTFS)

**NTFS** is a newer file system developped for Windows operating systems that provide improved disk space utilization, file system journaling, as well as security. This newer file system technology incorporates **Access Control Lists (ACLs)** which you have learned and configured in _lab #5_: _Linux Hardening - Part 2_.

In this section, we will learn how to use ACLs to "finely-tune" group access to directories and files, and differentiate between setting permissions via ACL and setting permissions .

**INSTRUCTIONS:**

1. Read the tutorial on how to use ACLs with Windows NTFS Permissions at the following link: [Understanding Windows NTFS Permissions](http://www.windowsecurity.com/articles/understanding-windows-ntfs-permissions.html)
2. Perform the following steps (as in Lab #5, but using Windows NTFS Permissions):

      1. Create the following directory: **c:\share**
      2. Set passthrough permissions, and set permissions for the share directory to allow students to access and list contents for this directory.
      3. Use the groupadd command to create a new group name called **project**
      4. Create a file in the share directory called **project.txt**
      5. Set permissions for same group members to view and modify contents of the file **C:\share\project.txt**
      6. Create two user accounts called: **user1** and **user2** (Use the **useradd** command with an option to create a home directory and to belong to group: **project**.
      7. Switch to **user1**, and confirm that they can access and modify the file: **C:\share\project.txt**
      8. Repeat the above step for **user2**.
      9. Why can't you allow **user1** to read and modify the project.txt file, but only allow **user2** to only read the project.txt file? Answer in your lab log-book.

3. Proceed to Task #3.

**Answer Task #2 observations / questions in your lab log book.**

### Task #3: Monitoring Logs & Activity / Tripwire for Windows

In this section, we will be using similar techniques to monitor suspicious activity in your Windows 2003 server as you did in **lab7** (for your Linux server). The tools in Windows will be a combination of Graphical and command-line.

**INSTRUCTIONS:**

1. In your hardened Windows server, open the command prompt.
2. Run the **Event Manger** graphical tool by issing the following MS command:

```bash
   eventvwr.msc
```

   - Check the logs for the following activity:

        + Event logging stopped
        + Windows File Permission not active
        + Telnet Service started successfully (this service is vulnerable)
        + Significant number of unsuccessful login attempts

3. Run the following graphical and command-line tools, in order to view and identify all of the services running on your Windows 2003 server (both normal and suspicious):

```bash
   taskmgr.exe

   services.msc

   tasklist /svc
```

   - As with the previous Linux hardenening lab, determine which services are vulnerable, and shut-down vulnerable or unnecessary services. Which services did you shut down? Record your answer in your lab log-book.

4. Perform a **Search for Files or Folders** that are over 10000KB in size (i.e. use the **search options** before starting search). Did you locate any files of this size? What do you think files greater than 10000KB would indicate? Record your answers in your log lab-book.
5. View your Windows registry file to detect any suspicious or strange programs by issuing the following command:

```bash
   regedit
```

   - For interest, perform a _netsearch_ for a listing of common programs (contained in the registry) that could pose a hazard to your Windows system.

6. Next, issue the following MS commands in order to detect unusual network activity:

```bash
   net view

   net session

   net user

   netstat -na
```

7. Run the following Windows commands to observe any unusual scheduled tasks:

```bash
   schtasks

   msconfig.exe
```

8. Finally, run the following Windows command to detect any unusual (recentrly added) user accounts to the Windows system:

```bash
  lusrmgr.msc 
```

**Tripwire Alternative for Windows?**

As a matter of interest, there is an alternative IDS for MS Windows (amoung other platforms). The name of the application is called **OSSEC** which is a scalable, multi-platform, and open source (free).

Here is a link to this application: https://ossec.github.io/

9. Take a moment to note general similarities and difference between hardening your Windows server (as opposed to your Linux server). Record your observations in your lab log-book.
10. Proceed to Task #4.

**Answer Task #3 observations / questions in your lab log book.**

### Task #4: Apply / Automate Software Updates

**INSTRUCTIONS:**

1. Read the tutorial on how to setup automatic updates in Windows 2003 server at the following link: [How to Schedule Automatic Updates in Windows Server 2003](http://support.microsoft.com/kb/327838)
2. Using the above tutorial, setup your Windows 2003 server to automatically update the server.
3. Try the same process in Lab 3 to try to penetrate your Windows 2003 server. Where you successful? Record your findings in your lab lab-book.
4. Besides making system updates automatic, what other steps could a system administrator take in order to protect their system from newer network attacks? Record your answer in your lab log-book.
5. Proceed to "Completing The Lab".

**Answer Task #4 observations / questions in your lab log book.**

## Completing the Lab

**Arrange evidence for each of these items on your screen, then ask your instructor to review them and sign off on the lab's completion:**

1. Contents of security policy file called: **lab8_security_policy.**
2. Compare ACLs by demonstrating running services via **user1** and **user2**.
3. **Automatic Updates** enabled.
4. Results of **hardened Windows 2003** second attempt at penetration testing.
5. Completed Lab 5 notes.

## Preparing for Quizzes

1. What is the purpose of a **security policy** as it related to a Windows server?
2. What is required from a new Windows 2003 Server install in order to install and configure **SCW**?
3. List and breifly explain the elements of a security policy using the **SCW**.
4. List 4 features of **NTFS**.
5. Why is it advantageous to set automatic updates for your Windows 2003 server as it relates to network security?
