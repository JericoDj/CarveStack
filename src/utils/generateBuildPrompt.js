import { ConfigOptions } from '../data/ProjectConfigData';

export const generateBuildPrompt = (intent, config) => {
    let prompt = `I need you to build a ${ConfigOptions.intents.find(i => i.id === intent)?.title || 'Project'} with the following specifications:\n\n`;

    const intentData = ConfigOptions[intent];

    if (!intentData) return prompt;

    // Helper to get human-readable names
    const getReadableName = (stepId, value) => {
        const step = intentData.steps.find(s => s.id === stepId);
        if (!step) return value;

        if (step.type === 'grid') {
            const opt = step.options.find(o => o.id === value);
            return opt ? opt.name : value;
        }
        if (step.type === 'tags_depends_on') {
            const depValue = config[step.dependsOn];
            const activeOptions = depValue ? step.options[depValue] || [] : [];
            const opt = activeOptions.find(o => o.id === value);
            return opt ? opt.name : value;
        }
        if (step.type === 'multi_tags' && Array.isArray(value)) {
            return value.map(val => {
                const opt = step.options.find(o => o.id === val);
                return opt ? opt.name : val;
            }).join(', ');
        }
        return value;
    };

    intentData.steps.forEach(step => {
        const value = config[step.id];

        if (step.type === 'features') {
            let features = [];
            if (config.moduleFeatures) {
                Object.values(config.moduleFeatures).forEach(fArr => {
                    features = features.concat(fArr);
                });
            }
            if (features.length > 0) {
                prompt += `## Required Features & Specifics:\n`;
                features.forEach(f => {
                    prompt += `- ${f}\n`;
                });
                prompt += `\n`;
            }
        } else if (value) {
            prompt += `**${step.title}:** ${getReadableName(step.id, value)}\n`;
        }
    });

    prompt += `\n## Execution Instructions:\n`;
    prompt += `1. Please initialize the repository using the specified architecture and configurations above.\n`;
    prompt += `2. Structure the codebase logically, prioritizing clean architecture and maintainability.\n`;
    prompt += `3. Implement the requested features step-by-step, starting with core dependencies.\n`;
    prompt += `4. Provide all necessary configuration files (e.g., package.json, docker-compose.yml, tsconfig.json) to run the project locally.\n`;
    prompt += `5. Write clear, documented code. Assume this is aimed for production use.\n`;

    prompt += `\n## Interactive Consulting Flow:\n`;
    prompt += `As an architecture consultant, follow these steps linearly to help me finalize the details:\n\n`;

    prompt += `STEP 2 — DOMAIN & FEATURE BREAKDOWN\n`;
    prompt += `For each chosen domain module above (e.g. Users, Products, Orgs), ask behavior details first before suggesting tools.\n`;
    prompt += `- Ask about offline mapping techniques chosen (e.g. Hive vs SharedPreferences).\n`;
    prompt += `- Ask about roles and relationship limits (e.g., how many users per organization?).\n`;
    prompt += `- For real-time features like WebRTC Chat or notifications, ask about scope (1:1 vs group, retention size).\n`;
    prompt += `Do NOT suggest tools yet.\n\n`;

    if (config.modulePrompts && Object.keys(config.modulePrompts).length > 0) {
        prompt += `### EXPLICIT DEVELOPER DIRECTIVES FOR SPECIFIC MODULES ###\n`;
        prompt += `The developer has provided strict constraints for the following modules. YOU MUST ADHERE TO THIS:\n`;
        Object.entries(config.modulePrompts).forEach(([instanceId, text]) => {
            if (text.trim() !== '') {
                // Determine module name from instanceId (e.g. 'auth_12345' -> 'auth')
                const baseModuleId = instanceId.split('_')[0];
                prompt += `- **${baseModuleId.toUpperCase()} MODULE**: "${text.trim()}"\n`;
            }
        });
        prompt += `\n`;
    }

    prompt += `STEP 3 — ASSIGN RESPONSIBILITY\n`;
    prompt += `Review my selected Identity Provider (Firebase/Supabase/Custom API) and the specific Auth Methods (Email, Magic Link, etc.) to ensure they fit correctly into the architecture.\n`;
    prompt += `Review my selected Primary Database (Firestore/Postgres) and File Storage (S3/Firebase Storage).\n`;
    prompt += `Propose any missing glue technologies providing 2–4 choices only, explaining tradeoffs briefly, and ask me to pick ONE.\n\n`;

    prompt += `STEP 4 — COMMUNICATION STYLE\n`;
    prompt += `After the database decision, review my selected API Communication methods (REST, GraphQL, gRPC, WebSockets).\n`;
    prompt += `Ask:\n`;
    prompt += `- client direct access allowed?\n`;
    prompt += `- sensitive operations?\n`;
    prompt += `Then map the chosen APIs to the domain modules (e.g., REST for Products, WebSocket for Chat).\n\n`;

    prompt += `STEP 5 — FINAL ARCHITECTURE\n`;
    prompt += `After all features are completed, output:\n`;
    prompt += `- Data Model Schema for all chosen Domains (Users, Products, etc.)\n`;
    prompt += `- Architecture summary table (Feature → Owner → Technology)\n`;
    prompt += `- Data flow diagram (text format)\n`;
    prompt += `- Folder structure suggestion\n`;
    prompt += `- What NOT to add (avoid overengineering)\n`;

    return prompt;
};
