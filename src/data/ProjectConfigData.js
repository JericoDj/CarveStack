export const ComprehensiveFeatureModules = [
    { id: 'admin', name: 'Admin - Admin & Operations', icon: 'engineering', features: ['Admin Panel / Dashboard', 'User Management', 'Content Moderation', 'System Settings', 'Feature Flags', 'Maintenance Mode', 'Logs Viewer'] },
    { id: 'analytics', name: 'Admin - Analytics & Insights', icon: 'analytics', features: ['User Analytics', 'Event Tracking', 'Funnel Tracking', 'Retention Metrics', 'Heatmaps', 'Custom Dashboards', 'Admin Insights'] },
    { id: 'approvals', name: 'Admin - Approvals & Workflows', icon: 'rule', features: ['Approval Requests', 'Multi-Step Approval', 'Conditional Approvers', 'Escalation Rules', 'Delegated Approval', 'Approval Deadlines', 'Approval Comments', 'Reject & Revise', 'Approval Audit Trail', 'Auto Approval Rules', 'Manager Hierarchy', 'Workflow Templates'] },
    { id: 'feature_flags', name: 'Admin - Feature Flags & Experiments', icon: 'science', features: ['Enable / Disable Features', 'Role-Based Feature Access', 'A/B Testing', 'Gradual Rollout', 'Beta User Groups', 'Remote Config Updates', 'Experiment Metrics', 'Kill Switch', 'Environment-Based Flags', 'Scheduled Feature Release', 'Variant Comparison', 'Experiment Reports'] },
    { id: 'governance', name: 'Admin - Governance & Administration', icon: 'account_balance', features: ['Admin Policies', 'Organization Policies', 'Approval Governance', 'Data Ownership Rules', 'Delegated Administration', 'Hierarchy Management', 'Policy Enforcement Rules', 'Governance Reports', 'Admin Action Reviews', 'Separation of Duties', 'Operational Controls', 'Compliance Oversight'] },
    { id: 'moderation', name: 'Admin - Moderation Operations', icon: 'gavel', features: ['Content Review Queue', 'Moderator Roles', 'Strike System', 'Temporary Suspensions', 'Permanent Bans', 'Appeal Requests', 'Moderation Notes', 'Evidence Attachments', 'Policy Rules Engine', 'Auto Moderation Actions', 'Transparency Reports', 'Moderator Analytics'] },
    { id: 'organizations', name: 'Admin - Organizations & Teams', icon: 'domain', features: ['Multiple Workspaces', 'Invite Members', 'Role Permissions', 'Department Groups', 'Ownership Transfer', 'Access Requests', 'Team Activity Logs', 'Team Settings', 'Resource Isolation', 'Team Billing', 'Member Suspension', 'Admin Impersonation'] },
    { id: 'cms', name: 'Admin - Page Builder & CMS', icon: 'dashboard_customize', features: ['Drag & Drop Page Builder', 'Reusable Sections / Blocks', 'Dynamic Data Binding', 'Custom Pages', 'Landing Page Builder', 'SEO Meta Settings', 'Slug / URL Control', 'Draft & Publish Workflow', 'Scheduled Publishing', 'Preview Mode', 'Page Templates', 'Content Versioning'] },
    { id: 'reports', name: 'Admin - Reports & Export', icon: 'insert_chart', features: ['Generate Reports', 'Custom Date Range', 'Charts & Graphs', 'Filter & Group Data', 'Scheduled Reports', 'Export CSV', 'Export Excel', 'Export PDF', 'Email Report Delivery', 'Shareable Report Link', 'Print Layout', 'Data Snapshots'] },
    { id: 'usage_limits', name: 'Admin - Usage Limits & Quotas', icon: 'data_usage', features: ['API Usage Limits', 'Storage Limits', 'Feature Usage Limits', 'Daily Action Limits', 'Rate Plans', 'Overage Billing', 'Quota Reset Cycles', 'Per-User Limits', 'Per-Team Limits', 'Limit Alerts', 'Usage Dashboard', 'Auto Upgrade Prompts'] },
    { id: 'whitelabel', name: 'Admin - White-Label & Branding', icon: 'branding_watermark', features: ['Custom Domain per Client', 'Per-Client Branding', 'Logo & App Name Override', 'Theme per Client', 'Email Template Branding', 'Client Feature Toggles', 'Client Data Isolation', 'Custom Terms per Client', 'Branded Notifications', 'Tenant Settings Panel', 'Tenant Usage Limits', 'Tenant Billing'] },
    { id: 'ai', name: 'AI - AI & Automation', icon: 'smart_toy', features: ['AI Chat Assistant', 'AI Content Generator', 'AI Image Generator', 'AI Video Generator', 'AI Recommendations', 'AI Moderation', 'AI Tagging / Categorization', 'AI Summaries', 'AI Transcription (Speech-to-Text)', 'Text-to-Speech Voice', 'Semantic Search', 'Smart Auto Replies', 'Prompt Templates', 'Workflow Automation (Triggers & Actions)', 'Scheduled AI Tasks', 'Behavior-Based Actions', 'Document Understanding (OCR / Extraction)', 'Prediction / Forecasting'] },
    { id: 'ai_training', name: 'AI - Custom AI Models', icon: 'model_training', features: ['Upload Training Data', 'Fine-Tune AI Model', 'Custom Knowledge Base', 'Embeddings Storage', 'Semantic Retrieval', 'Private AI Assistant', 'Model Versioning', 'Retraining Jobs', 'Evaluation Metrics', 'Prompt Testing Lab', 'Usage Cost Tracking', 'Model Access Control'] },
    { id: 'knowledge_graph', name: 'AI - Knowledge Graph', icon: 'hub', features: ['Entity Relationships', 'Graph Queries', 'Recommendation Graph', 'Connected Data Insights', 'Related Content Discovery', 'Semantic Linking', 'Relationship Visualization', 'Influence Scoring', 'Entity Merging', 'Duplicate Detection', 'Graph Search', 'Graph Analytics'] },
    { id: 'personalization', name: 'AI - Personalization', icon: 'psychology', features: ['Personalized Recommendations', 'Dynamic Homepage Content', 'Behavior-Based Suggestions', 'Location-Based Content', 'Time-Based Content', 'User Preference Memory', 'Recently Viewed', 'Smart Sorting', 'Personalized Notifications', 'AI Interest Detection', 'Custom Dashboards', 'Segment-Based Content'] },
    { id: 'anim_adaptive', name: 'Animations - Adaptive Motion', icon: 'psychology', features: ['Reduced Motion Mode', 'Performance-Based Animation Scaling', 'Battery Saver Animations', 'Accessibility Motion Adjustments', 'Platform Adaptive Motion (iOS / Android)', 'Dynamic Duration Adjustment', 'Frame Rate Optimization', 'Low-End Device Fallback', 'Lazy Animation Loading', 'Animation Pause When Hidden'] },
    { id: 'anim_advanced', name: 'Animations - Advanced Motion Effects', icon: 'auto_awesome', features: ['Parallax Scrolling', 'Staggered List Animations', 'Physics-Based Motion', 'Spring Animations', '3D Transforms', 'Morphing Shapes', 'Particle Effects', 'Blur Transition Effects', 'Glassmorphism Motion', 'Background Motion Layers'] },
    { id: 'anim_basic', name: 'Animations - Basic Animations', icon: 'animation', features: ['Fade In / Fade Out', 'Slide In / Out', 'Scale Animation', 'Opacity Transitions', 'Simple Page Transitions', 'Button Press Feedback', 'Loading Spinners', 'Snackbar Animations', 'Dialog Appear / Dismiss', 'List Item Appear'] },
    { id: 'anim_gesture', name: 'Animations - Gesture & Drag Motion', icon: 'swipe', features: ['Drag & Drop', 'Swipe Actions', 'Reorderable Lists', 'Swipe To Dismiss', 'Card Stack Swiping', 'Snap Points', 'Momentum Scrolling', 'Elastic Overscroll', 'Pan & Zoom', 'Interactive Cards'] },
    { id: 'anim_interactive', name: 'Animations - Interactive Animations', icon: 'touch_app', features: ['Tap Ripple Effects', 'Hover Effects', 'Long Press Effects', 'Toggle Switch Animations', 'Expand / Collapse Panels', 'Animated Icons', 'Selection Highlight Motion', 'Pull To Refresh Animation', 'Animated Form Validation', 'Focus Field Animations'] },
    { id: 'anim_navigation', name: 'Animations - Navigation Motion', icon: 'explore', features: ['Shared Element Transitions', 'Hero Animations', 'Custom Page Transitions', 'Tab Switching Animations', 'Bottom Nav Motion', 'Route Transition Builder', 'Animated Navigation Rail', 'Modal Sheet Motion', 'Back Gesture Animation', 'Nested Navigation Transitions'] },
    { id: 'audit_history', name: 'Auditing - Audit & History', icon: 'history', features: ['User Activity Logs', 'Admin Activity Logs', 'Change History', 'Version History', 'Data Change Tracking', 'Access History', 'Export Audit Logs', 'Timestamp Tracking', 'Restore Previous Version', 'Compliance Log Storage', 'Immutable Logs', 'Action Timeline'] },
    { id: 'data_governance', name: 'Auditing - Data Governance', icon: 'policy', features: ['Data Ownership Tracking', 'Data Lineage', 'Field-Level Permissions', 'Sensitive Data Masking', 'Data Access Approval', 'Retention Enforcement', 'Legal Holds', 'Data Classification', 'Data Access Logs', 'Dataset Catalog', 'Data Steward Roles', 'Governance Reports'] },
    { id: 'monitoring', name: 'Auditing - Monitoring & Observability', icon: 'monitoring', features: ['Error Tracking', 'Crash Reports', 'Performance Monitoring', 'API Monitoring', 'Real-Time Logs', 'Alert Notifications', 'System Health Dashboard', 'Usage Metrics', 'Latency Tracking', 'Server Resource Monitoring', 'Uptime Monitoring', 'Custom Event Tracking', 'Anomaly Detection', 'Audit Trail Viewer'] },
    { id: 'api_integration', name: 'Backend - API Integration', icon: 'settings_input_component', features: ['Connect External APIs', 'REST API Requests', 'GraphQL Requests', 'API Authentication (API Key / OAuth)', 'Custom Headers & Tokens', 'Webhook Receivers', 'Webhook Senders', 'Retry Failed Requests', 'Rate Limit Handling', 'Response Mapping', 'Data Transformation', 'Scheduled API Sync', 'Real-Time API Sync', 'API Error Handling', 'API Logs & History', 'Environment Variables (Dev / Prod)', 'Secrets Management', 'Third-Party Service Connectors'] },
    { id: 'backend_api_lifecycle', name: 'Backend - API Lifecycle Management', icon: 'update', features: ['API Deprecation Policy', 'API Compatibility Checks', 'Breaking Change Detection', 'Version Sunset Notices', 'Client Capability Negotiation', 'Contract Testing', 'OpenAPI Validation', 'SDK Compatibility Tracking', 'Consumer Analytics', 'API Change Approval Flow', 'Backward Compatibility Layer', 'API Migration Guides'] },
    { id: 'automation', name: 'Backend - Automation & Jobs', icon: 'precision_manufacturing', features: ['Scheduled Jobs (Cron)', 'Task Queue Processing', 'Retry Failed Jobs', 'Workflow Automation', 'Event Triggers', 'Conditional Actions', 'Delayed Tasks', 'Batch Processing', 'Webhook Triggers', 'External API Calls', 'Data Sync Jobs', 'Cleanup Jobs'] },
    { id: 'backup_recovery', name: 'Backend - Backup & Recovery', icon: 'backup', features: ['Automatic Backups', 'Manual Backups', 'Point-In-Time Restore', 'Environment Restore', 'Backup Retention Rules', 'Encrypted Backups', 'Geo-Redundant Storage', 'Restore Preview', 'Restore Specific Tables', 'Disaster Recovery Plan', 'Backup Status Alerts', 'Recovery Audit Logs'] },
    { id: 'backend_caching', name: 'Backend - Caching & Acceleration', icon: 'speed', features: ['In-Memory Cache', 'Distributed Cache (Redis)', 'Query Result Cache', 'HTTP Cache Headers', 'Cache Invalidation Rules', 'Stale-While-Revalidate', 'Cache Warming', 'Rate Cache', 'Session Cache', 'Edge Cache Strategy', 'Hot Key Protection', 'Cache Metrics'] },
    { id: 'backend_concurrency', name: 'Backend - Concurrency & Data Consistency', icon: 'sync_lock', features: ['Optimistic Locking', 'Pessimistic Locking', 'Row Versioning', 'Distributed Locks', 'Transaction Isolation Levels', 'Conflict Detection', 'Saga Transactions', 'Compensating Transactions', 'Eventual Consistency Handling', 'Atomic Operations', 'Write Contention Handling', 'Consistency Guarantees'] },
    { id: 'backend_data_arch', name: 'Backend - Data Architecture', icon: 'schema', features: ['Multi-Database Support', 'Read Replicas', 'Sharding Strategy', 'Partitioned Tables', 'Archival Storage', 'Cold Storage Tiering', 'Data Compaction', 'Schema Migration Management', 'Zero-Downtime Migrations', 'Data Backfill Jobs', 'Multi-Tenant Isolation Models', 'Data Lifecycle Policies'] },
    { id: 'data_import_migration', name: 'Backend - Data Import & Migration', icon: 'cloud_upload', features: ['CSV Import', 'Excel Import', 'Bulk Data Upload', 'Data Mapping Tool', 'Validation Before Import', 'Duplicate Detection', 'Import History Logs', 'Scheduled Imports', 'External Data Sync', 'API Data Migration', 'Rollback Import', 'Export Full Database'] },
    { id: 'backend_data_quality', name: 'Backend - Data Quality Controls', icon: 'fact_check', features: ['Schema Validation', 'Contract Validation', 'Input Sanitization', 'Data Integrity Checks', 'Duplicate Detection', 'Anomaly Detection Rules', 'Data Repair Jobs', 'Validation Pipelines', 'Rejected Data Queue', 'Consistency Audits', 'Reference Integrity Checks', 'Data Quality Reports'] },
    { id: 'dev_platform', name: 'Backend - Developer Platform', icon: 'api', features: ['Public API Access', 'API Documentation', 'API Keys', 'Rate Limits', 'SDK Generation', 'Webhook Subscriptions', 'Sandbox Environment', 'Developer Dashboard', 'Usage Metrics', 'API Versioning', 'App Marketplace', 'Third-Party App Approval'] },
    { id: 'mobile_features', name: 'Backend - Device & Platform Native', icon: 'smartphone', features: ['Offline Mode', 'Sync Engine', 'Geolocation / Maps', 'QR / Barcode Scanner', 'Camera Capture', 'File Picker', 'Biometric Login'] },
    { id: 'federation', name: 'Backend - Federation & Interoperability', icon: 'public', features: ['Cross-Instance Accounts', 'Remote Content Sync', 'Shared Identity Providers', 'External Instance Messaging', 'ActivityPub Support', 'Federated Search', 'Trust Levels', 'Instance Blocking', 'Remote Moderation', 'Cross-Server Notifications', 'External Mentions', 'Network Discovery'] },
    { id: 'integrations', name: 'Backend - Integrations', icon: 'extension', features: ['Webhooks (Incoming)', 'Webhooks (Outgoing)', 'REST API Access', 'API Keys Management', 'OAuth Connections', 'Zapier / Make Support', 'Slack / Discord Alerts', 'Calendar Sync', 'Cloud Storage Sync', 'Import External Data', 'Export to External Systems', 'Third-Party Plugins'] },
    { id: 'backend_messaging', name: 'Backend - Messaging & Event Streaming', icon: 'stream', features: ['Message Broker Integration', 'Publish / Subscribe Topics', 'Event Replay', 'Dead Letter Topics', 'Exactly-Once Processing', 'Consumer Groups', 'Event Ordering Guarantees', 'Stream Processing', 'Event Versioning', 'Schema Registry', 'Event Backfill', 'Message Retention Policies'] },
    { id: 'miniapps', name: 'Backend - Mini Apps Platform', icon: 'apps', features: ['Embedded Apps', 'App Permissions', 'App SDK', 'App Lifecycle Events', 'App Billing Share', 'App Review Process', 'App Listing Page', 'Install / Uninstall Apps', 'App Storage Isolation', 'App Webview Container', 'App Event Hooks', 'App Usage Analytics'] },
    { id: 'backend_network', name: 'Backend - Network & Edge Control', icon: 'router', features: ['API Gateway Routing', 'Request Rate Shaping', 'IP Allow / Deny Lists', 'Geo Blocking', 'Load Balancing Strategies', 'Sticky Sessions', 'Edge Routing Rules', 'Canary Routing', 'Blue-Green Routing', 'Service Mesh Integration', 'Internal Service Discovery', 'Network Policies'] },
    { id: 'offline', name: 'Backend - Offline Mode & Sync', icon: 'wifi_off', features: ['Offline Data Access', 'Local Database Storage', 'Create / Edit While Offline', 'Queued Actions (Send Later)', 'Auto Sync on Reconnect', 'Manual Sync Button', 'Conflict Resolution Rules', 'Background Sync', 'Partial Sync (Changed Data Only)', 'Cache Images & Files', 'Offline Forms Submission', 'Offline Authentication Session', 'Retry Failed Requests', 'Sync Status Indicator', 'Download Data for Offline Use', 'Upload When Connected', 'Low Bandwidth Mode', 'Data Consistency Checks'] },
    { id: 'plugins', name: 'Backend - Plugins & Extensions', icon: 'extension', features: ['Installable Plugins', 'Plugin Permissions', 'Plugin Sandbox Isolation', 'Plugin Settings Panel', 'Plugin Updates', 'Paid Plugins', 'Plugin Marketplace', 'Developer Submissions', 'Plugin Ratings', 'Enable / Disable Plugins', 'Version Compatibility', 'Plugin API Access'] },
    { id: 'pwa', name: 'Backend - PWA & Desktop', icon: 'desktop_windows', features: ['Installable App (PWA)', 'Offline Launch Support', 'Home Screen Icon', 'Push Notifications (Web)', 'Background Sync', 'Desktop Notifications', 'Auto Update Service Worker', 'File System Access', 'Window Controls Overlay', 'Deep Linking', 'Multi-Window Support', 'Desktop Shortcuts'] },
    { id: 'backend_resilience', name: 'Backend - Resilience & Fault Tolerance', icon: 'shield', features: ['Retry Policies', 'Circuit Breaker', 'Fallback Responses', 'Graceful Degradation', 'Timeout Handling', 'Bulkhead Isolation', 'Idempotency Keys', 'Request Deduplication', 'Poison Message Handling', 'Backpressure Handling', 'Partial Failure Recovery', 'Service Health Checks'] },
    { id: 'sandbox', name: 'Backend - Sandbox & Testing', icon: 'bug_report', features: ['Staging Environment', 'Test Data Generator', 'Mock API Responses', 'Feature Preview Mode', 'Role Simulation', 'Load Testing Tools', 'Test Accounts', 'QA Checklists', 'Preview Links', 'Environment Switching', 'Test Payment Mode', 'Automated Test Hooks'] },
    { id: 'backend_scaling', name: 'Backend - Scaling & Capacity', icon: 'trending_up', features: ['Horizontal Auto Scaling', 'Vertical Scaling Policies', 'Queue-Based Scaling', 'Worker Scaling', 'Cold Start Mitigation', 'Resource Quotas', 'Priority Scheduling', 'Load Shedding', 'Throttling Strategies', 'Burst Handling', 'Traffic Forecast Scaling', 'Capacity Planning Metrics'] },
    { id: 'backend_secrets', name: 'Backend - Secrets & Key Management', icon: 'key', features: ['Secret Vault Integration', 'Key Rotation', 'Encrypted Environment Variables', 'Per-Service Credentials', 'Temporary Access Tokens', 'Signed URLs', 'Certificate Management', 'Encryption Key Versioning', 'Hardware Security Module Support', 'Secrets Audit Logs', 'Scoped Access Keys', 'Secure Service-to-Service Auth'] },
    { id: 'versioning', name: 'Backend - Versioning & Releases', icon: 'new_releases', features: ['App Version Control', 'Release Notes', 'Migration Scripts', 'Rollback Releases', 'Maintenance Window Mode', 'Forced Updates', 'Version Compatibility', 'API Versioning', 'Change Logs', 'Release Channels (Beta/Stable)', 'Hotfix Deployment', 'Update Alerts'] },
    { id: 'workers', name: 'Backend - Workers & Queues', icon: 'engineering', features: ['Job Queue Workers', 'Priority Queues', 'Delayed Jobs', 'Retry Policies', 'Dead Letter Queue', 'Parallel Processing', 'Scheduled Workers', 'Long-Running Tasks', 'Progress Tracking', 'Job Cancellation', 'Worker Health Monitoring', 'Queue Metrics'] },
    { id: 'booking', name: 'Commerce - Booking & Scheduling', icon: 'event', features: ['Calendar', 'Time Slots', 'Availability Rules', 'Reservations', 'Recurring Bookings', 'Staff Assignment', 'Queue System', 'Waitlist', 'Reminders'] },
    { id: 'commerce', name: 'Commerce - Commerce & Products', icon: 'storefront', features: ['Product Catalog', 'Inventory Management', 'Variants (Size, Color)', 'Shopping Cart', 'Wishlist', 'Coupons / Discounts', 'Checkout System', 'Order Management', 'Returns & Refunds', 'Subscriptions / Plans', 'Digital Products', 'License Keys'] },
    { id: 'inventory', name: 'Commerce - Inventory & Assets', icon: 'inventory_2', features: ['Asset Tracking', 'Stock Levels', 'Stock Movements', 'Low Stock Alerts', 'Serial Numbers', 'Batch Tracking', 'Warehouses / Locations', 'Transfer Between Locations', 'Stock Adjustments', 'Asset Assignment', 'Maintenance Records', 'Inventory Reports'] },
    { id: 'marketplace', name: 'Commerce - Marketplace', icon: 'store', features: ['Multi-Vendor Stores', 'Vendor Dashboard', 'Vendor Payouts', 'Commission System', 'Vendor Ratings', 'Dispute Resolution'] },
    { id: 'courses', name: 'Content - Courses & Learning', icon: 'menu_book', features: ['Course Creation', 'Lessons & Modules', 'Video Lessons', 'Quizzes', 'Assignments', 'Completion Certificates', 'Progress Tracking', 'Instructor Dashboard', 'Student Dashboard', 'Course Reviews', 'Drip Content Release', 'Course Enrollment'] },
    { id: 'app_system', name: 'Core - App System Core', icon: 'dns', features: ['Search Engine', 'Global Filters & Sorting', 'Tags / Categories', 'Bookmarking', 'Reporting / Flagging', 'Versioning / Drafts', 'Soft Delete & Restore'] },
    { id: 'support', name: 'Core - Help & Support', icon: 'support_agent', features: ['FAQ Pages', 'Help Articles', 'Search Help Center', 'Support Tickets', 'Priority Levels', 'Assign Support Agents', 'User Conversations', 'Attachments in Tickets', 'Ticket Status Tracking', 'Customer Satisfaction Rating', 'Internal Notes', 'Support Analytics'] },
    { id: 'localization', name: 'Core - Localization & Internationalization', icon: 'language', features: ['Multi-Language UI', 'Language Switcher', 'Auto Detect Language', 'Regional Date Formats', 'Currency Formatting', 'Timezone Conversion', 'Translation Files', 'Localized Notifications', 'RTL Layout Support', 'Country Restrictions', 'Content Localization', 'Multi-Currency Pricing'] },
    { id: 'notifications', name: 'Core - Notifications', icon: 'notifications', features: ['In-App Notifications', 'Push Notifications', 'Email Notifications', 'SMS Notifications', 'Notification Preferences', 'Scheduled Notifications', 'Topic Subscriptions', 'Broadcast / Announcements', 'User Mentions (@user)', 'Action Buttons (Approve / Reject)', 'Quiet Hours / Do Not Disturb', 'Delivery Status Tracking'] },
    { id: 'onboarding', name: 'Core - Onboarding & Tutorials', icon: 'school', features: ['First-Time User Walkthrough', 'Step-by-Step Tutorials', 'Tooltips & Hints', 'Progress Checklist', 'Interactive Guides', 'Skip / Resume Onboarding', 'Role-Based Onboarding', 'Demo Data Generator', 'Welcome Messages', 'Onboarding Analytics', 'Completion Rewards', 'Help Center Links'] },
    { id: 'search_indexing', name: 'Core - Search & Indexing', icon: 'search', features: ['Full-Text Search', 'Fuzzy Search', 'Auto Suggestions', 'Search Analytics', 'Indexed Fields Control', 'Filterable Search', 'Geo Search', 'Search Highlighting', 'Saved Searches', 'Search History', 'AI Semantic Search', 'Reindex Data'] },
    { id: 'user_data', name: 'Core - User Data & Preferences', icon: 'person', features: ['User Profiles', 'Contacts / Address Book', 'Preferences / Settings', 'Activity History', 'Saved Items / Favorites', 'Follow / Subscribe System', 'Blocking / Muting Users', 'Verification (KYC/Email/Phone)'] },
    { id: 'contracts', name: 'Documents - Contracts & E-Signature', icon: 'draw', features: ['Create Contracts', 'Upload Documents', 'E-Signature Capture', 'Multiple Signers', 'Signature Order', 'Timestamp Certificate', 'Document Locking', 'Contract Status Tracking', 'Reminders to Sign', 'Reusable Templates', 'Signed Document Archive', 'Download Signed Copy'] },
    { id: 'files', name: 'Documents - Files & Documents', icon: 'folder', features: ['File Upload', 'Multiple File Upload', 'Folder Organization', 'File Preview', 'Document Viewer (PDF/Docs)', 'Version History', 'File Sharing Links', 'Access Permissions', 'Download Tracking', 'File Expiration', 'Large File Upload', 'Secure Private Files'] },
    { id: 'forms', name: 'Documents - Forms & Surveys', icon: 'list_alt', features: ['Custom Form Builder', 'Text / Number Fields', 'Dropdown & Multi-Select', 'Date & Time Picker', 'File Upload Field', 'Validation Rules', 'Conditional Fields', 'Save Draft Responses', 'Public Share Link', 'Anonymous Responses', 'Response Export (CSV/PDF)', 'Response Analytics'] },
    { id: 'legal', name: 'Documents - Legal & Policies', icon: 'policy', features: ['Terms of Service Page', 'Privacy Policy Page', 'Cookie Consent Banner', 'Age Verification', 'User Agreement Tracking', 'Policy Versioning', 'Policy Acceptance Logs', 'Legal Document Templates', 'E-Signature Support', 'Download Legal Documents', 'Compliance Notifications', 'Policy Update Alerts'] },
    { id: 'library', name: 'Documents - Library & Resources', icon: 'local_library', features: ['Collections / Categories', 'Browse Library', 'Search Resources', 'Filter & Sorting', 'Book / Item Details Page', 'Save / Bookmark Items', 'Recently Viewed', 'Featured Resources', 'Downloadable Resources', 'Preview Before Download', 'Access Permissions', 'Favorites / Reading List', 'Progress Tracking', 'History Tracking', 'Ratings & Reviews', 'Recommendations', 'Offline Access', 'Resource Sharing', 'Author / Publisher Info'] },
    { id: 'billing_ops', name: 'Financial - Billing Operations', icon: 'request_quote', features: ['Manual Invoices', 'Adjust Charges', 'Credit Notes', 'Write-Off Balances', 'Refund Management', 'Payment Reconciliation', 'Tax Reports', 'Accounting Export', 'Revenue Reports', 'Failed Payment Recovery', 'Dunning Emails', 'Finance Audit Logs'] },
    { id: 'financial', name: 'Financial - Financial & Billing', icon: 'payments', features: ['One-time Payments', 'Subscriptions', 'Usage Billing (Metered)', 'Wallet / Credits', 'Invoices', 'Taxes / VAT', 'Payouts', 'Refunds', 'Donation / Tips'] },
    { id: 'payments_module', name: 'Financial - Payments', icon: 'credit_card', features: ['One-Time Payments', 'Online Checkout Page', 'Saved Payment Methods', 'Credit / Debit Cards', 'Bank Transfer Payments', 'Cash Payments', 'Manual Payment Confirmation', 'Payment Status Tracking', 'Partial Payments', 'Split Payments', 'Payment Links', 'Invoice Payments', 'Refund Processing', 'Payment Receipts', 'Payment Notifications', 'Tax Calculation Support', 'Multi-Currency Payments', 'Payment Failure Handling', '3D Secure Authentication', 'Payment Provider Integration'] },
    { id: 'subscriptions', name: 'Financial - Subscriptions & Plans', icon: 'card_membership', features: ['Subscription Plans', 'Free / Pro / Enterprise Tiers', 'Recurring Billing', 'Trial Period', 'Plan Upgrades / Downgrades', 'Usage-Based Billing', 'Feature Gating', 'Coupon Codes', 'Proration Handling', 'Auto Renewal', 'Subscription Status Tracking', 'Cancel / Pause Subscription', 'Invoice Generation', 'Billing History', 'Plan Comparison Page', 'Payment Failure Handling'] },
    { id: 'wallet', name: 'Financial - Wallet & Credits', icon: 'account_balance_wallet', features: ['User Wallet Balance', 'Add Funds', 'Withdraw Funds', 'Transfer Between Users', 'Transaction History', 'Pending Transactions', 'Credit System', 'Reward Points', 'Cashback System', 'Escrow Holding', 'Payout Requests', 'Admin Adjust Balance', 'Multi-Currency Wallet', 'Wallet Notifications', 'Auto Deduction Rules', 'Refund to Wallet'] },
    { id: 'grocery_delivery', name: 'Food & Grocery - Delivery & Dropoff', icon: 'local_shipping', features: ['Contactless Delivery', 'Doorstep Photo Proof', 'Signature Required Delivery', 'Delivery Instructions', 'Leave At Door Option', 'Temperature Handling Rules', 'ID Check for Restricted Items', 'Delivery Time Windows', 'Failed Delivery Handling', 'Return To Store', 'Multiple Dropoffs', 'Delivery Confirmation'] },
    { id: 'grocery_live', name: 'Food & Grocery - Live Order Experience', icon: 'location_on', features: ['Picking Progress Tracker', 'Item Found Notifications', 'Replacement Requests', 'Live Chat With Shopper', 'Map Tracking', 'ETA Updates', 'Delivery Countdown', 'Arrival Alerts', 'Order Timeline', 'Background Updates', 'Late Order Alerts', 'Shared Tracking Link'] },
    { id: 'grocery_fulfillment', name: 'Food & Grocery - Order Fulfillment Modes', icon: 'shopping_bag', features: ['Delivery Orders', 'Pickup Orders', 'Scheduled Orders', 'Express Delivery', 'Same-Day Delivery', 'Multi-Store Orders', 'Split Shipments', 'Pre-Orders', 'Recurring Orders', 'Subscription Groceries', 'Time Slot Selection', 'Cutoff Time Rules'] },
    { id: 'grocery_packing', name: 'Food & Grocery - Picking & Packing Operations', icon: 'inventory', features: ['Shopper Assignment', 'Picking List', 'Optimized Picking Route', 'Scan Item Barcode', 'Mark Item Unavailable', 'Suggest Replacement', 'Customer Approval for Substitution', 'Packing Confirmation', 'Bag Count Tracking', 'Cold / Frozen Handling', 'Item Quality Confirmation', 'Picking Timer'] },
    { id: 'grocery_refunds', name: 'Food & Grocery - Retail Order Resolution', icon: 'receipt_long', features: ['Missing Item Refund', 'Wrong Item Refund', 'Damaged Item Claims', 'Price Difference Refund', 'Auto Refund Rules', 'Manual Review Queue', 'Wallet Compensation', 'Return Pickup', 'Refund Reasons Analytics', 'Fraud Detection', 'Receipt Correction', 'Refund History'] },
    { id: 'grocery_pricing', name: 'Food & Grocery - Retail Pricing Engine', icon: 'point_of_sale', features: ['Per Item Pricing', 'Weight-Based Pricing', 'Service Fee', 'Bag Fee', 'Bottle Deposit', 'Dynamic Delivery Fee', 'Peak Hour Fees', 'Heavy Item Surcharge', 'Substitution Price Adjustment', 'Tax Per Item Category', 'Price Overrides', 'Receipt Breakdown'] },
    { id: 'grocery_recommendations', name: 'Food & Grocery - Retail Recommendations', icon: 'recommend', features: ['Frequently Bought Items', 'Weekly Shopping List', 'Recipe-Based Basket', 'Auto Add Essentials', 'Low Stock Reminder', 'Seasonal Suggestions', 'Diet Preferences', 'Budget Shopping Mode', 'Smart Substitutions', 'Family Profiles', 'Shopping History Insights', 'Consumption Prediction'] },
    { id: 'grocery_roles', name: 'Food & Grocery - Shopper & Courier Roles', icon: 'supervised_user_circle', features: ['Shopper Mode', 'Driver Mode', 'Combined Shopper-Driver Mode', 'Shopper Ratings', 'Shopper Earnings', 'Tip After Delivery', 'Shift Scheduling', 'Max Order Capacity', 'Zone Assignment', 'Shopper Performance Metrics', 'Order Acceptance Timer', 'Shopper Availability Toggle'] },
    { id: 'grocery_cart', name: 'Food & Grocery - Smart Cart & Ordering', icon: 'shopping_cart_checkout', features: ['Quantity Adjustments', 'Weight-Based Items', 'Unit vs Weight Pricing', 'Item Instructions', 'Replacement Preferences', 'Preferred Substitutions', 'Chat With Shopper', 'Cart Suggestions', 'Frequently Bought Together', 'Reorder Previous Basket', 'Smart Basket Builder', 'Budget Limit Warnings'] },
    { id: 'grocery_store', name: 'Food & Grocery - Store & Product Catalog', icon: 'local_convenience_store', features: ['Store Profiles', 'Store Operating Hours', 'Product Categories', 'Product Variants (Size/Pack)', 'Barcode Products', 'Bulk Products', 'Per-Store Pricing', 'Multi-Branch Inventory', 'Product Images', 'Brand Information', 'Age Restricted Items', 'Store Availability Status'] },
    { id: 'grocery_substitutions', name: 'Food & Grocery - Substitution & Stock Handling', icon: 'swap_horiz', features: ['Auto Substitute Rules', 'Customer Preferred Substitutions', 'Refund If Unavailable', 'Price Difference Adjustment', 'Manual Replacement Approval', 'Partial Order Completion', 'Live Stock Updates', 'Out-of-Stock Alerts', 'Real-Time Basket Update', 'Substitution Chat Prompts', 'Smart Replacement Suggestions', 'Inventory Sync'] },
    { id: 'calculations', name: 'Functions - Calculations & Processing', icon: 'calculate', features: ['Basic Arithmetic Operations', 'Formula Builder', 'Custom Calculation Rules', 'Conditional Calculations', 'Batch Calculations', 'Real-Time Calculations', 'Unit Conversions', 'Currency Conversion', 'Percentage & Tax Calculations', 'Discount Calculations', 'Aggregations (Sum / Avg / Count)', 'Data Validation Rules', 'Simulation / What-If Scenarios', 'Cost Estimation', 'Pricing Calculator', 'Schedule / Time Calculations', 'Data Transformations', 'Export Calculation Results'] },
    { id: 'decision', name: 'Functions - Decision Engine', icon: 'account_tree', features: ['Business Rules Engine', 'Scoring System', 'Risk Scoring', 'Eligibility Checks', 'Dynamic Pricing Rules', 'Fraud Detection Rules', 'Auto Approvals', 'Rule Simulation', 'Rule Versioning', 'Rule Logs', 'Rule Conditions Builder', 'Outcome Actions'] },
    { id: 'calendar', name: 'Functions - Events & Calendar', icon: 'calendar_month', features: ['Event Creation', 'Recurring Events', 'Calendar Views (Day/Week/Month)', 'RSVP System', 'Event Reminders', 'Shared Calendars', 'Availability Checking', 'Invite Guests', 'Event Attachments', 'Timezone Handling', 'Event Status Tracking', 'Calendar Export (ICS)'] },
    { id: 'geo', name: 'Functions - Geo & Proximity', icon: 'my_location', features: ['Nearby Users', 'Nearby Places', 'Distance Filtering', 'Geo Notifications', 'Location-Based Content', 'Geo Unlockables', 'Area Restrictions', 'Radius Matching', 'Local Feed', 'Proximity Alerts', 'Geo-Based Pricing', 'Region Locking'] },
    { id: 'printing', name: 'Functions - Labels & Printing', icon: 'print', features: ['Barcode Label Printing', 'QR Label Printing', 'Receipt Printing', 'Invoice Printing', 'Ticket Printing', 'Bulk Print', 'Printer Selection', 'Print Templates', 'Thermal Printer Support', 'Print Preview', 'Auto Print Triggers', 'Print Logs'] },
    { id: 'maps', name: 'Functions - Maps & Location', icon: 'map', features: ['Map Rendering', 'Geocoding & Reverse Geocoding', 'Markers / Pins', 'Distance & ETA Calculation', 'Current Location Detection', 'Location Picker', 'Saved Places', 'Nearby Search', 'Geofencing', 'Route Directions', 'Turn-by-Turn Navigation', 'Traffic Conditions', 'Live Tracking (Driver/User)', 'Route Optimization', 'Delivery Zones / Coverage Areas', 'Branch Locator'] },
    { id: 'qr', name: 'Functions - QR & Barcode', icon: 'qr_code_scanner', features: ['QR Code Generator', 'QR Code Scanner', 'Barcode Scanner', 'Custom QR Styling', 'Dynamic QR (Editable Target)', 'Static QR Codes', 'Deep Link QR', 'App Download QR', 'Login via QR', 'Payment QR', 'Ticket / Pass QR', 'Check-In / Attendance QR', 'Product Information QR', 'URL / Website QR', 'Wi-Fi Share QR', 'Contact / vCard QR', 'Location QR', 'Batch QR Generation', 'Scan History Logs'] },
    { id: 'realtime', name: 'Functions - Realtime Collaboration', icon: 'groups', features: ['Live Document Editing', 'Presence Indicators', 'Live Cursor Positions', 'Typing Indicators', 'Live Comments', 'Conflict Merging', 'Session Awareness', 'Shared Selections', 'Realtime Notifications', 'Live Whiteboard', 'Collaborative Tasks', 'Activity Timeline'] },
    { id: 'routing', name: 'Functions - Routing & Dispatching', icon: 'route', features: ['Task Assignment', 'Auto Dispatch Rules', 'Route Scheduling', 'Driver Queue', 'Priority Jobs', 'Live Job Status', 'ETA Updates', 'Proof of Delivery', 'Job History', 'Reassignment', 'Batch Dispatch', 'Dispatch Dashboard'] },
    { id: 'weather', name: 'Functions - Weather & Forecast', icon: 'routine', features: ['Current Weather', 'Hourly & Daily Forecast', 'Historical Weather', 'Temperature & Humidity', 'Wind & Pressure', 'UV Index & Air Quality', 'Sunrise & Sunset', 'Severe Weather Alerts', 'Rain & Storm Alerts', 'Pollen Levels', 'Weather by Location', 'Auto Weather (User Location)', 'Outdoor Condition Score', 'Weather Notifications', 'Weather Automation Triggers'] },
    { id: 'health', name: 'Health - Health & Records', icon: 'medical_services', features: ['Medical Records', 'Appointment Records', 'Prescriptions', 'Vitals Tracking', 'Health Logs', 'Doctor Notes', 'Secure Attachments', 'Patient Timeline', 'Health Reminders', 'Insurance Info', 'Consent Forms', 'Health Reports'] },
    { id: 'crm', name: 'Marketing - CRM & Leads', icon: 'group', features: ['Lead Capture', 'Lead Stages / Pipeline', 'Deal Tracking', 'Contact Notes', 'Follow-up Reminders', 'Task Assignment', 'Email Tracking', 'Call Logs', 'Customer Tags', 'Sales Dashboard', 'Conversion Analytics', 'Lead Import'] },
    { id: 'marketing_cinematic', name: 'Marketing - Cinematic Effects', icon: 'movie', features: ['Video Background Blur Fade', 'Image Depth Zoom', 'Foreground / Background Separation', 'Focus Pull Effect', 'Light Sweep Highlight', 'Reveal Mask Animation', 'Gradient Motion Overlay', 'Heat Wave Distortion', 'Glowing Accent Borders', 'Ambient Color Shifting'] },
    { id: 'marketing_food_brand_motion', name: 'Marketing - Food & Brand Motion', icon: 'restaurant_menu', features: ['Hero Background Parallax', 'Sauce Drip Animation', 'Floating Ingredient Motion', 'Steam / Smoke Particle Effect', 'Subtle Background Movement', 'Scroll Reveal Sections', 'Text Split Reveal (Word by Word)', 'Headline Slide + Fade Combo', 'CTA Pulse Attention Effect', 'Button Hover Glow', 'Card Hover Lift Depth', 'Flavor Heat Indicator Animation', 'Image Zoom-on-Hover', 'Sauce Splash Entrance', 'Lazy Section Fade-In', 'Staggered Food Grid Reveal', 'Testimonial Carousel Motion', 'Smooth Anchor Scroll', 'Sticky Header Hide/Reveal', 'Section Transition Gradients'] },
    { id: 'marketing_food_micro', name: 'Marketing - Food Micro Interactions', icon: 'touch_app', features: ['Add to Cart Bounce', 'Spice Level Shake Effect', 'Star Rating Fill Animation', 'Menu Tab Smooth Switch', 'Price Highlight Flash', 'Hover Sauce Shine', 'Badge Pop Animation', 'Combo Box Expand', 'Quantity Stepper Animate', 'Order Success Confetti', 'Loading Flame Indicator', 'Icon Wiggle Attention Cue'] },
    { id: 'gamification', name: 'Marketing - Gamification', icon: 'sports_esports', features: ['XP Points', 'Level System', 'Progress Bars', 'Daily Missions', 'Challenges', 'Unlockable Rewards', 'Season Pass', 'Streak Tracking', 'Leaderboard Seasons', 'Achievements', 'Unlock Conditions', 'Progress Notifications'] },
    { id: 'marketing_nav_feel', name: 'Marketing - Navigation Feel', icon: 'navigation', features: ['Smooth Scroll Physics', 'Snap Section Scroll', 'Scroll Progress Indicator', 'Menu Overlay Reveal', 'Mobile Menu Morph', 'Page Transition Fade', 'Route Morph Transition', 'Back to Top Float Button', 'Sticky CTA Appear', 'Footer Reveal Animation'] },
    { id: 'promotions', name: 'Marketing - Promotions & Campaigns', icon: 'campaign', features: ['Promo Codes', 'Limited-Time Offers', 'Flash Sales', 'Campaign Scheduling', 'Targeted Campaigns', 'Banner Promotions', 'Referral Campaigns', 'Reward Campaign Tracking', 'Discount Rules Engine', 'Landing Pages', 'Conversion Tracking', 'Campaign Analytics'] },
    { id: 'growth', name: 'Marketing - Retention & Growth Tools', icon: 'trending_up', features: ['Churn Detection', 'Re-engagement Campaigns', 'Win-Back Emails', 'Usage Nudges', 'Inactive User Alerts', 'Milestone Celebrations', 'Upgrade Prompts', 'Smart Reminders', 'Behavior Analytics', 'Lifecycle Segments', 'Engagement Scoring', 'Growth Experiments'] },
    { id: 'rewards', name: 'Marketing - Rewards & Loyalty', icon: 'stars', features: ['Points System', 'Earn Points Rules', 'Redeem Points', 'Tier Levels (Silver / Gold / VIP)', 'Achievement Badges', 'Referral Rewards', 'Cashback Rewards', 'Promo Rewards', 'Milestone Rewards', 'Daily / Weekly Streaks', 'Leaderboards', 'Reward Expiration Rules', 'Reward History', 'Bonus Campaigns', 'Coupon Redemption', 'Wallet Integration', 'Gamification Triggers', 'Admin Reward Controls'] },
    { id: 'audio', name: 'Media - Audio & Voice', icon: 'graphic_eq', features: ['Audio Upload', 'Voice Recording', 'Audio Playback', 'Waveform Preview', 'Audio Compression', 'Format Conversion', 'Trim / Cut Audio', 'Background Audio Playback', 'Voice Messages', 'Text-to-Speech (TTS)', 'Speech-to-Text (Transcription)', 'Audio Metadata', 'Noise Reduction', 'Volume Normalization', 'Audio Moderation', 'Private / Public Access', 'Signed URL Access', 'Download Restrictions', 'Podcast / Episode Support', 'Audio Streaming', 'Talk'] },
    { id: 'camera', name: 'Media - Camera & Capture', icon: 'camera_alt', features: ['Open Camera Preview', 'Photo Capture', 'Video Capture', 'Front / Rear Camera Switch', 'Flash & Torch Control', 'Tap to Focus', 'Zoom Control', 'Grid & Guides Overlay', 'Document Scanning Mode', 'Auto Edge Detection', 'Multi-Shot Capture', 'Timer Capture', 'Barcode / QR Scan Support', 'Face Detection', 'AR Overlay Capture', 'Watermark on Capture', 'Save to Gallery', 'Capture Quality Settings', 'Background Upload After Capture'] },
    { id: 'photo', name: 'Media - Photo & Image', icon: 'photo_camera', features: ['Image Upload', 'Camera Capture', 'Gallery Picker', 'Multiple Image Upload', 'Image Preview', 'Image Cropping', 'Image Resizing', 'Image Compression', 'Thumbnail Generation', 'Image Optimization (Web)', 'Image Metadata (EXIF)', 'Watermarking', 'Image Filters', 'Image Moderation', 'AI Image Tagging', 'Image Storage Management', 'CDN Delivery', 'Private / Public Image Access', 'Image Versioning', 'Bulk Image Upload'] },
    { id: 'video', name: 'Media - Video & Streaming', icon: 'videocam', features: ['Video Upload', 'Camera Recording', 'Video Preview', 'Video Compression', 'Auto Transcoding (Multi-Resolution)', 'Thumbnail Generation', 'Video Streaming Playback', 'Adaptive Streaming (HLS/DASH)', 'Live Streaming', 'Stream Recording', 'Video Trimming', 'Video Metadata', 'Subtitles / Captions', 'Video Moderation', 'Private / Public Access', 'Signed URL Access', 'Download Restrictions', 'View Count & Analytics', 'Video CDN Delivery', 'Background Processing Queue'] },
    { id: 'identity', name: 'Security - Identity & Access', icon: 'admin_panel_settings', features: ['Email / Password Auth', 'Social Login (Google/Apple/FB)', 'MFA (OTP/Authenticator)', 'RBAC (Roles & Permissions)', 'Teams / Workspaces', 'Account Switching', 'Profile Management', 'Session Management', 'Device Management (Remote Logout)'] },
    { id: 'kyc', name: 'Security - Identity Verification', icon: 'fingerprint', features: ['ID Upload', 'Selfie Verification', 'Face Match Detection', 'Document OCR Extraction', 'Age Verification', 'Address Verification', 'Manual Review Queue', 'Approval / Rejection Workflow', 'Verification Status Badge', 'Fraud Detection Checks', 'Reverification Requests', 'Verification Audit Logs'] },
    { id: 'security', name: 'Security - Security & Compliance', icon: 'security', features: ['Two-Factor Authentication', 'Device Login Alerts', 'IP Restrictions', 'CAPTCHA Protection', 'Rate Limiting', 'Session Timeout', 'Password Policies', 'Encryption at Rest', 'Audit Logs', 'GDPR Data Export', 'Account Deletion Requests', 'Privacy Consent Tracking'] },
    { id: 'comments', name: 'Social - Comments & Discussions', icon: 'forum', features: ['Post Comments', 'Threaded Replies', 'Reactions / Likes', 'Edit & Delete Comments', 'Pin Comments', 'Mentions (@user)', 'Comment Moderation', 'Report Comment', 'Attachments in Comments', 'Rich Text Formatting', 'Sorting (Top / Newest)', 'Comment History'] },
    { id: 'community', name: 'Social - Community & Groups', icon: 'groups', features: ['Create Groups / Communities', 'Public & Private Groups', 'Join Requests', 'Group Roles (Admin / Moderator)', 'Group Feed', 'Group Announcements', 'Pinned Posts', 'Topics / Channels', 'Group Events', 'Member Directory', 'Invite via Link', 'Rules & Guidelines', 'Moderation Tools', 'Member Muting / Banning', 'Community Reputation / Points'] },
    { id: 'messaging', name: 'Social - Messaging & Chat', icon: 'chat', features: ['1-to-1 Chat', 'Group Chat', 'Channels / Rooms', 'Threads / Replies', 'Message Reactions', 'Attachments', 'Voice Messages', 'Video Calling', 'Screen Sharing'] },
    { id: 'polls', name: 'Social - Polls & Voting', icon: 'how_to_vote', features: ['Create Polls', 'Multiple Choice Voting', 'Anonymous Voting', 'Vote Limits', 'Scheduled Polls', 'Real-Time Results', 'Hide Results Until End', 'Poll Expiration', 'Reaction Voting', 'Ranked Voting', 'Poll Comments', 'Poll Analytics'] },
    { id: 'presence', name: 'Social - Presence & Status', icon: 'person_pin_circle', features: ['Online / Offline Status', 'Last Seen', 'Typing Indicator', 'Read Receipts', 'Active Now Indicator', 'Away / Busy Status', 'Custom Status Message', 'Auto Idle Detection', 'Do Not Disturb Mode', 'Live Presence Updates', 'Status Permissions', 'Session Devices List'] },
    { id: 'reviews', name: 'Social - Reviews & Ratings', icon: 'star', features: ['Star Ratings', 'Written Reviews', 'Review Images', 'Verified Purchase Badge', 'Helpful Votes', 'Review Replies (Owner)', 'Edit / Delete Review', 'Report Review', 'Rating Breakdown Chart', 'Average Score Calculation', 'Sorting & Filtering', 'Review Moderation'] },
    { id: 'social_media', name: 'Social - Social Media', icon: 'people', features: ['User Profiles', 'Follow / Unfollow Users', 'Friends System', 'Activity Feed / Timeline', 'Create Posts', 'Media Posts (Image/Video)', 'Stories / Status Updates', 'Reactions / Likes', 'Share / Repost', 'Hashtags', 'Mentions (@user)', 'Save / Bookmark Posts', 'Trending Posts', 'Content Discovery / Explore', 'Content Moderation', 'Report Post / User'] },
    { id: 'taxi_dispatch', name: 'Taxi / Delivery - Dispatch Operations', icon: 'support_agent', features: ['Manual Ride Assignment', 'Operator Dashboard', 'Heatmap Demand View', 'Driver Rebalancing Tools', 'Forced Matching', 'Surge Area Control', 'Live Fleet Monitoring', 'Trip Intervention', 'Service Area Control', 'Bulk Notifications to Drivers'] },
    { id: 'taxi_payouts', name: 'Taxi / Delivery - Driver Earnings & Payouts', icon: 'account_balance_wallet', features: ['Per Trip Earnings', 'Daily Earnings Summary', 'Instant Cashout', 'Scheduled Payouts', 'Wallet Balance', 'Bonuses & Incentives', 'Quest / Target Rewards', 'Commission Breakdown', 'Driver Statements', 'Tax Summary', 'Payout History'] },
    { id: 'taxi_driver', name: 'Taxi / Delivery - Driver Management', icon: 'directions_car', features: ['Driver Onboarding', 'Driver Document Upload', 'Driver Approval Workflow', 'Vehicle Registration', 'Driver Online / Offline Toggle', 'Driver Availability Radius', 'Driver Ratings', 'Driver Performance Metrics', 'Driver Suspension', 'Driver Shift Tracking', 'Driver Earnings Dashboard', 'Driver Tier Levels'] },
    { id: 'taxi_pricing', name: 'Taxi / Delivery - Fare & Pricing Engine', icon: 'request_quote', features: ['Base Fare + Distance + Time Calculation', 'Surge Pricing', 'Zone Pricing', 'Peak Hour Pricing', 'Minimum Fare Rules', 'Cancellation Fees', 'Waiting Time Charges', 'Toll Fees Handling', 'Promo Fare Overrides', 'Driver Earnings Calculation', 'Commission Calculation', 'Fare Adjustment (Admin)'] },
    { id: 'taxi_fleet', name: 'Taxi / Delivery - Fleet & Vehicle Types', icon: 'car_rental', features: ['Vehicle Categories (Bike/Car/XL)', 'Vehicle Capacity Rules', 'Fleet Owners', 'Multiple Drivers per Vehicle', 'Vehicle Availability', 'Maintenance Tracking', 'Fuel Type Classification', 'Electric Vehicle Mode', 'Accessibility Vehicles', 'Vehicle Priority Matching'] },
    { id: 'taxi_pickup', name: 'Taxi / Delivery - Pickup Intelligence', icon: 'trip_origin', features: ['Smart Pickup Suggestions', 'Landmark Detection', 'Pin Adjustment Assistance', 'Pickup Instructions Chat', 'Geofence Pickup Zones', 'Airport Pickup Logic', 'Restricted Area Handling', 'Meeting Point Guidance', 'Multi-Stop Trips', 'Saved Locations (Home/Work)', 'Pickup Notes'] },
    { id: 'taxi_booking', name: 'Taxi / Delivery - Ride Booking & Matching', icon: 'local_taxi', features: ['Ride Request Creation', 'Pickup & Dropoff Selection', 'Ride Type Selection (Standard/Premium/XL)', 'Fare Estimate Before Booking', 'Driver Matching Algorithm', 'Auto Retry Matching', 'Scheduled Ride Booking', 'Ride Queue Handling', 'Driver Acceptance Timer', 'Rider Cancellation Rules', 'Driver Cancellation Rules', 'Reassign Driver'] },
    { id: 'taxi_communication', name: 'Taxi / Delivery - Ride Communication', icon: 'chat', features: ['In-App Call Masking', 'In-App Chat', 'Quick Message Templates', 'Auto Translate Messages', 'Arrival Notifications', 'Driver En-Route Messages', 'Pickup Instructions', 'Trip Status Notifications', 'Voice Notes', 'Auto Call on Arrival'] },
    { id: 'taxi_pooling', name: 'Taxi / Delivery - Ride Pooling', icon: 'groups', features: ['Shared Ride Matching', 'Route Optimization Multi-Passenger', 'Passenger Pickup Ordering', 'Fare Splitting', 'Seat Availability', 'Ride Pool Rules', 'Max Detour Limits', 'Co-Rider Chat', 'Group Ride Invite', 'Pool Cancellation Rules'] },
    { id: 'taxi_safety', name: 'Taxi / Delivery - Ride Safety', icon: 'health_and_safety', features: ['SOS Emergency Button', 'Share Trip With Contacts', 'Audio Recording During Trip', 'Driver Identity Verification', 'Real-time Safety Monitoring', 'Unsafe Driving Detection', 'Speed Monitoring', 'Emergency Hotline Integration', 'Blocked Riders / Drivers', 'Safety Check Prompts', 'Incident Reporting', 'Safety Alerts'] },
    { id: 'taxi_tracking', name: 'Taxi / Delivery - Ride Tracking & Navigation', icon: 'explore', features: ['Live Driver Location', 'Live Rider Location', 'Route Visualization', 'ETA Updates', 'Driver Approaching Alerts', 'Trip Start Detection', 'Trip End Detection', 'Route Deviation Detection', 'Traffic Aware Routing', 'Shared Live Trip Link', 'Background Location Updates', 'Trip Replay History'] },
    { id: 'taxi_lifecycle', name: 'Taxi / Delivery - Trip Lifecycle Management', icon: 'route', features: ['Trip Status Flow (Requested → Accepted → Arrived → Ongoing → Completed)', 'OTP Ride Verification', 'Passenger Pickup Confirmation', 'Dropoff Confirmation', 'Trip Timer', 'Ride Pause / Stop', 'Emergency Trip Cancel', 'Lost Item Reporting', 'Trip Receipts', 'Trip Dispute Handling', 'Trip History'] },
    { id: 'navigation', name: 'UI - Navigation & Layout', icon: 'explore', features: ['Top Navigation Bar', 'Bottom Navigation Bar', 'Sidebar / Drawer', 'Floating Action Button (FAB)', 'Breadcrumb Navigation', 'Tab Navigation', 'Dynamic Menu Builder', 'Role-Based Menu Visibility', 'Search Bar Integration', 'Global App Header', 'Sticky Navigation', 'Responsive Layout (Mobile / Web)', 'Dark / Light Theme Toggle', 'Multi-Level Menus', 'Quick Actions Menu', 'Route Guard / Protected Pages'] },
    { id: 'styles', name: 'UI - Styles & UI Customization', icon: 'format_paint', features: ['Global Style Tokens', 'Spacing & Layout Scale', 'Border Radius Settings', 'Shadow Styles', 'Button Variants', 'Card Variants', 'Form Styles', 'Input Field Styles', 'Table Styles', 'List & Grid Styles', 'Custom CSS Support', 'Responsive Breakpoints', 'Density (Compact / Comfortable)', 'Reusable UI Components', 'Design System Variables'] },
    { id: 'themes', name: 'UI - Themes & Appearance', icon: 'palette', features: ['Light & Dark Mode', 'System Theme Detection', 'Custom Brand Colors', 'Typography Settings', 'Accent Color Picker', 'Theme Presets', 'User Theme Preference', 'High Contrast Mode', 'Dynamic Theme Switching', 'Component Theming', 'White-Label Branding', 'Per-Workspace Theme', 'Saved Theme Profiles', 'Automatic Night Mode', 'Accessibility Color Adjustments'] },
    { id: 'visual_android', name: 'Visual - Android Material Inspired', icon: 'android', features: ['Material 3 Components', 'Dynamic Color System', 'Elevated Surfaces', 'FAB Style Buttons', 'Ripple Effects', 'Navigation Drawer', 'Bottom Navigation Bar', 'Material Motion', 'Rounded Cards', 'Outlined Inputs', 'Tonal Palettes', 'Adaptive Theming'] },
    { id: 'visual_apple', name: 'Visual - Apple-Inspired (Cupertino Style)', icon: 'phone_iphone', features: ['Cupertino Navigation Bar', 'iOS Tab Bar Style', 'Blurred Frosted Backgrounds', 'Large Titles Navigation', 'Segmented Controls', 'Rounded System Buttons', 'Minimal Shadow Depth', 'San Francisco Typography', 'Subtle Motion Curves', 'iOS Modal Sheets', 'Soft Haptic Feedback Style', 'Floating Action Sheets'] },
    { id: 'visual_dark', name: 'Visual - Dark Neon', icon: 'nightlight', features: ['Dark Surfaces', 'Neon Glow Accents', 'High Contrast Text', 'Outline Elements', 'Cyberpunk Palette', 'Glowing Buttons', 'Transparent Panels', 'Accent Borders', 'Gradient Lines', 'Futuristic Icons'] },
    { id: 'visual_discord', name: 'Visual - Discord-Like Community Style', icon: 'headset_mic', features: ['Server Sidebar', 'Channel List', 'Chat Layout Focus', 'Dark Theme Default', 'Avatar Presence Indicators', 'Role Colored Names', 'Compact Message Layout', 'Reaction Hover Controls', 'Threaded Chat View', 'Voice Channel Panel', 'Member List Sidebar', 'Notification Badge Style'] },
    { id: 'visual_fluent', name: 'Visual - Fluent (Windows Inspired)', icon: 'window', features: ['Fluent Navigation Rail', 'Acrylic Blur Panels', 'Reveal Hover Effects', 'Structured Sidebar', 'Command Bars', 'Sharp Geometry', 'Layered Surfaces', 'Subtle Shadows', 'Windows Typography Feel', 'Adaptive Grid Layout', 'Context Menus', 'Desktop Interaction Style'] },
    { id: 'visual_glass', name: 'Visual - Glass & Frosted', icon: 'blur_on', features: ['Glassmorphism Panels', 'Background Blur', 'Transparent Cards', 'Floating Surfaces', 'Light Borders', 'Depth Layers', 'Glow Highlights', 'Backdrop Filters', 'Frosted Navigation Bar', 'Soft Gradient Backgrounds'] },
    { id: 'visual_luxury', name: 'Visual - Luxury & Elegant', icon: 'diamond', features: ['Serif Typography', 'Gold Accents', 'Thin Dividers', 'High Contrast Layout', 'Large Hero Images', 'Minimal Icons', 'Premium Spacing', 'Muted Backgrounds', 'Subtle Animations', 'Editorial Layout'] },
    { id: 'visual_macos', name: 'Visual - macOS Desktop Inspired', icon: 'desktop_mac', features: ['Sidebar Split Layout', 'Top Toolbar Actions', 'Floating Panels', 'System Accent Colors', 'Rounded Window Controls', 'Minimal Depth', 'Command Palette', 'Desktop Shortcuts', 'Resizability Support', 'Multi-Window Layout', 'Menu Bar Style', 'Contextual Toolbars'] },
    { id: 'visual_minimal', name: 'Visual - Minimal & Clean', icon: 'brush', features: ['Flat UI', 'Soft Colors', 'Large Spacing', 'Thin Dividers', 'Light Shadows', 'Neutral Palette', 'Simple Icons', 'Subtle Highlights', 'Readable Typography', 'Content-Focused Layout'] },
    { id: 'visual_modern', name: 'Visual - Modern Gradient', icon: 'gradient', features: ['Gradient Backgrounds', 'Colorful Accents', 'Bold Headlines', 'Vibrant Buttons', 'Floating Cards', 'Soft Shadows', 'Rounded Corners', 'Hero Sections', 'Color Transitions', 'Highlight Surfaces'] },
    { id: 'visual_notion', name: 'Visual - Notion-Like Productivity Style', icon: 'description', features: ['Minimal White Canvas', 'Block-Based Layout', 'Inline Editing', 'Slash Command Menu', 'Collapsible Blocks', 'Database Tables', 'Toggle Sections', 'Clean Typography', 'Low Contrast UI', 'Left Sidebar Workspace', 'Page Hierarchy', 'Icon + Emoji Headers'] },
    { id: 'visual_playful', name: 'Visual - Playful & Social', icon: 'sentiment_very_satisfied', features: ['Large Avatars', 'Rounded Bubbles', 'Reaction Emojis', 'Bright Colors', 'Soft Drop Shadows', 'Floating Buttons', 'Sticker Elements', 'Animated Icons', 'Friendly Typography', 'Card-Based Feed Layout'] },
    { id: 'visual_professional', name: 'Visual - Professional Dashboard', icon: 'dashboard', features: ['Dense Information Layout', 'Compact Tables', 'Sharp Borders', 'Structured Cards', 'Data Visualization Focus', 'Utility Icons', 'Muted Colors', 'Grid Alignment', 'Sidebar Navigation Style', 'High Readability Contrast'] },
    { id: 'visual_shopify', name: 'Visual - Shopify-Like Admin Style', icon: 'storefront', features: ['Professional Dashboard', 'Analytics Cards', 'Left Navigation Sidebar', 'Structured Forms', 'Sectioned Settings', 'Business Color Palette', 'Table-Centric Layout', 'Status Badges', 'Admin Toolbars', 'Breadcrumb Navigation', 'Multi-Level Settings', 'Enterprise Typography'] },
    { id: 'visual_soft', name: 'Visual - Soft UI (Neumorphism)', icon: 'layers', features: ['Soft Shadows', 'Embossed Surfaces', 'Rounded Components', 'Raised Buttons', 'Inset Inputs', 'Low Contrast Palette', 'Monochrome Surfaces', 'Depth Lighting', 'Soft Gradients', 'Floating Controls'] }
];

