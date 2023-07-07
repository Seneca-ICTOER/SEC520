---
id: lab7
title: Lab 7
sidebar_position: 7
description: Lab 7 for Students to Complete and Submit
---

# Lab 7

## Linux System Hardening (part 2)

### Introduction

- In the previous lab, we learned how to make our Linux server less vulnerable by setting a grub password, preventing unneccessary services from running, tunnelling with SSH, and using PAM modules for setting authentication rules when running user applications. Although this is useful, vulnerability can exist when running the few essential services.
- In this lab, students will be learning about "Authorization" within the **AAA** Protocol, to limit the resources or applications that the system users are permitted to access. First, students will use **ACLs** (Access Control Lists) to further define authorization to groups of users within the organization.
- Students will then learn how to install, configure and run **SELinux** which provides limitations of which users are entitled to run processes within the server. Students will then learn how to limit regular or "elevated" user access to regular programs or utilities (administrative) by editing the **Sudoer's file**.
- Finally, students will complete the "lock down" of the computer system by learning how to limit the running of scheduled processes (**cron jobs**), perform software upgrades, and to turn-off X-windows on a Linux server.

### Objectives

1. Limit user access to files within defined groups using **Access Control Lists**.
2. Install, configure, and run **SELinux** which is used to enforce entitled users access to running processes.
3. Configure the **sudoer's file** in order to allow other users access to linux commands that are only considered for administrators.
4. Control which user(s) can run **cron jobs** in order to run commands or programs on a scheduled basis.

### Required Materials (Bring to All Labs)

- **SATA Hard Disk** (in removable disk tray).
- **Lab Logbook (Lab5 Reference Sheet)** (to make notes and observations).

### Prerequisites

- [SEC520 Lab 6](./lab6.md)

### Online Tools and References

