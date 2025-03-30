const fs = require('fs');
const path = require('path');

// 获取当前目录下的所有文件
const files = fs.readdirSync('.');

// 过滤出符合条件的文件（Q开头，后跟数字，扩展名为.ts或.js）
const codeFiles = files.filter(file => {
    const match = file.match(/^Q(\d+)(\.ts|\.js)$/);
    return match && match[1] && match[2];
}).sort((a, b) => {
    const numA = parseInt(a.match(/^Q(\d+)/)[1], 10);
    const numB = parseInt(b.match(/^Q(\d+)/)[1], 10);
    return numA - numB;
});

// 按照数字区间分组，每50个数字为一个区间
const groups = {};
codeFiles.forEach(file => {
    const num = parseInt(file.match(/^Q(\d+)/)[1], 10);
    const group = Math.ceil(num / 50); // 计算属于哪个区间
    if (!groups[group]) {
        groups[group] = [];
    }
    groups[group].push(file);
});

// 写入到.md文件
Object.keys(groups).forEach(groupKey => {
    const group = groups[groupKey];
    const mdFileName = `${groupKey * 50}.md`; // 文件名以当前区间结尾数字命名
    let mdContent = `# ${groupKey * 50}\n\n`;

    group.forEach(file => {
        mdContent += `## ${file}\n\n\`\`\`\n`;
        const codeContent = fs.readFileSync(file, 'utf-8');
        mdContent += codeContent + '\n';
        mdContent += '\`\`\`\n\n';
    });

    fs.writeFileSync(path.join('mds', mdFileName), mdContent, 'utf-8');
    console.log(`Generated ${mdFileName}`);
});