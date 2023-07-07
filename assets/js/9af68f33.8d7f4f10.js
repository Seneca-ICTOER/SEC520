"use strict";(self.webpackChunkSEC520=self.webpackChunkSEC520||[]).push([[632],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),k=o,h=u["".concat(l,".").concat(k)]||u[k]||c[k]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8688:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var a=n(3117),o=(n(7294),n(3905));const r={id:"lab2",title:"Lab 2",sidebar_position:2,description:"Lab 2 for Students to Complete and Submit"},i="Lab 2",s={unversionedId:"A-Labs/lab2",id:"A-Labs/lab2",title:"Lab 2",description:"Lab 2 for Students to Complete and Submit",source:"@site/docs/A-Labs/lab2.md",sourceDirName:"A-Labs",slug:"/A-Labs/lab2",permalink:"/SEC520/A-Labs/lab2",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SEC520/tree/main/docs/A-Labs/lab2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"lab2",title:"Lab 2",sidebar_position:2,description:"Lab 2 for Students to Complete and Submit"},sidebar:"courseNotesSidebar",previous:{title:"Lab 1",permalink:"/SEC520/A-Labs/lab1"},next:{title:"Lab 3",permalink:"/SEC520/A-Labs/lab3"}},l={},p=[{value:"Information Gathering",id:"information-gathering",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Objectives",id:"objectives",level:3},{value:"Required Materials (Bring to All Labs)",id:"required-materials-bring-to-all-labs",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Online Tools and References",id:"online-tools-and-references",level:3},{value:"Course Notes",id:"course-notes",level:3},{value:"Performing Lab 2",id:"performing-lab-2",level:2},{value:"Task #1: Using Search Engines to Obtain Target Server Information",id:"task-1-using-search-engines-to-obtain-target-server-information",level:3},{value:"Task #2: Server Detection, Link Analysis &amp; Domain Name Expansion",id:"task-2-server-detection-link-analysis--domain-name-expansion",level:3},{value:"Task #3: Foot-printing",id:"task-3-foot-printing",level:3},{value:"Task #4: Obtaining User Information",id:"task-4-obtaining-user-information",level:3},{value:"Task #5: Verification / The &quot;Tank&quot; Server",id:"task-5-verification--the-tank-server",level:3},{value:"Completing the Lab",id:"completing-the-lab",level:2},{value:"Preparing for Quizzes",id:"preparing-for-quizzes",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-2"},"Lab 2"),(0,o.kt)("h2",{id:"information-gathering"},"Information Gathering"),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This lab teaches various methods of ",(0,o.kt)("strong",{parentName:"li"},"gathering information")," from a ",(0,o.kt)("strong",{parentName:"li"},"targeted computer system"),". Normally, an individual or a company can be hired to perform ",(0,o.kt)("strong",{parentName:"li"},"Penetration Testing")," in order to detect weaknesses in an organization's computer system. The first phase (called the \"",(0,o.kt)("strong",{parentName:"li"},"reconnaissance phase"),'" is considered to be a "harmless activity", where a person can simply gather information to be used later in other aspects of penetration testing (network ',(0,o.kt)("em",{parentName:"li"},"scanning")," and ",(0,o.kt)("em",{parentName:"li"},"enumeration"),")."),(0,o.kt)("li",{parentName:"ul"},"Students will first learn how to gather various documents / information via a web-browser in order to obtain information regarding the ",(0,o.kt)("strong",{parentName:"li"},"structure"),", ",(0,o.kt)("strong",{parentName:"li"},"relationships")," and ",(0,o.kt)("strong",{parentName:"li"},"policies")," of a target company, as well as partners or servers that are associated with that target company (with emphasis on IP addresses). Once the relevant information has been collected, the student will then utilize open-source applications in order to perform ",(0,o.kt)("strong",{parentName:"li"},"link analysis")," to make connections between various IP addresses."),(0,o.kt)("li",{parentName:"ul"},"Students will then learn how to use Interent-Based tools and technolgies to ",(0,o.kt)("strong",{parentName:"li"},"mine data")," that pertains more to the internal structure of the targeted organization's server(s), as well as it's specific IP Address ranges (subnets)."),(0,o.kt)("li",{parentName:"ul"},"Students will also learn how to use tools to gather information of the ",(0,o.kt)("strong",{parentName:"li"},"users")," of a targeted server, as well as ",(0,o.kt)("strong",{parentName:"li"},"verifying")," the targetted IP Addresses immediately prior to the ",(0,o.kt)("em",{parentName:"li"},"scanning")," and ",(0,o.kt)("em",{parentName:"li"},"enumeration")," phases.")),(0,o.kt)("h3",{id:"objectives"},"Objectives"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("strong",{parentName:"p"},"search engine website (google.ca)")," to obtain computer system information (including IP address).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use various open-source applications to perform IP address associations with IP address (",(0,o.kt)("strong",{parentName:"p"},"Link Analysis"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Understand the basic concepts of "',(0,o.kt)("strong",{parentName:"p"},"footprintng"),'" a targeted server with respect to the following open-source technologies:'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"DNS Lookup"),(0,o.kt)("li",{parentName:"ul"},"WHOIS (Website Service)"),(0,o.kt)("li",{parentName:"ul"},"Domain Name Expansion"),(0,o.kt)("li",{parentName:"ul"},"HOST"),(0,o.kt)("li",{parentName:"ul"},"SMTP"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using open-source tools in order to focus on ",(0,o.kt)("em",{parentName:"p"},"technical aspects")," of the server, in order to be more successful in the ",(0,o.kt)("em",{parentName:"p"},"scanning")," and ",(0,o.kt)("em",{parentName:"p"},"enumeration")," phase.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use tools to gather user information such as e-mail addresses or other information via social networking sites.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify (confirm and narrow-down) valid IP Addresses (and ranges) to help reduce the time during the scanning and enumeration phases.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Practice skills learned in this lab to gather information of an educational penetration-testing server at Seneca College (",(0,o.kt)("strong",{parentName:"p"},"tank.senecac.on.ca"),")."))),(0,o.kt)("h3",{id:"required-materials-bring-to-all-labs"},"Required Materials (Bring to All Labs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SATA Hard Disk")," (in removable disk tray)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lab Logbook (Lab2 Reference Sheet)")," (to make notes and observations).")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/SEC520/A-Labs/lab1"},"SEC520 Lab 1"))),(0,o.kt)("h3",{id:"online-tools-and-references"},"Online Tools and References"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Information Gathering")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.google.ca/"},"Google Search Engine")," (site, filetype, link)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://news.netcraft.com/"},"Netcraft")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://github.com/sensepost/BiLE-suite"},"BiLE Utilities"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Foot-printing")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://linuxmanpages.com/man1/whois.1.php"},"whois")),(0,o.kt)("li",{parentName:"ul"},"WHOIS Online Proxies: (",(0,o.kt)("a",{parentName:"li",href:"http://whois.domaintools.com/"},"whois.domaintools.com"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://linuxmanpages.com/man1/host.1.php"},"host"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User Information")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.ehacking.net/2011/08/theharvester-backtrack-5-information.html"},"theHarvester.py")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.ehacking.net/2011/12/metagoofil-backtrack-5-tutorial.html"},"Metagoofil.py"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Verification")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.bing.com"},"www.bing.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.computerhope.com/unix/unslooku.htm"},"nslookup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.ehacking.net/2011/02/dnsmap-dns-network-mapper.html"},"dnsmap"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Other")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://linuxmanpages.com/"},"Online Linux Man Pages"))),(0,o.kt)("h3",{id:"course-notes"},"Course Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{target:"_blank",href:n(5996).Z},"odp"),"| ",(0,o.kt)("a",{target:"_blank",href:n(5695).Z},"pdf"),"| ",(0,o.kt)("a",{target:"_blank",href:n(4815).Z},"ppt")," (Slides: Reconnaissance)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.youtube.com/watch?v=AHEt0mUZH_0"},"Reconnaissance")," (YouTube Video)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://libcat.senecac.on.ca/vwebv/holdingsInfo?searchId=89542&recCount=50&recPointer=0&bibId=315433"},"Penetration Tester's Open Source Toolkit (E-book)")," (Chapter 2: Reconnaissance)")),(0,o.kt)("h2",{id:"performing-lab-2"},"Performing Lab 2"),(0,o.kt)("h3",{id:"task-1-using-search-engines-to-obtain-target-server-information"},"Task #1: Using Search Engines to Obtain Target Server Information"),(0,o.kt)("p",null,'With the "information gathering" phase of penetration testing, it is recommended to obtain as much data regarding a targeted organization. This would include viewing the website, noting contacts, following-up information from social media sites (eg. facebook, etc). In addition to the above-mentioned techniques, there are other techniques and tools to help gather useful server information of a targeted organization.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"sensepost.com")),(0,o.kt)("p",null,"This is a website that is dedicated to internet security, and provides a platform to help gather information regarding a server. In fact, examples from the textbook: ",(0,o.kt)("strong",{parentName:"p"},"Penetration Tester's Open Source Toolkit")," use examples from this website. We will be using this site for the majority of lab2..."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"INSTRUCTIONS:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Boot your ",(0,o.kt)("strong",{parentName:"li"},"Kali Linux")," (host) system, and start a graphical session."),(0,o.kt)("li",{parentName:"ol"},"Open a web-browser and go to the Google website ( ",(0,o.kt)("a",{parentName:"li",href:"http://www.google.ca/"},"http://www.google.ca/")," )"),(0,o.kt)("li",{parentName:"ol"},"Type in the following URL in the Google search box: ",(0,o.kt)("strong",{parentName:"li"},"sensepost.com")),(0,o.kt)("li",{parentName:"ol"},"Note the type of links that are associated with this type of search (i.e total number of links at the top of the search results), and record the total number of links for this type of search in your lab logbook."),(0,o.kt)("li",{parentName:"ol"},"Now, enter the following directive in the Google search box: ",(0,o.kt)("strong",{parentName:"li"},"site:sensepost.com"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enter Site Directive in Google Search Textbox:"),' Don\'t enter the "site" directive in the URL textbox at the top of the web-browser - enter this directive in the Google SEARCH text; otherwise, the directive will not work. Also make certain remain in the google web-page when performing this operation...'),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'You should notice a change in the display of links. How does this search method differ from the previous search method using only the text: "sensepost.com"? Record your findings (including the new total number of links) in your lab log-book.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We will now be narrowing our search in the ",(0,o.kt)("strong",{parentName:"p"},"sensepost.com")," website for specific types of files for ",(0,o.kt)("strong",{parentName:"p"},"pdf")," with the filename keyword ",(0,o.kt)("strong",{parentName:"p"},"hacking")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Enter the following directive in the Google search box: ",(0,o.kt)("strong",{parentName:"li"},"site:sensepost.com filetype:pdf hacking")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"What are the total amount of links? Are all of the links contained in sensepost.com? Record your findings in your log lab-book.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue directives to search for links in the sensepost.com website that contains MS Word documents (",(0,o.kt)("strong",{parentName:"p"},"doc"),"), and MS Word PowerPoint Presentations (",(0,o.kt)("strong",{parentName:"p"},"ppt"),") that contain the pattern hacking. Record these findings in your lab log-book.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally, the ",(0,o.kt)("strong",{parentName:"p"},"link")," directive is used to display links that are associated with a target website. In order to display all websites that link to the ",(0,o.kt)("em",{parentName:"p"},"sensepost.com")," website, issue the following directive in the Google searchbox: ",(0,o.kt)("strong",{parentName:"p"},"link:sensepost.com"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Record the total number of links in your lab log-book. Are there any other links outside the sensepost.com domain that are associated? How do you think this is useful in terms of penetration testing?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"How do you think that you could use this information that you have just collected during this lab for penetration testing? (Record your answer in your lab log-book)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Repeat the information-gathering process for the following URL: ",(0,o.kt)("strong",{parentName:"p"},"linux.senecac.on.ca")," for practice."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Gathering Information in your Own Server at Home")),(0,o.kt)("p",null,"Just for Interest, it is not that difficult to obtain SOME information regarding your own computer system at home. First, determine your IP address by using the ",(0,o.kt)("strong",{parentName:"p"},"ifconfig")," command for Linux, or the ",(0,o.kt)("strong",{parentName:"p"},"ipconfig")," command in windows. One very quick way to determine your IP Address is to simply type ",(0,o.kt)("strong",{parentName:"p"},"IP Address")," in the URL Window of your web-browser. Knowing your own IP Address at home is useful during the ",(0,o.kt)("strong",{parentName:"p"},"link analysis")," and ",(0,o.kt)("strong",{parentName:"p"},"domain name expansion")," steps in the next task..."),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},"Proceed to Task #2")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer the Task #1 observations / questions in your lab log book.")),(0,o.kt)("h3",{id:"task-2-server-detection-link-analysis--domain-name-expansion"},"Task #2: Server Detection, Link Analysis & Domain Name Expansion"),(0,o.kt)("p",null,"In this section, we will use the site information (obtained from ",(0,o.kt)("em",{parentName:"p"},"Task #1"),") to gain more detailed information regarding the targeted organization's server (eg. IP address, Type of operating system, History of uptimes, name server information , Related IP addresses of other servers)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"INSTRUCTIONS:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assuming that your web-browser is still running, click on the following link (which should open in another browser window): ",(0,o.kt)("a",{parentName:"p",href:"http://www.netcraft.com"},"http://www.netcraft.com"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NOTE"),": Do not worry if you are redirected to another URL (eg. news.netcraft.com) - it will provides the same information we require."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Let's find out additional information regarding the ",(0,o.kt)("strong",{parentName:"p"},"sensepost.com")," website. In the ",(0,o.kt)("strong",{parentName:"p"},"What's that site running"),"? box, enter the following: ",(0,o.kt)("strong",{parentName:"p"},"sensepost.com"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Record the following server information for "sensepost.com" (and record in your lab log-book):'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"IP Address"),(0,o.kt)("li",{parentName:"ul"},"Type of Operating System"),(0,o.kt)("li",{parentName:"ul"},"Name Server"),(0,o.kt)("li",{parentName:"ul"},"Country Origin"),(0,o.kt)("li",{parentName:"ul"},"Date First Noticed (Tracked)"),(0,o.kt)("li",{parentName:"ul"},"Frequency of Uptimes"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The next step in the reconnassaince phase involves ",(0,o.kt)("strong",{parentName:"p"},"Linux Analysis"),', which will list and categorize relationships between other websites, and the "',(0,o.kt)("em",{parentName:"p"},"target"),'" website called "',(0,o.kt)("strong",{parentName:"p"},"sensepost.com"),'". You will be downloading, installing and running serveral open-source tools (a series of packages packaged as ',(0,o.kt)("strong",{parentName:"p"},"BiLE"),' (which stands for: "',(0,o.kt)("em",{parentName:"p"},"Bi-directional Link Extraction"),'" tools) to asssist in obtaining this information.'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Installing Dependencies for BiLE.pl, BiLE-Weigh.pl")),(0,o.kt)("p",null,"You may need to download the ",(0,o.kt)("strong",{parentName:"p"},"BiLE")," Utilities, consisting of useful Perl Scripts. Your Kali Linux distribution most likely comes with Perl already loaded. On the other hand, prior to running these Perl Scripts, you may be required to first install the application called ",(0,o.kt)("strong",{parentName:"p"},"HTTrack"),'. You can do this by installing "httrack" via "apt-get" or use a graphical application (such as ',(0,o.kt)("strong",{parentName:"p"},"Synaptic Package Manager"),")"),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Issue the command: ",(0,o.kt)("strong",{parentName:"li"},"which httrack")," to confirm that this dependent application has been installed (refer to warning message above)."),(0,o.kt)("li",{parentName:"ol"},"In a web-browser, go to the following website (which will open in a separate browser window): ",(0,o.kt)("a",{parentName:"li",href:"http://github.com/sensepost/BiLE-suite"},"http://github.com/sensepost/BiLE-suite")),(0,o.kt)("li",{parentName:"ol"},"Download the Perl Scripts called ",(0,o.kt)("strong",{parentName:"li"},"BiLE.pl"),", ",(0,o.kt)("strong",{parentName:"li"},"BiLE-Weigh.pl"),", and ",(0,o.kt)("strong",{parentName:"li"},"tld-expand.pl")," to your Kali Linux system.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perl Scripts Containing Errors When Executed")),(0,o.kt)("p",null,"If errors occur, ",(0,o.kt)("strong",{parentName:"p"},"check to see if that Perl Scripts were properly downloaded. If they contain HTML code, an alternative to downloading is to display the Perl Script in the web-browser, copying and pasting the code to the file on your computer")," (",(0,o.kt)("em",{parentName:"p"},"as opposed to right-clicking link and saving to your computer"),")."),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command: ",(0,o.kt)("strong",{parentName:"p"},"perl BiLE.pl sensepost.com output.sensepost.com")," (assuming BiLE.pl is located in the current directory)."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: This process may take serveral minutes to complete."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'When the process has completed, a report called "',(0,o.kt)("strong",{parentName:"p"},"output.sensepost.com.mine"),'" (contained in the current directory) will be created that display associated links with the sensepost.com website. Using a text editor, view the contents of that file. Write in your lab log-book the number of lines in the file "output.sensepost.com.mine".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If there is not enough information in this file, run the ",(0,o.kt)("strong",{parentName:"p"},"BiLE.pl")," script for the URL: ",(0,o.kt)("strong",{parentName:"p"},"linux.senecac.on.ca")," to be sorted in the file called ",(0,o.kt)("strong",{parentName:"p"},"output.linux.senecac.on.ca"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Another Perl Script called ",(0,o.kt)("strong",{parentName:"p"},"BiLE-weigh.pl")," is used to rank the significance (relevance) of the related links with higher ranking links near the bottom of the file. This Perl Script requires the URL of the target website, as well as the output-file (generated by the BiLE.pl Perl Script.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue the following command: ",(0,o.kt)("strong",{parentName:"p"},"perl BiLE-weigh.pl sensepost.com output.sensepost.com.mine"),' (Assuming BiLE.pl Script and "output.sensepost.com" are contained in the current directory).'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Error: Sort: open failed: +1: No such file or directory")),(0,o.kt)("p",null,"If you run the ",(0,o.kt)("strong",{parentName:"p"},"BiLE-Weigh.pl")," command, and encounter the above error, then make the following editing changes for this script:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"change following line"),": "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"'cat temp | sort -r -t \";\" +1 -n > @ARGV[1].sorted';\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"to read"),": "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'`cat temp | sort -r -t ":" -k 2 -n > @ARGV[1].sorted`;\n')),(0,o.kt)("p",null,"(Note: ","`",' in this case is "Left-Tick" representing command substitution - not to be confused with a single-quote.'),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'View the contents of the file "output.sensepost.com.sorted" in your current directory. Notice the ranking of the relavance of links associated with "sensepost.com" website. Record the number of lines in this file in your lab log-book. What conclusions can you draw in terms of link analysis? Write this information down in your lab log-book.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the ",(0,o.kt)("strong",{parentName:"p"},"BiLE-weigh.pl")," perl script for the URL: ",(0,o.kt)("strong",{parentName:"p"},"linux.senecac.on.ca")," and using the file: ",(0,o.kt)("strong",{parentName:"p"},"output.linux.senecac.on.ca.mine"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The final step in the information gathering process is to perform ",(0,o.kt)("strong",{parentName:"p"},"Domain Name Expansion"),". There are two parts to this process:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Variations in the DNS Name (use ",(0,o.kt)("strong",{parentName:"li"},"host")," command)"),(0,o.kt)("li",{parentName:"ul"},"Variations in the Top Level Domain (use ",(0,o.kt)("strong",{parentName:"li"},"tld-expand.pl")," Perl Script)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a shell terminal, and type the following command: ",(0,o.kt)("strong",{parentName:"p"},"host -t ns sensepost.com")," (If there is a long list of variations, you can redirect stdout to a text file).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Record the various name servers that are listed in your lab log-book.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an input file called ",(0,o.kt)("strong",{parentName:"p"},"sensepost.com.domains.txt"),", and place any domain names that you have discovered, and then save and exit editing session.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue the command: ",(0,o.kt)("strong",{parentName:"p"},"perl tld-expand.pl sensepost.com.domains.txt sensepost.com.domains.variations.txt"),". What do these variations represent in terms of reconnaissance? Record your finds in your lab log-book.\nProceed to Task #3"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer Task #2 observations / questions in your lab log book.")),(0,o.kt)("h3",{id:"task-3-foot-printing"},"Task #3: Foot-printing"),(0,o.kt)("p",null,"As opposed to the Information Gathering phase (that collects information such as IP Addresses), the Foot-printing phase tends to gain a \u201cclearer picture\u201d of the structure of the organization's computer system. This can include ",(0,o.kt)("strong",{parentName:"p"},"relationships among servers"),", as well as noting ",(0,o.kt)("strong",{parentName:"p"},"IP Address ranges"),"."),(0,o.kt)("p",null,"Footprinting (in simpler terms) means ",(0,o.kt)("strong",{parentName:"p"},"Network Mapping"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": You will be using information that you gathered from the server: ",(0,o.kt)("strong",{parentName:"p"},"sensepost.com")," in order to assist you with this lab."),(0,o.kt)("p",null,"INSTRUCTIONS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In a shell window, issue the following command: ",(0,o.kt)("strong",{parentName:"li"},"host sensepost.com")),(0,o.kt)("li",{parentName:"ol"},"Record the results in your lab log-book."),(0,o.kt)("li",{parentName:"ol"},"Issue the same command with following options: ",(0,o.kt)("strong",{parentName:"li"},"host -t ns sensepost.com")),(0,o.kt)("li",{parentName:"ol"},"Record the results in your lab log-book."),(0,o.kt)("li",{parentName:"ol"},"Issue the following command: ",(0,o.kt)("strong",{parentName:"li"},"nslookup sensepost.com")),(0,o.kt)("li",{parentName:"ol"},"How does this information differ from the other 2 commands previously issued?"),(0,o.kt)("li",{parentName:"ol"},"Issue the following command: ",(0,o.kt)("strong",{parentName:"li"},"whois sensepost.com")),(0,o.kt)("li",{parentName:"ol"},"List the additional general information that is provided from your all three previous commands."),(0,o.kt)("li",{parentName:"ol"},'How do you think that this recently collected information can help you "map" the target computer\'s network?'),(0,o.kt)("li",{parentName:"ol"},"Proceed to Task #4")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer the Task #3 observations / questions in your lab log book.")),(0,o.kt)("h3",{id:"task-4-obtaining-user-information"},"Task #4: Obtaining User Information"),(0,o.kt)("p",null,"You will be using the information collected in Task #1 to assist with obtaining User information in this task."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install metagoofil program:")," The harvester program is already installed in your Kali system, but you will need to install the program metagoofil. Issue the command (as root): ",(0,o.kt)("strong",{parentName:"p"},"apt-get install metagoofil")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"INSTRUCTIONS:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue the command ",(0,o.kt)("strong",{parentName:"p"},"theharvester --help"),", to learn how to run this script again with the following options:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Domain: ",(0,o.kt)("strong",{parentName:"li"},"sensepost.com")),(0,o.kt)("li",{parentName:"ul"},"Number of limited results: ",(0,o.kt)("strong",{parentName:"li"},"100")),(0,o.kt)("li",{parentName:"ul"},"Data Source: ",(0,o.kt)("strong",{parentName:"li"},"google")),(0,o.kt)("li",{parentName:"ul"},"Output filename: ",(0,o.kt)("strong",{parentName:"li"},"~/sensepost.user")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Record any user information that you consider relevant (for penetration testing) in your lab log-book.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For user information collected so far, use this information to see if you can access their profiles or other information on social media sites (eg. Facebook, Classmates, MySpace, Twitter, etc.).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally, we will be obtaining documents from the targeted network (via Google) that may help provide more information regarding the users.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue the following command: ",(0,o.kt)("strong",{parentName:"p"},"metagoofil --help")," to learn how to run this script again with the following options:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Domain: ",(0,o.kt)("strong",{parentName:"li"},"sensepost.com")),(0,o.kt)("li",{parentName:"ul"},"Number of limited results: ",(0,o.kt)("strong",{parentName:"li"},"10")),(0,o.kt)("li",{parentName:"ul"},"Number of files to download (",(0,o.kt)("em",{parentName:"li"},"-n option"),"): ",(0,o.kt)("strong",{parentName:"li"},"10")),(0,o.kt)("li",{parentName:"ul"},"Filetype: ",(0,o.kt)("strong",{parentName:"li"},"pdf,ppt")),(0,o.kt)("li",{parentName:"ul"},"output directory: ",(0,o.kt)("strong",{parentName:"li"},"sensepost.docs")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check to see if any files were downloaded. If so, write the filenames in your lab log-book.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Proceed to Task #5"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer Task #4 observations / questions in your lab log book.")),(0,o.kt)("h3",{id:"task-5-verification--the-tank-server"},'Task #5: Verification / The "Tank" Server'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Location of dnsmap Utility in Kali Linux:")," The ",(0,o.kt)("strong",{parentName:"p"},"dnsmap")," utility is a time-saving method of determining reverse dns lookups in a batch mode involving an input file of collected dns entries."),(0,o.kt)("p",null,"This utility is contained in your Kali Linux boot media under the file pathname: ",(0,o.kt)("strong",{parentName:"p"},"/pentest/enumeration/dns/dnsmap")),(0,o.kt)("p",null,'It is important to "double-check" the validity of your collected information - in particular, your IP addresses. If any servers are no longer running, this can waste a tremendous amount of time during the scanning process. Remember: the longer a scan takes to execute, the more vulnerable you are as the penetration tester to detection.'),(0,o.kt)("p",null,"INSTRUCTIONS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a web-broswer and go to the website: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"http://www.bing.com"},"www.bing.com")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the IP addresses that you have gathered during your reconnaisance phase for ",(0,o.kt)("strong",{parentName:"p"},"sensepost.com"),". Verify that each IP address is valid, and it currently operational.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For each of the related IP address information you have gathered regarding sensepost.com, use the ",(0,o.kt)("strong",{parentName:"p"},"nslookup")," command to verify it's existence.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change to the directory that contains ",(0,o.kt)("strong",{parentName:"p"},"dnsmap")," utility.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the ",(0,o.kt)("strong",{parentName:"p"},"dnsmap")," utility with an input file containing your collected IP_ADDRESSES.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Seneca College has a special server (called ",(0,o.kt)("strong",{parentName:"p"},"tank"),") that is used for penetration testing. No only is this server intended for educational purposeses only, but students are ",(0,o.kt)("strong",{parentName:"p"},"NOT")," allowed to perform penetration testing unless that have completed a form that is distributed and collected by your instructor to permit students to perform testing on that server for the semester!"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'Once you have signed and given the tank server consent form your your instructor, try gathering information regarding this server called "tank", and record your findings in your lab log-book.')))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Proceed to "Completing the Lab"'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer Task #5 observations / questions in your lab log book.")),(0,o.kt)("h2",{id:"completing-the-lab"},"Completing the Lab"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arrange evidence for each of these items on your screen, then ask your instructor to review them and sign off on the lab's completion:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reconnaissance Information from sensepost.com:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Basic information from ",(0,o.kt)("strong",{parentName:"li"},"sensepost.com")," website via the Netcraft utility site."),(0,o.kt)("li",{parentName:"ul"},"Reports from running ",(0,o.kt)("em",{parentName:"li"},"BiLE.pl")," and ",(0,o.kt)("em",{parentName:"li"},"BiLE-Weigh.pl")," for ",(0,o.kt)("em",{parentName:"li"},"sensepost.com")),(0,o.kt)("li",{parentName:"ul"},"Main DNS information (Footprint) for ",(0,o.kt)("em",{parentName:"li"},"sensepost.com")),(0,o.kt)("li",{parentName:"ul"},"User information (e-mail addresses) for the ",(0,o.kt)("em",{parentName:"li"},"sensepost.com")," site."),(0,o.kt)("li",{parentName:"ul"},"Verification of DNS information for ",(0,o.kt)("em",{parentName:"li"},"sensepost.com")," site."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Completed Lab 2 notes (including common commands, etc)."))),(0,o.kt)("h2",{id:"preparing-for-quizzes"},"Preparing for Quizzes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"List the major phases contained in penetration testing."),(0,o.kt)("li",{parentName:"ol"},"Explain the difference between ",(0,o.kt)("strong",{parentName:"li"},"reconnaissance")," and ",(0,o.kt)("strong",{parentName:"li"},"footprinting"),"."),(0,o.kt)("li",{parentName:"ol"},"List 3 open-source tools to assist in the ",(0,o.kt)("strong",{parentName:"li"},"Footprinting")," phase of penetration testing."),(0,o.kt)("li",{parentName:"ol"},"Briefly describe the process to obtain key documents from a server using ",(0,o.kt)("strong",{parentName:"li"},"google.ca")),(0,o.kt)("li",{parentName:"ol"},"Briefly describe the steps to obtain IP, operating system information from a website called ",(0,o.kt)("strong",{parentName:"li"},"linux.senecac.on.ca"),". Indicate how this information might be useful in future stages of penetration testing."),(0,o.kt)("li",{parentName:"ol"},"Define the term ",(0,o.kt)("strong",{parentName:"li"},"link analysis"),". What open-source tools can be used to perform ",(0,o.kt)("em",{parentName:"li"},"link analysis"),"?"),(0,o.kt)("li",{parentName:"ol"},"Define the term ",(0,o.kt)("strong",{parentName:"li"},"Footprinting")," as it relates to penetration testing."),(0,o.kt)("li",{parentName:"ol"},"List the steps (using open source tools) to obtrain user account information of a targeted server. Indicate how this information might be usedful in future stages of penetration testing."),(0,o.kt)("li",{parentName:"ol"},"Why do you think that verification of gathered information (such as IP address (IP address ranges) is critical prior to proceeding to the scanning and enumeration phases?")))}c.isMDXComponent=!0},5996:function(e,t,n){t.Z=n.p+"assets/files/sec520_w1_l2-ba8cf924f0dbff760148e61e194152e9.odp"},5695:function(e,t,n){t.Z=n.p+"assets/files/sec520_w1_l2-b28c6a1eea170c3fa33ce3605a0c7d8e.pdf"},4815:function(e,t,n){t.Z=n.p+"assets/files/sec520_w1_l2-e0e3f57db7aa97dccecf07aeb57cc750.ppt"}}]);