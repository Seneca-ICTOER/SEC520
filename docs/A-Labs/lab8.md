---
id: lab8
title: Lab 8
sidebar_position: 8
description: Lab 8 for Students to Complete and Submit
---

# Lab 8

## Intrusion Detection

### Introduction

- Students will learn how to routinely check a computer system's performance (one of the side-effects of system intrusion). Students will specifically check log files in order to detect intrusion activity.
- Students will also configure the **syslog** file in Linux in inform the system administrator of any suspected intrusions that have occurred in thier computer system.
- Students will also learn how to automate the tasks to intrusion detection by installing, configuring and running a common Intruction Detection System (IDS) called **Tripwire** in order to flag and report suspected computer system intrusions.

### Objectives

1. Check the **computer's performance** for indications of computer system intrusion activity.
2. **Monitor log files** (in Linux) to detect any suspected system intrusions.
3. Configure the **Syslog File** (in Linux) to notify the adminstrator of any suspected system intrusions.
4. Install, configure and run the **Tripwire** open-source application to automatically flag and report suspected system instructions.

### Required Materials (Bring to All Labs)

- **SATA Hard Disk** (in removable disk tray).
- **Lab Logbook (Lab8 Reference Sheet)** (to make notes and observations).

### Prerequisites

- [SEC520 Lab 7](./lab7.md)

### Online Tools and References

