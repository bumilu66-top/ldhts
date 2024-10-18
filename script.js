document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const permanentUrl = document.getElementById('permanentUrl').value;
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${title}</strong><br>${description}<br><a href="${permanentUrl}" target="_blank">${permanentUrl}</a>`;
    
    document.getElementById('list').appendChild(listItem);
    
    // Reset form
    this.reset();
});

// 复制功能
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('click', function() {
        this.removeAttribute('readonly'); // 允许编辑以便选择内容
        this.select();
        document.execCommand('copy');
        
        // 创建弹出提示
        const message = document.createElement('div');
        message.className = 'copy-message';
        message.textContent = '已复制！';
        document.body.appendChild(message);

        // 设置位置
        const rect = this.getBoundingClientRect();
        message.style.left = `${rect.left + window.scrollX}px`;
        message.style.top = `${rect.top + window.scrollY - 30}px`; // 在输入框上方显示

        // 显示提示并在2秒后移除
        setTimeout(() => {
            message.remove();
        }, 2000);
        
        // 设置为只读
        this.setAttribute('readonly', true);
    });

    // 双击以输入新内容
    input.addEventListener('dblclick', function() {
        this.removeAttribute('readonly'); // 允许用户输入
        this.focus();
    });
});
