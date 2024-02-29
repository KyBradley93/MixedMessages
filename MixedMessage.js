const rescue = {
    dogs: [
        {
            name: "Skippy",
            energy: 7,
            size: 17,
            bio: "Skippy likes to jump a lot! Be Careful when he's skipping!"
        },

        {
            name: "Jiffy",
            energy: 3,
            size: 12,
            bio: "Jiffy likes to take her time and smell the roses. Short walks and belly rubs are needed for her."
        },

        {
            name: "Banana",
            energy: 4,
            size: 30,
            bio: "Banana enjoys going casual walks and eating treats. Make sure she has only healthy options to snack on!"
        },

        {
            name: "Bri",
            energy: 9,
            size: 12,
            bio: "Bri is a ball of energy. Make sure to keep an eye on her!"
        },

        {
            name: "Jahm",
            energy: 6,
            size: 37,
            bio: "Jahm likes to play fetch. Footballs and frisbees are his favs."
        },

        {
            name: "Peanut",
            energy: 2,
            size: 43,
            bio: "Peanut is very cuddly. But thats because he doesn't care to move around a lot."
        },

        {
            name: "Berry",
            energy: 10,
            size: 19,
            bio: "Berry the very crazy doggo. Run fast with her!"
        },

        {
            name: "Chip",
            energy: 5,
            size: 22,
            bio: "Chip likes belly rubs and playing in the park."
        },

        {
            name: "Butter",
            energy: 4,
            size: 47,
            bio: "Butter is a big dog with a big heart. He licks a lot be careful!"
        },

        {
            name: "Honey",
            energy: 7,
            size: 12,
            bio: "Honey is the sweetest girl ever. She likes smelling flowers."
        }
    ],

    dogMaker(newName, newEnergy, newSize, newBio) {
        let dog = {
            name: newName,
            energy: newEnergy,
            size: newSize,
            bio: newBio
        };
        this.dogs.push(dog);
    },

    dogSelector(dogEnergy, dogSize) {
        let dogChoice = this.dogs;
        let dogMatch = [];
        let dogFinal = [];
        let dogWinner = [];

        for (let i = 0; i < dogChoice.length; i++) {
            if (dogChoice.energy === dogEnergy) {
                dogMatch.push(dogChoice);
            };
        };

        for (let i = 0; i < dogMatch.length; i++) {
            if (dogMatch.size < dogSize) {
                dogFinal.push(dogMatch);
            };
        };

        dogFinalCount = dogFinal.length - 1;

        dogIndex = Math.floor(Math.random() * dogFinalCount);

        dogWinner.push(dogFinal[dogIndex]);

        winName = dogWinner.name;

        winBio = dogWinner.bio;

        return `Congrats, you get to see ${winName} today! ${winBio}`;
    }
};

