module.exports = function(RED) {

    function TabNode(config) {
        RED.nodes.createNode(this, config);
        this.config = {
            name: config.name,
            order: config.order || 0,
            icon: config.icon || '',
            role: config.role || ''
        };
    }

    RED.nodes.registerType("ui_tab", TabNode);
};
