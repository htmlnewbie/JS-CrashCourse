$(document).ready(function () {
	let $myButton = $(".navbar__menu__button");
	let $sidebar = $(".side__menu");
	let $closebtn = $(".closebtn");
	let $wrapper = $(".wrapper");
	let $sidebarAniTimer = 300;
	let $collapsible = $(".collapsible");
	let $openDimensions = $(".openDimensions");
	let $closeDimensions = $(".closeDemensions");
	let $dimensionsContainer = $(".dimensionsContainer");
	let $dimensions = $(".dimensions");
	let $resetInput = $(".input__reset");
	let $resetOutput = $(".reset__output");
	let $submit = $(".input__submit");
	let $outputareaText = $(".panel__area__box__form__div__span");
	let $textareaText = $(".input__text");

	$($submit).click(function () {
		$($outputareaText).addClass("panel__area__box__form__div__span__active");
		$($outputareaText).text($textareaText.val());
	});

	$($resetInput).click(function () {
		$($outputareaText).removeClass("panel__area__box__form__div__span__active");
		$($outputareaText).text("Your text will go here...");
		$($textareaText).val("");
	});

	$($dimensionsContainer).draggable({
		containment: "body",
		scroll: true,
	});

	$($resetOutput).click(function () {
		let $p1p = $("#panel1-p");
		let $p2p = $("#panel2-p");
		let $p3p = $("#panel3-p");
		let $p4p = $("#panel4-p");
		let panelParas = [p1p, p2p, p3p, p4p];
		let arrayL = panelParas.length;

		for (var i = 0; i < arrayL; i++) {
			panelParas[i].innerText = "Output:";
		}
	});

	$($openDimensions).click(function () {
		$($dimensionsContainer).css({
			display: "inline-block",
			top: 0,
			left: 0,
		});

		$($openDimensions).addClass("openDimensions__active");

		$(window)
			.resize(function () {
				$($dimensions).text(window.innerWidth + "x" + window.innerHeight);
			})
			.resize();
	});

	$($closeDimensions).click(function () {
		$($dimensionsContainer).css({
			display: "none",
		});
		$($openDimensions).removeClass("openDimensions__active");
	});

	function expandSidebar() {
		let $browserWidth = $(window).width();
		if ($browserWidth <= 750) {
			$sidebar.animate({ width: "100%" }, $sidebarAniTimer);
		} else {
			let $episodeList = $(".collapsible__container__episode__list");

			$sidebar.animate({ width: "500px" }, $sidebarAniTimer);
		}

		$("body").css({
			overflowY: "hidden",
		});
	}

	function fadeOutButton() {
		$($myButton).css({
			cursor: "default",
			color: "#323330",
			backgroundColor: "#f0db4f",
			border: "#f0db4f solid 3px",
		});

		$($myButton).animate({ opacity: "0.0" }, $sidebarAniTimer);
	}

	function fadeInButton() {
		$($myButton).css({
			display: "",
			cursor: "pointer",
			color: "#f0db4f",
			backgroundColor: "#323330",
			border: "#323330 solid 3px",
		});

		$($myButton).animate({ opacity: "1.0" });
	}

	$($myButton).click(function () {
		fadeOutButton();

		$wrapper.animate({ opacity: "0.4" }, $sidebarAniTimer);

		expandSidebar();

		$closebtn.animate({ opacity: "1.0" }, $sidebarAniTimer);

		$(this).unbind("mouseenter mouseleave");
	});

	$closebtn.click(function () {
		$($myButton).hover(
			function () {
				$($myButton).css({
					cursor: "pointer",
					color: "#323330",
					backgroundColor: "#f0db4f",
					border: "#f0db4f solid 3px",
				});
			},
			function () {
				$($myButton).css({
					cursor: "auto",
					color: "#f0db4f",
					backgroundColor: "#323330",
					border: "#323330 solid 3px",
				});
			}
		);

		fadeInButton();

		$wrapper.animate({ opacity: "1.0" });

		$sidebar.animate({ width: "0px" });
		$closebtn.animate({ opacity: "0.0" }, 100);

		$("body").css({
			overflowY: "visible",
		});
	});

	$collapsible.click(function () {
		$(this).toggleClass("collapsible__active");

		let $content = $(this).get(0).nextElementSibling;

		if ($($content).height() == 0) {
			$($content).animate(
				{
					maxHeight: "1720px",
				},
				1200
			);
		} else {
			$($content).animate(
				{
					maxHeight: "0",
				},
				300
			);
		}

		let $arrow = $(this).children("a");

		$arrow.toggleClass("collapsible__arrow__active");
	});
});
