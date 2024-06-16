// 用于导航栏的交互
document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.getElementById('language-button');
    const alertButton = document.getElementById('alert-button');
    const languageBox = document.getElementById('language-box');
    const alertBox = document.getElementById('alert-box');

    // 点击按钮显示框
    languageButton.addEventListener('click', () => {
        languageBox.style.display = languageBox.style.display === 'block' ? 'none' : 'block';
        alertBox.style.display = 'none';
    });

    // 点击按钮显示框
    alertButton.addEventListener('click', () => {
        alertBox.style.display = alertBox.style.display === 'block' ? 'none' : 'block';
        languageBox.style.display = 'none';
    });

    // 点击按钮以外的地方隐藏框
    document.addEventListener('click', (event) => {
        if (!languageButton.contains(event.target) && !languageBox.contains(event.target)) {
            languageBox.style.display = 'none';
        }
        if (!alertButton.contains(event.target) && !alertBox.contains(event.target)) {
            alertBox.style.display = 'none';
        }
    });
});