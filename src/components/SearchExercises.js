import React, { useState } from 'react';
import { Box, Stack, TextField, Typography, Chip } from '@mui/material';

// Remove unused import
// import HorizontalScrollbar from './HorizontalScrollBar';

const EXERCISE_GIFS = {
  all: [
    { name: 'Barbell Bent Over Row', gif: '/assets/gifs/back/barbell_bent_over_row.gif', section: 'Back', info: [
      'A compound exercise targeting the back and biceps.',
      'Helps improve posture and upper body strength.',
      'Use a flat back and controlled motion for safety.'
    ] },
    { name: 'Deadlift', gif: '/assets/gifs/back/deadlift.gif', section: 'Back', info: [
      'A full-body movement focusing on the posterior chain.',
      'Engages glutes, hamstrings, lower back, and grip.',
      'Maintain a neutral spine and lift with your legs.'
    ] },
    { name: 'Lat Pulldown', gif: '/assets/gifs/back/Lat-Pulldown.gif', section: 'Back', info: [
      'Targets the latissimus dorsi muscles for width.',
      'Keep your chest up and pull the bar to your upper chest.',
      'Avoid using momentum for best results.'
    ] },
    { name: 'Pullups', gif: '/assets/gifs/back/pullups.gif', section: 'Back', info: [
      'Bodyweight exercise for upper back and arms.',
      'Focus on full range of motion and controlled descent.',
      'Great for building functional strength.'
    ] },
    { name: 'Single Hand DB Row', gif: '/assets/gifs/back/SingleHand_DB_ROW.gif', section: 'Back', info: [
      'Isolates each side of the back for balanced strength.',
      'Keep your back flat and pull with your elbow.',
      'Helps correct muscle imbalances.'
    ] },
    { name: 'Bench Press', gif: '/assets/gifs/chest/benchpress.gif', section: 'Chest', info: [
      'Classic compound movement for chest, shoulders, and triceps.',
      'Keep your feet flat and lower the bar to mid-chest.',
      'Do not bounce the bar off your chest.'
    ] },
    { name: 'Cable Fly', gif: '/assets/gifs/chest/cable_fly.gif', section: 'Chest', info: [
      'Isolation exercise for the chest.',
      'Maintain a slight bend in your elbows.',
      'Squeeze your chest at the peak contraction.'
    ] },
    { name: 'Chest Dips', gif: '/assets/gifs/chest/chest_dips.gif', section: 'Chest', info: [
      'Targets lower chest and triceps.',
      'Lean forward to emphasize the chest.',
      'Go down until your shoulders are below your elbows.'
    ] },
    { name: 'Incline Bench Press', gif: '/assets/gifs/chest/incline_benchpress.gif', section: 'Chest', info: [
      'Emphasizes the upper chest and shoulders.',
      'Set the bench at a 30-45 degree angle.',
      'Lower the bar to the upper chest.'
    ] },
    { name: 'Incline Fly', gif: '/assets/gifs/chest/incline_fly.gif', section: 'Chest', info: [
      'Isolation movement for upper chest.',
      'Keep a slight bend in your elbows.',
      'Bring the dumbbells together above your chest.'
    ] },
    { name: 'Cable Lateral Raise', gif: '/assets/gifs/shoulders/cable_lateralraise.gif', section: 'Shoulders', info: [
      'Targets the lateral deltoids for shoulder width.',
      'Keep your arm slightly bent and lift to shoulder height.',
      'Control the weight on the way down.'
    ] },
    { name: 'Cable Rear Delt Row', gif: '/assets/gifs/shoulders/cable_reardelt_row.gif', section: 'Shoulders', info: [
      'Focuses on rear deltoids and upper back.',
      'Pull with your elbows, not your hands.',
      'Keep your chest up and squeeze at the end.'
    ] },
    { name: 'DB Front Raise', gif: '/assets/gifs/shoulders/DB_Front_RAISE.gif', section: 'Shoulders', info: [
      'Isolates the front deltoids.',
      'Lift dumbbells to eye level with straight arms.',
      'Avoid swinging your body.'
    ] },
    { name: 'Lateral Raises', gif: '/assets/gifs/shoulders/lateral_raises.gif', section: 'Shoulders', info: [
      'Builds width in the shoulders.',
      'Raise arms to the side, not above shoulders.',
      'Use light weights for better form.'
    ] },
    { name: 'Seated DB Shoulder Press', gif: '/assets/gifs/shoulders/SEAT_DB_SHD_PRESS.gif', section: 'Shoulders', info: [
      'Compound movement for shoulders and triceps.',
      'Press dumbbells overhead without locking elbows.',
      'Keep your back straight and core tight.'
    ] },
    { name: 'Seated Military Press', gif: '/assets/gifs/shoulders/seated_military_press.gif', section: 'Shoulders', info: [
      'Targets the entire shoulder complex.',
      'Lower the bar to chin level and press up.',
      'Maintain a neutral wrist position.'
    ] },
    { name: 'Barbell Curl', gif: '/assets/gifs/arms/barbell_curl.gif', section: 'Arms', info: [
      'Primary biceps builder.',
      'Keep elbows close to your torso.',
      'Avoid swinging for strict form.'
    ] },
    { name: 'Cable One Arm Triceps', gif: '/assets/gifs/arms/cable_onearm_triceps.gif', section: 'Arms', info: [
      'Isolates the triceps with one arm at a time.',
      'Keep your upper arm stationary.',
      'Extend fully for maximum contraction.'
    ] },
    { name: 'DB Ham Curl', gif: '/assets/gifs/arms/DB_HAM_CURL.gif', section: 'Arms', info: [
      'Works the biceps and forearms.',
      'Curl dumbbells with palms facing each other.',
      'Squeeze at the top.'
    ] },
    { name: 'Preacher Curl with Bent Barbell', gif: '/assets/gifs/arms/preachercurlwithbentbarbell.gif', section: 'Arms', info: [
      'Strict biceps isolation exercise.',
      'Use a preacher bench for support.',
      'Lower the bar slowly for best results.'
    ] },
    { name: 'Seated Dumbbell Triceps Extension', gif: '/assets/gifs/arms/seated-dumbbell-triceps-extension.gif', section: 'Arms', info: [
      'Targets the long head of the triceps.',
      'Keep elbows close to your head.',
      'Lower the dumbbell behind your head and extend.'
    ] },
    { name: 'Triceps Rope Pushdown', gif: '/assets/gifs/arms/trícepsropepushdown.gif', section: 'Arms', info: [
      'Great for triceps definition.',
      'Push the rope down and spread at the bottom.',
      'Keep your upper arms stationary.'
    ] },
    { name: 'Dumbbell Lunges', gif: '/assets/gifs/legs/dumbel_lunges.gif', section: 'Legs', info: [
      'Targets quads, glutes, and hamstrings.',
      'Keep your torso upright and step forward with control.',
      'Push back to the starting position using your heel.'
    ] },
    { name: 'Calf Raise', gif: '/assets/gifs/legs/leg_CALF_RAISE.gif', section: 'Legs', info: [
      'Strengthens the calf muscles.',
      'Rise onto your toes and squeeze at the top.',
      'Lower slowly for a full stretch.'
    ] },
    { name: 'Leg Extension', gif: '/assets/gifs/legs/leg_extension.gif', section: 'Legs', info: [
      'Isolates the quadriceps.',
      'Adjust the pad to sit above your ankles.',
      'Extend your legs fully and squeeze.'
    ] },
    { name: 'Leg Press', gif: '/assets/gifs/legs/leg-press.gif', section: 'Legs', info: [
      'Compound movement for the lower body.',
      'Keep your feet flat and push through your heels.',
      'Do not lock your knees at the top.'
    ] },
    { name: 'Seated Leg Curl', gif: '/assets/gifs/legs/seated_leg_curl.gif', section: 'Legs', info: [
      'Targets the hamstrings.',
      'Adjust the pad to sit above your ankles.',
      'Curl your legs down and squeeze.'
    ] },
    { name: 'Squats', gif: '/assets/gifs/legs/squats.gif', section: 'Legs', info: [
      'The king of lower body exercises.',
      'Keep your chest up and back straight.',
      'Go down until your thighs are parallel to the floor.'
    ] },
    { name: 'Bicycle Crunch', gif: '/assets/gifs/abs_and_cardio/bicycle_crunch.gif', section: 'Abs & Cardio', info: [
      'Targets the obliques and rectus abdominis.',
      'Bring opposite elbow to knee and alternate sides.',
      'Keep your lower back pressed to the floor.'
    ] },
    { name: 'Crunch', gif: '/assets/gifs/abs_and_cardio/CRUNCH.gif', section: 'Abs & Cardio', info: [
      'Classic ab exercise for rectus abdominis.',
      'Lift your shoulders off the floor using your abs.',
      'Avoid pulling on your neck.'
    ] },
    { name: 'Cycling', gif: '/assets/gifs/abs_and_cardio/cycling.gif', section: 'Abs & Cardio', info: [
      'Great for cardio and leg endurance.',
      'Maintain a steady pace and good posture.',
      'Engage your core throughout.'
    ] },
    { name: 'Incline Treadmill', gif: '/assets/gifs/abs_and_cardio/incline tredmill.gif', section: 'Abs & Cardio', info: [
      'Increases intensity for better fat burn.',
      'Keep your chest up and walk briskly.',
      'Do not hold onto the handles.'
    ] },
    { name: 'Leg Raise', gif: '/assets/gifs/abs_and_cardio/Leg-Raise.gif', section: 'Abs & Cardio', info: [
      'Targets lower abs.',
      'Keep your legs straight and lift with control.',
      'Do not arch your lower back.'
    ] },
    { name: 'Side Abs', gif: '/assets/gifs/abs_and_cardio/sideabs.gif', section: 'Abs & Cardio', info: [
      'Works the obliques.',
      'Twist your torso to the side as you crunch.',
      'Focus on the squeeze.'
    ] },
  ],
  back: [
    { name: 'Barbell Bent Over Row', gif: '/assets/gifs/back/barbell_bent_over_row.gif', info: [
      'A compound exercise targeting the back and biceps.',
      'Helps improve posture and upper body strength.',
      'Use a flat back and controlled motion for safety.'
    ] },
    { name: 'Deadlift', gif: '/assets/gifs/back/deadlift.gif', info: [
      'A full-body movement focusing on the posterior chain.',
      'Engages glutes, hamstrings, lower back, and grip.',
      'Maintain a neutral spine and lift with your legs.'
    ] },
    { name: 'Lat Pulldown', gif: '/assets/gifs/back/Lat-Pulldown.gif', info: [
      'Targets the latissimus dorsi muscles for width.',
      'Keep your chest up and pull the bar to your upper chest.',
      'Avoid using momentum for best results.'
    ] },
    { name: 'Pullups', gif: '/assets/gifs/back/pullups.gif', info: [
      'Bodyweight exercise for upper back and arms.',
      'Focus on full range of motion and controlled descent.',
      'Great for building functional strength.'
    ] },
    { name: 'Single Hand DB Row', gif: '/assets/gifs/back/SingleHand_DB_ROW.gif', info: [
      'Isolates each side of the back for balanced strength.',
      'Keep your back flat and pull with your elbow.',
      'Helps correct muscle imbalances.'
    ] },
  ],
  chest: [
    { name: 'Bench Press', gif: '/assets/gifs/chest/benchpress.gif', info: [
      'Classic compound movement for chest, shoulders, and triceps.',
      'Keep your feet flat and lower the bar to mid-chest.',
      'Do not bounce the bar off your chest.'
    ] },
    { name: 'Cable Fly', gif: '/assets/gifs/chest/cable_fly.gif', info: [
      'Isolation exercise for the chest.',
      'Maintain a slight bend in your elbows.',
      'Squeeze your chest at the peak contraction.'
    ] },
    { name: 'Chest Dips', gif: '/assets/gifs/chest/chest_dips.gif', info: [
      'Targets lower chest and triceps.',
      'Lean forward to emphasize the chest.',
      'Go down until your shoulders are below your elbows.'
    ] },
    { name: 'Incline Bench Press', gif: '/assets/gifs/chest/incline_benchpress.gif', info: [
      'Emphasizes the upper chest and shoulders.',
      'Set the bench at a 30-45 degree angle.',
      'Lower the bar to the upper chest.'
    ] },
    { name: 'Incline Fly', gif: '/assets/gifs/chest/incline_fly.gif', info: [
      'Isolation movement for upper chest.',
      'Keep a slight bend in your elbows.',
      'Bring the dumbbells together above your chest.'
    ] },
  ],
  shoulders: [
    { name: 'Cable Lateral Raise', gif: '/assets/gifs/shoulders/cable_lateralraise.gif', info: [
      'Targets the lateral deltoids for shoulder width.',
      'Keep your arm slightly bent and lift to shoulder height.',
      'Control the weight on the way down.'
    ] },
    { name: 'Cable Rear Delt Row', gif: '/assets/gifs/shoulders/cable_reardelt_row.gif', info: [
      'Focuses on rear deltoids and upper back.',
      'Pull with your elbows, not your hands.',
      'Keep your chest up and squeeze at the end.'
    ] },
    { name: 'DB Front Raise', gif: '/assets/gifs/shoulders/DB_Front_RAISE.gif', info: [
      'Isolates the front deltoids.',
      'Lift dumbbells to eye level with straight arms.',
      'Avoid swinging your body.'
    ] },
    { name: 'Lateral Raises', gif: '/assets/gifs/shoulders/lateral_raises.gif', info: [
      'Builds width in the shoulders.',
      'Raise arms to the side, not above shoulders.',
      'Use light weights for better form.'
    ] },
    { name: 'Seated DB Shoulder Press', gif: '/assets/gifs/shoulders/SEAT_DB_SHD_PRESS.gif', info: [
      'Compound movement for shoulders and triceps.',
      'Press dumbbells overhead without locking elbows.',
      'Keep your back straight and core tight.'
    ] },
    { name: 'Seated Military Press', gif: '/assets/gifs/shoulders/seated_military_press.gif', info: [
      'Targets the entire shoulder complex.',
      'Lower the bar to chin level and press up.',
      'Maintain a neutral wrist position.'
    ] },
  ],
  arms: [
    { name: 'Barbell Curl', gif: '/assets/gifs/arms/barbell_curl.gif', info: [
      'Primary biceps builder.',
      'Keep elbows close to your torso.',
      'Avoid swinging for strict form.'
    ] },
    { name: 'Cable One Arm Triceps', gif: '/assets/gifs/arms/cable_onearm_triceps.gif', info: [
      'Isolates the triceps with one arm at a time.',
      'Keep your upper arm stationary.',
      'Extend fully for maximum contraction.'
    ] },
    { name: 'DB Ham Curl', gif: '/assets/gifs/arms/DB_HAM_CURL.gif', info: [
      'Works the biceps and forearms.',
      'Curl dumbbells with palms facing each other.',
      'Squeeze at the top.'
    ] },
    { name: 'Preacher Curl with Bent Barbell', gif: '/assets/gifs/arms/preachercurlwithbentbarbell.gif', info: [
      'Strict biceps isolation exercise.',
      'Use a preacher bench for support.',
      'Lower the bar slowly for best results.'
    ] },
    { name: 'Seated Dumbbell Triceps Extension', gif: '/assets/gifs/arms/seated-dumbbell-triceps-extension.gif', info: [
      'Targets the long head of the triceps.',
      'Keep elbows close to your head.',
      'Lower the dumbbell behind your head and extend.'
    ] },
    { name: 'Triceps Rope Pushdown', gif: '/assets/gifs/arms/trícepsropepushdown.gif', info: [
      'Great for triceps definition.',
      'Push the rope down and spread at the bottom.',
      'Keep your upper arms stationary.'
    ] },
  ],
  legs: [
    { name: 'Dumbbell Lunges', gif: '/assets/gifs/legs/dumbel_lunges.gif', info: [
      'Targets quads, glutes, and hamstrings.',
      'Keep your torso upright and step forward with control.',
      'Push back to the starting position using your heel.'
    ] },
    { name: 'Calf Raise', gif: '/assets/gifs/legs/leg_CALF_RAISE.gif', info: [
      'Strengthens the calf muscles.',
      'Rise onto your toes and squeeze at the top.',
      'Lower slowly for a full stretch.'
    ] },
    { name: 'Leg Extension', gif: '/assets/gifs/legs/leg_extension.gif', info: [
      'Isolates the quadriceps.',
      'Adjust the pad to sit above your ankles.',
      'Extend your legs fully and squeeze.'
    ] },
    { name: 'Leg Press', gif: '/assets/gifs/legs/leg-press.gif', info: [
      'Compound movement for the lower body.',
      'Keep your feet flat and push through your heels.',
      'Do not lock your knees at the top.'
    ] },
    { name: 'Seated Leg Curl', gif: '/assets/gifs/legs/seated_leg_curl.gif', info: [
      'Targets the hamstrings.',
      'Adjust the pad to sit above your ankles.',
      'Curl your legs down and squeeze.'
    ] },
    { name: 'Squats', gif: '/assets/gifs/legs/squats.gif', info: [
      'The king of lower body exercises.',
      'Keep your chest up and back straight.',
      'Go down until your thighs are parallel to the floor.'
    ] },
  ],
  abs_and_cardio: [
    { name: 'Bicycle Crunch', gif: '/assets/gifs/abs_and_cardio/bicycle_crunch.gif', info: [
      'Targets the obliques and rectus abdominis.',
      'Bring opposite elbow to knee and alternate sides.',
      'Keep your lower back pressed to the floor.'
    ] },
    { name: 'Crunch', gif: '/assets/gifs/abs_and_cardio/CRUNCH.gif', info: [
      'Classic ab exercise for rectus abdominis.',
      'Lift your shoulders off the floor using your abs.',
      'Avoid pulling on your neck.'
    ] },
    { name: 'Cycling', gif: '/assets/gifs/abs_and_cardio/cycling.gif', info: [
      'Great for cardio and leg endurance.',
      'Maintain a steady pace and good posture.',
      'Engage your core throughout.'
    ] },
    { name: 'Incline Treadmill', gif: '/assets/gifs/abs_and_cardio/incline tredmill.gif', info: [
      'Increases intensity for better fat burn.',
      'Keep your chest up and walk briskly.',
      'Do not hold onto the handles.'
    ] },
    { name: 'Leg Raise', gif: '/assets/gifs/abs_and_cardio/Leg-Raise.gif', info: [
      'Targets lower abs.',
      'Keep your legs straight and lift with control.',
      'Do not arch your lower back.'
    ] },
    { name: 'Side Abs', gif: '/assets/gifs/abs_and_cardio/sideabs.gif', info: [
      'Works the obliques.',
      'Twist your torso to the side as you crunch.',
      'Focus on the squeeze.'
    ] },
  ],
};

