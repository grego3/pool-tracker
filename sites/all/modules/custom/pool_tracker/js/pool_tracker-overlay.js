(function ($) {
  Drupal.behaviors.filterSelectOptions = {
    attach: function (context, settings) {
     
     if ($('.page-node-add-game.overlay').length) {
       
       // start with all options removed
       $('#edit-game-winner-und').find('option').not('option[value="_none"]').remove();
       $('#edit-game-winner-und').find('option').text('Pick a Winner!');
       
       // on player 1 select change
       $('#edit-game-player-1-und').on('change', function() {
         
         // remove options from winner
         $('#edit-game-winner-und').find('option').not('option[value="_none"]').remove();
         $('#edit-game-winner-und').find('option').text('Pick a Winner!');
         
         // if neither are blank
         if( $('#edit-game-player-1-und').find(":selected").text() != '- Select a value -'){
           if( $('#edit-game-player-2-und').find(":selected").text() != '- Select a value -'){
            // Make sure the other one hasn't selected the same player
            if ( $('#edit-game-player-1-und').find(":selected").text() !== $('#edit-game-player-2-und').find(":selected").text() ) {
              $('#edit-game-winner-und').append('<option value="'+ $("#edit-game-player-1-und option:selected").val()+ '">' + $("#edit-game-player-1-und option:selected").text() + '</option>');     
              $('#edit-game-winner-und').append('<option value="'+ $("#edit-game-player-2-und option:selected").val()+ '">' + $("#edit-game-player-2-und option:selected").text() + '</option>');    
            }
           }
         }
       });
       
       
       // on player 2 select change
       $('#edit-game-player-2-und').on('change', function() {
         
         // remove options from winner
         $('#edit-game-winner-und').find('option').not('option[value="_none"]').remove();
         $('#edit-game-winner-und').find('option').text('Pick a Winner!');
         
         // if neither are blank
         if( $('#edit-game-player-1-und').find(":selected").text() != '- Select a value -'){
           if( $('#edit-game-player-2-und').find(":selected").text() != '- Select a value -'){
            // Make sure the other one hasn't selected the same player
            if ( $('#edit-game-player-1-und').find(":selected").text() !== $('#edit-game-player-2-und').find(":selected").text() ) {
              $('#edit-game-winner-und').append('<option value="'+ $("#edit-game-player-1-und option:selected").val()+ '">' + $("#edit-game-player-1-und option:selected").text() + '</option>');     
              $('#edit-game-winner-und').append('<option value="'+ $("#edit-game-player-2-und option:selected").val()+ '">' + $("#edit-game-player-2-und option:selected").text() + '</option>');    
            }
           }
         }
       });
     }
    }
  };
})(jQuery);