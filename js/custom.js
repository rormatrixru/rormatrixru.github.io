$(document).on('change', 'input', function(){
                var count = 0;
                var res = "nil";
                $('input:checked').each(function(i){
                    count = parseInt(count,10);
                    count = count + parseInt(this.value,10);
                });
                if (count <= 25) {
                    res = "слабенько… очень слабенько… зато сколько интересного впереди!";
                } else if (count > 25 && count <= 52) {
                    res = "ты уже кое-что знаешь и можешь. Начальная база есть, но еще многое предстоит узнать";
                } else if (count > 52 && count <= 78) {
                    res = "ты обладаешь хорошими знаниями. не все идеально, но уже есть что показать и чем похвалиться. не останавливайся, и будешь мега-крут!";
                } else if (count > 78 && count <= 102) {
                    res = "ты крут. без сомнений. это успех.";
                } else {
                    res = "что-то пошло не так :(";
                }
                $('#result').html('<h3>'+count+'</h3>'+'<p>'+res+'</p>');
            });
