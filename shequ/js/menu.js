// $(function () {
// 	var total = 0.0;
// 	$('.add').click(function () {
// 		$this = $(this);
// 		$next = $(this).next();
// 		$next.next().show();
// 		if(!$next.text()) {
// 			$next.text('1');
// 		}else {
// 			var num = $next.text();
// 			$next.text(++num + '');
// 		}
// 		var price = parseFloat($(this).parents('.media').find('.price').text().substring(1));
// 		total += price;
// 		$('.bill').text('￥' + total);
// 		$('.nothing').hide();
// 		$('.bill').show();
// 	});
// 	$('.reduce').click(function () {
// 		$this = $(this);
// 		$prev = $this.prev();
// 		if($prev.text() > 1) {
// 			var num = $prev.text();
// 			$prev.text(--num + '');
// 		}else {
// 			$prev.text('');
// 			$this.hide();
// 		}
// 		var price = parseFloat($(this).parents('.media').find('.price').text().substring(1));
// 		total -= price;
// 		$('.bill').text('￥' + total);
// 		if(total == 0) {
// 			$('.nothing').show();
// 			$('.bill').hide();
// 		}
// 	});

// });
function init() {
	var total = 0.0;
	$('.add').click(function () {
		$this = $(this);
		$next = $(this).next();
		$next.next().show();
		if(!$next.text()) {
			$next.text('1');
		}else {
			var num = $next.text();
			$next.text(++num + '');
		}
		var price = parseFloat($(this).parents('.media').find('.price').text().substring(1));
		total += price;
		$('.bill').text('￥' + total);
		$('.nothing').hide();
		$('.bill').show();
	});
	$('.reduce').click(function () {
		$this = $(this);
		$prev = $this.prev();
		if($prev.text() > 1) {
			var num = $prev.text();
			$prev.text(--num + '');
		}else {
			$prev.text('');
			$this.hide();
		}
		var price = parseFloat($(this).parents('.media').find('.price').text().substring(1));
		total -= price;
		$('.bill').text('￥' + total);
		if(total == 0) {
			$('.nothing').show();
			$('.bill').hide();
		}
	});

}