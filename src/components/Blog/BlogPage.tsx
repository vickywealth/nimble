import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, Clock, User, Send, Calendar } from 'lucide-react'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const categories = ['All', 'Startup Tips', 'Business Growth', 'Marketing', 'Accounting', 'Operations', 'Entrepreneurship']

const posts = [
  { 
    slug: '10-steps-to-starting-an-llc-in-2025',
    title: '10 Steps to Starting an LLC in 2025 (Complete Guide)', 
    cat: 'Startup Tips', 
    date: 'May 15, 2026', 
    read: '5 min', 
    author: 'Jonathan Reed', 
    excerpt: 'Starting an LLC doesn\'t have to be complicated. Here\'s the definitive step-by-step guide to forming your LLC correctly and legally in 2025.',
    featured: true, 
    color: 'hsl(221,83%,53%)',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    content: `
      <p>Starting a Limited Liability Company (LLC) is one of the most popular choices for small business owners in 2025. An LLC provides the liability protection of a corporation with the tax benefits and simplicity of a partnership or sole proprietorship.</p>
      
      <h2>Step 1: Choose Your State of Formation</h2>
      <p>Most entrepreneurs form their LLC in the state where they conduct business. While Delaware, Nevada, and Wyoming offer business-friendly laws, forming in your home state is usually the simplest and most cost-effective option.</p>
      
      <h2>Step 2: Name Your LLC</h2>
      <p>Your LLC name must be unique and include "LLC" or "Limited Liability Company" in the title. Check your state's business database to ensure your desired name is available. Consider reserving the name before filing.</p>
      
      <h2>Step 3: Appoint a Registered Agent</h2>
      <p>Every LLC needs a registered agent—someone authorized to receive legal documents on behalf of your business. You can serve as your own registered agent or hire a professional service ($50-$300/year).</p>
      
      <h2>Step 4: File Articles of Organization</h2>
      <p>This is the official document that creates your LLC. Filing fees range from $40 (Kentucky) to $500 (Massachusetts). Processing times vary from 24 hours to several weeks depending on the state.</p>
      
      <h2>Step 5: Create an Operating Agreement</h2>
      <p>While not required in all states, an operating agreement is essential. It outlines ownership structure, member roles, voting rights, profit distribution, and procedures for adding/removing members.</p>
      
      <h2>Step 6: Obtain an EIN</h2>
      <p>An Employer Identification Number (EIN) is like a Social Security number for your business. It's free from the IRS and required for opening business bank accounts, hiring employees, and filing taxes.</p>
      
      <h2>Step 7: Open a Business Bank Account</h2>
      <p>Keep personal and business finances separate. Most banks require your Articles of Organization, EIN, and Operating Agreement to open a business account.</p>
      
      <h2>Step 8: Register for State Taxes</h2>
      <p>Depending on your business type and location, you may need to register for state income tax, sales tax, or employer taxes. Check with your state's Department of Revenue.</p>
      
      <h2>Step 9: Obtain Business Licenses and Permits</h2>
      <p>Local, state, and federal requirements vary by industry. Common licenses include general business licenses, health permits, professional licenses, and zoning permits.</p>
      
      <h2>Step 10: Set Up Accounting and Compliance Systems</h2>
      <p>Implement bookkeeping software, set up a tax calendar, and understand annual reporting requirements. Most states require annual reports and franchise tax payments to keep your LLC in good standing.</p>
      
      <h2>Final Thoughts</h2>
      <p>Forming an LLC is straightforward, but the details matter. If you're unsure about any step, consult with a business attorney or use a professional formation service. The upfront investment in doing it right will save you headaches down the road.</p>
    `
  },
  { 
    slug: 'build-zero-dollar-marketing-strategy',
    title: 'How to Build a $0 Marketing Strategy for Your Startup', 
    cat: 'Marketing', 
    date: 'May 10, 2026', 
    read: '7 min', 
    author: 'Priya Sharma', 
    excerpt: 'You don\'t need a big budget to market your startup effectively. Here are 8 high-ROI marketing strategies that cost nothing but your time.',
    featured: true, 
    color: 'hsl(350,89%,60%)',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop',
    content: `
      <p>When you're bootstrapping a startup, every dollar counts. The good news? Some of the most effective marketing strategies cost absolutely nothing except your time and creativity.</p>
      
      <h2>1. Content Marketing</h2>
      <p>Creating valuable content is the ultimate long-term marketing play. Write blog posts answering your customers' questions, create how-to videos, or start a podcast. Quality content builds authority and drives organic traffic for years.</p>
      
      <h2>2. Social Media Engagement</h2>
      <p>Don't just post—engage. Respond to comments, join relevant groups, participate in Twitter threads, and share valuable insights. Authentic engagement builds relationships that convert better than any ad.</p>
      
      <h2>3. Email Marketing</h2>
      <p>Email still delivers the highest ROI of any marketing channel. Start building your list from day one with a lead magnet (free guide, checklist, or template). Send weekly value-packed newsletters.</p>
      
      <h2>4. Partnerships and Collaborations</h2>
      <p>Team up with complementary businesses for cross-promotion. Guest post on each other's blogs, co-host webinars, or create bundled offers. You instantly access their audience, and they access yours.</p>
      
      <h2>5. Referral Programs</h2>
      <p>Your existing customers are your best marketers. Create a simple referral program offering discounts, free months, or exclusive perks for successful referrals. Word-of-mouth is incredibly powerful.</p>
      
      <h2>6. Community Building</h2>
      <p>Start a Facebook Group, Discord server, or Slack community around your niche. Provide value, facilitate discussions, and position yourself as the go-to expert. Communities build loyal customer bases.</p>
      
      <h2>7. Public Relations</h2>
      <p>Reach out to journalists, bloggers, and podcasters in your industry. Offer yourself as an expert source or pitch unique story angles. Earned media coverage provides credibility and exposure money can't buy.</p>
      
      <h2>8. SEO Optimization</h2>
      <p>Optimize your website for search engines from the start. Research keywords your customers use, create comprehensive content around those terms, and build backlinks through guest posting and relationships.</p>
      
      <h2>The Bottom Line</h2>
      <p>Zero-budget marketing requires consistency and patience. Pick 2-3 strategies that align with your strengths and execute them relentlessly. The compound effect of free marketing strategies often outperforms paid campaigns in the long run.</p>
    `
  },
  { 
    slug: 'entrepreneurs-guide-business-taxes-2025',
    title: 'The Entrepreneur\'s Guide to Business Taxes in 2025', 
    cat: 'Accounting', 
    date: 'May 5, 2026', 
    read: '9 min', 
    author: 'Michael Torres', 
    excerpt: 'Tax season doesn\'t have to be stressful. A CPA\'s complete guide to business taxes, deductions, and strategies for small business owners.',
    featured: true, 
    color: 'hsl(32,100%,50%)',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop',
    content: `
      <p>Understanding business taxes is crucial for every entrepreneur. As a CPA who's worked with hundreds of small businesses, I'm sharing the essential tax knowledge you need to stay compliant and minimize your tax burden legally.</p>
      
      <h2>Business Structure Matters</h2>
      <p>Your business structure determines how you're taxed. Sole proprietorships and single-member LLCs report on Schedule C. Partnerships file Form 1065. S-Corps file Form 1120-S. C-Corps file Form 1120. Each has different tax implications and deadlines.</p>
      
      <h2>Estimated Quarterly Taxes</h2>
      <p>If you expect to owe $1,000+ in taxes, you must make quarterly estimated payments (April 15, June 15, September 15, January 15). Failure to pay quarterly results in penalties. Set aside 25-30% of income for taxes.</p>
      
      <h2>Essential Deductions</h2>
      <p>Maximize these common deductions: home office (simplified method: $5/sq ft up to 300 sq ft), vehicle mileage (67 cents/mile in 2025), health insurance premiums, retirement contributions, business equipment (Section 179), and professional development.</p>
      
      <h2>Self-Employment Tax</h2>
      <p>Sole proprietors and partners pay 15.3% self-employment tax (Social Security + Medicare). S-Corp owners can reduce this by paying themselves a "reasonable salary" and taking additional profits as distributions.</p>
      
      <h2>Record-Keeping Best Practices</h2>
      <p>Separate business and personal finances immediately. Use accounting software (QuickBooks, Wave, or Xero). Save receipts digitally. Track mileage with apps. Review finances monthly, not just at tax time.</p>
      
      <h2>Hiring Employees vs. Contractors</h2>
      <p>Employees require payroll tax withholding, workers' comp, and unemployment insurance. Contractors (1099) give you flexibility but must meet IRS criteria. Misclassification carries heavy penalties.</p>
      
      <h2>Sales Tax Obligations</h2>
      <p>Most states require sales tax collection on products and some services. Economic nexus laws mean you may owe sales tax in states where you have no physical presence but exceed sales thresholds.</p>
      
      <h2>Tax Planning Strategies</h2>
      <p>Consider: accelerating deductions into the current year, deferring income to next year, maxing out retirement accounts (SEP-IRA: up to $69,000 in 2025), and timing major equipment purchases strategically.</p>
      
      <h2>When to Hire a CPA</h2>
      <p>DIY tax software works for simple situations, but hire a CPA when: you have employees, multiple revenue streams, international transactions, complex deductions, or are considering business structure changes. The investment pays for itself.</p>
    `
  },
  { 
    slug: 'scale-business-zero-to-one-million',
    title: 'How to Scale Your Business from $0 to $1 Million', 
    cat: 'Business Growth', 
    date: 'Apr 28, 2026', 
    read: '11 min', 
    author: 'Jonathan Reed', 
    excerpt: 'The proven framework for scaling a service-based business to 7 figures — including the key hiring decisions, systems, and growth levers.',
    featured: false, 
    color: 'hsl(142,71%,45%)',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    content: `<p>Scaling from zero to $1 million in revenue is the first major milestone for any service business. After working with 500+ entrepreneurs, I've identified the exact framework that separates those who make it from those who stall.</p><h2>Phase 1: Validate Your Offer ($0-$100K)</h2><p>Before scaling, you need product-market fit. Serve 10-20 clients exceptionally well. Refine your offer based on feedback. Document your process. Charge premium prices that reflect your value, not your time.</p><h2>Phase 2: Build Systems ($100K-$250K)</h2><p>Systematize everything: sales process, onboarding, service delivery, and client communication. Create templates, SOPs, and checklists. You can't scale chaos. Invest in CRM, project management, and automation tools.</p><h2>Phase 3: Hire Your First Team ($250K-$500K)</h2><p>Your first hire should eliminate your biggest bottleneck. For most service businesses, that's delivery (freeing you to sell) or sales (freeing you to strategize). Hire for attitude, train for skill. Start with contractors before full-time employees.</p><h2>Phase 4: Scale Marketing ($500K-$750K)</h2><p>Double down on your most profitable acquisition channel. If referrals work, build a formal referral program. If content works, increase output. If paid ads work, scale budget profitably. Don't diversify until one channel is maxed.</p><h2>Phase 5: Optimize and Expand ($750K-$1M)</h2><p>Focus on retention, upsells, and lifetime value. Launch complementary services. Build a leadership team. Implement KPIs and dashboards. You're no longer just a service provider—you're a CEO.</p><h2>Key Metrics to Track</h2><p>Monthly recurring revenue, customer acquisition cost, lifetime value, gross margin (target 60%+), client retention rate, and revenue per employee. What gets measured gets managed.</p><h2>The Truth About Scaling</h2><p>Scaling isn't linear. You'll hit plateaus. Cash flow will get tight before it improves. You'll hire the wrong people. That's normal. Stay focused on delivering exceptional value, and the revenue will follow.</p>`
  },
  { 
    slug: 'why-business-needs-crm',
    title: 'Why Your Business Needs a CRM (And How to Choose One)', 
    cat: 'Operations', 
    date: 'Apr 22, 2026', 
    read: '6 min', 
    author: 'Lauren Kim', 
    excerpt: 'A good CRM is the backbone of a growing business. Here\'s everything you need to know about choosing and implementing the right CRM for your team.',
    featured: false, 
    color: 'hsl(262,83%,58%)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    content: `<p>If you're still managing customer relationships in spreadsheets, you're leaving money on the table. A CRM (Customer Relationship Management) system is the central nervous system of a growing business.</p><h2>What Does a CRM Do?</h2><p>A CRM tracks every interaction with prospects and customers: emails, calls, meetings, purchases, support tickets. It automates follow-ups, manages your pipeline, and provides insights into your sales process.</p><h2>Signs You Need a CRM</h2><p>You've lost track of follow-ups. Multiple team members contact the same prospect. You don't know your conversion rate. Sales data lives in someone's head. Customer inquiries fall through the cracks. If any of these sound familiar, you need a CRM yesterday.</p><h2>Top CRM Options for Small Businesses</h2><p><strong>HubSpot:</strong> Best free CRM with paid upgrades. Great for marketing automation.<br /><strong>Pipedrive:</strong> Visual pipeline management, perfect for sales-focused teams.<br /><strong>Zoho CRM:</strong> Affordable with extensive features and integrations.<br /><strong>Salesforce:</strong> Enterprise-grade, overkill for most small businesses.<br /><strong>Freshsales:</strong> User-friendly with AI-powered lead scoring.</p><h2>Key Features to Look For</h2><p>Contact management, pipeline visualization, email integration, task automation, reporting, mobile app, and integration with your existing tools (email, calendar, accounting software).</p><h2>Implementation Best Practices</h2><p>Start simple—don't try to use every feature on day one. Migrate existing contacts cleanly. Train your team thoroughly. Set data entry standards. Review and adjust workflows monthly. A CRM is only as good as the data you put into it.</p><h2>Common Mistakes to Avoid</h2><p>Over-customizing early. Not getting team buy-in. Failing to maintain data quality. Choosing based on price alone. Treating it as a sales tool only (marketing and support benefit too).</p><h2>ROI of a CRM</h2><p>Businesses see an average 29% increase in sales, 30% increase in revenue, and 33% improvement in sales productivity after implementing a CRM. The investment pays for itself within months.</p>`
  },
  { 
    slug: '5-lessons-500-business-launches',
    title: '5 Lessons From 500+ Business Launches', 
    cat: 'Entrepreneurship', 
    date: 'Apr 15, 2026', 
    read: '8 min', 
    author: 'Jonathan Reed', 
    excerpt: 'After helping over 500 businesses launch, here are the five most common patterns we see separating the businesses that thrive from those that don\'t.',
    featured: false, 
    color: 'hsl(187,85%,43%)',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    content: `<p>After facilitating 500+ business launches, certain patterns emerge. Here are the five most critical lessons that separate thriving businesses from struggling ones.</p><h2>Lesson 1: Start with Revenue, Not Perfection</h2><p>The biggest mistake new entrepreneurs make is spending months building the "perfect" offer before talking to customers. Launch fast, iterate based on feedback, and let the market guide your refinements. Revenue validates; opinions don't.</p><h2>Lesson 2: Cash Flow Kills More Businesses Than Lack of Profit</h2><p>Profitable businesses go bankrupt every day because they run out of cash. Invoice immediately. Follow up on overdue payments. Maintain 3-6 months of operating expenses. Understand the difference between profit and cash flow.</p><h2>Lesson 3: Your Network is Your Net Worth (Literally)</h2><p>Businesses with strong professional networks grow 3x faster. Join industry associations, attend events, participate in mastermind groups, and genuinely help others. Opportunities flow through relationships.</p><h2>Lesson 4: Systems Enable Freedom</h2><p>Entrepreneurs who document processes and build systems from day one create businesses that can run without them. Those who don't create jobs, not businesses. Invest time in SOPs, automation, and delegation early.</p><h2>Lesson 5: Mindset Determines Trajectory</h2><p>Entrepreneurship is psychologically demanding. The businesses that succeed have founders who invest in personal development, build support networks, embrace failure as learning, and maintain resilience through inevitable setbacks.</p><h2>Bonus: Get Professional Help Early</h2><p>The entrepreneurs who thrive invest in professional guidance—legal, accounting, and business consulting—early. The cost of fixing mistakes always exceeds the cost of doing it right the first time.</p>`
  },
  { 
    slug: 'llc-vs-scorp-which-is-right',
    title: 'LLC vs S-Corp: Which Is Right for Your Business?', 
    cat: 'Startup Tips', 
    date: 'Apr 10, 2026', 
    read: '7 min', 
    author: 'Michael Torres', 
    excerpt: 'The LLC vs S-Corp debate confuses many entrepreneurs. Here\'s a clear breakdown of the differences, tax implications, and which is best for you.',
    featured: false, 
    color: 'hsl(221,83%,53%)',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop',
    content: `<p>The LLC vs S-Corp question is one of the most common dilemmas entrepreneurs face. Both offer liability protection, but they're taxed very differently. Let's break it down.</p><h2>What's an LLC?</h2><p>A Limited Liability Company is a legal structure that protects personal assets from business liabilities. By default, it's a "pass-through" entity—you report business income on your personal tax return.</p><h2>What's an S-Corp?</h2><p>An S-Corp isn't a business structure—it's a tax election. Both LLCs and C-Corps can elect S-Corp status. The key difference: S-Corp owners pay themselves a "reasonable salary" (subject to payroll taxes) and take additional profits as distributions (not subject to self-employment tax).</p><h2>The Tax Advantage</h2><p>Here's why S-Corp status matters: Self-employment tax is 15.3%. If your business nets $100,000, you'd pay $15,300 in SE tax as an LLC. As an S-Corp, you might pay yourself $60,000 salary ($9,180 SE tax) and take $40,000 as a distribution ($0 SE tax). That's $6,120 in savings.</p><h2>When S-Corp Makes Sense</h2><p>Generally, S-Corp status becomes advantageous when your business nets $60,000+. Below that, the administrative costs (payroll processing, separate tax return) often exceed the tax savings.</p><h2>S-Corp Requirements</h2><p>Must be a domestic entity, have only allowable shareholders (individuals, certain trusts, estates), no more than 100 shareholders, one class of stock, and cannot be an insurance company or financial institution.</p><h2>Administrative Burden</h2><p>S-Corps require: payroll processing, quarterly payroll tax deposits, annual unemployment insurance, separate tax return (Form 1120-S), and K-1s for each shareholder. Expect $1,000-$2,500/year in additional accounting costs.</p><h2>How to Elect S-Corp Status</h2><p>File Form 2553 with the IRS within 2 months and 15 days of the beginning of the tax year you want the election to take effect. Late elections are sometimes accepted with reasonable cause.</p><h2>Bottom Line</h2><p>LLC is simpler and better for new or low-revenue businesses. S-Corp saves money once you're profitable enough to offset the administrative costs. Consult a CPA to run the numbers for your specific situation.</p>`
  },
  { 
    slug: 'small-business-bookkeeping-checklist',
    title: 'The Ultimate Small Business Bookkeeping Checklist', 
    cat: 'Accounting', 
    date: 'Apr 5, 2026', 
    read: '5 min', 
    author: 'Michael Torres', 
    excerpt: 'Keep your finances organized with this monthly bookkeeping checklist used by 500+ successful small businesses managed by Nimble.',
    featured: false, 
    color: 'hsl(32,100%,50%)',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    content: `<p>Good bookkeeping isn't just about tax compliance—it's the foundation of smart business decisions. Here's the exact monthly checklist we use with 500+ small business clients.</p><h2>Weekly Tasks</h2><p><strong>Record all transactions:</strong> Enter every sale, expense, and transfer in your accounting software. Don't let receipts pile up.<br /><strong>Reconcile bank accounts:</strong> Match your accounting records to bank statements weekly, not monthly. Catch errors early.<br /><strong>Review accounts receivable:</strong> Follow up on overdue invoices. The longer a receivable ages, the less likely you'll collect.</p><h2>Monthly Tasks</h2><p><strong>Reconcile all accounts:</strong> Bank accounts, credit cards, PayPal, Stripe—everything. Aim for $0 difference.<br /><strong>Review profit and loss:</strong> Compare to prior months and budget. Identify trends and anomalies.<br /><strong>Check balance sheet:</strong> Ensure assets, liabilities, and equity are accurate. Watch cash position.<br /><strong>Review accounts payable:</strong> Know what's due and when. Avoid late fees and maintain vendor relationships.<br /><strong>Process payroll:</strong> Verify hours, salaries, bonuses. Ensure tax deposits are made.<br /><strong>Track inventory:</strong> If applicable, conduct physical counts and reconcile to records.<br /><strong>Back up financial data:</strong> Cloud software auto-backs up, but maintain local copies too.</p><h2>Quarterly Tasks</h2><p><strong>Pay estimated taxes:</strong> Calculate and remit quarterly estimated taxes by deadlines.<br /><strong>Review tax strategy:</strong> Meet with your CPA to optimize deductions and plan for year-end.<br /><strong>Update business licenses:</strong> Check renewal dates for local, state, and federal licenses.</p><h2>Annual Tasks</h2><p><strong>Prepare for tax filing:</strong> Organize documents for your CPA. Provide P&L, balance sheet, 1099s, and receipts for major expenses.<br /><strong>Review insurance coverage:</strong> Ensure liability, property, and workers' comp coverage aligns with current operations.<br /><strong>Set next year's budget:</strong> Use this year's actuals to create realistic projections.</p><h2>Best Practices</h2><p>Separate personal and business finances completely. Use accounting software (QuickBooks, Xero, or Wave). Keep digital copies of all receipts. Review financials monthly, not just at tax time. Hire a bookkeeper if you're spending 10+ hours/month on books.</p>`
  },
  { 
    slug: 'social-media-marketing-local-businesses-2025',
    title: 'Social Media Marketing for Local Businesses in 2025', 
    cat: 'Marketing', 
    date: 'Mar 28, 2026', 
    read: '8 min', 
    author: 'Priya Sharma', 
    excerpt: 'Local businesses have a massive advantage on social media that most don\'t use. Here\'s how to dominate your local market with organic social strategy.',
    featured: false, 
    color: 'hsl(350,89%,60%)',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop',
    content: `<p>Local businesses have an unfair advantage on social media that most completely ignore: geographic relevance. Social platforms increasingly prioritize local content, and smart local businesses are capitalizing on this trend.</p><h2>Why Local Social Media Works</h2><p>Algorithms favor content with local engagement. When someone in your city interacts with your post, the platform shows it to more people nearby. This creates a virtuous cycle of local visibility.</p><h2>Platform Strategy for Local Businesses</h2><p><strong>Facebook:</strong> Still the king for local businesses. Join local community groups, create Facebook Events, and use Facebook Posts (not just Page posts).<br /><strong>Instagram:</strong> Use location tags on every post. Leverage Reels for behind-the-scenes content. Partner with local micro-influencers.<br /><strong>Google Business Profile:</strong> Post weekly updates, photos, and offers. This appears in local search results.<br /><strong>TikTok:</strong> Create hyperlocal content. "Day in the life" videos, local events, and community spotlights perform exceptionally well.<br /><strong>Nextdoor:</strong> Underrated for local businesses. Recommend and engage authentically (don't spam).</p><h2>Content That Works for Local Businesses</h2><p><strong>Community involvement:</strong> Sponsor local events, support charities, participate in festivals.<br /><strong>Behind-the-scenes:</strong> Show your team, your process, your workspace. People buy from people.<br /><strong>Customer spotlights:</strong> Feature happy customers (with permission). User-generated content builds trust.<br /><strong>Local partnerships:</strong> Cross-promote with complementary local businesses.<br /><strong>Educational content:</strong> Answer common questions in your industry. Position yourself as the local expert.</p><h2>Hashtag Strategy</h2><p>Use a mix of: location hashtags (#YourCity, #YourCityBusiness), industry hashtags (#YourCityPlumber, #YourCityEats), and community hashtags (#ShopLocalYourCity, #YourCityMade). Research what locals actually use.</p><h2>Engagement Strategy</h2><p>Follow local accounts, comment on local business posts, join local Facebook groups and participate genuinely (don't just promote), respond to every comment and message within 24 hours.</p><h2>Measuring Success</h2><p>Track: local follower growth, engagement rate from local accounts, website traffic from social, mentions by local accounts, and most importantly—how many customers mention finding you on social media.</p><h2>The Bottom Line</h2><p>Local social media marketing isn't about going viral globally—it's about becoming the most visible business in your niche within your geographic area. Consistency and community focus beat production value every time.</p>`
  },
  { 
    slug: 'first-employee-hiring-guide',
    title: 'How to Hire Your First Employee: A Complete Guide for Small Business Owners', 
    cat: 'Operations', 
    date: 'Mar 20, 2026', 
    read: '10 min', 
    author: 'Lauren Kim', 
    excerpt: 'Making that first hire is a major milestone. Here\'s everything you need to know about hiring, onboarding, and retaining your first team member.',
    featured: false, 
    color: 'hsl(262,83%,58%)',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
    content: `<p>Hiring your first employee is both exciting and terrifying. You're transitioning from solo entrepreneur to business owner with a team. Get it right, and you'll accelerate growth exponentially. Get it wrong, and it can set you back months or even threaten your business.</p><h2>When Is It Time to Hire?</h2><p>You're consistently working 60+ hour weeks. You're turning away revenue because you can't keep up. You're spending time on low-value tasks instead of growth activities. Your stress levels are affecting your health and relationships. If these sound familiar, it's time.</p><h2>Define the Role Clearly</h2><p>Don't hire a "general helper." Define specific responsibilities, required skills, success metrics, and growth path. Write a detailed job description. The clearer you are upfront, the better your hiring decisions will be.</p><h2>Full-Time vs. Part-Time vs. Contractor</h2><p><strong>Contractor:</strong> Flexible, no benefits, good for specialized projects. Risk of misclassification.<br /><strong>Part-Time:</strong> Lower cost, good for testing the role. May limit availability.<br /><strong>Full-Time:</strong> Dedicated resource, higher commitment. Requires benefits and payroll taxes.</p><h2>Where to Find Great Candidates</h2><p>Local job boards, LinkedIn, industry-specific communities, referrals from your network, local colleges and universities, and even your best customers. Employee referrals tend to produce the highest-quality hires.</p><h2>The Interview Process</h2><p>Screen for attitude first, skills second. You can train skills; you can't train work ethic and cultural fit. Use behavioral questions ("Tell me about a time when..."). Include a practical test relevant to the role. Trust your gut—if something feels off, it probably is.</p><h2>Legal Requirements</h2><p>Obtain an EIN if you don't have one. Set up payroll system (Gusto, ADP, or Paychex). Verify work eligibility (I-9 form). Report new hires to your state. Get workers' compensation insurance. Display required labor law posters.</p><h2>Onboarding for Success</h2><p>First impressions matter. Prepare their workspace before day one. Create a 30-60-90 day plan with clear expectations. Assign a mentor (even if it's you). Schedule regular check-ins. Invest in training—they'll ramp up faster and feel more confident.</p><h2>Retention Strategies</h2><p>Pay competitively (check market rates). Provide growth opportunities. Recognize achievements publicly. Ask for and act on their feedback. Create a positive culture. Your first employee sets the tone for every hire after them.</p><h2>Common Mistakes to Avoid</h2><p>Hiring too quickly out of desperation. Not checking references thoroughly. Unclear expectations. Micromanaging instead of empowering. Not budgeting for the true cost (salary + benefits + taxes + equipment = 1.25-1.4x base salary).</p>`
  },
  { 
    slug: 'business-insurance-what-you-need',
    title: 'Business Insurance 101: What Coverage Do You Actually Need?', 
    cat: 'Startup Tips', 
    date: 'Mar 15, 2026', 
    read: '8 min', 
    author: 'Michael Torres', 
    excerpt: 'Don\'t leave your business exposed. Learn which insurance policies are essential, which are optional, and how to get the best rates.',
    featured: false, 
    color: 'hsl(221,83%,53%)',
    image: 'https://images.unsplash.com/photo-1450158885227-28128e9eb245?w=800&h=600&fit=crop',
    content: `<p>Many entrepreneurs view business insurance as a grudge purchase—expensive and hopefully unnecessary. But one lawsuit, natural disaster, or cyber attack without proper coverage can wipe out everything you've built. Let's demystify business insurance.</p><h2>General Liability Insurance</h2><p><strong>What it covers:</strong> Third-party bodily injury, property damage, and personal/advertising injury.<br /><strong>Who needs it:</strong> Virtually every business. Many clients require proof before signing contracts.<br /><strong>Cost:</strong> $400-$1,500/year for small businesses.</p><h2>Professional Liability (Errors & Omissions)</h2><p><strong>What it covers:</strong> Claims of negligence, mistakes, or failure to deliver professional services.<br /><strong>Who needs it:</strong> Consultants, agencies, coaches, and any service-based business.<br /><strong>Cost:</strong> $500-$2,000/year depending on services and revenue.</p><h2>Commercial Property Insurance</h2><p><strong>What it covers:</strong> Your building, equipment, inventory, and furniture against fire, theft, and certain natural disasters.<br /><strong>Who needs it:</strong> Businesses with physical locations or valuable equipment.<br /><strong>Cost:</strong> $500-$3,000/year.</p><h2>Cyber Liability Insurance</h2><p><strong>What it covers:</strong> Data breaches, cyber attacks, ransomware, and notification costs.<br /><strong>Who needs it:</strong> Any business that stores customer data or processes payments online.<br /><strong>Cost:</strong> $500-$3,000/year.</p><h2>Workers' Compensation</h2><p><strong>What it covers:</strong> Medical expenses and lost wages for employees injured on the job.<br /><strong>Who needs it:</strong> Required by law in most states once you have employees.<br /><strong>Cost:</strong> Varies widely by industry and payroll ($0.50-$20 per $100 of payroll).</p><h2>Business Owner's Policy (BOP)</h2><p>Bundles general liability and property insurance at a discount. Usually the most cost-effective option for small businesses that need both.</p><h2>Do You Need Life Insurance?</h2><p>If your business depends on you (most do), key person life insurance ensures your business can survive if something happens to you. Buy term life, not whole life, for business purposes.</p><h2>How to Get the Best Rates</h2><p>Bundle policies with one carrier. Increase deductibles (if you can afford the risk). Implement safety protocols. Shop around annually. Work with an independent broker who can compare multiple carriers.</p><h2>Common Mistakes</h2><p>Underinsuring to save money. Not reviewing coverage annually. Assuming your personal policy covers business activities. Not understanding exclusions. Waiting until after an incident to buy coverage (too late).</p>`
  },
  { 
    slug: 'pricing-strategy-maximize-profit',
    title: 'The Art of Pricing: How to Price Your Services for Maximum Profit', 
    cat: 'Business Growth', 
    date: 'Mar 8, 2025', 
    read: '9 min', 
    author: 'Jonathan Reed', 
    excerpt: 'Stop undercharging for your services. Learn proven pricing strategies that increase profit margins while attracting better clients.',
    featured: false, 
    color: 'hsl(142,71%,45%)',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
    content: `<p>Pricing is one of the most powerful levers in your business. Raise prices by 10% and, if volume stays constant, your profit might increase by 50% or more. Yet most entrepreneurs undercharge because they're afraid of losing clients. Let's fix that.</p><h2>Cost-Plus Pricing (The Amateur Approach)</h2><p>Calculate your costs and add a markup. Simple, but flawed. It ignores the value you create and trains you to compete on price. Use this as a floor, not a ceiling.</p><h2>Value-Based Pricing (The Professional Approach)</h2><p>Price based on the value you deliver, not the time it takes. If you save a client $100,000, charging $10,000 is a bargain regardless of whether it takes you 10 hours or 100 hours.</p><h2>How to Calculate Your Minimum Rate</h2><p>Desired annual salary + business expenses + taxes + profit margin ÷ billable hours per year = minimum hourly rate. Most service businesses should charge $100-300/hour minimum. If you can't, fix your positioning or niche.</p><h2>The Power of Package Pricing</h2><p>Instead of hourly billing, create fixed-price packages. Clients prefer predictability. You benefit from efficiency gains. Example: "Brand Identity Package: $5,000" instead of "$100/hour, estimated 50 hours."</p><h2>Tiered Pricing Strategy</h2><p>Offer 3 tiers: Good (basic), Better (most popular), Best (premium). The middle option anchors the decision. Most clients choose the middle, which should be your target offering with healthy margins.</p><h2>When to Raise Prices</h2><p>You're consistently booked 2+ months out. Clients say "that's it?" when you deliver. You haven't raised prices in 12+ months. You're turning away low-margin work. Raise prices for new clients first, then gradually for existing clients.</p><h2>How to Communicate Price Increases</h2><p>Give 60-90 days notice. Explain the value and improvements you've made. Offer existing clients a grace period at current rates. Be confident—if you believe in your value, they will too.</p><h2>Dealing with Price Objections</h2><p>Don't defend your price; explain your value. "I understand budget is a concern. Let me show you the ROI you can expect." If they can't afford you, they're not your ideal client. That's okay.</p><h2>Warning Signs You're Undercharging</h2><p>Clients don't take you seriously. You're attracting price-shoppers. You can't invest in growth. You're working constantly but not getting ahead. You resent your clients. Time to raise prices immediately.</p>`
  },
  { 
    slug: 'remote-team-management-best-practices',
    title: 'Remote Team Management: Best Practices for Leading Distributed Teams in 2025', 
    cat: 'Operations', 
    date: 'Mar 1, 2025', 
    read: '7 min', 
    author: 'Lauren Kim', 
    excerpt: 'Remote work is here to stay. Learn how to build, manage, and scale a high-performing remote team that outperforms office-based competitors.',
    featured: false, 
    color: 'hsl(262,83%,58%)',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    content: `<p>The remote work revolution isn't coming—it's here. Businesses that master remote team management have access to global talent, lower overhead costs, and often higher productivity. But remote leadership requires different skills than traditional management.</p><h2>Communication Is Everything</h2><p>Remote teams die from communication failures. Establish clear norms: which tools for what (Slack for quick questions, email for formal updates, video for complex discussions). Over-communicate, especially early on.</p><h2>Set Clear Expectations</h2><p>Define working hours (or async expectations), response time standards, availability requirements, and deliverable deadlines. Ambiguity breeds anxiety. Clarity breeds confidence.</p><h2>The Right Tools Matter</h2><p><strong>Communication:</strong> Slack, Microsoft Teams<br /><strong>Project Management:</strong> Asana, Trello, Monday.com<br /><strong>Video Calls:</strong> Zoom, Google Meet<br /><strong>Documentation:</strong> Notion, Google Workspace<br /><strong>Time Tracking:</strong> Toggl, Clockify (if needed)<br />Don't over-tool. Start simple and add as needed.</p><h2>Build Culture Intentionally</h2><p>Office culture happens naturally. Remote culture requires intention. Virtual team-building activities, regular one-on-ones, celebration rituals, and occasional in-person retreats. Invest in relationships, not just output.</p><h2>Measure Output, Not Hours</h2><p>Stop monitoring when people log on. Focus on whether they're hitting deadlines and meeting quality standards. Trust your hiring decisions. Micromanaging remote employees is a recipe for turnover.</p><h2>Combat Isolation and Burnout</h2><p>Remote workers report higher loneliness and burnout rates. Encourage breaks. Respect boundaries (no late-night messages). Check in on mental health. Promote work-life balance by modeling it yourself.</p><h2>Hiring Remote Workers</h2><p>Look for: self-motivation, written communication skills, time management, and remote work experience. Test for these in the interview process. Remote work isn't for everyone, and that's okay.</p><h2>Time Zone Challenges</h2><p>Embrace async work where possible. Document everything. Record meetings for those who can't attend. Overlap core hours (2-4 hours) for real-time collaboration. Use tools like World Time Buddy for scheduling.</p><h2>Performance Management</h2><p>Set quarterly OKRs (Objectives and Key Results). Weekly check-ins. Monthly performance conversations. Quarterly reviews. Remote employees need more frequent feedback, not less.</p><h2>Legal and Tax Considerations</h2><p>Hiring across state lines or internationally introduces complexity: payroll taxes, workers' comp, employment laws, and data privacy regulations. Use an Employer of Record (EOR) service like Deel or Remote for international hires.</h>`
  },
  { 
    slug: 'customer-retention-strategies',
    title: '7 Customer Retention Strategies That Grow Revenue by 25-95%', 
    cat: 'Marketing', 
    date: 'Feb 22, 2025', 
    read: '8 min', 
    author: 'Priya Sharma', 
    excerpt: 'Acquiring new customers costs 5-25x more than retaining existing ones. Here\'s how to keep clients happy, loyal, and buying for years.',
    featured: false, 
    color: 'hsl(350,89%,60%)',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    content: `<p>Most businesses obsess over customer acquisition while ignoring retention. This is backwards. Increasing customer retention by just 5% can increase profits by 25-95%. Your existing customers are your most valuable asset—here's how to keep them.</p><h2>1. Deliver Exceptional Onboarding</h2><p>The first 30 days determine whether a customer stays for years or leaves in months. Create a structured onboarding process: welcome email sequence, setup assistance, training resources, and a 30-day check-in call. First impressions are everything.</p><h2>2. Implement Regular Check-Ins</h2><p>Don't wait for customers to contact you with problems. Schedule quarterly business reviews, send monthly check-in emails, or make periodic phone calls. Proactive outreach shows you care and catches issues early.</p><h2>3. Create a Loyalty Program</h2><p>Reward repeat business with discounts, exclusive content, early access to new offerings, or VIP treatment. Make customers feel valued for their loyalty, not just their wallet.</p><h2>4. Ask for and Act on Feedback</h2><p>Send NPS surveys, request reviews, conduct exit interviews. But here's the key: actually act on what you learn and close the loop. "You spoke, we listened" emails build tremendous goodwill.</p><h2>5. Provide Ongoing Value</h2><p>Don't disappear after the sale. Send helpful newsletters, invite to webinars, share industry insights, create customer-exclusive content. Stay top-of-mind as a trusted advisor, not just a vendor.</p><h2>6. Surprise and Delight</h2><p>Send handwritten thank-you notes. Remember birthdays and anniversaries. Upgrade a customer unexpectedly. Throw in a bonus resource. Small gestures create disproportionate loyalty.</p><h2>7. Build a Community</h2><p>Create a customer Facebook Group, host annual events, facilitate networking among your customers. When customers have relationships with each other through your brand, switching costs become emotional, not just financial.</p><h2>Calculate Your Customer Lifetime Value</h2><p>Average purchase value × purchase frequency × customer lifespan = CLV. If your CLV is $5,000, spending $500 to retain a customer annually is a no-brainer. Most businesses spend 10x more on acquisition than retention—flip that ratio.</p><h2>Churn Red Flags</h2><p>Decreased usage, missed payments, unresponsive to communications, negative feedback, or asking about contract terms. When you see these signs, intervene immediately. A personal call from the CEO can save at-risk accounts.</p><h2>The Retention ROI</h2><p>Increasing retention from 80% to 85% might seem small, but compound it over years: a customer who stays 5 years instead of 2 is worth 2.5x more. Focus on retention, and acquisition becomes easier (happy customers refer others).</p>`
  },
]

