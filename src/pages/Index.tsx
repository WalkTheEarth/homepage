const Index = () => {
  const projects = [
    { name: "PyQuake-cli", desc: "Gets the last 10~ earthquakes and outputs them in your terminal", link: "https://github.com/WalkTheEarth/PyQuake-cli" },
    { name: "ratlocker", desc: "Harmless ransomware demo", link: "https://github.com/WalkTheEarth/ratlocker" },
    { name: "SQLDL", desc: "SQA past exams downloader", link: "https://github.com/WalkTheEarth/SQLDL" },
    { name: "EarthquakeDataCenters", desc: "Lists of earthquake datacenters", link: "https://github.com/WalkTheEarth/EarthquakeDataCenters" },
    { name: "PocketLab", desc: "PROJECT: Pocket-sized homelab", link: "https://github.com/WalkTheEarth/PocketLab" },
    { name: "StartIsCracked", desc: "StartIsBack Crack", link: "https://github.com/WalkTheEarth/StartIsCracked" }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'monospace' }}>
      <h1>WalkTheEarth</h1>
      <p style={{ fontSize: '1.1em', color: '#888', marginBottom: '2em' }}>Developer | Command-Line Tools | Fun Demos</p>
      
      <h2>About</h2>
      <p>
        Hi, I'm Jakub Kuriata (WalkTheEarth), a student developer based in Dunfermline, UK.
        I'm passionate about creating unique command-line tools and fun demos. I enjoy exploring
        different programming languages and turning data into exciting experiences.
      </p>

      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.name}>
            <strong>{p.name}</strong> - {p.desc} <a href={p.link}>[GitHub]</a>
          </li>
        ))}
      </ul>

      <h2>Contact</h2>
      <p>
        Feel free to explore my repository and connect with me!<br />
        Email: <a href="mailto:jakubkuriata@protonmail.com">jakubkuriata@protonmail.com</a><br />
        GitHub: <a href="https://github.com/WalkTheEarth">github.com/WalkTheEarth</a>
      </p>
    </div>
  );
};

export default Index;
