// let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

const eventsData = [
    {
        title: "First Gymkhana Table Tennis Tournament",
        date: "23rd - 29th August 2022",
        poster: "/upcomingEvents/tt_tournament.png",
        createdAt: "16th August 2022",
        highlightText:
            ``,
        description:
            `
      The Indoor Games Subcommittee, Technology Students' Gymkhana, Indian Institute of Technology Kharagpur is hosting a
      Table Tennis event accessible to all IIT Kharagpur students and staff members: The First Gymkhana Table Tennis Tournament!!
      It's going to be an entertaining competition with a lot of sports spirit, passion, and enjoyment.
      The top 30 students (24 boys and 6 girls) will be considered for Inter-IIT selections.
            `,
        modalContent: "",
        content: [
            `
      The Indoor Games Subcommittee, Technology Students' Gymkhana, Indian Institute of Technology Kharagpur is hosting a 
      Table Tennis event accessible to all IIT Kharagpur students and staff members: The First Gymkhana Table Tennis Tournament!!
      
      It's going to be an entertaining competition with a lot of sports spirit, passion, and enjoyment.
      The top 30 students (24 boys and 6 girls) will be considered for Inter-IIT selections.
            `,
        ],
        links: [
            {
                description: "Men's and Women's Double Fixtures:",
                href: "https://forms.gle/srp99vEVBfxLAWxd7",
                content: "Registration Link",
            },
            {
                description: "Mixed Double Fixtures:",
                href: "https://forms.gle/tGBJDtgdL6FL7VfT9",
                content: "Registration Link",
            },
            {
                description: "Singles Fixtures:",
                href: "https://forms.gle/z1vfaSB84vouvZFy9",
                content: "Registration Link",
            },
        ],
        dates: [
            {
                title: "Registration Deadline",
                date: "20th August before 11:59 pm",
            },
            {
                title: "Tournament Dates",
                date: "23rd - 29th August 2022"
            },
            {
                title: "Time",
                date: "6pm to 9pm"
            },
            {
                title: "Venue",
                date: "TSG Table Tennis Court"
            }
        ],
        isHighlight: true,
    },
    {
        title: "World Blood Donor Day - Blood Donation Camp",
        date: "5th July 2022",
        poster: "",
        createdAt: "1st July 2022",
        highlightText:
            ``,
        description:
            `
      Technology Students’ Gymkhana, Indian Institute of Technology Kharagpur is organising a voluntary blood 
      donation camp in TSG premises on 5th July 2022, 10 AM Onwards.
      The whole campus community is requested to come forward and donate blood for the noble cause. 
      `,
        modalContent: "",
        content: [
            `
      Technology Students’ Gymkhana, Indian Institute of Technology Kharagpur is organising a voluntary blood donation camp in TSG premises with the vision
      “Donating Blood is an Act of Solidarity, Join the efforts and save lives”.  
      Kharagpur Voluntary Blood doners association is going to help us during the event.
      Students available on campus and the whole campus community is requested to come forward and donate blood for the noble cause. 
      Please register  through  the given link for the purpose of record.
      A notice published on Apna KGP site is attached.
      `
        ],
        links: [
            {
                description: "Notice: ",
                href: "/data/media/files/BLOOD DONATION CAMP EVENT.pdf",
                content: "Click Here",
            },
            {
                description: "Registration Link: ",
                href: "https://docs.google.com/forms/d/1pR3atKFL2igFR6mpJaS8yVWNJP2IxcgSrz2-U3pPSfY/edit?ts=62ac7342",
                content: "Click Here",
            },
        ],
        dates: [
            {
                title: "Date",
                date: "5th July 2022, 10 AM Onwards ",
            },
            {
                title: "Venue",
                date: "Technology Students' Gymkhana",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Celebration of the 8th International Day of Yoga 2022",
        date: "21st June 2022",
        poster: "",
        createdAt: "21st June 2022",
        highlightText:
            ``,
        description:
            `
      In commemoration of the ‘Azadi ka Amrit Mahotsav’, 
      IIT Kharagpur is going to celebrate the 8th International Day of Yoga 2022 on 21st June at 6 AM in the Tata Steel Sports ground. 
      The live telecast of the event will be through the YouTube channel of Technology Students' Gymkhana.
      `,
        modalContent: "",
        content: [
            `
      In commemoration of the ‘Azadi ka Amrit Mahotsav’, 
      IIT Kharagpur is going to celebrate the 8th International Day of Yoga 2022 on 21st June at 6 AM in the Tata Steel Sports ground. 
      The live telecast of the event will be through the YouTube channel of Technology Students' Gymkhana.
      `
        ],
        links: [
            {
                description: "Live Stream at:",
                href: "https://youtu.be/ieOqwpFbBMg",
                content: "https://youtu.be/ieOqwpFbBMg",
            },
            {
                description: "Event Schedule:",
                href: "/data/media/files/IDY_schedule.pdf",
                content: "Click Here",
            },
        ],
        dates: [
            {
                title: "Date",
                date: "6:00 am - 8:00 am, 21st June 2022",
            },
            {
                title: "Venue",
                date: "Tata Steel Sports Complex",
            },
        ],
        isHighlight: false,
    },
    {
        title: "World Blood Donor Day",
        date: "14th June 2022",
        poster: "",
        createdAt: "14th June 2022",
        highlightText:
            `
       "Donating bloog is an act of solidarity. Join the efforts and save lives."
      `,
        description:
            `
       The day marks an opportunity to thank blood donors for their act of saving lives through voluntary blood donation.
       The day is celebrated to increase awareness about need of regular non-renumerated voluntary blood donations.
      `,
        modalContent: "",
        content: [
            `
      The day marks an opportunity to thank blood donors for their act of saving lives through voluntary blood donation.
      The day is celebrated to increase awareness about need of regular non-renumerated voluntary blood donations.
      `
        ],
        links: [
            // {
            //   description: "Read More:",
            //   href: "/elections",
            //   content: "",
            // },
        ],
        dates: [
            {
                title: "Observed every year on",
                date: "14th June",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Gymkhana Elections 2022",
        date: "4th April 2022",
        poster: "",
        createdAt: "26th March 20:00",
        description:
            "Each year Technology Students’ Gymkhana (TSG), IIT Kharagpur carriesout election to select office bearers from students for smoothconduction of student related activities.This year election campaign will be carried out in hybrid mode following COVID protocol. However, the nomination, approval and voting will be done using digital platform developed by ERP, IIT Kharagpur",
        modalContent: "",
        content: [],
        links: [
            {
                description: "Read More:",
                href: "/elections",
                content: "",
            },
        ],
        dates: [
            {
                title: "Date of Election",
                date: "4th April 2022 (Monday) From 9 A.M to 6 P.M",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Smart India Hackathon 2022",
        date: "19th February 2022 11:59 PM",
        poster: "/upcomingEvents/smartIndia.jpeg",
        createdAt: "Today 20:00",
        description: `
Smart India Hackathon 2022 is a nationwide initiative by the Ministry of Education, Govt of India to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving.
          `,
        modalContent: "",
        content: [
            `
  Hello everyone
  `,
            `
  Smart India Hackathon 2022 is a nationwide initiative by the Ministry of Education, Govt of India to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving. The hackathon comprises various problem statements in both hardware and software domains. `,
            `
  For selecting the teams representing IIT Kharagpur, an internal hackathon will be organised by Technology Students' Gymkhana. The top 7 teams will get the opportunity to compete in the national level Smart India Hackathon.  `,

            `
  Registeration Deadline: 19th Feb 2022,11:59 pm
                  `,
            `
  Find out more at: www.sih.gov.in
                  `,
            `
  For any queries, contact:`,
            `
  Vadthya Sanjay Kumar: +91 9121372359`,
            `
  Kodipaka Nikitha: +91 9550449545                        `,
        ],
        links: [
            {
                title: "Matribhasha Diwas",
                date: "11th February",
                poster: "/upcomingEvents/matribhasha.jpg",
            },
        ],
        isHighlight: false,
    },
    {
        title: "SAMYOG - Connect IIT Kharagpur",
        createdAt: "Today 20:00",
        date: "18th January",
        poster: "/upcomingEvents/samyog-2.png",
        description: `
          We will be conducting an online session with the collective collaboration of Counsellors and doctors from BC Roy Medical Hospital to address several mental and physical health concerns of everyone on campus. 
          `,
        modalContent: "",
        content: [
            `
  Workshop Day 2: 13th February 2022, 3 PM - 5:30 PM 
          `,
            `
          So what are you for? Register now and get started to expand your skillset.
          `,
            `
  Join the MS teams using the code: 'ik6alb4'
          `,
            `

                  `,
        ],
        links: [
            {
                description: "Registration Link:",
                href: "https://forms.gle/rLAnA2Ppwgm6FYM87",
                content: "https://forms.gle/rLAnA2Ppwgm6FYM87",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Sociopreneurship",
        date: "4th February 2022, 8 PM",
        poster: "/upcomingEvents/sociopreneurship.jpeg",
        description: `
You all have been waiting in the wings  to bring forth an extraordinary idea that can change the world with your powerful innovation.  Technology  Students' Gymkhana provides you with a brilliant opportunity with Sociopreneurship Challenge.
          `,
        modalContent: "",
        content: [
            `
          We will be conducting an online session with the collective collaboration of Counsellors and doctors from BC Roy Medical Hospital to address several mental and physical health concerns of everyone on campus. You are cordially invited to join us for this informative session, a part of the initiative ‘SAMYOG - Connect IIT Kharagpur’, which will guide us towards a more mindful and resilient approach to our surroundings in these uncertain and unprecedented times. 
          `,
            `
          Kindly join the session at 6 PM on 18th January (Tuesday).
          `,
        ],
        links: [
            {
                description: "Meeting Link:",
                href: "https://gymkhana.iitkgp.ac.in/samyog-connect-iitkgp",
                content: "https://gymkhana.iitkgp.ac.in/samyog-connect-iitkgp",
            },
        ],
        isHighlight: false,
    },
    {
        title: "SAMYOG - Connect IIT Kharagpur",
        date: "18th January",
        poster: "/upcomingEvents/samyog-2.png",
        description: `
          We will be conducting an online session with the collective collaboration of Counsellors and doctors from BC Roy Medical Hospital to address several mental and physical health concerns of everyone on campus. 
          `,
        modalContent: "",
        content: [
            `
  Hello everyone!

  You all have been waiting in the wings  to bring forth an extraordinary idea that can change the world with your powerful innovation. Technology Students' Gymkhana provides you with a brilliant opportunity with Sociopreneurship Challenge. 
  
  We haul you to present the greatest ideas from your brightest business minds that creatively tackle giant social issues. 
  
  The competition will be held in two rounds where you will propose a solution to provided theme. Check out the entire details through the link below:  `,
            `
  Registeration Deadline: 4th February 2022, 8 PM
          `,
            `The winners might also get a chance to get seed-funded by Technology Students' Gymkhana on their winning prototypes. 

          So grab this opportunity and put your best foot forward. This could be the beginning of your amazing entrepreneurial journey!!
          
          For any queries, feel free to reach out to us!`,
        ],
        links: [
            {
                description: "Form Link:",
                href: "https://forms.gle/LbbfJBCtUo3DqAgc9",
                content: "https://forms.gle/LbbfJBCtUo3DqAgc9",
            },
            {
                description: "Details:",
                href: "https://drive.google.com/file/d/1UM04U_QcyMSWQ-3Bc2SoiIDmUwKnmgc8/view?usp=sharing",
                content:
                    "https://drive.google.com/file/d/1UM04U_QcyMSWQ-3Bc2SoiIDmUwKnmgc8/view?usp=sharing",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Logo Making Competition",
        date: "28th January",
        poster: "/upcomingEvents/lmc.jpeg",
        description: `Technology Students’ Gymkhana is proud to organize a Logo-making competition to decide the official logo for the Social and Cultural Committee, Technology Students’ Gymkhana.`,
        modalContent: "",
        content: [
            `
          “Logos are visual representations of what one stands for”
          `,
            `
          Technology Students’ Gymkhana is proud to organize a Logo-making competition to decide the official logo for the Social and Cultural Committee, Technology Students’ Gymkhana.
          Channel your inner artist to create a logo that represents the Social and Cultural Committee in the best possible form. We highly encourage you to scroll through our Facebook page Cultural, IIT Kharagpur to get a better understanding of what we do and how we contribute to the culture of the Indian Institute of Technology, Kharagpur.
          `,
            `
          Last date of submission: 28-01-2022, 11:59 PM
          `,
            `
          The best logo will become the official logo for the Social and Cultural Committee, Technology Students’ Gymkhana. The top 3 logos will be displayed on our Facebook page.
          `,
            `
          Prizes worth Rs 4,500/-
          `,
        ],
        links: [
            {
                description: "Submission Form:",
                href: "https://forms.gle/bd6AMwUY3HSp9hEZ8",
                content: "https://forms.gle/bd6AMwUY3HSp9hEZ8",
            },
            {
                description: "Rules:",
                href: "https://docs.google.com/document/d/12AIW1l83Dv8IgaEfCCfbveXrFDDHShTwQC6S5MTX7mw/edit?usp=sharing",
                content:
                    "https://docs.google.com/document/d/12AIW1l83Dv8IgaEfCCfbveXrFDDHShTwQC6S5MTX7mw/edit?usp=sharing",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Applications for the post of SECRETARY: ACADEMIC HELP",
        date: "20th January",
        poster: "",
        description: `Technology Students' Gymkhana invites applications for the post of SECRETARY: ACADEMIC HELP, Technology Students' Gymkhana for the academic session 2021-22.`,
        modalContent: "",
        content: [
            `
          Technology Students' Gymkhana invites applications for the post of SECRETARY: ACADEMIC HELP, Technology Students' Gymkhana for the academic session 2021-22.
          `,
            `
          Eligibility Criteria: Minimum Experience of 1 Academic Year in Indian Institute of Technology Kharagpur, and applicants should not be currently holding any other POR in Gymkhana.
          `,
            `
          Deadline: 20 January 2022 11:59 PM
          `,
            `
          There will be no extension of the deadline and no application will be entertained after the deadline. Applicants selected for Personal Interviews will get notified via email.
          `,
        ],
        links: [
            {
                description: "Link for Applying:",
                href: "https://forms.gle/HKUSsNTQH8z34cq78",
                content: "https://forms.gle/HKUSsNTQH8z34cq78",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Managing Emotions in Post-Placement Times",
        date: "6th January",
        poster: "/upcomingEvents/yd.png",
        description: `Do you find your mind bubbling with questions like, "What after I complete my course?", "How long before I can finally settle in my career?", "What does corporate life hold?", "Is this the right career path?"`,
        modalContent: "",
        content: [
            `
          Well, it's natural to experience such uncertainly post-placement anxiety but guess what, you don't have to deal with it alone. 

          Join us as we discover challenges associated with the 'next step' and outline strategies to deal with difficult emotions, and at the same time, have all your questions related to post-placement anxiety answered. 
          `,
        ],
        links: [
            {
                description: "Join at 5pm on Friday, 7th January 2022:",
                href: "https://us02web.zoom.us/j/84358622618",
                content: "Zoom Cloud Meetings",
            },
            {
                description: "Register using the link:",
                href: "https://docs.google.com/forms/d/e/1FAIpQLScrvNTvihn2P8c-xqnYGqmnYv8e6oppiYW4dgFYkXkD4vO8vQ/viewform",
                content: "Form Link",
            },
        ],
        isHighlight: false,
    },
    {
        title: "NCA Workshop",
        date: "4th January",
        poster: "/upcomingEvents/mworkshop.jpg",
        description: `Technology Students' Gymkhana is organizing an online video-making competition to provide a platform for the students of IIT Kharagpur to channel their inner movie-makers to deliver an important message creatively.`,
        modalContent: "",
        content: [
            `Music accents us to a divine world of pleasure. In these times of new beginnings, step into the enticing world of music with our upcoming Music Workshop. 
          Technology Students' Gymkhana Social and Cultural Committee in coordination with the Academy of Classical and Folk Arts, IIT Kharagpur, brings to you an exciting workshop on Vocal Music and Flute on 8th and 9th January 2022. The Academy of Classical and Folk Arts acknowledges the partial support of distinguished alumnus Mukund Padmanabhan through the GKF foundation for this workshop. Let this be your opportunity to discover/enhance your passion for music.`,
        ],
        links: [
            {
                description: "Register here:",
                href: "https://forms.gle/G9UEqHwP9dWgmwh5A",
                content: "https://forms.gle/G9UEqHwP9dWgmwh5A",
            },
            {
                description:
                    "Visit the website of the Academy of Classical and Folk Arts, IIT Kharagpur:",
                href: "http://www.acfa.iitkgp.ac.in/",
                content: "http://www.acfa.iitkgp.ac.in/",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Call For Projects",
        date: "3rd January",
        poster: "/upcomingEvents/cfp.jpg",
        description: `There is no greater joy nor greater reward than to make a fundamental difference in someone’s life. – Mary Rose McGeady`,
        modalContent: "",
        content: [
            `Upholding the motto and values of selfless service, Student’s Welfare Committee presents a noble initiative wherein NSS and other interested students will volunteer to work with NGOs on their varied projects for social welfare.
          Through this we intent to emphasize the spirit of “ Not me But you" while providing a platform for the students and NGOs to collaborate for social growth, through a tremendously fulfilling and rewarding experience. 
          We invite all the NGOs with their social projects to partner with us in this incredible opportunity to bring about a social change.`,
        ],
        links: [
            {
                description: "Link to submit Project Details:",
                href: "https://forms.gle/71axBULAaZ9DtiKMA",
                content: "https://forms.gle/71axBULAaZ9DtiKMA",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Website Hackathon",
        date: "30th November",
        poster: "/web-hack.jpg",
        description: `September is here and some students are coming back to campus. This brings with it the possibility of an outbreak and hence adhering to Covid protocols is of paramount importance. To protect our community, it is required that each one of us is well aware of the rules and regulations set in place. Incoming students will have to quarantine for a minimum duration of one week. Students are advised not to leave their rooms unnecessarily, wear masks and maintain social distancing.`,
        modalContent: "",
        content: [
            `Technology Students' Gymkhana is delighted to organise the WEBSITE HACKATHON. Encompass all your technical and creative skills to develop the website.
          So, team up with your mates and put your development skills to test to grab exciting prizes.

          Fill in the details of your team and team members in the form below.
          We request only one submission from each team.`,
        ],
        links: [
            {
                description: "The problem statement for all of you:",
                href: "https://drive.google.com/file/d/1Hmfomj7pa0o8AZonzxC0O0GNTPU0PjgW/view?fbclid=IwAR03YzXW27UnzADXOXa9tQCZxjhjgO0S5_o1oNDVT9ItYpQTR8u0VMLwH8k",
                content: "Click Here",
            },
            {
                description: "Participants may refer to the given sample data:",
                href: "https://drive.google.com/drive/folders/1YZM_UcEd1qKghf6cIPAVS4WUntADpjH7?fbclid=IwAR0Z7xBzP4UAM3vXCKeB9f2iA0ItgyUfefM83Zh_9q14HuW7rWej3HnvXms",
                content: "Click Here",
            },
            {
                description: "Team Registration form:",
                href: "https://forms.gle/BxUaz1Hcb5aTdZ5i6",
                content: "Click Here",
            },
            {
                description: "The rules and guidelines:",
                href: "https://drive.google.com/file/d/1HzuFHcHMvmCT9K85GZYir-1YriCjTQDZ/view?fbclid=IwAR1eI8OkBv6k3mlxlHjdc-OeczHIxP6Jadk0ZRGZ80fvoJv8VzvahRpc7yI",
                content: "Click Here",
            },
            {
                description: "Query Form:",
                href: "https://forms.gle/KSMPy1aSEovytzNX8",
                content: "Click Here",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Pets' Week",
        date: "28th September",
        poster: "/pw.png",
        description: `This World Animals’ Day, Students’ Welfare Committee, Technology Students’
      Gymkhana, gives you an opportunity to express your gratitude and heartfelt love
      towards them by participating in Pets’ Week, 2021 with prizes and gifts worth INR
      10,000 !!`,
        modalContent: "",
        content: [
            `“Until one has loved an animal, a part of one's soul remains unawakened.” --- Anatole
          France, French Poet.
          There’s nothing like the unconditional love of a pet. They show you affection, give you a
          sense of purpose, and greet you every day when you come home. They’re lifelong best
          friends who are always there by your side.
          This World Animals’ Day, Students’ Welfare Committee, Technology Students’
          Gymkhana, gives you an opportunity to express your gratitude and heartfelt love
          towards them by participating in Pets’ Week, 2021 with prizes and gifts worth INR
          10,000 !!`,
            `For additional details contact: Aditri Vaibhav (+91 8789617065 | aaditri.vaibhav@gmail.com )`,
        ],
        links: [
            {
                description: "Register here:",
                href: "https://docs.google.com/forms/d/e/1FAIpQLSdpA3ObUAhBJqcyaczg0bzuRgMLYnQs_t3LwNgt2D0P-tymyA/viewform",
                content: "form-link",
            },
            {
                description: "Rules and regulations are available here:",
                href: "/events/pw-rules-and-regulations.pdf",
                content:
                    "https://gymkhana.iitkgp.ac.in/events/pw-rules-and-regulations.pdf",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Covid-19 Awareness Video making Competition",
        date: "15th September",
        poster: "/covid19.png",
        description: `Technology Students' Gymkhana is organizing an online video-making competition to provide a platform for the students of IIT Kharagpur to channel their inner movie-makers to deliver an important message creatively.`,
        modalContent: "",
        content: [
            `Technology Students’ Gymkhana is organizing an online video-making competition to provide a platform for the students of IIT Kharagpur to channel their inner movie-makers to deliver an important message creatively. They will not only get the opportunity to showcase their video-making skills but also raise awareness about the current scenario of rising cases and ensure that the necessary protocols will be followed if students are called back to campus. The top 3 winners will also receive exciting cash prizes. \n
          The deadline for registration is 5th September, 11:59 PM. 
          Guidelines regarding the submission will be emailed to those who register through the aforementioned form.
          The deadline for the submission is 15th September, 11:59 pm.`,
        ],
        links: [
            {
                description: "Rules for the Competition are:",
                href: "https://docs.google.com/document/d/1CEGbO5mcqKhCwwwgLYozL8FbjhF2P8TtSIt4DeL-akE/edit?usp=sharing",
                content:
                    "https://docs.google.com/document/d/1CEGbO5mcqKhCwwwgLYozL8FbjhF2P8TtSIt4DeL-akE/edit?usp=sharing",
            },
            {
                description:
                    "Prior Registration is required, link for the registration:",
                href: "https://forms.gle/PaG1y3Swdfg31uVB6",
                content: "https://forms.gle/PaG1y3Swdfg31uVB6",
            },
        ],
        isHighlight: false,
    },
    {
        title: "Monthly Art Challenge: PAINT-DEMIC",
        date: "30th September",
        poster: "/paint-demic.jpg",
        description: `September is here and some students are coming back to campus. This brings with it the possibility of an outbreak and hence adhering to Covid protocols is of paramount importance. To protect our community, it is required that each one of us is well aware of the rules and regulations set in place. Incoming students will have to quarantine for a minimum duration of one week. Students are advised not to leave their rooms unnecessarily, wear masks and maintain social distancing.`,
        modalContent: "",
        content: [
            `September is here and some students are coming back to campus. This brings with it the possibility of an outbreak and hence adhering to Covid protocols is of paramount importance. To protect our community, it is required that each one of us is well aware of the rules and regulations set in place. Incoming students will have to quarantine for a minimum duration of one week. Students are advised not to leave their rooms unnecessarily, wear masks and maintain social distancing.

          To share this message, Technology Students’ Gymkhana has collaborated with Spectra to bring forward this awareness campaign. Art is captivating and has the potential to be infinitely memorable. The monthly art prompt for September is ‘Paint-demic’ with the purpose of using art to support the well being of our student community.
          
          We are looking for artworks depicting the importance of the Covid protocols, the dangers of the virus or healthy habits amidst a pandemic. The most creative artworks will be put up at various locations on campus to invigorate the spirits of students staying there and spread awareness regarding the rules set in place. The best artworks would be displayed by Gymkhana on Facebook.
          
          All sorts of artworks are appreciated, paintings, digital or traditional, sketches, posters, comics etc. Use any medium of your choice.
          Good luck to all the participants!
          Stay safe everyone!`,
        ],
        links: [
            {
                description: "Rules are available here:",
                href: "https://docs.google.com/document/d/1-0VHjfGnvaUcXcoZSrqz5a3HbZVAl4JDGu7BUp8NaxU/edit",
                content:
                    "https://docs.google.com/document/d/1-0VHjfGnvaUcXcoZSrqz5a3HbZVAl4JDGu7BUp8NaxU/edit",
            },
            {
                description: "Please submit your artworks here at:",
                href: "https://docs.google.com/forms/d/e/1FAIpQLSfB6mZ3T7WrQrgXLMPy_YmVeau87INZIU-Gmd3bW62w1XxX2w/viewform?usp=sf_link",
                content:
                    "https://docs.google.com/forms/d/e/1FAIpQLSfB6mZ3T7WrQrgXLMPy_YmVeau87INZIU-Gmd3bW62w1XxX2w/viewform?usp=sf_link",
            },
        ],
        isHighlight: false,
    },
];
export default eventsData;
