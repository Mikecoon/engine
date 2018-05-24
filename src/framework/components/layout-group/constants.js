Object.assign(pc, {
    /**
     * @enum pc.ORIENTATION
     * @name pc.ORIENTATION_HORIZONTAL
     * @description Horizontal orientation.
     */
    ORIENTATION_HORIZONTAL: 0,
    /**
     * @enum pc.ORIENTATION
     * @name pc.ORIENTATION_VERTICAL
     * @description Vertical orientation.
     */
    ORIENTATION_VERTICAL: 1,
    /**
     * @enum pc.FITTING
     * @name pc.FITTING_NONE
     * @description Disable all fitting logic.
     */
    FITTING_NONE: 0,
    /**
     * @enum pc.FITTING
     * @name pc.FITTING_STRETCH
     * @description Stretch child elements to fit the parent container
     */
    FITTING_STRETCH: 1,
    /**
     * @enum pc.FITTING
     * @name pc.FITTING_SHRINK
     * @description Shrink child elements to fit the parent container
     */
    FITTING_SHRINK: 2,
    /**
     * @enum pc.FITTING
     * @name pc.FITTING_BOTH
     * @description Apply both STRETCH and SHRINK fitting logic where applicable.
     */
    FITTING_BOTH: 3
});
