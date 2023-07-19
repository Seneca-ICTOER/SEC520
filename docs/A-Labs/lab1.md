---
id: lab1
title: Lab 1
sidebar_position: 1
description: Lab 1 for Students to Complete and Submit
---

# Lab 1

## Setup for Labs

### Introduction

- This lab teaches the student how and why attackers break into systems. For this purpose everyone will be a "victim" in the class as well as a "bad guy". Generally, we try to envision a network server environment.
- Unfortunately, **performing penetration system testing on an organization's network without their consent can lead to serious consequences**. The college has created a lab that allows students to perform penetration testing in a safe environment - it is called the **IFS Lab**. This lab is in heavy demand due to the IFS program, and may not be available for SEC520 students. Another method to encourage the "safe and permitted practice of penetration testing at the college" is to have students host vulnerable operating systems as **virtual machines** on their host computer system (i.e. Hard Disk Packs).
- This lab assumes that you already have the required materials (listed below in the **Required Materials** section), and are ready to perform this lab.

### Objectives

1. Install **Kali Linux (host)** on hard disk pack (or other suitable configuration).
2. Install Virtual Machine application called **VirtualBox** on host OS (Kali Linux).
3. Setup and install a **vulnerable Linux OS as a Virtual Machine** on the host.
4. Setup and install **Windows 2003 Server as a Virtual Machine** on the host.

### Required Materials

- **SATA Hard Disk in removable disk tray** (Note: can use existing Notebook / Netbook with VMware)
- **Kali Linux Installation DVD** (Refer to methods to obtain and burn media in main page).
- **Vulnerable Linux Installation DVD** (Refer to methods to obtain and burn media in main page).
- **Windows 2003 Server Installation CD** (Refer to methods to obtain and burn media in main page).
- **Lab Logbook (Lab1 Reference Sheet)** (to make notes and observations).

### Prerequisites

- **None** (First Lab)

### Online Tools and References

