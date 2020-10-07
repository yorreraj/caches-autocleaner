/**
 * author: Yorre Rajaonarivelo
 * file: index.js
 * date: 07-10-2020
 * 
 */

const chokidar = require('chokidar')
const lignator = require('lignator')
const { pathsToWatch, pathsToRemove } = require('./config')

const bootstrap = () => {
    const watcher = chokidar.watch(pathsToWatch, {
        persistent: true
    });

    watcher.on('all', () => {
        pathsToRemove.forEach(path => {
            lignator.remove(path, false);
        })
    })

    console.log("Le script est lancer. Pour couper appuyer sur 'crtl+x'")   
}

bootstrap();
