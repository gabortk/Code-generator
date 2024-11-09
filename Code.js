function generateCode(length) {
            let code = '';
            const minCharCode = 33;
            const maxCharCode = 126;
            
            for (let i = 0; i < length; i++) {
                const randomCharCode = Math.floor(Math.random() * (maxCharCode - minCharCode + 1)) + minCharCode;
                code += String.fromCharCode(randomCharCode);
            }
            
            return code;
        }

        function generateAndDisplay(length) {
            const output = document.getElementById('output');
            const generatedCode = generateCode(length);
            output.textContent = `Generált ${length} karakteres kód: ${generatedCode}`;
        }