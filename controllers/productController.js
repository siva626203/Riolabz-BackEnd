const ProductModel=require('../schema/productModel')
module.exports.product_get=async(req,res)=>{
  try {
    const product=await ProductModel.find({})
    res.send(product)
  } catch (error) {
    res.send(error)
  }
}
module.exports.product_add = async(req, res) => {
  try {
    const product=ProductModel(req.body)
    await product.save()
    res.send({message:"Product Added",data:product})
  } catch (error) {
    res.send(error);
  }
};
module.exports.product_update = async (req, res) => {
  try {
    const product = await ProductModel.updateOne({ _id: req.body._id },req.body);
    if (product.matchedCount !==0){
         res.send({ message: "Product Updated", data: product });
    }else{
        res.send({message:"Product not matched"})
    }
     
  } catch (error) {
    res.send(error);
  }
};
module.exports.product_delete=async(req,res)=>{
    try {
        const product=await ProductModel.deleteOne({_id:req.body._id})
        if (product.deletedCount !==0){
            res.send({ message: "deleted", data: product });
        }else{
            res.send({message:"something wrong"})
        }
          
    } catch (error) {
        
    }
}