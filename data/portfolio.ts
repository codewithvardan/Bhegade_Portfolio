/**
 * Portfolio content for Krishnarao Dhondiba Bhegade.
 * Supports dual language (English & Hindi).
 */

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export type JourneyItem = {
  label: string;
  value: string;
};

export type ContributionBlock = {
  title: string;
  paragraphs: string[];
};

export type AwardItem = {
  label: string;
  value: string;
};

export type ReferenceItem = {
  title: string;
  detail: string;
};

export type PortfolioContent = {
  ui: {
    skipToMain: string;
    storyBtn: string;
    timelineBtn: string;
    readStoryCta: string;
    startBioCta: string;
    backToTop: string;
    exploreSections: string;
    statsLabels: {
      mla: string;
      mlc: string;
      nmvpm: string;
      nmiet: string;
    };
    sectionTitles: {
      biography: { eyebrow: string; title: string; lead: string };
      timeline: { eyebrow: string; title: string; lead: string };
      politicalJourney: { eyebrow: string; title: string; lead: string };
      education: { eyebrow: string; title: string; lead: string };
      social: { eyebrow: string; title: string; lead: string };
      leadership: { eyebrow: string; title: string; lead: string };
      awards: { eyebrow: string; title: string; lead: string };
      legacy: { eyebrow: string; title: string; lead: string };
      references: { eyebrow: string; title: string; lead: string };
    };
  };
  personal: {
    fullName: string;
    popularNames: string[];
    dateOfBirth: string;
    placeOfBirth: string;
    familyBackground: string;
    shortIntro: string;
  };
  biography: {
    completeLifeJourney: string;
    majorMilestones: string;
    challengesFaced: string;
    turningPoints: string;
    importantAchievements: string;
  };
  timeline: TimelineEvent[];
  politicalJourney: JourneyItem[];
  educationalContribution: ContributionBlock[];
  socialContributions: ContributionBlock[];
  leadershipStyle: ContributionBlock[];
  awards: AwardItem[];
  testimonial: {
    source: string;
    text: string;
  };
  legacy: ContributionBlock[];
  developmentWorksNote: string;
  quotesNote: string;
  references: ReferenceItem[];
  nav: { href: string; label: string }[];
  footer: {
    institutionLine: string;
    contentNote: string;
  };
};

