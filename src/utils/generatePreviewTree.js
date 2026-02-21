export const generatePreviewTree = (intent, config) => {
    // Helper to format features into files or folders
    const getFeatureNodes = (category) => {
        let features = [];
        if (config.moduleFeatures) {
            Object.values(config.moduleFeatures).forEach(fArr => {
                features = features.concat(fArr);
            });
        }
        const nodes = [];

        // Add basic generic matching for preview purposes
        if (features.some(f => f.toLowerCase().includes('auth'))) nodes.push({ name: 'auth/', type: 'folder', children: [] });
        if (features.some(f => f.toLowerCase().includes('payment'))) nodes.push({ name: 'billing/', type: 'folder', children: [] });
        if (features.some(f => f.toLowerCase().includes('database') || f.toLowerCase().includes('prisma'))) nodes.push({ name: 'prisma/', type: 'folder', children: [{ name: 'schema.prisma', type: 'file' }] });

        return nodes;
    };

    switch (intent) {
        case 'web':
            const webTree = [
                {
                    name: 'public/', type: 'folder', children: [
                        { name: 'favicon.ico', type: 'file' },
                        { name: 'index.html', type: 'file' }
                    ]
                },
                {
                    name: 'src/', type: 'folder', children: [
                        {
                            name: 'components/', type: 'folder', children: [
                                { name: 'ui/', type: 'folder', children: [] },
                                { name: 'layout.tsx', type: 'file' }
                            ]
                        },
                        {
                            name: config.framework?.includes('next') ? 'app/' : 'pages/', type: 'folder', children: [
                                { name: 'page.tsx', type: 'file' },
                                { name: 'layout.tsx', type: 'file' }
                            ]
                        },
                        ...getFeatureNodes('web'),
                    ]
                },
                { name: 'package.json', type: 'file' }
            ];

            if (config.styling?.includes('Tailwind')) {
                webTree.push({ name: 'tailwind.config.js', type: 'file' });
                webTree.push({ name: 'postcss.config.js', type: 'file' });
            }
            if (config.language === 'ts') {
                webTree.push({ name: 'tsconfig.json', type: 'file' });
            }
            return webTree;

        case 'backend':
            const backendTree = [
                {
                    name: 'src/', type: 'folder', children: [
                        { name: 'controllers/', type: 'folder', children: [] },
                        { name: 'services/', type: 'folder', children: [] },
                        { name: 'routes/', type: 'folder', children: [] },
                        { name: 'models/', type: 'folder', children: [] },
                        ...getFeatureNodes('backend'),
                        { name: config.language === 'ts' ? 'index.ts' : 'index.js', type: 'file' }
                    ]
                }
            ];

            if (config.language === 'ts' || config.language === 'js') backendTree.push({ name: 'package.json', type: 'file' });
            if (config.language === 'python') backendTree.push({ name: 'requirements.txt', type: 'file' });
            if (config.language === 'go') backendTree.push({ name: 'go.mod', type: 'file' });
            if (config.language === 'java') backendTree.push({ name: 'pom.xml', type: 'file' });

            if (config.deployment?.includes('Docker')) {
                backendTree.push({ name: 'Dockerfile', type: 'file' });
                backendTree.push({ name: 'docker-compose.yml', type: 'file' });
            }
            return backendTree;

        case 'mobile':
            const mobileTree = [];
            if (config.framework?.includes('Flutter')) {
                mobileTree.push(
                    { name: 'android/', type: 'folder', children: [] },
                    { name: 'ios/', type: 'folder', children: [] },
                    {
                        name: 'lib/', type: 'folder', children: [
                            { name: 'main.dart', type: 'file' },
                            ...getFeatureNodes('mobile')
                        ]
                    },
                    { name: 'pubspec.yaml', type: 'file' }
                );
            } else if (config.framework?.includes('React Native') || config.framework?.includes('Expo')) {
                mobileTree.push(
                    {
                        name: 'app/', type: 'folder', children: [
                            { name: '_layout.tsx', type: 'file' },
                            { name: 'index.tsx', type: 'file' }
                        ]
                    },
                    { name: 'components/', type: 'folder', children: [] },
                    ...getFeatureNodes('mobile'),
                    { name: 'package.json', type: 'file' },
                    { name: 'app.json', type: 'file' }
                );
            } else {
                mobileTree.push(
                    { name: 'src/', type: 'folder', children: [] },
                    { name: 'config/', type: 'file' }
                );
            }
            return mobileTree;

        case 'fullstack':
            return [
                {
                    name: 'apps/', type: 'folder', children: [
                        { name: 'web/', type: 'folder', children: generatePreviewTree('web', config) },
                        { name: 'api/', type: 'folder', children: generatePreviewTree('backend', config) },
                        ...(config.mobile !== 'None' ? [{ name: 'mobile/', type: 'folder', children: generatePreviewTree('mobile', config) }] : [])
                    ]
                },
                {
                    name: 'packages/', type: 'folder', children: [
                        { name: 'ui/', type: 'folder', children: [] },
                        { name: 'database/', type: 'folder', children: [] },
                        { name: 'config/', type: 'folder', children: [] }
                    ]
                },
                { name: 'package.json', type: 'file' },
                { name: 'turbo.json', type: 'file' }
            ];

        default:
            return [];
    }
};
