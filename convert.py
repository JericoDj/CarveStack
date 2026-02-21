import re

with open('src/screens/dashboard.html', 'r', encoding='utf-8') as f:
    html = f.read()

body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
if not body_match:
    print("Could not find body tag")
    exit(1)

body_content = body_match.group(1)

jsx = body_content.replace('class="', 'className="')

jsx = jsx.replace('style="font-size: 24px;"', "style={{ fontSize: '24px' }}")

jsx = re.sub(r'style="background-image:\s*url\(\'([^\']+)\'\);"', r'style={{ backgroundImage: `url(\'\1\')` }}', jsx)

jsx = re.sub(r'(<img[^>]+)(?<!/)>', r'\1 />', jsx)
jsx = re.sub(r'(<input[^>]+)(?<!/)>', r'\1 />', jsx)

jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx, flags=re.DOTALL)

# Convert href="#" to Link
jsx = jsx.replace('<a ', '<Link ')
jsx = jsx.replace('</a>', '</Link>')
jsx = jsx.replace('href="#"', 'to="#"')

wrapper_classes = "font-display text-slate-900 antialiased overflow-x-hidden min-h-screen flex flex-col"
background_style = "{ background: 'radial-gradient(at 0% 0%, hsla(210, 80%, 93%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(220, 60%, 96%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(200, 70%, 90%, 1) 0, transparent 50%)', backgroundColor: '#f0f4f8', backgroundAttachment: 'fixed' }"

component = f"""import React from 'react';
import {{ Link }} from 'react-router-dom';

const Dashboard = () => {{
  return (
    <div className="{wrapper_classes}" style={background_style}>
{jsx}
    </div>
  );
}};

export default Dashboard;
"""

with open('src/screens/Dashboard.jsx', 'w', encoding='utf-8') as f:
    f.write(component)

print("Created Dashboard.jsx")
