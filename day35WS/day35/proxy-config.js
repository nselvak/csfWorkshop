module.exports = [
    {
        context: ['/api/**', '/api/v1/*'],
        target: 'http://localhost:8080',
        secure: false,
    }
]