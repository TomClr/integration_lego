$(document).ready(function() {
    $nom = $('#nom');
    $email = $('#email');
    $message = $('#message');
    $champ = $('.champ');
    $erreurRempli = $('.erreur-rempli');
    $erreurMail = $('.erreur-mail');
    $erreurChiffre = $('.erreur-chiffre');
    $envoi = $('#envoi');
    $regexMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    $regexChiffre = /^\D+$/;

    $nom.keyup(function() {
    
        if (!$nom.val().length == 0) {
            if (!$nom.val().match($regexChiffre)) {
                $(this).css({
                    borderColor: '#D11013',
                    outlineColor: '#D11013',
                    color: '#D11013'
                });
                $erreurChiffre.css('display', 'inherit');
            } else {
                $(this).css({
                    borderColor: '#52ccb5',
                    outlineColor: '#52ccb5',
                    color: '#52ccb5'
                });
                $erreurChiffre.css('display', 'none');
            }
        } else {
            $(this).css({
                borderColor: '',
                outlineColor: '',
                color: ''
            });
            $erreurChiffre.css('display', 'none');
        }
    });

    $email.keyup(function() {
        if (!$email.val().length == 0) {
            if (!$email.val().match($regexMail)) {
                $(this).css({
                    borderColor: '#D11013',
                    outlineColor: '#D11013',
                    color: '#D11013'
                });
                $erreurMail.css('display', 'inherit');
            } else {
                $(this).css({
                    borderColor: '#52ccb5',
                    outlineColor: '#52ccb5',
                    color: '#52ccb5'
                });
                $erreurMail.css('display', 'none');
            }
        } else {
            $(this).css({
                borderColor: '',
                outlineColor: '',
                color: ''
            });
            $erreurMail.css('display', 'none');
        }
            
    });

    $message.keyup(function() {
        if(!$message.val().length == 0) {
            $(this).css({
                borderColor: '#52ccb5',
                outlineColor: '#52ccb5',
                color: '#52ccb5'
            });
        } else {
            $(this).css({
                borderColor: '',
                outlineColor: '',
                color: ''
            });
        }
    });

    $champ.keyup(function() {
        if ((!$nom.val().length == 0) && (!$email.val().length == 0) && (!$message.val().length == 0)) {
            $erreurRempli.css('display', 'none');
        }
    });

    function check() {
            if ($nom.val().length == 0) {
                $erreurRempli.css('display', 'inherit');
                $nom.css({
                    borderColor: '#d11013',
                    color: '#d11013'
                });
            }
            if ((!$nom.val().match($regexChiffre)) && (!$nom.val().length == 0) ) {
                $erreurChiffre.css('display', 'inherit');
                $nom.css({
                    borderColor: '#D11013',
                    outlineColor: '#D11013',
                    color: '#D11013'
                });
            }
            if ($message.val().length == 0) {
                $erreurRempli.css('display', 'inherit');
                $message.css({
                    borderColor: '#d11013',
                    color: '#d11013'
                });
            }
            if (($email.val().length == 0) && (!$email.val().match($regexMail))) {
                /* $erreurRempli.css('display', 'inherit'); */
                $erreurMail.css('display', 'inherit');
                $email.css({
                    borderColor: '#d11013',
                    color: '#d11013'
                });
            }
    }

    $envoi.click(function(e) {
        e.preventDefault();
        check();
    });
});