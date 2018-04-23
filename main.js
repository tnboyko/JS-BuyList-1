$(document).ready(function () {
    var LIST = $('.list');
    var LIST_LAST = $('.right-column.last');
    var LIST_BOUGHT = $('.right-column.bought');

    var ANOTHER_ONE_ITEM = $('#item').html();
    var ANOTHER_ONE_LAST = $('#last').html();
    var ANOTHER_ONE_BOUGHT = $('#bought').html();

    addItem('Pomydory');
    addItem('Kartoplya');
    addItem('Moloko');
    addItem('Ogirok');

    function addItem(title) {
        var node = $(ANOTHER_ONE_ITEM);

        node.find('.name').text(title);
        node.find('.delete-button').click(function() {
            node.remove();
            node_last.remove();
            node_bought.remove();
        });
        node.find('.bought-button').click(function() {
            var but_name = node.find('.bought-button').text();
            if(but_name === "Купленo") {
                node.find('.name').css("text-decoration", "line-through");
                node.find('.minus').css("visibility", "hidden");
                node.find('.plus').css("visibility", "hidden");
                node.find('.delete-button').hide();
                node_last.hide();

                node_bought.show();
                node.find('.bought-button').text('Не куплено');
                node.find('.bought-button').css("width", "124px");
            } else {
                node.find('.name').css("text-decoration", "none");
                node.find('.minus').css("visibility", "visible");
                node.find('.plus').css("visibility", "visible");
                node.find('.delete-button').show();
                node_last.show();

                node_bought.hide();
                node.find('.bought-button').text('Купленo');
                node.find('.bought-button').css("width", "80px");
            }
        });

        node.find('.plus').click(function() {
            var counter = parseInt(node.find('.number').text());
            counter++;
            changeNum(counter);

        });


        function changeNum(number) {
            node.find('.number').text(number);
            node_last.find('.last-item-count').text(number);
            node_bought.find('.bought-item-count').text(number);
        }

        node.find('.bl-product_label').click(function() {
            var but_name = node.find('.bl-buttons-boughted').text();
            if(but_name === "Купленo") {
                node.find('.name').hide();
                var name = node.find('.name').text();
                node.find('input').show().focus().val(name);
            }
        });

        node.find('input').focusout(function() {
            var new_name = node.find('input').val();
            if(new_name) {
                changeName(new_name);
            }
            node.find('input').hide();
            node.find('.name').show();
        });

        function changeName(name) {
            node.find('.name').text(name);
            node_last.find('.right-column-last-name').text(name);
            node_bought.find('.right-column-bought-name').text(name);
        }

        node.find('input').hide();

        LIST.append(node);

        var node_last = $(ANOTHER_ONE_LAST);
        node_last.find('.right-column-last-name').text(title);
        LIST_LAST.append(node_last);

        var node_bought = $(ANOTHER_ONE_BOUGHT);
        node_bought.find('.right-column-bought-name').text(title);
        node_bought.hide();
        LIST_BOUGHT.append(node_bought);
    }

    $('.add-button').click(function() {
        var FIELD = $('.add-field');
        var name = FIELD.val();
        if(name != "")
            addItem(name);
        FIELD.val('');
        FIELD.focus();
    });
});