- [Kali Linux Website](http://www.kali.org/)
- [Online Linux Manpages](http://linuxmanpages.com/)
  - [adduser](http://www.unix.com/man-page/Linux/8/adduser/)
  - [visudo](http://linuxmanpages.com/man8/visudo.8.php)
  - [rpm](http://linuxmanpages.com/man8/rpm.8.php)
  - [/sbin/service](http://www.unix.com/man-page/Linux/8/service/)
- [VirtualBox Documentation](http://www.virtualbox.org/wiki/Documentation)
- [Fedora Core 5 Documentation](http://docs.fedoraproject.org/en-US/Fedora_Core/5/html/Release_Notes/)
- [Windows 2003 Server Documentation](http://technet.microsoft.com/en-us/windowsserver/bb512919.aspx)
- [Online MS Windows Command Reference](http://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/ntcmds.mspx?mfr=true)

### Course Notes

- [Required Course Materials](http://zenit.senecac.on.ca/wiki/index.php/SEC520#Course_Resources)

## Performing Lab 1

### Task #1: Install Kali Linux as Host Server on Your Hard Disk Pack (notebook or netbook) and Install VirtualBox

There are many toolkits that are avaible for individuals to help "harden" their computer systems...

Examples include: **Live Hacking CD, Samurai Web Testing Framework, Organizational Systems Wireless Assistant., Ardius, Operator**", etc. There are even distributions for the **Raspberry Pi** (although we need to have a pen testing solution support virtual machines for this course).

TE: Make certain NOT to accept the default computer name. Use a smaller name (like three letters), otherwise, the telnet server package will NOT be installed by default One tookit that contained many of the penetration-testing tools taught in this course was **BackTrack**. BackTrack is a specialized distribution based on Ubuntu. A newer distribution called **Kali Linux** is a newer and more complete build of Linux Backtrack using Debian (i.e. Kali is "BackTrack 6"). There is a noticeable improvement which includes fixes to "broken packages" (less hassle to the student to setup and use), as well as better wireless support, and better flexibility for customization.

**We will be using Kali Linux for this semester...**

**Our Labs Assume Using a Removable Hard Disk**

Although there are several ways to setup your pentration testing system, this lab will assume that you are using a removable hard disk.

Whichever configuration you decide to use, your system MUST allow both the Kali Linux system to be running at the same time as your other vulnerable Windows and Linux operating systems (to conduct penetration testing).

**NOTE: It is recommended NOT to use all disk space for the host machine, since a future assignment may require the installation of other host and VM operating system....**

**INSTRUCTIONS:**

1. **Use your Hard Disk Pack solely for this course: Do not share the contents with this diskpack with any other courses that you are taking.** Remember: this is a course dealing with "Internet Security" which means that you could lose your work if you do something wrong.
2. Obtain the **Kali Linux installation media** (eg. DVD, USB Stick).
3. Insert your Hard Disk Pack and Kali Linux CD into your lab machine.
4. Boot your lab machine, and at the BIOS display, press **F10** (password: **ENTER**) and then select **the CD/DVD drive containing the Kali Linux install media** for boot selection.
5. Select the first **INSTALL** option in the Kali Linux startup menu.
6. Accept the recommended or default selections during the install. Remember to write down any passwords (do not forget them!). You may want to (when prompted) add a non-existent username to the administrator's group that you can add later to have admin access.
7. When you have completed your install, remove the installation media, restart your Kali Linux machine.
8. Make certain that you can connect to the Internet (confirm by using a web-broswer)

**Caution When Running XWindows as Root:** It is usually a "bad idea" to run XWindows as root. Running a graphical environment that has the privileges as root can cause damamge when users become accustomed to working in an everyday environment. It is suggested to create a regular user (same one that you added to group admin).

9. You can use the **Synaptic Package Manager** (graphic tool) or the Linux commands **apt-get** to install other applications that you wish to use in on your system (eg. different web-browser).
10. It is recommended NOT to graphically install VirtualBox on your Kali machine. The lab's author has had success with installing VirtualBox (as a .deb file) from the main website.
11. Download the appropriate VirtualBox .deb file (32/64 bit) from the following link: https://www.virtualbox.org/wiki/Downloads
12. After the file has downloaded, open a Linux shell, go to the directory containing the downloaded file Issue the following command as root:

```bash
gdebi [filename]
```

13. Make appropriate selections to have VirtualBox application installed.
14. Start the VirtualBox application. If the appliation does not appear in any of the menus, simply run the **virtualbox** command in root in a shell terminal.
15. Proceed to Task #2

**Answer the Task #1 observations / questions in your lab log book.**

### Task #2: Install and Setup Vulnerable Linux OS as a Virtual Machine

**Other Vulnerable Linux Distributions:** Although we will be using an outdate version of Fedora Linux, there are other Linux distributions of Linux that are designed with security flaws for penetration testing. An example would be **DVL** (_Damn Vulnerable Linux_). For interest, here is a link to download and install DVL: http://sourceforge.jp/projects/sfnet_virtualhacking/downloads/os/dvl/DVL_1.5_Infectious_Disease.iso/.

**Testing Vulnerable Operating Systems:** Since this course will be exploring security issues with operating systems, weak or "outdated" operating systems are preferred. This seems to run against our nature to update an operating system immediately after an installation. **You are allowed to update your host OS, but do NOT run updates on the vulnerable OS (Virtual Machines)**. You will update (or "harden") those vulnerable operating systems in later labs...

**INSTRUCTIONS:**

1. In your regular account, run a graphical X-Windows session.
2. Obtain and burn in the image of Fedora Core 5 onto a bootable DVD.

    - Here is a link to a downloadable source: http://dl.fedoraproject.org/pub/archive/fedora/linux/core/5/i386/iso/FC-5-i386-DVD.iso
    - ( Refer to [Required Materials](http://zenit.senecac.on.ca/wiki/index.php/SEC520#Supplies_Checklist_.28Required_for_Second_Class.29))

3. Insert the **Vulnerable Linux (FC5)** installation DVD into the DVD Drive.
4. From the **Applications** menu, select **System Tools**, then select **Oracle VM VirtualBox**.
5. Click on the **New** button, and click on **Next** to proceed.
6. Enter a name for the Vulnerable Linux system (we will refer to the name of **Vulnerable Linux System** for the duration of these labs. Make certain that the **OS Type** is **Linux**, and the **Version** is **Linux 2.6**, and then click on **Next** to proceed.
7. Accept the default Base memory size, and click **Next** to proceed.
8. Accept all defaults for the **Virtual Hard Disk** screen, and click **Next** two times to proceed.
9. Accept the default **Storage Type** (i.e. "Dynamically expanding storage"), and proceed to the next screen.
10. In the **Virtual Disk Location and Size**, accept the default name, and set the **Size** of the Partition to **10 GB** and proceed to the final screen.
11. In the **Summary** screen, verify the information, and click **Finish** to finish the VM setup.
12. Double-click on the VM called **Vulnerable Linux** in order to install that version of Linux from the CD drive.

**Auto Capture Keyboard Shortcut Keys:** There are a number of methods to focus the keyboard and mouse on the Virtual Machine (VM) as opposed to the host machine. The user can accept the default key **<right ctrl\>** to act as a capture toggle-switch.

13. Accept the defaults in the **Anaconda installation wizard**, but overide for Eastern Timezone. Select and remember a suitable root password. In the software packages section to include, select **Web Server**. In addition, select the **Customize** (i.e. _Customize Now_, and make the following package selections:

    - **FTP Server**
    - **Mail Server**
    - **Network Servers**
    - **Server Configuration Tools**

**Cannot Connect to Internet When Booting from Other Machines:** Since you are using an older version of Linux (Fedora Core 5) there is an annoying "connectivity issue" if you have booted from different machines (MAC ADDRESSES). Here is a suggested solution:

1. In a shell issue the command **ifconfig** and check if ethX like devices are listed.
2. login as root by issuing the command: **su --** (and enter root password).
3. Issue the command **dhclient**
4. Verify recognized ethernet device by using _ifconfig_ command.

**Installing telnet-server:** It may be difficult to simply install applications from repositories for unsupported Linux distributions (like Fedora Core 5). Instead, perform the following steps:

1. Download the rpm packages for **telnet-server** and **xinted** by clicking on the following links:

    - [Telnet Server Download Page](http://rpm.pbone.net/index.php3/stat/4/idpl/16682910/dir/fedora_5/com/telnet-server-0.17-35.2.1.i386.rpm.html) (select a download mirror)
    - [xinetd Dependency Download Page](http://rpm.pbone.net/index.php3/stat/4/idpl/16683039/dir/fedora_5/com/xinetd-2.3.13-6.2.1.i386.rpm.html) (select a download mirror).

2. Change directory to where files were downloaded.
3. Install the **xinetd** dependency first, then the **telnet-server** program by using **rpm -i <packagename\>** (you can ignore warnings. If you can't install due to public key issues, you can download public keys from the following site: http://dl.fedoraproject.org/pub/archive/fedora/linux/core/5/.
4. Issue the command: **/sbin/chkconfig telnet on** to start the telnet server.

After installing telnet-server, edit the file **/etc/xinetd.d/telnet** and change to "no" for disable. Then you need to reload xinetd by issuing the command: **/sbin/service xinetd reload**

You should become familiar with the `/sbin/service` , `/sbin/chkconfig` , and `/usr/sbin/sestatus` to set services, and to provide information to instructor for lab sign-off.

14. Complete remaining screens to start installation - the installation process should take approximately 30 minutes to complete.
15. After reboot, the **Setup Agent** wizard will allow the user to make selections.
16. Make certain to **DISABLE the Firewall** and **DISABLE SELinux**
17. Create an **unprivileged user (remember the password).**
18. Accept all other defaults and allow the system to reboot for changed to take effect.
19. After reboot, verify that you can login, make the menu selections **System**, **Administration**, **Server Settings**, **Services** (or issue the command **system-config-services** to graphically activate and verify all each of the following services are running:

    - Web (HTTPD) Server
    - FTP (VSFTP) Server
    - Mail Server
    - SSH Server
    - TELNET Server (located under "On Demand" services)

(You can alternatively list service status by issuing the command: **/sbin/service --status-all**)

20. Proceed to Task #3

**Answer Task #2 observations / questions in your lab log book.**

### Task #3: Install and Setup Windows 2003 Server as a Virtual Machine

**DO NOT Install Service Packs (Beyond Service Pack 1) On Windows 2003 Server:** Since this course will be exploring security issues with the Windows operating systems, do not update your Window 2003 Server's OS. We will be exploiting this less-secure OS, then later "harden" this OS from attacks.

**Do Not Accept Default Computer Name (Use smaller name):** Make certain NOT to accept the default computer name. Use a smaller name (like three letters), otherwise, the telnet server package will NOT be installed by default (needs to be less than 15 characters).

**INSTRUCTIONS:**

1. Obtain an installation CD of **Windows 2003 Server** (refer to [Required Materials](http://zenit.senecac.on.ca/wiki/index.php/SEC520#Supplies_Checklist_.28Required_for_Second_Class.29)).
2. Create another Virtual Machine (**20 GB**) to be called **Vulnerable Windows**.
3. Install **Windows Server 2003 (Enterprise Edition)** on an **NTFS** partition. Follow similar selections for settings (such as Eastern Time Zone, administrative password) like you did in Task #2.

    - **!!! NOTE: Make certain NOT to accept the default computer name. Use a smaller name (like three letters), otherwise, the telnet server package will NOT be installed by default**

4. Choose **Application Server** as one of the packages.
5. Complete the other defaults, and allow the system to reboot.
6. Upon boot-up, similate pressing the **<ctrl\><alt\><del\>** keys by selecting in the Virtual Box Window menu: **Machine**, then selecting **Insert Ctrl-Alt-Del** in order to allow the login screen to appear.
7. At the Windows **Server Post-Setup Updates** screen, do **NOT** perform any updates, and proceed with exiting the screen.
8. You will proceed to a **Windows Server Post-Setup Wizard** to help manage your server (like installing services or roles). **Make certain that the following wizard settings (or roles) have been added to your Windows server Virtual Machine** (for later exploitation):

    - **NO Updates / NO Automatic Updates**
    - In the **Manage Your Server** section, make the following selections (add roles):

        + **IIS**

            + **NOTE**: Select **Administration**, **Add Software**, view existing services, select **IIS**, click **Details**, and then select **FTP** server.

        + **SMTP SERVER**
        + **TELNET SERVER**

            + **NOTE**: Select **Administration**, **Services**, scroll down the list to **Telnet**, right-click a select **View Properties**, enable telent server, **Apply** settings, and then **Start** the telent server.

        + **SSH SERVER**

            + **NOTE**: You can download and install **FreeSSH** from the following URL: http://www.freesshd.com/freeSSHd.exe.

**Verification of Running Services**

To verify that services are running, you can select **Start**, **Administration**, **Services**.

**Note**: To view that SSH service is running, select the **On Demand** services tab.

9. Verify that all the above-mentioned services are running.

**Register (Activate) Windows Server / Connectivity Issues**

You have 30 days to register your Windows 2003 Server. If you are experiencing connectivity issues to register your Windows 2003 Server, you can power-off Windows 2003 Server, go to **Virtual Box main window** (for your **Vulnerable Windows** server), select in the menu **Settings**, choose the **Network** tab, and change to **Bridged Connection** for the appropriate network card. When you start your Windows 2003 Server and login as **Administrator**, then you should be able to register your copy of Windows 2003 Server...

10. Make certain that **Firewall is DISABLED.**
11. Proceed to "Completing the Lab".

**Answer Task #3 observations / questions in your lab log book.**

## Completing the Lab

**Arrange evidence for each of these items on your screen, then ask your instructor to review them and sign off on the lab's completion:**

1. Booted Kali Linux (host) with running Vulnerable Linux (VM) and Vulnerable Windows 2003 Server (VM).
2. Proof of following installed servers, applications, or settings on your vulneable Linux System:

    - FTP, SMTP, Web Server, SSH Server, TELNET, NO Firwall is running, SELinux is disabled

3. Proof of following installed servers, applications, or settings on your vulnerable Window 2003 Server:

    - NTFS Partitions, IIS, SSH Server, TELNET, NO Firewall is running

4. Completed Lab 1 notes.

## Preparing for Quizzes

1. Briefly list the steps to setup a computer system to practice penetration testing (for a Linux and Windows machine) on your own (without having to test another organization's computer system and seeking their approval).
2. Write a Linux command to run Xwindows from a text-based console (assuming that Xwindows has been installed).
3. Write a Linux command to display the status of all running or non-running services on the system.
4. Write a Linux command to confirm that the firewall is disabled.
5. List the steps to add the user called **msaul** in the sudoer's file in order to run super-user utilities.
6. Write a Linux command to create an unpriviledged user called **user1**. You can assume that you are currently logged in a regular user, but you have administration priviledges in the **sudoer's file**.
7. List 3 important types of settings to consider when creating a Virtual Machine using a VM application such as VirtualBox.
8. Write a Linux command to change the password of an existing user.
9. Write a Linux command to start the SSH server.
10. Why is it userful to setup a host (with virtual machines) as it relates to penetration testing?
