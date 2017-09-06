windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneHalfRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneHalfRect.width = Math.floor(oneHalfRect.width / 2.0);
    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(oneHalfRect)) <= 1.0) {
        var oneThirdsRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        oneThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);
                                                                              
        var twoThirdsRect = SpectacleCalculationHelpers.copyRect(oneThirdsRect);
        twoThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 2 / 3.0);

        var threeQuartersRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        threeQuartersRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 3.0 / 4.0);

        var oneQuartersRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        oneQuartersRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 4.0);
                                                                              
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneHalfRect, windowRect)) {
            return twoThirdsRect;
        }
                                                                              
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(twoThirdsRect, windowRect)) {
            return threeQuartersRect;
        }

        if (SpectacleCalculationHelpers.rectCenteredWithinRect(threeQuartersRect, windowRect)) {
            return oneQuartersRect;
        }
                                                                              
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneQuartersRect, windowRect)) {
            return oneThirdsRect;
        }
    }
    return oneHalfRect;
}, "SpectacleWindowActionLeftHalf");