export default function BlogPage() {
  useScrollReveal()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.cat === activeCategory
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.cat.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = posts.filter((p) => p.featured)

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=1080&fit=crop"
            alt="Business blog and content creation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/55" />
        </div>
        
        <div className="section-container relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(255, 255, 255, 0.15)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)' }}>
            Business Insights
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5" style={{ fontFamily: '"Poppins", sans-serif' }}>
            The Nimble Business Blog
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Practical guides, expert insights, and proven strategies for entrepreneurs at every stage.
          </p>
          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm outline-none"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ background: 'white', color: 'hsl(var(--foreground))', boxShadow: 'var(--shadow-hero)' }}
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {!search && activeCategory === 'All' && (
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="mb-10 animate-on-scroll">
              <span className="section-eyebrow">Featured</span>
              <h2 className="section-title mt-3">Editor's Picks</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featured.map((post, i) => (
                <Link
                  key={post.title}
                  to={`/blog/${post.slug}`}
                  className={`group blog-card rounded-3xl overflow-hidden border border-border shadow-card animate-on-scroll block ${i === 0 ? 'lg:col-span-2' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Cover Image */}
                  <div className={`${i === 0 ? 'h-56' : 'h-40'} overflow-hidden relative`}>
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm"
                        style={{ color: post.color }}>
                        {post.cat}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors ${i === 0 ? 'text-xl' : 'text-base'}`}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <User className="w-3.5 h-3.5" />
                        <span>{post.author}</span>
                        <span>·</span>
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.read} read</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: post.color }}>
                        Read More <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Posts */}
            <div className="lg:col-span-3">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8 animate-on-scroll">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className="px-4 py-2 rounded-xl text-sm font-medium border transition-all"
                    style={{
                      background: activeCategory === cat ? 'hsl(var(--primary))' : 'hsl(var(--background))',
                      color: activeCategory === cat ? 'white' : 'hsl(var(--foreground))',
                      borderColor: activeCategory === cat ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                    }}>
                    {cat}
                  </button>
                ))}
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No articles found. Try a different search or category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filtered.map((post, i) => (
                    <Link
                      key={post.title}
                      to={`/blog/${post.slug}`}
                      className="group blog-card bg-white rounded-3xl overflow-hidden border border-border shadow-card animate-on-scroll block"
                      style={{ animationDelay: `${i * 0.08}s` }}
                    >
                      {/* Cover Image */}
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm"
                            style={{ color: post.color }}>
                            {post.cat}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <h3 className="text-base font-semibold text-foreground mb-3 leading-snug line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{post.date}</span>
                            <span>·</span>
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.read} read</span>
                          </div>
                          <span className="text-xs font-semibold flex items-center gap-1" style={{ color: post.color }}>
                            Read More <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Newsletter */}
              <div className="bg-white rounded-3xl border border-border shadow-card p-6 animate-on-scroll">
                <h3 className="font-bold text-foreground mb-2">Weekly Insights</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Get the best startup and business tips delivered every Tuesday.
                </p>
                {subscribed ? (
                  <div className="rounded-xl p-3 text-center text-sm font-semibold" style={{ background: 'hsl(142,71%,97%)', color: 'hsl(142,71%,35%)' }}>
                    You're subscribed!
                  </div>
                ) : (
                  <div className="space-y-2">
                    <input
                      type="email"
                      className="form-input text-sm"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      onClick={() => email && setSubscribed(true)}
                      className="btn-primary w-full justify-center text-sm py-2.5">
                      <Send className="w-3.5 h-3.5" />
                      Subscribe Free
                    </button>
                  </div>
                )}
              </div>

              {/* Categories */}
              <div className="bg-white rounded-3xl border border-border shadow-card p-6 animate-on-scroll">
                <h3 className="font-bold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.filter(c => c !== 'All').map((cat) => {
                    const count = posts.filter(p => p.cat === cat).length
                    return (
                      <button key={cat} onClick={() => setActiveCategory(cat)}
                        className="w-full flex items-center justify-between py-2 px-3 rounded-xl text-sm transition-colors hover:bg-accent"
                        style={{ color: activeCategory === cat ? 'hsl(var(--primary))' : 'hsl(var(--foreground))' }}>
                        <span className="font-medium">{cat}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))' }}>
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-3xl hero-bg p-6 animate-on-scroll">
                <h3 className="font-bold text-white mb-2">Ready to launch?</h3>
                <p className="text-white/75 text-sm mb-4">Turn these insights into action with a free consultation.</p>
                <Link to="/book" className="btn-white w-full justify-center text-sm py-2.5">
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
