$( ".item-celebrate" ).click(function() {
  $( ".text-joselin",".text-consertion",".text-adispitos",".text-veniam",".text-gyterty" ).hide();
  $( ".text-celebrate" ).show( "fade", 2000 );
});

$( ".item-joselin" ).click(function() {
  $( ".text-celebrate",".text-consertion",".text-adispitos",".text-veniam",".text-gyterty" ).hide();
  $( ".text-joselin" ).show( "fade", 2000 );
});

$( ".item-consertion" ).click(function() {
  $( ".text-celebrate",".text-joselin",".text-adispitos",".text-veniam",".text-gyterty" ).hide();
  $( ".text-consertion" ).show( "fade", 2000 );
});  

$( ".item-adispitos" ).click(function() {
  $( ".text-celebrate",".text-joselin",".text-consertion",".text-veniam",".text-gyterty" ).hide();
  $( ".text-adispitos" ).show( "fade", 2000 );
});  

$( ".item-veniam" ).click(function() {
  $( ".text-celebrate",".text-joselin",".text-consertion",".text-adispitos",".text-gyterty" ).hide();
  $( ".text-veniam" ).show( "fade", 2000 );
});  

$( ".item-gyterty" ).click(function() {
  $( ".text-celebrate",".text-joselin",".text-consertion",".text-adispitos",".text-veniam" ).hide();
  $( ".text-gyterty" ).show( "fade", 2000 );
}); 