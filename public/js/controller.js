var app = angular.module('myCvApp', []);

app.controller('MainController', function($scope) {
    
    // Summary Section
    $scope.summary = {
      'title' : 'Summary',
      'desc' : 'A recognized creative front end developer with the ability to successfully sell ideas. With over 4 years of experience in web, digital media and social media. I have provided thought leadership to major brands including Hilton, The Abraaj Group, Jannah Hotel, City Seasons Group of Hotels, Media One etc'
    }

    // Experience Section
    $scope.experience  = {
      'title' : "Experience",
      'years' : "Over 4 years of experience",
      'desc' : "I am a creative guy with an enthusiastic and self-motivated front end web developer. I currently design and lead front end magic for the Dubai's leading web design, content marketing and digital marketing agency"
    }

    // Education Section
    $scope.education  = {
      'title' : "Education"
    }

    $scope.educationList = [
      "2007 – SSC (Secondary School Certificate) from Brilliant Carrier Sec. School , Karachi",
      "2010 – Intermediate from Jinnah Govt. Commerce College, Karachi",
      "2013 – Graduation (in Progress) From University of Karachi"
    ]

     // Specialities Section
    $scope.specialities  = {
      'title' : "Specialities"
    }

    $scope.specialitiesList = [
      "Responsive Front end Development",
      "Responsive Web Design",
      "HTML5 / XHTML / CSS3",
      "Digital Strategies",
      "UI / Ux Research And Analysis",
      "Scoial Marketing Strategy",
      "jQuery / Javascript / Angular",
      "Mobile Development",
      "LESS / Sass CSS Preprocessors",
      "Cross browser compatibility",
      "Bootstrap, Foundation, Compass",
      "Wireframming, Prototyping"
    ]

     // Employment Section
    $scope.employment  = {
      'title' : "Employment"
    }

    $scope.employmentList = [
      {
        "title" : "Nexa, Dubai, United Arab Emirates",
        "role" : "Front End and UI, UX Developer | February 2013 - Present",
        "desc" : "Leading design direction and co-collaborated on strategic direction across web, mobile, data visualization, and social media platforms. Managing creative and development Process and building, mentoring, and diversifying creative teams across web, print, branding mobile disciplines. Collaborating with the client  and providing creative vision for new product concepts, connected device initiatives, competitive site analysis, expert site reviews, project strategy and branding across all channels."
      },
      {
        "title" : "Designerz Next, Karachi, Pakistan",
        "role" : "Web Developer | November 2011 - December 2012",
        "desc" : "Responsible for Web Designers and Front end developers and was handling clients request. I was responsible for creating and developing original design concepts. Providing direction to both the designers and the developers and making sure every one meets with quality and standards as per the company’s expectations."
      }

    ]

    // Interest Section
    $scope.interest  = {
      'title' : "Interest",
      'desc' : "I’m a geek. I love gadgets, electronica music, blogging and googling on the internet. Do most of my work on PC which helps me showcase my goals more efficiently and pixel perfect."
    }

     // Portfolio Section
    $scope.portfolio  = {
      'title' : "Portfolio",
      'info' : "Compaitable with Mobile, Tablet and other devices"
    }

    $scope.portfolioList = [
      {
        "name" : "sirbaniyasisland.com",
        "url" : "http://www.sirbaniyasisland.com/"
      },
      {
        "name" : "saadiyat.ae",
        "url" : "http://www.mamshaalsaadiyat.ae/"
      },
      {
        "name" : "mamshaalsaadiyat.ae",
        "url" : "http://www.mamshaalsaadiyat.ae/"
      },
      {
        "name" : "desertwarriorchallenge.com",
        "url" : "http://www.desertwarriorchallenge.com/"
      },
      {
        "name" : "algurg.com",
        "url" : "http://algurg.com/"
      },
      {
        "name" : "iddesignuae.com",
        "url" : "http://iddesignuae.com/"
      },
      {
        "name" : "whgym.com",
        "url" : "http://www.whgym.com/"
      },
      {
        "name" : "abraaj.com",
        "url" : "http://www.abraaj.com/"
      },
      {
        "name" : "mediaonehotel.com",
        "url" : "http://www.mediaonehotel.com/"
      },
      {
        "name" : "glimus-gt.com",
        "url" : "http://www.glimus-gt.com/"
      },
      {
        "name" : "helidubai.com",
        "url" : "http://www.helidubai.com/"
      },
      {
        "name" : "mydmcc.ae",
        "url" : "http://www.mydmcc.ae/"
      },
      {
        "name" : "sf-yachts.com",
        "url" : "http://www.sf-yachts.com/"
      },
      {
        "name" : "scafa.ae",
        "url" : "http://www.scafa.ae/"
      },
      {
        "name" : "nddgroup.com",
        "url" : "http://www.nddgroup.com/"
      },
      {
        "name" : "cityseasonshotels.com",
        "url" : "http://www.cityseasonshotels.com/"
      },
      {
        "name" : "hiltonhotelsmea.com",
        "url" : "http://www.hiltonhotelsmea.com/"
      },
      {
        "name" : "jannah.ae",
        "url" : "http://jannah.ae/"
      },
      {
        "name" : "mdsaptech.com",
        "url" : "http://www.mdsaptech.com/"
      },
      {
        "name" : "joie-design.com",
        "url" : "http://www.joie-design.com/"
      }

     

    ]

});
