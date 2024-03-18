import express from "express";

const router = express.Router();

router.route('/').post((req, res) => {
    try {
        const { data } = req.body;
        const dataArr = [];
        const evenArr = [];
        const oddArr = [];
        const alpha = [];
        if (data.length === 0) res.status(400).send({
            is_sucess: false,
            message: "Wrong data input"
        });

        
        for (let i = 0; i < data.length; i++) {
            if (isNaN(data[i])) {
                alpha.push(data[i].toUpperCase());
            }
            else if (parseInt(data[i]) % 2 == 0) {
                evenArr.push(parseInt(data[i]));
            } 
            else {
                oddArr.push(parseInt(data[i]));
            }
        }

        const createData = {
            is_sucess: true,
            user_id: "bhavya_dalela_16062003",
            roll_number: "2110990366",
            email: "bhavya0366.be21@chitkara.edu.in",
            even_numbers: evenArr,
            odd_numbers: oddArr,
            alphabets: alpha
        }

        res.status(200).send(createData);
    }
    catch (err) {
        res.status(400).send({
            is_sucess: false,
            message: "Something went wrong"
        });
    }
    
}) 

export default router