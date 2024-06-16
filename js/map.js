document.addEventListener('DOMContentLoaded', () => {
    const foodData = {
        'CNSC': {
          name: '四川菜',
          food: '四川菜',
          description: '麻婆豆腐是四川省的一道传统名菜，以其独特的麻辣味而著称',
          img: '../pic/sichuan/mapo-tofu.png',
          info: '点击了解更多'
        },
        'CNGD': {
          name: '广东',
          food: '广东菜',
          description: '白切鸡是广东的一道经典菜肴，白斩鸡形状美观，皮黄肉白，肥嫩鲜美，滋味异常鲜美，十分可口',
          img: '../pic/guangdong/baiqieji.jpg',
          info: '点击了解更多'
        },
        'CNSD': {
          name: '山东',
          food: '山东菜',
          description: '九转大肠是山东鲁菜中的一道名菜，以故意的还是不小心的闻名于世(不是)',
          img: '../pic/shandong/dish1.jpeg',
          info: '点击了解更多'
        },
        'CNJS': {
          name: '江苏',
          food: '江苏菜',
          description: '松鼠鱼是江苏省的一道传统名菜，据说早在乾隆皇帝下江南时，扬州就有“松鼠鲤鱼”了，乾隆曾品尝过。后来便发展成了“松鼠桂鱼”。',
          img: '../pic/jiangsu/img1.jpeg',
          info: '点击了解更多'
        }
    }
    
    document.getElementById('chinaMap').addEventListener('load', function() {
        // 获取嵌入的SVG文档
        const svgDoc = this.contentDocument;
        
        // 全改成灰的
        const paths = svgDoc.querySelectorAll('path');
        paths.forEach(path => {
            // 填充为米黄色
            path.style.fill = '#f5f5dc';
        });

        // 获取省份路径元素并添加事件
        const provinces = ['CNSC', 'CNJS', 'CNSD', 'CNGD'];
        provinces.forEach(provinceId => {
            const province = svgDoc.getElementById(provinceId);
            // 填充为稍微暗淡的红色
            province.style.fill = '#ff0000';
            province.style.cursor = 'pointer';
            if (province) {
                province.classList.add('province');
                province.addEventListener('click', function() {
                provinceClick(provinceId);
                });

                province.addEventListener('mouseover', function(event) {
                    showTooltip(event, foodData[provinceId]);
                });
                province.addEventListener('mousemove', function(event) {
                    (event);
                });
                province.addEventListener('mouseout', function() {
                    hideTooltip();
                });
            }
        });
      });
  
    function provinceClick(provinceId) {
        switch(provinceId) {
            case 'CNSC':
                // window.location.href = '#sichuan';
                document.querySelector('#sichuan').scrollIntoView({
                    behavior: 'smooth'
                });
                break;
            case 'CNJS':
                document.querySelector('#jiangsu').scrollIntoView({
                    behavior: 'smooth'
                });
                break;
            case 'CNSD':
                document.querySelector('#shandong').scrollIntoView({
                    behavior: 'smooth'
                });
                break;
            case 'CNGD':
                document.querySelector('#guangdong').scrollIntoView({
                    behavior: 'smooth'
                });
                break;
            // 其他省份的跳转链接
            default:
                console.log('未知省份：' + provinceId);
        }
    }

    function showTooltip(event, data) {
        const tooltip = document.getElementById('tooltip');
        tooltip.innerHTML = `
            <div class="infobox">
                <h4>${data.food}</h4>
                <img src="${data.img}" alt="${data.food}" style="width:200px">
                <div>${data.description}</div>
                <div" class="blinking-div">${data.info}</div>
            </div>
        `;
        tooltip.style.display = 'block';
        moveTooltip(event);
    }
  
    function moveTooltip(event) {
        const tooltip = document.getElementById('tooltip');
        const x = event.clientX + 10;
        const y = event.clientY + 10;
        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
    }
  
    function hideTooltip() {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'none';
    }
});