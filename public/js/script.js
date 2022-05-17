$(function() {
    const token=$('meta[name="csrf-token"]').attr('content');
    const ajax=new Ajax(token);

    let apiVegpont="/tesztek";     
    const TesztTomb=[];
    ajax.getAjax(apiVegpont, TesztTomb, tesztLista);

    function tesztLista(tesztek) {
        const szuloElem = $(".szulo");
        const sablonElem = $(".gyerek");
        szuloElem.empty();
        sablonElem.show();
        tesztek.forEach(function(elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new TesztKerdes(node, elem);

        });
        sablonElem.hide();
    }
})
