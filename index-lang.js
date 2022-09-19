let language = {
	ar: {
		appTitle: "Car way",
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
	},
};

if (window.location.hash) {
	if (location.hash.substring(1) === "eng") {
		// remove all hash tags and reload page to default text
		window.location.href = window.location.toString().split(/\?|#/)[0];
	} else if (location.hash.substring(1) === "ar") {
		document.title = language.ar.appTitle;
		$("[data-language=aboutustitle]").text(language.ar.aboutustitle);
		$("[data-language=aboutusdesc]").text(language.ar.aboutusdesc);		
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

// Go back to top button
// let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
// 	scrollFunction();
// };

// function scrollFunction() {
// 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// 		mybutton.style.display = "block";
// 	} else {
// 		mybutton.style.display = "none";
// 	}
// }

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
// 	document.body.scrollTop = 0;
// 	document.documentElement.scrollTop = 0;
// }
