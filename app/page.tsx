export default function CareerPortal() {
  const completedCourses = 8;
  const streakDays = 12;
  const searchPlaceholder = 'Search courses...';
  const totalCourses = 24;
  const progress = Math.round((completedCourses / totalCourses) * 100);
  const sections = [
    {
      title: 'Advanced Excel',
      icon: '📊',
      courses: [
        {
          name: 'Microsoft Excel Training',
          provider: 'Microsoft',
          link: 'https://support.microsoft.com/en-us/excel',
          youtube: 'https://www.youtube.com/@chandoo_'
        },
        {
          name: 'Great Learning Excel',
          provider: 'Great Learning',
          link: 'https://www.mygreatlearning.com/academy',
          youtube: 'https://www.youtube.com/results?search_query=advanced+excel+full+course'
        },
      ],
    },
    {
      title: 'SQL',
      icon: '🗄️',
      courses: [
        {
          name: 'SQLBolt',
          provider: 'SQLBolt',
          link: 'https://sqlbolt.com/',
          youtube: 'https://www.youtube.com/results?search_query=sql+full+course'
        },
        {
          name: 'Mode SQL Tutorial',
          provider: 'Mode',
          link: 'https://mode.com/sql-tutorial/',
          youtube: 'https://www.youtube.com/@AlexTheAnalyst'
        },
        {
          name: 'HackerRank SQL Practice',
          provider: 'HackerRank',
          link: 'https://www.hackerrank.com/domains/sql',
          youtube: 'https://www.youtube.com/results?search_query=sql+practice+questions'
        },
      ],
    },
    {
      title: 'Power BI',
      icon: '📈',
      courses: [
        {
          name: 'Microsoft Learn Power BI',
          provider: 'Microsoft',
          link: 'https://learn.microsoft.com/en-us/training/powerplatform/power-bi/',
          youtube: 'https://www.youtube.com/@GuyInACube'
        },
        {
          name: 'Guy in a Cube',
          provider: 'YouTube',
          link: 'https://www.youtube.com/@GuyinaCube',
          youtube: 'https://www.youtube.com/results?search_query=power+bi+full+course'
        },
      ],
    },
    {
      title: 'Python',
      icon: '🐍',
      courses: [
        {
          name: 'freeCodeCamp Python',
          provider: 'freeCodeCamp',
          link: 'https://www.freecodecamp.org/',
          youtube: 'https://www.youtube.com/@freecodecamp'
        },
        {
          name: 'Kaggle Python',
          provider: 'Kaggle',
          link: 'https://www.kaggle.com/learn/python',
          youtube: 'https://www.youtube.com/results?search_query=python+for+data+analysis'
        },
      ],
    },
    {
      title: 'AWS Cloud',
      icon: '☁️',
      courses: [
        {
          name: 'AWS Skill Builder',
          provider: 'AWS',
          link: 'https://explore.skillbuilder.aws/learn',
          youtube: 'https://www.youtube.com/results?search_query=aws+cloud+practitioner+full+course'
        },
        {
          name: 'AWS Educate',
          provider: 'AWS',
          link: 'https://aws.amazon.com/education/awseducate/',
          youtube: 'https://www.youtube.com/@TechWithLucy'
        },
      ],
    },
    {
      title: 'Linux & Git',
      icon: '💻',
      courses: [
        {
          name: 'Linux Journey',
          provider: 'Linux Journey',
          link: 'https://linuxjourney.com/',
          youtube: 'https://www.youtube.com/results?search_query=linux+full+course'
        },
        {
          name: 'GitHub Skills',
          provider: 'GitHub',
          link: 'https://skills.github.com/',
          youtube: 'https://www.youtube.com/results?search_query=git+and+github+full+course'
        },
      ],
    },
  ];

  const projects = [
    'Finance Dashboard',
    'Insurance Claims Analysis',
    'SQL Sales Analysis',
    'Expense Tracker Automation',
    'KPI Dashboard',
  ];

  const jobs = [
    'MIS Analyst',
    'Data Analyst',
    'Business Analyst',
    'Insurance Analyst',
    'Reporting Analyst',
    'Financial Analyst',
  ];

  return (
    <div className="dark">
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-black to-gray-700 text-white rounded-3xl shadow-2xl p-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Shabaaz Siddiqui Study Portal
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl">
                Your centralized platform for learning, tracking progress,
                building projects, and transitioning into Analytics & IT.
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 min-w-[280px]">
              <h3 className="text-2xl font-bold mb-3">Learning Progress</h3>

              <div className="w-full bg-white/20 rounded-full h-5 mb-3">
                <div
                  className="bg-white h-5 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="text-lg font-semibold">{progress}% Completed</p>
              <p className="text-gray-200 mt-2">
                {completedCourses} / {totalCourses} Courses Tracked
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-4">
            Career Transition Learning Portal
          </h1>
          <p className="text-lg text-gray-600">
            Free courses, certifications, projects, and roadmap for your
            Finance + Analytics + IT transition journey.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-gray-50 rounded-2xl p-4 shadow">
              <h2 className="text-2xl font-bold">6–12 Months</h2>
              <p className="text-gray-600">Realistic transition timeline</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 shadow">
              <h2 className="text-2xl font-bold">High ROI</h2>
              <p className="text-gray-600">Excel + SQL + Power BI</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 shadow">
              <h2 className="text-2xl font-bold">5 Projects</h2>
              <p className="text-gray-600">Portfolio building</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 shadow">
              <h2 className="text-2xl font-bold">Free</h2>
              <p className="text-gray-600">Learning + Certifications</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Learning Roadmap</h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{section.icon}</span>
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>

                <div className="space-y-4">
                  {section.courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="border rounded-2xl p-4 hover:bg-gray-50"
                    >
                      <h4 className="font-semibold text-lg">{course.name}</h4>
                      <p className="text-gray-500 mb-3">{course.provider}</p>

                      <div className="flex flex-wrap gap-3 mt-4">
                        <a
                          href={course.link}
                          target="_blank"
                          className="inline-block px-4 py-2 rounded-xl bg-black text-white"
                        >
                          Open Resource
                        </a>

                        <a
                          href={course.youtube}
                          target="_blank"
                          className="inline-block px-4 py-2 rounded-xl border border-black"
                        >
                          YouTube Course
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-6">Daily Study Planner</h2>

            <div className="space-y-4">
              {[
                '1 Hour SQL Practice',
                '1 Hour Power BI',
                '30 Min Excel Revision',
                '30 Min Project Work',
                '15 Min LinkedIn/Resume'
              ].map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-2xl border bg-gray-50"
                >
                  <p>{task}</p>
                  <input type="checkbox" className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-6">Resume & Profiles</h2>

            <div className="space-y-4">
              {[
                'Update Resume',
                'Create LinkedIn Portfolio',
                'Upload Projects to GitHub',
                'Apply to 5 Jobs Daily',
                'Practice Interview Questions'
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-gray-50 border"
                >
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-6">AI Career Assistant</h2>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl border bg-gray-50">
                <p className="font-semibold mb-2">Suggested Next Skill</p>
                <p>Power BI DAX & Dashboard Storytelling</p>
              </div>

              <div className="p-4 rounded-2xl border bg-gray-50">
                <p className="font-semibold mb-2">Recommended Job Role</p>
                <p>Insurance Analytics / MIS Analyst</p>
              </div>

              <div className="p-4 rounded-2xl border bg-gray-50">
                <p className="font-semibold mb-2">Focus This Month</p>
                <p>Projects + Resume + SQL Practice</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-6">Projects to Build</h2>

            <div className="space-y-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-gray-50 border"
                >
                  <p className="font-medium">{project}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-6">Target Roles</h2>

            <div className="space-y-3">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-gray-50 border"
                >
                  <p className="font-medium">{job}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black text-white rounded-3xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your Best Career Combination
          </h2>

          <p className="text-lg mb-6">
            Finance Knowledge + Analytics Skills + Tech Tools
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {['Excel', 'SQL', 'Power BI', 'Python', 'AWS', 'Analytics'].map(
              (skill, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-white text-black rounded-full font-semibold"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
            <div className="bg-white rounded-3xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold">Quick Access</h2>

            <input
              type="text"
              placeholder={searchPlaceholder}
              className="border rounded-2xl px-4 py-3 w-full md:w-96"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-5 rounded-2xl bg-gray-100 border hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-600">Connect your professional profile</p>
            </a>

            <div className="p-5 rounded-2xl bg-gray-100 border hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">Resume Upload</h3>
              <input type="file" className="mt-2" />
            </div>

            <div className="p-5 rounded-2xl bg-gray-100 border hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">Certificates</h3>
              <input type="file" multiple className="mt-2" />
            </div>

            <div className="p-5 rounded-2xl bg-black text-white hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">Daily Streak</h3>
              <p className="text-4xl font-bold">{streakDays}</p>
              <p>Days Consistent 🔥</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6">Notes Section</h2>

          <textarea
            placeholder="Write your SQL, Power BI, AWS, or interview notes here..."
            className="w-full h-52 border rounded-2xl p-4"
          />
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6">Contact & Portfolio</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-2xl p-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-2xl p-4"
            />

            <input
              type="text"
              placeholder="LinkedIn Profile URL"
              className="border rounded-2xl p-4"
            />

            <input
              type="text"
              placeholder="GitHub Profile URL"
              className="border rounded-2xl p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
