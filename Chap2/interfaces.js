// linda라는 직원 객체를 생성. 관리자가 아닌 경우 고유 ID 앞에 'emp-'가 붙음.
var linda = {
    name: "linda",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = linda.id + "-" + linda.name;
        if (!linda.isManager) {
            return "emp-" + uniqueId; // 관리자가 아니므로 'emp-'를 앞에 붙임.
        }
        return uniqueId;
    }
};
console.log(linda.getUniqueId()); // 결과: 'emp-2-linda'
// pam이라는 관리자 직원 객체를 생성. 관리자인 경우 고유 ID 앞에 'mgr-'가 붙음.
var pam = {
    name: "pam",
    id: 1,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = pam.id + "-" + pam.name;
        if (pam.isManager) {
            return "mgr-" + uniqueId; // 관리자이므로 'mgr-'를 앞에 붙임.
        }
        return uniqueId;
    }
};
console.log(pam.getUniqueId()); // 결과: 'mgr-1-pam'
