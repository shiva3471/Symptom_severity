import React, { useState } from 'react';
import "./Interface.css";
//import {Symptoms} from "./utils";
import {Symptom} from './Symptom'
export const Interface =(props) => {
    const [Symptom1, setSymptom1] = useState('');
    const [Symptom2, setSymptom2] = useState('');
    const [Symptom3, setSymptom3] = useState('');
    const [Symptom4, setSymptom4] = useState('');

   
    const handleSubmit = async (e) => {
    e.preventDefault();
    const a=Symptom.get(Symptom1);
    const b=Symptom.get(Symptom2);
    const c=Symptom.get(Symptom3);
    const d=Symptom.get(Symptom4);
    // Send the selected symptoms to the backend
    const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            s1: Symptom1,
            s2: Symptom2,
            s3: Symptom3,
            s4: Symptom4
        })
    });

    // Parse the response
    const data = await response.json();

    // Handle the prediction result
    console.log(data.prediction);
    alert("submitted successfully");
    }



return (
    <div>
        <div className="mainContainer">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <h1>Please select Symptoms</h1>
          <label id="a123" htmlFor="name">Symptom 1: </label>
            <select  className='select0' value={Symptom1} labelText="Select Symptoms" onChange={(e) => setSymptom1(e.target.value)}>
            
             <option value="nodal_skin_eruptions">nodal_skin_eruptions

             </option>
             <option value="skin_rash">skin_rash
             </option>
             <option value="itching">itching
             </option>
             <option value="shivering">shivering
             </option>
             <option value="chills">chills
             </option>
             <option value="continuous_sneezing">continuous_sneezing

             </option>
             <option value="joint_pain">joint_pain

             </option>
             <option value="stomach_pain">stomach_pain

             </option>
             <option value="acidity">acidity
            </option>
             <option value="ulcers_on_tounge">ulcers_on_tounge
             </option>
             <option value="muscle_wasting">muscle_wasting
             </option>
             <option value="vomiting">vomiting
             </option>
             <option value="burning_micturition">burning_micturition
             </option>
             <option value="spotting_urination">spotting_urination
             </option>
             <option value="fatigue">fatigue
             </option>
             <option value="weight_gain">weight_gain
             </option>
             <option value="anxitey">anxitey
             </option>
             <option value="cold_hands_and_feets">cold_hands_and_feets
             </option>
             <option value="mood_swings">mood_swings
             </option>
             <option value="weight_loss">weight_loss
             </option>
             <option value="restlessness">restlessness
             </option>
             <option value="lethargy">lethargy
             </option>
             <option value="patches_in_throat">patches_in_throat
             </option>
             <option value="irregular_sugar_level">irregular_sugar_level
             </option>
             <option value="cough">cough
             </option>
             <option value="high_fever">high_fever
             </option>
             <option value="sunken_eyes">sunken_eyes
             </option>
             <option value="breathlessness">breathlessness
             </option>
             <option value="sweating">sweating
             </option>
             <option value="dehydration">dehydration
             </option>
             <option value="indigesition">indigesition
             </option>
             <option value="headache">headache
             </option>
             <option value="yellowish_skin">yellowish_skin
             </option>
             <option value="dark_urine">dark_urine
             </option>
             <option value="nausea">nausea
             </option>
             <option value="loss_of_appetite">loss_of_appetite
             </option>
             <option value="pain_behind_the_eyes">pain_behind_the_eyes
             </option>
             <option value="back_pain">back_pain
             </option>
             <option value="constipation">constipation
             </option>
             <option value="abdominal_pain">abdominal_pain
             </option>
             <option value="diarrehoea">diarrehoea
             </option>
             <option value="mild_fever">mild_fever
             </option>
             <option value="yellow_urine">yellow_urine
             </option>
             <option value="yellowing_of_eyes">yellowing_of_eyes
             </option>
             <option value="acute_liver_failure">acute_liver_failure
             </option>
             <option value="fluid_overload">fluid_overload
             </option>
             <option value="swelling_of_stomach">swelling_of_stomach
             </option>
             <option value="malaise">malaise
             </option>
             <option value="phlegm">phlegm
             </option>
             <option value="throat_irritation">throat_irritation
             </option>
             <option value="redness_of_eyes">redness_of_eyes
             </option>
             <option value="sinus_pressure">sinus_pressure
             </option>
             <option value="runny_nose">runny_nose
             </option>
             <option value="congestion">congestion
             </option>
             <option value="chest_pain">chest_pain
             </option>
             <option value="weakness_in_limbs">weakness_in_limbs
             </option>
             <option value="fast_heart_rate">fast_heart_rate
             </option>
             <option value="bloody_stool">bloody_stool
             </option>
             <option value="irritation_in_anus">irritation_in_anus
             </option>
             <option value="neck_pain">neck_pain
             </option>
             <option value="dizziness">dizziness
             </option>
             <option value="cramps">cramps
             </option>
             <option value="bruising">bruising
             </option>
             <option value="obesity">obesity
             </option>
             <option value="swollen_legs">swollen_legs
             </option>
             <option value="brittle_nails">brittle_nails
             </option>
             <option value="knee_pain">knee_pain
             </option>
             <option value="stiff_neck">stiff_neck
             </option>
             <option value="swelling_joints">swelling_joints
             </option>
             <option value="depression">depression
             </option>
             <option value="irritability">irritability
             </option>
             <option value="belly_pain">belly_pain
             </option>
             <option value="loss_of_smell">loss_of_smell
             </option>
             <option value="unsteadiness">unsteadiness
             </option>
             <option value="internal_itching">internal_itching
             </option>
             <option value="polyuria">polyuria
             </option>
             <option value="family_history">family_history
             </option>
             <option value="blackheads">blackheads
             </option>
             <option value="scurring">scurring
             </option>
             <option value="skin_peeling">skin_peeling
             </option>
             <option value="blister">blister
             </option>
             

            </select>
            <br></br>
            <br></br>
            <label htmlFor="name">Symptom 2: </label>
            <select id="select=0" labelText="Select Symptoms" onChange={e=>setSymptom2(e.target.value)}>
            
             <option value="nodal_skin_eruptions">nodal_skin_eruptions

             </option>
             <option value="skin_rash">skin_rash
             </option>
             <option value="itching">itching
             </option>
             <option value="shivering">shivering
             </option>
             <option value="chills">chills
             </option>
             <option value="continuous_sneezing">continuous_sneezing

             </option>
             <option value="joint_pain">joint_pain

             </option>
             <option value="stomach_pain">stomach_pain

             </option>
             <option value="acidity">acidity
            </option>
             <option value="ulcers_on_tounge">ulcers_on_tounge
             </option>
             <option value="muscle_wasting">muscle_wasting
             </option>
             <option value="vomiting">vomiting
             </option>
             <option value="burning_micturition">burning_micturition
             </option>
             <option value="spotting_urination">spotting_urination
             </option>
             <option value="fatigue">fatigue
             </option>
             <option value="weight_gain">weight_gain
             </option>
             <option value="anxitey">anxitey
             </option>
             <option value="cold_hands_and_feets">cold_hands_and_feets
             </option>
             <option value="mood_swings">mood_swings
             </option>
             <option value="weight_loss">weight_loss
             </option>
             <option value="restlessness">restlessness
             </option>
             <option value="lethargy">lethargy
             </option>
             <option value="patches_in_throat">patches_in_throat
             </option>
             <option value="irregular_sugar_level">irregular_sugar_level
             </option>
             <option value="cough">cough
             </option>
             <option value="high_fever">high_fever
             </option>
             <option value="sunken_eyes">sunken_eyes
             </option>
             <option value="breathlessness">breathlessness
             </option>
             <option value="sweating">sweating
             </option>
             <option value="dehydration">dehydration
             </option>
             <option value="indigesition">indigesition
             </option>
             <option value="headache">headache
             </option>
             <option value="yellowish_skin">yellowish_skin
             </option>
             <option value="dark_urine">dark_urine
             </option>
             <option value="nausea">nausea
             </option>
             <option value="loss_of_appetite">loss_of_appetite
             </option>
             <option value="pain_behind_the_eyes">pain_behind_the_eyes
             </option>
             <option value="back_pain">back_pain
             </option>
             <option value="constipation">constipation
             </option>
             <option value="abdominal_pain">abdominal_pain
             </option>
             <option value="diarrehoea">diarrehoea
             </option>
             <option value="mild_fever">mild_fever
             </option>
             <option value="yellow_urine">yellow_urine
             </option>
             <option value="yellowing_of_eyes">yellowing_of_eyes
             </option>
             <option value="acute_liver_failure">acute_liver_failure
             </option>
             <option value="fluid_overload">fluid_overload
             </option>
             <option value="swelling_of_stomach">swelling_of_stomach
             </option>
             <option value="malaise">malaise
             </option>
             <option value="phlegm">phlegm
             </option>
             <option value="throat_irritation">throat_irritation
             </option>
             <option value="redness_of_eyes">redness_of_eyes
             </option>
             <option value="sinus_pressure">sinus_pressure
             </option>
             <option value="runny_nose">runny_nose
             </option>
             <option value="congestion">congestion
             </option>
             <option value="chest_pain">chest_pain
             </option>
             <option value="weakness_in_limbs">weakness_in_limbs
             </option>
             <option value="fast_heart_rate">fast_heart_rate
             </option>
             <option value="bloody_stool">bloody_stool
             </option>
             <option value="irritation_in_anus">irritation_in_anus
             </option>
             <option value="neck_pain">neck_pain
             </option>
             <option value="dizziness">dizziness
             </option>
             <option value="cramps">cramps
             </option>
             <option value="bruising">bruising
             </option>
             <option value="obesity">obesity
             </option>
             <option value="swollen_legs">swollen_legs
             </option>
             <option value="brittle_nails">brittle_nails
             </option>
             <option value="knee_pain">knee_pain
             </option>
             <option value="stiff_neck">stiff_neck
             </option>
             <option value="swelling_joints">swelling_joints
             </option>
             <option value="depression">depression
             </option>
             <option value="irritability">irritability
             </option>
             <option value="belly_pain">belly_pain
             </option>
             <option value="loss_of_smell">loss_of_smell
             </option>
             <option value="unsteadiness">unsteadiness
             </option>
             <option value="internal_itching">internal_itching
             </option>
             <option value="polyuria">polyuria
             </option>
             <option value="family_history">family_history
             </option>
             <option value="blackheads">blackheads
             </option>
             <option value="scurring">scurring
             </option>
             <option value="skin_peeling">skin_peeling
             </option>
             <option value="blister">blister
             </option>
             </select>
             <br></br>
            <br></br>
             <label htmlFor="name">Symptom 3: </label>
            <select id="select=0" labelText="Select Symptoms" onChange={e=>setSymptom3(e.target.value)}>
            
             <option value="nodal_skin_eruptions">nodal_skin_eruptions

             </option>
             <option value="skin_rash">skin_rash
             </option>
             <option value="itching">itching
             </option>
             <option value="shivering">shivering
             </option>
             <option value="chills">chills
             </option>
             <option value="continuous_sneezing">continuous_sneezing

             </option>
             <option value="joint_pain">joint_pain

             </option>
             <option value="stomach_pain">stomach_pain

             </option>
             <option value="acidity">acidity
            </option>
             <option value="ulcers_on_tounge">ulcers_on_tounge
             </option>
             <option value="muscle_wasting">muscle_wasting
             </option>
             <option value="vomiting">vomiting
             </option>
             <option value="burning_micturition">burning_micturition
             </option>
             <option value="spotting_urination">spotting_urination
             </option>
             <option value="fatigue">fatigue
             </option>
             <option value="weight_gain">weight_gain
             </option>
             <option value="anxitey">anxitey
             </option>
             <option value="cold_hands_and_feets">cold_hands_and_feets
             </option>
             <option value="mood_swings">mood_swings
             </option>
             <option value="weight_loss">weight_loss
             </option>
             <option value="restlessness">restlessness
             </option>
             <option value="lethargy">lethargy
             </option>
             <option value="patches_in_throat">patches_in_throat
             </option>
             <option value="irregular_sugar_level">irregular_sugar_level
             </option>
             <option value="cough">cough
             </option>
             <option value="high_fever">high_fever
             </option>
             <option value="sunken_eyes">sunken_eyes
             </option>
             <option value="breathlessness">breathlessness
             </option>
             <option value="sweating">sweating
             </option>
             <option value="dehydration">dehydration
             </option>
             <option value="indigesition">indigesition
             </option>
             <option value="headache">headache
             </option>
             <option value="yellowish_skin">yellowish_skin
             </option>
             <option value="dark_urine">dark_urine
             </option>
             <option value="nausea">nausea
             </option>
             <option value="loss_of_appetite">loss_of_appetite
             </option>
             <option value="pain_behind_the_eyes">pain_behind_the_eyes
             </option>
             <option value="back_pain">back_pain
             </option>
             <option value="constipation">constipation
             </option>
             <option value="abdominal_pain">abdominal_pain
             </option>
             <option value="diarrehoea">diarrehoea
             </option>
             <option value="mild_fever">mild_fever
             </option>
             <option value="yellow_urine">yellow_urine
             </option>
             <option value="yellowing_of_eyes">yellowing_of_eyes
             </option>
             <option value="acute_liver_failure">acute_liver_failure
             </option>
             <option value="fluid_overload">fluid_overload
             </option>
             <option value="swelling_of_stomach">swelling_of_stomach
             </option>
             <option value="malaise">malaise
             </option>
             <option value="phlegm">phlegm
             </option>
             <option value="throat_irritation">throat_irritation
             </option>
             <option value="redness_of_eyes">redness_of_eyes
             </option>
             <option value="sinus_pressure">sinus_pressure
             </option>
             <option value="runny_nose">runny_nose
             </option>
             <option value="congestion">congestion
             </option>
             <option value="chest_pain">chest_pain
             </option>
             <option value="weakness_in_limbs">weakness_in_limbs
             </option>
             <option value="fast_heart_rate">fast_heart_rate
             </option>
             <option value="bloody_stool">bloody_stool
             </option>
             <option value="irritation_in_anus">irritation_in_anus
             </option>
             <option value="neck_pain">neck_pain
             </option>
             <option value="dizziness">dizziness
             </option>
             <option value="cramps">cramps
             </option>
             <option value="bruising">bruising
             </option>
             <option value="obesity">obesity
             </option>
             <option value="swollen_legs">swollen_legs
             </option>
             <option value="brittle_nails">brittle_nails
             </option>
             <option value="knee_pain">knee_pain
             </option>
             <option value="stiff_neck">stiff_neck
             </option>
             <option value="swelling_joints">swelling_joints
             </option>
             <option value="depression">depression
             </option>
             <option value="irritability">irritability
             </option>
             <option value="belly_pain">belly_pain
             </option>
             <option value="loss_of_smell">loss_of_smell
             </option>
             <option value="unsteadiness">unsteadiness
             </option>
             <option value="internal_itching">internal_itching
             </option>
             <option value="polyuria">polyuria
             </option>
             <option value="family_history">family_history
             </option>
             <option value="blackheads">blackheads
             </option>
             <option value="scurring">scurring
             </option>
             <option value="skin_peeling">skin_peeling
             </option>
             <option value="blister">blister
             </option>
             </select>
             <br></br>
            <br></br>
             <label htmlFor="name">Symptom 4: </label>
            <select className='form-control select'labelText="Select Symptoms" onChange={e=>setSymptom4(e.target.value)}>
            
             <option value="nodal_skin_eruptions">nodal_skin_eruptions

             </option>
             <option value="skin_rash">skin_rash
             </option>
             <option value="itching">itching
             </option>
             <option value="shivering">shivering
             </option>
             <option value="chills">chills
             </option>
             <option value="continuous_sneezing">continuous_sneezing

             </option>
             <option value="joint_pain">joint_pain

             </option>
             <option value="stomach_pain">stomach_pain

             </option>
             <option value="acidity">acidity
            </option>
             <option value="ulcers_on_tounge">ulcers_on_tounge
             </option>
             <option value="muscle_wasting">muscle_wasting
             </option>
             <option value="vomiting">vomiting
             </option>
             <option value="burning_micturition">burning_micturition
             </option>
             <option value="spotting_urination">spotting_urination
             </option>
             <option value="fatigue">fatigue
             </option>
             <option value="weight_gain">weight_gain
             </option>
             <option value="anxitey">anxitey
             </option>
             <option value="cold_hands_and_feets">cold_hands_and_feets
             </option>
             <option value="mood_swings">mood_swings
             </option>
             <option value="weight_loss">weight_loss
             </option>
             <option value="restlessness">restlessness
             </option>
             <option value="lethargy">lethargy
             </option>
             <option value="patches_in_throat">patches_in_throat
             </option>
             <option value="irregular_sugar_level">irregular_sugar_level
             </option>
             <option value="cough">cough
             </option>
             <option value="high_fever">high_fever
             </option>
             <option value="sunken_eyes">sunken_eyes
             </option>
             <option value="breathlessness">breathlessness
             </option>
             <option value="sweating">sweating
             </option>
             <option value="dehydration">dehydration
             </option>
             <option value="indigesition">indigesition
             </option>
             <option value="headache">headache
             </option>
             <option value="yellowish_skin">yellowish_skin
             </option>
             <option value="dark_urine">dark_urine
             </option>
             <option value="nausea">nausea
             </option>
             <option value="loss_of_appetite">loss_of_appetite
             </option>
             <option value="pain_behind_the_eyes">pain_behind_the_eyes
             </option>
             <option value="back_pain">back_pain
             </option>
             <option value="constipation">constipation
             </option>
             <option value="abdominal_pain">abdominal_pain
             </option>
             <option value="diarrehoea">diarrehoea
             </option>
             <option value="mild_fever">mild_fever
             </option>
             <option value="yellow_urine">yellow_urine
             </option>
             <option value="yellowing_of_eyes">yellowing_of_eyes
             </option>
             <option value="acute_liver_failure">acute_liver_failure
             </option>
             <option value="fluid_overload">fluid_overload
             </option>
             <option value="swelling_of_stomach">swelling_of_stomach
             </option>
             <option value="malaise">malaise
             </option>
             <option value="phlegm">phlegm
             </option>
             <option value="throat_irritation">throat_irritation
             </option>
             <option value="redness_of_eyes">redness_of_eyes
             </option>
             <option value="sinus_pressure">sinus_pressure
             </option>
             <option value="runny_nose">runny_nose
             </option>
             <option value="congestion">congestion
             </option>
             <option value="chest_pain">chest_pain
             </option>
             <option value="weakness_in_limbs">weakness_in_limbs
             </option>
             <option value="fast_heart_rate">fast_heart_rate
             </option>
             <option value="bloody_stool">bloody_stool
             </option>
             <option value="irritation_in_anus">irritation_in_anus
             </option>
             <option value="neck_pain">neck_pain
             </option>
             <option value="dizziness">dizziness
             </option>
             <option value="cramps">cramps
             </option>
             <option value="bruising">bruising
             </option>
             <option value="obesity">obesity
             </option>
             <option value="swollen_legs">swollen_legs
             </option>
             <option value="brittle_nails">brittle_nails
             </option>
             <option value="knee_pain">knee_pain
             </option>
             <option value="stiff_neck">stiff_neck
             </option>
             <option value="swelling_joints">swelling_joints
             </option>
             <option value="depression">depression
             </option>
             <option value="irritability">irritability
             </option>
             <option value="belly_pain">belly_pain
             </option>
             <option value="loss_of_smell">loss_of_smell
             </option>
             <option value="unsteadiness">unsteadiness
             </option>
             <option value="internal_itching">internal_itching
             </option>
             <option value="polyuria">polyuria
             </option>
             <option value="family_history">family_history
             </option>
             <option value="blackheads">blackheads
             </option>
             <option value="scurring">scurring
             </option>
             <option value="skin_peeling">skin_peeling
             </option>
             <option value="blister">blister
             </option>
             </select>
             <br></br>
             <br></br>
             <br></br>
             <button  type="submit" onclick="func()">submit</button>
             
          </div>
        </form>
        </div>
        {prediction !== null && (
                <div className="predictionContainer">
                    <h2>Prediction:</h2>
                    <p>{prediction}</p>
                </div>
            )}
    </div>
  );
}
