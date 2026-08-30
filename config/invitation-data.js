/*
  EDIT THIS FILE when you want to change event details, guest codes,
  Google Maps links, or the couple image filename.

  Image:
  Replace images/couple.jpg with your chosen couple photograph.
  Keep the filename "couple.jpg" and no code changes are needed.

  Guest codes:
  Create as many codes as you need. Each code points to one profile.
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
      mapUrl: "REPLACE_WITH_GOOGLE_MAPS_LINK",
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
      mapUrl: "REPLACE_WITH_GOOGLE_MAPS_LINK",
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
      mapUrl: "REPLACE_WITH_GOOGLE_MAPS_LINK",
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
      mapUrl: "REPLACE_WITH_GOOGLE_MAPS_LINK",
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
      mapUrl: "REPLACE_WITH_GOOGLE_MAPS_LINK",
      theme: "theme-bidaye",
      copy: "A tender farewell, filled with love, memories and the beginning of a beautiful new chapter."
    },
    {
      key: "reception",
      date: "11 December",
      title: "Reception",
      subtitle: "Evening · Rajbari",
      time: "Evening",
      venue: "Rajbari",
      mapUrl: "REPLACE_WITH_GOOGLE_MAPS_LINK",
      theme: "theme-reception",
      copy: "The celebrations continue. Come raise a glass, dance, laugh and celebrate with us."
    }
  ],

  profiles: {
    /* Replace these sample codes with your real codes. */
    "ALL-001": {
      name: "All Events",
      events: ["aiburobhat","mehendi","holud","wedding","bidaye","reception"]
    },
    "TYPE2-001": {
      name: "Aiburobhat + Holud + Wedding",
      events: ["aiburobhat","holud","wedding"]
    },
    "TYPE3-001": {
      name: "Holud + Wedding",
      events: ["holud","wedding"]
    },
    "TYPE4-001": {
      name: "Aiburobhat + Mehendi + Holud + Wedding",
      events: ["aiburobhat","mehendi","holud","wedding"]
    },
    "TYPE5-001": {
      name: "Wedding Only",
      events: ["wedding"]
    }
  }
};