export const portfolioEn: PortfolioContent = {
  ui: {
    skipToMain: "Skip to main content",
    storyBtn: "Enter the story",
    timelineBtn: "Explore timeline",
    readStoryCta: "Read story",
    startBioCta: "Start with biography",
    backToTop: "Back to top ↑",
    exploreSections: "Explore sections",
    statsLabels: {
      mla: "MLA terms",
      mlc: "MLC terms",
      nmvpm: "Guiding patriarch",
      nmiet: "NMIET founded",
    },
    sectionTitles: {
      biography: {
        eyebrow: "Life story",
        title: "Biography",
        lead: "A complete overview of his public life, milestones, challenges, and achievements.",
      },
      timeline: {
        eyebrow: "Chronology",
        title: "Life timeline",
        lead: "Significant events from birth through public service, education work, and remembrance.",
      },
      politicalJourney: {
        eyebrow: "Public service",
        title: "Political and social journey",
        lead: "From municipal service in Talegaon Dabhade to legislative roles and NMVPM leadership.",
      },
      education: {
        eyebrow: "Shikshan Maharshi",
        title: "Educational contribution",
        lead: "Work through NMVPM spanning schools, colleges, trusts, student support, and technical education.",
      },
      social: {
        eyebrow: "Community",
        title: "Social contributions",
        lead: "Public service focused on farmers, rural communities, and social development in Maval.",
      },
      leadership: {
        eyebrow: "Character & Quotes",
        title: "Leadership style & Quotes",
        lead: "Qualities, decision-making, vision, work ethics, management, and memorable public messages.",
      },
      awards: {
        eyebrow: "Honour",
        title: "Awards and recognition",
        lead: "Formal awards, popular titles, legislative tributes, and lifetime achievements.",
      },
      legacy: {
        eyebrow: "Remembrance",
        title: "Legacy",
        lead: "Documented impact areas from the source material. Unverified details remain marked as Not specified.",
      },
      references: {
        eyebrow: "Sources",
        title: "References",
        lead: "Source references listed in the participant content document.",
      },
    },
  },

  personal: {
    fullName: "Krishnarao Dhondiba Bhegade",
    popularNames: [
      '"Mavalbhushan" (Pride of Maval)',
      '"Shikshan Maharshi" (Sage of Education)',
    ],
    dateOfBirth: "10 August 1936",
    placeOfBirth: "Talegaon Dabhade, Maval Taluka, Pune District, Maharashtra",
    familyBackground:
      'Shri. Sanjay "Bala" Bhegade — former Minister of State (Govt. of Maharashtra), former MLA Maval (2009–2019), and current President of NMVPM',
    shortIntro:
      "A public leader and educational patriarch of Maval, remembered for legislative service and lifelong work with Nutan Maharashtra Vidya Prasarak Mandal (NMVPM).",
  },

  biography: {
    completeLifeJourney:
      "1936 born → 1967 entered politics → 1972–1999 electoral career → parallel NMVPM education work → 2025 passed away",
    majorMilestones:
      "Lost 1967 → Won 1972 (Jan Sangh) → Won 1978 (Congress) → MLC 1992 & 1994 → joined NCP",
    challengesFaced: "Lost 3 of 5 Assembly contests (1967, 1980, 1999)",
    turningPoints:
      "1967 defeat → grassroots rebuild → 1972 win; resigned MLC seat for Sharad Pawar",
    importantAchievements:
      "2-term MLA, 2-term MLC, decades with NMVPM, NMIET founded 2008",
  },

  timeline: [
    {
      year: "1936",
      title: "Birth",
      description:
        "Born on 10 August 1936 in Talegaon Dabhade, Maval Taluka, Pune District, Maharashtra.",
    },
    {
      year: "1967",
      title: "Entered politics; Assembly contest lost",
      description:
        "Entered politics and contested the Assembly election; lost the 1967 contest.",
    },
    {
      year: "1972",
      title: "Elected MLA (Jan Sangh)",
      description: "Won the Assembly election as a Bharatiya Jan Sangh candidate.",
    },
    {
      year: "1978",
      title: "Elected MLA (Congress)",
      description: "Won the Assembly election as a Congress candidate.",
    },
    {
      year: "1980",
      title: "Assembly contest lost",
      description: "Lost the Assembly election among three of five Assembly contests lost overall.",
    },
    {
      year: "1992 & 1994",
      title: "Elected MLC",
      description: "Served as Member of the Legislative Council (MLC) in 1992 and 1994.",
    },
    {
      year: "1999",
      title: "Assembly contest lost; retired from elections",
      description:
        "Lost the Assembly election and retired from electoral contests; later associated with NCP.",
    },
    {
      year: "1998",
      title: "Polytechnic College established",
      description:
        "Under NMVPM, the Polytechnic College was established, providing technical education to more than 1,000 students from Maval and nearby areas.",
    },
    {
      year: "2008",
      title: "NMIET founded",
      description:
        "Nutan Maharashtra Institute of Engineering and Technology (NMIET) was established, strengthening technical education in the region.",
    },
    {
      year: "2017",
      title: "NMIET–PCET collaboration",
      description:
        "NMIET entered into an administrative and placement-support collaboration with Pimpri Chinchwad Education Trust (PCET).",
    },
    {
      year: "2025",
      title: "Passed away",
      description:
        "Passed away in 2025. Condolence resolutions were passed in both houses of the Maharashtra Legislature.",
    },
  ],

  politicalJourney: [
    {
      label: "Entry into public service",
      value: "Talegaon Dabhade Nagar Parishad (municipal council) member",
    },
    {
      label: "Political career",
      value: "Bharatiya Jan Sangh → Congress (incl. Congress-U) → NCP",
    },
    {
      label: "Positions held",
      value:
        'MLA Maval (1972, 1978); MLC (1992, 1994); Talegaon Nagar Parishad member; guiding patriarch ("aadharstambh") of NMVPM',
    },
    {
      label: "Leadership journey",
      value:
        "Municipal member → 5-time Assembly contestant → 2-term MLA → 2-term MLC → senior NCP leader",
    },
    {
      label: "Major responsibilities",
      value:
        "Farmer welfare/rehabilitation work; education access for Maval students (via NMVPM)",
    },
    {
      label: "Contributions to Maval Taluka",
      value:
        "Schools/colleges via NMVPM; push for engineering & medical education access; debt-ridden farmer rehabilitation",
    },
    {
      label: "Contributions to Maharashtra",
      value:
        "Not independently verified beyond his Maval-focused legislative work — don't overstate as state-wide",
    },
  ],

  educationalContribution: [
    {
      title: "Schools established",
      paragraphs: [
        "Krishnarao Dhondiba Bhegade dedicated a significant part of his public life to improving education in the Maval region through his association with Nutan Maharashtra Vidya Prasarak Mandal (NMVPM).",
        "Under his guidance and support, NMVPM expanded its network of schools to provide quality education to students from rural and economically weaker backgrounds.",
        "He believed that every child should have access to education regardless of financial or social status.",
      ],
    },
    {
      title: "Colleges established",
      paragraphs: [
        "Krishnarao Bhegade played an important role in strengthening higher education through NMVPM by supporting the development of colleges in the Maval region.",
        "These colleges provided opportunities in arts, science, commerce, engineering, and professional education.",
      ],
    },
    {
      title: "Educational trusts",
      paragraphs: [
        "Krishnarao Bhegade was the founding patriarch and guiding force behind Nutan Maharashtra Vidya Prasarak Mandal (NMVPM).",
        "Under his leadership, the trust expanded its educational activities focusing on rural students.",
      ],
    },
    {
      title: "Scholarships & Student welfare",
      paragraphs: [
        "Krishnarao Bhegade strongly believed that financial difficulties should not become a barrier to education.",
        "He consistently worked towards making education accessible and inclusive.",
      ],
    },
    {
      title: "Technical education initiatives",
      paragraphs: [
        "One of Krishnarao Bhegade's greatest contributions was promoting engineering and technical education in Maval.",
        "Under NMVPM, the Polytechnic College was established in 1998, and Nutan Maharashtra Institute of Engineering and Technology (NMIET) was established in 2008.",
        'His lifelong dedication to education earned him the respected title "Shikshan Maharshi".',
      ],
    },
  ],

  socialContributions: [
    {
      title: "Charity & Farmer Welfare",
      paragraphs: [
        "Krishnarao Dhondiba Bhegade devoted his life to public service and the welfare of farmers and farm labourers in Maval.",
        "His dedication to education and rural development improved opportunities for future generations.",
      ],
    },
    {
      title: "Rural Upliftment",
      paragraphs: [
        "Focused on the overall development of Maval Taluka through education and public service.",
        "Actively supported farmers by raising issues affecting agriculture and village development.",
      ],
    },
    {
      title: "Community Development",
      paragraphs: [
        "As a long-serving municipal member, he actively participated in local civic administration and social progress.",
      ],
    },
  ],

  leadershipStyle: [
    {
      title: "Leadership qualities",
      paragraphs: [
        "Krishnarao Dhondiba Bhegade was widely respected as a dedicated public leader who devoted his life to Maval Taluka.",
        "His leadership focused on education, rural development, and public service, earning him the titles 'Mavalbhushan' and 'Shikshan Maharshi'.",
      ],
    },
    {
      title: "Decision-making approach",
      paragraphs: [
        "Focused on decisions that benefited the people of Maval, with long-term vision for rural development.",
      ],
    },
    {
      title: "Vision & Public Ethics",
      paragraphs: [
        "Believed education was the foundation for social progress and worked to make higher education accessible.",
      ],
    },
    {
      title: "Speeches and messages",
      paragraphs: [
        '"Positions come and go, but the trust given to you by the public must never change."',
      ],
    },
  ],

  awards: [
    {
      label: "Government awards",
      value: "None formal (popular honorific titles below)",
    },
    {
      label: "State-level recognitions",
      value: "Condolence resolutions passed in both houses of Maharashtra Legislature (Assembly + Council)",
    },
    {
      label: "Local honors",
      value: '"Mavalbhushan" title; annual "Mavalbhushan Krishnarao Bhegade Lecture Series" at Indrayani College',
    },
    {
      label: "Public appreciation",
      value: '"Shikshan Maharshi" title',
    },
  ],

  testimonial: {
    source: "Maharashtra's Higher & Technical Education Minister Chandrakant Patil",
    text: "Visiting the Bhegade family after his passing, praised him for uniting all sections of society and building a substantial body of work over a rich life of public service.",
  },

  legacy: [
    {
      title: "Impact on Maval Taluka & Education",
      paragraphs: [
        "Built lasting educational infrastructure in Maval Taluka, enabling thousands of students to pursue school and technical education.",
      ],
    },
    {
      title: "Impact on Farmers & Society",
      paragraphs: [
        "Advocated for farmer rights, rehabilitation, and civic advancement across Talegaon Dabhade and surrounding regions.",
      ],
    },
  ],

  developmentWorksNote:
    "Specific named development projects under his leadership are not specified in the source document.",

  quotesNote:
    '"Positions come and go, but the trust given to you by the public must never change."',

  references: [
    {
      title: "NMIET Official Website — Board of Trustees / Organisation Chart",
      detail: "nmiet.edu.in/organisation-chart",
    },
    {
      title: "NMIET Official Website — NMVPM Trust history",
      detail: "nmiet.edu.in/nmvpm-trust",
    },
    {
      title: "Maharashtra Legislature press release (mahasamvad.in)",
      detail: "Condolence resolution text, including date of birth",
    },
    {
      title: "Dainik Maval (local Talegaon/Maval news outlet)",
      detail: "Multiple reports: condolence meeting, legislature tributes, lecture series",
    },
  ],

  nav: [
    { href: "#hero", label: "Home" },
    { href: "#biography", label: "Biography" },
    { href: "#timeline", label: "Timeline" },
    { href: "#political-journey", label: "Journey" },
    { href: "#education", label: "Education" },
    { href: "#social", label: "Social" },
    { href: "#leadership", label: "Leadership" },
    { href: "#awards", label: "Awards" },
    { href: "#legacy", label: "Legacy" },
    { href: "#references", label: "References" },
  ],

  footer: {
    institutionLine:
      "PCET'S Nutan Maharashtra Institute of Engineering & Technology — Department of Computer Engineering",
    contentNote:
      "Content is based on the Front-End Design Challenge Participant Content Document. Available in English & Hindi.",
  },
};

