import discourseComputed from "discourse-common/utils/decorators";
import EmberObject from "@ember/object";

export default EmberObject.extend({
  @discourseComputed("topic.thumbnails")
  hasThumbnail(thumbnails) {
    return !!thumbnails;
  },

  @discourseComputed("topic.thumbnails")
  fallbackSrc(thumbnails) {
    return thumbnails.lastObject.url;
  },

  @discourseComputed("topic")
  url(topic) {
    return topic.linked_post_number
      ? topic.urlForPostNumber(topic.linked_post_number)
      : topic.get("lastUnreadUrl");
  },
});
