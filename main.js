$(document).ready(function () {
    var list = $('.buy-list');
    var listLast = $('.right-column.last');
    var listBought = $('.right-column.bought');

    var oneItem = $('#item').html();
    var oneLast = $('#last').html();
    var oneBought = $('#bought').html();

    addItem('Pomydory');
    addItem('Kartoplya');
    addItem('Moloko');
    addItem('Ogirok');

    function addItem(title) {
        var node = $(oneItem);

        node.find('.label').text(title);
        node.find('.delete-button').click(function() {
            node.remove();
            node_last.remove();
            node_bought.remove();
        });
        node.find('.bought-button').click(function() {
            var but_name = node.find('.bought-button').text();
            if(but_name === "Купленo") {
                node.find('.label').css("text-decoration", "line-through");
                node.find('.minus').css("visibility", "hidden");
                node.find('.plus').css("visibility", "hidden");
                node.find('.delete-button').hide();
                node_last.hide();

                node_bought.show();
                node.find('.bought-button').text('Не куплено');
                node.find('.bought-button').css("width", "124px");
            } else {
                node.find('.label').css("text-decoration", "none");
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

        node.find('.label').click(function() {
            var but_name = node.find('.bought-button').text();
            if(but_name === "Купленo") {
                node.find('.label').hide();
                var name = node.find('.label').text();
                node.find('input').show().focus().val(name);
            }
        });

        node.find('input').focusout(function() {
            var new_name = node.find('input').val();
            if(new_name) {
                changeName(new_name);
            }
            node.find('input').hide();
            node.find('.label').show();
        });

        function changeName(name) {
            node.find('.label').text(name);
            node_last.find('.right-column-last-name').text(name);
            node_bought.find('.right-column-bought-name').text(name);
        }

        node.find('input').hide();

        list.append(node);

        var node_last = $(oneLast);
        node_last.find('.right-column-last-name').text(title);
        listLast.append(node_last);

        var node_bought = $(oneBought);
        node_bought.find('.right-column-bought-name').text(title);
        node_bought.hide();
        listBought.append(node_bought);
    }

    $('.add-button').click(function() {
        var field = $('.add-field');
        var name = field.val();
        if(name != "")
            addItem(name);
        field.val('');
        field.focus();
    });
});