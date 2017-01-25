module.exports = {
    request: {
        path: "https://api.hyshi.net/api/v2.0/profile",
        method: "GET"
    },
    response: {
        data: {
            code: 0,
            data: {
                name: "e2e-test-name",
                corpName: "e2e-test-corp-name",
                headImgUrl: "e2e-test-head-img-url",
                deptName: "e2e-test-dept-name"
            }
        },
        status: 200
    }
};