---
id: lab6
title: Lab 6
sidebar_position: 6
description: Lab 6 for Students to Complete and Submit
---

# Lab 6

## Linux System Hardening (Part 1)

### Introduction

- In this lab, students will learn how to make their Linux servers less vulnerable to attacks (i.e. **hardening** the Linux system). First, students will prevent users from booting into **run level 1 (super-user mode)** by creating a **grub boot password**.
- Students will also identify and **close unneccesary ports** (running services) on their Linux and Windows Virtual Machines in order to make those servers less vulnerable to attacks.
- Students will then **configure SSH** to provide a safe "tunnel" for data to prevent from hacking, and to change the port number to help to confuse (discourage) hackers.
- Finally, students will use **PAM** (Plugable Authentication Modules) to further protect running applications in their VMs.

### Objectives

1. Setup a **grub boot** password to prevent users from gaining access to super-user mode during Linux system bootup.
2. **Close unnecessary running ports** (services) to make server(s) less vulnerable to attack.
3. Use **SSH tunnelling** to protect data from being picked up by hackers.
4. Use **PAM** to provide authentication for APIs (application programming interfaces).

### Required Materials (Bring to All Labs)

- **SATA Hard Disk** (in removable disk tray).
- **Lab Logbook (Lab6 Reference Sheet)** (to make notes and observations).

### Prerequisites

- [SEC520 Lab 5](./lab5.md)

### Online Tools and References

