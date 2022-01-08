$(document).ready(function () {
    var primary1 = 'background: linear-gradient(180deg, rgba(201, 242, 255, 1) 0%, rgba(76, 201, 240, 1) 100%)';
    var primary2 = 'background: linear-gradient(180deg, rgba(159, 175, 253, 1) 0%, rgba(67, 97, 238, 1) 100%)';
    var primary3 = 'background: linear-gradient(0deg, rgba(181,23,158,1) 0%, rgba(249,169,238,1) 100%);';
    var primary4 = 'assets/img/primary4.svg';
    var secondary1 = 'assets/img/secondary1.svg';
    var secondary2 = 'assets/img/secondary2.svg';
    var optional = 'assets/img/optional.svg';

    for (let line = 0; line < 3; line++) {
        var top = Math.floor(Math.random() * 15);
        $("#canvas").append('<div class="line" id="line' + line + '" style="top: -' + top + '0px;"></div>');

        for (var i = 0; i < 25; i++) {
            for (var x = 0; x < 3; x++) {
                var blueBall1 = "<div class='ball' id='ball1' style='" + primary1 + ";animation-delay: " + i + "s; animation-duration: " + x + "1000ms;'></div>";
                var blueBall2 = "<div class='ball' id='ball2' style='" + primary1 + ";animation-delay: " + i + "s; animation-duration: " + x + "2000ms;'></div>";
                var blueBall3 = "<div class='ball' id='ball3' style='" + primary1 + ";animation-delay: " + i + "s; animation-duration: " + x + "3000ms;'></div>";
                var blueBall4 = "<div class='ball' id='ball4' style='" + primary1 + ";animation-delay: " + i + "s; animation-duration: " + x + "4000ms;'></div>";
                var blueBall5 = "<div class='ball' id='ball5' style='" + primary1 + ";animation-delay: " + i + "s; animation-duration: " + x + "5000ms;'></div>";
                var blueBall6 = "<div class='ball' id='ball6' style='" + primary1 + ";animation-delay: " + i + "s; animation-duration: " + x + "6000ms;'></div>";
                var blueBall7 = "<div class='ball' id='ball7' style='" + primary1 + ";animation-delay: " + i + "s; animation-duration: " + x + "7000ms;'></div>";
                var blueBall8 = "<div class='ball' id='ball8' style='" + primary1 + ";animation-delay: " + i + "s; animation-duration: " + x + "8000ms;'></div>";
                var blueBall9 = "<div class='ball' id='ball9' style='" + primary1 + ";animation-delay: " + i + "s; animation-duration: " + x + "9000ms;'></div>";
                var blueBall10 = "<div class='ball' id='ball10' style='" + primary1 + ";animation-delay: " + i + "s; animation-duration: " + x + "0000ms;'></div>";

                var darkBlueBall1 = "<div class='dark-ball' id='darkBall1' style='" + primary2 + ";animation-delay: " + i + "s; animation-duration: " + x + "2500ms;'></div>";
                var darkBlueBall2 = "<div class='dark-ball' id='darkBall2' style='" + primary2 + ";animation-delay: " + i + "s; animation-duration: " + x + "4500ms;'></div>";
                var darkBlueBall3 = "<div class='dark-ball' id='darkBall3' style='" + primary2 + ";animation-delay: " + i + "s; animation-duration: " + x + "6500ms;'></div>";

                var roseBall = "<div class='rose-ball' id='roseBall' style='" + primary3 + ";animation-delay: " + i + "s; animation-duration: " + x + "6500ms;'></div>";
            }
            $("#line1").append(
                blueBall1,
                blueBall2,
                blueBall3,
                blueBall4,
                blueBall5,
                blueBall6,
                blueBall7,
                blueBall8,
                blueBall9,
                blueBall10,
                darkBlueBall1,
                darkBlueBall2,
                darkBlueBall3,
                roseBall
            );
        }

    }
})