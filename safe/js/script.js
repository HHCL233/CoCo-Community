        document.getElementById('vulnerabilityForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('reporterName').value,
                email: document.getElementById('reporterEmail').value,
                component: document.getElementById('affectedComponent').value,
                severity: document.querySelector('input[name="severity"]:checked').value,
                description: document.getElementById('vulnerabilityDesc').value,
                steps: document.getElementById('reproduceSteps').value,
                additionalInfo: document.getElementById('additionalInfo').value
            };
            
            // 在实际应用中，这里应该发送到后端API
            console.log('提交漏洞报告:', formData);
            
            // 提交成功
            alert('感谢您的提交！我们的安全团队会尽快审核您的报告。');
            this.reset();
            

             fetch('https://api.zitzhen.cn/error/ZIT-CoCo-Community', {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 //body: JSON.stringify()
                 //请后期修改API！
             })
             .then(response => response.json())
             .then(data => {
                 alert(data.message);
                 if(data.success) this.reset();
             });
        });

        // 为严重程度选项添加点击效果
        document.querySelectorAll('.severity-option').forEach(option => {
            option.addEventListener('click', function() {
                const input = this.querySelector('input');
                input.checked = true;
                
                // 移除所有选项的选中样式
                document.querySelectorAll('.severity-option').forEach(opt => {
                    opt.style.boxShadow = 'none';
                });
                
                // 为当前选项添加选中样式
                this.style.boxShadow = `0 0 0 2px ${getComputedStyle(this).borderColor}`;
            });
        });