const {describe, expect, it} = require('@jest/globals');
const path = require('path');
const {spawn} = require('child_process');

// Run using Jest

describe('logger behaviour', () => {
    it('test logger', done => {
        const testAppFilePath = path.join(__dirname, 'log.write.js',)
        const testApp = spawn('node', [testAppFilePath])
        testApp.stdout.on('data', data => {
            expect(data.toString().match(/WRITE .*? - Test logger cyan/)).not.toBeNull();
            testApp.kill('SIGINT')
            done()
        })
    })
    it('test prefix', done => {
        const testAppFilePath = path.join(__dirname, 'log.prefix.js',)
        const testApp = spawn('node', [testAppFilePath])
        testApp.stdout.on('data', data => {
            expect(data.toString().match(/WRITE .*? - some_prefix - Test logger cyan/)).not.toBeNull();
            testApp.kill('SIGINT')
            done()
        })
    })
    it('test log', done => {
        const testAppFilePath = path.join(__dirname, 'log.log.js',)
        const testApp = spawn('node', [testAppFilePath])
        testApp.stdout.on('data', data => {
            expect(data.toString().match(/LOG .*? - Test log/)).not.toBeNull();
            testApp.kill('SIGINT')
            done()
        })
    })
    it('test warn', done => {
        const testAppFilePath = path.join(__dirname, 'log.warn.js',)
        const testApp = spawn('node', [testAppFilePath])
        testApp.stdout.on('data', data => {
            expect(data.toString().match(/WARN .*? - Test warn/)).not.toBeNull();
            testApp.kill('SIGINT')
            done()
        })
    })
    it('test error', done => {
        const testAppFilePath = path.join(__dirname, 'log.error.js',)
        const testApp = spawn('node', [testAppFilePath])
        testApp.stderr.on('data', data => {
            expect(data.toString().match(/ERROR .*? - Test error/)).not.toBeNull();
            testApp.kill('SIGINT')
            done()
        })
    })
});