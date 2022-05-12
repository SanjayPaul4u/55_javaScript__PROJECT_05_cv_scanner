console.log("Project 05");
//CV Scanner/scener

//data is an array of object which contains the imformation about the candidate.
const data = [
    {
        Name: "Rohan Das",
        age: "19",
        city: "Kolkata",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        Name: "Rupali Sharma",
        age: "25",
        city: "Bangaluru",
        language: "JavaScript",
        framework: "React",
        image: "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        Name: "Sanjay Kumar",
        age: "25",
        city: "Delhi",
        language: "Python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/men/66.jpg"
    },
    {
        Name: "Rohit Shikder",
        age: "28",
        city: "Jharkhand",
        language: "Go",
        framework: "Go framework",
        image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
        Name: "Aishwariya Ray",
        age: "45",
        city: "Mumbai",
        language: "javaScript",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/women/80.jpg"
    },
]

//CV iterator
function CViterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            //here we used turnary operators.
            return nextIndex < profiles.length ? { values: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}
const candidates = CViterator(data);



nextCV()
//Event listener for next Button
let next = document.getElementById("next");
next.addEventListener("click", nextCV);



function nextCV() {
    let currentCandidate = candidates.next().values;
    console.log(currentCandidate);


    if (currentCandidate != undefined) {
        let image = document.getElementById("image");
        let profile = document.getElementById("profile");

        image.innerHTML = `<image src="${currentCandidate.image}"></image>`

        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name ${currentCandidate.Name}</li>
                            <li class="list-group-item">${currentCandidate.age} year old</li>
                            <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                            <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                            <li class="list-group-item">Uses ${currentCandidate.framework} frameWork</li>
                        </ul>`
    }
    else {

        alert("candidate is end");
        window.location.reload();
        // window.history.go(-1);
        // window.history.go(1);
    }
}

