module.exports = {
    apps: [{
        watch: true,
        name: 'swagger',
        script: './index.ts',
        description: 'fastify-swagger-apis',
        version: '1.0.0',
        namespace: 'mynamespace',
        // instances: 0,
        exec_mode: 'cluster'
    }]
}