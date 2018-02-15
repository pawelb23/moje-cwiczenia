function ulozenieLiterek() {

    var nazwaPoczatkowa = "Akademia 108";

    var rozdzielenie = nazwaPoczatkowa.split("");

    var sortujemyDane = rozdzielenie.sort();

    var przestawionyNapis = sortujemyDane.join("");

    console.log(przestawionyNapis);
    console.log(sortujemyDane);
}

ulozenieLiterek();