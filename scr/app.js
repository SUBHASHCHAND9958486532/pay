
const axios= require("axios")

const data=JSON.stringify({
    "type": "Subhash",
    "id": "1",
    "key": "2",
    "operator_id": "3",
    "ext_id": "4",
    "currency": "indian",
    "tran_amount": "200",
    "card_type": "debit",
    "cc_number": 244769118875,
    "cc_expiry": "02/28",
    "cvv": 298,
    "site_url": "https://www.youtube.com/watch?v=Ewzrmb_vpxk&list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At&index=36",
    "ip_address": "dfhdefhdrfghjgfhjrtbndf",
    "cust_fname": "amar2",
    "cust_lname": "katiyar",
    "birthdate": "2022-07-22",
    "ssn": "56xcvbdf",
    "address1": "ghmghm",
    "address2": "fjghfm",
    "city": "lko",
    "state": "up",
    "country_code": "91",
    "zip_code": "241501",
    "email": "amarkatiyar70@gmail.com",
    "phone_nu": 9807242329666,
    "server_url": "dfngh,",
    "browser_url": "trjtyj",
    "doc_type": "rtu5rtyk",
    "doc_number": 8764546,
    "data1": "fmgh",
    "data2": "ghfjty",
    "data3": "rthjrt"
});

const options = {
    hostname: 'gwadmin.triple000.com',
    path: 'gwapi.triple000.com/GWTransaction/Payment',
    method: "POST",
    headers:{
        'key' : 'U3kZnK0iEZN3Q7S'
    }
};
axios.post('https://gwapi.triple000.com/GWTransaction/Payment', data).then(res=>{
    if(res.status){
        console.log("Data send successfully")
        console.log(`Status Code : ${res.status}`)
        console.log(`Body : ${res.status}`);
    }else{
        console.log("Data not send")
    }
    

}).catch((err)=>{
    console.log(err)
})