export type Exercise = {
  id: string
  name: string
  muscle: string
  image: string
  steps: string[]
}

export const exercises: Exercise[] = [
  // ── CHEST ──────────────────────────────────────────────────────────────
  {
    id: "1",
    name: "Push Ups",
    muscle: "Chest",
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Place hands slightly wider than shoulder-width apart.",
      "Keep your body straight and tight like a plank.",
      "Lower your chest until it hovers just above the floor.",
      "Exhale and push back up to the starting position."
    ]
  },
  {
    id: "2",
    name: "Chest Dips",
    muscle: "Chest",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Grip parallel bars and lift yourself up to full arm extension.",
      "Lean your torso slightly forward.",
      "Lower yourself until your elbows reach 90 degrees.",
      "Push back up to the starting position."
    ]
  },
  {
    id: "3",
    name: "Wide Push Ups",
    muscle: "Chest",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Place hands much wider than shoulder-width apart.",
      "Keep your core engaged and body in a straight line.",
      "Lower your chest slowly toward the ground.",
      "Push back up, squeezing the chest at the top."
    ]
  },
  {
    id: "4",
    name: "Diamond Push Ups",
    muscle: "Chest",
    image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Place hands together under your chest, forming a diamond shape.",
      "Keep your elbows tight to your body.",
      "Lower your chest toward your hands.",
      "Push back up to full extension."
    ]
  },

  // ── BACK ───────────────────────────────────────────────────────────────
  {
    id: "5",
    name: "Pull Ups",
    muscle: "Back",
    image: "https://hips.hearstapps.com/hmg-prod/images/back-view-of-muscular-sportsman-doing-pull-ups-on-royalty-free-image-1686216944.jpg?crop=0.668xw:1.00xh;0.296xw,0&resize=640:*",
    steps: [
      "Grip the bar slightly wider than shoulder-width, palms facing away.",
      "Hang with your arms fully extended.",
      "Pull yourself up until your chin clears the bar.",
      "Lower yourself back down with control."
    ]
  },
  {
    id: "6",
    name: "Chin Ups",
    muscle: "Back",
    image: "https://miro.medium.com/v2/resize:fit:2000/0*dLse65TELTw74SJ5",
    steps: [
      "Grip the bar slightly narrower than shoulder-width, palms facing toward you.",
      "Hang at full arm extension.",
      "Pull yourself up until your chin is above the bar.",
      "Lower slowly to the starting position."
    ]
  },
  {
    id: "7",
    name: "Deadlift",
    muscle: "Back",
    image: "https://hardtokillfitness.co/cdn/shop/articles/deadlifts-9728886.png?v=1755466823&width=1080",
    steps: [
      "Stand with feet hip-width apart, barbell over mid-foot.",
      "Hinge at the hips, keeping your back flat and core tight.",
      "Grip the bar just outside your legs.",
      "Drive through your heels and extend hips to stand up tall."
    ]
  },
  {
    id: "8",
    name: "Bent-Over Row",
    muscle: "Back",
    image: "https://cdn.muscleandstrength.com/sites/default/files/bent-over-row.jpg",
    steps: [
      "Hold a barbell with an overhand grip, feet shoulder-width apart.",
      "Hinge forward at the hips until your torso is near parallel to the floor.",
      "Pull the bar to your lower chest, keeping elbows close.",
      "Lower the bar with control."
    ]
  },

  // ── LEGS ───────────────────────────────────────────────────────────────
  {
    id: "9",
    name: "Squats",
    muscle: "Legs",
    image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Stand straight with feet hip-width apart.",
      "Keep your chest up and brace your core.",
      "Push your hips back and bend your knees as if sitting in a chair.",
      "Drive through your heels to return to a standing position."
    ]
  },
  {
    id: "10",
    name: "Lunges",
    muscle: "Legs",
    image: "https://hips.hearstapps.com/hmg-prod/images/walking-lunges-667e8add0acad.jpg?crop=0.599xw:0.899xh;0.324xw,0.0791xh&resize=1200:*",
    steps: [
      "Stand tall with feet together.",
      "Step one foot forward and bend both knees to 90 degrees.",
      "Ensure your front knee doesn't pass your toes.",
      "Push back to the starting position and alternate legs."
    ]
  },
  {
    id: "11",
    name: "Wall Sit",
    muscle: "Legs",
    image: "https://ozhelp.org.au/blog/wp-content/uploads/2025/02/Mastering-Wall-Sits-Techniques-Advantages-and-Variations.jpg",
    steps: [
      "Stand with your back flat against a wall.",
      "Slide down until your knees are at a 90 degree angle.",
      "Keep your thighs parallel to the floor.",
      "Hold the position for as long as possible."
    ]
  },
  {
    id: "12",
    name: "Jump Squats",
    muscle: "Legs",
    image: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/222acb6e-9728-4328-9cdb-40d9d7b87769/everything-you-need-to-know-about-jump-squats.jpg",
    steps: [
      "Stand with feet shoulder-width apart.",
      "Lower into a squat position, keeping back straight.",
      "Explode upward, jumping as high as possible.",
      "Land softly and immediately lower into the next squat."
    ]
  },
  {
    id: "13",
    name: "Calf Raises",
    muscle: "Legs",
    image: "https://www.puregym.com/media/zd5ozgih/calf-raises.jpg?quality=80",
    steps: [
      "Stand with feet hip-width apart, optionally on a raised surface.",
      "Push through the balls of your feet to raise your heels.",
      "Hold briefly at the top.",
      "Lower your heels back to the ground slowly."
    ]
  },

  // ── CORE ───────────────────────────────────────────────────────────────
  {
    id: "14",
    name: "Plank",
    muscle: "Core",
    image: "https://gymnation.com/media/jpbjzofv/plank2.webp?width=956&height=675&v=1dc68400a14c040",
    steps: [
      "Place forearms on the floor with elbows aligned below shoulders.",
      "Keep your body in a perfectly straight line from head to heels.",
      "Squeeze your core and glutes tightly.",
      "Hold the position without letting your hips dip."
    ]
  },
  {
    id: "15",
    name: "Crunches",
    muscle: "Core",
    image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2020/04/Man-Doing-Crunches-At-Home.jpg?quality=86&strip=all",
    steps: [
      "Lie on your back with knees bent and hands behind your head.",
      "Engage your abs and lift your shoulders off the floor.",
      "Hold briefly at the top, then lower back down.",
      "Do not pull on your neck."
    ]
  },
  {
    id: "16",
    name: "Leg Raises",
    muscle: "Core",
    image: "https://shockfitapp.com/cdn/shop/articles/Leg_Raise_Crunch_2400x.jpg?v=1595126087",
    steps: [
      "Lie flat on your back with legs extended.",
      "Place hands under your glutes for support.",
      "Raise your legs together until perpendicular to the floor.",
      "Slowly lower them back without letting them touch the ground."
    ]
  },
  {
    id: "17",
    name: "Mountain Climbers",
    muscle: "Core",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Begin in a high plank position with arms straight.",
      "Drive one knee toward your chest.",
      "Quickly switch, bringing the other knee forward.",
      "Continue at a fast, alternating pace."
    ]
  },

  // ── ARMS ───────────────────────────────────────────────────────────────
  {
    id: "18",
    name: "Dumbbell Curls",
    muscle: "Arms",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Hold a dumbbell in each hand with palms facing forward.",
      "Keep your elbows tucked closely to your sides.",
      "Curl the weights up to your shoulders while contracting your biceps.",
      "Slowly lower the weights back to the starting position."
    ]
  },
  {
    id: "19",
    name: "Tricep Dips",
    muscle: "Arms",
    image: "https://images.unsplash.com/photo-1597452485677-d661670d9640?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Sit on the edge of a sturdy chair or bench, hands gripping the edge.",
      "Slide your hips forward off the seat.",
      "Bend your elbows to lower your body toward the floor.",
      "Straighten your arms to push back up."
    ]
  },
  {
    id: "20",
    name: "Hammer Curls",
    muscle: "Arms",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Hold dumbbells with a neutral grip, palms facing each other.",
      "Keep your upper arms stationary.",
      "Curl the dumbbells up toward your shoulders.",
      "Lower slowly back to the starting position."
    ]
  },
  {
    id: "21",
    name: "Skull Crushers",
    muscle: "Arms",
    image: "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Lie on a bench holding a barbell with an overhand grip.",
      "Extend your arms above your chest.",
      "Bend your elbows to lower the barbell toward your forehead.",
      "Extend your arms back to the top without locking out."
    ]
  },

  // ── SHOULDERS ──────────────────────────────────────────────────────────
  {
    id: "22",
    name: "Overhead Press",
    muscle: "Shoulders",
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Stand holding a barbell at shoulder height, palms facing forward.",
      "Brace your core and keep your torso straight.",
      "Press the barbell overhead until your arms are fully extended.",
      "Lower it back to shoulder height with control."
    ]
  },
  {
    id: "23",
    name: "Lateral Raises",
    muscle: "Shoulders",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Stand holding light dumbbells at your sides.",
      "Raise your arms out to the side until they're parallel to the floor.",
      "Hold briefly at the top.",
      "Lower the weights slowly back to the sides."
    ]
  },
  {
    id: "24",
    name: "Front Raises",
    muscle: "Shoulders",
    image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2013/11/incline-barbell-front-raise.png?quality=86&strip=all",
    steps: [
      "Stand holding dumbbells in front of your thighs, palms facing back.",
      "Raise your arms straight out in front of you.",
      "Lift until your arms are parallel to the floor.",
      "Lower the weights back with control."
    ]
  },
  {
    id: "25",
    name: "Arnold Press",
    muscle: "Shoulders",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
    steps: [
      "Sit holding dumbbells at shoulder height, palms facing you.",
      "As you press up, rotate your palms to face outward.",
      "Fully extend your arms overhead.",
      "Reverse the rotation as you lower back to the start."
    ]
  },
]

