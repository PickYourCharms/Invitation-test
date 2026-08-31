/*
  CHANDRIMA & ARNAB — WEDDING INVITATION DATA

  Guest codes:
  BORMALA
  SHANAI
  SINDUR
  GACH-KOUTO
  TOPOR
*/

window.INVITATION_DATA = {
  events: [
    {
      key: "aiburobhat",
      date: "8 December",
      title: "Aiburobhat",
      subtitle: "Morning / Afternoon · At Home",
      time: "Morning / Afternoon",
      venue: "Home",
      mapUrl: "https://maps.app.goo.gl/VrffqppUcJPYTSqR9?g_st=ac",
      theme: "theme-aiburo",
      copy: "A beautiful beginning to the celebrations — an intimate day of tradition, blessings and family."
    },

    {
      key: "mehendi",
      date: "8 December",
      title: "Mehendi & Sangeet",
      subtitle: "Evening · At Home",
      time: "Evening",
      venue: "Home",
      mapUrl: "https://maps.app.goo.gl/VrffqppUcJPYTSqR9?g_st=ac",
      theme: "theme-mehendi",
      copy: "An evening of music, laughter, colour and all the little moments that make a celebration unforgettable."
    },

    {
      key: "holud",
      date: "9 December",
      title: "Gaye Holud",
      subtitle: "Morning / Afternoon · Parbon",
      time: "Morning / Afternoon",
      venue: "Parbon",
      mapUrl: "https://maps.app.goo.gl/BVucpXj8eBAuA6LAA?g_st=ac",
      theme: "theme-holud",
      copy: "Come celebrate with me as the festivities burst into colour, laughter and blessings."
    },

    {
      key: "wedding",
      date: "9 December",
      title: "The Wedding",
      subtitle: "Evening · Parbon",
      time: "Evening",
      venue: "Parbon",
      mapUrl: "https://maps.app.goo.gl/BVucpXj8eBAuA6LAA?g_st=ac",
      theme: "theme-wedding",
      copy: "The day I've been waiting for. I would be so happy to have you beside me as I begin this new chapter."
    },

    {
      key: "bidaye",
      date: "10 December",
      title: "Bidaye",
      subtitle: "At Home",
      time: "10 December",
      venue: "Home",
      mapUrl: "https://maps.app.goo.gl/VrffqppUcJPYTSqR9?g_st=ac",
      theme: "theme-bidaye",
      copy: "A tender farewell, filled with love, memories and the beginning of a beautiful new chapter."
    },

    {
      key: "reception",
      date: "11 December",
      title: "Reception",
      subtitle: "Evening · Raja Palace Banquet Hall",
      time: "Evening",
      venue: "Raja Palace Banquet Hall",
      mapUrl: "https://maps.app.goo.gl/Wps7q1Mmz68JFKjB8",
      theme: "theme-reception",
      copy: "The celebrations continue. Come raise a glass, dance, laugh and celebrate with us."
    }
  ],


  profiles: {

    /*
      BORMALA
      All six events
    */
    "BORMALA": {
      name: "All Events",
      events: [
        "aiburobhat",
        "mehendi",
        "holud",
        "wedding",
        "bidaye",
        "reception"
      ]
    },


    /*
      SHANAI
      Aiburobhat + Holud + Wedding
    */
    "SHANAI": {
      name: "Aiburobhat + Holud + Wedding",
      events: [
        "aiburobhat",
        "holud",
        "wedding"
      ]
    },


    /*
      SINDUR
      Holud + Wedding
    */
    "SINDUR": {
      name: "Holud + Wedding",
      events: [
        "holud",
        "wedding"
      ]
    },


    /*
      GACH-KOUTO
      Aiburobhat + Mehendi + Holud + Wedding
    */
    "GACH-KOUTO": {
      name: "Aiburobhat + Mehendi + Holud + Wedding",
      events: [
        "aiburobhat",
        "mehendi",
        "holud",
        "wedding"
      ]
    },


    /*
      TOPOR
      Wedding only
    */
    "TOPOR": {
      name: "Wedding Only",
      events: [
        "wedding"
      ]
    }

  }
};
