# Doddi Navadeep Reddy — 2nd-Year CSE Student Portfolio

Personal academic and developer portfolio for **Doddi Navadeep Reddy**, 2nd-Year Computer Science and Engineering student (3rd Semester) at REVA University, Bengaluru.

Built with a premium dark developer aesthetic accented by metallic **GOLD** highlights (`#D4AF37`), designed specifically for university faculty evaluation and public engineering showcase.

🌐 **Live Website**: [https://doddinavadeepreddy.github.io/developer-portfolio/](https://doddinavadeepreddy.github.io/developer-portfolio/)  
📂 **GitHub**: [https://github.com/DoddiNavadeepReddy](https://github.com/DoddiNavadeepReddy)

---

## 🧭 Navigation & Section Architecture

1. **Hero**: Minimalist engineering headline (`BUILD. SOLVE. CREATE.`), dynamic titles, status pill, and quick links.
2. **My Digital Journey**: Visually dominant gold section tracking 01-Learning, 02-Building, 03-Solving, 04-Sharing, and 05-Connecting.
3. **About Me**: 2nd-year student profile, learning journey, and core interest tags.
4. **Technical Skills**: Grouped competencies with realistic labels: *Working Knowledge*, *Learning*, and *Exploring*.
5. **Featured Projects**:
   - 🥇 **CrimeShield — Smart Emergency Response System** (*Flagship IoT Project with ESP32-CAM, GPS, and privacy-conscious activation*)
   - **HackerRank — 3rd Semester Algorithm Portfolio** (*Python solutions to 5 algorithmic challenges with complexity analysis*)
   - **LeetCode Solutions** (*Systematic DSA practice repository*)
6. **Problem Solving Journey**: Verified HackerRank coding achievement with gold badge element, LeetCode practice, and GitHub version control.
7. **Academic Activities**: Coursework milestones, version control discipline, and developer tool collaboration.
8. **GitHub Portfolio**: "MY CODE. MY PROJECTS. MY JOURNEY." central hub card and verified repositories.
9. **Education**: Timeline card for REVA University B.Tech Computer Science and Engineering.
10. **What I'm Exploring**: Key learning domains (Cybersecurity, Networking, Software Development, IoT, Algorithms, Emerging Technologies).
11. **My Blog**: Technical Notes & Learning Journey with planned categories and draft article cards.
12. **Portfolio Snapshot**: One-stop faculty and evaluator quick review overview.
13. **Connect With Me**: 6 premium gold destination cards + direct contact message form.
14. **Footer**: Clean academic signature, verified links, and quote.

---

## ⚙️ External URL Configuration

All external profile and repository URLs are centralized in a single configuration file:

👉 `src/data/portfolioData.ts` (lines 19–33)

```typescript
export const EXTERNAL_LINKS = {
  GITHUB_URL: 'https://github.com/DoddiNavadeepReddy',
  HACKERRANK_URL: 'https://www.hackerrank.com/profile/dnreddy835',
  LEETCODE_URL: 'REPLACE_WITH_MY_LEETCODE_URL',
  LINKEDIN_URL: 'REPLACE_WITH_MY_LINKEDIN_URL',
  INSTAGRAM_URL: 'REPLACE_WITH_MY_INSTAGRAM_URL',
  BLOG_URL: 'REPLACE_WITH_MY_BLOG_URL',

  // Project repositories
  HACKERRANK_REPO_URL: 'https://github.com/DoddiNavadeepReddy/HackerRank-3rdSem-Algorithm-Portfolio',
  LEETCODE_REPO_URL: 'https://github.com/DoddiNavadeepReddy/leetcode-solutions',
  CRIMESHIELD_REPO_URL: '', // Optional: set if an actual repository URL exists
};
```

To update your profiles:
1. Open `src/data/portfolioData.ts`.
2. Replace `REPLACE_WITH_MY_LEETCODE_URL` with your actual LeetCode profile URL.
3. Replace `REPLACE_WITH_MY_LINKEDIN_URL` with your LinkedIn profile URL.
4. Replace `REPLACE_WITH_MY_INSTAGRAM_URL` with your Instagram URL.
5. Replace `REPLACE_WITH_MY_BLOG_URL` with your technical blog URL (once ready).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + Pure CSS tokens + Metallic Gold design system
- **Typography**: Inter, Plus Jakarta Sans, JetBrains Mono
- **Icons**: Lucide Icons + Custom Vector SVGs
- **Build Tool**: Vite 8

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build
```
