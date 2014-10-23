var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    textField: null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);

        textField = new ccui.TextField();
        textField.setTouchEnabled(true);
        textField.fontName = "Marker Felt";
        textField.placeHolder = "Input text here";
        textField.fontSize = 30;
        textField.x = size.width / 2;
        textField.y = size.height / 2;
        textField.addEventListener(this.textFieldEvent, this);

        textField.setMaxLengthEnabled(true);
        textField.setMaxLength(12);

        textField.setPasswordEnabled(true);
        textField.setPasswordStyleText("*");

        this.addChild(textField);

        return true;
    },

    textFieldEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.TextField.EVENT_ATTACH_WITH_IME:
                cc.log("Activate");

                break;

            case ccui.TextField.EVENT_DETACH_WITH_IME:
                cc.log("Deactivate");

                break;

            case ccui.TextField.EVENT_INSERT_TEXT:
                cc.log("Insert character");
                cc.log(textField.string);

                break;

            case ccui.TextField.EVENT_DELETE_BACKWARD:
                cc.log("Delect character");
                cc.log(textField.string);

                break;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

