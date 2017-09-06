windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneHalfRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneHalfRect.width = Math.floor(oneHalfRect.width / 2.0);
    oneHalfRect.x += oneHalfRect.width;
    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(oneHalfRect)) <= 1.0) {
        var oneThirdsRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        oneThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);
        oneThirdsRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - oneThirdsRect.width;
        
        var twoThirdsRect = SpectacleCalculationHelpers.copyRect(oneThirdsRect);
        twoThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 2 / 3.0);
        twoThirdsRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - twoThirdsRect.width;
        
        var threeQuartersRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        threeQuartersRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 3.0 / 4.0);
        threeQuartersRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - threeQuartersRect.width;
                                                                              
        var oneQuartersRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        oneQuartersRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 4.0);
        oneQuartersRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - oneQuartersRect.width;

        
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
}, "SpectacleWindowActionRightHalf");
