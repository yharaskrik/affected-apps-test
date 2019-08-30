module.exports = {
  name: 'affected',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/affected',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