const SECTION_COLORS = {
  all: '#1976d2',
  back: '#ff9800', // orange
  chest: '#e53935', // red
  shoulders: '#8e24aa', // purple
  arms: '#00897b', // teal
  legs: '#6d4c41', // brown
  abs_and_cardio: '#3949ab', // blue
};

const SECTION_LABELS = [
  { key: 'all', label: 'All Exercises' },
  { key: 'back', label: 'Back' },
  { key: 'chest', label: 'Chest' },
  { key: 'shoulders', label: 'Shoulders' },
  { key: 'arms', label: 'Arms' },
  { key: 'legs', label: 'Legs' },
  { key: 'abs_and_cardio', label: 'Abs & Cardio' },
];

const SearchExercises = ({ setExercise, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');
  const [infoOpenIdx, setInfoOpenIdx] = useState(null);

  const filteredGifs = EXERCISE_GIFS[selectedSection].filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Box width="100%" maxWidth="900px" mb={10}>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' }, color: '#90caf9', mb: 4, letterSpacing: 1 }} textAlign="center">
          Awesome Exercises You Should Know
        </Typography>
      </Box>
      <Box width="100%" maxWidth="900px" mb={4}>
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '300px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
      </Box>
      <Stack direction="row" spacing={2} mb={6} justifyContent="center" width="100%" maxWidth="900px">
        {SECTION_LABELS.map((section) => (
          <Chip
            key={section.key}
            label={section.label}
            onClick={() => setSelectedSection(section.key)}
            style={{ backgroundColor: SECTION_COLORS[section.key], color: '#fff', fontWeight: 700 }}
            variant={selectedSection === section.key ? 'filled' : 'outlined'}
          />
        ))}
      </Stack>
      <Box className="exercise-grid" mt={8}>
        {filteredGifs.map((exercise, idx) => (
          <Box
            key={idx}
            sx={{
              width: 320,
              p: 3,
              border: '1px solid #eee',
              borderRadius: 2,
              background: '#181a20',
              boxShadow: 1,
              textAlign: 'center',
              position: 'relative',
              transition: 'transform 0.25s cubic-bezier(.4,2,.6,1)',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.07)',
                zIndex: 2,
              },
            }}
            onClick={() => setInfoOpenIdx(infoOpenIdx === idx ? null : idx)}
          >
            <img
              src={exercise.gif}
              alt={exercise.name}
              style={{ width: '100%', height: 240, objectFit: 'contain', marginBottom: 12, borderRadius: 8, transition: 'box-shadow 0.2s', boxShadow: infoOpenIdx === idx ? '0 0 0 4px #ff9800' : 'none' }}
            />
            <Chip
              label={exercise.section || selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)}
              style={{ backgroundColor: SECTION_COLORS[exercise.section?.toLowerCase() || selectedSection], color: '#fff', marginBottom: 10, marginTop: 4, fontSize: 16 }}
            />
            <Typography fontWeight={600} fontSize={22}>{exercise.name}</Typography>
            {infoOpenIdx === idx && (
              <Box sx={{ mt: 2, p: 2, background: '#fff3e0', borderRadius: 2, boxShadow: 2, color: '#333', fontWeight: 500, textAlign: 'left' }}>
                <Typography fontWeight={700} mb={1}>Details:</Typography>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {Array.isArray(exercise.info) ? exercise.info.map((point, i) => (
                    <li key={i} style={{ marginBottom: 4 }}>{point}</li>
                  )) : <li>{exercise.info}</li>}
                </ul>
              </Box>
            )}
          </Box>
        ))}
        {filteredGifs.length === 0 && (
          <Typography color="text.secondary" fontWeight={500} fontSize={18}>No exercises found.</Typography>
        )}
      </Box>
    </Stack>
  );
};

export default SearchExercises;