export const ConfigOptions = {
    intents: [
        { id: 'backend', icon: 'dns', title: 'Backend API' },
        { id: 'web', icon: 'web', title: 'Web App' },
        { id: 'mobile', icon: 'smartphone', title: 'Mobile App' },
        { id: 'fullstack', icon: 'devices', title: 'Fullstack App' }
    ],
    backend: {
        steps: [
            {
                id: 'language',
                title: 'Backend Language',
                icon: 'code',
                type: 'grid',
                options: [
                    { id: 'js', name: 'JavaScript', subtitle: 'Node.js', icon: 'javascript' },
                    { id: 'ts', name: 'TypeScript', subtitle: 'Node.js / Bun', icon: 'code' },
                    { id: 'python', name: 'Python', subtitle: 'Python 3.x', icon: 'terminal' },
                    { id: 'java', name: 'Java', subtitle: 'Java 17+', icon: 'local_cafe' },
                    { id: 'kotlin', name: 'Kotlin', subtitle: 'JVM', icon: 'android' },
                    { id: 'csharp', name: 'C#', subtitle: '.NET Core / 8', icon: 'data_object' },
                    { id: 'go', name: 'Go', subtitle: 'Golang', icon: 'speed' },
                    { id: 'php', name: 'PHP', subtitle: 'PHP 8+', icon: 'php' },
                    { id: 'ruby', name: 'Ruby', subtitle: 'Ruby 3+', icon: 'diamond' },
                    { id: 'rust', name: 'Rust', subtitle: 'High-performance', icon: 'settings_applications' }
                ]
            },
            {
                id: 'framework',
                title: 'Framework',
                icon: 'extension',
                type: 'tags_depends_on',
                dependsOn: 'language',
                options: {
                    js: [{ id: 'express', name: 'Express.js' }, { id: 'nestjs', name: 'NestJS' }, { id: 'fastify', name: 'Fastify' }, { id: 'hono', name: 'Hono' }, { id: 'koa', name: 'Koa' }, { id: 'nextjs', name: 'Next.js' }, { id: 'remix', name: 'Remix' }],
                    ts: [{ id: 'express', name: 'Express.js' }, { id: 'nestjs', name: 'NestJS' }, { id: 'fastify', name: 'Fastify' }, { id: 'hono', name: 'Hono' }, { id: 'koa', name: 'Koa' }, { id: 'nextjs', name: 'Next.js' }, { id: 'remix', name: 'Remix' }],
                    python: [{ id: 'fastapi', name: 'FastAPI' }, { id: 'django', name: 'Django' }, { id: 'drf', name: 'Django Rest Framework' }, { id: 'flask', name: 'Flask' }],
                    java: [{ id: 'spring', name: 'Spring Boot' }, { id: 'micronaut', name: 'Micronaut' }, { id: 'quarkus', name: 'Quarkus' }],
                    kotlin: [{ id: 'spring', name: 'Spring Boot' }, { id: 'spring_webflux', name: 'Spring WebFlux' }, { id: 'ktor', name: 'Ktor' }, { id: 'http4k', name: 'http4k' }],
                    csharp: [{ id: 'aspnet_mvc', name: 'ASP.NET Core MVC' }, { id: 'aspnet_webapi', name: 'ASP.NET Core Web API' }, { id: 'aspnet_minimalapi', name: 'ASP.NET Core Minimal API' }, { id: 'blazor_server', name: 'Blazor Server' }, { id: 'blazor_wasm', name: 'Blazor WebAssembly' }],
                    go: [{ id: 'gin', name: 'Gin' }, { id: 'fiber', name: 'Fiber' }, { id: 'echo', name: 'Echo' }, { id: 'chi', name: 'Chi' }],
                    php: [{ id: 'laravel', name: 'Laravel' }, { id: 'symfony', name: 'Symfony' }, { id: 'codeigniter', name: 'CodeIgniter' }, { id: 'slim', name: 'Slim' }],
                    ruby: [{ id: 'rails', name: 'Ruby on Rails' }, { id: 'sinatra', name: 'Sinatra' }, { id: 'hanami', name: 'Hanami' }, { id: 'grape', name: 'Grape' }],
                    rust: [{ id: 'actix', name: 'Actix Web' }, { id: 'axum', name: 'Axum' }, { id: 'rocket', name: 'Rocket' }, { id: 'warp', name: 'Warp' }]
                }
            },
            {
                id: 'deployment',
                title: 'Deployment Strategy',
                icon: 'cloud',
                type: 'categories',
                options: [
                    { category: 'Container-Based', items: ['Docker', 'Docker Compose', 'Kubernetes (K8s)', 'ECS (AWS)', 'GCP Cloud Run'] },
                    { category: 'Serverless', items: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Vercel Serverless', 'Netlify Functions', 'Supabase Edge Functions'] },
                    { category: 'VM-Based', items: ['EC2 (AWS)', 'DigitalOcean Droplets', 'Linode', 'Azure VM', 'GCP Compute Engine'] },
                    { category: 'Platform-as-a-Service (PaaS)', items: ['Render', 'Railway', 'Fly.io', 'Heroku', 'App Engine'] }
                ]
            },
            {
                id: 'architecture',
                title: 'Architecture Patterns',
                icon: 'account_tree',
                type: 'categories',
                options: [
                    { category: 'Monolith Types', items: ['Classic Monolith', 'Classic MVC', 'Modular Monolith', 'Layered Architecture'] },
                    { category: 'Clean Architecture', items: ['Clean Architecture', 'Hexagonal Architecture', 'Onion Architecture'] },
                    { category: 'Distributed', items: ['Microservices', 'Event-Driven Architecture', 'Serverless Architecture', 'CQRS', 'Domain-Driven Design (DDD)'] },
                    { category: 'Framework Specific', items: ['Django MVT (Model View Template)', 'API Service Architecture (Router → Service → Repository)', 'REST Resource Architecture', 'Microframework MVC', 'Spring Layered Architecture (Controller → Service → Repository)', 'Ports and Adapters (Enterprise Hexagonal)', 'Reactive Architecture', 'Cloud-Native Microservices', 'Enterprise DDD Aggregates', 'Functional Routing Architecture', 'Coroutine Service Architecture', 'Reactive Streams Architecture', 'Handler Pipeline Architecture', 'Vertical Slice Architecture', 'Feature Folder Architecture', 'Mediator Pattern Architecture', 'Component Architecture', 'API Endpoint Architecture', 'Package-Oriented Architecture', 'Handler Service Repository Pattern', 'Usecase Architecture', 'Go Clean Architecture', 'Lightweight Hexagonal', 'Laravel Service Layer Architecture', 'Laravel Action Pattern', 'Symfony Bundle Architecture', 'PHP MVC Architecture', 'Controller Service Repository Pattern', 'Rails MVC Convention Architecture', 'RESTful Resource Architecture', 'Service Object Pattern', 'Hanami Modular Architecture', 'API-First Architecture', 'Handler Extractor Pattern', 'Trait-Driven Clean Architecture', 'Actor Model Architecture', 'Functional Pipeline Architecture', 'Domain Module Architecture'] }
                ]
            },
            {
                id: 'features',
                title: 'Feature Composer',
                icon: 'category',
                type: 'features',
                options: ComprehensiveFeatureModules
            }
        ]
    },
    web: {
        steps: [
            {
                id: 'language',
                title: 'Language',
                icon: 'code',
                type: 'grid',
                options: [
                    { id: 'js', name: 'JavaScript', subtitle: 'ES6+', icon: 'javascript' },
                    { id: 'ts', name: 'TypeScript', subtitle: 'Primary', icon: 'code' },
                    { id: 'dart', name: 'Dart', subtitle: 'Flutter', icon: 'flutter_dash' },
                    { id: 'elm', name: 'Elm', subtitle: 'Functional', icon: 'eco' },
                    { id: 'rescript', name: 'ReScript', subtitle: 'ReasonML', icon: 'integration_instructions' }
                ]
            },
            {
                id: 'framework',
                title: 'Framework',
                icon: 'dashboard_customize',
                type: 'tags_depends_on',
                dependsOn: 'language',
                options: {
                    js: [
                        { id: 'react', name: 'React' },
                        { id: 'nextjs', name: 'Next.js' },
                        { id: 'remix', name: 'Remix' },
                        { id: 'astro', name: 'Astro(React)' },
                        { id: 'vue3', name: 'Vue 3' },
                        { id: 'nuxt3', name: 'Nuxt 3' },
                        { id: 'vite_vue', name: 'Vite+Vue' },
                        { id: 'angular', name: 'Angular' },
                        { id: 'svelte', name: 'Svelte' },
                        { id: 'sveltekit', name: 'SvelteKit' },
                        { id: 'solidjs', name: 'SolidJS' },
                        { id: 'solidstart', name: 'SolidStart' }
                    ],
                    ts: [
                        { id: 'react', name: 'React' },
                        { id: 'nextjs', name: 'Next.js' },
                        { id: 'remix', name: 'Remix' },
                        { id: 'astro', name: 'Astro(React)' },
                        { id: 'vue3', name: 'Vue 3' },
                        { id: 'nuxt3', name: 'Nuxt 3' },
                        { id: 'vite_vue', name: 'Vite+Vue' },
                        { id: 'angular', name: 'Angular' },
                        { id: 'svelte', name: 'Svelte' },
                        { id: 'sveltekit', name: 'SvelteKit' },
                        { id: 'solidjs', name: 'SolidJS' },
                        { id: 'solidstart', name: 'SolidStart' }
                    ],
                    dart: [{ id: 'flutter_web', name: 'Flutter Web' }],
                    elm: [{ id: 'elm_spa', name: 'Elm SPA' }],
                    rescript: [{ id: 'react_rescript', name: 'React (ReScript bindings)' }]
                }
            },
            {
                id: 'rendering',
                title: 'Rendering Strategy',
                icon: 'speed',
                type: 'tags',
                options: ['CSR', 'SSR', 'SSG', 'Hybrid', 'Edge', 'Partial Hydration']
            },
            {
                id: 'styling',
                title: 'Styling',
                icon: 'brush',
                type: 'tags',
                options: [
                    'Plain CSS', 'SCSS', 'CSS Modules', 'PostCSS', 'TailwindCSS', 'UnoCSS',
                    'Material UI', 'Ant Design', 'Chakra UI', 'Mantine', 'ShadCN UI',
                    'Styled Components', 'Emotion', 'Stitches',
                    'Vuetify', 'Naive UI',
                    'Angular Material',
                    'Flutter Material / Cupertino',
                    'Elm UI styling'
                ]
            },
            {
                id: 'state',
                title: 'State Management',
                icon: 'memory',
                type: 'tags',
                options: [
                    'Context API', 'Redux Toolkit', 'Zustand', 'Jotai', 'Recoil', 'MobX', 'TanStack Query', 'SWR',
                    'Pinia', 'Vuex',
                    'NgRx', 'Signals',
                    'Stores',
                    'Provider', 'Riverpod', 'Bloc',
                    'Built-in Architecture'
                ]
            },
            {
                id: 'auth',
                title: 'Authentication',
                icon: 'how_to_reg',
                type: 'tags',
                options: ['JWT Storage', 'OAuth Redirect', 'PKCE Flow', 'HTTP Only Cookie Session', 'Refresh Token Rotation']
            },
            {
                id: 'features',
                title: 'Feature Composer',
                icon: 'category',
                type: 'features',
                options: ComprehensiveFeatureModules
            },
            {
                id: 'deployment',
                title: 'Deployment (Frontend Hosting)',
                icon: 'rocket_launch',
                type: 'categories',
                options: [
                    { category: 'Static Hosting', items: ['Vercel', 'Netlify', 'Cloudflare Pages', 'Firebase Hosting', 'GitHub Pages'] },
                    { category: 'Edge Hosting', items: ['Vercel Edge', 'Cloudflare Workers'] },
                    { category: 'Container Hosting', items: ['Docker + Nginx', 'AWS S3 + CloudFront'] }
                ]
            }
        ]
    },
    mobile: {
        steps: [
            {
                id: 'language',
                title: 'Mobile App Language',
                icon: 'phone_iphone',
                type: 'grid',
                options: [
                    { id: 'dart', name: 'Dart', subtitle: 'Flutter', icon: 'flutter_dash' },
                    { id: 'ts', name: 'TypeScript / JS', subtitle: 'React Native', icon: 'javascript' },
                    { id: 'csharp', name: 'C#', subtitle: '.NET MAUI', icon: 'data_object' },
                    { id: 'kotlin', name: 'Kotlin', subtitle: 'Native Android', icon: 'android' },
                    { id: 'swift', name: 'Swift', subtitle: 'Native iOS', icon: 'phone_iphone' }
                ]
            },
            {
                id: 'framework',
                title: 'Mobile Framework',
                icon: 'smartphone',
                type: 'tags_depends_on',
                dependsOn: 'language',
                options: {
                    dart: [{ id: 'flutter', name: 'Flutter' }],
                    ts: [{ id: 'react_native', name: 'React Native' }],
                    csharp: [{ id: 'maui', name: '.NET MAUI' }],
                    kotlin: [{ id: 'android_native', name: 'Native Android' }],
                    swift: [{ id: 'ios_native', name: 'Native iOS' }]
                }
            },
            {
                id: 'architecture',
                title: 'Architecture Patterns',
                icon: 'account_tree',
                type: 'tags',
                options: [] // Filtered dynamically via getMobileOptions
            },
            {
                id: 'state',
                title: 'State Management',
                icon: 'memory',
                type: 'tags',
                options: [] // Filtered dynamically
            },
            {
                id: 'routing',
                title: 'Navigation System',
                icon: 'explore',
                type: 'tags',
                options: [] // Filtered dynamically
            },
            {
                id: 'local_storage',
                title: 'Local Storage',
                icon: 'save',
                type: 'tags',
                options: [] // Filtered dynamically
            },
            {
                id: 'database',
                title: 'Database Provider',
                icon: 'database',
                type: 'tags',
                options: [] // Filtered dynamically
            },
            {
                id: 'features',
                title: 'Domain Modules & Features',
                icon: 'category',
                type: 'features',
                options: ComprehensiveFeatureModules
            },
            {
                id: 'deployment',
                title: 'Deployment / Distribution',
                icon: 'rocket_launch',
                type: 'categories',
                options: [
                    { category: 'Android', items: ['Google Play Store', 'Internal Testing Track', 'APK Distribution', 'Firebase App Distribution'] },
                    { category: 'iOS', items: ['Apple App Store', 'TestFlight', 'Enterprise Distribution'] },
                    { category: 'Cross Platform CI/CD', items: ['Codemagic', 'Bitrise', 'GitHub Actions', 'Fastlane'] }
                ]
            }
        ]
    },

    fullstack: {
        steps: [
            {
                id: 'backend',
                title: 'Backend Layer',
                icon: 'dns',
                type: 'categories',
                options: [
                    { category: 'Language Options', items: ['TypeScript (Node.js)', 'Python', 'Go', 'Java / Kotlin', 'C# (.NET)', 'PHP', 'Rust'] },
                    { category: 'Framework Options', items: ['NestJS', 'Express', 'Fastify', 'FastAPI', 'Django', 'Gin', 'Fiber', 'Spring Boot', 'ASP.NET Core'] },
                    { category: 'Architectural Patterns', items: ['Layered Architecture', 'Modular Monolith', 'Clean Architecture', 'Microservices', 'Event-Driven', 'Serverless Architecture'] },
                    { category: 'API Style', items: ['REST', 'GraphQL', 'tRPC', 'gRPC'] }
                ]
            },
            {
                id: 'web',
                title: 'Web App Layer',
                icon: 'web',
                type: 'categories',
                options: [
                    { category: 'Framework', items: ['Next.js', 'React (Vite)', 'Nuxt', 'Angular', 'SvelteKit'] },
                    { category: 'Rendering', items: ['CSR', 'SSR', 'SSG', 'Hybrid'] },
                    { category: 'Styling', items: ['Tailwind', 'Component Library (MUI, Chakra, etc.)', 'CSS Modules'] },
                    { category: 'State Management', items: ['Zustand', 'Redux Toolkit', 'React Query', 'Pinia (Vue)'] }
                ]
            },
            {
                id: 'mobile',
                title: 'Mobile App Layer (Optional)',
                icon: 'smartphone',
                type: 'categories',
                options: [
                    { category: 'Framework', items: ['Flutter', 'React Native', 'Native (Swift + Kotlin)', 'None'] },
                    { category: 'Architecture', items: ['MVVM', 'Clean Architecture', 'Feature-First'] },
                    { category: 'State', items: ['Riverpod / Bloc (Flutter)', 'Redux / Zustand (RN)'] }
                ]
            },
            {
                id: 'database',
                title: 'Database Layer',
                icon: 'database',
                type: 'categories',
                options: [
                    { category: 'Relational', items: ['PostgreSQL', 'MySQL'] },
                    { category: 'NoSQL', items: ['MongoDB', 'Firebase Firestore'] },
                    { category: 'Cache', items: ['Redis'] },
                    { category: 'Search', items: ['Meilisearch', 'Elasticsearch'] }
                ]
            },
            {
                id: 'deployment',
                title: 'Deployment Strategy',
                icon: 'cloud',
                type: 'categories',
                options: [
                    { category: 'Backend', items: ['Docker + VPS', 'AWS ECS', 'Kubernetes', 'Serverless (Lambda)', 'Render / Railway'] },
                    { category: 'Web', items: ['Vercel', 'Netlify', 'Cloudflare Pages', 'S3 + CloudFront'] },
                    { category: 'Mobile', items: ['App Store', 'Play Store', 'TestFlight', 'Internal Testing'] }
                ]
            },
            {
                id: 'features',
                title: 'Shared Core Services',
                icon: 'category',
                type: 'features',
                options: ComprehensiveFeatureModules
            },
            {
                id: 'infrastructure',
                title: 'Infrastructure Layer',
                icon: 'public',
                type: 'categories',
                options: [
                    { category: 'Cloud Provider', items: ['AWS', 'GCP', 'Azure', 'DigitalOcean', 'Supabase', 'Firebase'] },
                    { category: 'CDN', items: ['Cloudflare', 'CloudFront'] },
                    { category: 'Storage', items: ['S3', 'Cloudinary'] }
                ]
            }
        ]
    }
};