- [Intrusion Discovery (Linux)](https://www.sans.org/media/score/checklists/ID-Linux.pdf)
- [Using Syslog Files (Linux)](http://help.ubuntu.com/community/LinuxLogFiles)
- [Tripwire Definition](http://en.wikipedia.org/wiki/Open_Source_Tripwire)
- [Download Tripwire](http://sourceforge.net/projects/tripwire/)
- [Using Tripwire](http://www.thegeekstuff.com/2008/12/tripwire-tutorial-linux-host-based-intrusion-detection-system/)

### Course Notes

- [odp](/slides/sec520_w9_l1.odp) | [pdf](/slides/sec520_w9_l1.pdf) | [ppt](/slides/sec520_w9_l1.ppt) (Slides: Intrusion Detection)

## Performing Lab 8

### Task #1: Checking System Performance

Usually system administrators continually monitor thier computer systems to check for reductions in system performance. These "monitoring checks" can be **benchmark programs** (or operating system commands) to identify system performance. Reduced system performance may be an indicator of an intrusion by a malicious hacker.

In this lab, we will issue several Linux commands to help monitor to monitor a Linux system's performance.

**Use your Hardened Linux VM for this Lab:** You are to use your hardened Linux VM for the duration of this lab.

**INSTRUCTIONS:**

1. Start your Kali Linux (host) system, and start your Hardended Linux VM.
2. Switch to your Hardened Linux VM, and open a shell terminal.
3. Issue the Linux command: **uptime**. Record the value for the **load average** of your Linux system. Research on the Internet to determine what _load average_ for a Linux system means and what a higher _load average_ may indicate. Record your findings in your lab log-book.
4. Issue the Linux command: `df -h` and view the remaining amount of disk space. For detailed information regarding particular file sizes within a directory, you can use the `du -h` command. What directories may indicate a higher size to indicate hacking, worm or a virus on your Linux system? Recording your findings in your lab log-book.
5. How would you monitor the same measurements of system performance for a Windows system?
6. Proceed to Task #2

**Answer the Task #1 observations / questions in your lab log book.**

### Task #2: Checking Unusual Activity

Checking for unusual activity in a Linux system focuses of several key indicators:

- _Unusual Running Processes_
- _Unusual Network Usage_
- _Unusual User Accounts_
- _Unusual Large Files_
- _Unusual Log Entries_

In the next 2 sections, we will learn how to monitor these indicators to help identify Linux system intrusion. In this section, use **man pages** or perform _research on the Internet_ in order to understand how the following Linux commands can be used to detect system intrusion (or "suspicious activity").

**INSTRUCTIONS:**

1. Issue the Linux command:

```bash
chkconfig --list
```

   - (or _systemctl list-units --all_ on newer systems). List all the running services in your lab log-book.

2. Issue the Linux commands:

```bash
   ps aux | more

   lsof | more

   lsof -p PID 
```

   - How does the information from this listing differ from the previous Linux command that you issued?
   - What sort of services/processes might indicate a problem?

3. Issue the following Linux commands:

```bash
   netstat -nap

   lsof -i  

   arp -a
```

   - What sort of network usage would indicate an intrusion problem?

4. Issue the following Linux commands:

```bash
   sort -nk3 -t: /etc/passwd | more

   egrep ':0+:' /etc/passwd
```

   - What is the purpose of these commands, and how would you check the results for intrusion?

5. Next, look for unusual files by using the following Linux commands:

```bash
   find / -size +10000k -print

   ls -a .*

   lsof +L1

   rpm -Va | sort
```

   - Write these commands in your lab log-book and give a brief purpose of how they can be used to interpret system intrusion.

6. Proceed to Task #3

**Answer the Task #2 observations / questions in your lab log book.**

### Task #3: Checking System Logs & Using Syslog File

In this section, you will learn how to configure the **Syslog File** in Linux in order to detect and report suspected intrusion actions on your computer system.

**INSTRUCTIONS:**

1. Read the article on Linux Log Files: [Linux Log Files](https://help.ubuntu.com/community/LinuxLogFiles)
2. In your hardened Linux server, experiment with each of the log files mentioned in the article above (including configuration files). Note that your system may not have the same services installed, so some of the files may not be there.
3. Read the **man pages** for **syslogd** and **syslog.conf**. Learn what types of activities generate various types of system messages.
4. What line would you put in **syslog.conf** to send all security messages to the console? How would you send them directly to the printer?
5. What would the following line achieve?

```bash
kern.none /var/log/messages
```

6. What does the following line do?

```bash
*.emerg *
```

7. How would you send all access control messages directly to the root user?
8. Read your **syslog.conf** file. Make sure you understand what each line means.
9. Using research and experimentation, configure your **syslogd** so that any reboots are logged on your lab mate's **/var/log/messages** log file. Demonstrate that this works by rebooting your system.
10. Record all of your observations/answers in your lab log-book.
11. Proceed to Task #4

**Answer the Task #3 observations / questions in your lab log book.**

### Task #4: IDS Example: Tripwire

In this section, students will learn how to install, configure and run a commonly-used open source application called **Tripwire** that will automatically detect system intrusion. Tripwire is used to create an initial database of information on all the system files then runs periodically (via **cron**) in order to compare the system to the database. This allows the IT security manager to "***manage by exception***", and allow them to concentrate on providing a balanced and effective method of system security.

**INSTRUCTIONS:**

**About Tripwire:** Tripwire is an optional package during install. Tripwire for earlier releases is available from the RedHat/Fedora Powertools CD in RPM format. Upon installation, it will proceed to scan your entire filesystem to create a default database of what your system looks like. (files and sizes etc) It might take as long as ten minutes to initially scan...

1. We will be installing tripwire on your hardened Linux server.
2. While in your hardened Linux server, open a shell terminal, and issue the command `which tripwire` to check to see if the application has been installed. If the application is not installed, then issue the following command:

```bash
sudo yum install tripwire
```

3. Alternatively, you can download and install tripwire at the following link: http://sourceforge.net/projects/tripwire/
4. Based on instructions in the **README.Fedora** file (located in **/usr/share/docs/tripwire-2.4.2.2** directory)

    - You are required to issue the following commands to initialize and run the tripwire application (using default settings):
   
```bash
   /usr/sbin/tripwire-setup-keyfiles # Generate the system-specific
                                     # cryptographic key files
                                     # Remember your password phrase

   /usr/sbin/tripwire --init         # Initialize the Tripwire
                                     # database file. Note: this process
                                     # may take several minutes to perform

   /usr/sbin/tripwire --check        # Run the first integrity check
                                            # May take several minutes
```

4. There were some errors when initializing the tripwire database. Why do you think these errors occurred?

**Tripwire Configuration Files**

Configuration file pathnames for Tripwire should be:

- **/etc/tripwire/twcfg.txt**
- **/etc/tripwire/twpol.txt**

These files are first edited and then processed by issueing the command:

```bash
tripwire --update-policy POLICY-TEXT-FILENAME
```

In order to have tripwire report any violations:

  1. Edit the file /etc/tripwire/twpol.txt and comment out the lines where it says files not found
  2. Issue the command:

```bash
/usr/sbin/tripwire --update-policy --secure-mode low /etc/tripwire/twpol.txt
```

5. Create a cronjob to be run on a daily basis that will run the **tripwire --check"** as **root**
6. Record your findings in your lab log-book.
7. Proceed to "Completing the Lab"

**Answer Task #4 observations / questions in your lab log book.**

## Completing the Lab

**Arrange evidence for each of these items on your screen, then ask your instructor to review them and sign off on the lab's completion:**

1. Results of `uptime` and `df` commands.
2. Display information regarding Linux system's **Process**, **network usage** and any **unusual user accounts**.
3. Run Linux command to display files over **10000 Kilobytes**.
4. Contents of **syslog.conf** file.
5. **Cron job** (root) running `tripwire --check` command.
6. Completed Lab 8 notes.

## Preparing for Quizzes

1. Write 2 Linux command to help measure Linux system performance.
2. List and explain 5 types of **unusual activities (indicators)** that could affect system performance from a system intrusion. For each indicator, write a Linux command used to help detect the unusual activity due to system intrusion.
3. List 4 types of logs to view to detect **unusual activity associated with system intrusion.**
4. Briefly list the steps to setup **syslog** on your Linux server.
5. Define the term **IDS**.
6. Write the Linux command to generate a **Tripwire report**.
