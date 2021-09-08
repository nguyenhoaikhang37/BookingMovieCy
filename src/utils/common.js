import Images from "constants/images";

export const randomCategory = () => {
  const category = [
    "ACTION",
    "DRAMA",
    "THRILLER",
    "ADVENTURE",
    "CARTOON",
    "HORROR",
  ];

  return category[Math.floor(Math.random() * category.length)];
};

export const imageCinema = (id) => {
  if (id == "bhd") {
    return Images.BHD_IMG;
  }
  if (id == "cgv") {
    return Images.CGV_IMG;
  }
  if (id == "cns") {
    return Images.CNS_IMG;
  }
  if (id == "glx") {
    return Images.GALAXY_IMG;
  }
  if (id == "lot") {
    return Images.LOTTLE_IMG;
  }
  if (id == "meg") {
    return Images.MEGAGS_IMG;
  }
};

export const getColorText = (id) => {
  if (id == "bhd") {
    return "#8bc541";
  }
  if (id == "cgv") {
    return "#e71a0f";
  }
  if (id == "cns") {
    return "#df0d7a";
  }
  if (id == "glx") {
    return "#ff751a";
  }
  if (id == "lot") {
    return "#cf544b";
  }
  if (id == "meg") {
    return "#eeb730";
  }
};
