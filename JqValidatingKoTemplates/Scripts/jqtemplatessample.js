var viewModel = {
    collect: ko.observableArray([
    {
        position: "position0",
        url: ko.observable("#"),
        description: ko.observable("Some Description")
    }]),
}

$(document).ready(function ()
{
    $.validator.messages.required = 'Required';

    $(document).delegate("#addData", "click", null, function ()
    {
        viewModel.collect.push(
       {
           position: "position" + viewModel.collect().length,
           url: ko.observable("#"),
           description: ko.observable("Some Description" + viewModel.collect().length)
       });
        return false;
    });

    ko.applyBindings(viewModel);

    $(document).delegate("#submitButton", "click", null, function ()
    {
        $.ajax({
            url: "Home/Index",
            contentType: "application/json",
            dataType: "json",
            data: {}
        });
    });
});