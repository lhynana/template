// PlaceHolder 
//Support placeholder or not

function isPlaceholder() {
        var input = document.createElement('input');
        return 'placeholder' in input;
}

if (!isPlaceholder()) {

    $("input").not("input[type='password']").each(function() {
        var $this = $(this);
        if ($this.val() == "" && $this.attr("placeholder") != "") {

            $this.val($this.attr("placeholder"));

            setTimeout(function() {
                $this.focus(function() {
                    if ($this.val() == $this.attr("placeholder")) {
                        $this.val("");
                    }
                })

            }, 100);

            $this.blur(function() {
                if ($this.val() == "") {
                    $this.val($this.attr("placeholder"));
                }
            });
        }
    });


    $("input[type='password']").each(function() {
        var $this = $(this),
            cName = $this.attr("class"),
            pName = cName + "_placeholder",
            pValue = $this.attr("placeholder");

        $this.after('<input class="' + pName +'" type="text" value='+ pValue +' autocomplete="off" />');
        $this.hide();

        $("." + pName).focus(function(event) {
            $(this).hide();
            $("." + cName).show().focus();
        });

        $("." + cName).blur(function(event) {
            if( $(this).val() == "" ) {
                $(this).hide();
                $("." + pName).show();
            }
        });


    });


}