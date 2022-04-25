var app = new Vue({
  el: "#vueapp",
  data: {
    posts: [
      {
        url: "images/THE_IVY.jpg",
        name: "Realisation Par",
        materials: "Silk",
        url_2: "images/THE_IVY_2.jpg",
        cost: 250,
        color: "Eden",
        qty: 189,
        message:
          "She’s femininity, romance and off duty Daisy Buchanan all sewn up in to one elegant ankle grazing slip dress. Pin tucked frill detail on the straps. No zip cause she's cut on the bias - ready to glide over your shoulders and on to those hips! The Ivy - you're going to want her.",
        showbox: false,
      },
      {
        url: "images/The_ALLEGRA.jpg",
        name: "Realisation Par",
        materials: "Silk",
        url_2: "images/THE_ALLEGRA_2.jpg",
        cost: 245,
        color: "Verona",
        qty: 267,
        message:
          "Delicate and dainty, HouseofCB updates the timeless slip dress with a beautifully draped cowl neckline.",
        showbox: false,
      },
      {
        url: "images/FLORAL_CORSET_STYLE_DRESS.jpg",
        name: "Zara",
        materials: "polyester",
        url_2: "images/FLORAL_DRESS_2.jpg",
        cost: 45.9,
        color: "Only one",
        qty: 243,
        message:
          "Short dress with adjustable thin straps. Contrasting interior lining. Back hidden in-seam zip closure.",
        showbox: false,
      },
      {
        url: "images/KNOTTED_RIB_DRESS.jpg",
        name: "Zara",
        materials: "cotton",
        url_2: "images/KNOTTED_RIB_DRESS_2.jpg",
        foodie_level: "Newcomer",
        cost: 29.9,
        color: "Sky blue",
        qty: 242,
        message:
          "Halter neck dress with knot detail and off-the-shoulder short sleeves.",
        showbox: false,
      },
      {
        url: "images/ROSE_SATIN_PLEATED_MIDI_DRESS.jpg",
        name: "House of Cb",
        materials: "Satin",
        url_2: "images/house_rose_2.jpg",
        cost: 269,
        color: "Rose",
        qty: 166,
        message:
          "Our 'Faye' dress is equally feminine and flattering with a touch of elegance. Made from our ultra luxe duchess satin in a beautiful rose hue, 'Faye' has a plunging neckline with pretty petal shape pleated cups, framed by slim straps.",
        showbox: false,
      },
      {
        url: "images/SATIN_CORSET_MIDI_DRESS.jpg",
        name: "House of Cb",
        materials: "Satin",
        url_2: "images/house_white_2.jpg",
        cost: 269,
        foodie_level: "Novice",
        color: "Crystal",
        qty: 173,
        message:
          "Delicate and dainty, HouseofCB updates the timeless slip dress with a beautifully draped cowl neckline.",
        showbox: false,
      },
    ],
    // url: "images/chili.jpg",
  },

  methods: {
    displayinfo: function (posts, post) {
      for (var i = 0; i < posts.length; i++) {
        posts[i].showbox = false;
        post.showbox = true;
      }
    },
  },
});
