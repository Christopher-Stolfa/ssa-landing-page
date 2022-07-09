/**
 * Welcome page link
 */
const welcomeLink = 'https://ssa.ccny.cuny.edu/about/welcome/';
/**
 * Link to newsletter subscription
 */
const subscribeLink = 'https://cuny.us4.list-manage.com/subscribe?u=21d6a2d10f897e4acb0de0db3&id=6281843555';
/**
 * Social media navigation data
 */
const socialMedia = [
  {
    title: 'instagram',
    link: 'https://instagram.com/whatsonatssa/',
    icon: 'FaInstagram',
  },
  {
    title: 'youtube',
    link: 'https://www.youtube.com/channel/UCd2v8X2TCyQHA2Ww2EpfTXA',
    icon: 'FaYoutube',
  },
  {
    title: 'facebook',
    link: 'https://www.facebook.com/spitzerschoolofarchitecture',
    icon: 'FaFacebookF',
    altIcon: 'FaFacebook',
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/school/spitzer-school-of-architecture-city-college-of-new-york-cuny/',
    icon: 'FaLinkedinIn',
    altIcon: 'FaLinkedin',
  },
  { title: 'twitter', link: 'https://twitter.com/citycollegeny', icon: 'FaTwitter' },
];

/**
 * Navigation link data
 */
const navLinks = [
  { title: 'what we offer', link: 'https://ssa.ccny.cuny.edu/resources/creative-spaces/our-building/' },
  { title: 'featured news', link: 'https://ssa.ccny.cuny.edu/blog/category/news/' },
  { title: "what's on at ssa?", link: 'https://www.instagram.com/whatsonatssa/' },
];

/**
 * Menu navigation options
 */
