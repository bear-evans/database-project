// ====================================================
// Character Sheet Interface
// ----------------------------------------------------
// Handles display and storage of character data
// ====================================================
const sheet = (function () {
  // sets up event handlers on page load

  function getData() {
    const characterData = {
      character_Name: $('#character-name').val().trim(),
      character_gender: $('#character-gender').val().trim(),
      character_race: $('#character-race').val().trim(),
      character_class: $('#character-class').val().trim(),
      character_level: $('#character-level').val().trim(),
      character_alignment: $('#character-alignment').val().trim(),
      Size: $('#Size').val().trim(),
      Type: $('#Type').val().trim(),
      character_hit_die_text: $('#character-hit-die-text').val().trim(),
      character_hit_points_text: $('#character-hit-points-text').val().trim(),
      character_initiative_text: $('#character-initiative-text').val().trim(),
      character_space_text: $('#character-space-text').val().trim(),
      character_reach_text: $('#character-reach-text').val().trim(),
      character_armor_class_text: $('#character-armor-class-text').val().trim(),
      character_attack_text: $('#character-attack-text').val().trim(),
      character_full_attack_text: $('#character-full-attack-text').val().trim(),
      character_special_attacks_text: $('#character-special-attacks-text')
        .val()
        .trim(),
      character_special_qualities_text: $('#character-special-qualities-text')
        .val()
        .trim(),
      character_fortitude_save_text: $('#character-fortitude-save-text')
        .val()
        .trim(),
      character_reflex_save_text: $('#character-reflex-save-text').val().trim(),
      character_will_save_text: $('#character-will-save-text').val().trim(),
      character_strength_text: $('#character-strength-text').val().trim(),
      character_dexterity_text: $('#character-dexterity-text').val().trim(),
      character_constitution_text: $('#character-constitution-text')
        .val()
        .trim(),
      character_intelligence_text: $('#character-intelligence-text')
        .val()
        .trim(),
      character_wisdom_text: $('#character-wisdom-text').val().trim(),
      character_charisma_text: $('#character-charisma-text').val().trim(),
      character_skills_text: $('#character-skills-text').val().trim(),
      character_feats_text: $('#character-feats-text').val().trim(),
      character_equipment_text: $('#character-equipment-text').val().trim(),
      character_notes_text: $('#character-notes-text').val().trim(),
    };
    return characterData;
  }

  function showData(char){

    
        $('#character-name').val(char.character_name);
        $('#character-gender').val(char.gender);
        $('#character-race').val(char.race);
        $('#character-class').val(char.class);
        $('#character-level').val(char.level);
        $('#character-alignment').val(char.alignment);
        $('#Size').val(char.size);
        $('#Type').val(char.type);
        $('#character-hit-die-text').val(char.hitDie);
        $('#character-hit-points-text').val(char.hp);
        $('#character-initiative-text').val(char.initiative);
        $('#character-space-text').val(char.space);
        $('#character-reach-text').val(char.reach);
        $('#character-armor-class-text').val(char.armorClass);
        $('#character-attack-text').val(char.attacks);
        $('#character-full-attack-text').val(char.fullattack);
        $('#character-special-attacks-text')
          .val(char.specialattack);
        $('#character-special-qualities-text')
          .val(char.specialqual);
        $('#character-fortitude-save-text')
          .val(char.fort);
        $('#character-reflex-save-text').val(char.reflex);
         $('#character-will-save-text').val(char.will);
        $('#character-strength-text').val(char.str);
        $('#character-dexterity-text').val(char.dex);
        $('#character-constitution-text')
          .val(char.con);
        $('#character-intelligence-text')
          .val(char.int);
        $('#character-wisdom-text').val(char.wis);
        $('#character-charisma-text').val(char.cha);
        $('#character-skills-text').val(char.skills);
        $('#character-feats-text').val(char.feats);
        $('#character-equipment-text').val(char.equipment);
        $('#character-notes-text').val(char.notes);
      };
  })

  async function displayCharacter() {
    const ID = $(this).data("id");

    const response = await fetch(`/api/characters/` + ID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const characterData = response.json(); 
      
      showData(characterData);
  }



  async function createNewCharacter () {

    if (character_Name) {
        const response = await fetch(`/api/characters/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

  }

  async function updateCharacter () {
      const characterData = getData();

    const response = await fetch(`/api/characters/:id`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

      

      

//       if (response.ok) {
//         document.location.replace('/charactertab');
//       } else {
//         alert('Failed to create character');
//       }
//     }
//   }
  function init() {
    $(".character-entry").on('click', displayCharacter);
  }

  return {
    init: init,
  };
})();


$(document).ready(function () {
  sheet.init();
});
