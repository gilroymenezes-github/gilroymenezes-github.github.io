const updateSkills = (skills) => {
    let ul = document.getElementById("skills-list");
    skills.forEach(s => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(s.name));
        ul.appendChild(li);
    });
}

fetch('http://localhost:3000/skills')
  .then(response => response.json())
  .then(data => {
    console.log('success', data);
    updateSkills(data);
  })
  .catch((error) => {
    console.error('Error', error);
  });

  