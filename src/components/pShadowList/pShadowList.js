
function newResizeObserver(callback) {
  // Skip this feature for browsers which
  // do not support ResizeObserver.
  // https://caniuse.com/#search=resizeobserver
  if (typeof ResizeObserver === 'undefined') return;

  return new ResizeObserver(e => e.map(callback));
}

export default {
  name: 'ScrollShadow',
  data() {
    return {
      width: undefined,
      height: undefined,
      shadow: {
        top: false,
        right: false,
        bottom: false,
        left: false,
      },
    };
  },
  mounted() {
    // Check if shadows are necessary after the element is resized.
    const scrollContainerObserver = newResizeObserver(this.toggleShadow);
    if (scrollContainerObserver) {
      scrollContainerObserver.observe(this.$refs.scrollContainer);
      // Cleanup when the component is destroyed.
      this.$once('hook:destroyed', () => scrollContainerObserver.disconnect());
    }

    // Recalculate the container dimensions when the wrapper is resized.
    const wrapObserver = newResizeObserver(this.calcDimensions);
    if (wrapObserver) {
      wrapObserver.observe(this.$el);
      // Cleanup when the component is destroyed.
      this.$once('hook:destroyed', () => wrapObserver.disconnect());
    }
  },
  methods: {
    async calcDimensions() {
      // Reset dimensions for correctly recalculating parent dimensions.
      this.width = undefined;
      this.height = undefined;
      await this.$nextTick();

      this.width = `${this.$el.clientWidth}px`;
      this.height = `${this.$el.clientHeight}px`;
    },
    // Check if shadows are needed.
    toggleShadow() {
      const hasHorizontalScrollbar =
        this.$refs.scrollContainer.clientWidth <
        this.$refs.scrollContainer.scrollWidth;
      const hasVerticalScrollbar =
        this.$refs.scrollContainer.clientHeight <
        this.$refs.scrollContainer.scrollHeight;

      const scrolledFromLeft =
        this.$refs.scrollContainer.offsetWidth +
        this.$refs.scrollContainer.scrollLeft;
      const scrolledFromTop =
        this.$refs.scrollContainer.offsetHeight +
        this.$refs.scrollContainer.scrollTop;

      const scrolledToTop = this.$refs.scrollContainer.scrollTop === 0;
      const scrolledToRight =
        scrolledFromLeft >= this.$refs.scrollContainer.scrollWidth;
      const scrolledToBottom =
        scrolledFromTop >= this.$refs.scrollContainer.scrollHeight;
      const scrolledToLeft = this.$refs.scrollContainer.scrollLeft === 0;

      this.shadow.top = hasVerticalScrollbar && !scrolledToTop;
      this.shadow.right = hasHorizontalScrollbar && !scrolledToRight;
      this.shadow.bottom = hasVerticalScrollbar && !scrolledToBottom;
      this.shadow.left = hasHorizontalScrollbar && !scrolledToLeft;
    },
  },
};

