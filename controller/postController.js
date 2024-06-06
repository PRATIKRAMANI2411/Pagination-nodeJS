import Post from "../model/postModel.js";

export const createPost = async(req, res) =>{
    try {

        const postData = new Post(req.body);

        if(!postData){
            return res.status(404).json({message: "Post data not found"});
        }

        const savedData = await postData.save();
        res.status(200).json(savedData);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const posts = async(req, res) =>{
    try {

        const page = parseInt(req.query.page) || 1;
        const perPage = 3;
        const totalPosts = await Post.countDocuments();  
        const totalPages = Math.ceil(totalPosts / perPage);

        if(page > totalPages){
            return res.status(404).json({message: "Page not found"});
        }

        const posts = await Post.find()
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();

        res.status(200).json({posts, totalPages, page})
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}