- [ACLs](http://www.yolinux.com/TUTORIALS/LinuxTutorialManagingGroups.html#ACL)
- [SELinux](http://hackinglinux.blogspot.ca/2007/05/selinux-tutorial.html)
- [Cron Jobs](http://cs.senecac.on.ca/~fac/ops435/2008_dev/ops435_w11_l1.pdf)

### Course Notes

- [odp](/slides/sec520_w4_l1.odp) | [pdf](/slides/sec520_w4_l1.pdf) | [ppt](/slides/sec520_w4_l1.ppt) (Slides: Linux System Hardening - part 2)

## Performing Lab 7

### Task #1: ACLs

In this section, students will learn how to use **ACLs** (Access Control Lists) to "finely-tune" group access to directories and files, and differentiate between setting permissions via ACL and setting permissions using the chmod command.

**INSTRUCTIONS:**

1. Boot-up your Kali Linux (host) and your **Hardened Linux VM** on your hard disk pack.
2. Log into your user account that has administrative priviledges (this should have been performed during installation process in lab4).
3. Open a shell terminal, and create the following directory: **~/share**
4. Set passthrough permissions for your home directory, and set permissions to allow same group members access and view the contents of the **share** directory. Use the `ls -ld` command to confirm the set permissions for these directories.
5. Use the **groupadd** command to create a new group name called **project**
6. Use the **usermod** command to add the three users (created in lab4) to the group called **project**. View the contents of the **/etc/group** file to confirm that the users have been added to the _project_ group.
7. Use the **touch** command to create an empty file in the share directory called **~/share/project.txt**
8. Use the **chgrp** command to have the file **project.txt** belong to the **project** group. Use the `ls -l` command to confirm that the _project.txt_ file now belongs to the _project_ group.
9. Set permissions for same group members to view and modify contents of the file **~/share/project.txt** and confirm that the permissions have been correctly set for that file.
10. Switch (i.e. su) to one of the users (added to the _project_ group), and confirm that they can access and modify the file: **~/share/project.txt**
11. Repeat the above step for the second user (belonging to the project group).
12. Why can you allow the first user to both read and modify the project.txt file, but you can't only allow the second user to only read the project.txt file without editing permissions? Answer in your lab log-book.

**ACL Package:** An **ACL** or **Access Control List** is a system that sets permissions to specific objects, as oppposed to general directories and files. This allows more flexibility when granting read, read & write permissions for different users for the same file or directory.

13. Switch (su) back to your administration account.
14. Issue the following command: `rpm -qi acl` to confirm that the **acl** application has been installed in your system. If it is not present, make certain to install that application.
15. In order to use **ACLs**, you need to edit the **/etc/fstab** file to mount all disk filesystems with the **acl option** (Refer to the following link for an example: [Mounting With ACL Option](http://www.yolinux.com/TUTORIALS/LinuxTutorialManagingGroups.html#ACL)).
16. Issue the command:

```bash
mount -o remount /
```

   - In order to remount your file system (as opposed to rebooting).

**Missing acl option in listed Mounts:** Usually, it is a good idea to confirm that the **acl** option is present from the remount by viewing either the **/etc/fstab** or **/etc/mtab** files. If you are using Fedora17, it may not appear, although it is active. This may be attributed to a bug...

17. View the Youtube video (or other online resources) on how to use ACLs: [Video](http://www.youtube.com/watch?v=6piQXXHTmqk)
18. Set same group members for group name **project** to only view the contents of the file **~/share/project.txt**
19. Use the **setfacl** command to allow only one of the users to both view and modify the file **~/share/project.txt**

    - For example, if the username is **user1**, then issue the command:

```bash
setfacl -m u:user1:rw share/project.txt
```

20. Use the **getfacl** to confirm the permissions for the file: **~/share/project.txt**
21. Switch (su) to your account that you used the **setfacl** command to provide read/write permissions. Can you make editing changes to _project.txt_?
22. Now switch (su) to another account. Can you make editing changes to _project.txt_? Why?.
23. Record your results in your lab log-book.
24. Proceed to Task #2

**Answer the Task #1 observations / questions in your lab log book.**

### Task #2: SELinux

**INSTRUCTIONS:**

**SELinux Package:** Confirm that the **SELinux** package is installed on your Linux VM.

1. Familiarize yourself with the system-config-securitylevel tool (SELinux tab) and these SELinux commands (and SELinux-modified commands):

    - getenforce, setenforce
    - getsebool, setsebool
    - chcon
    - restorecon
    - ls -Z, ps -Z, id
    - gnome-system-monitor
    - system-config-securitylevel

2. Ensure that your SELinux system is in **enforcing** mode.
3. Configure Apache to permit the use of **$HOME/public_html** directories by editing the **httpd.conf** file:

    - Comment out the **UserDir Disable** directive.
    - Uncomment the **UserDir public_html** directive.
    - Uncomment the directory container for **/home/\*/public_html** and configure it permit the execution of CGI scripts.
    - Uncomment the directive **add_handler cgi-script .cgi**

4. Restart Apache. Do not use apachectl -- use the **service** command.
5. Create **~/public_html/index.html**
6. Attempt to access the content you created in step 5 using a browser. It should fail.
7. Review the latest avc messages in **/var/log/messages** and compare them to the Apache error log. Record your finding in your lab log-book.
8. Put SELinux in **Permissive** mode.
9. Attempt to access the content you created in step 5 using a browser. It should succeed. (If not, your **httpd.conf** file or permissions are incorrect - fix them).
10. Put SELinux back into **Enforcing** mode.
11. Using the man page for **httpd_selinux**, determine what is required to make **~/public_html/index.html** accessible while SELinux is in Enforcing mode. Test it and make sure it works.
12. Create the following Bash shell script (called **test.bash**):

```bash
#!/bin/bash
echo "Content-type: text/plain"
echo
cal -y
```

13. Test your script through a web browser.
14. Create the following testing CGI script (called **test.cgi**):

```bash
#!/bin/bash

echo "Content-type: text/plain"
echo
echo "Attempting to show the contents of ~/.bash_profile:"
cat ~/.bash_profile
if [ $? -eq 0 ]
		then
		echo "Success."
		else
		echo "Failure."
fi
```

15. Run this script via the web browser in both **Permissive** and **Enforcing** modes. Observe the difference in output. What is the reason for the difference?
16. Record your findings in your lab log-book.
17. Proceed to Task #3

**Answer Task #2 observations / questions in your lab log book.**

### Task #3: Sudo

_"Sudo (switchuser/superuser do) allows a system administrator to give certain users (or groups of users) the ability to run some (or all) commands as root while logging all commands and arguments. Sudo operates on a per-command basis, it is not a replacement for the shell."_

**INSTRUCTIONS:**

1. READ the man page on **sudo** and **visudo**. Most modern versions of Linux have sudo default installed.
2. Open sudoers using **visudo**.
3. We will be **setting up logging information** as well as allowing the **third user to issue certain administrative commands**. With the setup below, this lab is making reference to username: **user3** (replace this with the actual username of the third user). Make the following changes to the **sudoer's file**, adding information that appears in **bold**:

```bash
# sudoers file. 
		# 
		# This file MUST be edited with the 'visudo' command as root. 
		# 
		# See the sudoers man page for the details on how to write a sudoers file. 
		# 
		
		# Host alias specification
		Host_Alias MYHOST=localhost
		# User alias specification
		
		User_Alias USER3=user3
			# Cmnd alias specification
		Cmnd_Alias NETWORK=/sbin/ifconfig
		
		Note: you NEED the ABSOLUTE path to the command you put in there.
		
		# User privilege specification
		root    ALL=(ALL) ALL
		user3   ALL=NETWORK
		
		# Defaults Specification
		Defaults   syslog=local1
```	

**Watch Syntax in Sudoers File:** The sudoers file should always be edited by the visudo command which locks the file and does grammatical checking. It is imperative that sudoers be free of syntax errors since sudo will not run with a syntactically incorrect sudoers file

4. Save and exit the visudo editing session. Check and return to editing session if any errors are created.
5. Edit the file **/etc/rsyslog.conf** and add the following line to the bottom of this file (for logging purposes):

```bash
	local1.*    /var/adm/sudo.log
```

6. Save your editing changes.
7. Switch (su) as the third user (eg. in our demonstration: **user3**).
8. Experiment with the sudo capabilities assigned to the third user by issuing the command: `sudo /sbin/ifconfig eth0` (You'll have to supply the user password). For the purpose of this lab, the command does not have to work - don't worry about error messages.
9. Return to the administrator account.
10. Check the **/var/adm/sudo.log** file. What does it show ?

**No Entries in /var/adm/sudo.log File** If you do not see any entries in the **/var/adm/sudo.log** file, then shutdown, and then restart your Hardened Linux VM, and repeat **steps 7 to 10**.

11. Switch (su) to a different user (other than your third user), and try to issue the command:

```bash
sudo /sbin/ifconfig eth0
```

   - What happenned?

12. Switch (su) to the administrator's account, and view the contents of **/var/adm/sudo.log**. What do you notice?
13. Edit the sudoers file and add the following line (where hostname is your VM machine):

```bash
USER3 localhost.localdomain= NOPASSWD: /bin/kill, PASSWD: /bin/ls, /usr/bin/lprm
```

14. While in edit mode, add **USER1** as an alias for user1, and add the **kill** command to the **Cmnd_Aliases** line for **user1**. Each line should appear similar to this:

```bash
      User_Alias USER1=user1
	USER1 localhost.localdomain= PASSWD: /bin/kill
```

15. Save changes to the sudoer's file and exit.
16. Switch (su) as the third user and attempt to kill a process. Where you prompted to enter a password? Then switch (su) as the first user (eg. **user1**) and attempt to kill another process. Where you prompted to enter a password?
17. Switch (su) to the third user, and execute the following command:

```bash
sudo -l
```

   - What did this command do?

**Vulnerability with Sudo (vi)**

There is no easy way to prevent a user from gaining a root shell if that user has access to commands allowing shell escapes. If users have sudo **ALL**, there is nothing to prevent them from creating their own program that gives them a root shell regardless of any '!' elements in the user specification.

Running shell scripts via sudo can expose the same kernel bugs that make setuid shell scripts unsafe on some operating systems (if your OS supports the **/dev/fd** directory, setuid shell scripts are generally safe). (From sudo man page)

18. Grant **vi** privileges to the third user. Switch (su) as the third user and issue the command:

```bash
sudo vi
```

   - Press : to go to the **last line mode** in your vi text editor, and issue the command:

```bash
!id
```

19. What was the id of the third user and what what sort of implications does this create in terms of system security?
20. Record your findings in your lab log-book.
21. Proceed to Task #4.

**Answer Task #3 observations / questions in your lab log book.**

### Task #4: Cron Jobs & Turning off XWindows

This last section involves "tweaks" to harden your Linux system from less obvious vulnerabilities. First, you will learn as the adiminstrator to limit **cron jobs** (i.e. scheduled tasks) that can be run by users. Finally, you will change from run level 5 (Xwindows) to level 3 (text-based) to make your system less vulnerable to attacks.

**INSTRUCTIONS:**

1. Switch to the super-user, and issue the following command:

```bash
crontab -u user1 -e
```

2. Add the following contents into the first user's **crontab** file:

```bash
  * * * * * 'uptime >> ~/uptime.txt'
```

3. Save and exit your crontab editing session.
4. Edit the **/etc/crontab.allow** file to include the first user. If the file does not exist, simply create it, or check with the Linux distribution for instructions to use the crontab.allow file.
5. Login to the first user and see if your cron job is working.
6. Login to the second user (created in lab4) to see if that account can create a cron job. Where you successful? Why?
7. Try to list at least 3 types of Bash Shell scripts that a Linux system administrator can limit to specific users. Record your findings in your lab log-book.
8. Perform another software update (either graphically or using the **yum** or **apt-get** commands). Verify that the software upgrades are up-to-date.
9. Switch your Linux server from graphical mode (eg run level 5) to default mode (eg run level 3). **Note**: The procedure has changed in newer Linux system (using **sysd**). Refer to the following link to learn how to set your Fedora17 system to text-based mode: [Init vs Systemd](http://zenit.senecac.on.ca/wiki/index.php/Init_vs_systemd)
10. Perform a scan from your Kali Linux (host) machine to hopefully see a more hardened system with less running services.
11. Proceed to "Completing The Lab".

**Answer Task #4 observations / questions in your lab log book.**

## Completing the Lab

**Arrange evidence for each of these items on your screen, then ask your instructor to review them and sign off on the lab's completion:**

1. Compare ACLs by demonstrating running services via **user1** and **user2**.
2. Verify SELinux is running in **Enforcing** mode.
3. Display contents of **sudoer's file (for user1)**.
4. Verification of running **crob job**.
5. Linux system in **text-based mode** (i.e. run level 3 for your **Hardened Linux** system).
6. Completed Lab 7 notes.

## Preparing for Quizzes

1. What does the term **ACL** stand for?
2. Compare and contrast the features of ACLs for Windows (using NTFS) and Linux.
3. What is the purpose of **ACLs**?
4. What is the purpose of **SELinux**.
5. List the various modes of **SELinux**.
6. Briefly list the steps to allow the regular user called **msaul** to run administrative commands.
7. Briefly explain how to setup the sudoer's file to have the user **ctyler** only run the administrative command:

```bash
visudo
```

8. Briefly list the steps to allow **user1** to run a **cron job** called **cleanup.bash**
9. Write a Linux command to perform a software update.
10. Write a Linux command to set the Linux server to text-based mode.
11. Why is it recommended to run a Linux server in text-based mode?
