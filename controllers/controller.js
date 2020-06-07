const path = require('path');
const projectRootDir = path.dirname(process.mainModule.filename);


exports.getHome = (req,res) => {
    res.sendFile(path.join(projectRootDir,'hello.html'));
};






exports.get_t0 = (req,res) => {
    t0 = new Date(req.body.t0);

    t0.setDate(t0.getDate() + 19)
    output = [
        `LastDateOfEnrollment = ${t0.toDateString()}`
    ]
    t0 = new Date(req.body.t0);
    t0.setDate(t0.getDate() + 9)
    output.push(`FirstRound = ${t0.toDateString()}`);
    t0 = new Date(req.body.t0);
    t0.setDate(t0.getDate() + 14)
    output.push(`PayAdmissionFee = ${t0.toDateString()}`)
    res.render('results',{output:output});
}





exports.get_t1 = (req,res) => {
    t1 = new Date(req.body.t1);

    t1.setDate(t1.getDate() + 9)
    output = [
        `LastDateOfAdmission = ${t1.toDateString()}`
    ]
    t1 = new Date(req.body.t1);
    t1.setDate(t1.getDate() + 9)
    output.push(`t2 = ${t1.toDateString()}`);
    t1 = new Date(req.body.t1);
    t1.setDate(t1.getDate() + 14)
    output.push(`EnrollmentNumberAndVerification = ${t1.toDateString()}`)
    t1 = new Date(req.body.t1);
    t1.setDate(t1.getDate() + 24)
    output.push(`DeclearationOfExamSchedule = ${t1.toDateString()}`)
    res.render('results',{output:output});
}
