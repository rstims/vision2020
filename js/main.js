var Main = function(){
	var other = document.getElementById('other'),
    dis = document.querySelector('.disable'),
    form = document.getElementById('pledge-form');
    other.addEventListener('focus', function(e){
   		dis.style.display = 'block';
    });
    other.addEventListener('blur', function(e){
   		if(this.value == ''){
   			dis.style.display = 'none';
   		}
    });

    form.addEventListener('invalid',
        function(event) {
            event.detail.forEach(function(badEl) {
                console.log(badEl);
            });
         }
     );

    form.addEventListener('submitted',
        function(event) {
            if (event.detail.status < 299) {
                var popup = document.querySelector('.popup');
                popup.querySelector('.popup__content').innerHTML = event.detail.responseText;
                popup.style.display = 'block';
                setTimeout(function(){
                	popup.style.display = 'none';
                }, 1000);
            }
        }
    );

    form.addEventListener('submitting',
        function(event) {
            var formData = event.detail.formData;
           console.log(formData);
        }
    );
}

document.addEventListener('DOMContentLoaded', Main);