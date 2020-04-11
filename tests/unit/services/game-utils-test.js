import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | game-utils', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:game-utils');
    assert.ok(service);
  });
});
