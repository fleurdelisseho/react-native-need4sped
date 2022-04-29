 const objects = [
    {
        id: 1,
        object_name: 'Bag',
        image: require('../assets/images/objects/bag.png')
    },
    {
        id: 2,
        object_name: 'Umbrella',
        image: require('../assets/images/objects/umbrella.png')
    },
    {
        id: 3,
        object_name: 'Juice',
        image: require('../assets/images/objects/juice.png')
    },
    {
        id: 4,
        object_name: 'Shoes',
        image: require('../assets/images/objects/shoes.png')
    },
    
    
]




export const object_questions = [
    {
        id:1,
        question_object:objects[0].object_name,
        choice1:objects[0].image,
        choice2:objects[1].image,
        choice3:objects[2].image,
        choice4:objects[3].image,
        answer:'1'
    },
    {
        id:2,
        question_object:objects[1].object_name,
        choice1:objects[0].image,
        choice2:objects[1].image,
        choice3:objects[2].image,
        choice4:objects[3].image,
        answer:'2'
    },
    {
        id:3,
        question_object:objects[2].object_name,
        choice1:objects[0].image,
        choice2:objects[1].image,
        choice3:objects[2].image,
        choice4:objects[3].image,
        answer:'3'
    },
    {
        id:4,
        question_object:objects[3].object_name,
        choice1:objects[0].image,
        choice2:objects[1].image,
        choice3:objects[2].image,
        choice4:objects[3].image,
        answer:'4'
    },
]