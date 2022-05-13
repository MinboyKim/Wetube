export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      createdAt: "2 minutes ago",
      views: 59,
    },
    {
      title: "Second Video",
      rating: 5,
      createdAt: "2 minutes ago",
      views: 59,
    },
    {
      title: "Third Video",
      rating: 5,
      createdAt: "2 minutes ago",
      views: 59,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => {
  res.render("watch");
};
export const edit = (req, res) => {
  res.render("edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Videos");
};