const menuOptions = [
  {
    title: 'about',
    subMenu: [
      {
        subTitle: '',
        items: [
          { name: 'Welcome', link: 'https://ssa.ccny.cuny.edu/about/welcome/' },
          { name: 'Mission', link: 'https://ssa.ccny.cuny.edu/about/mission-history/' },
          { name: 'History', link: 'https://ssa.ccny.cuny.edu/about/history/' },
          { name: 'Land Acknowledgement', link: 'https://ssa.ccny.cuny.edu/about/land-acknowledgment/' },
          { name: 'Accreditation', link: 'https://ssa.ccny.cuny.edu/about/accreditation/' },
          { name: 'Contact', link: 'https://ssa.ccny.cuny.edu/about/contact/' },
          { name: 'Policies and Bylaws', link: 'https://ssa.ccny.cuny.edu/about/policies/' },
          { name: 'Virtual Tour', link: 'https://ssa.ccny.cuny.edu/about/virtual-tour/' },
          {
            name: 'COVID-19 Related Updates',
            link: 'https://ssa.ccny.cuny.edu/blog/2021/09/01/covid-19-related-updates/',
          },
        ],
      },
    ],
  },
  {
    title: 'admissions',
    subMenu: [
      {
        subTitle: 'undergraduate admissions',
        items: [
          {
            name: 'Undergraduate Application Instructions',
            link: 'https://ssa.ccny.cuny.edu/admissions/undergraduate/ug-b-arch-admissions/',
          },
          {
            name: 'Undergraduate Info Sessions',
            link: 'https://ssa.ccny.cuny.edu/admissions/undergraduate/u-info-sessions/',
          },
          { name: 'FAQ', link: 'https://ssa.ccny.cuny.edu/admissions/undergraduate/faq/' },
          {
            name: 'Paying for School',
            link: 'https://ssa.ccny.cuny.edu/admissions/undergraduate/ug-paying-for-school/',
          },
        ],
      },
      {
        subTitle: 'graduate admissions',
        items: [
          {
            name: 'Graduate Application Instructions',
            link: 'https://ssa.ccny.cuny.edu/admissions/graduate/g-how-to-apply/',
          },
          { name: 'International Students', link: 'https://ssa.ccny.cuny.edu/admissions/international-students/' },
          { name: 'Graduate Info Sessions', link: 'https://ssa.ccny.cuny.edu/admissions/graduate/g-info-sessions/' },
          { name: 'FAQ', link: 'https://ssa.ccny.cuny.edu/admissions/graduate/g-faq/' },
          { name: 'Facts and Figures', link: 'https://ssa.ccny.cuny.edu/admissions/graduate/g-facts-and-figures/' },
          { name: 'Paying for School', link: 'https://ssa.ccny.cuny.edu/admissions/g-paying-for-school/' },
        ],
      },
    ],
  },
  {
    title: 'programs & centers',
    subMenu: [
      {
        subTitle: 'program documents',
        items: [
          {
            name: 'Schedule of Classes',
            link: 'https://ssa.ccny.cuny.edu/programs-centers/related-documents/schedule-of-classes/',
          },
        ],
      },
      {
        subTitle: 'undergraduate programs',
        items: [
          {
            name: 'Bachelor of Architecture',
            link: 'https://ssa.ccny.cuny.edu/programs-centers/undergraduate-programs/b-arch/',
          },
        ],
      },
      {
        subTitle: 'graduate programs',
        items: [
          {
            name: 'Master of Architecture I',
            link: 'https://ssa.ccny.cuny.edu/programs-centers/graduate-programs/m-arch-i/',
          },
          {
            name: 'Master of Science in Architecture',
            link: 'https://ssa.ccny.cuny.edu/programs-centers/graduate-programs/ms-arch/',
          },
          {
            name: 'Master of Landscape Architecture',
            link: 'https://ssa.ccny.cuny.edu/programs-centers/graduate-programs/m-land-arch-i/',
          },
          {
            name: '— MLA Program Public Information',
            link: 'https://ssa.ccny.cuny.edu/programs-centers/graduate-programs/m-land-arch-i/mla-program-public-information/',
          },
          {
            name: 'Urban Design (Master of Urban Planning)',
            link: 'https://ssa.ccny.cuny.edu/programs-centers/graduate-programs/m-urban-planning/',
          },
          {
            name: 'Master of Urban Sustainability',
            link: 'https://ssa.ccny.cuny.edu/programs-centers/graduate-programs/m-sustainability/',
          },
          { name: '2021-22 Graduate Design Units', link: 'https://unitsystem.ssa.ccny.cuny.edu/' },
        ],
      },
      {
        subTitle: 'other programs',
        items: [
          {
            name: 'Summer Architecture Career Lab',
            link: 'https://ssa.ccny.cuny.edu/programs-centers/other-programs/summer-arch-career-lab/',
          },
          { name: 'Study Abroad', link: 'https://ssa.ccny.cuny.edu/programs-centers/other-programs/study-abroad/' },
        ],
      },
      {
        subTitle: 'j. max bond center',
        items: [
          { name: 'About JMBC', link: 'https://ssa.ccny.cuny.edu/programs-centers/j-max-bond-center/jmbc-about/' },
        ],
      },
    ],
  },
  {
    title: 'people',
    subMenu: [
      {
        subTitle: '',
        items: [
          { name: 'All', link: 'https://ssa.ccny.cuny.edu/people' },
          { name: 'Leadership', link: 'https://ssa.ccny.cuny.edu/blog/department/leadership/' },
          { name: 'Faculty', link: 'https://ssa.ccny.cuny.edu/blog/department/faculty/' },
          { name: 'Visiting Professors', link: 'https://ssa.ccny.cuny.edu/blog/department/visiting-professor/' },
          { name: 'Staff', link: 'https://ssa.ccny.cuny.edu/blog/department/staff/' },
        ],
      },
    ],
  },
  {
    title: 'portfolio',
    subMenu: [
      {
        subTitle: 'undergraduate portfolio',
        items: [
          {
            name: 'Bachelor of Architecture',
            link: 'https://ssa.ccny.cuny.edu/portfolio/undergraduate-portfolio/b-arch-portfolio/',
          },
        ],
      },
      {
        subTitle: 'graduate portfolio',
        items: [
          {
            name: 'Master of Architecture',
            link: 'https://ssa.ccny.cuny.edu/portfolio/graduate-portfolio/m-arch-i-portfolio/',
          },
          {
            name: 'Master of Landscape Architecture',
            link: 'https://ssa.ccny.cuny.edu/portfolio/graduate-portfolio/m-land-arch-i-portfolio/',
          },
          {
            name: 'Master of Science in Architecture',
            link: 'https://ssa.ccny.cuny.edu/portfolio/graduate-portfolio/master-of-science-in-architecture/',
          },
          {
            name: 'Urban Design (MUP)',
            link: 'https://ssa.ccny.cuny.edu/portfolio/graduate-portfolio/m-urban-planning-portfolio/',
          },
          {
            name: 'Master of Sustainability in the Urban Environment',
            link: 'https://ssa.ccny.cuny.edu/portfolio/graduate-portfolio/m-sustainability-portfolio/',
          },
        ],
      },
    ],
  },
  {
    title: 'resources',
    subMenu: [
      {
        subTitle: 'information for',
        items: [
          { name: 'Prospective Students', link: 'https://ssa.ccny.cuny.edu/information-for/prospective-students/' },
          { name: 'Current Students', link: 'https://ssa.ccny.cuny.edu/information-for/currents-students/' },
          { name: 'Professionals', link: 'https://ssa.ccny.cuny.edu/information-for/professionals/' },
          { name: 'Faculty', link: 'https://ssa.ccny.cuny.edu/information-for/faculty/' },
          { name: 'Alumni', link: 'https://ssa.ccny.cuny.edu/information-for/alumni/' },
          { name: 'Giving', link: 'https://ssa.ccny.cuny.edu/information-for/giving/' },
        ],
      },
      {
        subTitle: 'creative spaces',
        items: [
          { name: 'Our Building', link: 'https://ssa.ccny.cuny.edu/resources/creative-spaces/our-building/' },
          {
            name: 'Digital Media Labs and Printing',
            link: 'https://ssa.ccny.cuny.edu/resources/creative-spaces/digital-media-labs-and-printing/',
          },
          { name: 'Fabrication Shop', link: 'https://ssa.ccny.cuny.edu/resources/creative-spaces/fabrication-shop/' },
          {
            name: 'Digital Fabrication',
            link: 'https://ssa.ccny.cuny.edu/resources/creative-spaces/digital-fabrication/',
          },
          { name: 'Robotics Lab', link: 'https://ssa.ccny.cuny.edu/resources/creative-spaces/robotics-lab/' },
          { name: 'Studios', link: 'https://ssa.ccny.cuny.edu/resources/creative-spaces/studios/' },
          {
            name: 'Architecture Library',
            link: 'https://ssa.ccny.cuny.edu/resources/student-resources/architecture-library/',
          },
          {
            name: 'Solar RoofPod and Garden',
            link: 'https://ssa.ccny.cuny.edu/resources/other-resources/solar-roof-pod/',
          },
          { name: 'I-Bean Café', link: 'https://ssa.ccny.cuny.edu/resources/other-resources/i-bean-cafe/' },
          { name: 'Archive', link: 'https://ssa.ccny.cuny.edu/archive-nominations-submissions/' },
        ],
      },
      {
        subTitle: 'student resources',
        items: [
          {
            name: 'Scholarships, Awards & Fellowships',
            link: 'https://ssa.ccny.cuny.edu/resources/student-resources/scholarships-awards-fellowships/',
          },
          { name: 'Career Services', link: 'https://ssa.ccny.cuny.edu/resources/other-resources/career-services/' },
          {
            name: 'Student Employment',
            link: 'https://ssa.ccny.cuny.edu/resources/other-resources/student-employment/',
          },
          {
            name: 'Student Clubs and Organizations',
            link: 'https://ssa.ccny.cuny.edu/resources/other-resources/student-organizations/',
          },
          { name: 'Licensure and AXP', link: 'https://ssa.ccny.cuny.edu/resources/other-resources/licensure-idp/' },
        ],
      },
    ],
  },
  {
    title: 'news & events',
    subMenu: [
      {
        subTitle: 'blog',
        items: [
          { name: 'All', link: 'https://ssa.ccny.cuny.edu/blog' },
          { name: 'News', link: 'https://ssa.ccny.cuny.edu/blog/category/news/' },
          { name: 'Awards & Honors', link: 'https://ssa.ccny.cuny.edu/blog/category/awards-honors/' },
          { name: 'Publications', link: 'https://ssa.ccny.cuny.edu/blog/category/publications/' },
          { name: 'Alumni News', link: 'https://ssa.ccny.cuny.edu/blog/category/alumni-news/' },
          { name: 'Videos', link: 'https://ssa.ccny.cuny.edu/blog/category/videos/' },
          { name: 'Newsletter', link: 'https://ssa.ccny.cuny.edu/blog/category/newsletter/' },
          { name: 'Profiles', link: 'https://ssa.ccny.cuny.edu/blog/category/profiles/' },
        ],
      },
      {
        subTitle: 'calendar',
        items: [
          { name: 'All Events', link: 'https://ssa.ccny.cuny.edu/events/' },
          { name: 'Special Events', link: 'https://ssa.ccny.cuny.edu/events/special-events/' },
          { name: 'Lectures', link: 'https://ssa.ccny.cuny.edu/events/lectures/' },
          { name: 'Exhibits', link: 'https://ssa.ccny.cuny.edu/events/exhibits/' },
          { name: 'Event Recordings', link: 'https://ssa.ccny.cuny.edu/events/video-archive/' },
        ],
      },
    ],
  },
];

export { welcomeLink, subscribeLink, socialMedia, navLinks, menuOptions };
