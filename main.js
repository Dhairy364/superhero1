var canvas = new fabric.Canvas(myCanvas) ;
var block_img_width = 30 ;
var block_img_height = 30 ; 
var player_x = 10 ;
var player_y = 10 ;
var player_object = " " ;
var block_img_object = " " ;

function player_update()
{
    fabric.img.fromURL("player.png" , function (img)
    {
        player_object = img ;
        player_object.scaleToWidth( 150 ) ; 
        player_object.scaleToHeight( 150 ) ;
        player_object.set(
        {
            top : player_y , left : player_x 
        }
         ) ;

        canvas.add(player_object) ;

    }
    ) ;
}
function new_img(get_img)
{
    fabric.img.fromURL(get_img , function (img)
    {
        block_img_object = img ;
        block_img_object.scaleToWidth( block_img_width ) ; 
        block_img_object.scaleToHeight( block_img_height ) ;
        block_img_object.set(
        {
            top : player_y , left : player_x 
        }
         ) ;

        canvas.add(block_img_object) ;

    }
    ) ;
}
window.addEventListener("keydown" , mykeydown) ;
function mykeydown(e)
{
    keyPressed = e.keycode ;
    console.log(keyPressed) ; 
}