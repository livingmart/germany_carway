// const herotexti = document.querySelector(".herotexti");
// const herotextii = document.querySelector(".herotextii");

const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");
const aboutustitle = document.querySelector(".aboutustitle");
const aboutusdesc = document.querySelector(".aboutusdesc");
const whatweoffertitle = document.querySelector(".whatweoffertitle");
const howitwork = document.querySelector(".howitwork");
const requestcartitle = document.querySelector(".requestcartitle");
const requestcardesc = document.querySelector(".requestcardesc");
const wefindyourcartitle = document.querySelector(".wefindyourcartitle");
const wefindyourcardesc = document.querySelector(".wefindyourcardesc");
const wecontactsellertitle = document.querySelector(".wecontactsellertitle");
const wecontactsellerdesc = document.querySelector(".wecontactsellerdesc");
const paymenttitle = document.querySelector(".paymenttitle");
const paymentdesc = document.querySelector(".paymentdesc");
const weshipcartitle = document.querySelector(".weshipcartitle");
const weshipcardesc = document.querySelector(".weshipcardesc");
const menuaboutus = document.querySelector(".menuaboutus");
const menuwhatweoffer = document.querySelector(".menuwhatweoffer");
const menuhowitworks = document.querySelector(".menuhowitworks");
const menuportfolio = document.querySelector(".menuportfolio");
const menurequestcar = document.querySelector(".menurequestcar");
const impressum = document.querySelector(".impressum");
const searchingtitle = document.querySelector(".searchingtitle");
const searchingdesc = document.querySelector(".searchingdesc");
const operationtitle = document.querySelector(".operationtitle");
const operationdesc = document.querySelector(".operationdesc");
const logisticstitle = document.querySelector(".logisticstitle");
const logisticssdesc = document.querySelector(".logisticssdesc");

link.forEach((el) => {
	el.addEventListener("click", () => {
		langEl.querySelector(".actv").classList.remove("actv");
		el.classList.add("actv");

		const attr = el.getAttribute("language");

		aboutustitle.textContent = data[attr].aboutustitle;
		aboutusdesc.textContent = data[attr].aboutusdesc;
		whatweoffertitle.textContent = data[attr].whatweoffertitle;
		howitwork.textContent = data[attr].howitwork;
		requestcartitle.textContent = data[attr].requestcartitle;
		requestcardesc.textContent = data[attr].requestcardesc;
		wefindyourcartitle.textContent = data[attr].wefindyourcartitle;
		wefindyourcardesc.textContent = data[attr].wefindyourcardesc;
		wecontactsellertitle.textContent = data[attr].wecontactsellertitle;
		wecontactsellerdesc.textContent = data[attr].wecontactsellerdesc;
		paymenttitle.textContent = data[attr].paymenttitle;
		paymentdesc.textContent = data[attr].paymentdesc;
		weshipcartitle.textContent = data[attr].weshipcartitle;
		weshipcardesc.textContent = data[attr].weshipcardesc;
		menuaboutus.textContent = data[attr].menuaboutus;
		menuwhatweoffer.textContent = data[attr].menuwhatweoffer;
		menuhowitworks.textContent = data[attr].menuhowitworks;
		menuportfolio.textContent = data[attr].menuportfolio;
		menurequestcar.textContent = data[attr].menurequestcar;
		impressum.textContent = data[attr].impressum;
		searchingtitle.textContent = data[attr].searchingtitle;
		searchingdesc.textContent = data[attr].searchingdesc;
		operationtitle.textContent = data[attr].operationtitle;
		operationdesc.textContent = data[attr].operationdesc;
		logisticstitle.textContent = data[attr].logisticstitle;
		logisticssdesc.textContent = data[attr].logisticssdesc;
		// herotexti.textContent = data[attr].herotexti;		
		// herotextii.textContent = data[attr].herotext1;

	});
});

var data = {
	english: {
		herotexti: "GET YOUR DREAM CAR FROM GERMANY NOW!",
		herotextii: "DREAM CAR",
		herotextiii: "FROM GERMANY NOW!",
		herotext1:
			" At Carway we are specialized in bringing your dreams to fruiton with no stress and affordable prices",
		aboutustitle: "About Us",
		aboutusdesc:
			"We are Carway one of the oldest car maintenance firm in Germany, and nown we are launching a new service where you can get your new, legacy, and modern German car. We provide all professionals who will help you get your favorite car with the most effective value of cash, o middle man, no hidden fees, no complications, no have to come to Germany and at the identical price because the German 	Market, if not better! We work as a mediation service to match between you and also the seller therefore any deal or contract is going to be eventually with the vendor directly. And particularly, we offer our service from the time we receive your request until you get the car passing together with your country taxation and every paperwork necessary to end the mission",
		whatweoffertitle: "What Do We Offer!",
		searchingtitle: "Searching",
		searchingdesc:
			"We connect with our suppliers and contacts to find the best deal on the car you need. We will then send you several options and offers to choose from",
		operationtitle: "Operation",
		operationdesc:
			"After the agreement on a car we finish all paperwork with the seller, arrange the payment, and take care of all documents with the German authorities",
		logisticstitle: "Logistic and Customs",
		logisticssdesc:
			"Making the car ready for shipment, and taking care of the taxation on the destination country to avoid any unforeseen problems",
		howitwork: "How it works",
		requestcartitle: "Request your car",
		requestcardesc:
			"Fill the car request form on our website with all necessary information about your needs and make sure all information are valid such as email, phone number etc",
		wefindyourcartitle: "We find your car",
		wefindyourcardesc:
			"We start our scouting and contact our partners to find you the best car that matches your request",
		wecontactsellertitle: "We contact the seller",
		wecontactsellerdesc:
			"We get in touch with the seller to close the deal; we will send you the contract to sign it directly with the seller",
		paymenttitle: "Payment",
		paymentdesc:
			"You will transfer the full money amount to the seller account directly; we will supervise the process thoroughly with full transparency and eventually get our commission",
		weshipcartitle: "We ship the car",
		weshipcardesc:
			"We will arrange the shipment to the nearest seaport or airport from you with the best insurance services",
		menuaboutus: "About us",
		menuwhatweoffer: "What Do We Offer!",
		menuhowitworks: "How it works",
		menuportfolio: "Portfolio",
		menurequestcar: "Request Your Car",
		impressum: "Impressum",
	},

	arabic: {
		herotexti: "احصل على سيارة أحلامك من ألمانيا الآن!",
		herotextii: "نحن متخصصون في تحقيق أحلامك دون ضغوط وبأسعار معقولة",
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
