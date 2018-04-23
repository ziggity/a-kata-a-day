 $(document).ready(function(e) {
        $('.faux-table').each(function() {
            if($('.airplane-name').text() == 'Boeing 737-700' )
            {
                $('.premium').remove();
            }
			if($('.airplane-name').text() == 'Bombardier q400' )
			{
				$('.premium').remove();
				$('.firstclass').remove();
			}
        });
    });
