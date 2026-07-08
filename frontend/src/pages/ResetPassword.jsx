export const resetPassword=async(req,res)=>{

    try{

        const {email,password}=req.body;

        const user=await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"User not found"
            });
        }

        const hashedPassword=await bcrypt.hash(password,10);

        user.password=hashedPassword;

        await user.save();

        res.json({
            message:"Password updated successfully"
        });

    }
    catch(err){

        res.status(500).json({
            message:err.message
        });

    }

}