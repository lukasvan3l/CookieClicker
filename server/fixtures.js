if(Specials.find().count() === 0) {

	var specials = [
		{ component: 'Cursor', title : 'Cursor', description : 'Clicks for you every 10 seconds', clicks : 15},
		{ component: 'Grandma', title : 'Grandma', description : 'Bakes a cookie every now and then', clicks : 100}
	];

	for( var i = 0; i< specials.length; i++) {

		var special = specials[i];
		Specials.insert(special);
	}
}
