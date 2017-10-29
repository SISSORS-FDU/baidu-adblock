$('#homepage').click(function() {
    chrome.tabs.create({
        'url': 'https://github.com/zhangyazhong/baidu-adblock',
        'active': true
    }, function(tab) {});
});

$('#about').click(function() {
    chrome.tabs.create({
        'url': 'https://chrome.google.com/webstore/detail/%E5%B1%8F%E8%94%BD%E7%99%BE%E5%BA%A6%E6%8E%A8%E5%B9%BF/gcaopcbfgkfmgofkkbfbmiajolihocoa?utm_source=chrome-ntp-icon',
        'active': true
    }, function(tab) {});
});

var date = new Date();
var today = 'day' + date.getFullYear() + date.getMonth() + date.getDate();
var total = 'totalBlock';

chrome.storage.local.get(total, function (result) {
    if (result[total] === undefined) {
        $('#total-count').html(0);
    } else {
        $('#total-count').html(result[total]);
    }
});
chrome.storage.local.get(today, function (result) {
    if (result[today] === undefined) {
        $('#today-count').html(0);
    } else {
        $('#today-count').html(result[today]);
    }
});
