import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default (req, res) => {
    res.status(200).json({
        success: true,
        message: 'test'
    });
}