- [netstat](http://www.linuxhowtos.org/Network/netstat.htm)
- [service](http://www.hscripts.com/tutorials/linux-services/index.php) **or** [systemctl](http://www.linux.com/learn/tutorials/527639-managing-services-on-linux-with-systemd) (on newer Linux distributions)
- [PAM](http://www.ibm.com/developerworks/linux/library/l-pam/index.html)
- [Advanced File Permissions](http://www.techcuriosity.com/resources/linux/advanced_file_permissions_in_linux.php)
- [SSH](http://www.cyberciti.biz/tips/howot-install-ubuntu-linux-ssh-server.html)

### Course Notes

- [odp](/slides/sec520_w3_l1.odp) | [pdf](/slides/sec520_w3_l1.pdf) | [ppt](/slides/sec520_w3_l1.ppt) (Slides: Linux Hardening - part 1)
- [Understanding and Configuring PAM](http://www.ibm.com/developerworks/linux/library/l-pam/index.html)

## Performing Lab 6

### Task #1: Locking Down Bootup and Performing System Updates

**Locking Down the Server's BIOS:** The system adminstrator should prevent the server's BIOS from booting from removable drives, and setup a BIOS password to limit access to editing the server's BIOS. Since you are using the college's computers, you are not able to lock down the BIOS, but it is worth mentioning when you are securing computers in the future.

This section will demonstrate how easy it is for a regular users to gain **root** user access to a newly-booted Linux system. As a safe-guard, the student will learn how to set a **grub password** to make the computer system less vulnerable.

**Vulnerabilities During Boot-up: Single User Mode**

Although great attention is paid to securing a Linux system in terms of running services, upgrades, and setting passwords, very little attention can be paid to the boot-up process.

The system administrator should configure the BIOS of their Linux servers to **prevent booting from removeable media**, and assign a **boot password** to limit access to edit the Linux server's BIOS settings.

In addition (by default) the **Grub Boot Loader** allows anyone with access to the computer at boot time to set the **runlevel**, or **change the boot parameters**, which can allow them to influence the ***init*** process and which kernel image is loaded. Anyone with access to the boot prompt can therefore bypass security controls and control which software is loaded. For example, rebooting to **runlevel** (known as **single user mode**), gives the user root priveleges without the need for a password!

**INSTRUCTIONS:**

1. Boot your BrackTrack (host) system.
2. Open the VirtualBox manager window.
3. Prior to running your Vulnerable Linux VM, read the following link on how to enter into **single-user** mode: [How to Enter Single User Mode (Fedora17 - also applies to Fedora Core 5)](http://docs.fedoraproject.org/en-US/Fedora/13/html/Installation_Guide/s1-rescuemode-booting-single.html).
4. Boot the Vulnerable Linux VM, press any key, then press the key **a** to append the word **single** at the end of the boot command.
5. After boot-up is complete, you should notice you are logged in as **root** (you can issue **whoami** to confirm.
6. Navigate throughout the file system. Check the unpriviledged users in the **/home** directory.
7. What are the consequences by NOT locking down the grub password? Record your observations in your lab log-book.
8. Issue the `shutdown -h` or `halt` command to shutdown your Vulnerable Linux VM.

**Installing a More Recent Linux Distribution**

One disadvantage of using **Fedora Core 5** is that this version is very old, and is no longer supported in terms of its software repositories (software, security patches, etc.).

Therefore, we will be creating another Linux VM (called **Hardened Linux** using the Fedora17 install image file that you should have downloaded to your Kali Linux (host) at the end of lab3.

9. Launch the **Oracle VM VirtualBox** application, click on the **New** button, and click on **Next** to proceed.
10. Enter the name **Hardened Linux** for your VM name. Make certain that the OS Type is **Linux**, and the Version is **Fedora**, and then click on **Next** to proceed.
11. Accept the defaults (like you did in lab1, including **768 MB** RAM and set **10GB** for the VM's Hard Disk Size), and eventually click **Finish** to complete the VM setup.
12. Prior to starting your **Hardened Linux** VM, you will setup a **virtual disk** in order to boot from your saved _Fedora17 install image_. Complete the following steps to prepare for installation:

    1. Right-click on the VM called **Hardened Linux** in the VirtualBox application window, and select **Settings**.
    2. Select **Network** and set to **Host-Only** adaptor.
    3. Select **Storage** tab on the left-side of the application window.
    4. Click on **IDE Controller** near the top of the **Storage Tree** window, click on the green plus sign to **add a new CD/DVD drive**. You will be required to specify the location of that Fedora install image (i.e. **Choose Disk**). The installation process should start (you may need to wait and ignore system errors). Make default install selections as you did with the previous Linux installation. When completed, save your settings.
    5. After you have changed your settings, double-click on **Hardened Linux** to start the installation process.
    6. Make the following selections during the installation process:

        + In addition to the defaults, add the **Fedora F17** and **Fedora F17 - Updates** repository.
        + Select **Create a Grub Boot Password** near the end of the installation in the Grub Boot section; Otherwise, accept similar defaults like you did in lab1.

            - **NOTE**: If you were unable to set the Grub password during the installation procedure, then as an option, you may search the Internet for a method to manually set the password after the installation process...

    7. After the installation is complete, shutdown the system, go into **Settings** and remove the virtual CD/DVD drive that links to your **Fedora17 image file**. Boot your **Hardened Linux** VM and try to enter **single-user** mode. Were you successful?
    8. Record your findings in your lab log-book.

13. When booting your Hardened Linux system for the first time, fill out a regular user account, and **add to administrator's group**.
14. Finally, perform an update on your system by issuing:

```bash
yum update
```

**Periodic Updates & Upgrades**

It is important as a system administrator to periodically and consistently **update/upgrade the operating system and applications** to help harden the operating system from vulnerabilities.

It is also important to perform **operating system upgrades** when officially released (stable) editions become available. Failing to perform upgrades to an operating system can eventually make operating systems obsolete and unsupported by the development community. Usually a Linux distribution provides time-lines regarding support (eg. **LTS: Long Term Support**).

15. Record your observations in your lab log-book.
16. Proceed to Task #2.

**Answer the Task #1 observations / questions in your lab log book.**

### Task #2: Closing Unnecessary Ports and Using SSH

In this section, you will either close or prevent unnecessary ports (services) from running and **mask some running services** (such as SSH) in order to make your Linux system less vulnerable.

**INSTRUCTIONS:**

1. Tighten up your Hardened Linux VM to expose the **smallest possible number of services** running on your Linux system.
2. Verify that the minimum number of (essential) services are running on your Linux system.
3. Use the **Nessus** application and **Metasploit** framework to confirm that there are no vulnerable services running on your Hardened Linux VM.
4. Discuss with another classmate which software is not required to be installed. What is the minimum software configuration that will work? Try to list at least 10 applications in your lab log-book.
5. With a classmate, discuss the information visible to users logged in to your system and whether the disclosure of that information presents any real security risk. For example, is it ok for users to view the information in **/proc**? or in **/etc**?
6. Refer to the following link to OPS235 Lab 7 (SSH): [SSH Configuration](https://seneca-ictoer.github.io/OPS235/A-Labs/lab7#investigation-1-installing-and-maintaining-an-ssh-server) (Note: newer versions of Fedora Linux use **systemctl** instead of the **system** command).
7. Configure SSH to run for a different port number.
8. Use SSH to run the **gedit** command command from your Linux VM, but displayed on your host.
9. Have your group members view the open ports on your VM, and see if they can access this running port.
10. How does this technique make your Linux server less vulnerable?
11. Proceed to Task #3.

**Answer the Task #2 observations / questions in your lab log book.**

### Task #3: Using PAM

Fedora uses the Linux **Pluggable Authentication Modules (PAM)** system to perform **authentication (and some related activities, such as account environment initialization)**. As the name suggests, PAM is modular and permits various modules to be plugged in or removed at the system administrator's discretion.

**INSTRUCTIONS:**

1. Ensure that your Hardened Linux VM (i.e. Fedora17) system is running, and log-in as a user with administration priviledges.
2. Open a shell terminal in your Hardened Linux VM, and change to the directory **/etc/pam.d** and review the names of the existing files. What do you think these represent in terms of hardening this system? Record your answer in your lab log-book. Locate the file that contains the PAM configuration for **system-config-network**.
3. Access the **PAM System Administrator's Guide** in a web-browser (file pathname: **/usr/share/doc/pam-1.1.5/html/Linux-PAM_SAG.html**
4. Make a brief list of line options for the **system-config-network** PAM configuration file, and record in your lab log-book.
5. How could you change this PAM configuration file so that a user logged in on the console would not need to enter the root password? (read the manual or perform a NetSearch to get the answer). Record your answer in your lab log-book.

**Pam ABL:** **Pam ABL stands** for **Pam Auto Blacklist Module**. This module allows for the blacklisting of hosts (users) that repeatedly attempt to connect / authenticate with your server.

6. Install the **pam_abl** package by issuing the following command:

```bash
yum install pam_abl
```

7. Research on the Internet how to edit the pam_abl configuration file. Documentation for pam_abl (web-browser) is available by using the file pathname: **/usr/share/doc/pam_abl-0.2.3/pam_abl.html**
8. Configure the file **/etc/security/pam_abl.conf** to use the **pam_time** module to permit remote ssh access only during the daytime.
9. Configure your system **to deny access for 1 day** to any user or host who has **5** invalid password attempts in an hour, or **12** invalid password attempts in a day using the **pam_abl** module.
10. Create a group named **development**.
11. Create the directory **/var/devel1** and **/var/devel2** and make them accessible to all users. Set the SGID permission bit on **/var/devel2** and make that directory owned by the group called _development_.

    - Here is a link to setting SGID permissions: [Advanced File Permissions](http://www.techcuriosity.com/resources/linux/advanced_file_permissions_in_linux.php)

12. Create **three regular users**. Ensure that two users are in the _development_ group and that the third user is not.
13. Have each user create a file in **/var/devel1** and **/var/devel2**.
14. Record the user and group permission for each file.
15. Attempt to access each of the six files using each user's account by reading and then appending (two separate operations). What succeeds and what fails? Why?
16. What would the development users have to do to make their files in **/var/devel1** accessible to each other?
17. Why is Fedora set up so that each user has their own group and the default umask is **0002**?
18. Record your findings in your lab log-book.
19. Proceed to "Completing The Lab".

**Answer Task #3 observations / questions in your lab log book.**

## Completing the Lab

**Arrange evidence for each of these items on your screen, then ask your instructor to review them and sign off on the lab's completion:**

1. All unneccessary services **turned-off**.
2. SSH run on a **different port**.
3. Proof of **PAM** used to control access to directories.
4. Completed Lab 6 notes.

## Preparing for Quizzes

1. Briefly explain how to access the root account (in run-level 1) from an unprotected Linux system upon boot-up.
2. List the steps to setup a **grub password** to protect a Linux system upon boot-up.
3. Explain the consequences of running unneccesary services on a server.
4. List the steps to stop a running service, and describe 2 unique methods of confirming that a service is no longer running on the server?
5. What is the purpose of using SSH for tunnelling while using a different port number?
6. What does **PAM** stand for? What is the purpose of the _PAM_ modules?
7. What is the purpose of the **pam_abl** modules?