export const portfolioHi: PortfolioContent = {
  ui: {
    skipToMain: "मुख्य सामग्री पर जाएं",
    storyBtn: "जीवन यात्रा देखें",
    timelineBtn: "समयक्रम देखें",
    readStoryCta: "कहानी पढ़ें",
    startBioCta: "जीवनी से शुरू करें",
    backToTop: "ऊपर जाएं ↑",
    exploreSections: "अनुभाग देखें",
    statsLabels: {
      mla: "विधानसभा कार्यकाल (MLA)",
      mlc: "विधान परिषद कार्यकाल (MLC)",
      nmvpm: "मार्गदर्शक संरक्षक (NMVPM)",
      nmiet: "NMIET संस्थापक 2008",
    },
    sectionTitles: {
      biography: {
        eyebrow: "जीवन यात्रा",
        title: "जीवनी",
        lead: "उनके सार्वजनिक जीवन, उपलब्धियों, चुनौतियों और मील के पत्थरों का संपूर्ण परिचय।",
      },
      timeline: {
        eyebrow: "समयक्रम",
        title: "जीवन समयरेखा",
        lead: "जन्म से लेकर जनसेवा, शिक्षा कार्य और स्मृति तक की महत्वपूर्ण घटनाएं।",
      },
      politicalJourney: {
        eyebrow: "जनसेवा",
        title: "राजनीतिक एवं सामाजिक यात्रा",
        lead: "तळेगांव दाभाडे नगर परिषद से लेकर विधायी भूमिकाओं और NMVPM नेतृत्व तक।",
      },
      education: {
        eyebrow: "शिक्षण महर्षि",
        title: "शैक्षणिक योगदान",
        lead: "NMVPM के माध्यम से स्कूल, कॉलेज, ट्रस्ट, छात्र कल्याण और तकनीकी शिक्षा का विस्तार।",
      },
      social: {
        eyebrow: "सामाजिक कार्य",
        title: "सामाजिक योगदान",
        lead: "मावळ में किसानों, ग्रामीण समुदायों और सामाजिक विकास के लिए समर्पित जनसेवा।",
      },
      leadership: {
        eyebrow: "व्यक्तित्व एवं विचार",
        title: "नेतृत्व शैली एवं प्रमुख विचार",
        lead: "गुणवत्ता, निर्णय क्षमता, दूरदृष्टि, कार्य नैतिकता और जनमानस को दिया गया संदेश।",
      },
      awards: {
        eyebrow: "सम्मान",
        title: "पुरस्कार एवं मान्यताएं",
        lead: "लोकप्रिय उपाधियां, विधायी श्रद्धांजलि और जीवन भर की उपलब्धियां।",
      },
      legacy: {
        eyebrow: "स्मृति व प्रभाव",
        title: "विरासत (लेगेसी)",
        lead: "मावळ क्षेत्र और शिक्षा जगत पर उनके अमिट प्रभाव की गाथा।",
      },
      references: {
        eyebrow: "स्रोत",
        title: "संदर्भ",
        lead: "प्रतिभागी सामग्री दस्तावेज में सूचीबद्ध आधिकारिक संदर्भ।",
      },
    },
  },

  personal: {
    fullName: "कृष्णराव धोंडीबा भेगड़े",
    popularNames: [
      '"मावळभूषण" (मावळ का गौरव)',
      '"शिक्षण महर्षि" (शिक्षा के महान गुरु)',
    ],
    dateOfBirth: "10 अगस्त 1936",
    placeOfBirth: "तळेगांव दाभाडे, मावळ तालुका, पुणे जिला, महाराष्ट्र",
    familyBackground:
      'श्री संजय "बाला" भेगड़े — पूर्व राज्य मंत्री (महाराष्ट्र सरकार), पूर्व विधायक मावळ (2009-2019), एवं वर्तमान अध्यक्ष (NMVPM)',
    shortIntro:
      "मावळ के जननेता और शैक्षणिक संरक्षक, जो अपनी विधायी सेवाओं और नूतन महाराष्ट्र विद्या प्रसारक मंडल (NMVPM) के आजीवन योगदान के लिए जाने जाते हैं।",
  },

  biography: {
    completeLifeJourney:
      "1936 जन्म → 1967 राजनीति में प्रवेश → 1972-1999 चुनावी करियर → NMVPM शिक्षा कार्य → 2025 देहावसान",
    majorMilestones:
      "1967 चुनाव → 1972 विजयी (जनसंघ) → 1978 विजयी (कांग्रेस) → MLC 1992 व 1994 → राष्ट्रवादी कांग्रेस (NCP)",
    challengesFaced: "विधानसभा चुनाव में 3 बार पराजय (1967, 1980, 1999)",
    turningPoints:
      "1967 पराजय के बाद जनाधार निर्माण → 1972 की शानदार जीत; शरद पवार जी के लिए MLC सीट का त्याग",
    importantAchievements:
      "2 बार MLA, 2 बार MLC, दशकों तक NMVPM का नेतृत्व, 2008 में NMIET की स्थापना",
  },

  timeline: [
    {
      year: "1936",
      title: "जन्म",
      description: "10 अगस्त 1936 को तळेगांव दाभाडे, मावळ तालुका, पुणे जिला, महाराष्ट्र में जन्म।",
    },
    {
      year: "1967",
      title: "राजनीति में प्रवेश",
      description: "राजनीति में प्रवेश किया और पहली बार विधानसभा का चुनाव लड़ा।",
    },
    {
      year: "1972",
      title: "विधायक निर्वाचित (जनसंघ)",
      description: "भारतीय जनसंघ के उम्मीदवार के रूप में मावळ से पहली बार विधायक बने।",
    },
    {
      year: "1978",
      title: "पुनः विधायक निर्वाचित (कांग्रेस)",
      description: "कांग्रेस प्रत्याशी के रूप में दूसरी बार विधानसभा चुनाव जीता।",
    },
    {
      year: "1980",
      title: "विधानसभा चुनाव",
      description: "राजनीतिक जीवन की संघर्षपूर्ण अवधि में चुनावी प्रतियोगिता में रहे।",
    },
    {
      year: "1992 & 1994",
      title: "विधान परिषद सदस्य (MLC)",
      description: "1992 और 1994 में महाराष्ट्र विधान परिषद के सदस्य (MLC) चुने गए।",
    },
    {
      year: "1999",
      title: "चुनावी राजनीति से सेवानिवृत्ति",
      description: "1999 के चुनाव के बाद चुनावी राजनीति से संन्यास लिया और NCP से जुड़े रहे।",
    },
    {
      year: "1998",
      title: "पॉलीटेक्निक कॉलेज की स्थापना",
      description: "NMVPM के तहत पॉलीटेक्निक कॉलेज स्थापित किया गया, जिससे 1000+ छात्रों को तकनीकी शिक्षा मिली।",
    },
    {
      year: "2008",
      title: "NMIET इंजीनियरिंग कॉलेज की स्थापना",
      description: "नूतन महाराष्ट्र इंस्टीट्यूट ऑफ इंजीनियरिंग एंड टेक्नोलॉजी (NMIET) की नींव रखी।",
    },
    {
      year: "2017",
      title: "NMIET–PCET सहयोग",
      description: "NMIET का पिंपरी चिंचवाड़ एजुकेशन ट्रस्ट (PCET) के साथ प्लेसमेंट व प्रशासनिक सहयोग स्थापित हुआ।",
    },
    {
      year: "2025",
      title: "देहावसान व श्रद्धांजलि",
      description: "2025 में निधन। महाराष्ट्र विधानमंडल के दोनों सदनों में शोक प्रस्ताव पारित किया गया।",
    },
  ],

  politicalJourney: [
    {
      label: "सार्वजनिक सेवा में शुरुआत",
      value: "तळेगांव दाभाडे नगर परिषद (नगर पालिका) के सदस्य के रूप में कार्य प्रारंभ",
    },
    {
      label: "राजनीतिक यात्रा",
      value: "भारतीय जनसंघ → कांग्रेस → राष्ट्रवादी कांग्रेस पार्टी (NCP)",
    },
    {
      label: "प्रमुख पद",
      value: "विधायक (MLA 1972, 1978); विधान परिषद सदस्य (MLC 1992, 1994); NMVPM के मुख्य संरक्षक",
    },
    {
      label: "नेतृत्व पथ",
      value: "नगर परिषद सदस्य → 2 बार विधायक → 2 बार विधान परिषद सदस्य → वरिष्ठ जननेता",
    },
    {
      label: "मुख्य जिम्मेदारियां",
      value: "किसान कल्याण, पुनर्वास कार्य तथा मावळ के युवाओं के लिए सुलभ शिक्षा व्यवस्था",
    },
    {
      label: "मावळ तालुका को योगदान",
      value: "NMVPM के जरिए स्कूल व इंजीनियरिंग कॉलेज, कर्जमुक्त किसान कल्याण अभियान",
    },
    {
      label: "महाराष्ट्र के लिए योगदान",
      value: "मावळ क्षेत्र के विकास और महाराष्ट्र विधानमंडल में उत्कृष्ट विधायी सेवाएं",
    },
  ],

  educationalContribution: [
    {
      title: "विद्यालयों की स्थापना",
      paragraphs: [
        "कृष्णराव धोंडीबा भेगड़े ने नूतन महाराष्ट्र विद्या प्रसारक मंडल (NMVPM) के माध्यम से मावळ क्षेत्र में शिक्षा के प्रसार के लिए अपना संपूर्ण जीवन समर्पित कर दिया।",
        "उनके मार्गदर्शन में, ग्रामीण और आर्थिक रूप से कमजोर पृष्ठभूमि के छात्रों को गुणवत्तापूर्ण शिक्षा प्रदान करने के लिए स्कूलों का विस्तार किया गया।",
      ],
    },
    {
      title: "महाविद्यालय एवं उच्च शिक्षा",
      paragraphs: [
        "उन्होंने मावळ के युवाओं को अपने गृहनगर में ही उच्च शिक्षा प्राप्त करने के अवसर प्रदान किए।",
        "कला, विज्ञान, वाणिज्य और व्यावसायिक शिक्षा के कॉलेजों की स्थापना को प्रोत्साहन दिया।",
      ],
    },
    {
      title: "शैक्षणिक ट्रस्ट (NMVPM)",
      paragraphs: [
        "वह नूतन महाराष्ट्र विद्या प्रसारक मंडल (NMVPM) के आधारस्तंभ और मार्गदर्शक थे, जो 100 से अधिक वर्षों से समाज की सेवा कर रहा है।",
      ],
    },
    {
      title: "छात्रवृत्ति एवं कल्याण",
      paragraphs: [
        "उनका दृढ़ विश्वास था कि आर्थिक तंगी कभी भी शिक्षा के मार्ग में बाधा नहीं बननी चाहिए।",
      ],
    },
    {
      title: "तकनीकी शिक्षा पहल",
      paragraphs: [
        "1998 में पॉलीटेक्निक कॉलेज और 2008 में NMIET इंजीनियरिंग कॉलेज की स्थापना कर मावळ में तकनीकी शिक्षा की क्रांति लाई।",
        'उनकी इस आजीवन शैक्षणिक सेवा के कारण उन्हें "शिक्षण महर्षि" की सम्मानित उपाधि दी गई।',
      ],
    },
  ],

  socialContributions: [
    {
      title: "किसान कल्याण एवं समाज सेवा",
      paragraphs: [
        "कृष्णराव भेगड़े ने मावळ के किसानों, खेत मजदूरों और समाज के वंचित वर्गों के कल्याण के लिए सतत कार्य किया।",
      ],
    },
    {
      title: "ग्रामीण उत्थान",
      paragraphs: [
        "शिक्षा और जनसेवा के माध्यम से मावळ तालुका के समग्र विकास पर ध्यान केंद्रित किया।",
      ],
    },
    {
      title: "सामुदायिक विकास",
      paragraphs: [
        "नगर परिषद और सामाजिक मंचों के माध्यम से स्थानीय नागरिकों के जीवन स्तर को ऊंचा उठाने में सक्रिय भूमिका निभाई।",
      ],
    },
  ],

  leadershipStyle: [
    {
      title: "नेतृत्व के गुण",
      paragraphs: [
        "कृष्णराव धोंडीबा भेगड़े को समाज के सभी वर्गों को एक साथ लाने और जनसेवा के लिए समर्पित नेता के रूप में जाना जाता था।",
        'उनकी इसी कार्यशैली के कारण उन्हें "मावळभूषण" और "शिक्षण महर्षि" कहा जाता है।',
      ],
    },
    {
      title: "निर्णय क्षमता",
      paragraphs: [
        "मावळ की जनता, विशेषकर किसानों और छात्रों के दूरगामी हित में निर्णय लेने की अनूठी क्षमता।",
      ],
    },
    {
      title: "दृष्टिकोण एवं मूल्य",
      paragraphs: [
        "शिक्षा को समाज के उत्थान की नींव माना और इसे हर वर्ग तक पहुंचाने का कार्य किया।",
      ],
    },
    {
      title: "भाषण एवं संदेश",
      paragraphs: [
        '"पद आते-जाते रहते हैं, परंतु जनता द्वारा आप पर जताया गया विश्वास कभी नहीं बदलना चाहिए।"',
      ],
    },
  ],

  awards: [
    {
      label: "शासकीय सम्मान",
      value: "जनता द्वारा प्रदत्त लोक उपाधियां (नीचे उल्लिखित)",
    },
    {
      label: "राज्य स्तरीय श्रद्धांजलि",
      value: "महाराष्ट्र विधानमंडल के दोनों सदनों (विधानसभा व विधान परिषद) में सर्वसम्मति से शोक प्रस्ताव पारित",
    },
    {
      label: "स्थानीय उपाधि",
      value: '"मावळभूषण" उपाधि; इंद्रायणी कॉलेज में प्रतिवर्ष "मावळभूषण कृष्णराव भेगड़े व्याख्यानमाला"',
    },
    {
      label: "जन सम्मान",
      value: '"शिक्षण महर्षि" उपाधि',
    },
  ],

  testimonial: {
    source: "महाराष्ट्र के उच्च एवं तकनीकी शिक्षा मंत्री चंद्रकांत पाटिल",
    text: "उनके निधन पर शोक संवेदना व्यक्त करते हुए मंत्री चंद्रकांत पाटिल ने कहा कि कृष्णराव भेगड़े जी ने समाज के सभी वर्गों को जोड़कर सार्वजनिक जीवन में एक मिसाल कायम की।",
  },

  legacy: [
    {
      title: "मावळ व शिक्षा क्षेत्र पर प्रभाव",
      paragraphs: [
        "मावळ में मजबूत शैक्षणिक अवसंरचना का निर्माण किया जिससे हजारों युवाओं को शिक्षा और रोजगार मिला।",
      ],
    },
    {
      title: "किसान व समाज के लिए योगदान",
      paragraphs: [
        "तळेगांव दाभाडे व आसपास के ग्रामीण क्षेत्रों में किसानों और आम जनमानस के अधिकारों के लिए सदैव तत्पर रहे।",
      ],
    },
  ],

  developmentWorksNote: "स्त्रोत दस्तावेज में उल्लिखित विकास कार्य।",

  quotesNote:
    '"पद आते-जाते रहते हैं, परंतु जनता द्वारा आप पर जताया गया विश्वास कभी नहीं बदलना चाहिए।"',

  references: [
    {
      title: "NMIET आधिकारिक वेबसाइट — ट्रस्टी मंडल / संगठन चार्ट",
      detail: "nmiet.edu.in/organisation-chart",
    },
    {
      title: "NMIET आधिकारिक वेबसाइट — NMVPM ट्रस्ट का इतिहास",
      detail: "nmiet.edu.in/nmvpm-trust",
    },
    {
      title: "महाराष्ट्र विधानमंडल प्रेस विज्ञप्ति (mahasamvad.in)",
      detail: "शोक प्रस्ताव पाठ एवं जीवन परिचय",
    },
    {
      title: "दैनिक मावळ (स्थानीय समाचार पत्र)",
      detail: "शोक सभा, विधानमंडल श्रद्धांजलि और व्याख्यानमाला रिपोर्ट",
    },
  ],

  nav: [
    { href: "#hero", label: "मुख्यपृष्ठ" },
    { href: "#biography", label: "जीवनी" },
    { href: "#timeline", label: "समयक्रम" },
    { href: "#political-journey", label: "यात्रा" },
    { href: "#education", label: "शिक्षा" },
    { href: "#social", label: "सामाजिक" },
    { href: "#leadership", label: "नेतृत्व" },
    { href: "#awards", label: "सम्मान" },
    { href: "#legacy", label: "विरासत" },
    { href: "#references", label: "संदर्भ" },
  ],

  footer: {
    institutionLine:
      "PCET नूतन महाराष्ट्र इंस्टीट्यूट ऑफ इंजीनियरिंग एंड टेक्नोलॉजी — संगणक अभियांत्रिकी विभाग (Computer Engineering)",
    contentNote:
      "सामग्री फ्रंट-एंड डिजाइन चैलेंज प्रतिभागी दस्तावेज पर आधारित है। अंग्रेजी एवं हिंदी दोनों भाषाओं में उपलब्ध।",
  },
};

export const portfolio = portfolioEn;

export function getPortfolio(lang: "en" | "hi"): PortfolioContent {
  return lang === "hi" ? portfolioHi : portfolioEn;
}
