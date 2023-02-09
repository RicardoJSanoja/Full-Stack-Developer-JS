/* first of all, you most create a new plugin folder in wp-content. */

<?php
/**
*Plugin Name: phone number plugin
*/
function  phone_form_function()
{
  $content = '';
  $content .= '<h2> Let your contact!</h2>' ;
  //form
  $content .= '<form method="post" action="http://example_of_the_new_page"';
  /* with this form you are going to send the info that is below. What you have to do now is create a new page and add the URL to the "action"
  value in the form section of the code*/
  // name input
  $content .= '<label for="your_name"> Name </label>';
  $content .= '<input type="text" name="your_name" class="" placeholder="Enter your name" />';
  //number input
  $content .= '<label for="your_number"> Phone Number </label>';
  $content .= '<input type="number" name="your_number" class="" placeholder="Enter your number"/>';
  //message input
  $content .= '<label for="your_message">Message for us!</label>';
  $content .= '<textarea name="your_message" placeholder="Enter your questions and comments for us!"></textarea>';
  //submit button
  $content .= '<input type="submit" name="submit_button" value="Send your info ;)"';
  $content .= '</form>';
  returnt $content;
}

add_shortcode('phone_form', 'phone_form_function') //you are going to add this as a shortcode in wordpress, in the page they ask you for contacts

function phone_form_capture()
{
   if(isset($_POST['submit_button']))
   {
      $name = sanatize_text_field($_POST['your_name']);
      $number = sanatize_text_field($_POST['your_number']);
      $message = sanatize_textarea_field($_POST['your_message']);

      $to = "your_email@email.com"
      $subject ="Phone Numbers input"
      $mensaje =$message. ' - '.$number. ' - '. $name;
      wp_mail($to,$subject,$mensaje);
   }
}

add_action('wp_head' 'phone_form_capture')
?>
