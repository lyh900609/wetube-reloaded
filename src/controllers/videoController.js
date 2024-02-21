export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const deleteVidoe = (req, res) => {
    console.log(req.params);
    return res.send("Delete Videos!");
};
export const upload = (req, res) => res.send("upload a Video!");
export const trending = (req, res) => res.render("home");
export const search = (req, res) => res.send("search videos!");