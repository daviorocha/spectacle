windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var sizes = [
        1 / 2,
        2 / 3,
        3 / 4,
        1 / 4,
        1 / 3,
    ];
                                                                              
    var boxes = [];
    for (var i = 0, l = sizes.length; i < l; i++) {
        var box = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
        box.width = Math.floor(visibleFrameOfDestinationScreen.width * sizes[i]);
        boxes.push(box);
    }
    
    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(boxes[0])) <= 1.0) {
        for (var i = 0, l = boxes.length; i < l; i++) {
            if (SpectacleCalculationHelpers.rectCenteredWithinRect(boxes[i], windowRect)) {
                return i < l - 1 ? boxes[i + 1] : boxes[0];
            }
        }
    }
    
    return boxes[0];
}, "SpectacleWindowActionLeftHalf");
