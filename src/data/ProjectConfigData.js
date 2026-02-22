export const ComprehensiveFeatureModules = [
    { id: 'identity', name: 'Identity & Access', icon: 'admin_panel_settings', features: ['Email / Password Auth', 'Social Login (Google/Apple/FB)', 'MFA (OTP/Authenticator)', 'RBAC (Roles & Permissions)', 'Teams / Workspaces', 'Account Switching', 'Profile Management', 'Session Management', 'Device Management (Remote Logout)'] },
    { id: 'user_data', name: 'User Data & Preferences', icon: 'person', features: ['User Profiles', 'Contacts / Address Book', 'Preferences / Settings', 'Activity History', 'Saved Items / Favorites', 'Follow / Subscribe System', 'Blocking / Muting Users', 'Verification (KYC/Email/Phone)'] },
    { id: 'app_system', name: 'App System Core', icon: 'dns', features: ['Search Engine', 'Global Filters & Sorting', 'Tags / Categories', 'Bookmarking', 'Reporting / Flagging', 'Versioning / Drafts', 'Soft Delete & Restore'] },
    { id: 'commerce', name: 'Commerce & Products', icon: 'storefront', features: ['Product Catalog', 'Inventory Management', 'Variants (Size, Color)', 'Shopping Cart', 'Wishlist', 'Coupons / Discounts', 'Checkout System', 'Order Management', 'Returns & Refunds', 'Subscriptions / Plans', 'Digital Products', 'License Keys'] },
    { id: 'booking', name: 'Booking & Scheduling', icon: 'event', features: ['Calendar', 'Time Slots', 'Availability Rules', 'Reservations', 'Recurring Bookings', 'Staff Assignment', 'Queue System', 'Waitlist', 'Reminders'] },
    { id: 'marketplace', name: 'Marketplace', icon: 'store', features: ['Multi-Vendor Stores', 'Vendor Dashboard', 'Vendor Payouts', 'Commission System', 'Vendor Ratings', 'Dispute Resolution'] },
    { id: 'messaging', name: 'Messaging & Chat', icon: 'chat', features: ['1-to-1 Chat', 'Group Chat', 'Channels / Rooms', 'Threads / Replies', 'Message Reactions', 'Attachments', 'Voice Messages', 'Video Calling', 'Screen Sharing'] },
    { id: 'notifications', name: 'Notifications', icon: 'notifications', features: ['In-App Notifications', 'Push Notifications', 'Email Notifications', 'SMS Notifications', 'Notification Preferences', 'Scheduled Notifications', 'Topic Subscriptions', 'Broadcast / Announcements', 'User Mentions (@user)', 'Action Buttons (Approve / Reject)', 'Quiet Hours / Do Not Disturb', 'Delivery Status Tracking'] },
    { id: 'comments', name: 'Comments & Discussions', icon: 'forum', features: ['Post Comments', 'Threaded Replies', 'Reactions / Likes', 'Edit & Delete Comments', 'Pin Comments', 'Mentions (@user)', 'Comment Moderation', 'Report Comment', 'Attachments in Comments', 'Rich Text Formatting', 'Sorting (Top / Newest)', 'Comment History'] },
    { id: 'reviews', name: 'Reviews & Ratings', icon: 'star', features: ['Star Ratings', 'Written Reviews', 'Review Images', 'Verified Purchase Badge', 'Helpful Votes', 'Review Replies (Owner)', 'Edit / Delete Review', 'Report Review', 'Rating Breakdown Chart', 'Average Score Calculation', 'Sorting & Filtering', 'Review Moderation'] },
    { id: 'files', name: 'Files & Documents', icon: 'folder', features: ['File Upload', 'Multiple File Upload', 'Folder Organization', 'File Preview', 'Document Viewer (PDF/Docs)', 'Version History', 'File Sharing Links', 'Access Permissions', 'Download Tracking', 'File Expiration', 'Large File Upload', 'Secure Private Files'] },
    { id: 'forms', name: 'Forms & Surveys', icon: 'list_alt', features: ['Custom Form Builder', 'Text / Number Fields', 'Dropdown & Multi-Select', 'Date & Time Picker', 'File Upload Field', 'Validation Rules', 'Conditional Fields', 'Save Draft Responses', 'Public Share Link', 'Anonymous Responses', 'Response Export (CSV/PDF)', 'Response Analytics'] },
    { id: 'reports', name: 'Reports & Export', icon: 'insert_chart', features: ['Generate Reports', 'Custom Date Range', 'Charts & Graphs', 'Filter & Group Data', 'Scheduled Reports', 'Export CSV', 'Export Excel', 'Export PDF', 'Email Report Delivery', 'Shareable Report Link', 'Print Layout', 'Data Snapshots'] },
    { id: 'analytics', name: 'Analytics & Insights', icon: 'analytics', features: ['User Analytics', 'Event Tracking', 'Funnel Tracking', 'Retention Metrics', 'Heatmaps', 'Custom Dashboards', 'Admin Insights'] },
    { id: 'ai', name: 'AI & Automation', icon: 'smart_toy', features: ['AI Chat Assistant', 'AI Content Generator', 'AI Image Generator', 'AI Video Generator', 'AI Recommendations', 'AI Moderation', 'AI Tagging / Categorization', 'AI Summaries', 'AI Transcription (Speech-to-Text)', 'Text-to-Speech Voice', 'Semantic Search', 'Smart Auto Replies', 'Prompt Templates', 'Workflow Automation (Triggers & Actions)', 'Scheduled AI Tasks', 'Behavior-Based Actions', 'Document Understanding (OCR / Extraction)', 'Prediction / Forecasting'] },
    { id: 'automation', name: 'Automation & Jobs', icon: 'precision_manufacturing', features: ['Scheduled Jobs (Cron)', 'Task Queue Processing', 'Retry Failed Jobs', 'Workflow Automation', 'Event Triggers', 'Conditional Actions', 'Delayed Tasks', 'Batch Processing', 'Webhook Triggers', 'External API Calls', 'Data Sync Jobs', 'Cleanup Jobs'] },
    { id: 'financial', name: 'Financial & Billing', icon: 'payments', features: ['One-time Payments', 'Subscriptions', 'Usage Billing (Metered)', 'Wallet / Credits', 'Invoices', 'Taxes / VAT', 'Payouts', 'Refunds', 'Donation / Tips'] },
    { id: 'organizations', name: 'Organizations & Teams', icon: 'domain', features: ['Multiple Workspaces', 'Invite Members', 'Role Permissions', 'Department Groups', 'Ownership Transfer', 'Access Requests', 'Team Activity Logs', 'Team Settings', 'Resource Isolation', 'Team Billing', 'Member Suspension', 'Admin Impersonation'] },
    { id: 'security', name: 'Security & Compliance', icon: 'security', features: ['Two-Factor Authentication', 'Device Login Alerts', 'IP Restrictions', 'CAPTCHA Protection', 'Rate Limiting', 'Session Timeout', 'Password Policies', 'Encryption at Rest', 'Audit Logs', 'GDPR Data Export', 'Account Deletion Requests', 'Privacy Consent Tracking'] },
    { id: 'mobile_features', name: 'Device & Platform Native', icon: 'smartphone', features: ['Offline Mode', 'Sync Engine', 'Geolocation / Maps', 'QR / Barcode Scanner', 'Camera Capture', 'File Picker', 'Biometric Login'] },
    { id: 'integrations', name: 'Integrations', icon: 'extension', features: ['Webhooks (Incoming)', 'Webhooks (Outgoing)', 'REST API Access', 'API Keys Management', 'OAuth Connections', 'Zapier / Make Support', 'Slack / Discord Alerts', 'Calendar Sync', 'Cloud Storage Sync', 'Import External Data', 'Export to External Systems', 'Third-Party Plugins'] },
    { id: 'localization', name: 'Localization & Internationalization', icon: 'language', features: ['Multi-Language UI', 'Language Switcher', 'Auto Detect Language', 'Regional Date Formats', 'Currency Formatting', 'Timezone Conversion', 'Translation Files', 'Localized Notifications', 'RTL Layout Support', 'Country Restrictions', 'Content Localization', 'Multi-Currency Pricing'] },
    { id: 'admin', name: 'Admin & Operations', icon: 'engineering', features: ['Admin Panel / Dashboard', 'User Management', 'Content Moderation', 'System Settings', 'Feature Flags', 'Maintenance Mode', 'Logs Viewer'] },
    { id: 'social_media', name: 'Social Media', icon: 'people', features: ['User Profiles', 'Follow / Unfollow Users', 'Friends System', 'Activity Feed / Timeline', 'Create Posts', 'Media Posts (Image/Video)', 'Stories / Status Updates', 'Reactions / Likes', 'Share / Repost', 'Hashtags', 'Mentions (@user)', 'Save / Bookmark Posts', 'Trending Posts', 'Content Discovery / Explore', 'Content Moderation', 'Report Post / User'] },
    { id: 'community', name: 'Community & Groups', icon: 'groups', features: ['Create Groups / Communities', 'Public & Private Groups', 'Join Requests', 'Group Roles (Admin / Moderator)', 'Group Feed', 'Group Announcements', 'Pinned Posts', 'Topics / Channels', 'Group Events', 'Member Directory', 'Invite via Link', 'Rules & Guidelines', 'Moderation Tools', 'Member Muting / Banning', 'Community Reputation / Points'] },
    { id: 'maps', name: 'Maps & Location', icon: 'map', features: ['Map Rendering', 'Geocoding & Reverse Geocoding', 'Markers / Pins', 'Distance & ETA Calculation', 'Current Location Detection', 'Location Picker', 'Saved Places', 'Nearby Search', 'Geofencing', 'Route Directions', 'Turn-by-Turn Navigation', 'Traffic Conditions', 'Live Tracking (Driver/User)', 'Route Optimization', 'Delivery Zones / Coverage Areas', 'Branch Locator'] },
    { id: 'weather', name: 'Weather & Forecast', icon: 'routine', features: ['Current Weather', 'Hourly & Daily Forecast', 'Historical Weather', 'Temperature & Humidity', 'Wind & Pressure', 'UV Index & Air Quality', 'Sunrise & Sunset', 'Severe Weather Alerts', 'Rain & Storm Alerts', 'Pollen Levels', 'Weather by Location', 'Auto Weather (User Location)', 'Outdoor Condition Score', 'Weather Notifications', 'Weather Automation Triggers'] },
    { id: 'qr', name: 'QR & Barcode', icon: 'qr_code_scanner', features: ['QR Code Generator', 'QR Code Scanner', 'Barcode Scanner', 'Custom QR Styling', 'Dynamic QR (Editable Target)', 'Static QR Codes', 'Deep Link QR', 'App Download QR', 'Login via QR', 'Payment QR', 'Ticket / Pass QR', 'Check-In / Attendance QR', 'Product Information QR', 'URL / Website QR', 'Wi-Fi Share QR', 'Contact / vCard QR', 'Location QR', 'Batch QR Generation', 'Scan History Logs'] },
    { id: 'photo', name: 'Photo & Image', icon: 'photo_camera', features: ['Image Upload', 'Camera Capture', 'Gallery Picker', 'Multiple Image Upload', 'Image Preview', 'Image Cropping', 'Image Resizing', 'Image Compression', 'Thumbnail Generation', 'Image Optimization (Web)', 'Image Metadata (EXIF)', 'Watermarking', 'Image Filters', 'Image Moderation', 'AI Image Tagging', 'Image Storage Management', 'CDN Delivery', 'Private / Public Image Access', 'Image Versioning', 'Bulk Image Upload'] },
    { id: 'video', name: 'Video & Streaming', icon: 'videocam', features: ['Video Upload', 'Camera Recording', 'Video Preview', 'Video Compression', 'Auto Transcoding (Multi-Resolution)', 'Thumbnail Generation', 'Video Streaming Playback', 'Adaptive Streaming (HLS/DASH)', 'Live Streaming', 'Stream Recording', 'Video Trimming', 'Video Metadata', 'Subtitles / Captions', 'Video Moderation', 'Private / Public Access', 'Signed URL Access', 'Download Restrictions', 'View Count & Analytics', 'Video CDN Delivery', 'Background Processing Queue'] },
    { id: 'audio', name: 'Audio & Voice', icon: 'graphic_eq', features: ['Audio Upload', 'Voice Recording', 'Audio Playback', 'Waveform Preview', 'Audio Compression', 'Format Conversion', 'Trim / Cut Audio', 'Background Audio Playback', 'Voice Messages', 'Text-to-Speech (TTS)', 'Speech-to-Text (Transcription)', 'Audio Metadata', 'Noise Reduction', 'Volume Normalization', 'Audio Moderation', 'Private / Public Access', 'Signed URL Access', 'Download Restrictions', 'Podcast / Episode Support', 'Audio Streaming', 'Talk'] },
    { id: 'navigation', name: 'Navigation & Layout', icon: 'explore', features: ['Top Navigation Bar', 'Bottom Navigation Bar', 'Sidebar / Drawer', 'Floating Action Button (FAB)', 'Breadcrumb Navigation', 'Tab Navigation', 'Dynamic Menu Builder', 'Role-Based Menu Visibility', 'Search Bar Integration', 'Global App Header', 'Sticky Navigation', 'Responsive Layout (Mobile / Web)', 'Dark / Light Theme Toggle', 'Multi-Level Menus', 'Quick Actions Menu', 'Route Guard / Protected Pages'] },
    { id: 'subscriptions', name: 'Subscriptions & Plans', icon: 'card_membership', features: ['Subscription Plans', 'Free / Pro / Enterprise Tiers', 'Recurring Billing', 'Trial Period', 'Plan Upgrades / Downgrades', 'Usage-Based Billing', 'Feature Gating', 'Coupon Codes', 'Proration Handling', 'Auto Renewal', 'Subscription Status Tracking', 'Cancel / Pause Subscription', 'Invoice Generation', 'Billing History', 'Plan Comparison Page', 'Payment Failure Handling'] },
    { id: 'wallet', name: 'Wallet & Credits', icon: 'account_balance_wallet', features: ['User Wallet Balance', 'Add Funds', 'Withdraw Funds', 'Transfer Between Users', 'Transaction History', 'Pending Transactions', 'Credit System', 'Reward Points', 'Cashback System', 'Escrow Holding', 'Payout Requests', 'Admin Adjust Balance', 'Multi-Currency Wallet', 'Wallet Notifications', 'Auto Deduction Rules', 'Refund to Wallet'] },
    { id: 'themes', name: 'Themes & Appearance', icon: 'palette', features: ['Light & Dark Mode', 'System Theme Detection', 'Custom Brand Colors', 'Typography Settings', 'Accent Color Picker', 'Theme Presets', 'User Theme Preference', 'High Contrast Mode', 'Dynamic Theme Switching', 'Component Theming', 'White-Label Branding', 'Per-Workspace Theme', 'Saved Theme Profiles', 'Automatic Night Mode', 'Accessibility Color Adjustments'] },
    { id: 'styles', name: 'Styles & UI Customization', icon: 'format_paint', features: ['Global Style Tokens', 'Spacing & Layout Scale', 'Border Radius Settings', 'Shadow Styles', 'Button Variants', 'Card Variants', 'Form Styles', 'Input Field Styles', 'Table Styles', 'List & Grid Styles', 'Custom CSS Support', 'Responsive Breakpoints', 'Density (Compact / Comfortable)', 'Reusable UI Components', 'Design System Variables'] },
    { id: 'animations', name: 'Animations & Motion', icon: 'animation', features: ['Page Transitions', 'Micro-Interactions', 'Button Feedback Animations', 'Loading Animations', 'Skeleton Loaders', 'Scroll Animations', 'Hover Effects', 'Gesture Animations', 'Drag & Drop Motion', 'Parallax Effects', 'Staggered List Animations', 'Modal / Dialog Animations', 'State Change Animations', 'Success / Error Feedback', 'Reduced Motion Mode'] },
    { id: 'visual_presets', name: 'Visual Style Presets', icon: 'brush', features: ['Material Design', 'Cupertino (iOS Style)', 'Fluent UI (Windows Style)', 'Glassmorphism (Liquid Glass)', 'Neumorphism (Soft UI)', 'Minimalist Flat', 'Modern Gradient', 'Brutalist UI', 'Skeuomorphic', 'Frosted Panels', 'Outline / Wireframe Style', 'Retro / Pixel UI', 'Dark Neon / Cyberpunk', 'Luxury / Elegant', 'Playful / Cartoon Style', 'Enterprise Dashboard Style'] },
    { id: 'library', name: 'Library & Resources', icon: 'local_library', features: ['Collections / Categories', 'Browse Library', 'Search Resources', 'Filter & Sorting', 'Book / Item Details Page', 'Save / Bookmark Items', 'Recently Viewed', 'Featured Resources', 'Downloadable Resources', 'Preview Before Download', 'Access Permissions', 'Favorites / Reading List', 'Progress Tracking', 'History Tracking', 'Ratings & Reviews', 'Recommendations', 'Offline Access', 'Resource Sharing', 'Author / Publisher Info'] },
    { id: 'calculations', name: 'Calculations & Processing', icon: 'calculate', features: ['Basic Arithmetic Operations', 'Formula Builder', 'Custom Calculation Rules', 'Conditional Calculations', 'Batch Calculations', 'Real-Time Calculations', 'Unit Conversions', 'Currency Conversion', 'Percentage & Tax Calculations', 'Discount Calculations', 'Aggregations (Sum / Avg / Count)', 'Data Validation Rules', 'Simulation / What-If Scenarios', 'Cost Estimation', 'Pricing Calculator', 'Schedule / Time Calculations', 'Data Transformations', 'Export Calculation Results'] },
    { id: 'rewards', name: 'Rewards & Loyalty', icon: 'stars', features: ['Points System', 'Earn Points Rules', 'Redeem Points', 'Tier Levels (Silver / Gold / VIP)', 'Achievement Badges', 'Referral Rewards', 'Cashback Rewards', 'Promo Rewards', 'Milestone Rewards', 'Daily / Weekly Streaks', 'Leaderboards', 'Reward Expiration Rules', 'Reward History', 'Bonus Campaigns', 'Coupon Redemption', 'Wallet Integration', 'Gamification Triggers', 'Admin Reward Controls'] },
    { id: 'offline', name: 'Offline Mode & Sync', icon: 'wifi_off', features: ['Offline Data Access', 'Local Database Storage', 'Create / Edit While Offline', 'Queued Actions (Send Later)', 'Auto Sync on Reconnect', 'Manual Sync Button', 'Conflict Resolution Rules', 'Background Sync', 'Partial Sync (Changed Data Only)', 'Cache Images & Files', 'Offline Forms Submission', 'Offline Authentication Session', 'Retry Failed Requests', 'Sync Status Indicator', 'Download Data for Offline Use', 'Upload When Connected', 'Low Bandwidth Mode', 'Data Consistency Checks'] },
    { id: 'camera', name: 'Camera & Capture', icon: 'camera_alt', features: ['Open Camera Preview', 'Photo Capture', 'Video Capture', 'Front / Rear Camera Switch', 'Flash & Torch Control', 'Tap to Focus', 'Zoom Control', 'Grid & Guides Overlay', 'Document Scanning Mode', 'Auto Edge Detection', 'Multi-Shot Capture', 'Timer Capture', 'Barcode / QR Scan Support', 'Face Detection', 'AR Overlay Capture', 'Watermark on Capture', 'Save to Gallery', 'Capture Quality Settings', 'Background Upload After Capture'] },

    { id: 'feature_flags', name: 'Feature Flags & Experiments', icon: 'science', features: ['Enable / Disable Features', 'Role-Based Feature Access', 'A/B Testing', 'Gradual Rollout', 'Beta User Groups', 'Remote Config Updates', 'Experiment Metrics', 'Kill Switch', 'Environment-Based Flags', 'Scheduled Feature Release', 'Variant Comparison', 'Experiment Reports'] },
    { id: 'monitoring', name: 'Monitoring & Observability', icon: 'monitoring', features: ['Error Tracking', 'Crash Reports', 'Performance Monitoring', 'API Monitoring', 'Real-Time Logs', 'Alert Notifications', 'System Health Dashboard', 'Usage Metrics', 'Latency Tracking', 'Server Resource Monitoring', 'Uptime Monitoring', 'Custom Event Tracking', 'Anomaly Detection', 'Audit Trail Viewer'] },
    { id: 'search_indexing', name: 'Search & Indexing', icon: 'search', features: ['Full-Text Search', 'Fuzzy Search', 'Auto Suggestions', 'Search Analytics', 'Indexed Fields Control', 'Filterable Search', 'Geo Search', 'Search Highlighting', 'Saved Searches', 'Search History', 'AI Semantic Search', 'Reindex Data'] },
    { id: 'audit_history', name: 'Audit & History', icon: 'history', features: ['User Activity Logs', 'Admin Activity Logs', 'Change History', 'Version History', 'Data Change Tracking', 'Access History', 'Export Audit Logs', 'Timestamp Tracking', 'Restore Previous Version', 'Compliance Log Storage', 'Immutable Logs', 'Action Timeline'] },
    { id: 'data_import_migration', name: 'Data Import & Migration', icon: 'cloud_upload', features: ['CSV Import', 'Excel Import', 'Bulk Data Upload', 'Data Mapping Tool', 'Validation Before Import', 'Duplicate Detection', 'Import History Logs', 'Scheduled Imports', 'External Data Sync', 'API Data Migration', 'Rollback Import', 'Export Full Database'] },
    { id: 'personalization', name: 'Personalization', icon: 'psychology', features: ['Personalized Recommendations', 'Dynamic Homepage Content', 'Behavior-Based Suggestions', 'Location-Based Content', 'Time-Based Content', 'User Preference Memory', 'Recently Viewed', 'Smart Sorting', 'Personalized Notifications', 'AI Interest Detection', 'Custom Dashboards', 'Segment-Based Content'] },
    { id: 'legal', name: 'Legal & Policies', icon: 'policy', features: ['Terms of Service Page', 'Privacy Policy Page', 'Cookie Consent Banner', 'Age Verification', 'User Agreement Tracking', 'Policy Versioning', 'Policy Acceptance Logs', 'Legal Document Templates', 'E-Signature Support', 'Download Legal Documents', 'Compliance Notifications', 'Policy Update Alerts'] },
    { id: 'promotions', name: 'Promotions & Campaigns', icon: 'campaign', features: ['Promo Codes', 'Limited-Time Offers', 'Flash Sales', 'Campaign Scheduling', 'Targeted Campaigns', 'Banner Promotions', 'Referral Campaigns', 'Reward Campaign Tracking', 'Discount Rules Engine', 'Landing Pages', 'Conversion Tracking', 'Campaign Analytics'] },
    { id: 'dev_platform', name: 'Developer Platform', icon: 'api', features: ['Public API Access', 'API Documentation', 'API Keys', 'Rate Limits', 'SDK Generation', 'Webhook Subscriptions', 'Sandbox Environment', 'Developer Dashboard', 'Usage Metrics', 'API Versioning', 'App Marketplace', 'Third-Party App Approval'] },
    { id: 'api_integration', name: 'API Integration', icon: 'settings_input_component', features: ['Connect External APIs', 'REST API Requests', 'GraphQL Requests', 'API Authentication (API Key / OAuth)', 'Custom Headers & Tokens', 'Webhook Receivers', 'Webhook Senders', 'Retry Failed Requests', 'Rate Limit Handling', 'Response Mapping', 'Data Transformation', 'Scheduled API Sync', 'Real-Time API Sync', 'API Error Handling', 'API Logs & History', 'Environment Variables (Dev / Prod)', 'Secrets Management', 'Third-Party Service Connectors'] },
    { id: 'cms', name: 'Page Builder & CMS', icon: 'dashboard_customize', features: ['Drag & Drop Page Builder', 'Reusable Sections / Blocks', 'Dynamic Data Binding', 'Custom Pages', 'Landing Page Builder', 'SEO Meta Settings', 'Slug / URL Control', 'Draft & Publish Workflow', 'Scheduled Publishing', 'Preview Mode', 'Page Templates', 'Content Versioning'] },
    { id: 'onboarding', name: 'Onboarding & Tutorials', icon: 'school', features: ['First-Time User Walkthrough', 'Step-by-Step Tutorials', 'Tooltips & Hints', 'Progress Checklist', 'Interactive Guides', 'Skip / Resume Onboarding', 'Role-Based Onboarding', 'Demo Data Generator', 'Welcome Messages', 'Onboarding Analytics', 'Completion Rewards', 'Help Center Links'] },
    { id: 'support', name: 'Help & Support', icon: 'support_agent', features: ['FAQ Pages', 'Help Articles', 'Search Help Center', 'Support Tickets', 'Priority Levels', 'Assign Support Agents', 'User Conversations', 'Attachments in Tickets', 'Ticket Status Tracking', 'Customer Satisfaction Rating', 'Internal Notes', 'Support Analytics'] },
    { id: 'presence', name: 'Presence & Status', icon: 'person_pin_circle', features: ['Online / Offline Status', 'Last Seen', 'Typing Indicator', 'Read Receipts', 'Active Now Indicator', 'Away / Busy Status', 'Custom Status Message', 'Auto Idle Detection', 'Do Not Disturb Mode', 'Live Presence Updates', 'Status Permissions', 'Session Devices List'] },
    { id: 'kyc', name: 'Identity Verification', icon: 'fingerprint', features: ['ID Upload', 'Selfie Verification', 'Face Match Detection', 'Document OCR Extraction', 'Age Verification', 'Address Verification', 'Manual Review Queue', 'Approval / Rejection Workflow', 'Verification Status Badge', 'Fraud Detection Checks', 'Reverification Requests', 'Verification Audit Logs'] },
    { id: 'pwa', name: 'PWA & Desktop', icon: 'desktop_windows', features: ['Installable App (PWA)', 'Offline Launch Support', 'Home Screen Icon', 'Push Notifications (Web)', 'Background Sync', 'Desktop Notifications', 'Auto Update Service Worker', 'File System Access', 'Window Controls Overlay', 'Deep Linking', 'Multi-Window Support', 'Desktop Shortcuts'] },
    { id: 'inventory', name: 'Inventory & Assets', icon: 'inventory_2', features: ['Asset Tracking', 'Stock Levels', 'Stock Movements', 'Low Stock Alerts', 'Serial Numbers', 'Batch Tracking', 'Warehouses / Locations', 'Transfer Between Locations', 'Stock Adjustments', 'Asset Assignment', 'Maintenance Records', 'Inventory Reports'] },
    { id: 'approvals', name: 'Approvals & Workflows', icon: 'rule', features: ['Approval Requests', 'Multi-Step Approval', 'Conditional Approvers', 'Escalation Rules', 'Delegated Approval', 'Approval Deadlines', 'Approval Comments', 'Reject & Revise', 'Approval Audit Trail', 'Auto Approval Rules', 'Manager Hierarchy', 'Workflow Templates'] },
    { id: 'calendar', name: 'Events & Calendar', icon: 'calendar_month', features: ['Event Creation', 'Recurring Events', 'Calendar Views (Day/Week/Month)', 'RSVP System', 'Event Reminders', 'Shared Calendars', 'Availability Checking', 'Invite Guests', 'Event Attachments', 'Timezone Handling', 'Event Status Tracking', 'Calendar Export (ICS)'] },
    { id: 'ai_training', name: 'Custom AI Models', icon: 'model_training', features: ['Upload Training Data', 'Fine-Tune AI Model', 'Custom Knowledge Base', 'Embeddings Storage', 'Semantic Retrieval', 'Private AI Assistant', 'Model Versioning', 'Retraining Jobs', 'Evaluation Metrics', 'Prompt Testing Lab', 'Usage Cost Tracking', 'Model Access Control'] },
    { id: 'polls', name: 'Polls & Voting', icon: 'how_to_vote', features: ['Create Polls', 'Multiple Choice Voting', 'Anonymous Voting', 'Vote Limits', 'Scheduled Polls', 'Real-Time Results', 'Hide Results Until End', 'Poll Expiration', 'Reaction Voting', 'Ranked Voting', 'Poll Comments', 'Poll Analytics'] },
    { id: 'gamification', name: 'Gamification', icon: 'sports_esports', features: ['XP Points', 'Level System', 'Progress Bars', 'Daily Missions', 'Challenges', 'Unlockable Rewards', 'Season Pass', 'Streak Tracking', 'Leaderboard Seasons', 'Achievements', 'Unlock Conditions', 'Progress Notifications'] },
    { id: 'geo', name: 'Geo & Proximity', icon: 'my_location', features: ['Nearby Users', 'Nearby Places', 'Distance Filtering', 'Geo Notifications', 'Location-Based Content', 'Geo Unlockables', 'Area Restrictions', 'Radius Matching', 'Local Feed', 'Proximity Alerts', 'Geo-Based Pricing', 'Region Locking'] },
    { id: 'courses', name: 'Courses & Learning', icon: 'menu_book', features: ['Course Creation', 'Lessons & Modules', 'Video Lessons', 'Quizzes', 'Assignments', 'Completion Certificates', 'Progress Tracking', 'Instructor Dashboard', 'Student Dashboard', 'Course Reviews', 'Drip Content Release', 'Course Enrollment'] },
    { id: 'health', name: 'Health & Records', icon: 'medical_services', features: ['Medical Records', 'Appointment Records', 'Prescriptions', 'Vitals Tracking', 'Health Logs', 'Doctor Notes', 'Secure Attachments', 'Patient Timeline', 'Health Reminders', 'Insurance Info', 'Consent Forms', 'Health Reports'] },
    { id: 'contracts', name: 'Contracts & E-Signature', icon: 'draw', features: ['Create Contracts', 'Upload Documents', 'E-Signature Capture', 'Multiple Signers', 'Signature Order', 'Timestamp Certificate', 'Document Locking', 'Contract Status Tracking', 'Reminders to Sign', 'Reusable Templates', 'Signed Document Archive', 'Download Signed Copy'] },
    { id: 'crm', name: 'CRM & Leads', icon: 'group', features: ['Lead Capture', 'Lead Stages / Pipeline', 'Deal Tracking', 'Contact Notes', 'Follow-up Reminders', 'Task Assignment', 'Email Tracking', 'Call Logs', 'Customer Tags', 'Sales Dashboard', 'Conversion Analytics', 'Lead Import'] },
    { id: 'routing', name: 'Routing & Dispatching', icon: 'route', features: ['Task Assignment', 'Auto Dispatch Rules', 'Route Scheduling', 'Driver Queue', 'Priority Jobs', 'Live Job Status', 'ETA Updates', 'Proof of Delivery', 'Job History', 'Reassignment', 'Batch Dispatch', 'Dispatch Dashboard'] },
    { id: 'decision', name: 'Decision Engine', icon: 'account_tree', features: ['Business Rules Engine', 'Scoring System', 'Risk Scoring', 'Eligibility Checks', 'Dynamic Pricing Rules', 'Fraud Detection Rules', 'Auto Approvals', 'Rule Simulation', 'Rule Versioning', 'Rule Logs', 'Rule Conditions Builder', 'Outcome Actions'] },
    { id: 'printing', name: 'Labels & Printing', icon: 'print', features: ['Barcode Label Printing', 'QR Label Printing', 'Receipt Printing', 'Invoice Printing', 'Ticket Printing', 'Bulk Print', 'Printer Selection', 'Print Templates', 'Thermal Printer Support', 'Print Preview', 'Auto Print Triggers', 'Print Logs'] },
    { id: 'whitelabel', name: 'White-Label & Branding', icon: 'branding_watermark', features: ['Custom Domain per Client', 'Per-Client Branding', 'Logo & App Name Override', 'Theme per Client', 'Email Template Branding', 'Client Feature Toggles', 'Client Data Isolation', 'Custom Terms per Client', 'Branded Notifications', 'Tenant Settings Panel', 'Tenant Usage Limits', 'Tenant Billing'] },
    { id: 'billing_ops', name: 'Billing Operations', icon: 'request_quote', features: ['Manual Invoices', 'Adjust Charges', 'Credit Notes', 'Write-Off Balances', 'Refund Management', 'Payment Reconciliation', 'Tax Reports', 'Accounting Export', 'Revenue Reports', 'Failed Payment Recovery', 'Dunning Emails', 'Finance Audit Logs'] },
    { id: 'workers', name: 'Workers & Queues', icon: 'engineering', features: ['Job Queue Workers', 'Priority Queues', 'Delayed Jobs', 'Retry Policies', 'Dead Letter Queue', 'Parallel Processing', 'Scheduled Workers', 'Long-Running Tasks', 'Progress Tracking', 'Job Cancellation', 'Worker Health Monitoring', 'Queue Metrics'] },
    { id: 'backup_recovery', name: 'Backup & Recovery', icon: 'backup', features: ['Automatic Backups', 'Manual Backups', 'Point-In-Time Restore', 'Environment Restore', 'Backup Retention Rules', 'Encrypted Backups', 'Geo-Redundant Storage', 'Restore Preview', 'Restore Specific Tables', 'Disaster Recovery Plan', 'Backup Status Alerts', 'Recovery Audit Logs'] },
    { id: 'realtime', name: 'Realtime Collaboration', icon: 'groups', features: ['Live Document Editing', 'Presence Indicators', 'Live Cursor Positions', 'Typing Indicators', 'Live Comments', 'Conflict Merging', 'Session Awareness', 'Shared Selections', 'Realtime Notifications', 'Live Whiteboard', 'Collaborative Tasks', 'Activity Timeline'] },
    { id: 'data_governance', name: 'Data Governance', icon: 'policy', features: ['Data Ownership Tracking', 'Data Lineage', 'Field-Level Permissions', 'Sensitive Data Masking', 'Data Access Approval', 'Retention Enforcement', 'Legal Holds', 'Data Classification', 'Data Access Logs', 'Dataset Catalog', 'Data Steward Roles', 'Governance Reports'] },
    { id: 'growth', name: 'Retention & Growth Tools', icon: 'trending_up', features: ['Churn Detection', 'Re-engagement Campaigns', 'Win-Back Emails', 'Usage Nudges', 'Inactive User Alerts', 'Milestone Celebrations', 'Upgrade Prompts', 'Smart Reminders', 'Behavior Analytics', 'Lifecycle Segments', 'Engagement Scoring', 'Growth Experiments'] },
    { id: 'sandbox', name: 'Sandbox & Testing', icon: 'bug_report', features: ['Staging Environment', 'Test Data Generator', 'Mock API Responses', 'Feature Preview Mode', 'Role Simulation', 'Load Testing Tools', 'Test Accounts', 'QA Checklists', 'Preview Links', 'Environment Switching', 'Test Payment Mode', 'Automated Test Hooks'] },
    { id: 'versioning', name: 'Versioning & Releases', icon: 'new_releases', features: ['App Version Control', 'Release Notes', 'Migration Scripts', 'Rollback Releases', 'Maintenance Window Mode', 'Forced Updates', 'Version Compatibility', 'API Versioning', 'Change Logs', 'Release Channels (Beta/Stable)', 'Hotfix Deployment', 'Update Alerts'] },
    { id: 'plugins', name: 'Plugins & Extensions', icon: 'extension', features: ['Installable Plugins', 'Plugin Permissions', 'Plugin Sandbox Isolation', 'Plugin Settings Panel', 'Plugin Updates', 'Paid Plugins', 'Plugin Marketplace', 'Developer Submissions', 'Plugin Ratings', 'Enable / Disable Plugins', 'Version Compatibility', 'Plugin API Access'] },
    { id: 'miniapps', name: 'Mini Apps Platform', icon: 'apps', features: ['Embedded Apps', 'App Permissions', 'App SDK', 'App Lifecycle Events', 'App Billing Share', 'App Review Process', 'App Listing Page', 'Install / Uninstall Apps', 'App Storage Isolation', 'App Webview Container', 'App Event Hooks', 'App Usage Analytics'] },
    { id: 'moderation', name: 'Moderation Operations', icon: 'gavel', features: ['Content Review Queue', 'Moderator Roles', 'Strike System', 'Temporary Suspensions', 'Permanent Bans', 'Appeal Requests', 'Moderation Notes', 'Evidence Attachments', 'Policy Rules Engine', 'Auto Moderation Actions', 'Transparency Reports', 'Moderator Analytics'] },
    { id: 'knowledge_graph', name: 'Knowledge Graph', icon: 'hub', features: ['Entity Relationships', 'Graph Queries', 'Recommendation Graph', 'Connected Data Insights', 'Related Content Discovery', 'Semantic Linking', 'Relationship Visualization', 'Influence Scoring', 'Entity Merging', 'Duplicate Detection', 'Graph Search', 'Graph Analytics'] },
    { id: 'usage_limits', name: 'Usage Limits & Quotas', icon: 'data_usage', features: ['API Usage Limits', 'Storage Limits', 'Feature Usage Limits', 'Daily Action Limits', 'Rate Plans', 'Overage Billing', 'Quota Reset Cycles', 'Per-User Limits', 'Per-Team Limits', 'Limit Alerts', 'Usage Dashboard', 'Auto Upgrade Prompts'] },
    { id: 'federation', name: 'Federation & Interoperability', icon: 'public', features: ['Cross-Instance Accounts', 'Remote Content Sync', 'Shared Identity Providers', 'External Instance Messaging', 'ActivityPub Support', 'Federated Search', 'Trust Levels', 'Instance Blocking', 'Remote Moderation', 'Cross-Server Notifications', 'External Mentions', 'Network Discovery'] },
    { id: 'governance', name: 'Governance & Administration', icon: 'account_balance', features: ['Admin Policies', 'Organization Policies', 'Approval Governance', 'Data Ownership Rules', 'Delegated Administration', 'Hierarchy Management', 'Policy Enforcement Rules', 'Governance Reports', 'Admin Action Reviews', 'Separation of Duties', 'Operational Controls', 'Compliance Oversight'] },
    { id: 'payments_module', name: 'Payments', icon: 'credit_card', features: ['One-Time Payments', 'Online Checkout Page', 'Saved Payment Methods', 'Credit / Debit Cards', 'Bank Transfer Payments', 'Cash Payments', 'Manual Payment Confirmation', 'Payment Status Tracking', 'Partial Payments', 'Split Payments', 'Payment Links', 'Invoice Payments', 'Refund Processing', 'Payment Receipts', 'Payment Notifications', 'Tax Calculation Support', 'Multi-Currency Payments', 'Payment Failure Handling', '3D Secure Authentication', 'Payment Provider Integration'] }
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
                    kotlin: [{ id: 'spring', name: 'Spring Boot' }, { id: 'ktor', name: 'Ktor' }],
                    csharp: [{ id: 'aspnet', name: 'ASP.NET Core Web API' }, { id: 'minimalapi', name: 'Minimal API' }],
                    go: [{ id: 'gin', name: 'Gin' }, { id: 'fiber', name: 'Fiber' }, { id: 'echo', name: 'Echo' }, { id: 'chi', name: 'Chi' }],
                    php: [{ id: 'laravel', name: 'Laravel' }, { id: 'symfony', name: 'Symfony' }],
                    ruby: [{ id: 'rails', name: 'Ruby on Rails' }, { id: 'sinatra', name: 'Sinatra' }],
                    rust: [{ id: 'actix', name: 'Actix Web' }, { id: 'axum', name: 'Axum' }, { id: 'rocket', name: 'Rocket' }]
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
                    { category: 'Monolith Types', items: ['Classic Monolith', 'Modular Monolith', 'Layered Architecture'] },
                    { category: 'Clean Architecture', items: ['Clean Architecture', 'Hexagonal Architecture', 'Onion Architecture'] },
                    { category: 'Distributed', items: ['Microservices', 'Event-Driven Architecture', 'Serverless Architecture', 'CQRS', 'Domain-Driven Design (DDD)'] }
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
                title: 'Language Options',
                icon: 'code',
                type: 'grid',
                options: [
                    { id: 'js', name: 'JavaScript', subtitle: 'ES6+', icon: 'javascript' },
                    { id: 'ts', name: 'TypeScript', subtitle: 'Primary', icon: 'code' },
                    { id: 'dart', name: 'Dart', subtitle: 'Flutter Web', icon: 'flutter_dash' },
                    { id: 'elm', name: 'Elm', subtitle: 'Elm', icon: 'eco' },
                    { id: 'rescript', name: 'ReScript', subtitle: 'ReasonML', icon: 'integration_instructions' }
                ]
            },
            {
                id: 'framework',
                title: 'Frameworks by Language',
                icon: 'dashboard_customize',
                type: 'categories',
                options: [
                    { category: 'React Ecosystem', items: ['React (Vite / CRA)', 'Next.js', 'Remix', 'Astro (with React)'] },
                    { category: 'Vue Ecosystem', items: ['Vue 3', 'Nuxt 3', 'Vite + Vue'] },
                    { category: 'Angular', items: ['Angular'] },
                    { category: 'Svelte', items: ['Svelte', 'SvelteKit'] },
                    { category: 'Flutter', items: ['Flutter Web'] },
                    { category: 'Solid', items: ['SolidJS', 'SolidStart'] }
                ]
            },
            {
                id: 'rendering',
                title: 'Rendering Strategy',
                icon: 'speed',
                type: 'categories',
                options: [
                    { category: 'Client Side Rendering (CSR)', items: ['React SPA', 'Vue SPA', 'Angular SPA'] },
                    { category: 'Server Side Rendering (SSR)', items: ['Next.js SSR', 'Nuxt SSR', 'SvelteKit SSR'] },
                    { category: 'Static Site Generation (SSG)', items: ['Next.js SSG', 'Astro', 'Hugo'] },
                    { category: 'Hybrid', items: ['Next.js App Router', 'Nuxt 3', 'SvelteKit'] },
                    { category: 'Edge Rendering', items: ['Vercel Edge', 'Cloudflare Pages Functions'] }
                ]
            },
            {
                id: 'styling',
                title: 'Styling System',
                icon: 'brush',
                type: 'categories',
                options: [
                    { category: 'CSS Approaches', items: ['Plain CSS', 'SCSS / SASS', 'CSS Modules', 'PostCSS'] },
                    { category: 'Utility First', items: ['TailwindCSS', 'UnoCSS', 'WindiCSS'] },
                    { category: 'Component Libraries', items: ['Material UI', 'Ant Design', 'Chakra UI', 'Mantine', 'ShadCN UI', 'DaisyUI', 'Bootstrap'] },
                    { category: 'CSS-in-JS', items: ['Styled Components', 'Emotion', 'Stitches'] }
                ]
            },
            {
                id: 'state',
                title: 'State Management',
                icon: 'memory',
                type: 'categories',
                options: [
                    { category: 'React', items: ['Context API', 'Redux Toolkit', 'Zustand', 'Jotai', 'Recoil', 'MobX'] },
                    { category: 'Vue', items: ['Pinia', 'Vuex'] },
                    { category: 'Angular', items: ['NgRx', 'Signals'] },
                    { category: 'Universal', items: ['TanStack Query (React Query)', 'SWR'] }
                ]
            },
            {
                id: 'dataFetching',
                title: 'Data Fetching Strategy',
                icon: 'sync_alt',
                type: 'tags',
                options: ['REST API', 'GraphQL (Apollo / URQL)', 'tRPC', 'WebSockets', 'Server Actions (Next.js)', 'RPC']
            },
            {
                id: 'authHandling',
                title: 'Authentication Handling',
                icon: 'how_to_reg',
                type: 'tags',
                options: ['JWT Storage', 'HTTP Only Cookie Session', 'OAuth Redirect Flow', 'PKCE Flow', 'Refresh Token Rotation', 'Auth Guards / Route Guards', 'Role-based UI rendering']
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
                    { id: 'swift', name: 'Swift', subtitle: 'Native iOS', icon: 'apple' }
                ]
            },
            {
                id: 'framework',
                title: 'Frameworks by Language',
                icon: 'extension',
                type: 'tags_depends_on',
                dependsOn: 'language',
                options: {
                    dart: [
                        { id: 'flutter', name: 'Flutter' }
                    ],
                    ts: [
                        { id: 'react-native', name: 'React Native CLI' },
                        { id: 'expo', name: 'Expo' }
                    ],
                    csharp: [
                        { id: 'maui', name: '.NET MAUI' }
                    ],
                    kotlin: [
                        { id: 'jetpack', name: 'Jetpack Compose' },
                        { id: 'xml', name: 'XML Views' }
                    ],
                    swift: [
                        { id: 'swiftui', name: 'SwiftUI' },
                        { id: 'uikit', name: 'UIKit' }
                    ]
                }
            },
            {
                id: 'architecture',
                title: 'Architecture Patterns',
                icon: 'account_tree',
                type: 'categories',
                options: [
                    { category: 'Low Complexity', items: ['MVC (Good for Small apps)'] },
                    { category: 'Medium Complexity', items: ['MVVM (Good for Most apps)', 'Layered Architecture', 'Feature-First (Good for Growing apps)'] },
                    { category: 'Medium-High Complexity', items: ['Bloc (Good for Complex state)'] },
                    { category: 'High Complexity', items: ['Clean Architecture (Good for Enterprise)'] }
                ]
            },
            {
                id: 'state',
                title: 'State Management',
                icon: 'memory',
                type: 'tags',
                options: [
                    'setState', 'Provider', 'Riverpod', 'GetX', 'Bloc / Cubit', 'Redux', 'MobX'
                ]
            },
            {
                id: 'routing',
                title: 'Navigation / Routing System',
                icon: 'explore',
                type: 'categories',
                options: [
                    { category: 'Classic', items: ['Navigator 1.0 (Classic Push/Pop)', 'Named Routes (Navigator 1.0)'] },
                    { category: 'Modern / Advanced', items: ['GoRouter (Official Recommended)', 'AutoRoute (Code-Generated Strong Routing)', 'Beamer (Advanced URL-Based Router)'] },
                    { category: 'Ecosystem Specific', items: ['GetX Routing'] }
                ]
            },
            {
                id: 'authProvider',
                title: 'Authentication Provider',
                icon: 'admin_panel_settings',
                type: 'grid',
                options: [
                    { id: 'firebase', name: 'Firebase', subtitle: 'Google Auth', icon: 'local_fire_department' },
                    { id: 'supabase', name: 'Supabase', subtitle: 'PostgreSQL Auth', icon: 'water_drop' },
                    { id: 'appwrite', name: 'Appwrite', subtitle: 'Open Source Auth', icon: 'code_blocks' },
                    { id: 'custom', name: 'Custom API', subtitle: 'Your Backend', icon: 'api' }
                ]
            },
            {
                id: 'authMethods',
                title: 'Authentication Methods',
                icon: 'how_to_reg',
                type: 'tags_depends_on',
                dependsOn: 'authProvider',
                options: {
                    firebase: [
                        { id: 'email', name: 'Email / Password' },
                        { id: 'google', name: 'Google Sign-In' },
                        { id: 'apple', name: 'Apple Sign-In' },
                        { id: 'phone', name: 'Phone OTP' },
                        { id: 'magiclink', name: 'Magic Link' },
                        { id: 'anonymous', name: 'Anonymous Login' }
                    ],
                    supabase: [
                        { id: 'email', name: 'Email / Password' },
                        { id: 'google', name: 'Google Sign-In' },
                        { id: 'apple', name: 'Apple Sign-In' },
                        { id: 'magiclink', name: 'Magic Link' },
                        { id: 'oauth', name: 'Other OAuth (Discord, GitHub, etc)' }
                    ],
                    appwrite: [
                        { id: 'email', name: 'Email / Password' },
                        { id: 'magiclink', name: 'Magic Link' },
                        { id: 'oauth', name: 'OAuth Providers' },
                        { id: 'phone', name: 'Phone OTP' },
                        { id: 'jwt', name: 'JWT Auth' }
                    ],
                    custom: [
                        { id: 'jwt', name: 'JWT / Access & Refresh Tokens' },
                        { id: 'oauth', name: 'OAuth Redirect Flow' },
                        { id: 'session', name: 'Session Token' },
                        { id: 'biometric', name: 'Biometric Login (FaceID / Fingerprint)' }
                    ]
                }
            },
            {
                id: 'offlineAuthStorage',
                title: 'Offline Local Storage',
                icon: 'save',
                type: 'tags',
                options: ['Shared Preferences', 'GetStorage', 'Secure Storage (Keychain/Keystore)', 'Hive', 'MMKV', 'Local Database (SQLite)', 'Isardb']
            },
            {
                id: 'databaseProvider',
                title: 'Primary Database Provider',
                icon: 'schema',
                type: 'grid',
                options: [
                    { id: 'firestore', name: 'Firestore', subtitle: 'NoSQL Document', icon: 'local_fire_department' },
                    { id: 'supabase', name: 'Supabase', subtitle: 'PostgreSQL', icon: 'water_drop' },
                    { id: 'appwrite', name: 'Appwrite', subtitle: 'MariaDB', icon: 'code_blocks' },
                    { id: 'redis', name: 'Redis', subtitle: 'In-Memory Cache', icon: 'speed' },
                    { id: 'custom', name: 'Custom Backend', subtitle: 'REST/GraphQL', icon: 'api' }
                ]
            },
            {
                id: 'storageProvider',
                title: 'Primary File Storage',
                icon: 'folder',
                type: 'tags',
                options: ['Firebase Storage', 'Supabase Storage', 'Amazon S3', 'Cloudinary', 'Appwrite Storage', 'Custom Server Storage']
            },
            {
                id: 'apiCommunication',
                title: 'Custom API Communication',
                icon: 'leak_add',
                type: 'multi_tags',
                options: [
                    { id: 'rest', name: 'REST', subtitle: 'CRUD API logic' },
                    { id: 'graphql', name: 'GraphQL', subtitle: 'Flexible Queries' },
                    { id: 'grpc', name: 'gRPC', subtitle: 'Internal Services' },
                    { id: 'websocket', name: 'WebSockets', subtitle: 'Live Data' }
                ]
            },
            // Replaced authHandling with more robust offline and identity providers
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
