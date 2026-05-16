export default function CareerPortal() {
  const completedCourses = 8;
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
          youtube: 'https://www.youtube.com/@chandoo_',
        },
        {
          name: 'Great Learning Excel',
          provider: 'Great Learning',
          link: 'https://www.mygreatlearning.com/academy',
          youtube:
            'https://www.youtube.com/results?search_query=advanced+excel+full+course',
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
          youtube:
            'https://www.youtube.com/results?search_query=sql+full+course',
        },
        {
          name: 'Mode SQL Tutorial',
          provider: 'Mode',
          link: 'https://mode.com/sql-tutorial/',
          youtube: 'https://www.youtube.com/@AlexTheAnalyst',
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
          youtube: 'https://www.youtube.com/@GuyInACube',
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
          youtube: 'https://www.youtube.com/@freecodecamp',
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
          youtube:
            'https://www.youtube.com/results?search_query=aws+cloud+practitioner+full+course',
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
              <h3 className="text-2xl font-bold mb-3">
                Learning Progress
              </h3>

              <div className="w-full bg-white/20 rounded-full h-5 mb-3">
                <div
                  className="bg-white h-5 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="text-lg font-semibold">
                {progress}% Completed
              </p>

              <p className="text-gray-200 mt-2">
                {completedCourses} / {totalCourses} Courses Tracked
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Learning Roadmap
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{section.icon}</span>

                  <h3 className="text-2xl font-bold">
                    {section.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {section.courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="border rounded-2xl p-4 hover:bg-gray-50"
                    >
                      <h4 className="font-semibold text-lg">
                        {course.name}
                      </h4>

                      <p className="text-gray-500 mb-3">
                        {course.provider}
                      </p>

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
            <h2 className="text-3xl font-bold mb-6">
              Daily Study Planner
            </h2>

            <div className="space-y-4">
              {[
                '1 Hour SQL Practice',
                '1 Hour Power BI',
                '30 Min Excel Revision',
                '30 Min Project Work',
                '15 Min LinkedIn/Resume',
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
            <h2 className="text-3xl font-bold mb-6">
              Projects to Build
            </h2>

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
            <h2 className="text-3xl font-bold mb-6">
              Target Roles
            </h2>

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
      </div>
    </div>
  );
}