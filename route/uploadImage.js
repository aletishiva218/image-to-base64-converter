const uploadImg = (req,res) => {
  let data = req.body.toString('base64');
  console.log(data)
    data = "data:image/png;base64,"+data;
    res.send(data);
  }

  export default uploadImg;