import $ from 'jquery';

class MyTool {
    checkInput(data_lst) {
        for (let i = 0; i < data_lst.length; i++) {
            if ($.trim(data_lst[i]) === "") {
                return false;
            }
        }
        return true;
    }
}

export default MyTool;