var language = {
	ar: {
		getyour: "احصل على سيارة أحلامك من ألمانيا الآن!",
		hero: "في كارواي ، نحن متخصصون في تحقيق أحلامك دون ضغوط وبأسعار معقولة",
		aboutustitle: "من نحن",
		aboutusdesc:
			"نحن كارواى اقدم شركه صيانه سيارات فى المانيا ونحنن بصدد انشاء خدمه جديده لشراء افخم و احدث السيارات الالمانيه من خلال متخصصين ونحن بدورنا سنعمل على ايجاد السيارة لك في السوق الألماني وبأفضل سعر يمكنك الحصول عليه, بدون وسيط, بدون بنود دفع مخفية وبدون تعقيدات البيروقراطية الألمانية وطبعا بدون الحاجة للقدوم إلى ألمانيا ( إلا لو كنت تريد حقا ان تشرفنا بزيارتك ) وطبعا بنفس أسعار السوق الألماني إن لم تكن أفضل! نحن نعمل كخدمة وساطة للتوفيق بينك وبين البائع ، وبالتالي فإن أي صفقة أو عقد سوف يكون في نهاية المطاف مع البائع مباشرة. بالإضافة لكل ذلك, سنقوم بمرافقتك من حين إستلام طلبك للسيارة وحتى إستلامك للسيارة في بلدك , مرورا بالخدمات الجمركية وجميع المعاملات الضرورية لأيصال الخدمة الأفضل لك",
		whatweoffertitle: "الخدمات",
		searchingtitle: "البحث",
		searchingdesc:
			"نقوم بالتواصل مع شبكة معارفنا من تجار وشركات لايجاد العرض الافضل والسعر الانسب للسيارة التي تريدهاوبعدها نرسل لك قائمة بعدة خيارات لتمكنك من الاختيار الانسب لك من بينها",
		operationtitle: "المعالجه",
		operationdesc:
			"بعد اختيارك لسيارة معينة سنقوم بإنهاء جميع المعاملات مع البائع بالنيابة عنك, ترتيب الدفع والاهتمام بجميع الملفات والمعاملات مع السلطات الألمانية المختصة.",
		logisticstitle: "الشحن و الجمارك",
		logisticssdesc:
			"سنقوم بتجهيز السيارة الخاصة بك للشحن مع الاخذ بعين الاعتبار أسعار الشحن والخدمات الجمركية في بلدك لتجنب اي مفاجئات غير سارة في لحظة وصول السيارة",
		howitwork: "كيف نعمل ؟",
		requestcartitle: "أطلب السيارة",
		requestcardesc:
			"إملأ النموذج في أسفل الصفحة بكل المعلومات والتفاصيل الضرورية لإعطائك الخدمة على أكمل وجه وتأكد من تزويدنا بمعلومات إتصال صحيحة بدون أخطاء.",
		wefindyourcartitle: "إيجاد السيارة",
		wefindyourcardesc:
			"سنبدأ بعملية الاستطلاع والبحث مع شبكة شركائنا لايجاد السيارة التي تناسبك.",
		wecontactsellertitle: "التواصل مع البائع",
		wecontactsellerdesc:
			"سنتواصل مع البائع لإتمام الصفقة ، وسنرسل لك بعدها مباشرة عقد الشراء للتوقيع عليه مباشرة مع البائع",
		paymenttitle: "الدفع",
		paymentdesc:
			"بدورك تقوم بتحويل مبلغ السيارة بالكامل لحساب البائع البنكي, سنحن سنشرف على العملية بعناية مطلقة وشفافية كاملة وسنحصل على عمولتنا في نهاية الأمر.",
		weshipcartitle: "الشحن",
		weshipcardesc:
			"سنقوم بترتيب إجرائات شحن السيارة للميناء البحري او المطار الأقرب إلك مع ضمان أفضل خدمات تأمين على السيارة خلال الرحلة.",
		menuaboutus: "معلومات عنا",
		menuwhatweoffer: "ماذا نقدم!",
		menuhowitworks: "كيف تعمل؟",
		menuportfolio: "مَلَفّ",
		menurequestcar: "اطلب سيارتك",
		portfoliotitle: "مَلَفّ",
		requestyourcar: "اطلب سيارتك",
		headoffice: "المكتب الرئيسي",
		emailaddress: "عنوان البريد الالكترونى",
		fullname: "الاسم",
		phone: "الهاتف",
		choosecountry: "الدوله",
		choosecarbrand: "نوع السياره",
		choosefuel: "الوقود",
		choosegear: "نوع الجير",
		chooseyear: "سنه الصنع",
		choosecartype: "شكل السياره",
		copyright: "حقوق الطبع والنشر @ Carway، 2022 جميع الحقوق محفوظة.",
	},
};

