import re

with open('src/screens/how-it-works.html', 'r', encoding='utf-8') as f:
    html = f.read()

body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
if not body_match:
    print("Could not find body tag")
    exit(1)

body_attr_match = re.search(r'<body([^>]*)>', html, re.IGNORECASE)
body_attrs = body_attr_match.group(1) if body_attr_match else ""
body_attrs = body_attrs.replace('class="', 'className="')

body_content = body_match.group(1)

jsx = body_content.replace('class="', 'className="')

# Close elements
jsx = re.sub(r'(<img[^>]+)(?<!/)>', r'\1 />', jsx)
jsx = re.sub(r'(<input[^>]+)(?<!/)>', r'\1 />', jsx)

# Replace comments
jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx, flags=re.DOTALL)

# Convert href="#" to Link
jsx = jsx.replace('<a ', '<Link ')
jsx = jsx.replace('</a>', '</Link>')
jsx = jsx.replace('href="#"', 'to="#"')
jsx = jsx.replace('href=', 'to=')

component = f"""import React from 'react';
import {{ Link }} from 'react-router-dom';

const HowItWorks = () => {{
  return (
    <div {body_attrs}>
{jsx}
    </div>
  );
}};

export default HowItWorks;
"""

with open('src/screens/HowItWorks.jsx', 'w', encoding='utf-8') as f:
    f.write(component)

print("Created HowItWorks.jsx")