if (window.location.hash) {
	if (location.hash.substring(1) === "eng") {
		// remove all hash tags and reload page to default text
		window.location.href = window.location.toString().split(/\?|#/)[0];
	} else if (location.hash.substring(1) === "ar") {
		// hero section
		$("[data-language=getyour]").text(language.ar.getyour);
		$("[data-language=hero]").text(language.ar.hero);
		$("[data-language=aboutustitle]").text(language.ar.aboutustitle);
		$("[data-language=aboutusdesc]").text(language.ar.aboutusdesc);
		// offer section
		$("[data-language=whatweoffertitle]").text(language.ar.whatweoffertitle);
		$("[data-language=searchingtitle]").text(language.ar.searchingtitle);
		$("[data-language=searchingdesc]").text(language.ar.searchingdesc);
		$("[data-language=operationtitle]").text(language.ar.operationtitle);
		$("[data-language=operationdesc]").text(language.ar.operationdesc);
		$("[data-language=logisticstitle]").text(language.ar.logisticstitle);
		$("[data-language=logisticssdesc]").text(language.ar.logisticssdesc);
		// how it work section
		$("[data-language=howitwork]").text(language.ar.howitwork);
		$("[data-language=requestcartitle]").text(language.ar.requestcartitle);
		$("[data-language=requestcardesc]").text(language.ar.requestcardesc);
		$("[data-language=wefindyourcartitle]").text(
			language.ar.wefindyourcartitle
		);
		$("[data-language=wefindyourcardesc]").text(language.ar.wefindyourcardesc);
		$("[data-language=wecontactsellertitle]").text(
			language.ar.wecontactsellertitle
		);
		$("[data-language=wecontactsellerdesc]").text(
			language.ar.wecontactsellerdesc
		);
		$("[data-language=paymenttitle]").text(language.ar.paymenttitle);
		$("[data-language=paymentdesc]").text(language.ar.paymentdesc);
		$("[data-language=weshipcartitle]").text(language.ar.weshipcartitle);
		$("[data-language=weshipcardesc]").text(language.ar.weshipcardesc);
		// portfolio section
		$("[data-language=portfoliotitle]").text(language.ar.portfoliotitle);
		// request your car section
		$("[data-language=requestyourcar]").text(language.ar.requestyourcar);
		$("[data-language=headoffice]").text(language.ar.headoffice);
		$("[data-language=emailaddress]").text(language.ar.emailaddress);
		$("[data-language=email]").text(language.ar.email);
		$("[data-language=choosecountry]").text(language.ar.choosecountry);
		$("[data-language=choosecarbrand]").text(language.ar.choosecarbrand);
		$("[data-language=choosefuel]").text(language.ar.choosefuel);
		$("[data-language=choosegear]").text(language.ar.choosegear);
		$("[data-language=chooseyear]").text(language.ar.chooseyear);
		$("[data-language=choosecartype]").text(language.ar.choosecartype);
		// copyright
		$("[data-language=copyright]").text(language.ar.copyright);

		// nav menu section
		$("[data-language=menuaboutus]").text(language.ar.menuaboutus);
		$("[data-language=menuwhatweoffer]").text(language.ar.menuwhatweoffer);
		$("[data-language=menuhowitworks]").text(language.ar.menuhowitworks);
		$("[data-language=menuportfolio]").text(language.ar.menuportfolio);
		$("[data-language=menurequestcar]").text(language.ar.menurequestcar);
	}
}

$("[data-callLang]").on("click", function () {
	if ($(this).attr("data-callLang") === "eng") {
		window.location.href = window.location.toString().split(/\?|#/)[0];
		return false;
	}

	window.location.hash = $(this).attr("data-callLang");
	location.reload(true);
});

// nav menu toggle
$(".menu-btn").click(function () {
	$(this).toggleClass("fas fa-times");
	$(".menunav").toggleClass("active");
});
